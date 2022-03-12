(function() { window.processMinMax = function() {} })()

function setCookie(a, b, c, d, e, f) {
    document.cookie = a + "=" + encodeURIComponent(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "")
}

function replace_specialChar(a) {
    var b, c;
    for (b = 0; b < spChars.length; b++)
        c = new RegExp("(\\" + spChars[b] + ")", "g"),
        a = a.replace(c, spToChars[b]);
    return /^[A-Za-z\s\.,]+$/.test(a) && (a = a.replace(/\s+/g, " ")),
        a = a.replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]/gi, ""),
        $.trim(a)
}

function getKsAnswer(a) {
    return a ? (a = a.dbc2sbc(),
        a = a.replace(/\</g, "＜")
        .replace(/\>/g, "＞")
        .replace(/\&/g, "＆")
        .replace(/\!/g, "！")
        .replace(/\^/g, "＾")
        .replace(/\$/g, "＄")
        .replace(/\}/g, "｝")) : ""
}

function pushHistory() {
    if ("miniprogram" !== window.__wxjs_environment && !window.IsPar && window == window.top) {
        var a = {
            title: "title",
            url: "#"
        };
        window.history.pushState(a, "title", "")
    }
}

function clickJp(a) {
    window._czc && _czc.push(["_trackEvent", "未完成填写", "点击"]);
    var b = a.getAttribute("vhref");
    return window.location = b,
        !0
}

function show_zhezhao_tip(a) {
    var b, c, d, e, f, g, h, i, j, k;
    if (a) {
        if ($("#zhezhaotip")[0])
            return;
        b = "",
            c = "",
            "miniprogram" === window.__wxjs_environment && (c = "&minip=1"),
            b = "<div style='width: 100%;height:67px;text-align: center;'><a href='javascript:' onclick='return clickJp(this);' vhref='/newsojiang/mobile/getaward.aspx?sType=3&activity=" + activityId + c + "' style='font-size: 14px;color: #ff7b8f;display:block;'>" + "<div style='text-align: center;padding-top:10px' ><img src='//image.wjx.com/images/mobile/liwu.png' alt='' height='16px' width='16px' style='top: 2px;position: relative;margin-right:4px;' />" + wjxlang.getAward + "</div>" + "<div style='font-size: 12px;color: #adadad;margin-top:4px;'>" + wjxlang.nextcomplete + "</div></a>" + "</div>",
            d = "border-bottom: 1px solid #D9E4FF;height:126px;",
            e = "300px",
            window.canAward && window.allowAward || (b = "",
                d = "height:126px;",
                e = "250px"),
            f = window.hasTouPiao ? wjxlang.isquitTp : wjxlang.isquitTx,
            g = "<div style='width:100%;'><div class='mainBgColor' style='background:#3064DB;height:80px;color:#fff;text-align:center;padding-top:30px;'>" + f + "</div>" + "<div style='" + d + "'><div class='mainBgColor' style='margin:30px auto 0; background-color: #1D66F0; font-size: 16px; color: #fff; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='show_zhezhao_tip(false);'>" + (window.hasTouPiao ? wjxlang.keeponTp : wjxlang.keeponTx) + "</div>" + "<div style='margin:16px auto 0; background-color: #EBF2FF; font-size: 16px; color: #C0C0C0; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='closeTipWindow(true);'>" + wjxlang.surequit + "</div>" + "</div></div>",
            h = "<div class='popuptip' style='width:300px;background:#fff;border-radius: 10px;margin: auto;position: absolute; z-index: 9999;overflow: hidden;height:" + e + ";'>" + g + b + "</div>",
            $("body")
            .append('<div style="z-index:10000;top: 0px;left: 0px;position: fixed;width: 100%;height: 100%;" id="zhezhaotip"><div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;opacity: 0.5;background-color: #000;"></div>' + h + "</div>"),
            i = $("html")
            .height(),
            j = $(window)
            .height(),
            k = 100,
            k = j > i ? j : i,
            $("#zhezhaotip")
            .height(k),
            $(".popuptip")
            .css("left", ($(window)
                .width() - $(".popuptip")
                .width()) / 2),
            $(".popuptip")
            .css("top", ($(window)
                .height() - $(".popuptip")
                .height()) / 2),
            hasShowTip || window._czc && _czc.push(["_trackEvent", "未完成填写", "加载"]),
            setLastPop(),
            hasShowTip = !0
    } else
        $("#zhezhaotip")
        .remove()
}

function closeTipWindow(a) {
    var b = wjxlang.isleave;
    window.WeixinJSBridge ? a ? document.referrer && !window.access_token ? history.go(-2) : (WeixinJSBridge.call("closeWindow"),
        wx.closeWindow()) : confirmnew(b, function() {
        document.referrer && !window.access_token ? history.go(-2) : (WeixinJSBridge.call("closeWindow"),
            wx.closeWindow())
    }) : (needGoOut = !0,
        show_zhezhao_tip(!1),
        window.close && window.close(),
        window.history.back())
}

function setLastPop() {}

function checkCanPop() {
    return window.localStorage ? localStorage["wjxuserpub"] ? !1 : window.location.href.indexOf("?pvw=1") > -1 || window.location.href.indexOf("&pvw=1") > -1 ? !1 : window.isVip ? !1 : 1 == langVer ? !1 : window.canAward ? !0 : !1 : !1
}

function listenTpPopState() {
    window.addEventListener("popstate", function() {
        isPageRun && (window.location = getTpMainUrl())
    })
}

function setMatrixFill() {
    (!curMatrixError || curMatrixFill.fillvalue) && $("#divMatrixRel")
        .hide()
}

function setChoice(a) {
    if (-1 != a.selectedIndex) {
        $(a)
            .closest(".ui-select")
            .hasClass("initStyle") && $(a)
            .closest(".ui-select")
            .removeClass("initStyle");
        var b = $(a.parentNode)
            .prev("input");
        b.val(a.value),
            b.trigger("change")
    }
}

function showMatrixHeader(a, b) {
    var c, d, e, g, i, j, k, l, m, n, p, q, r;
    if (("6" == $(b)
        .attr("type") || "5" == $(b)
        .attr("type")) && !window.IsPar) {
        if (c = $(a)
            .offset(),
            d = c.top - 9,
            e = c.left,
            g = $(a)
            .width(),
            "6" == $(b)
            .attr("type")) {
            if ("6" == $(a)
                .attr("mode"))
                return;
            d = c.top - 9,
                $(window)
                .width(),
                i = $(a)
                .parent()
                .parent(),
                j = $("td", i)
                .index($(a)
                    .parent()),
                k = $("table.matrix-rating", b)[0],
                l = k.rows[0].cells[j],
                m = $(l)
                .text(),
                n = 12 * m.length,
                (n - $(a)
                    .width()) / 2,
                e = c.left + g / 2
        } else
            !$(a)
            .attr("mode") || "2" != $(a)
            .attr("mode") && "3" != $(a)
            .attr("mode") && "4" != $(a)
            .attr("mode") ? $(a)
            .attr("mode") && "6" == $(a)
            .attr("mode") ? ($(window)
                .width(),
                c = $(a)
                .offset(),
                d = c.top - 9,
                m = $(a)
                .attr("title"),
                n = 12 * m.length,
                e = c.left + g / 2) : (p = $(a)
                .height(),
                19 == p && (p = 24),
                d = c.top - 9,
                m = $(a)
                .attr("title"),
                n = 12 * m.length,
                e = c.left + g / 2) : ($(window)
                .width(),
                c = $(a)
                .offset(),
                d = c.top - 9,
                m = $(a)
                .attr("title"),
                n = 12 * m.length,
                e = c.left + g / 2);
        $("#divMatrixHeader")
            .html(m),
            q = $("#divMatrixHeader")
            .outerHeight(),
            r = $("#divMatrixHeader")
            .outerWidth(),
            d -= q,
            e -= r / 2,
            $("#divMatrixHeader")[0].referTopic = getTopic($(b)),
            $("#divMatrixHeader")
            .css("top", d + "px")
            .css("left", e + "px")
            .show()
    }
}

function showMatrixFill(a, b) {
    var c, d, e, f, g;
    if (b) {
        if (curMatrixError)
            return;
        curMatrixError = a
    }
    curMatrixFill = a,
        c = a.fillvalue || "",
        $("#matrixinput")
        .val(c),
        d = $(a)
        .attr("req"),
        e = "请注明...",
        d = a.getAttribute("req"),
        d && (e = "请注明...[必填]"),
        1 == langVer && (e = "Please specify"),
        matrixinput.setAttribute("placeholder", e),
        f = $(a)
        .offset(),
        g = f.top - $(a)
        .height() + 45,
        $("#divMatrixRel")
        .css("top", g + "px")
        .css("left", "0")
        .show(),
        $(window)
        .width() >= 800 && $("#divMatrixRel")
        .css({
            width: "500px",
            left: "50%",
            "margin-left": "-250px"
        })
}

function refresh_validate(a) {
    !window.useAliVerify && a ? (useAliVerify = 1,
        captchaOjb || loadSmartCaptcha(),
        $("#captcha")
        .show()) : window.useAliVerify && (isCaptchaValid = !1,
        captchaOjb && captchaOjb.reload())
}

function showCaptcha() {
    captchaOjb || loadSmartCaptcha(),
        voteData()
}

function loadSmartCaptcha() {
    var a, b;
    captchaOjb = new smartCaptcha({
            renderTo: "#captcha",
            default_txt: smdefaultTxt,
            success_txt: smsuccessTxt,
            scaning_txt: smscaningTxt,
            success: function(a) {
                isCaptchaValid || (isCaptchaValid = !0,
                    nc_token = NVC_Opt.token,
                    nc_csessionid = a.sessionId,
                    nc_sig = a.sig,
                    verifyControl ? (verifyControl.sendActivitySms(1),
                        $("#captcha")
                        .hide(),
                        $("#captchaOut")
                        .hide()) : 0 == hasSubmitTimes && (hasSubmitTimes++,
                        $("#ctlNext")
                        .trigger("click")))
            }
        }),
        captchaOjb.init(),
        a = $(window)
        .width(),
        b = (a - 306) / 2,
        $("body")
        .hasClass("hasbgpic") && (b = (a - .08 * $(window)
            .width() - 302) / 2),
        window.isChuangGuan >= 3 && (b = (a - 36 - 302) / 2),
        a >= 800 && (b = 197),
        b > 0 && $("#captcha")
        .css("padding-left", b + "px"),
        $("#captcha")
        .css("margin-bottom", "25px"),
        $("#captcha")
        .hide()
}

function processRadioInput(a, b) {
    a.prevRadio && a.prevRadio.itemText && a.prevRadio != b && (a.prevRadio.itemText.pvalue = a.prevRadio.itemText.value,
            a.prevRadio.itemText.value = ""),
        b.itemText && b != a.prevRadio && (b.itemText.value = b.itemText.pvalue || ""),
        a.prevRadio = b
}

function addClearHref(a) {
    var b, c;
    if (!(window.isKaoShi && "1" != $(a)
        .attr("nc") || window.isinterview)) {
        if (a.hasClearHref)
            return a.clearHref.style.display = "",
                void 0;
        b = "1" == $(a)
            .attr("maxdiff"),
            c = document.createElement("a"),
            c.title = validate_info_submit_title2,
            c.style.color = "#999999",
            c.style.marginLeft = "16px",
            c.innerHTML = "[" + type_radio_clear + "]",
            b && (c.innerHTML = wjxlang.rechiose),
            c.href = "javascript:void(0);",
            a.hasClearHref = !0,
            b ? (c.className = "mdrechioce",
                $(a)
                .find(".mdpageWrap")
                .append(c)) : $(".field-label", a)
            .append(c),
            a.clearHref = c,
            c.onclick = function() {
                clearFieldValue(a, !0),
                    displayRelationByType(a),
                    TotalValBoxInit(),
                    referTitle(a),
                    this.style.display = "none",
                    jumpAny(!1, a),
                    saveAnswer(a)
            }
    }
}

function referTitle(a, b) {
    var c, d, e, f, g;
    if ($(a)[0]._titleTopic)
        for (c = "",
            void 0 == b ? (d = "input:checked",
                "11" == $(a)
                .attr("type") && (d = "span.sortnum-sel"),
                $(d, a)
                .each(function() {
                    var f, g, h, d = $(this)
                        .parent()
                        .next(),
                        e = d.html();
                    "11" != $(a)
                        .attr("type") && $(d)
                        .attr("for") || (e = d.text()),
                        c && (c += "&nbsp;"),
                        c += e,
                        f = $(this)
                        .attr("rel"),
                        f && (g = document.getElementById(f),
                            g && (h = g.value,
                                h && h != defaultOtherText && (c += "[" + h + "]")))
                })) : c = b,
            e = 0; e < $(a)[0]._titleTopic.length; e++)
            f = $(a)[0]._titleTopic[e],
            g = document.getElementById("spanTitleTopic" + f),
            g && (g.innerHTML = c)
}

function emptyTitle() {
    var a, b;
    needTip() || (a = window.location.host,
        b = a.indexOf(".wjx.cn") > -1 || a.indexOf(".wjx.top") > -1,
        b && (isWeiXin || window.top != window) && $("title")
        .text(""))
}

function checkPeiE(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n;
    if (!hasPeiEFull) {
        if (c = "",
            d = "",
            b && "1" == a.attr("req") && "1" == a.attr("peie") && "" == a[0].style.display && (e = !0,
                $(b, a)
                .each(function() {
                    var a = this.disabled;
                    return a || "-2" == this.value ? void 0 : (e = !1,
                        !1)
                }),
                e && (hasPeiEFull = !0,
                    f = a.attr("id")
                    .replace("div", ""),
                    window.cityPeiEQues)))
            for (g = cityPeiEQues.split(";"),
                h = 0; h < g.length; h++)
                if (i = g[h].split("|"),
                    3 == i.length && f == i[0]) {
                    d = i[2],
                        c = i[1];
                    break
                }
        b && "1" == a.attr("req") && "1" == a.attr("haspeie") && "" == a[0].style.display && (e = !0,
                j = a.attr("id"),
                $(b, a)
                .each(function() {
                    var b, c, d, f, g, h, a = $(this)
                        .attr("attrpeie");
                    if (!a)
                        return e = !1,
                            !1;
                    if (b = a.split(";"),
                        d = b[0].split("|"),
                        c = "div" + d[0],
                        j == c) {
                        if (f = this.disabled,
                            !f && "-2" != this.value)
                            return e = !1,
                                !1
                    } else if (g = $("#" + c + " input[type='radio']"),
                        0 == g.length && (g = $("#" + c + " input[type='checkbox']")),
                        0 == g.length && (g = $("#" + c + " input[type='hidden']")),
                        h = g.length,
                        0 == h && (g = $("#" + c + " option"),
                            h = g.length > 0 ? g.length - 1 : g.length),
                        b.length < h)
                        return e = !1,
                            !1
                }),
                e && (hasPeiEFull = !0)),
            k = 0,
            "1" == a.attr("qingjing") && "" == a[0].style.display && "1" == a.attr("full") && (hasPeiEFull = !0,
                k = 1),
            hasPeiEFull && (l = wjxlang.peiemessage,
                window.isPromoteing && (m = a.attr("id")
                    .replace("div", ""),
                    n = "/handler/endwjxactivitypromote.ashx?ActivityId=" + activityId + "&sjts=" + prsjts + "&sjsign=" + prsjsign + "&city=" + c + "&ruletype=" + d + "&quid=" + m,
                    window.cityPeiEQues && (n += "&citypeie=" + encodeURIComponent(window.cityPeiEQues)),
                    $.ajax({
                        type: "GET",
                        url: n,
                        async: !1,
                        success: function() {}
                    })),
                k && (l = wjxlang.peiemessage_qingjing),
                $(divTip)
                .html(l)
                .show())
    }
}

function iosNumberKey(a) {
    var b = isIosSystem();
    b && a.each(function(a, b) {
        "number" == $(b)
            .attr("type") && ($(b)
                .on("input", function(a) {
                    var b, c;
                    a.preventDefault(),
                        $(this)
                        .attr("type", "text"),
                        b = /\-|^(\-|\+)?\d+(\.\d+)?$/,
                        c = $(this)
                        .val(),
                        b.test(c) || $(this)
                        .val("")
                }),
                $(b)
                .on("blur", function(a) {
                    a.preventDefault(),
                        $(this)
                        .attr("type", "number")
                }))
    })
}

function groupMutual(a) {
    var c, b = $(a)
        .hasClass("ui-checkbox") ? a : $(a)
        .closest(".ui-checkbox")[0];
    $(b)
        .parent()
        .children()
        .eq(0)
        .hasClass("divlabel") && (c = $(b)
            .siblings(),
            c.each(function(a, b) {
                if ($(b)
                    .find("input[type='checkbox']")
                    .prop("checked")) {
                    $(b)
                        .find("input[type='checkbox']")
                        .prop("checked", !1);
                    var c = $(b)
                        .find("input.OtherText")[0];
                    c && ($(b)
                            .find("input[type='checkbox']")
                            .prop("checked") ? c.value = c.pvalue || "" : (c.pvalue = c.value,
                                c.value = "")),
                        $(b)
                        .find(".jqcheck")[0].className = "jqcheck"
                }
            }))
}

function getTpDetailUrl(a) {
    var d, b = $(window)
        .scrollTop(),
        c = window.location.pathname;
    return window.relusername ? (d = window.tpScrollTop || 0,
            c = location.href.replace("&ptfpar=1&tptop=" + d, ""),
            c += "&tpii=" + a + "&ftppar=1&tptop=" + b) : c += "?tpii=" + a + "&ftppar=1&tptop=" + b,
        window.IsPar && (c += "&par=1"),
        window.sojumpParm && (c += "&sojumpparm=" + encodeURIComponent(sojumpParm),
            window.parmsign && (c += "&parmsign=" + encodeURIComponent(parmsign)),
            window.endTs && (c += "&endts=" + endTs)),
        window.udsid && (c += "&udsid=" + window.udsid),
        location.href.indexOf("wg=1") > -1 && (c += "&wg=1"),
        c
}

function getTpMainUrl() {
    var a = window.location.pathname,
        b = window.tpScrollTop || 0;
    return window.relusername ? (a = location.href.replace("&tpii=" + window.touPiaoItemIndex + "&ftppar=1&tptop=" + b, ""),
            -1 == a.indexOf("ptfpar=1") && (a += "&ptfpar=1&tptop=" + b)) : a += "?ptfpar=1&tptop=" + b,
        window.IsPar && (a += "&par=1"),
        window.sojumpParm && (a += "&sojumpparm=" + encodeURIComponent(sojumpParm),
            window.parmsign && (a += "&parmsign=" + encodeURIComponent(parmsign)),
            window.endTs && (a += "&endts=" + endTs)),
        window.udsid && (a += "&udsid=" + window.udsid),
        location.href.indexOf("wg=1") > -1 && (a += "&wg=1"),
        a
}

function viewTpDetail(a, b) {
    return a = window.event || a,
        location.href = getTpDetailUrl(b),
        a.preventDefault(),
        a.stopPropagation(),
        !1
}

function voteMul(a) {
    confirmnew(wjxlang.mtit_tp, function() {
        a ? voteData() : groupAnswer(1)
    }, function() {})
}

function voteSin(a) {
    var b = wjxlang.mtit_istp,
        c = $("#voteMes .vote_dec")
        .text();
    c && (b = wjxlang.mtit_istp_to.replace("{0}", c)),
        confirmnew(b, function() {
            a ? voteData() : groupAnswer(1)
        }, function() {})
}

function voteData() {
    var a = 0,
        b = $(window)
        .height(),
        c = $(window)
        .width(),
        d = (b - 60) / 2 + a,
        e = (c - 300) / 2;
    0 > e && (e = 0),
        $("#captchaWrap")
        .css({
            left: e + "px",
            top: d + "px",
            display: "block",
            position: "fixed"
        }),
        $("#captchaOut")
        .css({
            left: "0px",
            top: "0px",
            display: "block",
            height: "100%",
            width: "100%",
            "z-index": 1,
            position: "fixed",
            background: "rgba(0,0,0,0.8)"
        }),
        $("#captcha")
        .fadeIn("fast")
        .css({
            "padding-left": 0,
            display: "flex",
            "justify-content": "center",
            width: "100%"
        }),
        $("#captchaTit")
        .show(),
        $("#captchaOut")
        .unbind("click"),
        $("#captchaWrap")
        .click(function(a) {
            a.stopPropagation()
        }),
        $("#captchaOut")
        .click(function(a) {
            a.stopPropagation(),
                $(this)
                .hide()
        })
}

function isIosSystem() {
    var c, a = navigator.userAgent;
    return navigator.appVersion,
        c = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        c ? !0 : void 0
}

function isYoukuVideo(a) {
    return a = a.toLowerCase(),
        a.indexOf("player.youku.com") > -1 || a.indexOf("v.qq.com") > -1 || a.indexOf("/wjx/join/") > -1 ? !0 : void 0
}

function iosIframeVideoHack() {
    var b, c, a = isIosSystem();
    if (!a)
        return !1;
    for (b = document.getElementsByTagName("iframe"),
        c = 0; c < b.length; c++)
        if (isYoukuVideo(b[c].src))
            return !0;
    return !1
}

function adjustVideoHeight(a) {
    var b, c, d, e, f;
    if (!a.hasAdjust && $(a)
        .is(":visible"))
        for (a.hasAdjust = !0,
            b = a.getElementsByTagName("iframe"),
            c = 0; c < b.length; c++)
            "2" == b[c].getAttribute("video") && (b[c].style.width = "100%",
                d = b[c].clientWidth,
                e = b[c].parentNode,
                e && "none" == e.style.display && (d = Math.min($(window)
                    .width(), 400) - 50),
                f = parseInt(d) / 640 * parseInt(b[c].height) + 15,
                f > 15 && b[c].setAttribute("style", "height:" + parseInt(f) + "px !important"))
}

function replaceImg(a) {
    var b = "http://pubimageqiniu.paperol.cn",
        c = "//pubnewfr.paperol.cn";
    0 == a.src.indexOf("http://pubssl.sojump.com") || 0 == a.src.indexOf("https://pubssl.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.cn") || 0 == a.src.indexOf("http://pubssl.sojump.cn") ? a.src = a.src.replace("http://pubssl.sojump.com", b)
        .replace("https://pubssl.sojump.com", b)
        .replace("http://pubimage.sojump.com", b)
        .replace("http://pubimage.sojump.cn", b)
        .replace("http://pubssl.sojump.cn", b) : (0 == a.src.indexOf("http://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.cn") || 0 == a.src.indexOf("http://pubalifr.sojump.cn") || 0 == a.src.indexOf("https://pubali.sojump.cn") || 0 == a.src.indexOf("https://pubalifr.sojump.cn")) && (a.src = a.src.replace("http://pubalifr.sojump.com", c)
            .replace("https://pubalifr.sojump.com", c)
            .replace("http://pubali.sojump.com", c)
            .replace("https://pubali.sojump.com", c)
            .replace("http://pubali.sojump.cn", c)
            .replace("https://pubali.sojump.cn", c)
            .replace("http://pubalifr.sojump.cn", c)
            .replace("https://pubalifr.sojump.cn", c))
}

function showAnswer(a, b) {
    var c, d, e;
    if (window.isChuangGuan && (c = 3 == window.isChuangGuan,
        4 != window.isChuangGuan && "1" == a.attr("ceshi"))) {
        if (2 == window.isChuangGuan)
            return canNext(a, b),
                void 0;
        d = $(a)[0],
            d.confirmButton || (e = document.createElement("a"),
                c ? e.className = "lxEnsureBtn mainBgColor" : (e.style.marginTop = "5px",
                    e.className = "sumitbutton cancle"),
                d.insertBefore(e, d.lastChild),
                d.confirmButton = e,
                e.innerHTML = wjxlang.ensure,
                fixBottom(),
                e.onclick = function() {
                    var e, f, g, h, i, j;
                    (0 != $(a)
                        .find("input[type='radio']:checked")
                        .length || 0 != $(a)
                        .find("input[type='checkbox']:checked")
                        .length) && (d.hasConfirm = !0,
                        hasConfirmBtn = !0,
                        e = !0,
                        f = "",
                        g = "",
                        b.each(function() {
                            var a = "1" == this.getAttribute("ans"),
                                b = $("input", this)[0],
                                c = $(".label[for]", this)
                                .text();
                            /^[A-Z][\.、．\s]/.test(c) && (c = c.substring(0, 1)),
                                a ? (b.checked ? (g && (g += "｜"),
                                        g += c) : e = !1,
                                    f && (f += "｜"),
                                    f += c) : b.checked && (e = !1)
                        }),
                        d.correctAnswer || (h = document.createElement("div"),
                            h.style.marginTop = "10px",
                            d.insertBefore(h, d.lastChild),
                            d.correctAnswer = h),
                        i = e ? "<img style='width:20px;vertical-align:middle' src='/images/comImg/lxright.png'/><span style='color:#01AD56;vertical-align:middle;margin-left:4px;'>" + wjxlang.lx_answer_right + "</span>" : "<img style='width:20px;vertical-align:middle' src='/images/comImg/lxerror.png'/><span style='color:#FF4040;vertical-align:middle;margin-left:4px;'>" + wjxlang.lx_answer_error.replace("{0}", f) + "</span>",
                        d.correctAnswer.innerHTML = i,
                        c && $(this)
                        .hide(),
                        j = document.getElementById("divjx" + d.id.replace("div", "")),
                        j && (j.style.display = ""),
                        fixBottom())
                }
            )
    }
}

function restoreAnswer() {
    var b, c, d, e, f, g, h, i, j, k, a = null;
    if (window.joinIdnew && window.answertext)
        a = window.answertext;
    else {
        if (!window.localStorage)
            return null;
        if (wjxdata.isolduser()) {
            if (b = localStorage["wjxtempanswerid"],
                b != activityId)
                return null;
            if (window.randomMode)
                return;
            if (c = "wjxtempanswer",
                a = localStorage[c],
                !a)
                return null;
            if (d = localStorage["wjxtempanswerdat"],
                !d)
                return null;
            if (e = window.qBeginDate || 0,
                0 > d - e)
                return null
        } else {
            if (f = wjxdata.get()
                .wjxanswerdata,
                !f)
                return;
            if (window.randomMode)
                return;
            if (a = f.wjxtempanswer,
                !a)
                return null;
            if (d = f["wjxtempanswerdat"],
                !d)
                return null;
            if (e = window.qBeginDate || 0,
                0 > d - e)
                return null
        }
    }
    for (g = a.split(spChars[1]),
        h = new Array,
        i = 0; i < g.length; i++)
        j = g[i].split(spChars[0]),
        k = new Object,
        k._value = j[1],
        k._topic = j[0],
        h.push(k);
    return h
}

function saveAnswer(a) {
    var b, d, e, f, g, h, i, j, k;
    if (!window.isinterview && window.localStorage && !(hasQingJing || !window.needSaveJoin && window.isKaoShi || window.zunxiangParas && window.zunxiangParas["q" + getTopic(a)] || window.cepingCandidate && (1 == window.OneaTime || 1 == window.oneDept) || 2 == window.isChuangGuan || window.randomMode || isLoadingAnswer))
        try {
            for (b = "wjxtempanswer",
                localStorage[b],
                d = restoreAnswer(),
                null == d && (d = new Array),
                e = getTopic(a),
                f = new Object,
                g = $(a)
                .attr("type"),
                f._topic = e,
                f._value = "",
                getAnswer(a, f, g, !0),
                h = !1,
                i = 0; i < d.length; i++)
                if (d[i]._topic == f._topic) {
                    h = !0,
                        d[i]._value = f._value;
                    break
                }
            for (h || d.push(f),
                d.sort(function(a, b) {
                    return a._topic - b._topic
                }),
                j = "",
                i = 0; i < d.length; i++)
                i > 0 && (j += spChars[1]),
                j += d[i]._topic,
                j += spChars[0],
                j += d[i]._value;
            saveSubmitAnswer(j),
                k = localStorage["wjxnextuse"],
                k && localStorage.removeItem("wjxnextuse")
        } catch (l) {}
}

function saveSubmitAnswer(a) {
    if (window.localStorage) {
        var b = {
            wjxtempanswer: a,
            wjxtempanswerid: activityId,
            wjxtempanswerdat: (new Date)
                .getTime(),
            wjxsavepage: cur_page,
            wjxfirstloadtime: fisrtLoadTime
        };
        wjxdata.set(b)
    }
}

function clearAnswer(a) {
    var b, c, d;
    try {
        if (window.setCookieNew && 0 == window.informedShowTimes && setCookieNew("ain" + activityId, 0, 0),
            !window.localStorage)
            return;
        if (b = wjxdata.isolduser(),
            b && (c = localStorage["wjxtempanswerid"],
                c != activityId))
            return;
        d = needSaveTmp(),
            a || !d ? (wjxdata.clear(),
                localStorage.removeItem("wjxnextuse")) : localStorage.setItem("wjxnextuse", activityId),
            b ? (localStorage.removeItem("wjxfirstloadtime"),
                localStorage.removeItem("wjxlastcosttime")) : wjxdata.clear("wjxfirstloadtime,wjxlastcosttime")
    } catch (e) {}
}

function isNullAnswer(a, b) {
    var d, e, f, c = !1;
    switch (a) {
        case "21":
            -2 == b && (c = !0);
            break;
        case "12":
            for (d = b.split(spChars[2]),
                c = !0,
                e = 0; e < d.length; e++)
                f = d[e].split(spChars[4]),
                f[1] > 0 && (c = !1);
            break;
        default:
            c = !1
    }
    return c
}

function loadAnswer() {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, b = restoreAnswer();
    if (null != b) {
        for (ktimes++,
            wjxdata.isolduser() ? localStorage["wjxfirstloadtime"] && (lastCostTime = localStorage["wjxtempanswerdat"] - localStorage["wjxfirstloadtime"],
                localStorage["wjxlastcosttime"] && (lastCostTime += parseInt(localStorage["wjxlastcosttime"])),
                localStorage.setItem("wjxlastcosttime", lastCostTime)) : (c = wjxdata.get()
                .wjxanswerdata,
                c && (d = c.wjxfirstloadtime,
                    e = c.wjxtempanswerdat,
                    f = c.wjxlastcosttime,
                    d && (lastCostTime = e - d,
                        f && (lastCostTime += parseInt(f)),
                        wjxdata.updata("wjxlastcosttime", lastCostTime)))),
            isLoadingAnswer = !0,
            g = 0,
            window.joinIdnew || (g = wjxdata.isolduser() ? localStorage["wjxsavepage"] : wjxdata.get()
                .wjxanswerdata && wjxdata.get()
                .wjxanswerdata.wjxsavepage),
            h = !1,
            i = 0; i < b.length; i++)
            if (j = b[i]._topic,
                k = b[i]._value,
                k && (l = $("#div" + j),
                    l[0] && !("none" == l[0].style.display && "-1" != l.attr("relation") || window.zunxiangParas && window.zunxiangParas["q" + j] || (m = $(l)
                        .attr("type"),
                        isNullAnswer(m, k)))))
                switch (cur_page = l[0].pageIndex || 0,
                    (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $(l)
                    .attr("skip", "1"),
                    m) {
                    case "1":
                        n = $("input", l),
                            n.val(k),
                            1 != l.attr("req") && addClearHref(l[0]),
                            window.joinIdnew && 1 != n.attr("hasgs") ? window.joinIdnew && referTitle(l, k) : n.trigger("blur"),
                            n.parent()
                            .hasClass("getLocalBtn") && (o = "1" == n.attr("needonly"),
                                !o && !matchDayTitle() || window.joinIdnew ? n.parent()
                                .prev()
                                .text(k)
                                .show() : n.val(""));
                        break;
                    case "2":
                        k = k.split("<br/>")
                            .join("\n"),
                            $("textarea", l)
                            .val(k)
                            .trigger("blur");
                        break;
                    case "3":
                        p = k.split(spChars[2]),
                            $("input", l)
                            .each(function() {
                                var b, a = "radio" == this.type && this.value == p[0] && "none" == this.parentNode.parentNode.style.display;
                                return a || this.value == p[0] && this.disabled ? (h = !0,
                                    void 0) : ("radio" != this.type || this.value != p[0] || this.disabled || (p[1] && (b = $(this)
                                            .attr("rel"),
                                            b && $("#" + b)
                                            .val(p[1])),
                                        l[0].prevRadio = this,
                                        $(this.parentNode.parentNode)
                                        .trigger("click")),
                                    void 0)
                            });
                        break;
                    case "4":
                        q = k.split(spChars[3]),
                            $("input", l)
                            .each(function() {
                                var a, b, c, d, e, f;
                                if ("checkbox" != this.type)
                                    return !0;
                                if (window.cepingCandidate && "none" == this.parentNode.parentNode.style.display)
                                    return !0;
                                for (a = this.value,
                                    b = this.checked,
                                    c = !1,
                                    d = 0; d < q.length; d++)
                                    if (e = q[d].split(spChars[2]),
                                        e[0] == a && !this.disabled) {
                                        e[1] && (f = $(this)
                                                .attr("rel"),
                                                f && ($("#" + f)
                                                    .val(e[1])[0].pvalue = e[1])),
                                            b || $(this.parentNode.parentNode)
                                            .trigger("click"),
                                            c = !0;
                                        break
                                    }
                                b && !c && $(this.parentNode.parentNode)
                                    .trigger("click")
                            });
                        break;
                    case "5":
                        if (r = [],
                            s = k,
                            1 == l.attr("pj") && k && (t = k.split(spChars[2]),
                                2 == t.length && (r = t[1].split("、"),
                                    s = t[0])),
                            $(".rate-off", l)
                            .each(function() {
                                this.getAttribute("val") == s && $(this)
                                    .parent()
                                    .trigger("click")
                            }),
                            1 == l.attr("pj") && r.length > 0) {
                            for (u = l.find(".evaluateTagDiv")
                                .eq(s - 1),
                                v = r[r.length - 1],
                                w = !1,
                                x = $(".evaluateTagItem", u),
                                y = 0; y < r.length; y++)
                                x.each(function() {
                                    var a = $(this)
                                        .text();
                                    a == r[y] && $(this)
                                        .trigger("click"),
                                        a == v && (w = !0)
                                });
                            w || ($(".writeRvaluate", u)
                                .trigger("click"),
                                $(".wjxui_limit_box", u)
                                .show()
                                .find("textarea")
                                .val(v)
                                .trigger("blur"))
                        }
                        break;
                    case "7":
                        $("option", l)
                            .each(function() {
                                return this.value != k || this.disabled ? void 0 : ($("select", l)
                                    .val(k)
                                    .trigger("change"),
                                    !1)
                            });
                        break;
                    case "11":
                        if (q = k.split(","),
                            z = $("li.ui-li-static", l),
                            window.joinIdnew) {
                            for (A = new Array,
                                B = 1; B < z.length + 1; B++) {
                                for (C = !0,
                                    D = 0; D < q.length; D++)
                                    if (q[D] >= B && (C = !1,
                                        q[D] == B)) {
                                        A.push((D + 1)
                                            .toString());
                                        break
                                    }
                                if (C)
                                    break
                            }
                            q = A
                        }
                        for (E = 0; E < q.length; E++)
                            for (F = q[E].split("^"),
                                D = 0; D < z.length; D++)
                                if (k = $(z[D])
                                    .find("input:hidden")
                                    .val(),
                                    k == F[0]) {
                                    $(z[D])
                                        .trigger("click"),
                                        G = $(z[D])
                                        .find("input.OtherText"),
                                        F[1] && G[0] && (G.val(F[1]),
                                            $(G)
                                            .trigger("blur"));
                                    break
                                }
                        break;
                    case "8":
                        H = $("input", l),
                            H.val(k),
                            I = l.attr("hasjump"),
                            I && $(H)
                            .trigger("change");
                        break;
                    case "21":
                        for (q = k.split(spChars[3]),
                            J = $("input", l),
                            B = 0; B < q.length; B++)
                            K = q[B].split(spChars[2]),
                            L = parseInt(K[0]) - 1,
                            $(J[L])
                            .val(K[1]);
                        updateCart(l);
                        break;
                    case "12":
                    case "33":
                    case "34":
                    case "9":
                        for (M = k.split(spChars[2]),
                            N = new Object,
                            B = 0; B < M.length; B++)
                            O = M[B].split(spChars[4]),
                            2 == O.length && (N[O[0]] = O[1]);
                        I = l.attr("hasjump"),
                            P = "input",
                            "33" == m && (P = ".file"),
                            "34" == m && (P = "textarea"),
                            $(P, l)
                            .each(function(a) {
                                var c, d, e, b = $(this);
                                return "12" == m && window.hasReferClient && (c = this.parentNode.parentNode.parentNode,
                                    c && "none" == c.style.display) ? !0 : (d = "33" == m ? /_(\d+)$/.exec(this.parentNode.parentNode.getAttribute("id"))[1] : b.attr("rowid"),
                                    "33" == m ? (this.parentNode.fileName = N[d] || "",
                                        N[d] && b.siblings(".uploadmsg")
                                        .html(UPLOAD_FILE_SUCCESS)) : (e = d ? N[d] : M[a],
                                        "Ⅳ" == e && (e = ""),
                                        b.val(e),
                                        1 == b.attr("hasgs") && b.blur()),
                                    b.next()
                                    .hasClass("textEdit") && e && (b.next()
                                        .removeClass("initStyle")
                                        .children(".textCont")
                                        .html(e)
                                        .css({
                                            display: "inline"
                                        }),
                                        1 == b.attr("hasgs") && b.next()
                                        .removeClass("initStyle")
                                        .children(".textCont")
                                        .blur()),
                                    "指定选项" == b.attr("verify") && b.val() && b.next()
                                    .find("select")
                                    .val(b.val())
                                    .trigger("change"),
                                    $(b)
                                    .trigger("change"),
                                    void 0)
                            });
                        break;
                    case "13":
                        l[0].fileName = k || "",
                            k && ($(".uploadmsg", l)
                                .html(UPLOAD_FILE_SUCCESS),
                                l.find(".heatmapWrap")
                                .length > 0 && (l.find(".heatmapWrap")
                                    .attr("fn", k),
                                    heatMapInit(l, !0)),
                                l.attr("hasjump") && jump(l, ""));
                        break;
                    case "10":
                        for (M = k.split(spChars[2]),
                            N = new Object,
                            B = 0; B < M.length; B++)
                            O = M[B].split(spChars[4]),
                            2 == O.length && (N[O[0]] = O[1]);
                        Q = "input,textarea",
                            R = !1,
                            "1" == l.attr("select") && (Q = "select",
                                R = !0),
                            I = l.attr("hasjump"),
                            S = "table",
                            T = !1,
                            "1" == l.attr("fixedslider") && (T = !0),
                            T && (S = ".ui-table-scroll .ui-table-tbody tr[rowid]"),
                            $(S, l)
                            .each(function() {
                                var c, d, e, f, g, a = this,
                                    b = a.parentNode;
                                if (T && (b = a),
                                    c = b.getAttribute("rowid"),
                                    d = N[c],
                                    !d)
                                    return !1;
                                if (e = d.split(spChars[3]),
                                    (window.hasReferClient || l.attr("zizeng")) && (f = b,
                                        f && "none" == f.style.display)) {
                                    if ("Ⅳ" == e[0])
                                        return !0;
                                    $(".increase-btn", l)
                                        .click()
                                }
                                g = 0,
                                    $(Q, this)
                                    .each(function() {
                                        if (this.value = e[g] || "",
                                            "多行文本" == $(this)
                                            .attr("verify") && (this.value = this.value.replace(/\<br\/\>/g, "\n")),
                                            !R) {
                                            var a = $(this);
                                            this.value && $(this)
                                                .attr("hasgs") && $(this)
                                                .blur(),
                                                "指定选项" == a.attr("verify") && a.val() && a.next()
                                                .find("select")
                                                .val(a.val())
                                                .trigger("change")
                                        }
                                        R ? $(this)
                                            .trigger("change") : I && $(this)
                                            .trigger("change"),
                                            g++
                                    })
                            });
                        break;
                    case "6":
                        for (M = k.split(","),
                            N = new Object,
                            B = 0; B < M.length; B++)
                            O = M[B].split(spChars[4]),
                            2 == O.length && (N[O[0]] = O[1]);
                        for (U = $(l)
                            .attr("ischeck"),
                            V = $("table.matrix-rating", l),
                            W = V[0].rows,
                            B = 0; B < W.length; B++)
                            X = W[B],
                            Y = X.getAttribute("tp"),
                            "d" == Y && (window.hasReferClient && "none" == X.style.display || (Z = parseInt(X.getAttribute("rowindex")) + 1,
                                O = M[Z],
                                $(".rate-off", X)
                                .each(function() {
                                    var b, c, d, a = $(this)
                                        .attr("dval");
                                    if (N[Z])
                                        if (U)
                                            for (b = N[Z].split(";"),
                                                c = 0; c < b.length; c++)
                                                d = b[c].split(spChars[2]),
                                                a == d[0] && (d[1] && (this.fillvalue = d[1]),
                                                    $(this)
                                                    .trigger("click"));
                                        else
                                            b = N[Z].split(spChars[2]),
                                            a == b[0] && (b[1] && (this.fillvalue = b[1]),
                                                $(this)
                                                .trigger("click"))
                                })))
                }
        if (cur_page = 0,
            (3 == window.isChuangGuan || 4 == window.isChuangGuan) && (h = !0,
                cur_page = 0),
            g && g >= cur_page + 1 && !h && (pageHolder[0].style.display = "none",
                cur_page = g - 1,
                wjxdata.updata("wjxsavepage", g),
                show_next_page(!0)),
            isLoadingAnswer = !1,
            window.zunxiangAutoClick && cur_page > 0)
            for (E = 0; cur_page > E; E++)
                zunxiangAutoClick(E)
    }
}

function needTip() {
    if (window.divTip && "" == divTip.style.display) {
        $("img", divTip)[0] && (divTip.style.background = "none",
            divTip.style.color = "#333");
        var a = $.trim($(divTip)
            .text());
        if (a)
            return !0
    }
    return !1
}

function loadMinMaxTime() {
    window.hasPageTime && (window.divFengMian || 3 == isChuangGuan || 4 == isChuangGuan || processMinMax())
}

function checkAnswer() {
    var a, b, c, d, e;
    window.localStorage && (a = window.maxSurveyTime || $("fieldset[maxtime]")
        .length > 0,
        b = window.isSingleVote && window.isMultipleChoice && !window.touPiaoItemIndex,
        c = localStorage["wjxnextuse"] == activityId,
        !c || window.joinIdnew || b || window.isSingleVote || needTip() ? !window.touPiaoItemIndex && (window.needSaveJoin || b || window.joinIdnew) ? loadAnswer() : !window.localStorage || window.isSingleVote || needTip() || window.isKaoShi || window.needLogin || a || window.notLoadAnswer || window.isinterview || (d = restoreAnswer(),
            d && (e = wjxlang.load_answer,
                needConfirmAnswer = !0,
                confirmnew(e, function() {
                    loadAnswer(),
                        loadMinMaxTime();
                    var a = null;
                    if (wjxdata.isolduser())
                        a = localStorage["wjxtempanswer"];
                    else {
                        a = wjxdata.get()
                            .wjxanswerdata;
                        try {
                            window.JSON && JSON.stringify && (a = JSON.stringify(a))
                        } catch (b) {}
                    }
                    a && addtoactivitysave(a)
                }, function() {
                    clearAnswer(!0),
                        loadMinMaxTime()
                }))) : (d = restoreAnswer(),
            d && confirmnew(wjxlang.tit_loaddate, function() {
                loadAnswer(!0)
            }, function() {
                clearAnswer(!0)
            })))
}

function hideAward() {
    confirmnew("确认不再领取吗？", function() {
        return window.localStorage && (vkey = "award_" + activityId,
                localStorage.removeItem(vkey),
                localStorage.removeItem(vkey + "name"),
                localStorage.removeItem(vkey + "tip")),
            3 == window.isChuangGuan || 4 == window.isChuangGuan ? ($(".fmWrap")
                .prev()
                .hide(),
                void 0) : ($("#divContent")
                .show()
                .prev()
                .hide(),
                initSlider(),
                void 0)
    })
}

function processAward() {
    var b, c, d, e, f, a = "join_" + activityId;
    document.cookie && -1 != document.cookie.indexOf(a + "=") && (a = "award_" + activityId,
        b = "",
        c = "",
        window.localStorage && (b = localStorage[a],
            c = localStorage[a + "name"]),
        b && 0 == b.indexOf("http") && (d = localStorage[a + "tip"],
            e = "",
            d && (e = " onclick='alert(\"" + d + "\");return true;' "),
            f = "<div id='awardReceiveDiv' style='margin:10px 20px;'>恭喜您抽中了" + c + "，如已领取请忽略！<br/><div style='text-align:center;'><a href='" + b + "'" + e + " class='button white' target='_blank' style='color:#fff; background:#FF9600;border:none;'>立即领取</a></div><div style='margin-top:18px;text-align:center;'><a href='javascript:' onclick='hideAward();' style='color:#666;font-size:14px;'>不领取，重新填写问卷</a></div></div>",
            $("#divContent")
            .before(f),
            $("#divContent")
            .hide()))
}

function isImgLoad(a) {
    $("#divTip img")
        .each(function() {
            return 0 === this.height ? (t_isLoad = !1,
                !1) : void 0
        }),
        t_isLoad ? (clearTimeout(t_img),
            a()) : (t_isLoad = !0,
            t_img = setTimeout(function() {
                isImgLoad(a)
            }, 500))
}

function postHeight() {
    var a, b;
    if (window != window.top)
        try {
            if (a = parent.postMessage ? parent : parent.document.postMessage ? parent.document : null,
                null != a) {
                if ($("body")
                    .hasClass("hasbgpic") && !IsPar && ($("body")
                        .css({
                            height: "auto",
                            "padding-top": "0"
                        }),
                        $("#divBackgroundWrap")
                        .css({
                            "background-size": "100%",
                            "background-repeat": "repeat-y"
                        }),
                        1 == $("#toplogo")
                        .length ? $("#toplogo")
                        .css({
                            "margin-top": "40px"
                        }) : $("#toptitle")
                        .css({
                            "margin-top": "40px"
                        })),
                    !(window.divTip && "" == divTip.style.display && $("#divTip img")
                        .length > 0))
                    return b = $("body")
                        .outerHeight(),
                        a.postMessage("heightChanged," + b, "*");
                $("#divTip")
                    .css("position", "static"),
                    isImgLoad(function() {
                        return b = $("body")
                            .outerHeight(),
                            a.postMessage("heightChanged," + b, "*")
                    })
            }
        } catch (c) {}
}

function saveMatrixFill(a, b) {
    var e, f, c = $(a)
        .closest("tr")[0],
        d = c.getAttribute("fid");
    d && (e = "",
        b ? $(".rate-on", c)
        .each(function() {
            if (e && (e += ";"),
                e += $(this)
                .attr("dval"),
                this.fillvalue) {
                var a = replace_specialChar(this.fillvalue)
                    .replace(/;/g, "；")
                    .replace(/,/g, "，");
                e += spChars[2] + a
            }
        }) : (e = $(a)
            .attr("dval"),
            a.fillvalue && (f = replace_specialChar(a.fillvalue)
                .replace(/;/g, "；")
                .replace(/,/g, "，"),
                e += spChars[2] + f)),
        $("#" + d)
        .val(e))
}

function saveLikert(a) {
    var b = $("a.rate-on", a),
        c = "";
    0 == b.length ? $("input:hidden", a)
        .val("") : (c = $(b[b.length - 1])
            .attr("title"),
            $("input:hidden", a)
            .attr("value", $(b[b.length - 1])
                .attr("val"))),
        referTitle(a, c)
}

function setTableWidth(a) {
    var b, c, d, e, f, g;
    "none" != $(a)[0].style.display && "6" == $(a)
        .attr("type") && (b = $("table.matrix-rating", a),
            1 != langVer && b[0] && b[0].rows[0] && b[0].rows[0].cells.length <= 11 || (c = b.outerWidth(),
                d = parseInt($(a)
                    .css("marginLeft")) + parseInt($(a)
                    .css("paddingLeft")),
                e = $("#divContent")
                .outerWidth() - 2 * d,
                c > e && (f = b.parent("div"),
                    f.css({
                        width: e,
                        "overflow-x": "auto",
                        "-webkit-overflow-scrolling": "touch"
                    }),
                    b.find("th")
                    .css("padding", "5px 8px"),
                    b[0].addEventListener("touchmove", function() {
                        $("#divMatrixHeader")
                            .hide()
                    }, !1),
                    b.find("td.title")
                    .css({
                        position: "relative"
                    }),
                    g = Array.from(b[0].querySelectorAll("tbody tr"))
                    .filter(function(a) {
                        return /_\d+t$/.test(a.id)
                    })
                    .map(function(a) {
                        return a.querySelector("td:first-child")
                    }),
                    f[0].addEventListener("scroll", debounceHandler(function() {
                        var b = this;
                        return b.scrollLeft == b.scrollwidth - b.clientWidth ? !1 : (Array.prototype.forEach.call(g, function(a) {
                                a.style.left = b.scrollLeft + "px"
                            }),
                            void 0)
                    }, 50, !1)))))
}

function debounceHandler(a, b, c) {
    var d = null;
    return function() {
        var e = this;
        d && clearTimeout(d),
            c ? (d || a.apply(e),
                d = setTimeout(function() {
                    d = null
                }, b)) : d = setTimeout(function() {
                a.apply(e)
            }, b)
    }
}

function initRate(a, b) {
    $(".rate-off", a)
        .parent()
        .bind("click", function(c) {
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, d = $(a)
                .attr("ischeck"),
                e = $("a", this)[0],
                f = !0;
            if (d)
                g = !0,
                h = $(a)
                .attr("maxvalue"),
                h && !$(e)
                .hasClass("rate-on") && (i = $("a.rate-on", this.parentNode),
                    h - i.length <= 0 && (g = !1)),
                g && ($(e)
                    .toggleClass("rate-on"),
                    $(e)
                    .toggleClass("rate-onchk"),
                    $(e)
                    .trigger("change"));
            else {
                if (!CheckMax(e, b))
                    return f = !1,
                        void 0;
                j = $(this.parentNode)
                    .find("a.rate-off"),
                    j.removeClass("rate-on"),
                    k = $(e)
                    .attr("mode"),
                    k ? (j.removeClass("rate-on" + k),
                        l = e,
                        j.each(function() {
                            return $(this)[0].offsetWidth,
                                $(this)
                                .toggleClass("rate-on"),
                                $(this)
                                .toggleClass("rate-on" + k),
                                this == l ? !1 : void 0
                        })) : ($(e)
                        .toggleClass("rate-on"),
                        $(e)
                        .text() || (j.removeClass("rate-ontxt"),
                            $(e)
                            .toggleClass("rate-ontxt"))),
                    count360Val(),
                    $(e)
                    .trigger("change")
            }
            $(e)
                .hasClass("rate-on") ? (k = $(e)
                    .attr("mode"),
                    k || (m = $(e)
                        .attr("needfill"),
                        m && !isLoadingAnswer && (showMatrixFill(e),
                            c.stopPropagation()),
                        !m && curMatrixError && curMatrixError != e && (curMatrixError = null)),
                    c.pageX && showMatrixHeader(e, a)) : curMatrixError && curMatrixError == e && (curMatrixError = null),
                showEvaluate(e, a),
                n = !1,
                b && (o = $(e)
                    .attr("dval"),
                    p = $(e)
                    .parent()
                    .parent()
                    .parent(),
                    "6" == $(e)
                    .attr("mode") && (p = $(e)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()),
                    "tbody" == p[0].tagName.toLocaleLowerCase() && (q = p.find("tr.trlabel")
                        .eq(0),
                        r = q.find("th"),
                        r.eq(o - 1) && (s = r.eq(o - 1)
                            .attr("itemmax"),
                            s && window.cepingCandidate && "-1" != s.indexOf("%") && (t = parseInt(s.replace("%", "")),
                                u = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
                                s = Math.ceil(u.length * t / 100)),
                            s && s > 0 && (n = !0)))),
                !n && "1" == a.attr("req") || d || addClearHref(a),
                $("span.error", a)
                .is(":visible") && validateQ(a),
                b ? saveMatrixFill(e, d) : saveLikert(a, this),
                ("6" == a.attr("type") || "5" == a.attr("type")) && displayRelationByType(a),
                jump(a, e),
                f && saveAnswer(a),
                ("6" == a.attr("type") && !d && 0 == popUpindex || "5" == a.attr("type") && 0 == itempopUpindex) && processSamecount(a, this),
                c.preventDefault()
        })
}

function processSamecount(a, b) {
    var c, d, e, f, g, h, i;
    if (window.IsSampleService)
        if (c = $("a.rate-off", b),
            "6" == a.attr("type")) {
            for (d = c.eq(0)
                .attr("dval"),
                e = $("a.rate-off", a),
                f = 0,
                g = 0; g < e.length; g++)
                if (e.eq(g)
                    .attr("dval") == d && e.eq(g)
                    .hasClass("rate-on") && f++,
                    f > 4) {
                    popUpindex++,
                    alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
                    break
                }
        } else if ("5" == a.attr("type"))
        for (d = c.eq(0)
            .attr("val"),
            h = parseInt(a.attr("id")
                .replace("div", "")) - 1,
            f = 0,
            g = h; g >= 1 && (i = $("#div" + g),
                "5" == i.attr("type")); g--)
            if (e = $("a.rate-off", i),
                e.eq(d - 1)
                .attr("val") == d && e.eq(d - 1)
                .hasClass("rate-on") && f++,
                f > 3) {
                itempopUpindex++,
                alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
                break
            }
}

function updateCart(a) {
    var g, h, i, j, k, l, m, n, b = $("#divQuestion"),
        c = "",
        d = 0,
        e = 0,
        f = null;
    if (shopArray.length > 0) {
        for (g = "",
            h = 0; h < shopArray.length; h++)
            "none" != shopArray[h].style.display && (i = $(shopArray[h])
                .attr("id"),
                g && (g += ","),
                g += "#" + i);
        g && (j = $(g),
            f = $(".shop-item", j))
    } else
        f = $(".shop-item", b);
    f && (f.each(function() {
            var h, i, j, k, f = $(".itemnum", this),
                g = parseInt(f.val());
            return 0 == g ? !0 : (h = $(".item_name", this)
                .html(),
                i = $(".item_price", this)
                .attr("price"),
                j = g * parseFloat(i),
                k = '<li class="productitem"><span class="fpname">' + h + '</span><span class="fpnum">x' + g + '</span><span class="fpprice">￥' + toFixed0d(j) + "</span></li>",
                c += k,
                d += j,
                e += g,
                void 0)
        }),
        k = 0,
        l = $(a)
        .find(".shop-item"),
        m = l.length,
        l.each(function(a) {
            var f, g, h, c = $(".itemnum", this),
                d = parseInt(c.val());
            $(".item_name", this)
                .html(),
                f = $(".item_price", this)
                .attr("price"),
                g = d * parseFloat(f),
                $(".item_price", this)
                .html("￥" + toFixed0d(g)),
                k += g,
                m == a + 1 && (h = toFixed0d(k),
                    $(this)
                    .nextAll(".li_price")
                    .find(".theTotalPrice")
                    .html("￥" + h))
        }),
        n = wjxlang.settlelist,
        c = "<ul class='productslist'><li><span class='fpname' style='font-weight:bold; font-size:14px; padding-bottom:16px;'>" + n + "</span></li>" + c + '<li class="productitem"><span class="fpname"></span><span class="fpnum" style="color:#333">x' + e + '</span><span class="fpprice" style="color:#de6752;font-size:17px">￥' + toFixed0d(d) + "</span></li>" + "</ul>",
        $("#shopcart")
        .html(c),
        d > 0 ? $("#shopcart")
        .show() : $("#shopcart")
        .hide(),
        fixBottom(),
        saveAnswer(a))
}

function toFixed0d(a) {
    return a.toFixed(2)
        .replace(".00", "")
}

function fixBottom() {
    var a, b, c, d, e;
    $("#spanPower")
        .click(function() {
            window.location.href = "https://www.wjx.cn/mobile/index.aspx"
        }),
        postHeight(),
        a = $("body #form1")
        .outerHeight(),
        b = document.documentElement.clientHeight,
        $("#tipHeight")
        .is(":visible") && (a += $("#tipHeight")
            .height()),
        c = $("#divPowerBy"),
        d = c.height(),
        c.hasClass("fixedbottom") || (d = 0),
        e = a + d - b,
        0 > e ? c.addClass("fixedbottom") : c.removeClass("fixedbottom")
}

function validate(a) {
    function g(a, b) {
        var c;
        return function() {
            var e = this,
                f = arguments,
                g = function() {
                    a.apply(e, f)
                };
            clearTimeout(c),
                c = setTimeout(g, b)
        }
    }
    var c, d, e, f, h, i, b = !0;
    return firstError = null,
        firstMatrixError = null,
        curMatrixError = null,
        isValidating = !0,
        $(".field:visible")
        .each(function() {
            var c, d, a = pageHolder[cur_page].hasExceedTime;
            return a ? !0 : (c = $(this),
                d = validateQ(c),
                d || (b = !1),
                void 0)
        }),
        hlv = "1",
        b ? ($(a)
            .removeClass("fixed-style"),
            $(window)
            .unbind("scroll"),
            lastFixedObj = null) : firstError && (c = $(firstError)
            .offset()
            .top,
            d = "1" == $(firstError)
            .attr("maxdiff"),
            firstError.errorControl && !d && (c = $(getErrorControl(firstError.errorControl))
                .offset()
                .top,
                e = $(firstError)
                .attr("type"),
                c > 50 && ("6" == e || "9" == e || "10" == e || "12" == e) && (c -= 50)),
            $("html, body")
            .animate({
                scrollTop: c
            }, 600),
            f = g(function() {
                var b = $(this)
                    .scrollTop(),
                    c = $(document)
                    .height(),
                    d = $(this)
                    .height(),
                    e = parseInt(b) + parseInt(d);
                e > c - 100 ? $(a)
                    .removeClass("fixed-style") : "spanPreview" != $(a)
                    .attr("id") && $(a)
                    .addClass("fixed-style")
            }, 300),
            $("body")
            .height() > $(window)
            .height() + 100 && ($(window)
                .on("scroll", f),
                lastFixedObj = a),
            window != window.top && ($(firstError)[0].scrollIntoView(),
                h = $(firstError)
                .text()
                .replace("*", ""),
                h.length > 8 && (h = h.substring(0, 8) + "..."),
                i = wjxlang.validate_answer_error.replace("{0}", h),
                $("#ValError")
                .html(i))),
        isValidating = !1,
        b
}

function openCityBox(a, b, c, d) {
    var f, g, h, i, j, k, l, m, n, e = (new Date)
        .getTime();
    if (!(e - lastClickTime > MIN_CLICK_DELAY_TIME))
        return !1;
    if (lastClickTime = e,
        txtCurCity = a,
        f = "",
        d = d || "",
        g = 400,
        3 == b)
        h = a.getAttribute("province"),
        i = "",
        h && (i = "&pv=" + encodeURIComponent(h)),
        h && (i = h.indexOf("┊") > -1 ? "&isnew=1&pv=" + encodeURIComponent(h.split("┊")[0]) : "&pv=" + encodeURIComponent(h)),
        f = "/joinnew/setcitycountymobo2.aspx?activityid=" + activityId + "&ct=" + b + i + "&pos=" + d,
        g = 320;
    else if (4 == b)
        h = a.getAttribute("province"),
        i = "",
        j = "",
        h && (i = "&pv=" + encodeURIComponent(h)),
        a.value && (j = "&sh=" + encodeURIComponent(a.value)),
        f = "/joinnew/school.aspx?activityid=" + activityId + "&ct=" + b + i + "&pos=" + d + j;
    else if (5 == b)
        f = "/joinnew/setmenusel.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
        g = 320;
    else if (7 == b)
        f = "/joinnew/setcascaderselector.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d;
    else if (6 == b) {
        if (f = "/wjx/join/amap.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
            "1" == $(a)
            .attr("needonly") && (f += "&nc=1",
                a.value))
            return $(a.parentNode.parentNode)
                .find(".errorMessage")
                .html(wjxlang.locationtips),
                void 0
    } else
        f = "/joinnew/setcitymobo2.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
        g = 300;
    a.blur(),
        obj_offectTop = $(a)
        .closest(".field")
        .offset()
        .top,
        setTimeout(function() {
            openDialogByIframe(400, g, f)
        }, 200),
        3 != b && 4 != b || window.self != window.top || (k = window.parent && $(window)
            .height() > window.screen.height ? $(window.parent)
            .scrollTop() : $(document)
            .scrollTop(),
            l = $(window)
            .height() > window.screen.height ? window.screen.height : $(window)
            .height(),
            m = k + l,
            $("#yz_popTanChu")
            .css({
                top: m + "px",
                width: "100%",
                left: "0"
            }),
            $("#yz_popwinIframe")
            .css("width", "100%"),
            n = m - 360 + "px",
            4 == b && (n = k + 60),
            $("#yz_popTanChu")
            .animate({
                top: n
            }, 300))
}

function openlink(a, b) {
    var d, c = a.getAttribute("data-url") || a.getAttribute("href");
    return 0 == c.indexOf("http") && ($("#yz_popIframeDiv")
            .remove(),
            $("#yz_popTanChu")
            .remove(),
            openDialogByIframe(320, 400, c, !0)),
        d = window.event || b,
        d && d.stopPropagation && d.stopPropagation(),
        !1
}

function showItemDesc(a, b, c) {
    var g, h, i, j, k, e = document.getElementById(c),
        f = $.trim(e.innerHTML);
    0 == f.indexOf("http") ? openDialogByIframe(a, b, f, !0) : (e.style.display = "",
        e.style.width = Math.min($(window)
            .width(), 400) - 50 + "px",
        g = e.getElementsByTagName("iframe")[0],
        g && (h = g.getAttribute("xsrc"),
            h && g.setAttribute("src", h)),
        i = e.offsetHeight + 20,
        e.style.display = "none",
        j = $(window)
        .height() - 30,
        k = !0,
        j > i && i > 30 && (b = i,
            k = !1),
        openDialogByIframe(a, b, c, k))
}

function setCityBox(a, b, c) {
    txtCurCity.value = a,
        $(txtCurCity)
        .next()
        .hasClass("textEdit") && a && $(txtCurCity)
        .next()
        .removeClass("initStyle")
        .children(".textCont")
        .css({
            display: "inline"
        })
        .html(a),
        txtCurCity.relValue = c,
        b && a && $(txtCurCity)
        .parent()
        .hasClass("getLocalBtn") && $(txtCurCity)
        .parent()
        .prev()
        .text(a)
        .show(),
        $("#yz_popTanChuClose")
        .click();
    var d = $(txtCurCity)
        .closest(".field");
    saveAnswer(d),
        $(txtCurCity)
        .trigger("blur"),
        window.isinterview && (showMyAnswer(d),
            $(".interview_input")
            .find(".iv_input")
            .show(),
            $(".interview_input")
            .find(".iv_chioseFile")
            .hide())
}

function getRname(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (!(rName && hasMatchName || $(b)
        .attr("ceshi")))
        if ("9" != a)
            o = null,
            "1" == a ? o = $("input", b) : "2" == a && (o = $("textarea", b)),
            o && ((c.indexOf("姓名") > -1 || c.indexOf("名字") > -1) && (hasMatchName = !0),
                p = o.attr("verify"),
                ("姓名" == p || hasMatchName) && ("1" == a ? rName = o.val() : "2" == a && c.length <= 5 && (rName = o.val()),
                    rName || (hasMatchName = !1)));
        else if (d = b[0].getElementsByTagName("td"),
        d.length > 0) {
        for (e = 0; e < d.length; e++)
            if (d[e].innerHTML.indexOf("姓名") > -1 || d[e].innerHTML.indexOf("名字") > -1 || d[e].innerHTML.indexOf("姓") > -1 && d[e].innerHTML.indexOf("名") > -1) {
                f = d[e].parentNode.id,
                    g = "t" == f.charAt(f.length - 1),
                    h = null,
                    h = g ? $(d[e].parentNode)
                    .next()
                    .find("input") : d[e].parentNode.getElementsByTagName("input"),
                    h[0] && h[0].value && (rName = h[0].value,
                        hasMatchName = !0);
                break
            }
    } else if (i = b[0].innerHTML.indexOf("姓名"),
        j = b[0].innerHTML.indexOf("姓"),
        k = b[0].innerHTML.indexOf("名"),
        i > -1 || j > -1 && k > -1)
        for (-1 == i && (i = k),
            l = b[0].getElementsByTagName("input"),
            e = 0; e < l.length; e++)
            if (m = l[e].id,
                n = b[0].innerHTML.indexOf(m),
                n > i && l[e].value) {
                rName = l[e].value,
                    hasMatchName = !0;
                break
            }
}

function getRefUsername(a, b) {
    var c, d, e;
    if (void 0 != refUsername && !$(b)
        .attr("ceshi")) {
        if ("9" == a)
            return c = refUsername - 1e4 * $(b)
                .attr("topic") - 1,
                d = b[0].getElementsByTagName("input"),
                d[c] && (refUsernameVal = d[c].value),
                void 0;
        e = null,
            "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)),
            e && ("1" == a || "2" == a) && (refUsernameVal = e.val())
    }
}

function getRefUserId(a, b) {
    var c, d, e;
    if (void 0 != refUserId && !$(b)
        .attr("ceshi")) {
        if ("9" == a)
            return c = refUserId - 1e4 * $(b)
                .attr("topic") - 1,
                d = b[0].getElementsByTagName("input"),
                d[c] && (refUserIdVal = d[c].value),
                void 0;
        e = null,
            "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)),
            e && ("1" == a || "2" == a) && (refUserIdVal = e.val())
    }
}

function getRefDepartment(a, b) {
    var c, d, e, f, g, h;
    if (void 0 != refDepartment && !$(b)
        .attr("ceshi")) {
        if ("9" == a)
            return c = refDepartment - 1e4 * $(b)
                .attr("topic") - 1,
                d = b[0].getElementsByTagName("input"),
                d[c] && (refDepartmentVal = d[c].value),
                void 0;
        if ("3" != a)
            "7" == a && (g = b[0].getElementsByTagName("select"),
                g && (refDepartmentVal = g[0].options[g[0].selectedIndex].text)),
            h = null,
            "1" == a ? h = $("input", b) : "2" == a && (h = $("textarea", b)),
            h && ("1" == a || "2" == a) && (refDepartmentVal = h.val());
        else
            for (e = $("input[type='radio']", b),
                f = 0; f < e.length; f++)
                if (e[f].checked) {
                    refDepartmentVal = $(e[f])
                        .parent()
                        .next()
                        .text();
                    break
                }
    }
}

function getM(a, b, c) {
    var d, e, f, g, h, i;
    if (!modata)
        if (d = /^\d{11}$/,
            "9" != a)
            "1" == a && (h = $("input", b),
                g = h.attr("verify"),
                ("手机" == g || -1 != c.indexOf("手机") || -1 != c.indexOf("联系方式")) && (i = h.val(),
                    $.trim(d.exec(i)) && (modata = i)));
        else
            for (e = b[0].getElementsByTagName("input"),
                f = 0; f < e.length; f++)
                if (g = e[f].getAttribute("verify"),
                    "手机" == g && d.exec($.trim(e[f].value)))
                    return modata = e[f].value,
                        void 0
}

function checkJpMatch(a, b) {
    var c, d, e;
    if (!b.hasCheck) {
        if (b.hasCheck = !0,
            c = $("div.field-label", b)
            .text(),
            ("1" == a || "2" == a) && quarray)
            for (d = 0; d < quarray.length; d++)
                if (c.indexOf(quarray[d]) > -1) {
                    e = document.createElement("img"),
                        e.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&q=" + getTopic(b) + "&type=npl&jointimes=" + (window.currJT || 0),
                        quResult.push(b);
                    break
                }
        0 == newAward && checkQuesMatch(c, b, a)
    }
}

function getAnswer(a, b, c, d) {
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, e = 0,
        f = !1;
    switch (("3" == c || "4" == c || "11" == c) && (g = getTopic(a),
            h = document.getElementById("divRef" + g),
            i = h && "" == h.style.display,
            i && (f = !0)),
        c) {
        case "1":
            if (!d) {
                b._value = "(跳过)",
                    "1" == a.attr("hrq") && (b._value = "Ⅳ");
                break
            }
            j = $("input", a),
                k = $.trim(j.val()),
                !k && "1" == a.attr("req") && j[0] && j[0].svalue && (k = j[0].svalue),
                k && j[0].lnglat && (k = k + "[" + j[0].lnglat + "]"),
                "1" == a.attr("ceshi") && (k = getKsAnswer(k)),
                b._value = replace_specialChar(k);
            break;
        case "2":
            if (!d) {
                b._value = "(跳过)",
                    "1" == a.attr("hrq") && (b._value = "Ⅳ");
                break
            }
            j = $("textarea", a),
                k = $.trim(j.val()),
                !k && "1" == a.attr("req") && j[0] && j[0].svalue && (k = j[0].svalue),
                k && j[0].lnglat && (k = k + "[" + j[0].lnglat + "]"),
                b._value = replace_specialChar(k);
            break;
        case "3":
            if (!d || f) {
                b._value = "-3",
                    "1" == a.attr("hrq") && (b._value = "-4");
                break
            }
            $("input[type='radio']:checked", a)
                .each(function() {
                    b._value = $(this)
                        .val();
                    var c = $(this)
                        .attr("rel");
                    return c && $("#" + c)
                        .val()
                        .length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c)
                            .val()
                            .substring(0, 3e3))),
                        !1
                });
            break;
        case "4":
            if (!d || f) {
                b._value = "-3",
                    "1" == a.attr("hrq") && (b._value = "-4");
                break
            }
            l = 0,
                $("input:checked", a)
                .each(function() {
                    var c, a = "none" == this.parentNode.parentNode.style.display;
                    a || (l > 0 && (b._value += spChars[3]),
                        b._value += $(this)
                        .val(),
                        c = $(this)
                        .attr("rel"),
                        c && $("#" + c)
                        .val()
                        .length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c)
                            .val()
                            .substring(0, 3e3))),
                        l++)
                }),
                0 == l && (b._value = "-2");
            break;
        case "21":
            if (!d) {
                b._value = "-3";
                break
            }
            l = 0,
                $(".shop-item .itemnum", a)
                .each(function(a) {
                    var c = $(this)
                        .val();
                    "0" != c && (l > 0 && (b._value += spChars[3]),
                        b._value += a + 1,
                        b._value += spChars[2] + c,
                        l++)
                }),
                0 == l && (b._value = "-2");
            break;
        case "11":
            for (m = new Array,
                $("li.ui-li-static", a)
                .each(function() {
                    var b, c, e, a = $(this)
                        .find("span.sortnum")
                        .html();
                    "none" == this.style.display && (a = ""),
                        b = new Object,
                        b.sIndex = a,
                        c = $(this)
                        .find("input:hidden")
                        .val(),
                        e = $(this)
                        .find("input.OtherText"),
                        e.length > 0 && e.val()
                        .length > 0 && (c += spChars[2] + replace_specialChar(e.val()
                            .substring(0, 3e3))),
                        !d || f ? c = "-3" : a || (c = "-2"),
                        b.val = c,
                        b.sIndex || (b.sIndex = 1e4),
                        m.push(b)
                }),
                m.sort(function(a, b) {
                    return a.sIndex - b.sIndex
                }),
                n = 0; n < m.length; n++)
                n > 0 && (b._value += ","),
                b._value += m[n].val;
            break;
        case "5":
            if (!d) {
                b._value = "-3";
                break
            }
            b._value = $("input:hidden", a)
                .val(),
                o = parseInt(b._value),
                1 == $(a)
                .attr("pj") && o > 0 && (p = $(a)
                    .find(".evaluateTagDiv")
                    .eq(o - 1),
                    q = "",
                    $(p)
                    .find(".writeRvaluate")
                    .siblings(".clicked")
                    .each(function(a, b) {
                        var c = 0 == a ? "" : "、";
                        q += c + $.trim($(b)
                            .html())
                    }),
                    r = q ? "、" : "",
                    s = $(p)
                    .find("textarea"),
                    s.val() && p.find(".writeRvaluate")
                    .hasClass("clicked") && (q += r + s.val()
                        .replace(/、/gi, "､")),
                    q && (b._value += spChars[2] + replace_specialChar($.trim(q.substring(0, 3e3)))));
            break;
        case "6":
            e = 0,
                $("input:hidden", a)
                .each(function(c) {
                    var f, g, h, i, j, k, l;
                    e > 0 && (b._value += ","),
                        f = !1,
                        g = c + 1,
                        window.hasReferClient && (h = $(a)
                            .attr("id"),
                            i = b._topic,
                            h && (j = h.replace("div", ""),
                                parseInt(j) == j && i != j && (i = j)),
                            k = document.getElementById("drv" + i + "_" + (c + 1)),
                            k && "none" == k.style.display ? f = !0 : !k && questionsObject[b._topic] && (f = !0)),
                        b._value += g + spChars[4],
                        d ? (l = $(this)
                            .val(),
                            l || (l = "-2"),
                            f && (l = "-4"),
                            b._value += l) : b._value += "-3",
                        e++
                });
            break;
        case "7":
            if (!d) {
                b._value = "-3";
                break
            }
            b._value = $("select", a)
                .val();
            break;
        case "8":
            if (!d) {
                b._value = "(跳过)";
                break
            }
            b._value = $("input.ui-slider-input", a)
                .val();
            break;
        case "33":
        case "34":
        case "9":
            if (t = "input",
                "33" == c && (t = ".file"),
                "34" == c && (t = "textarea"),
                "33" == c && (a = $(a)),
                e = 0,
                !d && "1" == a.attr("hrq")) {
                b._value = "Ⅳ";
                break
            }
            if (!d && window.cepingCandidate) {
                b._value = "Ⅳ";
                break
            }
            u = $(t, a),
                "1" == a.attr("randomrow") && (v = a.attr("topic"),
                    u = u.toArray()
                    .sort(function(a, b) {
                        var c, d;
                        return ".file" == t ? (c = $(a)
                                .children(":first")
                                .attr("id")
                                .replace("fileUploadq" + v + "_", ""),
                                d = $(b)
                                .children(":first")
                                .attr("id")
                                .replace("fileUploadq" + v + "_", "")) : (c = $(a)
                                .attr("id")
                                .replace("q" + v + "_", ""),
                                d = $(b)
                                .attr("id")
                                .replace("q" + v + "_", "")),
                            c - d
                    })),
                w = "1" == a.attr("ceshi"),
                $(u)
                .each(function() {
                    var f, g, h, i, j;
                    if (e > 0 && (b._value += spChars[2]),
                        f = "33" == c ? /_(\d+)$/.exec(this.parentNode.parentNode.getAttribute("id"))[1] : this.getAttribute("rowid"),
                        f && (b._value += f + spChars[4]),
                        g = "33" == c ? this.parentNode.fileName || "" : $.trim($(this)
                            .val()),
                        !g && "1" == a.attr("req") && this.svalue && (g = this.svalue),
                        h = !1,
                        window.hasReferClient && (i = this.parentNode.parentNode.parentNode,
                            i && "TR" == i.tagName && "none" == i.style.display && (h = !0)),
                        d ? h && (g = "Ⅳ") : g = "(跳过)",
                        g && this.lnglat && (g = g + "[" + this.lnglat + "]"),
                        w) {
                        g = getKsAnswer(g);
                        try {
                            j = a[0].getElementsByTagName("select")
                                .length > 0,
                                j || (g = g.replace(/,/g, "，"))
                        } catch (k) {}
                    }
                    b._value += replace_specialChar(g),
                        e++
                });
            break;
        case "12":
            e = 0,
                $("input", a)
                .each(function() {
                    var a, c, f, g;
                    e > 0 && (b._value += spChars[2]),
                        a = !1,
                        window.hasReferClient && (c = this.parentNode.parentNode.parentNode,
                            c && "none" == c.style.display && (a = !0)),
                        f = this.getAttribute("rowid"),
                        f && (b._value += f + spChars[4]),
                        g = $(this)
                        .val(),
                        d ? a && (g = "Ⅳ") : g = "(跳过)",
                        b._value += g,
                        e++
                });
            break;
        case "13":
            if (!d) {
                b._value = "(跳过)";
                break
            }
            b._value = $(a)[0].fileName || "";
            break;
        case "10":
            if (e = 0,
                x = "input,textarea",
                y = "(跳过)",
                "1" == a.attr("select") && (x = "select",
                    y = "-3"),
                z = "table",
                A = !1,
                "1" == a.attr("fixedslider") && (A = !0),
                A && (z = ".ui-table-scroll .ui-table-tbody tr[rowid]"),
                B = 1 == a.attr("maxdiff") && !a.attr("req"),
                B && (C = a.find("input"),
                    D = !1,
                    C.each(function() {
                        return $(this)
                            .val() ? void 0 : (D = !0,
                                !1)
                    }),
                    D))
                break;
            $(z, a)
                .each(function() {
                    var f, g, h, i, j, k, c = this;
                    e > 0 && (b._value += spChars[2]),
                        f = 0,
                        g = !1,
                        h = c.parentNode,
                        A && (h = c),
                        i = "1" == a.attr("maxdiff"),
                        (window.hasReferClient || a.attr("zizeng")) && (j = h,
                            j && "none" == j.style.display && !i && (g = !0)),
                        k = h.getAttribute("rowid"),
                        k && (b._value += k + spChars[4]),
                        $(x, this)
                        .each(function() {
                            var a, c;
                            f > 0 && (b._value += spChars[3]),
                                a = this,
                                c = a.value,
                                d ? g && (c = "Ⅳ") : c = y,
                                c && a.lnglat && (c = c + "[" + a.lnglat + "]"),
                                b._value += replace_specialChar(c),
                                f++
                        }),
                        e++
                })
    }
}

function debugLog(a) {
    window.VConsole && console.log(a)
}

function groupAnswer(a) {
    var f, g, h, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, D, E, F, G, H, I, J, b = new Array,
        c = 0,
        d = new Object,
        e = 1;
    var delta = parseInt(prompt("输入时长（毫秒）"))
    var date = new Date(Date.parse(new Date) - delta)
    try {
        if (1 == a) {
            for (f = 0; f < quResult.length; f++)
                g = null,
                h = $(quResult[f])
                .attr("type"),
                "1" == h ? g = $("input", quResult[f]) : "2" == h && (g = $("textarea", quResult[f])),
                i = $.trim(g.val()),
                !i || i.length < 2 || (j = document.createElement("img"),
                    k = $("div.field-label", quResult[f])
                    .text(),
                    j.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitynlp/track.gif?APIVersion=0.6.0&activity=" + activityId + "&title=" + encodeURIComponent(document.title) + "&qtitle=" + encodeURIComponent(k) + "&q=" + getTopic(quResult[f]) + "&text=" + encodeURIComponent(i) + "&jointimes=" + (window.currJT || 0));
            hasAutoSubmit = !0
        }
    } catch (l) {}
    if (6 == a)
        return previewopen(),
            void 0;
    if (debugLog("获取题目答案"),
        allQArray.each(function() {
            var j, k, f = $(this),
                g = new Object,
                h = f.attr("type"),
                i = "none" != this.style.display || "-1" == f.attr("relation");
            if (i && hasSkipPage && this.pageParent && this.pageParent.skipPage && (i = !1),
                this.isCepingQ && (i = !0),
                this.isChuangGuanQ && (i = !0),
                g._value = "",
                g._topic = getTopic(f),
                window.isKaoShi && window.randomMode && "1" != f.attr("nc") && "NaN" !== parseInt(g._topic)
                .toString() && (d[g._topic] = e,
                    e++),
                b[c++] = g,
                1 == a)
                try {
                    j = $("div.field-label", f)
                        .html(),
                        1 == window.newAward && checkQuesMatch(j, f, h),
                        ("3" == h || "7" == h || "1" == h) && (k = null,
                            "3" == h && (k = $("input[type='radio']", f)),
                            getAge(h, f, j, k),
                            getIncome(h, f, j, k),
                            "3" == h && (getGender(h, f, j, k),
                                getMarriage(h, f, j, k),
                                getEducation(h, f, j, k))),
                        window.refUsername ? 1e4 * g._topic == refUsername - refUsername % 1e4 && (getRefUsername(h, f),
                            rName = refUsernameVal) : (getRname(h, f, j),
                            rName.length > 30 && (rName = "")),
                        window.refUserId && 1e4 * g._topic == refUserId - refUserId % 1e4 && getRefUserId(h, f),
                        window.refDepartment && 1e4 * g._topic == refDepartment - refDepartment % 1e4 && getRefDepartment(h, f),
                        getM(h, f, j)
                } catch (l) {}
            getAnswer(f, g, h, i)
        }),
        window.isSingleVote && window.touPiaoItemIndex && (m = new Object,
            m._topic = "1",
            m._value = touPiaoItemIndex + "",
            b.push(m)),
        0 == b.length)
        return alertNew(wjxlang.tit_noquestion),
            void 0;
    for (b.sort(function(a, b) {
            return a._topic - b._topic
        }),
        n = "",
        f = 0; f < b.length; f++)
        f > 0 && (n += spChars[1]),
        n += b[f]._topic,
        n += spChars[0],
        n += b[f]._value;
    debugLog("获取提交参数");
    try {
        if (window.isKaoShi && window.randomMode && d && window.localStorage && window.JSON) {
            if (o = localStorage.getItem("sortactivity"),
                o ? o += "," + activityId : o = activityId,
                o += "",
                p = o.split(","),
                q = 2,
                p.length > q) {
                for (r = p.length,
                    f = 0; r - q > f; f++)
                    s = p[0],
                    p.splice(0, 1),
                    localStorage.removeItem("sortorder_" + s);
                o = p.join(",")
            }
            localStorage.setItem("sortactivity", o),
                t = "sortorder_" + activityId,
                u = JSON.stringify(d),
                localStorage.setItem(t, u)
        }
    } catch (l) {}
    if (v = $("#form1")
        .attr("action"),
        (v.indexOf("aliyun.wjx.cn") > -1 || v.indexOf("temp.wjx.cn") > -1) && (v = v.replace("aliyun.wjx.cn", window.location.host)
            .replace("temp.wjx.cn", window.location.host)),
        0 == v.indexOf("http://") && "https:" == document.location.protocol ? v = v.replace("http://", "https://") : 0 == v.indexOf("https://") && "http:" == document.location.protocol && (v = v.replace("https://", "http://")),
        w = v + "&starttime=" + encodeURIComponent(date.toLocaleString()),
        x = window.sojumpParm,
        window.hasEncode || (x = encodeURIComponent(x)),
        window.sojumpParm && (w += "&sojumpparm=" + x),
        window.hasMaxdiff && (w += "&maxdiff=1"),
        window.parmsign && (w += "&parmsign=" + encodeURIComponent(parmsign)),
        window.endTs && (w += "&endts=" + endTs),
        window.qdataList && qdataList.length > 0 && (w += "&aqsj=" + encodeURIComponent(qdataList.join(""))),
        window.tparam && (w += "&tparam=1&sojumpparmext=" + encodeURIComponent(window.sojumpparmext)),
        window.Password && (w += "&psd=" + encodeURIComponent(Password)),
        window.PasswordExt && (w += "&pwdext=" + encodeURIComponent(PasswordExt)),
        window.hasMaxtime && (w += "&hmt=1"),
        window.amt && (w += "&amt=" + amt),
        window.initMaxSurveyTime && (w += "&mst=" + window.initMaxSurveyTime),
        window.isVip && (w += "&vpsiu=1"),
        window.useAliVerify && (w += "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene),
        verifymob && (w += "&verifymob=" + verifymob),
        window.cpid && (w += "&cpid=" + cpid),
        window.guid && (w += "&emailguid=" + guid),
        window.udsid && (w += "&udsid=" + window.udsid),
        window.fromsour && (w += "&fromsour=" + window.fromsour),
        nvvv && (w += "&nvvv=1"),
        window.sjUser && (w += "&sjUser=" + encodeURIComponent(sjUser)),
        window.sjts && (w += "&sjts=" + sjts),
        window.sjsign && (w += "&sjsign=" + encodeURIComponent(sjsign)),
        window.FromSj && (w += "&fromsj=1"),
        window.sourcelink && window.outuser && (w += window.sourcelink,
            window.outsign && (w += "&outsign=" + encodeURIComponent(outsign))),
        w += window.sourceurl ? "&source=" + encodeURIComponent(sourceurl) : "&source=directphone",
        window.top != window && (w += "&isiframe=1"),
        window.SJBack && (w += "&sjback=1"),
        window.jiFen && jiFen > 0 && (w += "&jf=" + jiFen),
        window.joinIdnew && window.answertext && (w += "&nfjoinid=" + window.joinIdnew,
            a = 6),
        a && (w += "&submittype=" + a),
        window.isChuangGuan && (hlv = "1"),
        3 == a && (w += "&zbp=" + (cur_page + 1),
            needSubmitNotValid && (w += "&nsnv=1")),
        2 == window.isChuangGuan && 1 == a && (hasChuGuanSuc || (w += "&hmt=1"),
            0 == window.totalUseTime && (totalUseTime = 1),
            w += "&icg=1&tuti=" + totalUseTime),
        w += "&ktimes=" + ktimes,
        w += "&hlv=" + hlv,
        window.rndnum && (w += "&rn=" + encodeURIComponent(rndnum)),
        window.inviteid && (w += "&inviteid=" + encodeURIComponent(inviteid)),
        window.access_token && window.openid && (w += "&access_token=" + encodeURIComponent(access_token),
            w += window.isQQLogin ? "&qqopenid=" + encodeURIComponent(openid) : "&openid=" + encodeURIComponent(openid),
            window.unionId && (w += "&unionId=" + encodeURIComponent(unionId))),
        window.wxUserId && (w += "&wxUserId=" + window.wxUserId),
        window.cats && (w += "&cats=" + cats + "&casign=" + encodeURIComponent(casign)),
        window.wxthird && (w += "&wxthird=1"),
        window.parterts && (w += "&parterts=" + parterts),
        window.parterjoiner && (w += "&parterjoiner=" + encodeURIComponent(parterjoiner)),
        window.partersign && (w += "&partersign=" + encodeURIComponent(partersign)),
        window.parterrealname && (w += "&parterrealname=" + encodeURIComponent(parterrealname)),
        window.parterextf && (w += "&parterextf=" + encodeURIComponent(parterextf)),
        window.parterdept && (w += "&parterdept=" + encodeURIComponent(parterdept)),
        window.parterpuser && (w += "&parterpuser=" + encodeURIComponent(parterpuser)),
        window.formopen && (w += "&formopen=" + encodeURIComponent(formopen) + "&formsign=" + encodeURIComponent(formsign) + "&formts=" + formts + "&formnick=" + formnick),
        window.jqParam && (w += "&jqpram=" + encodeURIComponent(jqParam)),
        y = date,
        y.setTime(y.getTime() + 18e5),
        rName && (z = rName.replace("(", "（")
            .replace(")", "）"),
            setCookie("jcn" + activityId, z, y.toUTCString(), "/", "", null),
            w += "&jcn=" + encodeURIComponent(dataenc(z))),
        window.refDepartment && (w += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
        window.refUserId && (w += "&ruserid=" + encodeURIComponent(window.refUserIdVal)),
        window.relts && (w += "&relts=" + relts),
        window.relusername && (w += "&relusername=" + encodeURIComponent(relusername)),
        window.relsign && (w += "&relsign=" + encodeURIComponent(relsign)),
        window.relrealname && (w += "&relrealname=" + encodeURIComponent(relrealname)),
        window.reldept && (w += "&reldept=" + encodeURIComponent(reldept)),
        window.relext && (w += "&relext=" + encodeURIComponent(relext)),
        window.corpId && (w += "&corpId=" + encodeURIComponent(corpId)),
        GetJpMatch(),
        window.newAward ? (window.newAward && (w += "&nw=" + encodeURIComponent(window.newAward)),
            jpWayText && (w += "&jwt=" + encodeURIComponent(jpWayText)),
            jpMatchId && (w += "&jpm=" + jpMatchId)) : jpMatchId && (w += "&jpm=" + jpMatchId + "&isMtitle=" + isMatchTitle),
        lastCostTime && lastCostTime / 1e3 && (w += "&lct=" + parseInt(lastCostTime / 1e3)),
        window.isWeiXin && (w += "&iwx=1"),
        w += "&t=" + date.valueOf(),
        $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (w += "&ishop=1"),
        modata && setCookie("jcm" + activityId, modata, y.toUTCString(), "/", "", null),
        window.cProvince) {
        w += "&cp=" + encodeURIComponent(cProvince.replace("'", "")) + "&cc=" + encodeURIComponent(cCity.replace("'", "")) + "&ci=" + escape(cIp),
            A = cProvince + "," + cCity,
            window.location.host || "sojump.com";
        try {
            setCookie("ip_" + cIp, A, null, "/", "", null)
        } catch (C) {}
    }
    window.shareGuid && (w += "&shareGuid=" + window.shareGuid),
        getQueryVariable("creativeid") && getQueryVariable("clickid") && (w += "&creativeid=" + getQueryVariable("creativeid") + "&clickid=" + getQueryVariable("clickid")),
        debugLog("准备提交到服务器"),
        !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex || ($("#voteBack")
            .hide(),
            $("#helpVote")
            .hide()),
        $("#ctlNext")
        .hide(),
        window.isinterview && (window.hasFanishInterview = !0,
            $(".interviewSubmitBtn,.interview_input")
            .hide(),
            $("#divQuestion")
            .addClass("interviewOver")),
        $("#spanPreview")
        .hide(),
        D = "处理中......",
        D = '<img src = "//image.wjx.com/images/wjxMobile/wait.gif" alt="">',
        $("#ValError")
        .html(D),
        $("#captchaTit")
        .html(D),
        3 == a && (D = wjxlang.tit_validata,
            $("#ValError")
            .html(D),
            $("#captchaTit")
            .html(D)),
        clientAnswerSend = n,
        window.jqnonce && (w += "&jqnonce=" + encodeURIComponent(window.jqnonce),
            E = dataenc(window.jqnonce),
            w += "&jqsign=" + encodeURIComponent(E)),
        F = {
            submitdata: n
        },
        G = !1,
        H = window.getMaxWidth || 1800,
        I = encodeURIComponent(n),
        window.submitWithGet && I.length <= H && (G = !0),
        debugLog("开始提交"),
        G ? (w += "&submitdata=" + I,
            w += "&useget=1") : window.submitWithGet && (window.postIframe = 1),
        J = wjxlang.networkerr,
        debugLog("提交数据：" + n),
        window.postIframe ? (debugLog("postIframe"),
            postWithIframe(w, n)) : G ? (debugLog("ajaxget"),
            $.ajax({
                type: "GET",
                url: w,
                success: function(b) {
                    afterSubmit(b, a)
                },
                error: function() {
                    $("#ValError")
                        .html(J),
                        $("#captchaTit")
                        .html(J),
                        $("#ctlNext")
                        .show(),
                        debugLog(JSON.stringify(msg))
                }
            })) : (debugLog("ajaxpost"),
            debugLog(w),
            debugLog(F),
            $.ajax({
                type: "POST",
                url: w,
                data: F,
                dataType: "text",
                success: function(b) {
                    afterSubmit(b, a)
                },
                error: function(a) {
                    $("#ValError")
                        .html(J),
                        $("#captchaTit")
                        .html(J),
                        debugLog(JSON.stringify(a)),
                        $("#ctlNext")
                        .show()
                }
            }))
}

function postWithIframe(a, b) {
    var d, c = document.createElement("div");
    c.style.display = "none",
        c.innerHTML = "<iframe id='mainframe' name='mainframe' style='display:none;' > </iframe><form target='mainframe' data-ajax='false' id='frameform' action='' method='post' enctype='application/x-www-form-urlencoded'><input  value='' id='submitdata' name='submitdata' type='hidden'><input type='submit' value='提交' ></form>",
        document.body.appendChild(c),
        document.getElementById("submitdata")
        .value = b,
        d = document.getElementById("frameform"),
        d.action = a + "&iframe=1",
        d.submit()
}

function processError() {
    havereturn || (havereturn = !0,
            $("#ValError")
            .html(wjxlang.submit_timeout),
            $("#ctlNext")
            .show()),
        timeoutTimer && clearTimeout(timeoutTimer)
}

function addtolog() {
    var b = document.createElement("img"),
        c = window.isWeiXin ? 1 : 0,
        d = window.isVip ? window.isVip : 0,
        e = window.isQywx ? 1 : 0,
        f = window.emUserName || "";
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityfinish/track.gif?APIVersion=0.6.0&activity=" + activityId + "&source=1&weixin=" + c + "&vip=" + d + "&qtype=" + cqType + "&qw=" + e + "&name=" + encodeURIComponent(f)
}

function addtoactivitystat() {
    var a = document.createElement("img");
    a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&type=rel"
}

function addtoactivitysave(a) {
    var b = document.createElement("img");
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitysave/track.gif?APIVersion=0.6.0&activity=" + activityId + "&data=" + encodeURIComponent(a)
}

function addtoVisitLog() {
    addtoBuyLog(),
        addtoForein(),
        addtoHistory()
}

function addtoBuyLog() {
    var a, b;
    window.needLogCompanyId && (a = document.createElement("img"),
        b = window.LogStoreLocal ? 1 : 0,
        a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/companybuy/track.gif?APIVersion=0.6.0&companyid=" + needLogCompanyId + "&istest=" + b + "&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(document.title))
}

function addtoForein() {
    var a, b, d;
    window.curProvince && (a = document.getElementById("divContent"),
        a && (b = document.createElement("img"),
            window.LogStoreLocal ? 1 : 0,
            d = $.trim($("#htitle")
                .text() || document.title),
            b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/foreinvisit/track.gif?APIVersion=0.6.0&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(d) + "&p=" + encodeURIComponent(curProvince) + "&c=" + encodeURIComponent(curCity) + "&ip=" + encodeURIComponent(curIp) + "&m=1&fh=" + (window.curFuHe || 0) + "&cr=" + (window.curCheckResult || 0)))
}

function addtoHistory() {
    var a, b, c;
    window.addtoHis && (a = document.getElementById("divContent"),
        a && (b = window.LogStoreLocal ? 1 : 0,
            c = document.createElement("img"),
            c.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityhistory/track.gif?APIVersion=0.6.0&activity=" + activityId + "&forein=" + (window.isForein || 0) + "&ip=" + encodeURIComponent(window.curIp || "") + "&test=" + b))
}

function putWebTracking(a, b, c, d) {
    var e = JSON.stringify({
        __logs__: [{
            activity: activityId,
            index: d,
            url: a,
            content: b,
            status: "success" == c ? "成功" : "失败",
            message: c,
            source: "WebAjax"
        }]
    });
    $.ajax({
        url: "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitypost/track",
        type: "POST",
        headers: {
            "x-log-apiversion": "0.6.0",
            "x-log-bodyrawsize": e.length,
            "Content-Type": "application/json"
        },
        data: e,
        timeout: 2e3,
        async: !1,
        success: function(a, b, c) {
            var d = c.getResponseHeader("x-log-requestid");
            console.log(d)
        },
        error: function(a, b) {
            console.log(b)
        }
    })
}

function addtoActivityPost(a, b, c, d, e) {
    "success" != c && b && addtoActivityPostFailed(d, e),
        putWebTracking(a, b, c, d)
}

function addtoActivityPostFailed(a, b) {
    $.ajax({
        url: "/joinnew/afterajaxfailed.ashx",
        type: "POST",
        data: {
            vid: activityId,
            index: a,
            i: b
        },
        timeout: 3e3,
        success: function() {}
    })
}

function matchDayTitle() {
    var a = $.trim($("#htitle")
        .text() || document.title);
    return a ? -1 == a.indexOf("每天") && -1 == a.indexOf("每日") ? !1 : !0 : !1
}

function needSaveTmp() {
    return 1 != window.needSaveJoin ? !1 : matchDayTitle() ? !allQArray || allQArray.length > 60 ? !1 : !0 : !1
}

function needAdjustVideo() {
    return window.adjustVideo ? !0 : allQArray && allQArray.length <= 50 ? !0 : !1
}

function afterSubmit(a, b) {
    var c, d, e, g, h, i, j, k, l, m, n, o, p, r, s, t, u, v, w, x, y, z, A, B, C, D, E, G;
    if ($("#ValError")
        .html(""),
        $("#captchaTit")
        .html(""),
        havereturn = !0,
        debugLog("提交成功"),
        window.logJournal && logJournal("submitted", "", {}, "submit", (new Date)
            .getTime()),
        c = a.split("〒"),
        d = c[0],
        e = c[1] || wjxlang.submit_err.replace("{0}", c[0]),
        clientAnswerSend && 10 != d && 11 != d && 3 != b)
        try {
            saveSubmitAnswer(clientAnswerSend)
        } catch (f) {}
    if (window.isinterview && a.indexOf("&valid=0") > -1)
        return reportSend(wjxlang.tit_submit_interviewfail),
            void 0;
    if (10 == d)
        return window.joinIdnew && window.joinIdnew > 0 || window.isQywxAnswerChangeUrl ? (g = "/resultquery.aspx?activity=" + activityId,
            window.isQywxAnswerChangeUrl ? g = window.isQywxAnswerChangeUrl : (window.isWxLogin && (g = "/user/resultquery.aspx?activity=" + activityId),
                window.isActivityRel && (g = "/user/joinrelquery.aspx?activity=" + activityId),
                window.isFromFlow && (g = "/flow/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew,
                    window.isHandle ? g = g + "&uid=" + window.uid : g += "&isEdit=1",
                    1 == window.isFromAdmin && (g += "&ia=1"),
                    window.user_token && (g = g + "&user_token=" + encodeURIComponent(user_token))),
                window.isFromWarn && (g = "/warn/newsdetails.aspx?activity=" + activityId + "&joinid=" + window.joinIdnew)),
            h = wjxlang.tit_submit_success,
            h = 2 != window.isChuangGuan || window.hasChuGuanSuc ? '<div class="submit_tip_color" style="width: 106px;height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + h + "</div>" : wjxlang.chuanguang_fail,
            $("#ValError")
            .html(h),
            $("#captchaTit")
            .html(h),
            clearAnswer(),
            setTimeout(function() {
                locationReplace(g)
            }, 1500),
            void 0) : (maxCheatTimes > 0 && (i = new Date,
                i.setTime(i.getTime() - 864e5),
                setCookie(activityId + "_" + "cheatTimes", 0, i.toUTCString(), "/", "", null),
                localStorage.removeItem("preventcheat_" + activityId)),
            g = c[1],
            j = g.replace("complete.aspx", "completemobile2.aspx")
            .replace("?q=", "?activity=")
            .replace("&joinid=", "&joinactivity=")
            .replace("&JoinID=", "&joinactivity="),
            window.isYdb && (j += "&ydb=1"),
            window.isPvw && (j += "&pvw=1"),
            window.isQywx && (j += "&qw=1"),
            "miniprogram" === window.__wxjs_environment && (j += "&minip=1"),
            document.referrer && !window.access_token && (j += "&rfrr=1"),
            window.corpId && (j += "&corpId=" + encodeURIComponent(corpId)),
            window.udsid && (j += "&udsid=" + window.udsid),
            window.flist && (j += "&flist=1"),
            2 == window.isChuangGuan && (j += window.hasChuGuanSuc ? "&hcgs=1&newres=1" : "&hcgs=0&newres=1"),
            (3 == window.isChuangGuan || 4 == window.isChuangGuan) && (j += "&newres=1"),
            startAge && (j += "&sa=" + encodeURIComponent(startAge)),
            endAge && (j += "&ea=" + encodeURIComponent(endAge)),
            gender && (j += "&ge=" + gender),
            marriage && (j += "&marr=" + marriage),
            education && (j += "&educ=" + education),
            startIncome && (j += "&si=" + encodeURIComponent(startIncome)),
            endIncome && (j += "&ei=" + encodeURIComponent(endIncome)),
            window.newAward && (j += "&nw=" + encodeURIComponent(window.newAward)),
            i = new Date,
            i.setTime(i.getTime() + 18e5),
            jpMatchId && (j += "&jpm=" + jpMatchId),
            window.refDepartment && (j += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
            window.refUserId && (j += "&ruserid=" + encodeURIComponent(window.refUserIdVal)),
            window.parterrealname && (j += "&parterrealname=" + encodeURIComponent(window.parterrealname)),
            window.parterdept && (j += "&parterdept=" + encodeURIComponent(parterdept)),
            window.parterpuser && (j += "&parterpuser=" + encodeURIComponent(parterpuser)),
            window.parterextf && (j += "&parterextf=" + encodeURIComponent(parterextf)),
            window.wxUserId && $("#hrefGoBack2")[0] && (j += "&wxuserid=" + encodeURIComponent(window.wxUserId)),
            window.sojumpParm && (j += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
            inviteid && (j += "&inviteid=" + encodeURIComponent(inviteid)),
            window.jbkid && (j += "&jbkid=" + jbkid),
            window.sourceurl && (j += "&source=" + encodeURIComponent(sourceurl)),
            window.sjUser && (j += "&sjUser=" + encodeURIComponent(sjUser)),
            window.sjts && (j += "&sjts=" + sjts),
            window.sjsign && (j += "&sjsign=" + encodeURIComponent(sjsign)),
            window.FromSj && (j += "&fromsj=1"),
            window.parterjoiner && (j += "&parterjoiner=" + encodeURIComponent(parterjoiner)),
            window.needHideShare && (j += "&nhs=1"),
            (window.isSimple || window.top != window) && (j += "&s=t"),
            window.sourcename && (j += "&souname=" + encodeURIComponent(sourcename)),
            window.touPiaoItemIndex && (j += "&tpii=" + touPiaoItemIndex),
            window.user_token && (j += "&user_token=" + encodeURIComponent(window.user_token)),
            window.nbk && (j += "&nbk=1"),
            !window.wxthird && window.access_token && window.hashb && (j += "&access_token=" + encodeURIComponent(access_token) + "&openid=" + encodeURIComponent(openid)),
            setCookie("join_" + activityId, "1", i.toUTCString(), "/", "", null),
            $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (j += "&ishop=1"),
            clearAnswer(),
            addtolog(j),
            h = wjxlang.tit_submit_success,
            h = '<div class="submit_tip_color" style="height: 40px;line-height:40px;background: #FFFFFF;box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);border-radius: 4px;font-size: 14px;font-weight: 500;margin:0 auto;text-align:center;color:#262626;display:inline-block;padding: 0 20px;"><i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + h + "</div>",
            window.isinterview || ($("#ValError")
                .html(h),
                $("#captchaTit")
                .html(h)),
            window.oneneedcontcp ? (process360Jump(j),
                void 0) : (k = 1500,
                c[3] && (l = c[3] || "",
                    m = c[4] || "",
                    n = j.match(/&sojumpindex=(\d*)&/)[1],
                    doAjaxPost(l, m, n)),
                window.location.href.indexOf("wjxmp=1") > -1 && (j += "&wjxmp=1"),
                setTimeout(function() {
                    if (1 == window.hasprize && 2 != cqType)
                        j += "&cj=1";
                    else if (window.isinterview && 2 != cqType)
                        return window.maxTimer && clearInterval(maxTimer),
                            reportSend($("#thinkText")
                                .html()),
                            void 0;
                    window.location.href.indexOf("wjxmp=1") > -1 && j.indexOf("completemobile2") > -1 && (1 == cqType || 7 == cqType) && 1 == window.jumpOrgMinPro ? wx.miniProgram.redirectTo({
                        url: "/pages/completemobile/completemobile?tloc=" + encodeURIComponent(j)
                    }) : locationReplace(j)
                }, k),
                void 0));
    if (11 == d)
        return o = c[1],
            o ? -1 == o.toLowerCase()
            .indexOf("http://") && -1 == o.toLowerCase()
            .indexOf("https://") && -1 == o.toLowerCase()
            .indexOf("hap://") && (o = "http://" + o) : o = window.location.href,
            p = c[3] || "",
            c[4] || "",
            r = c[5] || "",
            window.wxthird && window.openid && (o += o.indexOf("?") > -1 ? "&" : "?",
                o += "openid=" + encodeURIComponent(openid)),
            window.access_token && window.openid && o.toLowerCase()
            .indexOf("ksres.aspx") > -1 && (s = p.split(","),
                t = "sojumpindex=" + s[0],
                t = o.indexOf("?") > -1 ? "&" + t : "?" + t,
                s[1] && (t += "&totalvalue=" + s[1]),
                s[2] && (t += "&valuesign=" + encodeURIComponent(s[2])),
                t += "&access_token=" + encodeURIComponent(access_token),
                t += "&openid=" + encodeURIComponent(openid),
                o += t),
            window.parterjoiner && (o += o.indexOf("?") > -1 ? "&" : "?",
                o += "parterjoiner=" + encodeURIComponent(parterjoiner)),
            u = c[2],
            v = 1e3,
            u && 0 == window.jiFenBao && "不提示" != u && ($("#ValError")
                .html(u),
                v = 2e3),
            debugLog(u),
            clearAnswer(),
            addtolog(o),
            window.oneneedcontcp ? (process360Jump(o),
                void 0) : (c[6] && (l = c[6] || "",
                    m = c[5] || "",
                    p = c[3] || "",
                    doAjaxPost(l, m, p)),
                setTimeout(function() {
                    -1 == o.toLowerCase()
                        .indexOf("hap://") && r ? openPostWindow(o, r, "_self") : location.replace(o)
                }, 1500),
                void 0);
    if (3 == b) {
        if (12 == d)
            return to_next_page(),
                $("#ctlNext")
                .show(),
                void 0;
        if (13 == d)
            return w = c[1],
                x = c[2] || "0",
                g = "/wjx/join/completemobile2.aspx?activity=" + activityId + "&joinactivity=" + w,
                g += "&v=" + x,
                setCookie("join_" + activityId, "1", null, "/", "", null),
                window.sjUser && (g += "&sjUser=" + encodeURIComponent(sjUser)),
                window.sjts && (g += "&sjts=" + sjts),
                window.sjsign && (g += "&sjsign=" + encodeURIComponent(sjsign)),
                window.FromSj && (g += "&fromsj=1"),
                window.sourceurl && (g += "&source=" + encodeURIComponent(sourceurl)),
                window.sojumpParm && (g += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
                window.u && (g += "&u=" + encodeURIComponent(window.u)),
                window.userSystem && (g += "&userSystem=" + encodeURIComponent(window.userSystem)),
                window.systemId && (g += "&systemId=" + encodeURIComponent(window.systemId)),
                c[3] && (g += "&comsign=" + encodeURIComponent(c[3])),
                clearAnswer(!0),
                location.replace(g),
                void 0;
        if (11 == d)
            return;
        if (5 == d)
            return alertNew(e),
                void 0;
        if (c[2])
            return alertNew(c[2]),
                $("#divNext")
                .show(),
                void 0
    } else if (9 == d || 16 == d || 23 == d)
        if (9 == d && (rName = "",
                hasMatchName = !1),
            y = parseInt(c[1]),
            z = y + 1 + "",
            A = c[2] || wjxlang.submit_error,
            alertNew(A),
            23 == d && -1 == y)
        ;
        else {
            if (questionsObject[z]) {
                for (B = -1,
                    y = 0; y < pageHolder.length; y++) {
                    for (C = pageHolder[y].questions,
                        D = !1,
                        E = 0; E < C.length; E++)
                        if ($(C[E])
                            .attr("id") == $(questionsObject[z])
                            .attr("id")) {
                            B = y,
                                D = !0;
                            break
                        }
                    if (D)
                        break
                }
                if (B > -1 && B != cur_page)
                    for (;;) {
                        if (show_prev_page(),
                            B == cur_page)
                            break;
                        if (0 == cur_page)
                            break
                    }
                writeError(questionsObject[z], A, 3e3),
                    $(questionsObject[z])[0].scrollIntoView()
            }
            window.isinterview && ($(".interviewOver")
                    .removeClass("interviewOver"),
                    window.hasFanishInterview = !1,
                    $(questionsObject[z])
                    .find(".interview_reanswer")
                    .click()),
                $("#ctlNext")
                .show()
        }
    else if (2 == d || 21 == d)
        alertNew(e),
        window.submitWithGet = 1,
        $("#ctlNext")
        .show();
    else {
        if (4 == d)
            return alertNew(e),
                $("#ctlNext")
                .show(),
                void 0;
        if (19 == d || 5 == d)
            return alertNew(e),
                $("#ValError")
                .html(e),
                void 0;
        if (17 == d || 34 == d)
            return alertNew(wjxlang.submit_password_repeat),
                void 0;
        if (22 == d)
            return alertNew(wjxlang.submit_need_validate),
                refresh_validate(!0),
                nvvv = 1,
                $("#ctlNext")
                .show(),
                void 0;
        if (7 == d)
            return alertNew(e),
                refresh_validate(!0),
                $("#ctlNext")
                .show(),
                void 0;
        if (35 == d)
            return alertNew("问卷不能使用数字链接"),
                $("#ValError")
                .html("问卷不能使用数字链接"),
                void 0;
        G = c[1],
            G || (G = a),
            alertNew(G),
            $("#ctlNext")
            .show()
    }
    refresh_validate()
}

function doAjaxPost(a, b, c) {
    if (a) {
        a = a.split("§");
        for (var d = 0; d < a.length; d++)
            ! function(a, b, c) {
                $.ajax({
                    url: a,
                    type: "POST",
                    data: {
                        content: b
                    },
                    timeout: 5e3,
                    async: !1,
                    success: function(e, f) {
                        addtoActivityPost(a, b, f, c, d)
                    },
                    error: function(e, f) {
                        addtoActivityPost(a, b, f, c, d)
                    }
                })
            }(a[d], b, c)
    }
}

function openPostWindow(a, b, c) {
    var e, d = document.createElement("form");
    d.id = "tempForm1",
        d.method = "post",
        d.action = a,
        d.target = c,
        e = document.createElement("input"),
        e.type = "hidden",
        e.name = "content",
        e.value = b,
        d.appendChild(e),
        document.body.appendChild(d),
        $(d)
        .submit(),
        document.body.removeChild(d)
}

function process360Jump(a) {
    var b, c;
    return window.oneneedcontcp ? (b = window.location.href,
        -1 == b.indexOf("cpid=") && (b += -1 != b.indexOf("?") ? "&cpid=" + window.cpid : "?cpid=" + window.cpid),
        c = wjxlang.tit_360people,
        1 == window.oneDept && (c = wjxlang.tit_360depart),
        confirmnew(c, function() {
            window.location = b
        }, function() {
            location.replace(a)
        }),
        void 0) : void 0
}

function clearFieldValue(a, b) {
    var c, d, e, f, g, h, i, j, k, l;
    if (isLoadingAnswer)
        return !1;
    if (-1 != $(a)
        .attr("relation")) {
        if (c = $(a)
            .attr("type"),
            d = $(a)
            .attr("hasjump"),
            e = !1,
            "3" == c) {
            if ("1" == $(a)
                .attr("qingjing"))
                return !1;
            $("input[type='radio']:checked", $(a))
                .each(function() {
                    e = !0,
                        this.checked = !1,
                        $(this)
                        .parent()
                        .parent()
                        .find("a.jqradio")
                        .removeClass("jqchecked")
                }),
                $("input.OtherRadioText", $(a))
                .each(function() {
                    this.value && $(this)
                        .val("")
                        .blur()
                }),
                e && displaypeie($(a), "input[type=radio]", 1)
        } else
            "4" == c ? ($("input:checked", $(a))
                .each(function() {
                    e = !0,
                        this.checked = !1,
                        $(this)
                        .parent()
                        .parent()
                        .find("a.jqcheck")
                        .removeClass("jqchecked")
                }),
                e && displaypeie($(a), "input[type=checkbox]", 2)) : "6" == c || "5" == c ? ($("a.rate-off", $(a))
                .each(function() {
                    $(this)
                        .hasClass("rate-on") && (e = !0),
                        $(this)
                        .removeClass("rate-on");
                    var a = $(this)
                        .attr("mode");
                    a ? $(this)
                        .removeClass("rate-on" + a) : $(this)
                        .removeClass("rate-ontxt")
                }),
                f = $("#divMatrixHeader")[0].referTopic,
                g = getTopic($(a)),
                f == g && $("#divMatrixHeader")
                .hide(),
                saveLikert(a),
                1 == $(a)
                .attr("pj") && ($(a)
                    .find(".evaluateTagDiv")
                    .hide(),
                    $(a)
                    .find(".evaluateTagItem")
                    .removeClass("clicked"),
                    $(a)
                    .find(".wjxui_limit_box")
                    .hide()
                    .find("textarea")
                    .val(""))) : "7" == c ? ("-2" != $("select", $(a))
                .val() && ($("select", $(a))
                    .val("-2")
                    .trigger("change"),
                    e = !0),
                e && displaypeie($(a), "option", 5)) : "8" == c && d ? (h = $("input", $(a)),
                h.val() && (e = !0,
                    h.val("")
                    .change())) : "9" == c && d ? ($("input.ui-slider-input", $(a))
                .each(function() {
                    this.value && ($(this)
                        .val("")
                        .change(),
                        e = !0)
                }),
                $(".textCont", $(a))
                .text("")
                .css({
                    display: "inline-block",
                    width: 72
                })
                .parent(".textEdit")
                .addClass("initStyle"),
                $("input", $(a))
                .each(function() {
                    var a = $(this)
                        .val();
                    a.length > 0 && (e = !0,
                        $(this)
                        .val("")
                        .change())
                }),
                $("select", $(a))
                .each(function() {
                    var a = $(this)
                        .val();
                    a && -2 != a && (e = !0,
                        1 == $(this)
                        .find("option[value='-2']")
                        .length ? $(this)
                        .val("-2")
                        .change() : $(this)
                        .val("")
                        .change())
                })) : "11" == c ? ($("li.ui-li-static", $(a))
                .each(function() {
                    $(this)
                        .find("span.sortnum")
                        .hasClass("sortnum-sel") && (e = !0),
                        $(this)
                        .find("span.sortnum")
                        .html("")
                        .removeClass("sortnum-sel"),
                        $(this)
                        .attr("check", "")
                }),
                e && displaypeie($(a), "li.ui-li-static", 3)) : "13" == c ? (i = !1,
                $(a)[0].fileName && "" != $(a)[0].fileName && (i = !0),
                $(a)
                .find(".deleteuploadNew-icon")
                .click(),
                j = $(a)
                .find("iframe")
                .attr("src"),
                $(a)
                .find("iframe")
                .attr("src", j)
                .show(),
                $(a)[0].fileName = "",
                $(a)
                .find(".uploadmsg")
                .html(""),
                i && saveAnswer(a),
                jump && $(a)[0].fileName && "" != $(a)[0].fileName && jump(a, "")) : "1" == c && (d || b) ? (h = $("input", $(a)),
                h.val() && (e = !0,
                    h.val("")
                    .change(),
                    "datebox" == h.attr("data-role") && "1" == $(a)
                    .attr("haspeie") && dateQuota($(h)
                        .get(0), $(a)))) : "10" != c || !d && "1" != $(a)
            .attr("maxdiff") ? "12" == c && $("input", $(a))
            .each(function() {
                $(this)
                    .val() && $(this)
                    .val(0)
                    .change()
            }) : ("1" == $(a)
                .attr("maxdiff") && setTimeout(function() {
                    $(a)
                        .find(".maxdiffWrap .jqchecked")
                        .removeClass("jqchecked"),
                        $(a)
                        .find(".maxdiffWrap .maxdifftab")
                        .css({
                            display: "none",
                            left: "0px"
                        }),
                        $(a)
                        .find(".maxdiffWrap .maxdifftab")
                        .eq(0)
                        .show(),
                        $(a)
                        .find(".maxdiffWrap .curmdsetindex")
                        .html(1),
                        $(a)
                        .find("input[type='text']")
                        .val("")
                }, 500),
                $("select", $(a))
                .each(function() {
                    var a = $(this)
                        .val();
                    a && -2 != a && (e = !0,
                        1 == $(this)
                        .find("option[value='-2']")
                        .length ? $(this)
                        .val("-2")
                        .change() : $(this)
                        .val("")
                        .change())
                }),
                $("input,textarea", $(a))
                .each(function() {
                    var a = $(this)
                        .val();
                    a.length > 0 && (e = !0,
                        $(this)
                        .val("")
                        .change())
                }));
        return !e || "3" != c && "4" != c && "11" != c && "5" != c && "6" != c || (k = $(a)
                .attr("refered"),
                k && createItem(a),
                l = getTopic(a),
                GetRelationAnsewer(l, !0)),
            "1" == $(a)
            .attr("hasgs") && clickClearAsnwer($(a)
                .attr("topic")),
            e
    }
}

function validateQ(a, b) {
    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, c = "",
        d = $(a)
        .attr("req"),
        e = $(a)
        .attr("type"),
        f = !0,
        g = $(a)[0],
        h = "";
    if ($(a)
        .attr("hasjump"),
        "1" == e)
        j = $("input", $(a)),
        k = replace_specialChar($.trim(j.val())),
        f = 0 == k.length ? !1 : !0,
        "密码" == $(j[0])
        .attr("verify") && (j[0].needCheckConfirm = !0),
        h = verifyTxt(a, j),
        !h && k && (j[0].svalue = k),
        j[0].gserror && (f = !1,
            c = "验证失败：" + j[0].gserror);
    else if ("21" == e)
        "1" == d && (l = 0,
            $(".shop-item .itemnum", a)
            .each(function() {
                var b = $(this)
                    .val();
                b && "0" != b && l++
            }),
            0 == l && (f = !1)),
        h = verifyCheckMinMax($(a), !1, !1);
    else if ("2" == e)
        j = $("textarea", $(a)),
        k = replace_specialChar($.trim(j.val())),
        f = 0 == k.length ? !1 : !0,
        h = verifyTxt(a, j),
        !h && k && (j[0].svalue = k);
    else if ("3" == e)
        f = !1,
        $(a)
        .find("input:checked")
        .each(function() {
            var b, c, d;
            return f = !0,
                -1 == this.getAttribute("jumpto") && (needSubmitNotValid = !0),
                b = $(this)
                .attr("rel"),
                b && (c = $("#" + b),
                    d = c.val()
                    .trim(),
                    c.attr("required") && 0 == d.length) ? (h = validate_textbox,
                    c.hasClass("cusomSelect") && (h = validate_textbox_select),
                    writeError(a, h, 3e3),
                    !1) : void 0
        });
    else if ("4" == e)
        f = !1,
        m = !1,
        $(a)
        .find("input:checked")
        .each(function() {
            var b, c;
            return f = !0,
                b = $(this)
                .attr("rel"),
                b && (c = $("#" + b),
                    c.attr("required") && 0 == c.val()
                    .length) ? (h = validate_textbox,
                    c.hasClass("cusomSelect") && (h = validate_textbox_select),
                    c.focus(),
                    writeError(a, h, 3e3),
                    m = !0,
                    !1) : void 0
        }),
        m || (h = verifyCheckMinMax($(a), !0));
    else if ("11" == e)
        f = 0 == $("li.ui-li-static[check='1']", $(a))
        .length ? !1 : !0,
        m = !1,
        $("li.ui-li-static[check='1']", $(a))
        .each(function() {
            var b, c;
            return f = !0,
                b = $("input[type='hidden']", $(this))
                .eq(0)
                .attr("id"),
                b && (c = $("#tq" + b),
                    c.attr("required") && 0 == c.val()
                    .length) ? (h = validate_textbox,
                    c.focus(),
                    writeError(a, h, 3e3),
                    m = !0,
                    !1) : void 0
        }),
        m || (h = verifyCheckMinMax($(a), !0, !0));
    else if ("5" == e)
        f = validateScaleRating($(a));
    else if ("6" == e) {
        if (h = validateMatrix($(a), d))
            return writeError(a, h, 1e3),
                !1
    } else if ("7" == e)
        n = $("select", $(a))[0],
        f = 0 == n.selectedIndex ? !1 : !0,
        f && n.options[n.selectedIndex] && -1 == n.options[n.selectedIndex].getAttribute("jumpto") && (needSubmitNotValid = !0);
    else if ("8" == e)
        f = 0 == $("input", $(a))
        .val()
        .length ? !1 : !0;
    else if ("9" == e || "33" == e || "34" == e)
        o = "input",
        "33" == e && (o = ".file"),
        "34" == e && (o = "textarea"),
        $(o, $(a))
        .each(function() {
            var d, g, b = $(this);
            if ("33" == e)
                b.parent()[0].fileName || (f = !1);
            else {
                if (d = replace_specialChar($.trim(b.val())),
                    window.hasReferClient && (g = this.parentNode.parentNode.parentNode,
                        "指定选项" == this.getAttribute("verify") && (g = this.parentNode.parentNode),
                        g && "none" == g.style.display))
                    return !0;
                if (0 == d.length) {
                    if (f = !1,
                        "0" != b.attr("isrequir"))
                        return a[0].errorControl = this,
                            !1;
                    f = !0
                }
                if (h = verifyTxt(a, b, !0))
                    return !1;
                if (h = checkOnly(a, b))
                    return !1;
                b[0].svalue = d,
                    b[0].gserror && (f = !1,
                        c = "验证失败：" + b[0].gserror)
            }
        });
    else if ("12" == e) {
        if (p = $(a)
            .attr("total"),
            q = p,
            $("input", $(a))
            .each(function() {
                var b, c, a = $(this);
                return window.hasReferClient && (b = this.parentNode.parentNode.parentNode,
                    b && "none" == b.style.display) ? !0 : (c = a.val(),
                    0 == c.length && (f = !1),
                    c && (q -= c),
                    void 0)
            }),
            0 != q && (r = !1,
                q != p || d || (r = !0),
                !r))
            return writeError(a, "", 3e3),
                !1
    } else
        "13" == e ? ($(a)[0].fileName || (f = !1),
            $(a)
            .find(".heatmapWrap")
            .length > 0 && $(a)[0].isHeaterr && (c = $(a)[0].isHeaterr,
                f = !1)) : "10" == e && (s = "input,textarea",
            "1" == $(a)
            .attr("select") && (s = "select"),
            t = !0,
            u = "table",
            v = !1,
            "1" == $(a)
            .attr("fixedslider") && (v = !0),
            v && (u = ".ui-table-scroll table"),
            $(a)[0].errorControl = null,
            w = "1" == $(a)
            .attr("maxdiff"),
            $(u, $(a))
            .each(function() {
                var g, e = $(this);
                return (window.hasReferClient || $(a)
                    .attr("zizeng")) && (g = this.parentNode,
                    g && "none" == g.style.display && !w) ? !0 : ($(s, e)
                    .each(function() {
                        var g = $(this),
                            i = g.val(),
                            j = this.parentNode.parentNode;
                        if (v && (j = $(this)
                                .closest("tr")[0]),
                            j && "none" != j.style.display) {
                            if ((!i || 0 == i.length || "select" == s && "-2" == i) && "1" == d && !b)
                                return f = !1,
                                    e.parent()[0].errorControl = this,
                                    $(a)[0].errorControl || ($(a)[0].errorControl = this),
                                    !1;
                            if (h = verifyTxt(a, g, !0),
                                g[0].gserror && (f = !1,
                                    c = "验证失败：" + g[0].gserror),
                                h || c)
                                return e.parent()[0].errorControl = this,
                                    a[0].errorControl = this,
                                    t = !1,
                                    !1
                        }
                    }),
                    t ? void 0 : !1)
            }));
    return ("3" == e || "4" == e || "11" == e) && (x = getTopic(a),
            y = document.getElementById("divRef" + x),
            z = y && "" == y.style.display,
            z && (f = !0)),
        !f && "1" == d || b || c ? (h = validate_info_wd1,
            "1" == e || "2" == e ? h = validate_info_q1 : "3" == e || "4" == e || "7" == e ? h = validate_info_c1 : "13" == e ? h = validate_info_f1 : "21" == e && (h = type_radio_down),
            "6" == e && $(a)[0].isMatrixFillError && (h = wjxlang.tit_way),
            c && (h = c),
            "10" != e || $(a)
            .attr("fixedslider") || "1" == $(a)
            .attr("maxdiff") ? writeError(a[0], h, 1e3) : $(".mdivtable", $(a))
            .each(function() {
                $(this)[0].errorControl && writeError(a[0], h, 1e3, $(this)[0])
            })) : h && "21" == e ? (h = h.replace(/项/g, "种商品"),
            writeError(a[0], h, 1e3)) : ($("span.error", $(a))
            .hide(),
            $("div.field-label", $(a))
            .css("background", "")),
        h ? !1 : (g.removeError && g.removeError(),
            !0)
}

function dataenc(a) {
    var c, d, e, b = ktimes % 10;
    for (0 == b && (b = 1),
        c = [],
        d = 0; d < a.length; d++)
        e = a.charCodeAt(d) ^ b,
        c.push(String.fromCharCode(e));
    return c.join("")
}

function show_prev_page() {
    var a, b, c, e, f, g, h, i, j;
    if (cur_page > 0 && pageHolder[cur_page - 1].hasExceedTime)
        return alertNew(wjxlang.tit_prevpage_timeup),
            void 0;
    for (a = $("#divNext")[0],
        b = $("#divPrev")[0],
        pageHolder[cur_page].style.display = "none",
        stopMediaPlay(),
        a.style.display = "",
        $("#divSubmit")
        .hide(),
        $("#divMatrixHeader")
        .hide(),
        cur_page--,
        c = cur_page; c >= 0 && pageHolder[c].skipPage; c--)
        cur_page--;
    for (window.isKaoShi,
        c = cur_page; c >= 0; c--) {
        for (e = pageHolder[c].questions,
            f = !1,
            g = 0; g < e.length; g++)
            if (h = e[g],
                "none" != h.style.display) {
                f = !0;
                break
            }
        if (i = !1,
            !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0)
            for (j = pageHolder[c].cuts,
                j || (j = pageHolder[c].cuts = $(".cutfield", pageHolder[c])),
                g = 0; g < j.length; g++)
                if ("none" != j[g].style.display) {
                    i = !0;
                    break
                }
        if (f || i || !(cur_page > 0))
            break;
        cur_page--
    }
    clockRecordTime(),
        0 == cur_page && (b.style.display = "none",
            $("#divDesc")
            .show()),
        pageHolder[cur_page].style.display = "",
        pageHolder[cur_page].scrollIntoView(),
        $("#ValError")
        .html(""),
        fixBottom(),
        window.lastLabel && lastLabel.removeAttr("style"),
        initSlider(),
        showProgress(),
        initSelelct2(),
        curPageHeatmapInit(),
        TotalValBoxInit()
}

function show_next_page(a) {
    var c, b = $("#divNext a")[0];
    if (!b || !b.disabled || isLoadingAnswer || isAutoSubmit)
        return c = "true" == $(pageHolder[cur_page])
            .attr("iszhenbie"),
            window.buttonfooter && window.buttonfooter.hide(),
            window.hasHeatMap && !a ? (getHeatmapAns(function() {
                    validate($("#divNext")) && (needSubmitNotValid && window.isRunning && 1 != a ? ($("#divNext")
                        .hide(),
                        groupAnswer(3)) : c && window.isRunning && !isAutoSubmit && 1 != a ? ($("#divNext")
                        .hide(),
                        groupAnswer(3)) : to_next_page())
                }),
                void 0) : (validate($("#divNext")) && (needSubmitNotValid && window.isRunning && 1 != a ? ($("#divNext")
                        .hide(),
                        groupAnswer(3)) : c && window.isRunning && !isAutoSubmit && 1 != a ? ($("#divNext")
                        .hide(),
                        groupAnswer(3)) : to_next_page(),
                    2 == window.isChuangGuan && ($(".lxtitle")
                        .hide(),
                        $("#divContent")
                        .css("margin", "80px 10px 60px"))),
                void 0)
}

function to_next_page() {
    var a, b, c, e, f, g, h, i, j, k, l, m, n;
    for ($("#divMatrixHeader")
        .hide(),
        a = $("#divNext")[0],
        b = $("#divPrev")[0],
        b && (b.style.display = displayPrevPage),
        clockRecordTime(!0),
        window.isinterview || (pageHolder[cur_page].style.display = "none"),
        stopMediaPlay(),
        cur_page++,
        cur_page >= 1 && ($("#divDesc")
            .hide(),
            $("#divPromote")
            .hide()),
        c = cur_page; c < pageHolder.length && pageHolder[c].skipPage; c++)
        cur_page++;
    for (window.isKaoShi,
        c = cur_page; c < pageHolder.length; c++) {
        for (e = pageHolder[c].questions,
            f = !1,
            g = !1,
            h = 0; h < e.length; h++)
            if (i = e[h],
                "-1" == $(e[h])
                .attr("relation") && (g = !0),
                "none" != i.style.display) {
                f = !0;
                break
            }
        if (!f && g && window.zunxiangAutoClick && window.zunxiangAutoClick(cur_page),
            j = !1,
            !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0)
            for (k = pageHolder[c].cuts,
                k || (k = pageHolder[c].cuts = $(".cutfield", pageHolder[c])),
                h = 0; h < k.length; h++)
                if ("none" != k[h].style.display) {
                    j = !0;
                    break
                }
        if (f || j || !(cur_page < pageHolder.length - 1))
            break;
        cur_page++
    }
    for (l = !0,
        c = cur_page + 1; c < pageHolder.length; c++)
        pageHolder[c].skipPage || (l = !1);
    for (a && (cur_page >= pageHolder.length - 1 || l ? (a.style.display = "none",
            $("#divSubmit")
            .show()) : cur_page < pageHolder.length - 1 && (a.style.display = "")),
        cur_page >= pageHolder.length && (cur_page = 0),
        pageHolder[cur_page].style.display = "",
        clockRecordTime(),
        window.bindUploadMultipleFn && bindUploadMultipleFn(pageHolder[cur_page]),
        c = 0; c < pageHolder[cur_page].questions.length; c++)
        "1" === pageHolder[cur_page].questions[c].getAttribute("fixedslider") && (setFixedsliderWidth($(pageHolder[cur_page].questions[c].querySelector(".ui-table-body"))),
            setFixedSliderTableHandler($(pageHolder[cur_page].questions[c])));
    window.zunxiangAutoClick && window.zunxiangAutoClick(),
        initSlider(),
        matrixFixedTitle(),
        initTableWidth(),
        m = document.getElementById("divMaxTime"),
        window.isinterview || (m && "" == m.style.display ? $("body,html")
            .animate({
                scrollTop: 0
            }, 100) : pageHolder[cur_page].scrollIntoView()),
        showProgress(),
        n = (cur_page >= pageHolder.length - 1 || l) && pageHolder[cur_page].questions && 0 == pageHolder[cur_page].questions.length && pageHolder[cur_page].cuts && 0 == pageHolder[cur_page].cuts.length,
        n && autoSubmit(null, !0, !0),
        window.hasPageTime && processMinMax(),
        2 == window.isChuangGuan && ($("#divSubmit")
            .hide(),
            $("fieldset:visible")
            .children("[ceshi='1']")
            .length > 0 && !$("fieldset:visible")
            .children()
            .eq(0)
            .hasClass("cutfield") && timeLimit(),
            $("fieldset:visible")
            .children()
            .eq(0)
            .hasClass("cutfield") && $("fieldset:visible")
            .children()
            .eq(0)
            .show()),
        fixBottom(),
        $("#divMatrixHeader")
        .hide(),
        adjustVideoHeight(pageHolder[cur_page]),
        initDescImg(),
        initSelelct2(),
        curPageHeatmapInit(),
        TotalValBoxInit()
}

function processSearch() {
    var a, b, c;
    document.referrer && (a = document.referrer,
        b = !1,
        a && (a.indexOf("baidu.com") > -1 || a.indexOf("google.com") > -1 || a.indexOf("so.360.cn") > -1 || a.indexOf(".so.com") > -1 || a.indexOf(".sogou.com") > -1 || a.indexOf(".soso.com") > -1 || a.indexOf(".haoso.com") > -1 || a.indexOf(".sm.cn") > -1) && (b = !0),
        b && (c = "<a href='https://www.wjx.cn/mobile/publicsurveys.aspx' style='color:#66beff;'>搜索更多相关问卷模板</a>",
            document.title && (document.title.indexOf("员工满意度") > -1 ? c = "<a href='https://www.wjx.cn/mobile/app/mydreport.aspx' style='color:#66beff;'>员工满意度典型应用</a>" : document.title.indexOf("员工敬业度") > -1 && (c = "<a href='https://www.wjx.cn/mobile/app/jydreport.aspx' style='color:#66beff;'>员工敬业度典型应用</a>")),
            $("#divSearch")
            .show()
            .html(c)))
}

function initSlider() {
    if (window.hasSlider) {
        var a = new Array;
        $(pageHolder[cur_page].questions)
            .each(function() {
                var d, e, f, g, h, b = $(this),
                    c = b.attr("type");
                if (("8" == c || "12" == c || "9" == c || "10" == c) && (d = getTopic(b),
                    e = document.getElementById("divRef" + d),
                    f = e && "" == e.style.display,
                    !f))
                    for (g = $("input.ui-slider-input:visible", b),
                        h = 0; h < g.length; h++)
                        a.push(g[h])
            }),
            bindSlider(0, a)
    }
}

function initSelelct2() {
    if (window.hasDropDown && pageHolder[cur_page] && !pageHolder[cur_page].initSelelct2) {
        pageHolder[cur_page].initSelelct2 = !0;
        var a = $(pageHolder[cur_page])
            .find("select")
            .length;
        pageHolder[cur_page].selectLen = a,
            $(pageHolder[cur_page].questions)
            .each(function() {
                "none" != this.style.display && initEleSelect2(this)
            })
    }
}

function initEleSelect2(a) {
    var b, c, d, e;
    if (window.hasDropDown && pageHolder[cur_page] && !a.hasInitSelect2 && (b = $(a)
        .attr("type"),
        7 == b || 9 == b || 10 == b)) {
        if (c = $(a)
            .find("select"),
            a.hasInitSelect2 = !0,
            window.useRawSelect || c.length > 100 || pageHolder[cur_page].selectLen > 300 || isSmallerIos12() && self != top)
            return c.show(),
                c.parent()
                .addClass("arrowAfter"),
                adjustIosInput(c),
                "1" === a.getAttribute("fixedslider") && setFixedSliderTableHandler($(a)),
                a.useSelect = !0,
                void 0;
        d = "zh-CN",
            1 == langVer ? d = "" : 2 == langVer && (d = "zh-TW"),
            e = 10,
            window.isinterview && (e = 1e3),
            c.select2({
                language: d,
                width: "off",
                minimumResultsForSearch: e
            }),
            c.on("select2:open", function(a) {
                try {
                    var b = a.currentTarget.options.length - 1;
                    1 != langVer && $(".select2-search input")
                        .prop("focus", !1)
                        .prop("placeholder", wjxlang.total_item("{0}", b)),
                        adjustIosInput(".select2-search__field")
                } catch (c) {}
            }),
            c.on("select2:close", function() {
                try {
                    count360Val()
                } catch (b) {}
            })
    }
}

function matrixFixedTitle() {
    var a, b;
    $("#toptitle")
        .css("margin-top", "0px"),
        a = new Array,
        0 != pageHolder.length && ($(pageHolder[cur_page].questions)
            .each(function() {
                var b = $(this),
                    c = b.attr("type");
                ("6" == c || "9" == c || "10" == c) && b.find(".title")
                    .length >= 8 && a.push(b)
            }),
            0 != a.length && (b = $(window),
                1 == window.IsPar && (b = $("body")),
                b.scroll(function() {
                    var d, e, f, g, h, c = b.scrollTop();
                    for (d = 0; d < a.length; d++)
                        if (!($(a[d])
                            .is(":hidden") || $(a[d])
                            .find(".title:visible")
                            .length < 8)) {
                            if (e = $(a[d])
                                .offset()
                                .top,
                                1 == window.IsPar && (e = $(a[d])
                                    .offset()
                                    .top + c),
                                c > e + $(a[d])
                                .find(".field-label")
                                .outerHeight() + 8 && c < e + $(a[d])
                                .outerHeight()) {
                                lastLabel && lastLabel.removeAttr("style"),
                                    lastLabel = $(a[d])
                                    .find(".field-label"),
                                    f = lastLabel.outerHeight(),
                                    $("#toptitle")
                                    .css("margin-top", f + "px"),
                                    g = 0,
                                    h = document.getElementById("divMaxTime"),
                                    h && "" == h.style.display && (g = 40),
                                    lastLabel.attr("style", "position:fixed;top:" + g + "px;left:0;right:0;padding:0 20px!important;border-bottom:1px solid #d9d9d9;background:rgba(255,255,255,0.8);text-overflow:ellipsis;white-space:nowrap;overflow: hidden;z-index: 200;height:42px;line-height:42px;");
                                break
                            }
                            lastLabel && (lastLabel.removeAttr("style"),
                                $("#toptitle")
                                .css("margin-top", "0px"))
                        }
                })))
}

function initTableWidth() {
    $(pageHolder[cur_page].questions)
        .each(function() {
            setTableWidth(this)
        })
}

function bindSlider(a, b) {
    var c = b.length;
    c > a && setTimeout(function() {
        $(b[a])
            .closest(".field")
            .is(":visible") && $(b[a])
            .rangeslider({
                polyfill: !1
            }),
            bindSlider(a + 1, b)
    }, 10)
}

function initqSlider(a) {
    var b, c, d;
    window.hasSlider && (b = $(a),
        c = b.attr("type"),
        d = "8" == c || "12" == c || "9" == c || "10" == c,
        d && initEleSlider(a))
}

function initEleSlider(a) {
    if (!a.hasInitSlider || window.haschangeorientation) {
        var b = $("input.ui-slider-input:visible", a);
        b.rangeslider && 0 != b.length && (b.rangeslider({
                polyfill: !1
            }),
            window.haschangeorientation && b.rangeslider("update", !0),
            a.hasInitSlider = !0)
    }
}

function showProgress() {
    var a, b, c, d;
    1 != totalPage && (a = cur_page + 1,
        a > totalPage && (a = totalPage),
        b = a + "/" + totalPage,
        c = "页",
        (1 == langVer || langVer > 2) && (c = " Page"),
        $(".pagepercent")
        .html(b + c),
        d = 100 * a / totalPage,
        $(".pagebar")
        .width(d + "%"))
}

function verifyCheckMinMax(a, b, c, d, e) {
    var i, j, k, l, f = a.attr("minvalue"),
        g = a.attr("maxvalue"),
        h = a[0];
    if (0 == f && 0 == g)
        return "";
    if (i = 0,
        c ? i = $("li.ui-li-static[check='1']", a)
        .length : 21 == a.attr("type") && (f || g) ? $("input.itemnum", a)
        .each(function() {
            parseInt($(this)
                .val()) > 0 && i++
        }) : i = $("input[type='checkbox']:checked", a)
        .length,
        0 != i || a.attr("req")) {
        if (j = "",
            0 == langVer && (j = wjxlang.check_haschoice.replace("{0}", i)),
            k = !0,
            g > 0 && i > g) {
            if (d && !e)
                return l = wjxlang.check_duoxuan.replace("{0}", g),
                    alertNew(l),
                    11 == a.attr("type") && "text" == $(d)[0].type ? $(d)
                    .parent()
                    .parent()
                    .trigger("click") : $(d)
                    .trigger("click"),
                    "";
            j = wjxlang.validate_check_duoxuan.replace("{0}", g)
                .replace("{1}", i - g),
                k = !1
        } else
            f > 0 && f > i && (j = wjxlang.validate_check_shaoxuan.replace("{0}", f)
                .replace("{1}", f - i),
                k = !1,
                !c && 1 == i && $("input:checked", a)
                .closest(".ui-checkbox")
                .hasClass("huchi") && (k = !0));
        return h.errorMessage || (h.errorMessage = $(".errorMessage", a)[0]),
            k ? (h.errorMessage.innerHTML = "",
                i >= 10 && (h.errorMessage.innerHTML = "<span style='color:#333;'>" + j + "</span>"),
                "") : (b ? writeError(a[0], j, 3e3) : h.errorMessage.innerHTML = j,
                j)
    }
}

function checkOnly(a, b) {
    var f, g, h, i, j, k, l, c = $(b),
        d = c[0],
        e = c.attr("needonly");
    return e ? "地图" == c.attr("verify") ? "" : $(a)[0].needsms ? "" : (f = c.val()) ? f.length > 50 ? "" : (g = getTopic(a),
        h = c.attr("rowid"),
        h ? g = 1e4 * parseInt(g) + parseInt(h) : (i = c.attr("gapindex"),
            i && (g = 1e4 * parseInt(g) + parseInt(i))),
        j = "/joinnew/AnswerOnlyHandler.ashx?q=" + activityId + "&at=" + encodeURIComponent(f) + "&qI=" + g + "&o=true&t=" + (new Date)
        .valueOf(),
        window.joinIdnew && (j += "&joinid=" + window.joinIdnew),
        k = $(a)[0],
        l = "",
        d.errorOnly || (d.errorOnly = new Object),
        d.errorOnly[f] ? (l = validate_only,
            !k.errorControl && g - 1e4 > 0 && (k.errorControl = d),
            writeError(k, l, 3e3),
            l) : ($.ajax({
                type: "GET",
                url: j,
                async: !1,
                success: function(a) {
                    return "false1" == a ? (l = validate_only,
                        d.errorOnly[f] = 1,
                        !k.errorControl && g - 1e4 > 0 && (k.errorControl = d),
                        writeError(k, l, 3e3),
                        l) : ""
                }
            }),
            void 0)) : "" : ""
}

function verifyTxt(a, b, c) {
    var j, k, l, m, n, d = $.trim($(b)
            .val()),
        e = $(b)
        .attr("verify"),
        f = $(b)
        .attr("minword"),
        g = $(b)
        .attr("maxword"),
        h = $(a)[0],
        i = "";
    return d ? window.joinIdnew && "(空)" == d ? i : (c && "10" == a.attr("type") && (j = $(b)
            .attr("isdigit"),
            j && ("1" == j ? e = "数字" : "2" == j && (e = "小数"),
                k = $(b)
                .attr("min"),
                k && (f = k),
                l = $(b)
                .attr("max"),
                l && (g = l))),
        m = null,
        "10" == a.attr("type") && (m = $(b)
            .closest(".mdivtable")
            .length > 0 ? !0 : !1),
        n = null,
        m && (n = $(b)
            .closest(".mdivtable")[0]),
        m ? n.removeError && n.removeError(!0) : h.removeError && h.removeError(),
        i = verifyMinMax(d, e, f, g),
        i || (i = verifydata(d, e, $(b)[0])),
        i ? (c && (h.errorControl = $(b)[0]),
            m && (n.errorControl = $(b)[0]),
            writeError(h, i, 3e3, n),
            i) : (i || !h.needsms || h.issmsvalid || window.joinIdnew || (i = "提示：您的手机号码没有通过验证，请先验证",
                h.prevbtn && void 0 == h.prevbtn.isSending && (i = "提示：您的手机号码没有通过验证，请先发送验证码"),
                writeError(h, i, 3e3)),
            i)) : i
}

function validateMatrix(a, b) {
    var d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = $("table.matrix-rating", $(a)),
        e = "";
    for ($(a)[0].isMatrixFillError = !1,
        f = c[0].rows,
        g = 0; g < f.length; g++)
        if (h = f[g],
            i = h.getAttribute("tp"),
            "d" == i && (!window.hasReferClient || "none" != h.style.display))
            if (j = $(h)
                .attr("fid"),
                k = $("a.rate-on", $(h)),
                d = "",
                0 != k.length) {
                if (d = $(k[k.length - 1])
                    .attr("dval"),
                    l = $(a)
                    .attr("ischeck")) {
                    if (d = "",
                        m = $(a)
                        .attr("minvalue"),
                        n = $(a)
                        .attr("maxvalue"),
                        m && k.length - m < 0) {
                        e = validate_info + validate_info_check5 + m + type_check_limit5,
                            $(a)[0].errorControl = $(h)
                            .prev("tr")[0];
                        break
                    }
                    if (n && k.length - n > 0) {
                        e = validate_info + validate_info_check4 + n + type_check_limit5,
                            $(a)[0].errorControl = $(h)
                            .prev("tr")[0];
                        break
                    }
                    if (o = !0,
                        $(k)
                        .each(function() {
                            var b, c, f;
                            return d && (d += ";"),
                                d += $(this)
                                .attr("dval"),
                                b = $(this)
                                .attr("needfill"),
                                b && (c = this.fillvalue || "",
                                    c = replace_specialChar(c)
                                    .replace(/;/g, "；")
                                    .replace(/,/g, "，"),
                                    d += spChars[2] + c,
                                    f = $(this)
                                    .attr("req"),
                                    f && !c) ? (e = validate_info_wd1,
                                    $(a)[0].isMatrixFillError = !0,
                                    showMatrixFill(this, 1),
                                    o = !1,
                                    !1) : void 0
                        }),
                        !o)
                        break
                } else if (p = $(k[k.length - 1])
                    .attr("mode"),
                    !p && (q = $(k[k.length - 1])
                        .attr("needfill"),
                        q && (r = k[k.length - 1].fillvalue || "",
                            r = replace_specialChar(r)
                            .replace(/;/g, "；")
                            .replace(/,/g, "，"),
                            d += spChars[2] + r,
                            s = $(k[k.length - 1])
                            .attr("req"),
                            s && !r))) {
                    e = validate_info_wd1,
                        $(a)[0].isMatrixFillError = !0,
                        showMatrixFill(k[k.length - 1], 1);
                    break
                }
                $("#" + j, $(a))
                    .attr("value", d)
            } else if ($("#" + j, $(a))
        .val(""),
        "1" == b) {
        e = validate_info_wd1,
            $(a)[0].errorControl = $(h)
            .prev("tr")[0];
        break
    }
    return e
}

function validateScaleRating(a) {
    var b = !0,
        c = $(".scale-rating", $(a));
    return c = $("a.rate-on", c),
        0 == c.length ? (b = !1,
            $("input:hidden", $(a))
            .val("")) : ($("input:hidden", $(a))
            .attr("value", $(c[c.length - 1])
                .attr("val")),
            -1 == $(c[c.length - 1])
            .attr("jumpto") && (needSubmitNotValid = !0)),
        b
}

function jump(a, b) {
    var e, f, c = $(a),
        d = c.attr("hasjump");
    d && (e = c.attr("type"),
        f = c.attr("anyjump"),
        f > 0 ? jumpAnyChoice(a) : 0 == f && "3" != e && "5" != e && "7" != e ? jumpAnyChoice(a) : jumpByChoice(a, b))
}

function jumpAnyChoice(a, b) {
    var f, c = $(a),
        d = c.attr("type"),
        e = !1;
    "1" == d ? e = $("input", c)
        .val()
        .length > 0 : "2" == d ? e = $("textarea", c)
        .val()
        .length > 0 : "3" == d ? e = $("input[type='radio']:checked", c)
        .length > 0 : "4" == d ? e = $("input[type='checkbox']:checked", c)
        .length > 0 : "5" == d ? e = $("a.rate-on", c)
        .length > 0 : "6" == d ? e = $("a.rate-on", c)
        .length > 0 : "7" == d ? e = -2 != $("select", c)
        .val() : "8" == d ? e = $("input", c)
        .val()
        .length > 0 : "9" == d || "12" == d ? $("input", c)
        .each(function() {
            var a = $(this)
                .val();
            "9" == d && a.length > 0 ? e = !0 : "12" == d && a.length > 0 && parseInt(a[0]) && (e = !0)
        }) : "10" == d ? (f = "1" == c.attr("select"),
            f ? $("select", c)
            .each(function() {
                var a = $(this)
                    .val(); -
                2 != a && (e = !0)
            }) : $("input,textarea", c)
            .each(function() {
                var a = $(this)
                    .val();
                a.length > 0 && (e = !0)
            })) : "11" == d ? e = $("li[check='1']", c)
        .length > 0 : "13" == d && (e = c[0].fileName ? !0 : !1),
        jumpAny(e, a, b)
}

function jumpByChoice(a, b) {
    var e, f, g, c = $(a)
        .attr("type"),
        d = $(a)[0];
    "-2" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : "-1" == b.value || "" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : ("3" == c || "5" == c || "7" == c) && (e = b.value || $(b)
        .attr("val"),
        parseInt(e) == e && (f = $(b)
            .attr("jumpto"),
            f || (f = 0),
            g = f - 0,
            processJ(d.indexInPage - 0, g, !1, d.pageIndex)))
}

function jumpAny(a, b, c) {
    var f, g, h, d = $(b);
    d.attr("type"),
        f = d.attr("hasjump"),
        g = d.attr("anyjump") - 0,
        h = d[0],
        f && (a ? processJ(h.indexInPage - 0, g, c, h.pageIndex) : processJ(h.indexInPage - 0, 0, c, h.pageIndex))
}

function processJ(a, b, c, d) {
    var i, j, k, l, n, o, p, e = a + 1,
        f = d,
        g = 1 == b || -1 == b,
        h = 0;
    for (i = d; i < pageHolder.length; i++) {
        for (j = pageHolder[i].questions,
            g && (f = i),
            !h && j[a] && (h = parseInt(getTopic(j[a]))),
            k = e; k < j.length; k++)
            l = getTopic(j[k]),
            (l == b || g) && (f = i),
            "1" != $(j[k])
            .attr("nhide") && (b > l || g ? (j[k].style.display = "none",
                clearFieldValue(j[k]),
                (relationQs[l] || ItemrelationQs[l]) && displayRelationByType(j[k])) : (relationNotDisplayQ[l] || relationItemNotDisplayQ[l] || (j[k].style.display = "",
                    initEleSelect2(j[k]),
                    window.hasHeatMap && heatMapInit(j[k])),
                n = $(j[k])
                .attr("hasjump"),
                n && !c && clearFieldValue(j[k]),
                "1" == $(j[k])
                .attr("qingjing") && displayRelationByType(j[k])));
        for (pageHolder[i].cuts || (pageHolder[i].cuts = $(".cutfield", pageHolder[i])),
            k = 0; k < pageHolder[i].cuts.length; k++)
            o = pageHolder[i].cuts[k],
            l = o.getAttribute("qtopic"),
            l && (h && h >= l || e >= l || (b > l || g ? o.style.display = "none" : (p = o.getAttribute("topic"),
                relationNotDisplayQ[p] || (o.style.display = ""))));
        e = 0
    }
    fixBottom()
}

function GetBacktoServer() {
    str = window.location.pathname,
        index = str.lastIndexOf("/"),
        page = str.substr(index + 1, str.length - index),
        data = readCookie("history"),
        null != data && data.toLowerCase() != page.toLowerCase() && (window.location.href = window.location.href)
}

function readCookie(a) {
    var b, c, d, e;
    for (b = a + "=",
        c = document.cookie.split(";"),
        d = 0; d < c.length; d++) {
        for (e = c[d];
            " " == e.charAt(0);)
            e = e.substring(1, e.length);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return null
}

function getErrorControl(a) {
    return "none" == a.style.display && "指定选项" == a.getAttribute("verify") ? a.parentNode : "select2-hidden-accessible" == a.className ? a.parentNode : "none" == a.style.display && $(a)
        .next()
        .hasClass("textEdit") ? $(a)
        .next(".textEdit")[0] : a
}

function removeError(a) {
    var b, c;
    this.errorMessage && (isIosSystem() && 3 != window.isChuangGuan && 4 != window.isChuangGuan && !window.isinterview && (b = $(this.errorMessage)
            .height(),
            $(this.errorMessage)
            .height(b)
            .css("background", "transparent")),
        this.errorMessage.innerHTML = "",
        window != window.top && $("#ValError")
        .html(""),
        this.removeError = null,
        2 != window.isChuangGuan && (a ? this.parentNode.style.border = "solid 1px transparent" : this.style.border = "solid 1px transparent"),
        this.errorControl && (c = getErrorControl(this.errorControl),
            c.style.background = "",
            this.errorControl = null),
        fixBottom())
}

function writeError(a, b, c, d) {
    a = $(a)[0],
        2 != window.isChuangGuan && (a.style.border = "dashed 1px #de6752");
    var e = "1" == $(a)
        .attr("maxdiff");
    return d && !e ? objErrorInfo(d, b, c) : objErrorInfo(a, b, c),
        firstError || (firstError = a),
        fixBottom(),
        !1
}

function objErrorInfo(a, b) {
    var d, e;
    a.errorMessage ? (a.errorMessage.innerHTML = b,
            $(a.errorMessage)
            .css("background", "#ffe5e0")) : (d = $(".errorMessage", $(a)),
            a.errorMessage = d[0],
            !firstError && isValidating && (d.css("left", "50%"),
                d.animate({
                    left: 0
                }, 200)),
            a.errorMessage.innerHTML = b),
        a.errorMessage.style.lineHeight = $(a.errorMessage)
        .height() > 38 ? "24px" : "38px",
        a.removeError = removeError,
        a.errorControl && (e = getErrorControl(a.errorControl),
            e.style.background = "#FBD5B5")
}

function verifydata(a, b, c) {
    var d, e;
    if (!b)
        return "";
    if (d = null,
        "email" == b.toLowerCase() || "msn" == b.toLowerCase())
        return d = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
            d.exec(a) ? "" : validate_email;
    if ("日期" == b || "生日" == b || "入学时间" == b)
        return "";
    if ("固话" == b)
        return d = /^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$/,
            d.exec(a) ? "" : validate_phone.replace("，请注意使用英文字符格式", "");
    if ("手机" == b)
        return d = /^\d{11}$/,
            d.exec(a) ? "" : validate_mobile.replace("，请注意使用英文字符格式", "");
    if ("密码" == b)
        return checkPassword(a, c);
    if ("确认密码" == b) {
        if (c && c.firstPwd && c.firstPwd.value != a)
            return wjxlang.validate_password
    } else {
        if ("电话" == b)
            return d = /(^\d{11}$)|(^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$)/,
                d.exec(a) ? "" : validate_mo_phone.replace("，请注意使用英文字符格式", "");
        if ("汉字" == b)
            return d = /^[\u4e00-\u9fa5·]+$/,
                d.exec(a) ? "" : validate_chinese;
        if ("姓名" == b)
            return d = /^[\u4e00-\u9fa5·]{2,15}$/,
                d.exec(a) ? "" : "姓名必须为2到15个汉字";
        if ("英文" == b)
            return d = /^[A-Za-z\s]+$/,
                d.exec(a) ? "" : validate_english;
        if ("英文数字" == b)
            return d = /^[A-Za-z\d]+$/,
                d.exec(a) ? "" : validate_englishdigit;
        if ("网址" == b || "公司网址" == b)
            return d = /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
                e = /^www.[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
                d.exec(a) || e.exec(a) ? "" : validate_reticulation;
        if ("身份证号" == b)
            return d = /^\d{15}(\d{2}[A-Za-z0-9])?$/,
                18 == a.length && checkIDCard(a) ? "" : validate_idcardNum;
        if ("学号" == b) {
            if (d = /^\d+$/,
                !d.exec(a))
                return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("数字" == b) {
            if (d = /^(\-)?\d+$/,
                !d.exec(a))
                return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("小数" == b) {
            if (d = /^(\-)?\d+(\.\d+)?$/,
                !d.exec(a))
                return validate_decnum
        } else if ("qq" == b.toLowerCase())
            return d = /^\d+$/,
                e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/,
                d.exec(a) || e.exec(a) ? "" : validate_qq
    }
    return ""
}

function checkIDCard(a) {
    var j, k, l, m, n, b = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        c = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
        d = a + "",
        e = a[17],
        f = d.substring(0, 17),
        g = f.split(""),
        h = g.length,
        i = 0;
    for (j = 0; h > j; j++)
        i += g[j] * b[j];
    k = i % 11,
        l = c[k],
        m = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1|2|3][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X]|[x])$/,
        n = m.test(a);
    try {
        return e.toLowerCase() == l.toLowerCase() && n ? !0 : !1
    } catch (o) {
        return !1
    }
}

function checkPassword(a, b) {
    var f, c = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,20}/,
        d = /[a-zA-Z]+/,
        e = /[0-9]+/;
    return b && b.confirmPwd && b.needCheckConfirm && (f = b.confirmPwd.value,
        f != a) ? wjxlang.validate_password : c.test(a) && d.test(a) && e.test(a) ? "" : c.test(a) ? d.test(a) ? e.test(a) ? "" : wjxlang.validate_pass_number : wjxlang.validate_pass_zm : wjxlang.validate_pass_long
}

function verifyMinMax(a, b, c, d) {
    if ("数字" == b || "小数" == b) {
        var e = /^(\-)?\d+$/;
        if ("小数" == b && (e = /^(\-)?\d+(\.\d+)?$/),
            !e.exec(a))
            return "小数" == b ? validate_decnum : validate_num.replace("，请注意使用英文字符格式", "");
        if (0 != a && (a = a.replace(/^0+/, "")),
            "" != c) {
            if ("数字" == b && parseInt(a) - parseInt(c) < 0)
                return validate_num2 + c;
            if ("小数" == b && parseFloat(a) - parseFloat(c) < 0)
                return validate_num2 + c
        }
        if ("" != d) {
            if ("数字" == b && parseInt(a) - parseInt(d) > 0)
                return validate_num1 + d;
            if ("小数" == b && parseFloat(a) - parseFloat(d) > 0)
                return validate_num1 + d
        }
    } else {
        if ("" != d && a.length - d > 0)
            return validate_info_wd3.format(d, a.length);
        if ("" != c && a.length - c < 0)
            return validate_info_wd4.format(c, a.length)
    }
    return ""
}

function getTopic(a) {
    return $(a)
        .attr("topic")
}

function relationItemJoin(a) {
    if ("none" != a.style.display || "-1" == $(a)
        .attr("relation")) {
        var b = $(a);
        displayRelationByType(b)
    }
}

function relationJoin(a) {
    if ("none" != a.style.display || "-1" == $(a)
        .attr("relation")) {
        var b = $(a);
        displayRelationByType(b)
    }
}

function loopHideItemRelation(a) {
    var b, c, d, e;
    isLoadQues || (b = a.split("_"),
        2 == b.length && (c = b[0].replace("q", ""),
            d = clearItemOption(a),
            d && (e = questionsObject[c],
                e && (e.quesAnswer = "",
                    jumpAny(!1, e)))))
}

function clearItemOption(a) {
    var d, e, f, g, h, i, j, k, l, m, b = !1,
        c = $("#" + a);
    if (!c)
        return !1;
    if (d = c.attr("type"),
        e = a.split("_"),
        f = e[0].replace("q", ""),
        g = $("#div" + f),
        h = $(g)
        .attr("type"),
        "hidden" == d && "11" == h) {
        if (i = c.parent(),
            !i.find("span.sortnum")
            .hasClass("sortnum-sel"))
            return !1
    } else if (!c[0].checked)
        return !1;
    return "radio" == d || "checkbox" == d ? (j = 1,
        k = "input[type=radio]",
        "radio" == d ? (c[0].checked = !1,
            c.parent()
            .parent()
            .find("a.jqradio")
            .removeClass("jqchecked")) : "checkbox" == d && (j = 2,
            k = "input[type=checkbox]",
            c[0].checked = !1,
            c.parent()
            .parent()
            .find("a.jqcheck")
            .removeClass("jqchecked")),
        displayRelationByType(g),
        l = g.attr("refered"),
        l && createItem("#div" + f),
        displaypeie(g, k, j),
        !0) : ("hidden" == d && "11" == h && (m = c.parent()
            .parent()
            .parent()
            .parent(),
            $("li.ui-li-static", m)
            .each(function() {
                $(this)
                    .find("span.sortnum")
                    .hasClass("sortnum-sel") && (b = !0),
                    $(this)
                    .find("span.sortnum")
                    .html("")
                    .removeClass("sortnum-sel"),
                    $(this)
                    .attr("check", "")
            }),
            j = 3,
            k = "li.ui-li-static",
            displayRelationByType(g),
            l = g.attr("refered"),
            l && createItem("#div" + f)),
        b)
}

function checkDisplayques(a, b) {
    var d, e, f, g, h, i, j, k;
    if ($("#" + a),
        d = $("#" + a)[0].parentNode.parentNode,
        -1 == d.className.indexOf("ui-radio") && -1 == d.className.indexOf("ui-checkbox") && -1 == d.className.indexOf("ui-li-static") && (d = $("#" + a)[0].parentNode.parentNode.parentNode.parentNode),
        d.style.display != b && (d.style.display = b,
            e = a.replace("q", "")
            .split("_"),
            2 == e.length && (f = $("#div" + e[0]),
                f && !relationNotDisplayQ[e[0]])))
        if ("" == b)
            "none" == f[0].style.display && (f[0].style.display = "",
                "1" == relationItemNotDisplayQ[e[0]] && (relationItemNotDisplayQ[e[0]] = ""));
        else {
            for (g = f.attr("type"),
                h = "div.ui-radio",
                "4" == g ? h = "div.ui-checkbox" : "11" == g && (h = "li.ui-li-static"),
                i = "none",
                j = $("#div" + e[0] + " " + h),
                k = 0; k < j.length; k++)
                if ("" == j[k].style.display) {
                    i = "";
                    break
                }
            f[0].style.display = i,
                "none" == i && (relationItemNotDisplayQ[e[0]] || (relationItemNotDisplayQ[e[0]] = "1"),
                    jumpAny(!1, f))
        }
}

function displayRelationByType(a) {
    var b = getTopic(a);
    (ItemrelationQs[b] || relationQs[b]) && (GetRelationAnsewer(b, !0),
        handleItemRelation(b),
        fixBottom())
}

function handleItemRelation(a) {
    var b, c, d, e, f, g, h, i, j, k, l;
    if (allQArray.each(function() {
            var d, e, f, g, h, i, j, k, l, m, b = $(this),
                c = getTopic(b);
            if (!(parseInt(c) <= parseInt(a))) {
                if (d = b.attr("relation")) {
                    for (e = "",
                        e = -1 != d.indexOf("|") ? "|" : "$",
                        f = d.split(e),
                        g = !1,
                        "|" == e && (g = !0),
                        h = 0; h < f.length; h++)
                        if (i = displayRelationLogic(f[h]),
                            "$" == e) {
                            if (i) {
                                g = !0;
                                break
                            }
                        } else if (!i) {
                        g = !1;
                        break
                    }
                    j = g ? "" : "none",
                        checkDisplayItemques(b[0], j),
                        g ? $(b)
                        .attr("hasjump") || relationQs[c] || ItemrelationQs[c] ? (loopHideRelation(b),
                            initqSlider(b[0]),
                            initEleSelect2(b[0]),
                            window.hasHeatMap && heatMapInit(b[0]),
                            setTableWidth(b[0]),
                            needAdjustVideo() && adjustVideoHeight(b[0])) : (loopShowRelation(b),
                            initqSlider(b[0]),
                            b[0].hasInitSelect2 = !1,
                            initEleSelect2(b[0]),
                            window.hasHeatMap && heatMapInit(b[0]),
                            setTableWidth(b[0]),
                            needAdjustVideo() && adjustVideoHeight(b[0])) : loopHideRelation(b)
                }
                k = b.attr("hasitemrelation"),
                    k && (l = "",
                        m = b[0].getAttribute("type"),
                        "3" == m ? l = "input[type=radio]" : "4" == m ? l = "input[type=checkbox]" : "11" == m && (l = "li.ui-li-static"),
                        $(l, b[0])
                        .each(function() {
                            var f, g, h, i, j, k, l, d = !1,
                                e = this.value;
                            if ("11" == m && (e = $(this)
                                    .find("input:hidden")
                                    .val()),
                                f = "q" + c + "_" + e,
                                HasSetItemrelationList[f]) {
                                for (g = HasSetItemrelationList[f],
                                    h = "",
                                    h = -1 != g.indexOf("|") ? "|" : "$",
                                    i = g.split(h),
                                    "|" == h && (d = !0),
                                    j = 0; j < i.length; j++)
                                    if (k = displayRelationLogic(i[j]),
                                        "$" == h) {
                                        if (k) {
                                            d = !0;
                                            break
                                        }
                                    } else if (!k) {
                                    d = !1;
                                    break
                                }
                                l = d ? "" : "none",
                                    checkDisplayques(f, l),
                                    d ? ($(b)
                                        .attr("hasjump") || relationQs[c] || ItemrelationQs[c]) && loopHideRelation(f) : loopHideItemRelation(f)
                            }
                        }))
            }
        }),
        window.totalCut && window.totalCut > 0)
        for (b = 0; b < window.totalCut; b++)
            if (c = "divCut" + (b + 1),
                d = $("#" + c),
                e = d.attr("relation")) {
                for (f = "",
                    f = -1 != e.indexOf("|") ? "|" : "$",
                    g = e.split(f),
                    h = !1,
                    "|" == f && (h = !0),
                    i = 0; i < g.length; i++)
                    if (j = displayRelationLogic(g[i]),
                        "$" == f) {
                        if (j) {
                            h = !0;
                            break
                        }
                    } else if (!j) {
                    h = !1;
                    break
                }
                k = b + 1,
                    l = "c" + k,
                    d[0].style.display = h ? "" : "none",
                    relationNotDisplayQ[l] = h ? "" : "1"
            }
}

function displayRelationLogic(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, b = !1;
    if (!a)
        return !0;
    if (c = a.split(","),
        c.length < 2)
        return b;
    if (d = -1 != a.indexOf(".") ? !1 : !0,
        e = GetRelationAnsewer(c[0]),
        !e || "" == e || "-3" == e)
        return !1;
    if (f = questionsObject[c[0]],
        g = f.attr("type"),
        "6" == g) {
        for (h = new Array,
            i = e.split(","),
            j = 0; j < i.length; j++) {
            if (k = i[j].split("!"),
                k.length < 2)
                return b;
            l = new Object,
                l.sIndex = k[0],
                l.val = k[1],
                h.push(l)
        }
        if (m = c[1].split("^"),
            m.length < 2)
            return !1;
        for (n = m[1].split(";"),
            o = !1,
            p = 0; p < h.length; p++) {
            if (m[0] == h[p].sIndex)
                for (o = !0,
                    q = 0; q < n.length; q++)
                    if (n[q] == h[p].val) {
                        b = !0;
                        break
                    }
            if (o)
                break
        }
        return b
    }
    if (r = e.split(","),
        n = d ? c[1].split(";") : c[1].split("."),
        -1 != c[1].indexOf("-")) {
        if (d) {
            for (j = 0; j < n.length; j++) {
                for (s = !0,
                    t = n[j].replace("-", ""),
                    p = 0; p < r.length; p++)
                    if (t == r[p]) {
                        s = !1;
                        break
                    }
                if (!s)
                    break
            }
            return b = s
        }
        for (s = !1,
            j = 0; j < n.length; j++) {
            for (t = n[j].replace("-", ""),
                u = !0,
                p = 0; p < r.length; p++)
                if (t == r[p]) {
                    u = !1;
                    break
                }
            if (u) {
                s = !0;
                break
            }
        }
        return b = s
    }
    if (d) {
        for (j = 0; j < n.length; j++) {
            for (s = !1,
                t = n[j].replace("-", ""),
                p = 0; p < r.length; p++)
                if (t == r[p]) {
                    s = !0;
                    break
                }
            if (s)
                break
        }
        return b = s
    }
    for (s = !0,
        j = 0; j < n.length; j++) {
        for (u = !1,
            t = n[j].replace("-", ""),
            p = 0; p < r.length; p++)
            if (t == r[p]) {
                u = !0;
                break
            }
        if (!u) {
            s = !1;
            break
        }
    }
    return b = s
}

function GetRelationAnsewer(a, b) {
    var g, c = questionsObject[a],
        d = c.attr("type"),
        e = "",
        f = "none" != c[0].style.display || "-1" == $(c[0])
        .attr("relation");
    if (!f || "1" != c.attr("qingjing") || "-3" != c.quesAnswer && "" != c.quesAnswer || (b = !0),
        !b && c.quesAnswer && "" != c.quesAnswer)
        return e = c.quesAnswer,
            "-3" == e && (e = ""),
            e;
    if ("3" != d && "4" != d && "21" != d && "11" != d && "5" != d && "6" != d && "7" != d)
        return e;
    if (f)
        switch (e = "-3",
            d) {
            case "3":
                $("input[type='radio']:checked", c)
                    .each(function() {
                        return e = $(this)
                            .val(),
                            !1
                    });
                break;
            case "4":
                g = 0,
                    $("input:checked", c)
                    .each(function() {
                        var a = "none" == this.parentNode.parentNode.style.display;
                        a || (g > 0 ? e += "," : e = "",
                            e += $(this)
                            .val(),
                            g++)
                    });
                break;
            case "21":
                g = 0,
                    $(".shop-item .itemnum", c)
                    .each(function(a) {
                        var b = $(this)
                            .val();
                        "0" != b && (g > 0 ? e += "," : e = "",
                            e += a + 1,
                            g++)
                    });
                break;
            case "11":
                g = 0,
                    $("li.ui-li-static", c)
                    .each(function() {
                        var b, a = $(this)
                            .find("span.sortnum")
                            .html();
                        "none" != this.style.display && (b = $(this)
                            .find("input:hidden")
                            .val(),
                            f && a && (g > 0 ? e += "," : e = "",
                                e += b,
                                g++))
                    });
                break;
            case "5":
                e = $("input:hidden", c)
                    .val();
                break;
            case "6":
                mIndex = 0,
                    $("input:hidden", c)
                    .each(function(b) {
                        var d, f, g, h, i, j, k;
                        mIndex > 0 ? e += "," : e = "",
                            d = !1,
                            f = b + 1,
                            window.hasReferClient && (g = $(c)
                                .attr("id"),
                                h = a,
                                g && (i = g.replace("div", ""),
                                    parseInt(i) == i && h != i && (h = i)),
                                j = document.getElementById("drv" + h + "_" + (b + 1)),
                                j && "none" == j.style.display ? d = !0 : !j && questionsObject[answer._topic] && (d = !0)),
                            e += f + spChars[4],
                            k = $(this)
                            .val(),
                            k ? k.indexOf(spChars[2]) > -1 && (k = k.split(spChars[2])[0]) : k = "-2",
                            d && (k = "-4"),
                            e += k,
                            mIndex++
                    });
                break;
            case "7":
                e = $("select", c)
                    .val()
        }
    else
        e = "-3";
    return c.quesAnswer = e,
        e
}

function checkDisplay(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, b = !1;
    for (c in a)
        for (d = 0; d < a[c].length; d++)
            if (e = a[c][d].replace("-", ""),
                f = a[c][d].replace("q", "")
                .split("_"),
                g = document.getElementById(e),
                h = document.getElementById("q" + f[0]),
                i = document.getElementById("div" + f[0]),
                j = $(i)
                .attr("type"),
                k = $(i)
                .attr("qingjing"),
                1 == k) {
                if ("" == i.style.display && g && g.checked) {
                    b = !0;
                    break
                }
            } else {
                if (l = !1,
                    g && "11" == j && (l = "1" == g.parentNode.parentNode.getAttribute("check") ? !0 : !1),
                    g && "11" != j && f[1] > 0 == g.checked) {
                    b = !0;
                    break
                }
                if (g && "11" == j && f[1] > 0 == l) {
                    b = !0;
                    break
                }
                if (g || 5 != j) {
                    if (!g && h && f[1] == h.value) {
                        b = !0;
                        break
                    }
                } else if (m = $("a.rate-on", i),
                    n = "",
                    m.length > 0 && (n = $(m[m.length - 1])
                        .attr("val")),
                    f[1] == n) {
                    b = !0;
                    break
                }
            }
    return b
}

function loopShowRelation(a) {
    var b = getTopic(a);
    "1" == $(a)
        .attr("isshop") && updateCart($(a)),
        "1" == $(a)
        .attr("qingjing") && (relationQs[b] || ItemrelationQs[b]) && GetRelationAnsewer(b, !0)
}

function loopHideRelation(a) {
    if (!isLoadQues) {
        getTopic(a);
        var c = clearFieldValue(a);
        return c ? (jumpAny(!1, a),
            void 0) : !1
    }
}

function checkDisplayItemques(a, b) {
    var e, f;
    a.style.display != b && (a.style.display = b,
        e = a.getAttribute("id")
        .replace("div", ""),
        relationNotDisplayQ[e] = "none" == b ? "1" : "",
        "" == b && (a.getAttribute("fixedslider") && setFixedSliderTableHandler($(a)),
            a.uploader ? a.uploader.refresh() : "33" == a.getAttribute("type") ? a.querySelectorAll(".file")
            .forEach(function(a) {
                a.parentNode.uploader && a.parentNode.uploader.refresh()
            }) : "10" == a.getAttribute("type") && dispatchEvent(a.querySelector(".ui-table-scroll .ui-table-body"), "scroll")),
        f = getTopic(a),
        "1" == a.getAttribute("qingjing") && (relationQs[f] || ItemrelationQs[f]) && GetRelationAnsewer(f, !0))
}

function dispatchEvent(a, b) {
    try {
        if (a.dispatchEvent) {
            var c = document.createEvent("Event");
            c.initEvent(b, !0, !0),
                a.dispatchEvent(c)
        }
    } catch (d) {}
}

function checkHuChi(a, b) {
    var d, e, f, c = $(".huchi", a)[0];
    c && (d = $(b),
        $("input:checked", d)[0] && (e = $(".ui-checkbox", a),
            f = d.hasClass("huchi"),
            e.each(function() {
                var a, c;
                return this == b ? !0 : (a = $(this),
                    $("input:checked", a)[0] ? (f ? a.trigger("click") : (c = a.hasClass("huchi"),
                            c && a.trigger("click")),
                        void 0) : !0)
            })))
}

function autoSubmit(a, b, c) {
    var d, e, f, g, h;
    if (isAutoSubmit = !0,
        needTip())
        return alertNew($(divTip)
                .text()),
            void 0;
    if (d = $("#divNext a")[0],
        d && (d.disabled = !1),
        window.hasSurveyTime && (e = $(pageHolder[cur_page])
            .attr("maxtime"),
            f = !1,
            e && window.initMaxSurveyTime && e - initMaxSurveyTime >= 0 && (f = !0),
            !e || f || 1 >= maxSurveyTime || reachMaxCheatCount))
        for (g = 0; totalPage - 1 > cur_page && (pageHolder[cur_page].hasExceedTime = !0,
            window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan ? showNextField(!1, !0, !0) : show_next_page(),
            g++,
            !(g > totalPage));)
    ;
    ktimes++,
    divMaxTime.style.display = "none",
        $("body")
        .css("padding-top", "0px"),
        pageHolder || (pageHolder = $("fieldset.fieldset")),
        pageHolder[cur_page].hasExceedTime = !0,
        totalPage - 1 > cur_page ? (window.isinterview ? showNextInterview(!0, !0) : 3 == isChuangGuan || 4 == isChuangGuan ? showNextField(!1, !0, !0) : show_next_page(),
            isAutoSubmit = !1) : (window.isinterview || (pageHolder[cur_page].style.display = "none"),
            d && d.initVal && (d.innerHTML = d.initVal),
            !window.hasSurveyTime && 2 != window.isChuangGuan && 1 != totalPage || window.useAliVerify || !window.hasAnswer || a || hasAutoSubmit || c ? (h = wjxlang.tit_time_up,
                2 == window.isChuangGuan && (window.useAliVerify && ($("#divSubmit")
                        .show()
                        .css("padding-top", "30px")
                        .parent()
                        .css("margin", "0 2px"),
                        $(".voteDiv")
                        .show(),
                        $("body")
                        .append($(".voteDiv")),
                        $("#divQuestion")
                        .css("border", "none")
                        .css("margin", "0 2px")
                        .css("border-radius", "0")),
                    h = hasChuGuanSuc ? wjxlang.chuanguang_success_tit : wjxlang.chuanguang_fail),
                a && (h = a),
                hasSetmsg || c || (window.isinterview ? reportSend(h) : $("#ValError")
                    .html(h),
                    hasSetmsg = !0),
                c && (window.isinterview ? reportSend(h) : $("#ValError")
                    .html(wjxlang.nomsgtext)),
                window.isinterview && interViewfinish(),
                (3 == window.isChuangGuan || 4 == window.isChuangGuan) && ($("#lxPrevBtn,#lxNextBtn")
                    .hide(),
                    $(".fmWrap")
                    .hide(),
                    $("#divContent")
                    .show(),
                    b && (window.islxsubmit = !0,
                        $("#lxNextBtn")
                        .text(wjxlang.submit)
                        .show()))) : (hlv = "1",
                isAutoSubmit = !1,
                hasAutoSubmit = !0,
                groupAnswer(1),
                (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $("#lxPrevBtn,#lxNextBtn")
                .hide())),
        isAutoSubmit = !1
}

function ksCountdown() {
    var a, b, c, d, f, g;
    window.isKaoShi && (avoidPaste(),
        window.maxOpTime && window.divContent && !window.IsPar && (a = !1,
            window.localStorage && (b = localStorage["wjxlastanswer" + activityId],
                b && (c = (new Date)
                    .getTime(),
                    d = (c - b) / 6e4,
                    10 > d && (a = !0,
                        setTimeOpup(),
                        $("#divSubmit")
                        .hide(),
                        (3 == window.isChuangGuan || 4 == window.isChuangGuan) && $("#lxPrevBtn,#lxNextBtn")
                        .hide()))),
            a || (document.onclick = document.onkeyup = document.onscroll = document.onmousemove = function() {
                    f = new Date
                },
                f = new Date,
                g = setInterval(function() {
                    var d, a = new Date,
                        b = parseInt((a - f) / 1e3),
                        c = maxOpTime + 5 - b;
                    0 >= c ? (clearInterval(g),
                        setLastOp(),
                        setTimeOpup(!0),
                        closeAlert()) : 5 >= c && (d = wjxlang.tit_leavetime.replace("{0}", c),
                        alertNew(d))
                }, 1e3))))
}

function avoidPaste() {
    $(".textCont,input,textarea")
        .on({
            paste: function() {
                return !1
            },
            contextmenu: function(a) {
                return a.preventDefault(),
                    !1
            }
        })
}

function setLastOp() {
    window.localStorage && localStorage.setItem("wjxlastanswer" + activityId, (new Date)
        .getTime())
}

function setTimeOpup(a) {
    var b, c, d;
    hasSurveyTime = !0,
        hasMaxtime = !0,
        b = document.getElementById("yz_popdivData"),
        b && "none" != b.style.display && $("#yz_popTanChuClose")
        .click(),
        window.amt = 2,
        c = wjxlang.tit_maxOpTime.replace("{0}", maxOpTime),
        d = wjxlang.tit_needsubmit,
        a || (d = ""),
        autoSubmit(c + d, a)
}

function CheckMax(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (!b)
        return !0;
    if (c = $(a)
        .attr("dval"),
        d = $(a)
        .parent()
        .parent()
        .parent(),
        "6" == $(a)
        .attr("mode") && (d = $(a)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()),
        "tbody" != d[0].tagName.toLocaleLowerCase())
        return !0;
    if (e = d.find("tr.trlabel")
        .eq(0),
        f = e.find("th"),
        !f.eq(c - 1))
        return !0;
    if (g = f.eq(c - 1)
        .attr("itemmax"),
        g && window.cepingCandidate && "-1" != g.indexOf("%") && (h = parseInt(g.replace("%", "")),
            i = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
            g = Math.ceil(i.length * h / 100)),
        g && g > 0) {
        for (j = 0,
            k = 0; k < d[0].rows.length; k++) {
            for (l = $(d[0].rows[k])
                .find("a.rate-off"),
                m = null,
                n = 0; n < l.length; n++)
                l.eq(n)
                .hasClass("rate-on") && (m = l.eq(n));
            m && m.attr("dval") == c && j++
        }
        if (j >= g)
            return o = f.eq(c - 1)
                .text(),
                p = wjxlang.tit_item_max.replace("{0}", "")
                .replace("{1}", o)
                .replace("{2}", g),
                alertNew(p),
                !1
    }
    return !0
}

function elagerImg(a, b) {
    a = a || window.event,
        a.stopPropagation && a.stopPropagation();
    var d = $(b)
        .parent()
        .find("img");
    1 == d.attr("viewer") && d[0].viewer.show()
}

function enlargeImg() {
    initDescImg();
    var a = $("#divQuestion img,#divDesc img,#divVote img");
    a.viewer({
        filter: function(a) {
            return "a" == a.parentNode.tagName.toLowerCase() || $(a)
                .width() && $(a)
                .width() < 50 && $(a)
                .height() < 50 || $(a)
                .parent()
                .hasClass("heatmapContainer") ? !1 : ($(a)
                    .attr("viewer", "1"),
                    !0)
        },
        url: function(a) {
            var c, d, b = a.src;
            return $(a)
                .parent()
                .attr("pimg") && (b = $(a)
                    .parent()
                    .attr("pimg")),
                b && (c = b.split(",w_"),
                    2 == c.length && (b = c[0] + ",w_1200"),
                    d = b.split(",h_200"),
                    1 == d.length && (d = b.split(",h_400")),
                    2 == d.length && (b = d[0] + d[1])),
                b
        }
    })
}

function openDialogByIframe(a, b, c, d, e) {
    var g, h, i, j, k, l, m, f = "absolute";
    window != window.top && $(window)
        .height() > 812 && (f = "fixed"),
        g = $(window)
        .width(),
        h = $(document)
        .height(),
        "divImgPop" == c || c.indexOf("divVCode") > -1 || "divTimeUp" == c || "cropperWrap" == c ? b += 30 : (a = Math.min(g, 400) - 30,
            0 == c.indexOf("divDesc_") || c.indexOf("setmenusel.aspx") > -1 ? b += 30 : -1 == c.indexOf("setcity") && (b = Math.min($(window)
                .height(), 400) - 20),
            (c.indexOf("amap.aspx") > -1 || c.indexOf("setcascaderselector.aspx") > -1 || d) && (b = $(window)
                .height() - 30,
                a = $(window)
                .width() - 20),
            (c.indexOf("school.aspx") > -1 || "vote_rule_detail" == c || "vote_rule_detail_new" == c) && (b = $(window)
                .height() - 100,
                a = $(window)
                .width() - 20),
            "fixed" == f && b > 600 && (b = 600,
                obj_offectTop -= 300,
                obj_offectTop = 0 >= obj_offectTop ? 20 : obj_offectTop)),
        $("body")
        .append("<div id='yz_popIframeDiv'></div>"),
        i = document.getElementById(c),
        e = e || "",
        j = "<div id='yz_popTanChu' style='border-radius: 2px;'><div style='color:#262626;font-size:16px;font-weight:bold;float:left;margin:8px 0 0 10px;'>" + e + "</div><div style='position:relative;height:30px;'><a id='yz_popTanChuClose' style='background:url(//image.wjx.com/images/commonImgPC/del@2x.png) no-repeat;background-size:cover;width:20px;height:20px;position:absolute;right:10px;top:10px;z-index:10002'></a></div>",
        "cropperWrap" == c && window.ismobileopen && (j = "<div id='yz_popTanChu' style='border-radius: 2px;'>"),
        j += i ? "<div id='yz_popdivData' style='padding:10px;height:" + (b - 30) + "px;overflow:auto;width:" + a + "px;'></div>" : "<iframe id='yz_popwinIframe' frameborder='0' hspace='0' src=" + c + " style='border-radius:2px;'></iframe>",
        j += "</div>",
        $("body")
        .append(j),
        $("#yz_popIframeDiv")
        .css({
            width: g,
            height: h,
            background: "#000",
            position: f,
            zIndex: "10000",
            left: "0",
            top: "0"
        }),
        $("#yz_popIframeDiv")
        .fadeTo(0, .5),
        k = $(window)
        .width() / 2 - a / 2,
        l = $(window)
        .height() / 2 - (b + 40) / 2 + $(window)
        .scrollTop(),
        $("#yz_popTanChu")
        .css({
            width: a,
            height: b + 40,
            left: k,
            top: l,
            background: "#fff",
            position: f,
            zIndex: 10001
        }),
        "cropperWrap" == c && window.ismobileopen && $("#yz_popdivData")
        .css({
            padding: 0,
            height: b + 40
        }),
        "fixed" == f && ($(window)
            .height() - obj_offectTop < b && (obj_offectTop = $(window)
                .height() - b - 100),
            $("#yz_popTanChu")
            .css({
                top: obj_offectTop
            })),
        i && $("#yz_popdivData")
        .html(i.innerHTML),
        m = b,
        $("#yz_popwinIframe")
        .css({
            width: a,
            height: m,
            background: "#ffffff"
        }),
        $("#yz_popTanChuClose,#yz_popIframeDiv")
        .click(function() {
            window.iscropper || ($("#yz_popIframeDiv")
                .remove(),
                $("#yz_popTanChu")
                .remove())
        })
}

function closeAlert() {
    var a = document.getElementById("alert_box");
    a.style.display = "none",
        a.callback && a.callback()
}

function alertNew(a, b) {
    var c, d, e;
    return window != window.top ? (c = /<[^<>]+>/g,
        alert(a.replace(c, "")),
        b && b(),
        void 0) : (d = document.getElementById("alert_box"),
        d ? document.getElementById("pop_box_msg")
        .innerHTML = a : (d = document.createElement("div"),
            d.id = "alert_box",
            e = wjxlang.ensure,
            alertHtml = "<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:4px;'><div style='padding: 35px 27px;font-size: 16px;line-height: 22px;text-align: center;color: #262626;' id='pop_box_msg'>" + a + "</div>" + "<div style='width:100%;height: 60px;text-align:center;border-top:1px solid #F2F2F2;'><button class='mainColor' style='display:inline-block;width:100%;font-size:18px;height:60px;box-sizing:border-box;line-height:60px;color:#3296FA;text-align: center;text-decoration: none;border: none;background: none;outline:none;cursor:pointer;' onclick='closeAlert();'>" + e + "</button></div>" + "</div>",
            d.innerHTML = alertHtml,
            document.body.appendChild(d)),
        d.style.display = "",
        d.callback = b || "",
        void 0)
}

function closeConfirm() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none",
        a.callback && a.callback()
}

function closeNo() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none",
        a.callback2 && a.callback2()
}

function displaypeie(a, b, c) {
    "1" == a.attr("haspeie") && ($(b, a)
        .each(function(a) {
            var d, e, f, g, h, i, j, k, l, m, n, o, b = $(this)
                .attr("attrpeie");
            if (b && (d = !1,
                3 == c ? (val = $(this)
                    .find("input[type=hidden]")
                    .eq(0)
                    .attr("value"),
                    $(this)
                    .attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this)
                .hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked ? 5 == c && this.selected && (d = !0) : d = !0,
                !d))
                for (e = b.split(";"),
                    a = 0; a < e.length; a++)
                    if (f = e[a].split("|"),
                        3 == f.length)
                        if (g = "q" + f[0] + "_" + f[1],
                            h = document.getElementById(g)) {
                            if ($(this)
                                .attr("id") == g)
                                continue;
                            h.disabled = !1,
                                i = h.parentNode.parentNode,
                                "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode),
                                i && (j = i.getElementsByTagName("div"),
                                    j.length > 0 && (k = j[j.length - 1],
                                        l = k.getElementsByTagName("span"),
                                        l.length > 0 && k.removeChild(l[0])))
                        } else if (m = document.getElementById("div" + f[0]),
                n = m.getElementsByTagName("option"),
                n && 0 != n.length && n.length > f[1]) {
                if ($(this)
                    .context == n[f[1]])
                    continue;
                n[f[1]].disabled = !1,
                    o = "（" + f[2] + ")",
                    -1 != n[f[1]].innerHTML.indexOf(o) && (n[f[1]].innerHTML = n[f[1]].innerHTML.replace(o, ""),
                        initEleSelect2("#div" + f[0]))
            }
        }),
        $(b, a)
        .each(function(a) {
            var d, e, f, g, h, i, j, k, l, m, n, o, b = $(this)
                .attr("attrpeie");
            if (b && (d = !1,
                3 == c ? (val = $(this)
                    .find("input[type=hidden]")
                    .eq(0)
                    .attr("value"),
                    $(this)
                    .attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this)
                .hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked ? 5 == c && this.selected && (d = !0) : d = !0,
                d))
                for (e = b.split(";"),
                    a = 0; a < e.length; a++)
                    if (f = e[a].split("|"),
                        3 == f.length)
                        if (g = "q" + f[0] + "_" + f[1],
                            h = document.getElementById(g)) {
                            if ($(this)
                                .attr("id") == g)
                                continue;
                            h.disabled = !0,
                                i = h.parentNode.parentNode,
                                "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode),
                                i && (j = i.getElementsByTagName("div"),
                                    j.length > 0 && (k = j[j.length - 1],
                                        l = k.getElementsByTagName("span"),
                                        0 == l.length && (k.innerHTML = k.innerHTML + "<span>（" + f[2] + "）</span>")))
                        } else if (m = document.getElementById("div" + f[0]),
                n = m.getElementsByTagName("option"),
                n && 0 != n.length) {
                if ($(this)
                    .context == n[f[1]])
                    continue;
                n[f[1]].disabled = !0,
                    n.length > f[1] && (o = "（" + f[2] + ")",
                        -1 == n[f[1]].innerHTML.indexOf(o) && (n[f[1]].innerHTML = n[f[1]].innerHTML + o,
                            initEleSelect2("#div" + f[0])))
            }
        }))
}

function dateQuota(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
    if ("1" == $(b)
        .attr("haspeie") && (c = $(a)
            .attr("datept"),
            c && (d = a,
                d && "" != d.value))) {
        for (e = getTopic(b),
            f = c.split(","),
            g = 0; g < f.length; g++)
            h = f[g].split("|"),
            4 == h.length && h[0] != d.value && (i = "q" + h[1] + "_" + h[2],
                Number(h[1]) < Number(e) && !(j = document.getElementById("div" + h[1])
                    .pageIndex == $(b)[0].pageIndex) || (k = document.getElementById(i),
                    k ? (k.disabled = !1,
                        l = $(k.parentNode.parentNode)
                        .find(".label"),
                        m = l[0].getElementsByTagName("span"),
                        m.length > 0 && l[0].removeChild(m[0])) : (n = document.getElementById("div" + h[1]),
                        o = n.getElementsByTagName("option"),
                        0 != o.length && o && o.length > h[2] && (o[h[2]].disabled = !1,
                            p = "（" + h[3] + ")",
                            -1 != o[h[2]].innerHTML.indexOf(p) && (o[h[2]].innerHTML = o[h[2]].innerHTML.replace(p, ""),
                                initEleSelect2("#div" + h[1]))))));
        for (q = 0; q < f.length; q++)
            if (h = f[q].split("|"),
                4 == h.length && (h[0] == d.value || "D" == h[0]))
                if (i = "q" + h[1] + "_" + h[2],
                    k = document.getElementById(i),
                    j = document.getElementById("div" + h[1])
                    .pageIndex == $(b)[0].pageIndex,
                    k) {
                    if (l = $(k.parentNode.parentNode)
                        .find(".label")[0],
                        Number(h[1]) < Number(e) && !j && k.checked) {
                        alertNew(d.value + "日 " + $(l)
                                .text() + " 配额已满"),
                            d.value = "";
                        break
                    }
                    k.disabled = !0,
                        k.checked = !1,
                        $(k)
                        .next()
                        .removeClass("jqchecked"),
                        m = l.getElementsByTagName("span"),
                        0 == m.length && (l.innerHTML = l.innerHTML + "<span>（" + h[3] + "）</span>")
                } else if (n = document.getElementById("div" + h[1]),
            o = n.getElementsByTagName("option"),
            o && o.length > h[2]) {
            if (Number(h[1]) < Number(e) && !j && o[h[2]].selected) {
                r = o[h[2]].innerText,
                    alertNew(d.value + "日 " + r + " 配额已满"),
                    d.value = "";
                break
            }
            o[h[2]].disabled = !0,
                o[h[2]].selected = "",
                o && o.length > h[2] && (p = "（" + h[3] + ")",
                    -1 == o[h[2]].innerHTML.indexOf(p) && (o[h[2]].innerHTML = o[h[2]].innerHTML + p,
                        initEleSelect2("#div" + h[1])))
        }
    }
}

function isOrChooseLogic(a, b) {
    var d, e, f, c = !0;
    for (d = 0; d < a.length; d++)
        if (e = a[d].split(",")[0],
            e == b) {
            f = a[d].split(",")[1],
                c = -1 != f.indexOf("-") ? -1 != f.indexOf(".") ? !0 : !1 : -1 != f.indexOf(".") ? !1 : !0;
            break
        }
    return c
}

function otherTextEvent(a, b) {
    var c = $(a),
        d = c.val()
        .trim();
    d && b[0].removeError && b[0].removeError()
}

function showHomePageFixedSlider(a) {
    var c, b = a.questions;
    for (c = 0; c < b.length; c++)
        b[c].getAttribute("fixedslider") && setFixedSliderTableHandler($(b[c]))
}

function setFixedsliderWidth(a) {
    var b = $(document)
        .width() - 2 * (parseInt($(".field")
            .css("paddingLeft")) + parseInt($(".field")
            .css("marginLeft"))) - 2 - 2 * parseInt(divQuestion.offsetLeft);
    b = b >= 750 ? $("body")
        .hasClass("hasbgpic") ? "600px" : "660px" : b,
        window.isinterview && (b = "100%"),
        a.width(b)
}

function setFixedSliderTableHandler(a, b) {
    var f, g, h, i, j, k, c = a.find(".ui-slider-table"),
        d = c.find(".ui-table-scroll");
    c.find(".ui-scroll-shadow"),
        f = c.find(".ui-table-fixed"),
        g = d.find(".ui-table-thead"),
        h = d.find(".ui-table-tbody tr"),
        i = f.find(".ui-table-tbody tr"),
        j = g[0].getBoundingClientRect()
        .height,
        dispatchEvent(d.find(".ui-table-tbody")[0], "scroll"),
        f.find(".ui-table-thead")
        .children()
        .height(j),
        b && b.length > 0 ? (k = h.index(b),
            i.eq(k)
            .height(b[0].getBoundingClientRect()
                .height)) : h.each(function() {
            var a = $(this),
                b = a.index();
            i.eq(b)
                .height(a[0].getBoundingClientRect()
                    .height)
        })
}

function uploadFinish(a, b, c, d) {
    var f, g, h, e = $(".field[topic='" + a + "']")[0];
    e.fileName = c,
        f = $(e)
        .find(".uploadmsg"),
        c && (e.removeError && e.removeError(),
            $(e)
            .find("iframe")
            .hide(),
            g = $("<div style='margin-top:6px;border:1px solid #EDEDED;border-radius:4px;'></div>"),
            g.html("<img style='max-width:90%;max-height:45px;' src=" + d + " /></div>"),
            h = $('<a href="javascript:void(0)" style="float: right;margin: 11px 10px 0 0;" class="icon deleteuploadNew-icon iconfontNew">&#xe6b6;</a>'),
            h.click(function() {
                if (window.isinterview) {
                    var a = $(e)
                        .find("iframe")
                        .attr("src");
                    $(e)
                        .find("iframe")
                        .attr("src", a)
                        .show(),
                        e.fileName = "",
                        e.querySelector(".uploadmsg")
                        .innerHTML = "",
                        saveAnswer && saveAnswer(e),
                        jump && jump(e, "")
                } else
                    confirmnew(wjxlang.tit_sign_del, function() {
                        var a = $(e)
                            .find("iframe")
                            .attr("src");
                        $(e)
                            .find("iframe")
                            .attr("src", a)
                            .show(),
                            e.fileName = "",
                            e.querySelector(".uploadmsg")
                            .innerHTML = "",
                            saveAnswer && saveAnswer(e),
                            jump && jump(e, "")
                    })
            }),
            g.append(h),
            f.html(""),
            d && f.append(g),
            jump && jump(e, "")),
        saveAnswer && saveAnswer(e),
        window.isinterview && (showMyAnswer($(e)),
            $(".interview_input")
            .find(".iv_input")
            .show(),
            $(".interview_input")
            .find(".iv_chioseFile")
            .hide(),
            $(e)
            .find(".interview_cont img")
            .attr("src", d))
}

function locationReplace(a) {
    if (history.replaceState)
        try {
            history.replaceState(null, document.title, a),
                history.go(0),
                $("#form1")
                .hide(),
                $(window)
                .scrollTop(0)
        } catch (b) {
            location.replace(a)
        }
    else
        location.replace(a)
}

function adjustIosInput(a) {
    var b, c;
    a = a ? a : "input[type='text'],textarea",
        b = navigator.userAgent,
        c = !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        c && self != top && ("input[type='text'],textarea" != a && $(a)
            .unbind("blur"),
            $(a)
            .blur(function() {
                setTimeout(function() {
                    var a = window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop || 0;
                    window.parent.scrollTo(0, Math.max(a, 0))
                }, 100)
            }))
}

function initDescImg() {
    if (window.needEnlargeImg) {
        if (pageHolder[cur_page]) {
            if (pageHolder[cur_page].initDescImg)
                return;
            pageHolder[cur_page].initDescImg = !0
        }
        $(pageHolder[cur_page])
            .find(".div_item_desc img")
            .each(function(a, b) {
                if (0 == $(b)
                    .width()) {
                    var c = document.createElement("img");
                    c.onload = function() {
                            this.width > 100 && ($(b)
                                .wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"),
                                $(b)
                                .before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')))
                        },
                        c.src = b.src
                } else
                    $(b)
                    .width() > 100 && ($(b)
                        .wrap("<div style='position: relative;display:inline-block;' class='descImgBox'></div>"),
                        $(b)
                        .before($('<i class="icon_lookBigpic" onclick="elagerImg(event, this);"></i>')))
            })
    }
}

function stopMediaPlay() {
    var a = $(pageHolder[cur_page])
        .find("iframe");
    0 != a.length && (a.filter(function() {
            return $(this)
                .attr("src")
                .indexOf(".mp3") > -1 || $(this)
                .attr("src")
                .indexOf(".wav") > -1 || $(this)
                .attr("src")
                .indexOf(".mp4") > -1
        }),
        a.each(function(a, b) {
            $(b)
                .attr("src", $(b)
                    .attr("src"))
        }))
}

function showEvaluate(a, b) {
    var d, c = 1 == b.attr("pj");
    c && (d = $(a)
        .attr("val"),
        b.find(".evaluateTagWrap")
        .show(),
        b.find(".evaluateTagDiv")
        .eq(d - 1)
        .show()
        .siblings(".evaluateTagDiv")
        .hide())
}

function checkedtag(a) {
    if ($(a)
        .toggleClass("clicked"),
        $(a)
        .hasClass("writeRvaluate")) {
        $(a)
            .next(".wjxui_limit_box")
            .toggle();
        var b = $(a)
            .next(".wjxui_limit_box")
            .find("textarea");
        b[0].bindevent || (b[0].bindevent = !0,
            b.on("input blur keydown", function() {
                var b = $(this)
                    .val()
                    .trim()
                    .length,
                    c = $(this)
                    .attr("limit");
                b > c && ($(this)
                        .val($(this)
                            .val()
                            .substring(0, c)),
                        b = c),
                    $(this)
                    .closest(".wjxui_limit_box")
                    .find(".limit")
                    .text(b + "/" + c),
                    saveAnswer($(a)
                        .closest(".field"))
            }))
    }
    fixBottom(),
        saveAnswer($(a)
            .closest(".field"))
}

function initCusomSelect(a, b, c) {
    var f, g, h, i, j, k, l, m, n, o, p, d = $(c)
        .find("input[type='text']"),
        e = $(a)
        .find("input[type='text']");
    if (0 != d.length) {
        if (f = b.checked,
            g = "radio" == b.type,
            h = e.attr("cusom"),
            h && !e[0].hasInitCusom) {
            for (e.hide(),
                i = $("<select></select>"),
                j = h.split(","),
                k = e.val(),
                l = e[0].disabled,
                i.append($('<option value="">' + wjxlang.chioce + "</option>")),
                m = 0; m < j.length; m++)
                n = j[m] == k ? "selected" : "",
                o = $("<option " + n + "></option>"),
                o.attr("value", j[m]),
                o.text(j[m]),
                i.append(o);
            i.change(function(a) {
                    a.stopPropagation();
                    var b = this.value;
                    return e.val(b)
                        .blur(),
                        !1
                }),
                e.before(i)
                .parent()
                .css({
                    border: "none",
                    "margin-bottom": "10px"
                }),
                l && i.prop("disabled", !0),
                e[0].hasInitCusom = !0,
                p = "zh-CN",
                1 == langVer ? p = "" : 2 == langVer && (p = "zh-TW"),
                i.select2({
                    language: p,
                    width: "off",
                    minimumResultsForSearch: 10
                }),
                i.click(function(a) {
                    a.stopPropagation()
                }),
                i.next(".select2")
                .click(function(a) {
                    a.stopPropagation()
                })
                .parent()
                .addClass("ui-select")
        }
        g ? ($(a)
                .siblings()
                .find(".select2,.requireSpan,.ui-text")
                .hide(),
                h ? e.siblings(".select2,.requireSpan")
                .show()
                .parent()
                .show() : (e.show()
                    .siblings(".requireSpan")
                    .show(),
                    e.parent()
                    .show())) : f ? h ? e.siblings(".select2,.requireSpan")
            .show()
            .parent()
            .show() : (e.show()
                .siblings(".requireSpan")
                .show(),
                e.parent()
                .show()) : (e.hide()
                .siblings(".select2,.requireSpan")
                .hide(),
                e.parent()
                .hide())
    }
}

function hasJoinCusomInit() {
    2 == window.hasDropDown && $(".ui-controlgroup input[type='radio']:checked,.ui-controlgroup input[type='checkbox']:checked")
        .each(function(a, b) {
            var e, c = $(b)
                .closest(".field")[0],
                d = $(c)
                .attr("type");
            e = 3 == d ? $(b)
                .closest(".ui-radio")[0] : $(b)
                .closest(".ui-checkbox")[0],
                initCusomSelect(e, b, c)
        })
}

function isSmallerIos12() {
    var a, b, c, d;
    try {
        return a = navigator.userAgent.toLowerCase()
            .indexOf("like mac os x") > 0,
            a ? (b = /os [\d._]*/gi,
                c = navigator.userAgent.toLowerCase()
                .match(b),
                d = (c + "")
                .replace(/[^0-9|_.]/gi, "")
                .replace(/_/gi, "."),
                d && d.split(".")[0] <= 12 ? !0 : !1) : !1
    } catch (e) {
        return !1
    }
}

function getDevice() {
    var a, b, c, d, e, f, g;
    if (0 != $(".field[verify='device']")
        .length) {
        for (a = $(".field[verify='device']"),
            b = "",
            c = "",
            d = navigator.userAgent,
            e = [{
                name: "sgssapp",
                it: /sogousearch/i.test(d)
            }, {
                name: "wechat",
                it: /MicroMessenger/i.test(d)
            }, {
                name: "weibo",
                it: !!d.match(/Weibo/i)
            }, {
                name: "uc",
                it: !!d.match(/UCBrowser/i) || d.indexOf(" UBrowser") > -1
            }, {
                name: "sogou",
                it: d.indexOf("MetaSr") > -1 || d.indexOf("Sogou") > -1
            }, {
                name: "xiaomi",
                it: d.indexOf("MiuiBrowser") > -1
            }, {
                name: "baidu",
                it: d.indexOf("Baidu") > -1 || d.indexOf("BIDUBrowser") > -1
            }, {
                name: "360",
                it: d.indexOf("360EE") > -1 || d.indexOf("360SE") > -1
            }, {
                name: "2345",
                it: d.indexOf("2345Explorer") > -1
            }, {
                name: "edge",
                it: d.indexOf("Edge") > -1
            }, {
                name: "ie11",
                it: d.indexOf("Trident") > -1 && d.indexOf("rv:11.0") > -1
            }, {
                name: "ie",
                it: d.indexOf("compatible") > -1 && d.indexOf("MSIE") > -1
            }, {
                name: "firefox",
                it: d.indexOf("Firefox") > -1
            }, {
                name: "safari",
                it: d.indexOf("Safari") > -1 && -1 === d.indexOf("Chrome")
            }, {
                name: "qqbrowser",
                it: d.indexOf("MQQBrowser") > -1 && -1 === d.indexOf(" QQ")
            }, {
                name: "qq",
                it: d.indexOf("QQ") > -1
            }, {
                name: "chrome",
                it: d.indexOf("Chrome") > -1 || d.indexOf("CriOS") > -1
            }, {
                name: "opera",
                it: d.indexOf("Opera") > -1 || d.indexOf("OPR") > -1
            }],
            f = 0; f < e.length; f++)
            e[f].it && (b = e[f].name);
        b || (b = "other"),
            c = d.match(/compatible/i) || d.match(/Windows/i) ? "windows" : d.match(/Macintosh/i) || d.match(/MacIntel/i) ? "macOS" : d.match(/iphone/i) || d.match(/Ipad/i) ? "ios" : d.match(/android/i) ? "android" : d.match(/Ubuntu/i) ? "Ubuntu" : "other",
            g = window.screen.width + "*" + window.screen.height,
            a.each(function() {
                var a = $(this)
                    .find(".ui-input-text")
                    .children("input");
                a.eq(0)
                    .val(c),
                    a.eq(1)
                    .val(b),
                    a.eq(2)
                    .val(g),
                    a.eq(3)
                    .val(d)
            })
    }
}

function curPageHeatmapInit() {
    window.hasHeatMap && pageHolder[cur_page] && (pageHolder[cur_page].initHeatmap || (pageHolder[cur_page].initHeatmap = !0,
        $(pageHolder[cur_page])
        .find(".heatmapWrap")
        .each(function() {
            "none" != this.style.display && heatMapInit(this)
        })))
}

function forbidEdit(a) {
    var b, c, d;
    if (a)
        for (a += "",
            b = a.split(";"),
            c = 0; c < b.length; c++)
            $("#div" + b[c])
            .unbind("click touchend"),
            $("#div" + b[c])
            .attr("onclick", "return false")
            .attr("ontouchend", "return false"),
            $("#div" + b[c] + " input")
            .prop("disabled", "disabled"),
            $("#div" + b[c] + " li")
            .unbind("click"),
            $("#div" + b[c] + " .file")
            .hide(),
            $("#div" + b[c] + " iframe")
            .hide(),
            $("#div" + b[c] + " select")
            .prop("disabled", "disabled"),
            $("#div" + b[c] + " textarea")
            .prop("disabled", "disabled"),
            d = $("#div" + b[c] + " .rate-off"),
            d.attr("onclick", "return false")
            .parent()
            .attr("onclick", "return false"),
            d.unbind("click"),
            d.parent()
            .unbind("click"),
            $("#div" + b[c] + " .operation")
            .attr("onclick", "return false")
            .unbind("click"),
            $("#div" + b[c] + " .textCont ")
            .attr("contenteditable", !1)
            .unbind("click")
}

function TotalValBoxInit() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m;
    if (4 == cqType && window.showTotalScore) {
        if (totalPage - 1 > cur_page)
            return $("#countValBox")
                .hide(),
                void 0;
        for (a = $("#div1"),
            b = $(".label", a),
            c = "",
            d = {},
            e = !1,
            g = 0; g < pageHolder.length; g++)
            for (h = 0; h < pageHolder[g].questions.length; h++)
                if (i = pageHolder[g].questions[h],
                    "none" != i.style.display)
                    for (j = !1,
                        b = $(".select_title", $(i)),
                        0 == b.length ? b = $(".title", $(i)) : j = !0,
                        k = 0; k < b.length; k++)
                        if (!(j && "none" == b.eq(k)
                            .css("display") || "none" == b.eq(k)
                            .parent()
                            .css("display")) && (f = $.trim(b.eq(k)
                            .text()))) {
                            if (0 == d[f])
                                continue;
                            l = "分",
                                (1 == langVer || langVer > 2) && (l = ""),
                                m = '<li style="box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 0.5);line-height:36px;min-height:36px;display:flex;align-items: center;justify-content: space-between;"><span style="float:left;font-size: 14px;font-weight: 500;color: #595959;line-height: 36px;max-width: 75%;">' + f + '</span><b style="float:right;font-size: 14px;font-weight: 500;color: #0095FF;line-height: 36px;">' + l + "</b></li>",
                                c += m,
                                d[f] = 0,
                                e = !0
                        }
        e ? ($("#countTotalValue")
                .html(c),
                $("#countTotalValue li:last-child")
                .css("boxShadow", "none"),
                $("#countValBox")
                .show(),
                $("#countValBox")
                .data("perArr", d),
                count360Val()) : $("#countValBox")
            .hide()
    }
}

function count360Val() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
    if (4 == cqType && window.showTotalScore) {
        a = {};
        for (name in $("#countValBox")
            .data("perArr"))
            a[name] = 0;
        for (b = 0; b < pageHolder.length; b++)
            for (c = 0; c < pageHolder[b].questions.length; c++)
                if (d = pageHolder[b].questions[c],
                    e = $(d)
                    .attr("type"),
                    "none" != d.style.display) {
                    if ("6" == e) {
                        if (f = $(".rate-on", $(d)),
                            g = $(".trlabel", $(d))
                            .find("th"),
                            h = !0,
                            g.each(function() {
                                $(this)
                                    .attr("score") && (h = !1)
                            }),
                            h)
                            continue;
                        for (i = f.eq(0)
                            .attr("mode"),
                            j = $("tr", $(d)),
                            k = 1,
                            !i || 2 != i && 3 != i && 6 != i ? i = 0 : k = j.length,
                            l = 0; k > l; l++)
                            for (i && (f = j.eq(l)
                                    .find(".rate-on")),
                                m = 0; m < f.length; m++) {
                                if (6 == i) {
                                    if ("none" == f.eq(m)
                                        .parent()
                                        .parent()
                                        .parent()
                                        .parent()
                                        .css("display"))
                                        continue
                                } else if ("none" == f.eq(m)
                                    .parent()
                                    .parent()
                                    .css("display"))
                                    continue;
                                if (n = f.eq(m)
                                    .parent()
                                    .index(),
                                    i && (m = f.length - 1,
                                        n = f.eq(m)
                                        .parent()
                                        .index()),
                                    g.eq(n)
                                    .attr("score")) {
                                    if (o = f.eq(m)
                                        .parent()
                                        .parent()
                                        .prev()
                                        .find("td")
                                        .eq(0),
                                        6 == i && (o = f.eq(m)
                                            .parent()
                                            .parent()
                                            .parent()
                                            .parent()
                                            .prev()
                                            .find("td")
                                            .eq(0)),
                                        -77777 == g.eq(n)
                                        .attr("score") - 0)
                                        continue;
                                    o && a[$.trim(o.text())] >= 0 && (a[$.trim(o.text())] += g.eq(n)
                                        .attr("score") - 0)
                                }
                            }
                    }
                    if ("9" == e)
                        for (m = 0; m < $("input", $(d))
                            .length; m++)
                            p = $("input", $(d))
                            .eq(m),
                            0 != p.next(".rangeslider")
                            .length && "none" != p.parent()
                            .parent()
                            .parent()
                            .css("display") && p.val() - 0 > 0 && (o = p.parent()
                                .parent()
                                .parent(),
                                o = o.prev()
                                .find("td")
                                .eq(0),
                                o && a[$.trim(o.text())] >= 0 && (a[$.trim(o.text())] += p.val() - 0));
                    if ("10" == e)
                        for (r = !0,
                            $("input", $(d))
                            .length > 0 ? q = $("input", $(d)) : (r = !1,
                                q = $("select", $(d))),
                            m = 0; m < q.length; m++)
                            s = q.eq(m)
                            .parents(".mdivtable"),
                            "none" != s.css("display") && (o = $.trim(s.prev()
                                    .text()),
                                o && (r && q.eq(m)
                                    .val() - 0 > 0 && (a[o] += q.eq(m)
                                        .val() - 0),
                                    !r && q.eq(m)
                                    .val() > 0 && (t = q.find("option")
                                        .eq(q.eq(m)
                                            .val()),
                                        t && t.length > 0 && t.attr("score") && (a[o] += t.attr("score") - 0))))
                }
        u = 0,
            v = "分",
            (1 == langVer || langVer > 2) && (v = "");
        for (name in a)
            $("#countValBox b")
            .eq(u)
            .html(a[name] + v),
            u++;
        $("#countValBox")
            .data("perArr", a)
    }
}

function orientationUpdate() {
    pageHolder[cur_page] && $(pageHolder[cur_page].questions)
        .each(function() {
            var a, b;
            return "none" == this.style.display ? !0 : (this.getAttribute("fixedslider") && setFixedSliderTableHandler($(this)),
                a = "8" == this.getAttribute("type") || "12" == this.getAttribute("type") || "9" == this.getAttribute("type") || "10" == this.getAttribute("type"),
                a ? ($(this)
                    .find(".ruler")
                    .width(20),
                    b = $(".rangeslider")
                    .width() - 30,
                    $(this)
                    .find(".ruler")
                    .width(b),
                    initqSlider(this)) : this.uploader ? this.uploader.refresh() : "33" == this.getAttribute("type") ? this.querySelectorAll(".file")
                .forEach(function(a) {
                    a.parentNode.uploader && a.parentNode.uploader.refresh()
                }) : "10" == this.getAttribute("type") && dispatchEvent(this.querySelector(".ui-table-scroll .ui-table-body"), "scroll"),
                void 0)
        })
}

function clockRecordTime(a) {
    var b, c, d;
    try {
        if (b = $(pageHolder[cur_page])
            .find("input[verify='clock']"),
            0 == b.length)
            return;
        if (a) {
            if (c = pageHolder[cur_page].openTime,
                !c)
                return;
            d = (new Date)
                .getTime(),
                b.val(d - c)
                .blur()
        } else
            pageHolder[cur_page].openTime = (new Date)
            .getTime()
    } catch (e) {}
}

function perDetailIntro(a) {
    var b, c, d;
    0 == $("#selfMadeDialog")
        .length && (b = '<div class="self_made_dialog" id="selfMadeDialog" style="display: none;"><p class="perTitle" style="   font-size: 18px;font-weight: 600;color: #262626;line-height: 20px;margin:0 0 0 20px;"></p>',
            b += '<div class="self_made_content" style="font-size: 14px;color: #262626;line-height: 20px;margin:26px 30px 0;word-break: break-all;overflow-y:auto;"></div></div>',
            $("body")
            .append(b)),
        c = $(a)
        .attr("introtext") || "",
        d = $(a)
        .attr("nametext") || "",
        $("#selfMadeDialog .perTitle")
        .html(d + "的详细介绍"),
        $("#selfMadeDialog .self_made_content")
        .html(decodeURIComponent(c)),
        openDialogByIframe(600, 450, "selfMadeDialog")
}

function clickClearAsnwer(a) {
    for (var b in dataMap)
        b.split("_")[0] == "q" + a && (dataMap[b] = "",
            dealId(b))
}

function getQueryVariable(a) {
    var d, e, b = window.location.search.substring(1),
        c = b.split("&");
    for (d = 0; d < c.length; d++)
        if (e = c[d].split("="),
            e[0] == a)
            return e[1];
    return !1
}
var needConfirmAnswer, isMatchTitle, spChars, spToChars, prevInputControl, isLoadingAnswer, lastCostTime, hasClickQ, needGoOut, hasShowTip, keywordarray, keywordObj, quarray, hlv, jpmarr, jpmObj, jqParam, isLoadQues, scrFormHeightDif, isPageRun, UPLOAD_FILE_SUCCESS, curfilediv, isUploadingFile, cur_page, hasSkipPage, prevControl, pageHolder, curMatrixFill, curMatrixError, questionsObject, allQArray, shopArray, isCaptchaValid, nc_csessionid, nc_sig, nc_token, captchaOjb, hasSubmitTimes, hasPeiEFull, hasConfirmBtn, t_img, t_isLoad, itempopUpindex, popUpindex, firstError, firstMatrixError, needSubmitNotValid, lastFixedObj, isValidating, txtCurCity, prevScrollTop, obj_offectTop, MIN_CLICK_DELAY_TIME, lastClickTime, startAge, endAge, rName, gender, marriage, education, startIncome, endIncome, IsWIFI, modata, hasMatchName, jpMatchId, quesMatchId, jpWayText, quResult, clientAnswerSend, havereturn, timeoutTimer, nvvv, ktimes, lastLabel, isAutoSubmit, hasAutoSubmit, amt, hasSetmsg, curField = null,
    relationQs = new Object,
    ItemrelationQs = new Object,
    relationNotDisplayQ = new Object,
    relationItemNotDisplayQ = new Object,
    HasSetItemrelationList = new Object,
    verifymob = "",
    verifyControl = null,
    hasQingJing = !1;
window.reachMaxCheatCount = !1,
    needConfirmAnswer = !1,
    isMatchTitle = 0,
    $(function() {
        $.getScript("//g.alicdn.com/sd/smartCaptcha/0.0.4/index.js", function() {
            $.getScript("//g.alicdn.com/sd/nvc/1.1.112/guide.js", function() {
                window.useAliVerify && loadSmartCaptcha()
            })
        })
    }),
    spChars = ["$", "}", "^", "|", "!", "<"],
    spToChars = ["ξ", "｝", "ˆ", "¦", "！", "＜"],
    prevInputControl = null,
    isLoadingAnswer = !1,
    lastCostTime = 0,
    hasClickQ = !1,
    needGoOut = !1,
    hasShowTip = !1,
    keywordarray = "",
    keywordObj = null,
    quarray = "",
    hlv = "1",
    jpmarr = new Array,
    jpmObj = new Object,
    jqParam = "",
    isLoadQues = !1,
    scrFormHeightDif = 0,
    String.prototype.dbc2sbc = function() {
        return this.replace(/[\uff01-\uff5e]/g, function(a) {
                return String.fromCharCode(a.charCodeAt(0) - 65248)
            })
            .replace(/\u3000/g, " ")
    },
    isPageRun = !1,
    UPLOAD_FILE_SUCCESS = "",
    $(function() {
        return UPLOAD_FILE_SUCCESS = wjxlang.upload_success,
            $.support.leadingWhitespace || (window.location.href = window.location.href.replace("/m/", "/jq/")
                .replace("/vm/", "/vj/")),
            window.addEventListener && !window.IsPar && window == window.top ? window.touPiaoItemIndex ? (window.addEventListener("pageshow", function() {
                    isPageRun = !1,
                        setTimeout(function() {
                            isPageRun = !0
                        }, 500),
                        listenTpPopState()
                }),
                pushHistory(),
                void 0) : (window.addEventListener("load", function() {
                    setTimeout(function() {
                        window.addEventListener("popstate", function() {
                            if (hasClickQ) {
                                if (needGoOut)
                                    return window.history.back(),
                                        void 0;
                                if (isWeiXin && 0 == langVer) {
                                    pushHistory();
                                    var b = !0;
                                    b ? show_zhezhao_tip(!0) : closeTipWindow()
                                }
                            }
                        }, !1)
                    }, 500)
                }),
                void 0) : void 0
    }),
    String.prototype.format = function() {
        var a = arguments;
        return this.replace(/\{(\d+)\}/g, function(b, c) {
            return a[c]
        })
    },
    curfilediv = null,
    isUploadingFile = !1,
    cur_page = 0,
    hasSkipPage = !1,
    prevControl = null,
    pageHolder = null,
    curMatrixFill = null,
    curMatrixError = null,
    questionsObject = new Object,
    allQArray = null,
    shopArray = new Array,
    isCaptchaValid = !1,
    nc_csessionid = "",
    nc_sig = "",
    nc_token = ["FFFF00000000016770EE", (new Date)
        .getTime(), Math.random()
    ].join(":"),
    captchaOjb = null,
    hasSubmitTimes = 0,
    hasPeiEFull = !1,
    $(function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, I, J, K, L, M, N;
        for (window.informedInit && informedInit(),
            $("#htitle")
            .height() > 40 && $("#htitle")
            .css("font-size", "20px"),
            "hidden" == $("#toptitle")
            .css("visibility") && (document.title = ""),
            a = document.title,
            $(window)
            .scroll(function() {
                var c = $("#toptitle")
                    .offset()
                    .top + 48,
                    d = $(this)
                    .scrollTop();
                d > c ? $("title")
                    .text() || $("title")
                    .text(a) : emptyTitle(),
                    scrFormHeightDif > 0 || (window.buttonfooter || (window.buttonfooter = $("#deepButton")),
                        (-20 > scrFormHeightDif && d > 50 || scrFormHeightDif > -20) && window.buttonfooter.hasClass("button-list-fixed-deep") && window.buttonfooter.removeClass("button-list-fixed-deep"),
                        50 >= d && !window.buttonfooter.hasClass("button-list-fixed-deep") && window.buttonfooter.addClass("button-list-fixed-deep"))
            }),
            emptyTitle(),
            pageHolder = $("fieldset.fieldset"),
            b = iosIframeVideoHack() ? " touchend" : "",
            b && $("#divNext a")
            .bind("touchend", function(a) {
                show_next_page(),
                    a.preventDefault()
            }),
            c = 0; c < pageHolder.length; c++)
            for (d = "true" == $(pageHolder[c])
                .attr("skip"),
                d && (pageHolder[c].skipPage = !0,
                    hasSkipPage = !0),
                e = $(".field", pageHolder[c]),
                pageHolder[c].questions = e,
                f = 0,
                g = 0; g < e.length; g++)
                e[g].indexInPage = f,
                e[g].pageIndex = c,
                hasSkipPage && (e[g].pageParent = pageHolder[c]),
                f++;
        if ($("#divMatrixRel")
            .bind("click", function(a) {
                a.stopPropagation()
            }),
            $(document)
            .bind("click", function() {
                setMatrixFill(),
                    postHeight()
            }),
            $("#matrixinput")
            .on("keyup blur focus", function(a) {
                var b, c, d, e;
                curMatrixFill && (b = $(this)
                    .val(),
                    curMatrixFill.fillvalue = b,
                    "blur" != a.type && "keyup" != a.type || !curMatrixFill.fillvalue || (c = $(curMatrixFill)
                        .closest(".field")[0],
                        c.removeError && c.removeError()),
                    d = $(curMatrixFill)
                    .closest(".field"),
                    e = d.attr("ischeck"),
                    saveMatrixFill(curMatrixFill, e),
                    saveAnswer(d))
            }),
            keywordarray = (window.awardkeylist || "")
            .split("┋"),
            window.qukeylist && (quarray = qukeylist.split("|")),
            checkTitleDescMatch(),
            h = !1,
            i = new Array,
            j = !1,
            allQArray = $(".field"),
            k = !1,
            allQArray.each(function() {
                var c, d, e, f, g, k, l, m, n, o, p, q, r, s, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, a = $(this);
                if (this.onmouseover = function() {
                        ktimes++
                    },
                    c = a.attr("type"),
                    a.bind("click" + b, function() {
                        var d = "1" == c || "2" == c || "9" == c || "10" == c && !a.attr("select");
                        !d && this.removeError && this.removeError(),
                            "10" == c && a.attr("select") && $(this)
                            .find(".mdivtable")
                            .each(function() {
                                var a = $(this);
                                a[0].removeError && a[0].removeError(!0)
                            }),
                            !hasClickQ && isWeiXin && 0 == langVer && pushHistory(),
                            hasClickQ = !0;
                        try {
                            checkJpMatch(c, this),
                                "5" != c && "6" != c && $("#divMatrixHeader")
                                .hide()
                        } catch (e) {}
                        window.loadGeetest && window.loadGeetest(),
                            window.scrollup && scrollup.Stop()
                    }),
                    d = getTopic(a),
                    questionsObject[d] = a,
                    e = a.attr("isshop"),
                    e && shopArray.push(this),
                    f = a.attr("relation"),
                    g = a.attr("hasitemrelation"),
                    k = "",
                    f && "0" != f) {
                    k = -1 != f.indexOf("|") ? "|" : "$",
                        l = f.split(k);
                    for (m in l)
                        n = l[m],
                        n && -1 != n.indexOf(",") && (o = n.split(","),
                            p = o[0],
                            relationQs[p] || (relationQs[p] = new Array),
                            relationQs[p].push(this));
                    relationNotDisplayQ[d] = "1"
                } else
                    "0" == f && (relationNotDisplayQ[d] = "1");
                if ("1" == g) {
                    for (j = !0,
                        q = $("input[type='radio']", a),
                        0 == q.length && (q = $("input[type='checkbox']", a)),
                        0 == q.length && (q = $("input[type='hidden']", a)),
                        r = "none",
                        m = 0; m < q.length; m++)
                        if (s = q.eq(m)
                            .attr("itemrelation"),
                            s && "" != s)
                            for (k = -1 != s.indexOf("|") ? "|" : "$",
                                u = q.eq(m)
                                .attr("id"),
                                v = s.split(k),
                                HasSetItemrelationList[u] = s,
                                w = 0; w < v.length; w++)
                                n = v[w],
                                n && -1 != n.indexOf(",") && (o = n.split(","),
                                    p = o[0],
                                    ItemrelationQs[p] || (ItemrelationQs[p] = new Array),
                                    ItemrelationQs[p].push(u));
                        else
                            "none" != r || relationNotDisplayQ[d] || (r = "");
                    a[0].style.display = r,
                        "none" != r || relationItemNotDisplayQ[d] || (relationItemNotDisplayQ[d] = "1")
                }
                return x = a.attr("titletopic"),
                    x && (y = questionsObject[x],
                        y && (y[0]._titleTopic || (y[0]._titleTopic = new Array),
                            y[0]._titleTopic.push(d),
                            z = $("input.OtherRadioText", y),
                            0 == z.length && (z = $("input.OtherText", y)),
                            z.length > 0 && z.bind("blur keyup", function() {
                                referTitle(y)
                            }),
                            A = a.find(".field-label")[0],
                            A && (B = y.attr("qingjing"),
                                C = "",
                                B && (C = y.find(".ui-radio")
                                    .parent()
                                    .html(),
                                    D = C.indexOf("ui-radio"),
                                    D > -1 && (C = C.substr(0, D - 12))),
                                A.innerHTML = A.innerHTML.replace("[q" + x + "]", "<span id='spanTitleTopic" + d + "' style='text-decoration:underline;'>" + C + "</span>")))),
                    "1" == a.attr("hrq") ? !0 : ("1" == c ? (q = $("input", a),
                            q[1] && (q[0].confirmPwd = q[1],
                                q[1].firstPwd = q[0],
                                $(q[1])
                                .on("keyup", function() {
                                    this.firstPwd.needCheckConfirm = !0,
                                        verifyTxt(a, $(this))
                                }),
                                q = $(q[0])),
                            q.on("keyup blur click", function() {
                                verifyTxt(a, q),
                                    prevInputControl = this,
                                    window.hasAnswer = !0,
                                    jump(a, this),
                                    referTitle(a, this.value),
                                    saveAnswer(a)
                            }),
                            iosNumberKey(q),
                            window.needSaveJoin && q.change(function() {
                                saveAnswer(a)
                            }),
                            q.blur(function() {
                                a.find(".errorMessage")
                                    .html() || a.find(".errorMessage")
                                    .height("auto"),
                                    checkOnly(a, q),
                                    lastFixedObj && $(lastFixedObj)
                                    .addClass("fixed-style")
                            }),
                            q.focus(function() {
                                lastFixedObj && $(lastFixedObj)
                                    .removeClass("fixed-style")
                            }),
                            E = $("textarea", a),
                            E[0] && (F = E.prev("a")[0],
                                F.par = a[0],
                                E[0].par = a[0],
                                a[0].needsms = !0,
                                G = E.parent()
                                .parent()
                                .find(".errorMessage")[0],
                                a[0].mobileinput = q[0],
                                a[0].prevbtn = F,
                                a[0].verifycodeinput = E[0],
                                window.joinIdnew && (q.disabled = !0,
                                    F.disabled = !0),
                                F.onclick = function() {
                                    var a, b;
                                    if (!this.disabled)
                                        return a = this.par,
                                            a.mobileinput.value = $.trim(a.mobileinput.value),
                                            /^\d{11}$/.test(a.mobileinput.value) ? (a.issmsvalid && a.mobile == a.mobileinput.value || this.isSending || (!this.repeat || confirm("您输入的手机号码“" + a.mobileinput.value + "”确认准确无误吗？")) && (b = this.getAttribute("nocode"),
                                                    "1" == b ? F.sendActivitySms() : (verifyControl = F,
                                                        isCaptchaValid = !1,
                                                        this.needreload && captchaOjb && captchaOjb.reload(),
                                                        showCaptcha())),
                                                void 0) : (alertNew("请输入正确的手机号码"),
                                                void 0)
                                },
                                F.sendActivitySms = function(a) {
                                    var b, c, d, e, f;
                                    this.isSending = !0,
                                        this.disabled = !0,
                                        b = this.par,
                                        c = this,
                                        d = b.mobileinput.getAttribute("needonly"),
                                        e = "",
                                        a && (e = "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene),
                                        f = "/joinnew/AnswerSmsHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + e + "&t=" + (new Date)
                                        .valueOf(),
                                        d && (f += "&qi=" + getTopic(b)),
                                        window.joinIdnew && (f += "&joinid=" + window.joinIdnew),
                                        $.ajax({
                                            type: "GET",
                                            url: f,
                                            async: !1,
                                            success: function(a) {
                                                var e, d = "";
                                                0 == a.indexOf("true") ? (d = "成功发送。如未收到，请检查手机号是否正确！",
                                                        e = a.split(","),
                                                        2 == e.length && (d += e[1]),
                                                        c.repeat = 1,
                                                        c.needreload = !0,
                                                        c.resent(),
                                                        b.verifycodeinput.disabled = !1) : "fast" == a ? (d = "发送频率过快",
                                                        c.needreload = !0,
                                                        c.resent()) : "repeat" == a ? (c.disabled = !1,
                                                        d = "此手机号之前已参与过，不能重复参与！") : d = "no" == a ? "发布者短信数量不够" : "fail" == a ? "短信发送失败，每天最多发送5次！" : "error" == a ? "手机号码不正确" : "nopub" == a ? "问卷未运行，不能填写" : a,
                                                    d.indexOf("验证码") > -1 && (c.disabled = !1,
                                                        c.needreload = !0),
                                                    G.innerHTML = d,
                                                    c.isSending = !1
                                            }
                                        })
                                },
                                F.resent = function() {
                                    var a = this,
                                        b = 60,
                                        c = setInterval(function() {
                                            b--,
                                            57 > b && (a.isSending = !1),
                                                b > 0 ? a.innerHTML = "重发(" + b + "秒)" : (a.innerHTML = "发送验证码",
                                                    a.disabled = !1,
                                                    clearInterval(c))
                                        }, 1e3)
                                },
                                E[0].onchange = E[0].onblur = function() {
                                    var b, c, a = $.trim(this.value);
                                    return 6 != a.length ? (G.innerHTML = "提示：请输入6位数字！",
                                        void 0) : /^\d+$/.exec(a) ? (b = this.par,
                                        b.issmsvalid && b.mobile == b.mobileinput.value || b.prevcode != a && (b.prevcode = a,
                                            c = "/joinnew/AnswerSmsValidateHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + "&code=" + escape(a) + "&t=" + (new Date)
                                            .valueOf(),
                                            $.ajax({
                                                type: "GET",
                                                url: c,
                                                async: !1,
                                                success: function(a) {
                                                    b.issmsvalid = !1;
                                                    var c = "";
                                                    "true" == a ? (b.issmsvalid = !0,
                                                            b.mobile = b.mobileinput.value,
                                                            "1" != b.prevbtn.getAttribute("nocode") && (verifymob = b.mobile),
                                                            c = "成功通过验证",
                                                            b.removeError()) : "send" == a ? c = "请先发送验证码，每天最多发送5次！" : "no" == a ? c = "验证码输入错误超过5次，无法再提交" : "error" == a && (c = "验证码输入错误，连续输错5次将无法提交"),
                                                        G.innerHTML = c
                                                }
                                            })),
                                        void 0) : (G.innerHTML = "提示：请输入6位数字！",
                                        void 0)
                                }
                            )) : "2" == c ? (q = $("textarea", a),
                            q.on("keyup blur click", function() {
                                verifyTxt(a, q),
                                    prevInputControl = this,
                                    window.hasAnswer = !0,
                                    jump(a, this),
                                    referTitle(a, this.value),
                                    saveAnswer(a)
                            }),
                            q.blur(function() {
                                checkOnly(a, q),
                                    lastFixedObj && $(lastFixedObj)
                                    .addClass("fixed-style")
                            }),
                            q.focus(function() {
                                lastFixedObj && $(lastFixedObj)
                                    .removeClass("fixed-style")
                            })) : "9" == c || "34" == c ? (H = "input",
                            "34" == c && (H = "textarea"),
                            I = $(H, a),
                            I.on("keyup blur change", function() {
                                $(this),
                                    prevInputControl = this,
                                    msg = verifyTxt(a, $(this), !0),
                                    jump(a, this),
                                    referTitle(a, this.value),
                                    count360Val(),
                                    saveAnswer(a),
                                    fixBottom()
                            }),
                            I.blur(function() {
                                checkOnly(a, $(this)),
                                    lastFixedObj && $(lastFixedObj)
                                    .addClass("fixed-style")
                            }),
                            I.focus(function() {
                                lastFixedObj && $(lastFixedObj)
                                    .removeClass("fixed-style")
                            }),
                            iosNumberKey(I),
                            J = $(".textEdit .textCont", a),
                            J.unbind("click"),
                            J.click(function(a) {
                                var b, c;
                                return a.stopPropagation(),
                                    b = $(this)
                                    .parent(".textEdit")
                                    .attr("verify"),
                                    "城市单选" == b || "城市多选" == b || "省市区" == b || "高校" == b || "地图" == b || "日期" == b || "生日" == b || "入学时间" == b ? (c = $(this)
                                        .parent()
                                        .prev(),
                                        c.hasClass("ui-input-text") || (c = $(this)
                                            .parent()
                                            .prev()
                                            .prev()),
                                        c.trigger("click"),
                                        !1) : ($(this)
                                        .css({
                                            width: 24
                                        })
                                        .parent()
                                        .removeClass("initStyle"),
                                        !1)
                            }),
                            K = isIosSystem(),
                            J.blur(function() {
                                K && ">" == $(this)
                                    .html()
                                    .split("<br")[1] && $(this)
                                    .html($(this)
                                        .html()
                                        .split("<br")[0]),
                                    "" == $(this)
                                    .text()
                                    .trim() && $(this)
                                    .css({
                                        display: "inline-block",
                                        width: 72
                                    })
                                    .parent(".textEdit")
                                    .addClass("initStyle");
                                var a = $(this)
                                    .parent(".textEdit")
                                    .prev();
                                a.hasClass("ui-input-text") || (a = $(this)
                                        .parent(".textEdit")
                                        .prev()
                                        .prev()),
                                    a.val($(this)
                                        .text()
                                        .trim())
                                    .trigger("keyup")
                            }),
                            J.on("keydown input", function(a) {
                                if (a = a || window.event,
                                    13 == a.keyCode)
                                    return !1;
                                if (!$(this)
                                    .attr("contenteditable"))
                                    return !1;
                                "" != $(this)
                                    .text()
                                    .trim() && $(this)
                                    .css({
                                        display: "inline"
                                    })
                                    .parent()
                                    .removeClass("initStyle"),
                                    K && ">" == $(this)
                                    .html()
                                    .split("<br")[1] && $(this)
                                    .html($(this)
                                        .html()
                                        .split("<br")[0]),
                                    "" == $(this)
                                    .text()
                                    .trim() && $(this)
                                    .css({
                                        display: "inline-block",
                                        width: 72
                                    })
                                    .parent(".textEdit")
                                    .addClass("initStyle");
                                var b = $(this)
                                    .parent(".textEdit")
                                    .prev();
                                b.hasClass("ui-input-text") || (b = $(this)
                                        .parent(".textEdit")
                                        .prev()
                                        .prev()),
                                    b.val($(this)
                                        .text()
                                        .trim())
                                    .trigger("keyup")
                            })) : "8" == c ? $("input", a)
                        .change(function() {
                            jump(a, this),
                                saveAnswer(a)
                        }) : "12" == c ? $("input", a)
                        .change(function() {
                            var h, i, b = null,
                                c = $(a)
                                .attr("total"),
                                d = $("input:visible", a),
                                e = count = d.length,
                                f = c,
                                g = this;
                            d.each(function() {
                                    $(this)
                                        .val() ? (count--,
                                            f -= $(this)
                                            .val()) : g != this && (b = this)
                                }),
                                b || d.each(function(a) {
                                    return a == e - 1 ? (b = this,
                                        !1) : void 0
                                }),
                                1 == count && b && f > 0 && ($(b)
                                    .val(f)
                                    .change(),
                                    f = 0),
                                msg = "",
                                0 != f && 0 == count && (h = parseInt($(b)
                                        .val()) + f,
                                    h >= 0 ? b != this ? ($(b)
                                        .val(h)
                                        .change(),
                                        f = 0) : 2 == d.length && (i = c - $(b)
                                        .val(),
                                        $(d[0])
                                        .val(i)
                                        .change(),
                                        f = 0) : msg = "，<span style='color:red;'>" + sum_warn + "</span>"),
                                0 == f && d.each(function() {
                                    $(this)
                                        .val() || $(this)
                                        .val("0")
                                        .change()
                                }),
                                $(".relsum", a)
                                .html(sum_total + "<b>" + c + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (c - f) + "</span>" + msg),
                                jump(a, this),
                                saveAnswer(a)
                        }) : "13" == c ? h = !0 : "3" == c ? (L = $("div.ui-radio", a),
                            L.each(function() {
                                var a, b;
                                window.hasTouPiao && (a = this.getAttribute("htp"),
                                    a && (b = document.getElementById("spanPiao" + d + "_" + a),
                                        b && !b.needHide && (b.style.display = "")))
                            }),
                            checkPeiE(a, "input[type='radio']"),
                            L.bind("click", function(b) {
                                var d, e, c = $(this);
                                a[0] && a[0].hasConfirm || (d = c.find("input[type='radio']")[0],
                                    d.disabled || (window.hasAnswer = !0,
                                        $(a)
                                        .find("div.ui-radio")
                                        .each(function() {
                                            var a = $(this);
                                            a.find("input[type='radio']")[0].checked = !1,
                                                a.find("a.jqradio")
                                                .removeClass("jqchecked")
                                        }),
                                        d.checked = !0,
                                        e = c.find("input.OtherRadioText")[0],
                                        e && (d.itemText = e),
                                        processRadioInput(a[0], d),
                                        c.find("a.jqradio")
                                        .addClass("jqchecked"),
                                        displayRelationByType(a),
                                        referTitle(a),
                                        jump(a, d),
                                        displaypeie(a, "input[type=radio]", 1),
                                        "1" != a.attr("req") && addClearHref(a),
                                        showAnswer(a, L, !0),
                                        saveAnswer(a),
                                        1 != c.attr("desc") && b.preventDefault(),
                                        initCusomSelect(this, d, a[0])))
                            }),
                            B = a.attr("qingjing"),
                            B && i.push(a),
                            z = $("input.OtherRadioText", a),
                            z.bind("click", function(a) {
                                var b, c, d, e;
                                $(this.parentNode.parentNode.parentNode)
                                    .find("div.ui-radio")
                                    .each(function() {
                                        $(this)
                                            .find("input[type='radio']")[0].checked = !1,
                                            $(this)
                                            .find("a.jqradio")
                                            .removeClass("jqchecked")
                                    }),
                                    prevInputControl = this,
                                    b = $(this)
                                    .attr("rel"),
                                    c = $("#" + b)[0],
                                    c.checked = !0,
                                    d = $("#" + b)
                                    .parent()
                                    .parent(),
                                    d.find("a.jqradio")
                                    .addClass("jqchecked"),
                                    c.itemText = this,
                                    e = $(this)
                                    .closest(".field"),
                                    processRadioInput(e[0], c),
                                    displayRelationByType(e),
                                    jump(e, c),
                                    displaypeie(e, "input[type=radio]", 1),
                                    saveAnswer(e),
                                    a.stopPropagation(),
                                    a.preventDefault()
                            }),
                            z.bind("blur keyup", function(b) {
                                otherTextEvent(this, a),
                                    "blur" == b.type && saveAnswer(a)
                            })) : "7" == c ? (M = $("select", a),
                            M.bind("change", function(b) {
                                displayRelationByType(a),
                                    jump(a, this.options[this.selectedIndex]);
                                var c = this.options[this.selectedIndex].text; -
                                2 == this.value && (c = ""),
                                    referTitle(a, c),
                                    saveAnswer(a),
                                    displaypeie(a, "option", 5),
                                    b.preventDefault()
                            }),
                            checkPeiE(a, "option"),
                            M[0].selectedIndex > 0 && $("span", M[0].parentNode)
                            .html(M[0].options[M[0].selectedIndex].text)) : "10" == c ? (N = "1" == a.attr("select"),
                            O = a.attr("zizeng"),
                            P = a.attr("maxvalue"),
                            Q = a.attr("minvalue"),
                            R = "<div class='errorMessage'></div>",
                            S = "",
                            T = a.find(".mdivtable"),
                            U = a.attr("fixedslider"),
                            O ? (V = a.find(".select_title"),
                                W = a.find(".mdivtable:last"),
                                T.each(function(a) {
                                    a >= Q && $(this)
                                        .hide(),
                                        S = "<div style='display: none;' class='delete-icon'></div>" + R,
                                        $(this)
                                        .addClass("zizeng")
                                        .append(S)
                                }),
                                V.each(function(a) {
                                    a >= Q && $(this)
                                        .hide()
                                }),
                                X = wjxlang.add,
                                W.after("<div class='increase-btn'><i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + X + "</span></div>"),
                                T.find(".delete-icon")
                                .on("click", function() {
                                    var a = $(this)
                                        .parent(".mdivtable"),
                                        b = a.attr("rowid");
                                    b == P && $(this)
                                        .closest(".field")
                                        .find(".increase-btn")
                                        .removeClass("disable-style"),
                                        a.hide()
                                        .prev()
                                        .hide(),
                                        b - Q > 1 && a.prev()
                                        .prev()
                                        .find(".delete-icon")
                                        .show()
                                }),
                                $(".increase-btn", a)
                                .on("click", function() {
                                    var b = a.find(".mdivtable:visible"),
                                        c = b.next()
                                        .show()
                                        .next()
                                        .show();
                                    c.last()
                                        .find(".delete-icon")
                                        .show()
                                        .parent()
                                        .prev()
                                        .prev()
                                        .find(".delete-icon")
                                        .hide(),
                                        c.last()
                                        .attr("rowid") == P && $(this)
                                        .addClass("disable-style")
                                })) : U ? (Y = a.find(".ui-slider-table"),
                                Z = Y.find(".ui-table-scroll .ui-table-body"),
                                _ = Y.find(".ui-scroll-shadow"),
                                setFixedsliderWidth(Z),
                                setFixedSliderTableHandler(a),
                                Z.on("scroll", function() {
                                    var a = $(this),
                                        b = a.parent()
                                        .next();
                                    0 != a.scrollLeft() ? b.removeClass("ui-table-position") : b.addClass("ui-table-position"),
                                        a.scrollLeft() + a.width() === a.children()
                                        .outerWidth() || a[0].scrollwidth <= a[0].clientWidth ? _.hide() : _.show()
                                }),
                                Z.trigger("scroll"),
                                Z.find(".ui-table-tbody tr")
                                .on("DOMNodeInserted", function() {
                                    var b = $(this);
                                    setFixedSliderTableHandler(a, b)
                                })) : T.each(function() {
                                S = R,
                                    $(this)
                                    .append(S)
                            }),
                            N && $("select", a)
                            .bind("change", function() {
                                jump(a, this),
                                    saveAnswer(a)
                            }),
                            ab = $("input,textarea", a),
                            ab.bind("focus", function() {
                                lastFixedObj && $(lastFixedObj)
                                    .removeClass("fixed-style")
                            })
                            .bind("keyup change blur", function() {
                                var c = $(this);
                                c.val(),
                                    prevInputControl = this,
                                    msg = verifyTxt(a, $(this), !0),
                                    count360Val(),
                                    jump(a, this),
                                    saveAnswer(a)
                            }),
                            iosNumberKey(ab)) : "5" == c ? initRate(a) : "6" == c ? (initRate(a, !0),
                            setTableWidth(a)) : "4" == c ? (bb = $("div.ui-checkbox", a),
                            bb.each(function() {
                                var a, b;
                                window.hasTouPiao && (a = this.getAttribute("htp"),
                                    a && (b = document.getElementById("spanPiao" + d + "_" + a),
                                        b && (b.style.display = "")))
                            }),
                            checkPeiE(a, "input[type='checkbox']"),
                            bb.bind("click", function(b) {
                                var d, e, c = $(this);
                                a[0] && a[0].hasConfirm || (d = c.find("input[type='checkbox']")[0],
                                    d.disabled || (d.checked = !d.checked,
                                        window.hasAnswer = !0,
                                        d.checked ? c.find("a.jqcheck")
                                        .addClass("jqchecked") : c.find("a.jqcheck")
                                        .removeClass("jqchecked"),
                                        1 == a.attr("gm") && groupMutual(this),
                                        checkHuChi(a, this),
                                        displayRelationByType(a),
                                        verifyCheckMinMax(a, !1, !1, this, !d.checked),
                                        jump(a, d),
                                        displaypeie(a, "input[type=checkbox]", 2),
                                        window.createItem && createItem(a),
                                        e = c.find("input.OtherText")[0],
                                        e && (d.checked ? e.value = e.pvalue || "" : (e.pvalue = e.value,
                                            e.value = "")),
                                        referTitle(a),
                                        showAnswer(a, bb),
                                        saveAnswer(a),
                                        initCusomSelect(this, d, a[0]),
                                        TotalValBoxInit(),
                                        b.preventDefault()))
                            }),
                            cb = $("input.OtherText", a),
                            cb.bind("click", function(a) {
                                var d, e, f, g, b = $(this)
                                    .attr("rel"),
                                    c = $("#" + b)[0];
                                return prevInputControl = this,
                                    d = $(this)
                                    .closest("div.field"),
                                    e = d.attr("maxvalue"),
                                    e && (f = $("input:checked", d)
                                        .length,
                                        f > e || f == e && !c.checked) ? ($(this)
                                        .blur(),
                                        a.stopPropagation(),
                                        a.preventDefault(),
                                        void 0) : (c.checked = !0,
                                        c.itemText = this,
                                        g = $("#" + b)
                                        .closest(".ui-checkbox"),
                                        g.find("a.jqcheck")
                                        .addClass("jqchecked"),
                                        this.pvalue && !this.value && (this.value = this.pvalue),
                                        checkHuChi(d, g[0]),
                                        displayRelationByType(d),
                                        jump(d, c),
                                        displaypeie(d, "input[type=checkbox]", 2),
                                        verifyCheckMinMax(d, !1),
                                        window.createItem && createItem(d),
                                        1 == d.attr("gm") && groupMutual(this),
                                        saveAnswer(d),
                                        a.stopPropagation(),
                                        a.preventDefault(),
                                        void 0)
                            }),
                            cb.bind("blur keyup", function(b) {
                                referTitle(a),
                                    otherTextEvent(this, a),
                                    "blur" == b.type && saveAnswer(a)
                            })) : "21" == c ? $(".shop-item", a)
                        .each(function() {
                            var b = $(".itemnum", this),
                                c = $(".item_left", this),
                                d = $(".item_detail", this),
                                e = a.attr("maxvalue") || 0;
                            e = parseInt(e),
                                $(".add", this)
                                .bind("click", function(f) {
                                    var l, m, n, o, p, q, g = !1,
                                        h = 0,
                                        i = 0,
                                        j = 0,
                                        k = !0;
                                    if (c[0] && (g = !0,
                                            h = parseInt(c.attr("num"))),
                                        i = parseInt(d.attr("minnum")),
                                        j = parseInt(d.attr("maxnum")),
                                        l = parseInt(b.val()),
                                        m = "",
                                        n = 0,
                                        e)
                                        for (o = $(".itemnum", a),
                                            p = 0; p < o.length; p++)
                                            if (q = o.eq(p),
                                                q && parseInt(q.val()) > 0 && (o.index(b) != p ? n++ : ""),
                                                n >= e)
                                                return alertNew(wjxlang.shop_maxnum.replace("{0}", e)),
                                                    b.val(0),
                                                    f.preventDefault(),
                                                    void 0;
                                    i > 0 && l < parseInt(i) && (b.val(i),
                                            k = !1),
                                        j > 0 && l >= parseInt(j) && (m = wjxlang.shop_limit_num.replace("{0}", j),
                                            b.val(j),
                                            k = !1),
                                        g && l >= h && (!(j > 0 && h > j) || i > h) && (m = wjxlang.shop_period.replace("{0}", h),
                                            0 >= h && (m = wjxlang.shop_outstock),
                                            b.val(h),
                                            k = !1),
                                        k && b.val(l + 1),
                                        updateCart(a),
                                        "" == m ? "" : alertNew(m),
                                        f.preventDefault()
                                }),
                                b.bind("focus", function() {
                                    "0" == b.val() && b.val("")
                                }),
                                b.bind("blur change", function(f) {
                                    var g, h, i, j, k, l, m, n, o, p, q, r;
                                    if (b.val() || b.val("0"),
                                        g = /^[0-9]+$/,
                                        g.test(b.val()) || b.val("0"),
                                        h = 0,
                                        e)
                                        for (i = $(".itemnum", a),
                                            j = 0; j < i.length; j++)
                                            if (k = i.eq(j),
                                                k && parseInt(k.val()) > 0 && (i.index(b) != j ? h++ : ""),
                                                h >= e)
                                                return alertNew(wjxlang.shop_maxnum.replace("{0}", e)),
                                                    b.val(0),
                                                    f.preventDefault(),
                                                    void 0;
                                    return l = parseInt(b.val()),
                                        m = "",
                                        n = !1,
                                        o = 0,
                                        p = 0,
                                        q = 0,
                                        c[0] && (n = !0,
                                            o = parseInt(c.attr("num"))),
                                        p = parseInt(d.attr("minnum")),
                                        q = parseInt(d.attr("maxnum")),
                                        !l || 0 > l ? (0 != l && p > 0 && p >= l ? p > o ? b.val(o) : b.val(p) : b.val("0"),
                                            updateCart(a),
                                            void 0) : (p > 0 && p > l && b.val(p),
                                            q > 0 && l >= q && (m = wjxlang.shop_limit_num.replace("{0}", q),
                                                b.val(q)),
                                            n && l >= o && (!(q > 0 && o > q) || p > o) && (m = wjxlang.shop_period.replace("{0}", o),
                                                r = o,
                                                0 > r && (r = 0),
                                                b.val(r)),
                                            updateCart(a),
                                            "" == m ? "" : alertNew(m),
                                            f.preventDefault(),
                                            void 0)
                                }),
                                $(".remove", this)
                                .bind("click", function(c) {
                                    var e = 0,
                                        f = parseInt(b.val());
                                    return e = parseInt(d.attr("minnum")),
                                        e && parseInt(e) > 0 && f <= parseInt(e) ? (b.val(0),
                                            updateCart(a),
                                            void 0) : (f > 0 && (b.val(f - 1),
                                                updateCart(a)),
                                            c.preventDefault(),
                                            void 0)
                                })
                        }) : "11" == c && ($("li.ui-li-static", a)
                            .bind("click", function(b) {
                                var d, c = $(this)
                                    .find("input.OtherText")[0];
                                $(this)
                                    .attr("check") ? (d = $(this)
                                        .find("span")
                                        .html(),
                                        $(this.parentNode)
                                        .find("li[check='1']")
                                        .each(function() {
                                            var a = $(this)
                                                .find("span.sortnum")
                                                .html();
                                            a - d > 0 && $(this)
                                                .find("span.sortnum")
                                                .html(a - 1)
                                        }),
                                        $(this)
                                        .find("span.sortnum")
                                        .html("")
                                        .removeClass("sortnum-sel"),
                                        $(this)
                                        .attr("check", ""),
                                        c && (c.pvalue = c.value,
                                            c.value = "")) : (d = $(this.parentNode)
                                        .find("li[check='1']")
                                        .length + 1,
                                        $(this)
                                        .find("span.sortnum")
                                        .html(d)
                                        .addClass("sortnum-sel"),
                                        $(this)
                                        .attr("check", "1"),
                                        c && c.pvalue && (c.value = c.pvalue || "")),
                                    displayRelationByType(a),
                                    verifyCheckMinMax(a, !1, !0, this),
                                    jump(a, this),
                                    displaypeie(a, "li.ui-li-static", 3),
                                    window.createItem && createItem(a, !0),
                                    referTitle(a),
                                    saveAnswer(a),
                                    b.preventDefault()
                            }),
                            db = $("input.OtherText", a),
                            db.bind("click", function(b) {
                                var c, d, e, f;
                                b.stopPropagation(),
                                    b.preventDefault(),
                                    c = $(this)
                                    .attr("rel"),
                                    d = $("#" + c)
                                    .parent()
                                    .parent(),
                                    e = d.parent(),
                                    1 != d.attr("check") && (f = e.find("li[check='1']")
                                        .length + 1,
                                        d.find("span.sortnum")
                                        .html(f)
                                        .addClass("sortnum-sel"),
                                        d.attr("check", "1")),
                                    displayRelationByType(a),
                                    verifyCheckMinMax(a, !1, !0, this),
                                    jump(a, this),
                                    displaypeie(a, "li.ui-li-static", 3),
                                    window.createItem && createItem(a, !0),
                                    saveAnswer(a),
                                    b.preventDefault()
                            }),
                            db.bind("blur keyup", function(b) {
                                otherTextEvent(this, a),
                                    "blur" == b.type && saveAnswer(a)
                            })),
                        eb = a.attr("hasjump"),
                        eb && clearFieldValue(a),
                        void 0)
            }),
            !window.isVip && j && alertNew("提示：此问卷使用了选项关联功能，发布者非企业版用户，无法使用！"),
            0 != allQArray.length || window.isSingleVote && window.touPiaoItemIndex || $("#ctlNext")
            .hide(),
            k && addtoactivitystat(),
            window.totalCut && window.totalCut > 0)
            for (g = 0; g < window.totalCut; g++) {
                if (l = "divCut" + (g + 1),
                    m = $("#" + l),
                    n = m.attr("relation"),
                    o = "",
                    n && "0" != n) {
                    o = -1 != n.indexOf("|") ? "|" : "$",
                        p = n.split(o);
                    for (c in p)
                        q = p[c],
                        q && -1 != q.indexOf(",") && (r = q.split(","),
                            s = r[0],
                            relationQs[s] || (relationQs[s] = new Array),
                            relationQs[s].push(m[0]))
                }
                t = m.attr("titletopic"),
                    t && (u = questionsObject[t],
                        u && (u[0]._titleTopic || (u[0]._titleTopic = new Array),
                            v = m.attr("topic"),
                            u[0]._titleTopic.push(v),
                            w = m[0].childNodes[0],
                            w && (w.innerHTML = w.innerHTML.replace("[q" + t + "]", "<span id='spanTitleTopic" + v + "' style='text-decoration:underline;'></span>"))))
            }
        for (isLoadQues = !0,
            x = 0; x < pageHolder.length; x++)
            for (e = pageHolder[x].questions,
                g = 0; g < e.length; g++)
                v = getTopic(e[g]),
                relationQs[v] && relationJoin(e[g]),
                ItemrelationQs[v] && relationItemJoin(e[g]),
                y = $(e[g])
                .attr("refered"),
                y && window.createItem && createItem(e[g]);
        for (isLoadQues = !1,
            z = 0; z < i.length; z++)
            A = i[z],
            hasQingJing = !0,
            "" == A[0].style.display && displayRelationByType(A);
        for (x = 0; x < pageHolder.length; x++)
            for (e = pageHolder[x].questions,
                g = 0; g < e.length; g++)
                checkPeiE($(e[g]));
        if ($("#hrefPreview")
            .on("click", function() {
                if (window.hasHeatMap)
                    return getHeatmapAns(function() {
                            var a = validate($(this)
                                .parent());
                            a && groupAnswer(6)
                        }),
                        void 0;
                var a = validate($(this)
                    .parent());
                a && groupAnswer(6)
            }),
            null != $("#ctlNext") && $("#ctlNext")
            .on("click", function() {
                var a, b;
                try {
                    debugLog("准备提交答卷")
                    if (window.IsPar)
                        return a = window.parent.document.getElementById("skin-peeler-panel"),
                            a && (a.style.display = "none"),
                            alertNew("此问卷为预览状态，不能提交", function() {
                                a && (a.style.display = "block")
                            }),
                            void 0;
                    if (needTip())
                        return alertNew($(divTip)
                                .text()),
                            void 0;
                    if ($("#action")
                        .val("1"),
                        window.buttonfooter && window.buttonfooter.hide(),
                        window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata)
                        return window.maxTimer && clearInterval(maxTimer),
                            getHeatmapAns(function() {
                                pageHolder[cur_page].hasGetHeatmapdata = !0,
                                    $("#ctlNext")
                                    .click()
                            }),
                            void 0;
                    if (debugLog("验证提交数据"),
                        b = validate($(this)
                            .parent()),
                        !b)
                        return;
                    if ((!window.isSingleVote || window.isMultipleChoice) && $("html, body")
                        .animate({
                            scrollTop: $(document)
                                .height()
                        }, 600),
                        debugLog("判断是否需要验证码"),
                        window.useAliVerify) {
                        if (!isCaptchaValid)
                            return !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex ? $("#captcha")
                                .fadeIn("fast") : window.isMultipleChoice && window.ftppar ? voteMul(!0) : window.touPiaoItemIndex && !window.isMultipleChoice ? voteSin(!0) : voteData(),
                                void 0
                    } else if (window.isSingleVote && (!window.isMultipleChoice || window.touPiaoItemIndex)) {
                        if (window.isMultipleChoice && window.ftppar)
                            return voteMul(),
                                void 0;
                        if (window.touPiaoItemIndex && !window.isMultipleChoice)
                            return voteSin(),
                                void 0
                    }
                    debugLog("进入提交函数"),
                        clockRecordTime(!0),
                        $("#spanPower")
                        .unbind("click"),
                        $("#spanPower a")
                        .attr("href", "javascript:;")
                        .attr("target", ""),
                        groupAnswer(1)
                } catch (c) {
                    throw alert(c),
                        c
                }
            }),
            initSlider(),
            matrixFixedTitle(),
            totalPage > 1 ? ($("#divSubmit")
                .hide(),
                $("#divNext")[0].style.display = "",
                showProgress()) : $("#divSubmit")
            .show(),
            2 == window.isChuangGuan && ($("#divSubmit")
                .hide(),
                window.divFengMian || startChuangGuan(!1)),
            !window.isSingleVote || window.isMultipleChoice || window.touPiaoItemIndex ? window.touPiaoItemIndex && ($("#divAwardNotify")
                .hide(),
                $("#ValError")
                .hide()) : ($("#ctlNext")
                .hide(),
                $("#spanPreview")
                .hide()),
            fixBottom(),
            $(window)
            .load(function() {
                fixBottom()
            }),
            window.cepingCandidate) {
            for (B = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
                C = new Object,
                D = 0; D < B.length; D++)
                E = B[D].replace(/(\s*)/g, "")
                .replace(/&/g, "")
                .replace(/\\/g, "")
                .replace("&nbsp;", "")
                .toLowerCase(),
                C[E] = "1";
            F = $("#div1"),
                window.allowPart ? (G = 0,
                    $("input[type=checkbox]", F)
                    .each(function() {
                        var c, a = $(this)
                            .parent()
                            .parent(),
                            b = "";
                        if (window.isQywx)
                            if (c = a.find("ww-open-data")[0])
                                b = c.getAttribute("openid");
                            else {
                                if (c = a.find(".label")[0],
                                    !c)
                                    return a.css("display", "none"),
                                        !0;
                                b = c.innerHTML
                            }
                        else {
                            if (c = a.find(".label")[0],
                                !c)
                                return !0;
                            b = c.innerHTML
                        }
                        b = b.replace(/(\s*)/g, "")
                            .replace(/&amp;/g, "")
                            .replace(/\\/g, "")
                            .replace("&nbsp;", "")
                            .toLowerCase(),
                            C[b] ? window.OneaTime && 0 == G ? (a.trigger("click"),
                                G++) : window.oneDept && a.trigger("click") : a.css("display", "none")
                    }),
                    F[0] && (F[0].style.display = ""),
                    (window.OneaTime || window.oneDept) && ($("#div1 div.field-label")
                        .css("display", "none"),
                        $("#div1 div.ui-controlgroup ")
                        .css("display", "none"))) : ($("input[type=checkbox]", F)
                    .each(function() {
                        var c, a = $(this)
                            .parent()
                            .parent(),
                            b = a.find(".label")[0];
                        return b ? (c = b.innerHTML,
                            c = c.replace(/(\s*)/g, "")
                            .replace(/&amp;/g, "")
                            .replace(/\\/g, "")
                            .replace("&nbsp;", "")
                            .toLowerCase(),
                            C[c] && (this.checked = !0),
                            void 0) : !0
                    }),
                    F[0] && (createItem(F, !1),
                        F[0].style.display = "none",
                        F[0].isCepingQ = "1"))
        }
        processAward();
        try {
            checkAnswer()
        } catch (H) {}
        for (needConfirmAnswer || loadMinMaxTime(),
            I = document.getElementsByTagName("img"),
            g = 0; g < I.length; g++)
            I[g].onerror = function() {
                this.onerror = null,
                    replaceImg(this)
            },
            replaceImg(I[g]);
        processSearch(),
            pageHolder[0] && divContent && "none" != divContent.style.display ? adjustVideoHeight(pageHolder[0]) : window.touPiaoItemIndex && divContent && adjustVideoHeight(divContent),
            !window.showContent && document.getElementById("divDesc") && document.getElementById("divDesc")
            .getElementsByTagName("iframe")
            .length > 0 && adjustVideoHeight(document.getElementById("divDesc")),
            $("#ctlNext")
            .on("mouseover", function() {
                ktimes++
            }),
            J = document.getElementById("divContent"),
            !J && needTip() ? $("img", divTip)[0] || ($("#divWorkError")
                .show(),
                $("#divWorkError")
                .css({
                    "z-index": 2e3
                }),
                $("body")
                .css({
                    "min-height": "667px"
                }),
                K = wjxlang.message,
                L = '<div style="padding-top: 66px; text-align: center;"><div style="margin-bottom: 20px;"><i style="width: 85px; height: 85px;display: inline-block;position: static;background-image: url(//image.wjx.com/images/weixin/new-mobile/failure@2x.png?v=1); background-size: 85px 85px;"></i></div><div style="margin-bottom: 25px; padding: 0 20px;"><h2 style="margin-bottom: 5px; font-weight: 400; font-size: 20px;">' + K + "</h2>" + '<p style="font-size: 14px; color: #999999;">' + window.divTip.innerHTML + "</p>" + "</div>" + "</div>",
                M = checkCanPop(),
                M && window.divTip && divTip.innerHTML.indexOf("被停止") > -1 && (N = "",
                    "miniprogram" === window.__wxjs_environment && (N = "&minip=1"),
                    L += "<div style='margin:40px 20px 0 20px;border-top: dashed 1px #dadcdd;'><div style='font-size: 14px;font-weight: 400;color: #F64141;line-height: 40px;margin: 14px auto;text-align: center;'>恭喜您获得1次抽奖机会！</div><div style='text-align: center;margin-top:20px;'> <a href='/newsojiang/mobile/getaward.aspx?stype=1&activity=" + activityId + N + "' style='width:140px; background:linear-gradient(180deg,rgba(255,149,104,1) 0%,rgba(255,100,34,1) 100%); border-radius:5px;font-size:16px;color:#ffffff;padding:10px 36px 10px 36px'>立即抽奖</a></div></div>",
                    window._czc && _czc.push(["_trackEvent", "问卷暂停显示抽奖", "加载"])),
                $("#divWorkError")
                .html(L)) : J && needTip() && $("#tipHeight")
            .show()
            .height($(divTip)
                .innerHeight() + "px"),
            addtoVisitLog(),
            $("#divS,#loadbox")
            .hide()
    }),
    hasConfirmBtn = !1,
    t_isLoad = !0,
    itempopUpindex = 0,
    popUpindex = 0,
    firstError = null,
    firstMatrixError = null,
    needSubmitNotValid = !1,
    lastFixedObj = null,
    isValidating = !1,
    txtCurCity = null,
    prevScrollTop = 0,
    obj_offectTop = 0,
    MIN_CLICK_DELAY_TIME = 500,
    lastClickTime = 0,
    startAge = 0,
    endAge = 0,
    rName = "",
    gender = 0,
    marriage = 0,
    education = "",
    startIncome = 0,
    endIncome = 0,
    IsWIFI = 0,
    modata = "",
    hasMatchName = !1,
    jpMatchId = 0,
    quesMatchId = 0,
    jpWayText = 0,
    quResult = new Array,
    clientAnswerSend = "",
    havereturn = !1,
    timeoutTimer = null,
    nvvv = 0,
    ktimes = 0,
    lastLabel = null,
    isAutoSubmit = !1,
    hasAutoSubmit = !1,
    amt = 0,
    hasSetmsg = !1,
    $(function() {
        var a, b;
        3 != window.isChuangGuan && 4 != window.isChuangGuan && ksCountdown(),
            1 == window.needEnlargeImg && window.enlargeImg && enlargeImg(),
            a = window.location.href.indexOf("code") > -1 && $("#divTip")
            .text()
            .indexOf("code been used") > -1 && !isIosSystem(),
            b = window.history && window.history.length,
            a && b && window.history.go(-(b - 1))
    }),
    window.confirmnew = function(a, b, c) {
        var e, f, g, h, d = document.getElementById("confirm_box");
        return d ? document.getElementById("pop_box_msg2")
            .innerHTML = a : (d = document.createElement("div"),
                d.id = "confirm_box",
                e = wjxlang.message,
                f = wjxlang.cancel,
                g = wjxlang.ensure,
                h = "<div style='position:fixed;*position: absolute;width: 100%;height: 100%;opacity: 0.5;filter: alpha(opacity=50);background-color: black;z-index: 99998;top: 0px;left: 0px;'></div><div style='min-height: 180px;width:90%;max-width:400px;transform: translateX(-50%);margin-top: -90px;position: fixed;z-index: 99999;top: 50%;left: 50%;background-color: white;border-radius: 4px;'><div style='font-size:18px;color: #262626;font-weight: 600;padding: 26px 27px 0;width:100%;text-align: left;'><div>" + e + "</div>" + "</div>" + "<div style='min-height: 80px;padding: 12px 27px 36px;font-size: 15px;line-height: 22px;text-align: left;' id='pop_box_msg2'>" + a + "</div>" + "<div style='width:100%;height:60px;text-align:center;border-top:1px solid #F2F2F2;'>" + "<button style='background:none;display:inline-block;width: 50%;height:60px;font-size:18px;line-height:60px;color:#BFBFBF;text-align: center;text-decoration: none;border: none;' onclick='closeNo();'>" + f + "</button><button class='mainColor' style='display:inline-block;width: 50%;font-size:18px;height:60px;box-sizing:border-box;line-height:60px;color:#3296FA;text-align: center;text-decoration: none;border: none;border-left:1px solid #F2F2F2;background: none;' onclick='closeConfirm();'>" + g + "</button></div>" + "</div>",
                d.innerHTML = h,
                document.body.appendChild(d)),
            d.style.display = "",
            d.callback = b || "",
            d.callback2 = c || "",
            d
    },
    $(function() {
        clockRecordTime(),
            initSelelct2(),
            window.divFengMian || curPageHeatmapInit(),
            adjustIosInput(),
            hasJoinCusomInit(),
            window.forbidEditStr && forbidEdit(forbidEditStr),
            4 == cqType && window.showTotalScore && TotalValBoxInit(),
            getDevice()
    }),
    window.onorientationchange = function() {
        window.haschangeorientation = !0,
            setTimeout(function() {
                orientationUpdate(),
                    window.haschangeorientation = !1
            }, 200)
    },
    $(function() {
        var b, c, d, e, a = $("#deepButton");
        return window.buttonfooter = a,
            window.IsPar || window.divFengMian || "4" == window.isChuangGuan || window.isinterview || location.href.indexOf("tpii") > -1 ? (a.hide(),
                void 0) : (b = $("body #form1")
                .outerHeight(),
                c = document.documentElement.clientHeight,
                d = 100,
                0 !== $("#divPowerBy")
                .length && $("#divPowerBy")
                .is(":visible") || (d = 50),
                scrFormHeightDif = c + d - b,
                scrFormHeightDif > 0 ? a.addClass("button-list-fixed") : 0 > scrFormHeightDif && a.addClass("button-list-fixed-deep"),
                e = window.innerHeight,
                $(window)
                .resize(function() {
                    e - window.innerHeight > 200 ? a.hide() : a.show()
                }),
                void 0)
    });
