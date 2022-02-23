function getStyle(a, b) {
    return a.currentStyle ? a.currentStyle[b] : getComputedStyle(a)[b]
}
function forbidBackSpace(a) {
    var b = a || window.event
      , c = b.target || b.srcElement
      , d = c.type || c.getAttribute("type")
      , e = 8 == b.keyCode && "password" != d && "text" != d && "textarea" != d && "search" != d;
    return e ? !1 : void 0
}
function avoidCopy(a) {
    if (a = window.event || a,
    iscropper)
        return !0;
    if (isKaoShi)
        return !1;
    var b;
    return a && (a.target ? b = a.target : a.srcElement && (b = a.srcElement),
    3 == b.nodeType && (b = b.parentNode),
    "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName) ? !0 : (document.selection && document.selection.empty && document.selection.empty(),
    !1)
}
function openlink(a, b) {
    var d, c = a.getAttribute("data-url") || a.getAttribute("href");
    return 0 == c.indexOf("http") && (PDF_close(),
    PDF_launch(c.replace(/&amp;/g, "&"), 800, 600)),
    d = window.event || b,
    stopPropa(d),
    !1
}
function showItemDesc(a, b, c) {
    var f, g, h, i, j, k, d = document.getElementById(a), e = document.getElementById("divDescPopData");
    e.innerHTML = d.innerHTML,
    f = trim(d.innerHTML),
    window.top != window && (ZheZhaoControl = b),
    0 == f.indexOf("http") ? PDF_launch(f.replace(/&amp;/g, "&"), 920, 524) : (g = document.getElementById("divDescPop"),
    h = g.getElementsByTagName("iframe")[0],
    h && (i = h.getAttribute("xsrc"),
    i && h.setAttribute("src", i)),
    g.style.display = "",
    g.style.width = "500px",
    j = e.offsetHeight + 20,
    k = 500,
    500 > j && j > 50 && (k = j),
    PDF_launch("divDescPop", 500, k)),
    stopPropa(c)
}
function getTop(a) {
    for (var b = a.offsetLeft, c = a.offsetTop; a = a.offsetParent; )
        b += a.offsetLeft,
        c += a.offsetTop;
    return {
        x: b,
        y: c
    }
}
function addEventSimple(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
}
function removeEventSimple(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
}
function Request(a) {
    var f, g, b = window.document.location.href, c = b.indexOf("?"), d = b.substr(c + 1), e = d.split("&");
    for (f = 0; f < e.length; f++)
        if (g = e[f].split("="),
        g[0].toUpperCase() == a.toUpperCase())
            return g[1];
    return ""
}
function openCityBox(a, b, c, d) {
    var e, f, g, h, j;
    if (txtCurCity = a,
    "1" == a.getAttribute("lastdata") && (txtCurCity.lastData = 1),
    ZheZhaoControl = txtCurCity,
    d = d || "",
    e = a.getAttribute("province"),
    f = "",
    g = "",
    e && (f = e.indexOf("\u250a") > -1 ? "&isnew=1&pv=" + encodeURIComponent(e.split("\u250a")[0]) : "&pv=" + encodeURIComponent(e)),
    4 == b && a.value && (g = "&sh=" + encodeURIComponent(a.value)),
    3 == b)
        PDF_launch("/joinnew/setcitycounty.aspx?activityid=" + activityId + "&ct=" + b + f + "&pos=" + d, 400, 250),
        document.getElementById("PDF_c_chezchenz").style.top = document.getElementById("PDF_c_chezchenz").style.top.replace("px", "") - 8 + "px";
    else if (5 == b)
        PDF_launch("/joinnew/setmenuselp.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, 470, 220);
    else if (7 == b)
        ZheZhaoControl = null,
        PDF_launch("/joinnew/setCascaderSelector.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, 520, 460);
    else if (6 == b) {
        if (ZheZhaoControl = null,
        h = "/wjx/join/amap.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
        document.documentElement.clientHeight || document.body.clientHeight,
        j = !1,
        a.parent && a.parent.dataNode && a.parent.dataNode._needOnly ? j = !0 : a.parent && "1" == a.parent.getAttribute("needonly") ? j = !0 : "1" == a.getAttribute("needonly") && (j = !0),
        j && (h += "&nc=1",
        a.value))
            return writeError(a.parent, wjxlang.locationtips, 0, !0),
            void 0;
        PDF_launch(h, 700, 800)
    } else
        4 == b ? (ZheZhaoControl = null,
        PDF_launch("/joinnew/school.aspx?activityid=" + activityId + f + g, 650, 620, null)) : PDF_launch("/joinnew/setcity.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d, 470, 220)
}
function setChoice(a) {
    var b = getPreviousNode(a);
    b && (b.value = a.value,
    "none" == b.style.display && b.onblur && b.onblur()),
    curdiv && updateProgressBar(curdiv.dataNode)
}
function setCityBox(a, b, c) {
    var d, e, f, g;
    b && "getlocalbtn" == txtCurCity.parentNode.className.toLowerCase() && (d = txtCurCity.parentNode.previousSibling,
    a && (d.style.display = "block",
    d.innerHTML = a,
    txtCurCity.parentNode.style.top = "0px")),
    txtCurCity.value = a,
    txtCurCity.relValue = c,
    $(txtCurCity).attr("hasgs") && $(txtCurCity).blur(),
    e = txtCurCity.offsetWidth,
    f = 14 * a.length,
    "\u591a\u7ea7\u4e0b\u62c9" == curdiv.dataNode._verify && (txtCurCity.style.height = 22 * Math.ceil(f / 650) + "px"),
    f = f > 650 ? 650 : f,
    f > e && (txtCurCity.style.width = f + "px"),
    txtCurCity.onchange && txtCurCity.onchange(),
    g = txtCurCity.parent.parent || txtCurCity.parent,
    referTitle(g, a)
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function isInt(a) {
    var b = /^-?[0-9]+$/;
    return b.test(a)
}
function replace_specialChar(a) {
    var b, c;
    for (b = 0; b < spChars.length; b++)
        c = new RegExp("(\\" + spChars[b] + ")","g"),
        a = a.replace(c, spToChars[b]);
    return /^[A-Za-z\s\.,]+$/.test(a) && (a = a.replace(/\s+/g, " ")),
    a = a.replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]/gi, ""),
    trim(a)
}
function isRadioImage(a) {
    return a && "0" != a && "1" != a && "101" != a ? !0 : !1
}
function isRadioRate(a) {
    return "" != a && "0" != a && "1" != a && "-1" != a
}
function changeHeight(a) {
    var c, d, e, b = parseInt(a.style.height);
    b && (a.initHeight || (a.initHeight = b),
    c = 18,
    d = 100,
    e = a.scrollHeight,
    e = e > c ? e : c,
    e = e > d ? d : e,
    e - b >= 10 && (a.style.height = e + "px"),
    (!a.value || a.value.length < 5) && (a.style.height = a.initHeight + "px"),
    curdiv && "matrix" == curdiv.dataNode._type && "302" == curdiv.dataNode._mode && window.setTipValueHandler && setTipValueHandler(a),
    window.monitorCloneTable && monitorCloneTable(a),
    count360Val())
}
function fcInputboxFocus() {}
function lengthChange(a) {
    var b = a.value.length
      , c = a.size;
    b >= c && 80 >= c && (a.size = b + 2)
}
function fcInputboxBlur(a) {
    a.value ? a.style.color = "#000000" : (a.value = defaultOtherText,
    a.style.color = "#999999")
}
function isTextBoxEmpty(a) {
    return a = trim(a),
    "" == a || a == defaultOtherText ? !0 : !1
}
function setMatrixFill() {
    (!curMatrixError || curMatrixFill.fillvalue) && (divMatrixRel.style.display = "none")
}
function showMatrixFill(a, b) {
    var c, d, e, f, g, h, i, j, k;
    if (b) {
        if (curMatrixError)
            return;
        curMatrixError = a
    }
    curMatrixFill = a,
    c = "\u8bf7\u6ce8\u660e...",
    d = a.getAttribute("req"),
    d && (c = "\u8bf7\u6ce8\u660e...[\u5fc5\u586b]"),
    1 == langVer && (c = "Please specify"),
    e = a.fillvalue || a.getAttribute("fillvalue") || "",
    matrixinput.value = e,
    e || (matrixinput.value = c),
    f = getPreviousNode(a),
    g = 0,
    h = a.parentNode.parentNode.parentNode.parentNode.parentNode,
    h && h.scrollWidth > h.clientWidth && (g = h.scrollLeft),
    i = getTop(f),
    j = i.y - 35,
    k = i.x - 190 - g,
    divMatrixRel.style.top = j + "px",
    divMatrixRel.style.left = k + "px",
    divMatrixRel.style.display = ""
}
function refresh_validate(a) {
    !window.useAliVerify && a ? (useAliVerify = 1,
    captchaOjb || loadSmartCaptcha(),
    document.getElementById("captcha").style.display = "") : window.useAliVerify && (isCaptchaValid = !1,
    captchaOjb.reload())
}
function showCaptcha() {
    captchaOjb || loadSmartCaptcha(),
    PDF_launch("captcha", 300, 70)
}
function captchaCallBack(a) {
    isCaptchaValid || (isCaptchaValid = !0,
    nc_csessionid = a.sessionId || a.csessionid,
    nc_sig = a.sig,
    verifyControl ? (verifyControl.par.sendActivitySms(1),
    PDF_close()) : 0 == hasSubmitTimes && (hasSubmitTimes++,
    document.getElementById("submit_button").onclick()))
}
function loadSmartCaptcha() {
    if (2 != useAliVerify)
        captchaOjb = new smartCaptcha({
            renderTo: "#captcha",
            default_txt: smdefaultTxt,
            success_txt: smsuccessTxt,
            scaning_txt: smscaningTxt,
            success: function(a) {
                nc_token = NVC_Opt.token,
                captchaCallBack(a)
            }
        }),
        captchaOjb.init();
    else {
        var a = {
            renderTo: "#captcha",
            appkey: nc_appkey,
            scene: nc_scene,
            token: nc_token,
            callback: function(a) {
                captchaCallBack(a)
            }
        };
        captchaOjb = new noCaptcha,
        captchaOjb.init(a)
    }
    document.getElementById("captcha").style.display = "none"
}
function enter_clicksub(a) {
    a = a || window.event,
    a && 13 == a.keyCode && (ktimes++,
    submit(1))
}
function showSubmitTable(a) {
    submit_table.style.display = a ? "" : "none"
}
function Init() {
    var a, b, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, _b, ac, bc;
    for (0 == cur_page && !displayPrevPage && pre_page && (pre_page.style.display = "none",
    pre_page.disabled = !0),
    pageHolder = $$tag("fieldset", survey),
    a = 0; a < pageHolder.length; a++)
        b = "true" == pageHolder[a].getAttribute("skip"),
        b && (pageHolder[a].skipPage = !0);
    submit_button.onmouseover = function() {
        ktimes++,
        this.className = "submitbutton submitbutton_hover",
        isPub && 0 == langVer && "" != document.getElementById("spanTest").style.display && "3" != hasJoin && (document.getElementById("spanTest").style.display = "",
        document.getElementById("submittest_button").onmouseover = function() {
            show_status_tip("\u60a8\u662f\u53d1\u5e03\u8005\uff0c\u53ef\u4ee5\u8fdb\u884c\u8bd5\u586b\u95ee\u5377\uff0c\u8bd5\u586b\u7684\u7b54\u5377\u4e0d\u4f1a\u53c2\u4e0e\u7ed3\u679c\u7edf\u8ba1\uff01", 5e3),
            document.getElementById("submittest_button").onmouseover = null
        }
        )
    }
    ,
    submit_button.onclick = function() {
        return window.isWaiGuan ? (popUpAlert("\u63d0\u793a\uff1a\u95ee\u5377\u9884\u89c8\u9875\u9762\uff0c\u53ea\u80fd\u9884\u89c8\uff0c\u4e0d\u80fd\u63d0\u4ea4\uff01"),
        void 0) : (checkDisalbed() || (window.hasHeatMap ? getHeatmapAns(function() {
            submit(1)
        }) : submit(1)),
        void 0)
    }
    ,
    isPub && (document.getElementById("submittest_button").onclick = function() {
        maxCheatTimes > 0 && (fireConfirm = !0),
        confirmnew("\u8bd5\u586b\u540e\u7684\u7b54\u5377\u4e0d\u4f1a\u53c2\u4e0e\u7ed3\u679c\u7edf\u8ba1\uff0c\u786e\u5b9a\u8bd5\u586b\u5417\uff1f", function() {
            submit(5)
        })
    }
    ),
    keywordarray = (window.awardkeylist || "").split("\u250b"),
    window.qukeylist && (quarray = qukeylist.split("|"));
    try {
        checkTitleDescMatch()
    } catch (c) {}
    for ("3" == hasJoin && (d = document.getElementById("divEdtTip"),
    d && (d.style.display = "none"),
    submit_button.onclick = function() {
        checkDisalbed() || (maxCheatTimes > 0 && (fireConfirm = !0),
        confirmnew("\u786e\u5b9a\u7f16\u8f91\u6b64\u7b54\u5377\u5417\uff1f", function() {
            isEdtData = !0,
            submit(6)
        }))
    }
    ),
    1 == totalPage && "true" == isRunning && "1" != hasJoin ? showSubmitTable(!0) : "true" != isRunning ? (e = document.getElementById("spanNotSubmit"),
    e && "" != trim(e.innerHTML) ? (1 == totalPage && "1" != hasJoin && showSubmitTable(!0),
    nextPageAlertText = e.innerHTML.replace(/<[^>]*>/g, ""),
    submit_button.onclick = function() {
        checkDisalbed() || (popUpAlert(nextPageAlertText),
        e.scrollIntoView())
    }
    ) : showSubmitTable(!1)) : showSubmitTable(!1),
    pre_page && (pre_page.onclick = show_pre_page),
    next_page && (next_page.onclick = show_next_page),
    f = 0; f < pageHolder.length; f++) {
        for (g = $$tag("div", pageHolder[f]),
        hasJoin && (pageHolder[f].style.display = ""),
        h = new Array,
        i = new Array,
        j = 0,
        a = 0; a < g.length; a++)
            k = g[a].className.toLowerCase(),
            "div_question" == k ? (l = "1" == g[a].getAttribute("istrap"),
            g[a].onclick = divQuestionClick,
            g[a].onmouseover = function() {
                ktimes++
            }
            ,
            l ? (g[a].isTrap = !0,
            trapHolder.push(g[a]),
            initItem(g[a]),
            g[a].pageIndex = f + 1) : (g[a].indexInPage = j,
            h[j] = g[a],
            h[j].pageIndex = f + 1,
            j++,
            totalQ++)) : g[a].id && 0 == g[a].id.indexOf("divCut") && i.push(g[a]);
        pageHolder[f].questions = h,
        pageHolder[f].cuts = i
    }
    for (set_data_fromServer(qstr),
    m = new Array,
    n = !1,
    o = !1,
    p = 0; p < pageHolder.length; p++) {
        for (q = pageHolder[p].questions,
        a = 0; a < q.length; a++) {
            if (r = q[a].dataNode,
            s = r._type,
            t = q[a].getAttribute("relation"),
            u = q[a].getAttribute("hasitemrelation"),
            v = q[a].getAttribute("isshop"),
            "1" == v && (q[a].isShop = !0,
            shopHT.push(q[a])),
            w = "",
            t && "0" != t) {
                for (w = -1 != t.indexOf("|") ? "|" : "$",
                x = t.split(w),
                f = 0; f < x.length; f++)
                    y = x[f],
                    y && -1 != y.indexOf(",") && (z = y.split(","),
                    A = z[0],
                    relationQs[A] || (relationQs[A] = new Array),
                    relationQs[A].push(q[a]));
                relationNotDisplayQ[r._topic] = "1"
            } else
                "0" == t && (relationNotDisplayQ[r._topic] = "1");
            if ("1" == u) {
                for (o = !0,
                B = "none",
                C = !1,
                f = 0; f < r._select.length; f++)
                    if (D = r._select[f]._item_relation,
                    D && "" != D)
                        for (w = -1 != D.indexOf("|") ? "|" : "$",
                        F = q[a].getAttribute("id").replace("div", ""),
                        G = "q" + F + "_" + (f + 1),
                        HasSetItemrelationList[G] = D,
                        H = D.split(w),
                        I = 0; I < H.length; I++)
                            y = H[I],
                            y && -1 != y.indexOf(",") && (z = y.split(","),
                            A = z[0],
                            ItemrelationQs[A] || (ItemrelationQs[A] = new Array),
                            ItemrelationQs[A].push(G));
                    else
                        C = !0,
                        "none" != B || relationNotDisplayQ[r._topic] || (B = hasJoin && "none" == q[a].style.display ? "none" : "");
                q[a].style.display = B,
                "none" != B || C || (relationItemNotDisplayQ[r._topic] = "1")
            }
            if ("page" != s && "cut" != s && (questionsObject[r._topic] = q[a]),
            J = q[a].getAttribute("titletopic"),
            J && (K = questionsObject[J])) {
                for (K.dataNode._titleTopic || (K.dataNode._titleTopic = new Array),
                L = questionsObject[r._topic].getAttribute("id").replace("div", ""),
                K.dataNode._titleTopic.push(L),
                M = $$tag("input", K),
                N = 0; N < M.length; N++)
                    M[N].onchange = itemClick;
                O = document.getElementById("divTitle" + L),
                O && (P = K.getAttribute("qingjing"),
                Q = "",
                P && (Q = $(K).find("ul li").html().replace(/<input(\s*[^>]*)>/g, "")),
                O.innerHTML = O.innerHTML.replace("[q" + J + "]", "<span id='spanTitleTopic" + L + "' style='text-decoration:underline;'>" + Q + "</span>"))
            }
            if ("1" != q[a].getAttribute("hrq")) {
                if (("radio" == s || "check" == s) && ("radio" == s && isRadioImage(r._mode) ? initLikertItem(q[a]) : (initItem(q[a]),
                checkPeiE(q[a]))),
                "fileupload" == s) {
                    for (R = $$tag("iframe", q[a]),
                    g = $$tag("div", q[a]),
                    N = 0; N < g.length; N++)
                        if ("uploadmsg" == g[N].className.toLowerCase()) {
                            q[a].uploadmsg = g[N],
                            g[N].style.color = "red";
                            break
                        }
                    for (S = null,
                    T = 0; T < R.length; T++)
                        if (R[T].id && 0 == R[T].id.indexOf("uploadFrame")) {
                            S = R[T];
                            break
                        }
                    q[a].uploadFinish = function(a, b, c, d, e) {
                        var g, h, i, j, k, l, f = this.uploadFrame.src.indexOf("&signSize") > -1;
                        return this.uploadmsg.innerHTML = a,
                        c && (this.uploadmsg.innerHTML += "<div><img src='" + c + "' alt='' /></div>"),
                        this.fileName = b,
                        g = $(this).find(".uploadBox"),
                        0 == g.length && (g = $('<ul class="uploadBox"></ul>'),
                        $(this.uploadFrame).before(g)),
                        f && c || !f && d ? (this.uploadmsg.innerHTML = a,
                        this.fileName = this.fileNameFn(b),
                        h = $(this).find(".uploadBox").find("li").length,
                        this.uploadFrame.style.display = f || this.maxLength && this.maxLength == h + 1 ? "none" : "",
                        i = this,
                        j = $("<li class='prediv'></li>"),
                        j.html('<div class="box"><img src=' + c + ' width="26"><span class="tit">' + (e || "signtxt") + ".png</span></div>"),
                        k = $('<a href="javascript:void(0)" class="icon deleteuploadNew-icon iconfontNew">&#xe6d4;</a>'),
                        k[0].filename = b,
                        k.click(function() {
                            $(this).parent().remove(),
                            isUploadingFile = !1,
                            i.uploadFrame.style.display = "",
                            i.uploadmsg.innerHTML = "",
                            i.fileName = i.fileNameFn(this.filename, !0),
                            updateProgressBar(i.dataNode),
                            jump(i, i.uploadFrame)
                        }),
                        j.append(k),
                        g.append(j),
                        updateProgressBar(this.dataNode),
                        jump(this, this.uploadFrame),
                        void 0) : (l = document.frames ? document.frames[this.uploadFrame.id] : document.getElementById(this.uploadFrame.id).contentWindow,
                        l.curdiv = this,
                        l._ext = this.dataNode._ext,
                        updateProgressBar(this.dataNode),
                        jump(this, this.uploadFrame),
                        void 0)
                    }
                    ,
                    q[a].uploadLimitPic = function(a) {
                        var b = a.name.split(".")[0]
                          , c = this
                          , d = new FileReader;
                        d.readAsDataURL(a.getNative()),
                        d.onload = function(a) {
                            var d = a.target.result;
                            cropperImg(b, d, c.cutsize, c)
                        }
                    }
                    ,
                    q[a].fileArr = new Array,
                    q[a].fileNameFn = function(a, b) {
                        var c, d, e, f;
                        if (b) {
                            for (c = 0; c < this.fileArr.length; c++)
                                if (a == this.fileArr[c]) {
                                    this.fileArr.splice(c, 1);
                                    break
                                }
                        } else
                            this.fileArr.push(a);
                        if (d = this.fileArr.join(";"))
                            for (e = d.split(";"),
                            d = "",
                            c = 0,
                            f = e.length; f > c; c++)
                                c > 0 && f > c && (d += encodeURIComponent(";")),
                                d += e[c];
                        else
                            d = "";
                        return d
                    }
                    ,
                    S && (q[a].uploadFrame = S,
                    q[a].uploadFrame.allowTransparency = !0,
                    U = document.frames ? document.frames[S.id] : document.getElementById(S.id).contentWindow,
                    U.curdiv = q[a],
                    U._ext = r._ext,
                    V = S.getAttribute("fn"),
                    V && "(\u7a7a)" != V && q[a].uploadFinish(UPLOAD_FILE_SUCCESS, V))
                }
                if ("matrix" == s) {
                    if (W = r._mode,
                    r._hasjump && (W && 0 > W - 100 ? initLikertItem(q[a]) : initItem(q[a])),
                    X = q[a].getAttribute("DaoZhi"),
                    Y = null,
                    X) {
                        for (Z = getTableTrHandler(q[a]),
                        Y = new Array,
                        _ = Z[0].cells.length - 1,
                        ab = 0; _ > ab; ab++)
                            Y[ab] = Z[0].cells[ab + 1],
                            Y[ab].itemInputs = new Array;
                        for (ab = 0; _ > ab; ab++)
                            for (bb = 0; bb < Z.length; bb++)
                                Y[ab].parent = q[a],
                                cb = Z[bb].cells[ab + 1],
                                cb.parent = Y[ab],
                                cb.onclick = function() {
                                    var a, b, c, d, e, f, g;
                                    if (curMatrixItem != this.parent) {
                                        if (a = this.parent.itemInputs)
                                            for (b = 0; b < a.length; b++)
                                                a[b].parentNode.style.background = "#edfafe";
                                        if (curMatrixItem && curMatrixItem.daoZhi)
                                            for (a = curMatrixItem.itemInputs,
                                            b = 0; b < a.length; b++)
                                                a[b].parentNode.style.background = "";
                                        divMatrixItemClick.call(this.parent)
                                    }
                                    this.parent.parent && (c = this.parent.parent.dataNode,
                                    c._maxvalue && (c._maxValue = c._maxvalue),
                                    c._minvalue && (c._minValue = c._minvalue),
                                    checkMinMax(this.getElementsByTagName("input")[0], this.parent.parent.dataNode, this.parent)),
                                    d = this.parent.parent,
                                    e = d.dataNode,
                                    f = e._type,
                                    g = e._mode,
                                    "matrix" == f && ("101" == g || "103" == g || 100 > g) && displayRelationRaidoCheck(d)
                                }
                                ,
                                Y[ab].daoZhi = !0,
                                db = cb.getElementsByTagName("input")[0],
                                db && Y[ab].itemInputs.push(db)
                    } else
                        Y = getTableTrHandler(q[a]);
                    if (!X)
                        for (N = 0; N < Y.length; N++) {
                            if ("203" == W)
                                initMatrixFile(Y[N], q[a]);
                            else if ("303" != W)
                                eb = "none" == Y[N].style.display,
                                (!eb || "302" == W && q[a].getAttribute("minvalue")) && (W && 0 > W - 100 ? initLikertItem(Y[N]) : X || initItem(Y[N]));
                            else if (fb = $$tag("select", Y[N]),
                            fb.length > 0 && (Y[N].itemSels = fb),
                            r._hasjump)
                                for (gb = 0; gb < fb.length; gb++)
                                    fb[gb].parent = Y[N],
                                    fb[gb].onchange = function() {
                                        var d, e, f, a = this.parent.parent, b = a.itemTrs, c = !1;
                                        for (d = 0; d < b.length; d++)
                                            if (e = b[d].itemSels) {
                                                for (f = 0; f < e.length; f++)
                                                    if (e[f].value) {
                                                        c = !0;
                                                        break
                                                    }
                                                if (c)
                                                    break
                                            }
                                        jumpAny(c, a)
                                    }
                                    ;
                            Y[N].parent = q[a],
                            Y[N].onclick = divMatrixItemClick
                        }
                    if ("301" == W || "102" == W) {
                        if (hb = q[a].getAttribute("minvalue"),
                        ib = q[a].getAttribute("maxvalue"),
                        q[a].dataNode._minvalue = hb,
                        q[a].dataNode._maxvalue = ib,
                        "301" == W)
                            for (q[a].dataNode._verify = "\u6570\u5b57",
                            "1" == q[a].getAttribute("digittype") && (q[a].dataNode._verify = "\u5c0f\u6570"),
                            q[a].dataNode._minword = hb,
                            q[a].dataNode._maxword = ib,
                            jb = $$tag("textarea", q[a]),
                            N = 0; N < jb.length; N++)
                                jb[N].parent = q[a],
                                jb[N].onblur = function() {
                                    this.value = $.trim(this.value),
                                    txtChange(this)
                                }
                    } else if ("302" == W) {
                        for (jb = $$tag("textarea", q[a]),
                        N = 0; N < jb.length; N++)
                            jb[N].parent = q[a],
                            jb[N].onblur = function() {
                                var a, b;
                                this.value = $.trim(this.value),
                                a = this.parent,
                                txtChange(this),
                                b = validateMatrix(a.dataNode, this, this),
                                b && (a.errorControl = this,
                                writeError(a, verifyMsg, 3e3))
                            }
                            ;
                        if (kb = q[a].getAttribute("minvalue"))
                            for (lb = document.createElement("div"),
                            mb = wjxlang.add,
                            lb.innerHTML = "<i class='increase-icon iconfontNew'>&#xe68b;</i><span>" + mb + "</span>",
                            lb.style.cursor = "pointer",
                            nb = "divquestion" + q[a].dataNode._topic,
                            ob = document.getElementById(nb),
                            ob && ob.appendChild(lb),
                            lb.className = "increase-btn",
                            pb = q[a].getElementsByTagName("table")[0],
                            qb = pb.tBodies[0].rows,
                            rb = pb.tHead.getElementsByTagName("th"),
                            rb[0].style.display = "none",
                            lb.parent = q[a],
                            q[a].addbtn = lb,
                            lb.onclick = function() {
                                var g, a = this, b = this.parent, c = b.getElementsByTagName("table")[0], d = c.tBodies[0].rows, e = b.getAttribute("maxvalue"), f = 0;
                                for (g = 0; g < d.length; g++)
                                    "" === d[g].style.display && f++;
                                for (g = 0; g < d.length; g++)
                                    if (f + 1 == e && (a.className = "increase-btn disable-style"),
                                    g == f) {
                                        d[g].style.display = "",
                                        d[g].previousSibling.getElementsByTagName("i")[0].style.display = "none";
                                        break
                                    }
                            }
                            ,
                            N = 0; N < qb.length; N++)
                                qb[N].cells[0].style.display = "none",
                                sb = document.createElement("th"),
                                sb.innerHTML = "<i class='delete-icon'></i>",
                                qb[N].appendChild(sb),
                                sb.style.width = "16px",
                                tb = sb.getElementsByTagName("i")[0],
                                N >= kb ? hasJoin && (ub = qb[N].getElementsByTagName("textarea")[0],
                                ub && ub.value && (qb[N].style.display = "")) : tb.style.display = "none",
                                sb.parent = q[a],
                                tb.onclick = function() {
                                    var h, a = this.parentNode.parent, b = a.addbtn, c = this.parentNode.parentNode.getAttribute("rindex"), d = this.parentNode.parentNode, e = this.parentNode.parentNode.previousSibling, f = this.parentNode.parentNode.parentNode.parentNode.tBodies[0].rows, g = 0;
                                    for (h = 0; h < f.length; h++)
                                        "" === f[h].style.display && g++;
                                    d.style.display = "none",
                                    c - kb > 0 && (e.getElementsByTagName("i")[0].style.display = ""),
                                    g == f.length && (b.className = "increase-btn")
                                }
                    }
                    Y.length > 0 && (q[a].itemTrs = Y)
                }
                if ("sum" == s) {
                    for (initItem(q[a]),
                    Y = $$tag("tr", q[a]),
                    vb = new Array,
                    N = 0; N < Y.length; N++)
                        wb = Y[N].getAttribute("rowid"),
                        wb && (Y[N].parent = q[a],
                        vb.push(Y[N]));
                    for (xb = q[a].itemInputs.length,
                    yb = q[a].itemInputs,
                    N = 0; xb > N; N++)
                        yb[N].onblur = function() {
                            txtChange(this)
                        }
                        ;
                    vb.length > 0 && (q[a].itemTrs = vb),
                    zb = q[a].getAttribute("rel"),
                    q[a].relSum = document.getElementById(zb)
                }
                if ("check" == s && r.isSort) {
                    for (Ab = $$tag("li", q[a]),
                    N = 0; N < Ab.length; N++)
                        Ab[N].onclick = itemSortClick,
                        Ab[N].style.cursor = "pointer",
                        Ab[N].onmouseover = function() {
                            this.style.background = "#efefef"
                        }
                        ,
                        Ab[N].onmouseout = function() {
                            this.style.background = ""
                        }
                        ;
                    for (Bb = Ab[0].parentNode.getAttribute("dval"),
                    Cb = new Array,
                    N = 0; N < q[a].itemInputs.length; N++)
                        "checkbox" == q[a].itemInputs[N].type && Cb.push(q[a].itemInputs[N]);
                    if (Bb)
                        for (Db = Bb.split(","),
                        N = 0; N < Db.length; N++)
                            for (f = 0; f < Ab.length; f++)
                                if (Cb[f].value == Db[N]) {
                                    Ab[f].onclick();
                                    break
                                }
                }
                if ("question" == s)
                    Eb = $$tag("textarea", q[a]),
                    Eb.length > 0 ? (r._needOnly && "3" == hasJoin && (Eb[0].isOnly = !0,
                    Eb[0].prevvalue = Eb[0].value),
                    Eb[0].onkeyup = function() {
                        txtChange(this),
                        referTitle(this.parent, this.value)
                    }
                    ,
                    Eb[0].onclick || (Eb[0].onclick = Eb[0].onkeyup),
                    Eb[0].onblur = Eb[0].onchange = function() {
                        txtChange(this, 1),
                        referTitle(this.parent, this.value),
                        "\u65e5\u671f" == this.parent.dataNode._verify && "1" == this.parent.getAttribute("haspeie") && dateQuota(this)
                    }
                    ,
                    Eb[0].parent = q[a],
                    q[a].itemTextarea = Eb[0],
                    hasJoin && "\u5730\u56fe" == q[a].dataNode._verify && "" == q[a].itemTextarea.value && (q[a].itemTextarea.value = Eb[0].getAttribute("value") || ""),
                    Eb[1] && (Fb = getPreviousNode(Eb[1]),
                    Fb.par = q[a],
                    window.nfjoinid && "2" != hasJoin && (Eb[0].disabled = !0,
                    Fb.disabled = !0),
                    Eb[1].par = q[a],
                    q[a].needsms = !0,
                    q[a].mobileinput = Eb[0],
                    q[a].prevbtn = Fb,
                    q[a].verifycodeinput = Eb[1],
                    Fb.onclick = function() {
                        var a, b;
                        if (!this.disabled)
                            return a = this.par,
                            a.mobileinput.value = trim(a.mobileinput.value),
                            /^\d{11}$/.test(a.mobileinput.value) ? (a.issmsvalid && a.mobile == a.mobileinput.value || this.isSending || (this.repeat && maxCheatTimes > 0 && (fireConfirm = !0),
                            (!this.repeat || confirm("\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u201c" + a.mobileinput.value + "\u201d\u786e\u8ba4\u51c6\u786e\u65e0\u8bef\u5417\uff1f")) && (b = this.getAttribute("nocode"),
                            "1" == b ? a.sendActivitySms() : (verifyControl = this,
                            isCaptchaValid = !1,
                            this.needreload && captchaOjb && captchaOjb.reload(),
                            showCaptcha()))),
                            void 0) : (popUpAlert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801"),
                            void 0)
                    }
                    ,
                    q[a].sendActivitySms = function(a) {
                        var b, c, d, e, f, g;
                        this.isSending = !0,
                        this.prevbtn.disabled = !0,
                        b = this,
                        c = this.prevbtn,
                        d = getXmlHttp(),
                        d.onreadystatechange = function() {
                            var a, e, f, g;
                            4 == d.readyState && 200 == d.status && (a = d.responseText,
                            e = "",
                            f = !1,
                            0 == a.indexOf("true") ? (e = "\u6210\u529f\u53d1\u9001\uff0c\u6bcf\u5929\u6700\u591a\u53d1\u90015\u6b21\u3002\u5982\u672a\u6536\u5230\uff0c\u8bf7\u68c0\u67e5\u624b\u673a\u53f7\u662f\u5426\u6b63\u786e\uff01",
                            f = !0,
                            g = a.split(","),
                            2 == g.length && (e += g[1]),
                            b.verifycodeinput.disabled = !1,
                            c.repeat = !0,
                            c.needreload = !0,
                            c.resent()) : "fast" == a ? (e = "\u53d1\u9001\u9891\u7387\u8fc7\u5feb",
                            c.resent(),
                            c.needreload = !0) : "no" == a ? e = "\u53d1\u5e03\u8005\u77ed\u4fe1\u6570\u91cf\u4e0d\u591f" : "fail" == a ? e = "\u77ed\u4fe1\u53d1\u9001\u5931\u8d25\uff0c\u6bcf\u5929\u6700\u591a\u53d1\u90015\u6b21\uff01" : "error" == a ? e = "\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e" : "nopub" == a ? e = "\u95ee\u5377\u672a\u8fd0\u884c\uff0c\u4e0d\u80fd\u586b\u5199" : "repeat" == a ? (c.disabled = !1,
                            e = "\u6b64\u624b\u673a\u53f7\u4e4b\u524d\u5df2\u53c2\u4e0e\u8fc7\uff0c\u4e0d\u80fd\u91cd\u590d\u53c2\u4e0e\uff01") : e = a,
                            e && (b.errorMessage && (b.errorMessage.innerHTML = ""),
                            writeError(b, "\u63d0\u793a\uff1a" + e, 3e3, f)),
                            e.indexOf("\u9a8c\u8bc1\u7801") > -1 && (c.disabled = !1,
                            c.needreload = !0),
                            c.isSending = !1)
                        }
                        ,
                        e = b.dataNode._needOnly || b.mobileinput.getAttribute("needonly"),
                        f = "",
                        a && (f = "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene),
                        g = "/joinnew/AnswerSmsHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + f + "&t=" + (new Date).valueOf(),
                        e && (g += "&qi=" + b.dataNode._topic),
                        window.nfjoinid && "2" != hasJoin && (g += "&joinid=" + window.nfjoinid),
                        d.open("get", g),
                        d.send(null)
                    }
                    ,
                    Fb.resent = function() {
                        var a = this
                          , b = 60
                          , c = setInterval(function() {
                            b--,
                            57 > b && (a.isSending = !1),
                            b > 0 ? a.innerHTML = "\u91cd\u53d1(" + b + "\u79d2)" : (a.innerHTML = "\u53d1\u9001\u9a8c\u8bc1\u7801",
                            a.disabled = !1,
                            clearInterval(c))
                        }, 1e3)
                    }
                    ,
                    Eb[1].onchange = Eb[1].onblur = function() {
                        var c, a = trim(this.value), b = this.par;
                        return 6 != a.length ? (b.errorMessage && (b.errorMessage.innerHTML = ""),
                        writeError(b, "\u63d0\u793a\uff1a\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\uff01", 3e3, !0),
                        void 0) : /^\d+$/.exec(a) ? (b.issmsvalid && b.mobile == b.mobileinput.value || b.prevcode != a && (b.prevcode = a,
                        c = getXmlHttp(),
                        c.onreadystatechange = function() {
                            var a, d, e;
                            4 == c.readyState && 200 == c.status && (a = c.responseText,
                            b.issmsvalid = !1,
                            d = "",
                            e = !1,
                            "true" == a ? (b.issmsvalid = !0,
                            e = !0,
                            b.mobile = b.mobileinput.value,
                            "1" != b.prevbtn.getAttribute("nocode") && (verifymob = b.mobile),
                            d = "\u6210\u529f\u901a\u8fc7\u9a8c\u8bc1") : "send" == a ? d = "\u8bf7\u5148\u53d1\u9001\u9a8c\u8bc1\u7801\uff0c\u6bcf\u5929\u6700\u591a\u53d1\u90015\u6b21\uff01" : "no" == a ? d = "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\u8d85\u8fc75\u6b21\uff0c\u65e0\u6cd5\u518d\u63d0\u4ea4" : "error" == a && (d = "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef"),
                            d && (b.errorMessage && (b.errorMessage.innerHTML = ""),
                            writeError(b, "\u63d0\u793a\uff1a" + d, 3e3, e)))
                        }
                        ,
                        c.open("get", "/joinnew/AnswerSmsValidateHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + "&code=" + escape(a) + "&t=" + (new Date).valueOf()),
                        c.send(null)),
                        void 0) : (b.errorMessage && (b.errorMessage.innerHTML = ""),
                        writeError(b, "\u63d0\u793a\uff1a\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\uff01", 3e3, !0),
                        void 0)
                    }
                    )) : "\u5bc6\u7801" == q[a].dataNode._verify && (Eb = $$tag("input", q[a]),
                    Gb = Eb[0],
                    Eb[0].parent = q[a],
                    Gb.onkeyup = function() {
                        txtChange(this)
                    }
                    ,
                    Gb.onclick || (Gb.onclick = Gb.onkeyup),
                    q[a].itemTextarea = Eb[0],
                    Eb[1] && (Eb[0].confirmPwd = Eb[1],
                    Eb[1].parent = q[a],
                    Eb[1].firstPwd = Gb,
                    Eb[1].onkeyup = function() {
                        Gb.needCheckConfirm = !0,
                        txtChange(this)
                    }
                    ));
                else if ("gapfill" == s) {
                    for (Eb = $$tag("input", q[a]),
                    Hb = 0; Hb < Eb.length; Hb++)
                        Eb[Hb].parent = q[a],
                        Eb[Hb].onkeyup = function() {
                            txtChange(this),
                            setTip(this, !0)
                        }
                        ,
                        Eb[Hb].onmouseover = function() {
                            setTip(this, !0)
                        }
                        ,
                        Eb[Hb].onmouseout = function() {
                            hideTip(this, !0)
                        }
                        ,
                        Eb[Hb].onclick || (Eb[Hb].onclick = Eb[Hb].onkeyup),
                        Eb[Hb].onblur = Eb[Hb].onchange = function() {
                            txtChange(this, 1),
                            referTitle(this.parent, this.value)
                        }
                        ,
                        "3" == hasJoin && "1" == Eb[Hb].getAttribute("needonly") && (Eb[Hb].isOnly = !0);
                    q[a].gapFills = Eb
                }
                for ("radio_down" == s && (Ib = $$tag("select", q[a]),
                Ib.length > 0 && (Ib[0].onchange = itemClick,
                Ib[0].parent = q[a],
                q[a].itemSel = Ib[0])),
                Jb = $$tag("div", q[a]),
                Kb = 0,
                Lb = null,
                N = 0; N < Jb.length; N++)
                    "div_title_question" == Jb[N].className.toLowerCase() ? q[a].divTitle = Jb[N] : "slider" == Jb[N].className.toLowerCase() && ("matrix" == s || "sum" == s ? (Lb = Jb[N].parentNode.parentNode,
                    Kb++) : "slider" == s && (Lb = q[a]),
                    Lb.divSlider = Jb[N],
                    Jb[N].parent = Lb,
                    hb = Jb[N].getAttribute("minvalue"),
                    ib = Jb[N].getAttribute("maxvalue"),
                    q[a].dataNode._minvalue = hb,
                    q[a].dataNode._maxvalue = ib,
                    "sum" == s ? Mb = Lb.getElementsByTagName("input")[0] : (Nb = Jb[N].getAttribute("rel"),
                    Mb = document.getElementById(Nb)),
                    window.monitoringEmbeddingIframe && !firstImplementation && (firstImplementation = !0,
                    monitoringEmbeddingIframe()),
                    Ob = new neverModules.modules.slider({
                        targetId: Jb[N].id,
                        sliderCss: "imageSlider1",
                        barCss: "imageBar1",
                        min: parseInt(hb),
                        max: parseInt(ib),
                        sliderValue: Mb,
                        hints: slider_hint,
                        change: itemClick
                    }),
                    Ob.create(),
                    Lb.sliderImage = Ob,
                    Pb = Jb[N].getAttribute("defvalue"),
                    Pb && isInt(Pb) && (Ob.setValue(parseInt(Pb)),
                    Lb.divSlider.value = parseInt(Pb),
                    "sum" == s && (q[a].sumLeft = hasJoin && Pb ? void 0 == q[a].sumLeft ? r._total - parseInt(Pb) : q[a].sumLeft - parseInt(Pb) : 0)),
                    "1" == hasJoin && (Ob._slider.onclick = function() {}
                    ,
                    Ob._initMoveSlider = function() {}
                    ));
                if ("matrix" == s && (Qb = new Array,
                Y = q[a].itemTrs)) {
                    for (N = 0; N < Y.length; N++)
                        bb = Y[N].getAttribute("rindex"),
                        parseInt(bb) == bb && Qb.push(Y[N]),
                        "201" == q[a].dataNode._mode && "3" == hasJoin && "1" == Y[N].getAttribute("needonly") && (Y[N].isOnly = !0);
                    Qb.length > 0 && (q[a].itemTrs = Qb)
                }
                r && r._hasjump && (cur_page = p,
                hasJoin ? jumpJoin(q[a], p, relationItemNotDisplayQ, relationNotDisplayQ, JumpNotDisplayQ) : clearAllOption(q[a]),
                cur_page = 0),
                r._referedTopics && m.push(q[a]),
                hasJoin && window.cancelInputClick && cancelInputClick(q[a])
            }
        }
        p > 0 && hasJoin && (pageHolder[p].style.display = "none")
    }
    if (!window.isVip && o && alertNew("\u63d0\u793a\uff1a\u6b64\u95ee\u5377\u4f7f\u7528\u4e86\u9009\u9879\u5173\u8054\u529f\u80fd\uff0c\u53d1\u5e03\u8005\u975e\u4f01\u4e1a\u7248\u7528\u6237\uff0c\u65e0\u6cd5\u4f7f\u7528\uff01"),
    completeLoaded = !0,
    window.monitoringEmbeddingIframe && !firstImplementation && monitoringEmbeddingIframe(),
    n && addtoactivitystat(),
    window.cepingCandidate) {
        for (Rb = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
        Sb = new Object,
        Tb = 0; Tb < Rb.length; Tb++)
            Ub = Rb[Tb].replace(/(\s*)/g, "").replace(/&/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(),
            Sb[Ub] = "1";
        if (q = pageHolder[0].questions[0],
        window.allowPart) {
            if (Vb = 0,
            q.itemInputs)
                for (a = 0; a < q.itemInputs.length; a++)
                    Wb = q.itemInputs[a].parentNode,
                    Xb = Wb.getElementsByTagName("label")[0],
                    Xb && (Yb = trim(Xb.innerHTML).toLowerCase(),
                    Yb = Yb.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", ""),
                    Sb[Yb] ? window.OneaTime && 0 == Vb ? (0 != lastSaveQ && q.itemInputs[a].checked || Wb.onclick(),
                    Vb++) : window.oneDept && (0 != lastSaveQ && q.itemInputs[a].checked || Wb.onclick()) : (Wb.style.display = "none",
                    q.itemInputs[a].checked && Wb.onclick()));
            Zb = document.getElementById("div1"),
            Zb.style.display = "",
            (window.OneaTime || window.oneDept) && (document.getElementById("divTitle1").style.display = "none",
            document.getElementById("divquestion1").style.display = "none")
        } else {
            if (q.itemInputs)
                for (a = 0; a < q.itemInputs.length; a++)
                    Wb = q.itemInputs[a].parentNode,
                    Xb = Wb.getElementsByTagName("label")[0],
                    Xb && (Yb = trim(Xb.innerHTML).toLowerCase(),
                    Yb = Yb.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", ""),
                    Sb[Yb] && (q.itemInputs[a].checked = !0));
            createItem(q),
            q.style.display = "none",
            q.isCepingQ = "1"
        }
    }
    if (window.totalCut && window.totalCut > 0)
        for (a = 0; a < window.totalCut; a++) {
            if ($b = document.getElementById("divCut" + (a + 1)),
            t = $b.getAttribute("relation"),
            t && "0" != t)
                for (w = "",
                w = -1 != t.indexOf("|") ? "|" : "$",
                x = t.split(w),
                f = 0; f < x.length; f++)
                    y = x[f],
                    y && -1 != y.indexOf(",") && (z = y.split(","),
                    A = z[0],
                    relationQs[A] || (relationQs[A] = new Array),
                    relationQs[A].push($b));
            J = $b.getAttribute("titletopic"),
            J && (K = questionsObject[J],
            K && (K.dataNode._titleTopic || (K.dataNode._titleTopic = new Array),
            _b = $b.getAttribute("topic"),
            K.dataNode._titleTopic.push(_b),
            O = $b.childNodes[0],
            O && (O.innerHTML = O.innerHTML.replace("[q" + J + "]", "<span id='spanTitleTopic" + _b + "' style='text-decoration:underline;'></span>"))))
        }
    if (!window.cepingCandidate || window.allowPart)
        for (a = 0; a < m.length; a++)
            j = m[a],
            createItem(j);
    for (isLoadQues = !0,
    p = 0; p < pageHolder.length; p++)
        for (q = pageHolder[p].questions,
        a = 0; a < q.length; a++)
            r = q[a].dataNode,
            _b = r._topic,
            relationQs[_b] && relationJoin(q[a]),
            ItemrelationQs[_b] && relationItemJoin(q[a]),
            hasJoin && referTitle(q[a]),
            P = q[a].getAttribute("qingjing"),
            "" == q[a].style.display && P && (ac = q[a].getElementsByTagName("input")[0],
            ac && (ac.checked = !0,
            displayRelationRaidoCheck(q[a])));
    for (isLoadQues = !1,
    p = 0; p < pageHolder.length; p++)
        for (q = pageHolder[p].questions,
        a = 0; a < q.length; a++)
            checkPeiE(q[a]);
    if (lastSavePage > 0 && totalPage > lastSavePage && (pageHolder[0].style.display = "none",
    cur_page = lastSavePage - 1,
    show_next_page(!0)),
    lastSaveQ >= 1 && (bc = document.getElementById("div" + lastSaveQ))) {
        for (bc.scrollIntoView(),
        bc.onclick(),
        joinedTopic = lastSaveQ,
        a = 1; lastSaveQ >= a; a++)
            progressArray[a + ""] = !0;
        showProgressBar()
    }
    0 == totalQ && showSubmitTable(!1),
    processMinMax(),
    showProgressBar(),
    window.jqLoaded && jqLoaded(),
    addtoForein(),
    addtoHistory()
}
function getMaxTimeStr(a) {
    var e, b = "", c = a, d = parseInt(c / 3600);
    return d ? (10 > d && (b += "0"),
    b += d + ":",
    c %= 3600) : b = "00:",
    e = parseInt(c / 60),
    e ? (10 > e && (b += "0"),
    b += e + ":",
    c %= 60) : b += "00:",
    0 > c && (c = 0),
    c ? (10 > c && (b += "0"),
    b += c) : b += "00",
    b
}
function autoSubmit(a) {
    var b, c, d, e;
    if (isAutoSubmit = !0,
    hasSurveyTime && (b = pageHolder[cur_page]._maxtime,
    !b || b - initMaxSurveyTime >= 0 || 1 >= maxSurveyTime))
        for (c = 0; totalPage - 1 > cur_page && (pageHolder[cur_page].hasExceedTime = !0,
        show_next_page(),
        !(c > totalPage)); )
            c++;
    ktimes++,
    pageHolder[cur_page].hasExceedTime = !0,
    totalPage - 1 > cur_page ? (show_next_page(),
    isAutoSubmit = !1) : (pageHolder[cur_page].style.display = "none",
    submit_button.initVal && (submit_button.value = submit_button.initVal),
    submit_button.disabled = !1,
    d = wjxlang.tit_time_up,
    a && (d = a),
    !hasSurveyTime && 1 != totalPage || window.useAliVerify || !hasAnswer || a || allowWeiXin || hasAutoSubmit ? submit_div.divAlert || (e = document.createElement("div"),
    e.style.color = "red",
    e.style.fontSize = "16px",
    e.style.marginTop = "10px",
    e.innerHTML = d,
    e.style.textAlign = "center",
    submit_div.insertBefore(e, submit_table),
    submit_div.divAlert = e) : (isAutoSubmit = !1,
    hasAutoSubmit = !0,
    submit(1))),
    isAutoSubmit = !1
}
function processMinMax() {
    var a, b, c, d, e, f, g, h;
    window.Ischangeans || (maxTimer && clearInterval(maxTimer),
    minTimer && clearInterval(minTimer),
    "true" == isRunning && (a = pageHolder[cur_page]._maxtime,
    b = a,
    initCounterDate || (initCounterDate = new Date),
    c = new Date,
    d = document.getElementById("spanTimeTip"),
    window.hasSurveyTime && (initMaxSurveyTime || (initMaxSurveyTime = window.maxSurveyTime),
    (!b || window.maxSurveyTime && window.maxSurveyTime < b) && (b = window.maxSurveyTime || 1),
    0 == b && (b = 1),
    d && (d.innerHTML = wjxlang.tit_residur_time)),
    b && (1 == langVer && (d.innerHTML = "Remaining "),
    addEventSimple(window, "resize", resizeMaxTime),
    mmMaxTime(),
    hasMaxtime = !0,
    divMaxTime.style.display = "",
    e = divMaxTime.getElementsByTagName("b")[0],
    e && (e.innerHTML = ""),
    (!spanMaxTime.innerHTML || a) && (spanMaxTime.innerHTML = getMaxTimeStr(b)),
    maxTimer = setInterval(function() {
        var d = new Date
          , e = parseInt((d - c) / 1e3)
          , f = b - e;
        e = parseInt((d - initCounterDate) / 1e3),
        window.initMaxSurveyTime && !a && (f = initMaxSurveyTime - e),
        window.initMaxSurveyTime && (maxSurveyTime = initMaxSurveyTime - e),
        spanMaxTime.innerHTML = getMaxTimeStr(f),
        0 >= f && (clearInterval(maxTimer),
        divMaxTime.style.display = "none",
        window.amt = 1,
        autoSubmit())
    }, 100)),
    f = pageHolder[cur_page]._mintime,
    g = !IsSampleService || IsSampleService && "t" == promoteSource || window.pubNeedApply,
    g || (f = 0),
    f && (pageHolder[cur_page]._istimer ? (h = f,
    next_page && (next_page.style.display = "none"),
    pre_page && (pre_page.style.display = "none"),
    minTimer = setInterval(function() {
        var a = new Date
          , b = parseInt((a - c) / 1e3);
        h = f - b,
        0 >= h && (clearInterval(minTimer),
        totalPage - 1 > cur_page ? show_next_page() : (popUpAlert(wjxlang.tit_time_up),
        pageHolder[cur_page].style.display = "none"))
    }, 1e3)) : (isSuper || (next_page && (next_page.disabled = !0),
    submit_button.disabled = !0),
    next_page && !next_page.initVal && (next_page.initVal = next_page.value),
    submit_button.initVal || (submit_button.initVal = submit_button.value),
    next_page && (next_page.value = f + minTimeTip),
    submit_button.value = f + minTimeTip,
    h = f,
    minTimer = setInterval(function() {
        var a = new Date
          , b = parseInt((a - c) / 1e3);
        h = f - b,
        next_page && (next_page.value = h + minTimeTip),
        submit_button.value = h + minTimeTip,
        0 >= h && (clearInterval(minTimer),
        next_page && (next_page.disabled = !1),
        submit_button.disabled = !1,
        next_page && (next_page.value = next_page.initVal),
        submit_button.value = submit_button.initVal)
    }, 1e3)))))
}
function resizeMaxTime() {
    resizedMax = !0,
    mmMaxTime()
}
function mmMaxTime() {
    var b, a = document.getElementById("mainCss");
    return a ? (b = getTop(a),
    divMaxTime.style.top = b.y + "px",
    divMaxTime.style.left = b.x - 120 + "px",
    void 0) : (divMaxTime.style.right = "50px",
    void 0)
}
function getPreviousNode(a) {
    var b = a.previousSibling;
    return b && 1 != b.nodeType && (b = b.previousSibling),
    b
}
function getNextNode(a) {
    var b = a.nextSibling;
    return b && 1 != b.nodeType && (b = b.nextSibling),
    b
}
function updateCart() {
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, a = "", b = 0, c = 0;
    for (d = 0; d < shopHT.length; d++)
        if (e = shopHT[d],
        "none" != e.style.display) {
            for (f = e.itemInputs,
            g = e.getAttribute("id").replace("div", ""),
            h = document.getElementById("divTotalPrice" + g),
            i = 0,
            j = 0; j < f.length; j++)
                k = f[j],
                isInt(k.value) || (k.value = 0),
                l = parseInt(k.value),
                0 != l && (m = k.parentNode.parentNode,
                n = $$tag("div", m)[0].innerHTML,
                o = $$tag("p", m)[0].getAttribute("price"),
                p = l * parseFloat(o),
                q = '<li class="productitem"><span class="fpname">' + n + '</span><span class="fpnum">x' + l + '</span><span class="fpprice">\uffe5' + toFixed0d(p) + "</span></li>",
                a += q,
                b += p,
                i += p,
                c += l);
            h && (h.innerHTML = "\uffe5" + i.toFixed(2).replace(".00", ""))
        }
    r = wjxlang.settlelist,
    a = "<ul class='productslist'><li><span class='fpname' style='font-weight:bold; color:#333;font-size:14px; padding-bottom:16px;'>" + r + "</span></li>" + a + "</ul>" + '<div class="ftotalprice" style="position:relative;"><span style="position:absolute;left:78%;color:#333">x' + c + '</span><span class="priceshow">\uffe5' + toFixed0d(b) + "</span></div>",
    s = document.getElementById("shopcart"),
    s.innerHTML = a,
    s.style.display = b > 0 ? "" : "none"
}
function toFixed0d(a) {
    return a.toFixed(2).replace(".00", "")
}
function checkPeiE(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
    if (!hasPeiEFull && a.dataNode._requir) {
        if (c = "",
        d = "",
        "1" == a.getAttribute("peie") && "" == a.style.display && (e = !0,
        f = a.itemInputs,
        g = 0,
        "radio_down" == a.dataNode._type && (f = $$tag("option", a),
        g = 1),
        f))
            for (h = g; h < f.length; h++)
                if (i = f[h].disabled,
                !i) {
                    e = !1;
                    break
                }
        if (e && (hasPeiEFull = !0,
        j = a.getAttribute("id").replace("div", ""),
        window.cityPeiEQues))
            for (k = cityPeiEQues.split(";"),
            h = 0; h < k.length; h++)
                if (l = k[h].split("|"),
                3 == l.length && j == l[0]) {
                    d = l[2],
                    c = l[1];
                    break
                }
        if ("1" == a.getAttribute("haspeie") && "" == a.style.display && "\u65e5\u671f" != a.dataNode._verify) {
            if (e = !0,
            f = a.itemInputs,
            g = 0,
            "radio_down" == a.dataNode._type && (f = $$tag("option", a),
            g = 1),
            m = !1,
            f)
                for (h = g; h < f.length; h++) {
                    if (n = f[h].getAttribute("attrpeie"),
                    !n) {
                        e = !1;
                        break
                    }
                    if (o = n.split(";"),
                    p = o[0].split("|"),
                    q = "div" + p[0],
                    r = document.getElementById(q),
                    r == a && (m = !0),
                    s = $$tag("input", r),
                    m) {
                        if (i = f[h].disabled,
                        !i) {
                            e = !1;
                            break
                        }
                    } else {
                        for (t = 0,
                        u = 0; u < s.length; u++)
                            ("radio" == s[u].type || "checkbox" == s[u].type) && t++;
                        if ("radio_down" == r.dataNode._type && (s = $$tag("option", r),
                        t = s.length - 1),
                        o.length < t) {
                            e = !1;
                            break
                        }
                    }
                }
            "\u65e5\u671f" == a.dataNode._verify && e && (e = !1),
            e && (hasPeiEFull = !0)
        }
        v = 0,
        "1" == a.getAttribute("qingjing") && "" == a.style.display && (w = a.getElementsByTagName("ul")[0],
        w && "1" == w.getAttribute("full") && (hasPeiEFull = !0,
        v = 1)),
        hasPeiEFull && (x = document.getElementById("spanNotSubmit"),
        peiemsg = wjxlang.peiemessage,
        window.isPromoteing && (y = a.getAttribute("id").replace("div", ""),
        z = getXmlHttp(),
        A = "/handler/endwjxactivitypromote.ashx?ActivityId=" + activityId + "&sjts=" + prsjts + "&sjsign=" + prsjsign + "&city=" + c + "&ruletype=" + d + "&quid=" + y,
        window.cityPeiEQues && (A += "&citypeie=" + encodeURIComponent(window.cityPeiEQues)),
        z.open("get", A),
        z.send(null)),
        v && (peiemsg = wjxlang.peiemessage_qingjing),
        x ? x.innerHTML = peiemsg : (B = document.getElementById("divPeiE"),
        B.style.display = "",
        B.innerHTML = "<div style='background:#FFE4C8;color:#3E3E3E;border-radius:8px; padding:8px 15px; margin: 15px auto;width: 650px; text-align: left; clear: both; font-size:14px;'><span id='spanNotSubmit'>" + peiemsg + "</span></div>"))
    }
}
function initMatrixFile(a, b) {
    var f, g, h, i, j, c = b.dataNode, d = $$tag("iframe", a), e = $$tag("div", a);
    for (f = 0; f < e.length; f++)
        if ("uploadmsg specialmsg" == e[f].className.toLowerCase()) {
            a.uploadmsg = e[f],
            e[f].style.color = "red";
            break
        }
    for (g = null,
    h = 0; h < d.length; h++)
        if (d[h].id && 0 == d[h].id.indexOf("uploadFrame")) {
            g = d[h];
            break
        }
    a.uploadLimitPic = function(a) {
        var b = a.name.split(".")[0]
          , c = this
          , d = new FileReader;
        d.readAsDataURL(a.getNative()),
        d.onload = function(a) {
            var d = a.target.result;
            cropperImg(b, d, curfilediv.cutsize, c)
        }
    }
    ,
    a.uploadFinish = function(a, d, e, f, g) {
        var h, i, j, k, l;
        this.uploadmsg.innerHTML = a,
        e && (this.uploadmsg.innerHTML += "<div><img src='" + e + "' alt='' /></div>"),
        this.fileName = d,
        this.uploadFrame.style.display = "",
        f && (h = $(this).find(".uploadBox"),
        0 == h.length && (h = $('<ul class="uploadBox"></ul>'),
        $(this.uploadFrame).before(h)),
        this.uploadmsg.innerHTML = a,
        this.uploadFrame.style.display = "none",
        i = this,
        j = $("<li class='prediv' style='display:flex;justify-content: space-between;'></li>"),
        j.html('<div class="box" style="width:80%;display: flex;flex:1 1 auto;"><img style="flex-shrink: 0;" src=' + e + ' width="26"><span style="width:100px;flex:1 1 auto;" title="' + (g || "signtxt") + '.png" class="tit">' + (g || "signtxt") + ".png</span></div>"),
        k = $('<a href="javascript:void(0)" class="icon deleteuploadNew-icon iconfontNew">&#xe6d4;</a>'),
        k.click(function() {
            $(this).parent().remove(),
            i.fileName = "",
            i.uploadFrame.style.display = "",
            i.uploadmsg.innerHTML = ""
        }),
        j.append(k),
        h.append(j)),
        l = document.frames ? document.frames[this.uploadFrame.id] : document.getElementById(this.uploadFrame.id).contentWindow,
        l.curdiv = b,
        updateProgressBar(c)
    }
    ,
    g && (a.uploadFrame = g,
    a.uploadFrame.allowTransparency = !0,
    i = document.frames ? document.frames[g.id] : document.getElementById(g.id).contentWindow,
    i.curdiv = b,
    j = g.getAttribute("fn"),
    j && "(\u7a7a)" != j && a.uploadFinish(UPLOAD_FILE_SUCCESS, j))
}
function initItem(a) {
    var c, d, e, f, g, h, i, j, k, l, n, o, p, q, r, b = $$tag("input", a);
    for (0 == b.length && (b = $$tag("textarea", a)),
    a.isShop && (c = a.getAttribute("maxvalue") || 0,
    c && (c = parseInt(c)),
    c && (a.dataNode._maxValue = c),
    d = a.getAttribute("minvalue") || 0,
    d && (d = parseInt(d)),
    d && (a.dataNode._minValue = d)),
    e = 0; e < b.length; e++)
        b[e].parent = a,
        a.isShop ? (f = getPreviousNode(b[e]),
        f.rel = b[e],
        g = getNextNode(b[e]),
        g.rel = b[e],
        isInt(g.rel.value) || (g.rel.value = 0),
        b[e].setAttribute("minnum", a.dataNode._select[e]._item_startpay),
        b[e].setAttribute("maxnum", a.dataNode._select[e]._item_limpur),
        g.onclick = function(a, d) {
            var e, f, g, h, i, j, k, l, m;
            if (isInt(this.rel.value) || (this.rel.value = 0),
            e = 0,
            f = "",
            c)
                for (g = 0; g < b.length; g++)
                    h = b[g],
                    h && isInt(h.value) && (h.value > 0 && this.rel != h ? e++ : ""),
                    e >= c && (f = wjxlang.shop_maxnum.replace("{0}", c),
                    this.rel.value = 0);
            (!c || c > e) && (i = parseInt(this.rel.value),
            j = !1,
            k = 0,
            l = this.rel.getAttribute("num"),
            a = this.rel.getAttribute("minnum"),
            d = this.rel.getAttribute("maxnum"),
            m = !0,
            l && (j = !0,
            k = parseInt(l)),
            a && (a = parseInt(a)),
            d && (d = parseInt(d)),
            a > 0 && i < parseInt(a) && (this.rel.value = parseInt(a),
            m = !1),
            d > 0 && i >= parseInt(d) && (f = wjxlang.shop_limit_num.replace("{0}", d),
            this.rel.value = parseInt(d),
            m = !1),
            j && i >= k && (!(d > 0 && k > d) || a > k) && (f = wjxlang.shop_period.replace("{0}", k),
            0 >= k && (f = wjxlang.shop_outstock),
            this.rel.value = parseInt(k),
            m = !1),
            m && (this.rel.value = i + 1)),
            updateCart(),
            "" == f ? "" : popUpAlert(f)
        }
        ,
        f.onclick = function() {
            var a, b;
            if (isInt(this.rel.value) || (this.rel.value = 0),
            a = parseInt(this.rel.value),
            !(1 > a)) {
                if (b = this.rel.getAttribute("minnum"),
                b && parseInt(b) > 0 && a <= parseInt(b))
                    return this.rel.value = 0,
                    updateCart(),
                    void 0;
                this.rel.value = a - 1,
                updateCart()
            }
        }
        ,
        b[e].onchange = b[e].onblur = function() {
            var g, h, i, a = this.getAttribute("num"), d = this.getAttribute("minnum"), e = this.getAttribute("maxnum"), f = "";
            if (a && (needlimit = !0,
            limitNumber = parseInt(a)),
            g = 0,
            c)
                for (h = 0; h < b.length; h++)
                    i = b[h],
                    i && isInt(i.value) && (i.value > 0 && this != i ? g++ : ""),
                    g >= c && (f = wjxlang.shop_maxnum.replace("{0}", c),
                    this.value = 0);
            (!c || c > g) && (d && (d = parseInt(d)),
            e && (e = parseInt(e)),
            (!isInt(this.value) || parseInt(this.value) - 1 < 0) && (this.value = d > 0 && this.value <= d ? d > limitNumber ? limitNumber : d : 0),
            d > 0 && this.value < parseInt(d) && (this.value = parseInt(d)),
            e > 0 && this.value >= parseInt(e) && (f = wjxlang.shop_limit_num.replace("{0}", e),
            this.value = parseInt(e)),
            needlimit && this.value >= limitNumber && (!(e > 0 && limitNumber > e) || d > limitNumber) && (f = wjxlang.shop_period.replace("{0}", limitNumber),
            0 >= limitNumber && (f = wjxlang.shop_outstock),
            this.value = parseInt(limitNumber))),
            updateCart()
        }
        ) : (b[e].onclick || (b[e].onclick = itemClick),
        "TEXTAREA" == b[e].tagName && (b[e].onchange = b[e].onblur = itemClick),
        h = b[e].getAttribute("rel"),
        h && (i = null,
        "psibling" == h ? (i = getPreviousNode(b[e]),
        b[e].onclick = itemClick) : i = document.getElementById(h),
        i.itemText = b[e],
        b[e].choiceRel = i,
        b[e].onblur = function() {
            referTitle(a),
            fcInputboxBlur(this)
        }
        ,
        a.dataNode && a.dataNode._referedTopics && (b[e].onchange = itemClick),
        b[e].value || (b[e].value = defaultOtherText),
        b[e].style.color = "#999999",
        j = b[e].getAttribute("req"),
        i.req = "true" == j ? !0 : !1),
        k = "",
        !a.dataNode || "radio" != a.dataNode._type && "check" != a.dataNode._type || (k = b[e].getAttribute("rimg"),
        k && (l = document.getElementById(k),
        l && (l.onclick = function() {
            var c, b = this.getAttribute("irel");
            b && (c = document.getElementById(b),
            c.parentNode.onclick())
        }
        ))),
        n = !(!a.dataNode || "radio" != a.dataNode._type && "check" != a.dataNode._type || a.dataNode.isSort || a.dataNode.isRate && "101" != a.dataNode._mode),
        a.isTrap || n ? (o = b[e].nextSibling,
        b[e].choiceRel ? (i = getPreviousNode(b[e]),
        i && (i.tagName && "label" == i.tagName.toLowerCase() && (i.style.display = "inline-block"),
        b[e].style.position = "static")) : null != o && (p = b[e].parentNode,
        k || (p.onmouseover = function() {
            this.style.background = "#efefef"
        }
        ,
        p.onmouseout = function() {
            this.style.background = ""
        }
        ),
        b[e].checked && "radio" == b[e].type && (q = getPreviousNode(b[e]),
        q && "a" == q.tagName.toLowerCase() && (a.prevARadio = q)),
        p.onclick = function() {
            var d, e, f, g, c = this.getElementsByTagName("a")[0];
            c && (a.hasConfirm || (d = c.getAttribute("rel"),
            d && (e = document.getElementById(d),
            e.disabled || (showEvaluate(a, this),
            f = "radio" == e.type,
            f ? (c.className = "jqRadio jqChecked",
            e.checked = !0) : (e.checked = !e.checked,
            c.className = e.checked ? "jqCheckbox jqChecked" : "jqCheckbox",
            groupMutual(a.dataNode._topic, this)),
            g = null,
            e.parent && (g = e.parent.parent || e.parent),
            itemClick.call(e),
            f && (g && g.prevARadio && g.prevARadio != c && (g.prevARadio.className = "jqRadio"),
            g.prevARadio = c),
            initCusomSelect(this, e, a),
            f || TotalValBoxInit()))))
        }
        )) : "TR" != a.tagName || "radio" != b[e].type && "checkbox" != b[e].type || (r = b[e].parentNode,
        r.style.cursor = "pointer",
        hasJoin && b[e].checked && "radio" == b[e].type && (q = getPreviousNode(b[e]),
        q && "a" == q.tagName.toLowerCase() && b[e].parent && (b[e].parent.prevARadio = q)),
        r.onclick = function(a) {
            var e, f, b = this.getElementsByTagName("input"), c = b[0], d = getPreviousNode(c);
            "checkbox" == c.type ? (c.checked = !c.checked,
            c.onclick(),
            d && (d.className = c.checked ? "jqCheckbox jqChecked" : "jqCheckbox"),
            stopPropa(a)) : (e = this.parent,
            CheckMax(e, this, c) && (d && (d.className = "jqRadio jqChecked",
            f = c.parent,
            f.prevARadio && f.prevARadio != d && (f.prevARadio.className = "jqRadio"),
            f.prevARadio = d),
            c.checked = !0,
            c.onclick(),
            count360Val(),
            stopPropa(a)))
        }
        ,
        r.onmouseover = function() {
            this.style.background = "#efefef"
        }
        ,
        r.onmouseout = function() {
            this.style.background = ""
        }
        ));
    b.length > 0 && (a.itemInputs = b)
}
function initLikertItem(a) {
    var e, f, b = $$tag("li", a), c = new Array;
    for (j = 0; j < b.length; j++)
        f = b[j].className.toLowerCase(),
        b[j].className && (f.indexOf("off") > -1 || f.indexOf("on") > -1) && (b[j].onclick = itemLiClick,
        b[j].onmouseover = itemMouseOver,
        b[j].onmouseout = itemMouseOut,
        b[j].parent = a,
        c.push(b[j]),
        f.indexOf("on") > -1 ? e = b[j] : f.indexOf("off") > -1 && e && (e.parent.holder = e.value));
    b.length > 0 && (e && (e.parent.holder = e.value),
    a.itemLis = c)
}
function referTitle(a, b) {
    var d, e, f, g, h, i, j, k, c = a.dataNode;
    if (c._titleTopic) {
        if (d = "",
        void 0 == b && a.itemInputs) {
            for (e = 0; e < a.itemInputs.length; e++)
                if (a.itemInputs[e].checked) {
                    if (f = getNextNode(a.itemInputs[e]),
                    c.isSort && (f = a.itemInputs[e].parentNode.parentNode.getElementsByTagName("label")[0]),
                    !f)
                        return;
                    d && (d += "&nbsp;"),
                    d += f.innerHTML,
                    g = a.itemInputs[e],
                    g.itemText && (h = g.itemText.value,
                    h && h != defaultOtherText && (d += "[" + h + "]"))
                }
        } else
            d = b || "";
        for (i = 0; i < c._titleTopic.length; i++)
            j = c._titleTopic[i],
            k = document.getElementById("spanTitleTopic" + j),
            k && (k.innerHTML = d,
            window.referTitleChangeTableTop && window.referTitleChangeTableTop(k))
    }
}
function getparentNode(a, b) {
    for (; a.parentNode.tagName.toLowerCase() != b; )
        a = a.parentNode;
    return a.parentNode
}
function createItem(a) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, b = a.dataNode, c = b._referedTopics.split(","), d = new Array;
    if (a.itemInputs)
        for (e = 0; e < a.itemInputs.length; e++)
            a.itemInputs[e].checked && d.push(a.itemInputs[e]);
    for (e = 0; e < c.length; e++)
        if (f = c[e],
        g = questionsObject[f]) {
            if (h = !1,
            i = document.getElementById("divRef" + f),
            window.cepingCandidate && !window.allowPart) {
                if (j = g.getElementsByTagName("input"),
                "201" == g.dataNode._mode || "301" == g.dataNode._mode || "302" == g.dataNode._mode ? j = $$tag("textarea", g) : "303" == g.dataNode._mode ? j = $$tag("select", g) : "202" == g.dataNode._mode ? (k = $$tag("tr", g),
                k && k.length >= 2 && (j = $$tag("div", k[1]))) : parseInt(g.dataNode._mode) < 100 && (j = g.itemTrs),
                !j || 0 == j.length) {
                    g.style.display = "none";
                    continue
                }
            } else if (!i)
                continue;
            switch (l = 0,
            m = [],
            n = new Object,
            o = document.getElementById("lbl" + b._topic + "_1") ? !0 : !1,
            p = g.getAttribute("relation"),
            g.dataNode._type) {
            case "matrix":
            case "sum":
                if (window.cepingCandidate && !window.allowPart)
                    continue;
                for (q = g.dataNode._mode,
                r = 0; r < a.itemInputs.length; r++)
                    if (s = a.itemInputs[r],
                    s.value && "checkbox" == s.type) {
                        if (t = parseInt(s.value) - 1 + l,
                        !g.itemTrs[t])
                            break;
                        if (u = s.checked,
                        window.cepingCandidate && window.allowPart && "1" == g.itemTrs[t].getAttribute("limit") && (u = !1),
                        -1 == p && window.allowPart && (u = !1),
                        g.itemTrs[t].style.display = u ? "" : "none",
                        !u && (j = g.itemTrs[t].itemInputs || g.itemTrs[t].itemLis,
                        v = !1,
                        j)) {
                            for (w = 0; w < j.length; w++)
                                j[w].checked ? (v = !0,
                                j[w].checked = !1,
                                x = getPreviousNode(j[w]),
                                x && "a" == x.tagName.toLowerCase() && (x.className = x.className.replace("jqChecked", ""))) : 0 == j[w].className.toLowerCase().indexOf("on") && (j[w].className = "off" + g.dataNode._mode,
                                v = !0);
                            v && (displayRelationRaidoCheck(g),
                            a.dataNode._referedTopics && createItem(g))
                        }
                        window.processtable && processtable(g, t, s),
                        u && !g.itemTrs[t].hasInit && "matrix" == g.dataNode._type && (g.itemTrs[t].hasInit = !0,
                        q && 0 > q - 100 ? initLikertItem(g.itemTrs[t]) : initItem(g.itemTrs[t])),
                        u && (h = !0,
                        s.itemText && (y = s.itemText.value,
                        z = g.cloneTable,
                        A = g.itemTrs[t].getElementsByTagName("th")[0],
                        B = null,
                        C = function(a) {
                            a && (a.span || (a.span = document.createElement("span"),
                            a.appendChild(a.span)),
                            a.span.innerHTML = y && y != defaultOtherText ? "[<span style='color:red;'>" + y + "</span>]" : "")
                        }
                        ,
                        C(A),
                        z && (B = g.cloneTable.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[t].getElementsByTagName("th")[0],
                        C(B)))),
                        hasJoin && g.itemTrs[t].divSlider && (D = g.itemTrs[t].divSlider.getAttribute("defvalue"),
                        D && isInt(D) && g.itemTrs[t].sliderImage.setValue(parseInt(D))),
                        o && (E = g.itemTrs[t].getAttribute("group"),
                        E && -1 == m.indexOf(E) && m.push(E),
                        E && u && !n[E] && (n[E] = "1"))
                    }
                1 == l && (g.itemTrs[0].style.display = h ? "" : "none"),
                i.style.display = h ? "none" : "",
                window.cepingCandidate && window.allowPart && (document.getElementById("div" + f).style.display = h ? "" : "none"),
                g.displayContent = h,
                window.isHiddenCloneDiv && isHiddenCloneDiv(g, h),
                window.setTableCloneDivWidth && window.setTableCloneDivWidth(g),
                g.referDiv = a;
                break;
            case "radio":
            case "check":
                for (F = g.itemInputs,
                G = new Object,
                r = 0; r < a.itemInputs.length; r++)
                    s = a.itemInputs[r],
                    s.checked && (G[s.value] = s);
                for (H = !1,
                r = 0; r < F.length; r++)
                    H = !1,
                    s = F[r],
                    ("checkbox" == s.type || "radio" == s.type) && (I = G[s.value],
                    J = s.parentNode,
                    "li" != J.tagName.toLowerCase() && (J = getparentNode(J, "li")),
                    I ? (J.style.display = "",
                    h = !0,
                    H = !0,
                    I.itemText && s.itemText && (s.itemText.value = I.itemText.value)) : (clearItemOption(s, g),
                    J.style.display = "none"),
                    o && (E = J.getAttribute("group"),
                    E && -1 == m.indexOf(E) && m.push(E),
                    E && I && !n[E] && (n[E] = "1")),
                    !H && "check" == g.dataNode._type && g.dataNode.isSort && clearItemOption(s, g));
                i.style.display = h ? "none" : "",
                g.displayContent = h
            }
            if (o)
                for (K = 0; K < m.length; K++)
                    E = m[K],
                    L = n[E],
                    M = "lbl" + f + "_" + E,
                    N = document.getElementById(M),
                    N && (N.style.display = L ? "" : "none"),
                    window.findLabelIDHandler && window.findLabelIDHandler(g, M, L)
        }
}
function divMatrixItemClick() {
    var a, b;
    if (curMatrixItem != this) {
        if (null != curMatrixItem && (curMatrixItem.style.background = curMatrixItem.prevBackColor || "",
        curMatrixItem.daoZhi))
            for (itemInputs = curMatrixItem.itemInputs,
            a = 0; a < itemInputs.length; a++)
                itemInputs[a].parentNode.style.background = "";
        curMatrixItem = this,
        this.parent && (b = this.parent.dataNode,
        updateProgressBar(b))
    }
}
function divQuestionClick() {
    if (curdiv != this) {
        showLeftBar(),
        curdiv = this,
        null != curMatrixItem && curMatrixItem.parent != curdiv && (curMatrixItem.style.background = curMatrixItem.prevBackColor || ""),
        null != curMatrixItem && curMatrixItem.parent == curdiv && (this.style.background = ""),
        this.removeError && this.removeError(),
        completeLoaded || (curdiv = null),
        this.itemTextarea && curdiv.parentNode && "none" != curdiv.parentNode.style.display && this.itemTextarea.focus();
        try {
            checkJpMatch(this)
        } catch (a) {}
    }
}
function showLeftBar() {
    hrefSave && "none" == hrefSave.style.display && (hrefSave.style.display = "",
    spanSave.innerHTML = ""),
    !hrefSave && window.divSaveText && 0 == langVer && (divSaveText.innerHTML = wjxlang.progress),
    window.divLeftBar && !hasDisplayed && (hasDisplayed = !0,
    divProgressImg && (divProgressImg.style.visibility = "visible",
    document.getElementById("loadprogress").style.visibility = "visible"),
    divSave && (divSave.parentNode.style.visibility = "visible"),
    divLeftBar.style.background = "#ffffff")
}
function updateProgressBar(a) {
    var b = a._topic;
    b > MaxTopic && (MaxTopic = b),
    progressArray[b] || (joinedTopic++,
    progressArray[b] = !0,
    showProgressBar(a)),
    setTimeout(function() {
        postHeight()
    }, 500)
}
function showProgressBar(a) {
    var b, c, d, e;
    window.divProgressImg && (loadcss || (loadcss = document.getElementById("loadcss")),
    loadprogress || (loadprogress = document.getElementById("loadprogress")),
    b = totalQ,
    c = joinedTopic,
    2 == progressBarType && (b = totalPage,
    c = cur_page + 1),
    d = 100 * (parseFloat(c) / b),
    d = d || 0,
    d >= 70 && a && a._topic == totalQ && (d = 100),
    e = d + "%",
    loadcss.style.height = e,
    loadprogress.innerHTML = 1 == progressBarType ? d.toFixed(0) + "%" : c + "/" + b + page_info,
    hrefSave && spanSave && clearInterval(saveInterval))
}
function checkMinMax(a, b, c, d) {
    var e, f, g, h, i, j;
    if (b._maxValue > 0 || b._minValue > 0) {
        for (e = c.itemInputs,
        f = 0,
        g = 0; g < e.length; g++)
            e[g].checked && f++;
        c.parent && (c = c.parent),
        c.divChecktip || (c.divChecktip = document.createElement("div"),
        c.appendChild(c.divChecktip),
        c.divChecktip.style.color = "#666"),
        h = wjxlang.check_haschoice.replace("{0}", f),
        b._maxValue > 0 && f > b._maxValue ? (d || (i = wjxlang.check_duoxuan.replace("{0}", b._maxValue),
        popUpAlert(i),
        a.checked = !1,
        a.onclick && a.onclick(),
        j = getPreviousNode(a),
        j && "a" == j.tagName.toLowerCase() && (j.className = "jqCheckbox"),
        a.checked = !1,
        f--),
        h = wjxlang.check_haschoice.replace("{0}", f)) : b._minValue > 0 && f < b._minValue && (h = wjxlang.check_shaoxuan.replace("{0}", f).replace("{1}", b._minValue - f),
        a.checked && b._select[a.value - 1] && b._select[a.value - 1]._item_huchi && (h = "")),
        0 == langVer && (c.divChecktip.innerHTML = h)
    }
    return !1
}
function itemSortClick() {
    var c, d, e, f, g, h, i, j, a = this.getElementsByTagName("input")[0], b = a.parent.parent || a.parent;
    if (hasAnswer = !0,
    c = b.dataNode,
    updateProgressBar(c),
    d = a.checked,
    e = this.parentNode.getElementsByTagName("li"),
    f = this.getElementsByTagName("span")[0],
    d) {
        for (g = f.innerHTML,
        h = 0; h < e.length; h++)
            e[h].getElementsByTagName("input")[0].checked && (i = e[h].getElementsByTagName("span")[0],
            j = i.innerHTML,
            j - g > 0 && (i.innerHTML = j - 1));
        f.innerHTML = "",
        f.className = "sortnum",
        a.checked = !1
    } else {
        for (g = 1,
        h = 0; h < e.length; h++)
            e[h].getElementsByTagName("input")[0].checked && g++;
        f.innerHTML = g,
        f.className = "sortnum sortnum-sel",
        a.checked = !0
    }
    c._referedTopics && createItem(b),
    referTitle(b),
    displayRelationRaidoCheck(b),
    this.inputLi = a,
    checkMinMax(this, c, b),
    jump(b, this),
    displaypeie(b)
}
function checkMatrixMaxValue(a, b) {
    var c, d, e;
    if (b && b.dataNode._maxvalue) {
        for (c = a.parentNode.parentNode.getElementsByTagName("input"),
        d = 0,
        e = 0; e < c.length; e++)
            c[e].checked && d++;
        if (d - b.dataNode._maxvalue > 0)
            return a.checked = !1,
            !0
    }
    return !1
}
function stopPropa(a) {
    a = a || window.event,
    a && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0)
}
function itemClick(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
    if (this.parent && (showLeftBar(),
    b = this.parent.parent || this.parent,
    !b.isTrap && !b.hasConfirm)) {
        if (hasAnswer = !0,
        c = b.dataNode,
        updateProgressBar(c),
        this.itemText && this.itemText.onclick && (this.checked ? this.itemText.onclick() : this.itemText.onblur && this.itemText.onblur()),
        "checkbox" == this.type)
            checkHuChi(b, this),
            this.itemText && (this.checked ? this.itemText.value = this.itemText.pvalue || "" : (this.itemText.pvalue = this.itemText.value,
            this.itemText.value = "")),
            c._referedTopics && createItem(b),
            referTitle(b),
            showAnswer(b),
            displayRelationRaidoCheck(b),
            checkMinMax(this, c, b, !this.checked),
            jump(b, this),
            displaypeie(b),
            "matrix" == c._type && (checkMatrixMaxValue(this, b),
            divMatrixRel.style.display = "none",
            d = this.getAttribute("needfill"),
            d && this.checked && showMatrixFill(this),
            b.removeError && b.removeError(),
            stopPropa(a));
        else if ("radio" == this.type || "slider" == c._type || "matrix" == c._type && "201" != c._mode && "301" != c._mode && "302" != c._mode)
            e = !1,
            c._requir && !b.hasClearHref && "matrix" == c._type && "202" != c._mode && "102" != c._mode && (f = this.value,
            g = this.parentNode.parentNode.parentNode.parentNode,
            "table" == g.tagName.toLocaleLowerCase() && (h = g.getElementsByTagName("thead")[0],
            h && (i = h.getElementsByTagName("td"),
            i[f - 1] && (j = i[f - 1].getAttribute("itemmax"),
            j && window.cepingCandidate && "-1" != j.indexOf("%") && (k = parseInt(j.replace("%", "")),
            l = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
            j = Math.ceil(l.length * k / 100)),
            j && j > 0 && (e = !0))))),
            !e && c._requir || b.hasClearHref || addClearHref(b),
            "radio" == this.type && ("matrix" == c._type && (processRadioInput(this.parentNode.parentNode, this),
            divMatrixRel.style.display = "none",
            d = this.getAttribute("needfill"),
            d && showMatrixFill(this),
            b.removeError && b.removeError()),
            referTitle(b),
            showAnswer(b)),
            displayRelationRaidoCheck(b),
            jump(b, this),
            displaypeie(b),
            (0 == popUpindex && "matrix" == c._type || "matrix" != c._type && 0 == itempopUpindex && c._mode && "0" != c._mode) && processSamecount(b, this);
        else if ("matrix" == c._type && "201" == c._mode) {
            for (m = b.itemTrs,
            n = 0,
            p = 0; p < m.length; p++)
                if ("none" != m[p].style.display) {
                    if (n = validateMatrix(c, m[p], m[p].itemInputs[0]),
                    n && !o) {
                        o = m[p].itemInputs[0];
                        break
                    }
                    txtChange(m[p], m[p].itemInputs[0])
                }
            if (b.removeError && b.removeError(),
            o && (b.errorControl = o,
            validate_ok = writeError(b, verifyMsg, 3e3)),
            b.dataNode._hasjump) {
                for (q = !1,
                p = 0; p < m.length; p++)
                    if (r = m[p].itemInputs[0],
                    "" != trim(r.value)) {
                        q = !0;
                        break
                    }
                jumpAny(q, b)
            }
            stopPropa(a)
        } else if ("sum" == c._type)
            this.parent.sliderImage ? sumClick(b, this.parent.sliderImage.sliderValue) : sumClick(b, this);
        else if ("text" == this.type)
            processTextR(this, b, c),
            stopPropa(a);
        else if ("textarea" == this.type)
            jump(b, this);
        else if ("SELECT" == this.nodeName) {
            if ("check" == c._type)
                return;
            b.focus(),
            jump(b, this),
            displayRelationRaidoCheck(b),
            s = this.options[this.selectedIndex].text,
            -2 == this.value && (s = ""),
            referTitle(b, s),
            displaypeie(b)
        }
        postHeight()
    }
}
function showAnswer(a) {
    if (window.isChuangGuan && "1" == a.getAttribute("ceshi") && !a.confirmButton) {
        var b = document.createElement("a");
        b.style.margin = "10px 0 0 20px",
        b.className = "sumitbutton cancle",
        a.insertBefore(b, a.lastChild),
        a.confirmButton = b,
        b.innerHTML = wjxlang.ensure,
        b.onclick = function() {
            var b, c, d, e, f, g, h, i, j, k;
            for (hasConfirmBtn || maxCheatTimes > 0 && (fireConfirm = !0),
            a.hasConfirm = !0,
            hasConfirmBtn = !0,
            b = !0,
            c = "",
            d = a.itemInputs,
            e = 0; e < d.length; e++)
                f = "1" == d[e].getAttribute("ans"),
                f ? (d[e].checked || (b = !1),
                g = getNextNode(d[e]),
                h = "",
                g && (h = g.innerHTML),
                /^[A-Z][\.\u3001\uff0e\s]/.test(h) && (h = h.substring(0, 1)),
                c && (c += "\uff5c"),
                c += h) : d[e].checked && (b = !1),
                g = getNextNode(d[e]),
                "label" == g.tagName.toLowerCase() && g.removeAttribute("for");
            a.correctAnswer || (i = document.createElement("div"),
            i.style.margin = "10px 0 0 20px",
            i.style.fontSize = "16px",
            a.insertBefore(i, a.lastChild),
            a.correctAnswer = i),
            j = b ? "<span style='color:green;'>" + wjxlang.lx_answer_right + "</span>" : "<span style='color:red;'>" + wjxlang.lx_answer_error.replace("{0}", c) + "</span>",
            a.correctAnswer.innerHTML = j,
            k = document.getElementById("divjx" + a.id.replace("div", "")),
            k && (k.style.display = "")
        }
    }
}
function processSamecount(a, b) {
    var c, d, e, f, g, h, i, j, k, l;
    if (window.IsSampleService && "t" == promoteSource)
        if (c = a.dataNode,
        "matrix" == c._type) {
            for (d = b.value,
            e = a.getElementsByTagName("input"),
            f = 0,
            g = 0; g < e.length; g++)
                if (e[g].checked && e[g].value == d && f++,
                f > 4) {
                    popUpindex++,
                    popUpAlert(wjxlang.tit_sameanswer);
                    break
                }
        } else
            for (h = c._mode,
            d = b.value,
            i = parseInt(a.id.replace("div", "")) - 1,
            f = 0,
            g = i; g >= 1 && (j = document.getElementById("div" + g),
            k = j.dataNode,
            "radio" == k._type && k._mode == h); g--) {
                if (e = j.getElementsByTagName("input"),
                e.length > 0) {
                    for (l = 0; l < e.length; l++)
                        if (e[l].checked && e[l].value == d) {
                            f++;
                            break
                        }
                } else
                    e = j.getElementsByTagName("li"),
                    e[d].className.toLowerCase().indexOf("on") > -1 && !e[d + 1].className.toLowerCase().indexOf("on") > -1 && f++;
                if (f > 3) {
                    itempopUpindex++,
                    popUpAlert(wjxlang.tit_sameanswer),
                    stopPropa();
                    break
                }
            }
}
function processRadioInput(a, b) {
    a.prevRadio && a.prevRadio.itemText && a.prevRadio != b && (a.prevRadio.itemText.pvalue = a.prevRadio.itemText.value,
    a.prevRadio.itemText.value = ""),
    b.itemText && b != a.prevRadio && (b.itemText.value = b.itemText.pvalue || ""),
    a.prevRadio = b
}
function processTextR(a, b, c) {
    var d, e;
    if (a.choiceRel) {
        if (a.choiceRel.disabled)
            return;
        if (a.value == defaultOtherText && (a.value = ""),
        1 == c._mode && "checkbox" == a.choiceRel.type)
            a.choiceRel.checked || a.parentNode.click();
        else {
            if (a.choiceRel.checked = !0,
            "matrix" == c._type && "102" == c._mode && (d = checkMatrixMaxValue(a.choiceRel, b)))
                return a.blur && a.blur(),
                void 0;
            "check" == c._type && groupMutual(c._topic, a.parentNode),
            a.style.color = "#000000",
            a.style.background = "",
            c._referedTopics && createItem(b),
            referTitle(b),
            "checkbox" == a.choiceRel.type ? (a.pvalue && !a.value && (a.value = a.pvalue),
            e = getPreviousNode(a.choiceRel),
            e && "a" == e.tagName.toLowerCase() && (e.className = "jqCheckbox jqChecked"),
            checkHuChi(b, a.choiceRel),
            checkMinMax(a.choiceRel, c, b)) : "radio" == a.choiceRel.type && ("matrix" == c._type ? processRadioInput(a.parentNode.parentNode, a.choiceRel) : (e = getPreviousNode(a.choiceRel),
            e && "a" == e.tagName.toLowerCase() && (e.className = "jqRadio jqChecked",
            b && b.prevARadio && b.prevARadio != e && (b.prevARadio.className = "jqRadio"),
            b.prevARadio = e))),
            displayRelationRaidoCheck(b),
            jump(b, a.choiceRel)
        }
    }
}
function checkHuChi(a, b) {
    var c, d, e, f, g;
    if (b.checked && (c = a.dataNode,
    c.hasHuChi))
        for (d = a.itemInputs,
        e = c._select[b.value - 1]._item_huchi,
        f = 0; f < d.length; f++)
            "checkbox" == d[f].type && d[f] != b && d[f].checked && (e ? (d[f].parentNode.onclick && d[f].parentNode.onclick(),
            d[f].checked = !1) : (g = c._select[d[f].value - 1]._item_huchi,
            g && (d[f].parentNode.onclick && d[f].parentNode.onclick(),
            d[f].checked = !1)))
}
function relationItemJoin(a) {
    var b, c;
    ("none" != a.style.display || "-1" == $(a).attr("relation")) && (b = a.dataNode,
    c = b._type,
    ("radio" == c || "check" == c) && displayRelationRaidoCheck(a))
}
function relationJoin(a) {
    var b, c, d, e, f;
    if ("none" != a.style.display || relationQs[a.dataNode._topic])
        if (b = a.dataNode,
        c = b._type,
        d = b._mode,
        "radio" == c || "check" == c || "matrix" == c && ("101" == d || "103" == d || 0 > d - 100)) {
            if (a.getAttribute("qingjing")) {
                if (e = a.dataNode._topic,
                !relationQs[e])
                    return;
                for (f = 0; f < relationQs[e].length; f++)
                    relationQs[e][f].style.display = "none"
            }
            displayRelationRaidoCheck(a)
        } else
            "radio_down" == c && displayRelationRaidoCheck(a)
}
function displayRelationRaidoCheck(a) {
    var b = a.dataNode._topic;
    (relationQs[b] || ItemrelationQs[b]) && (GetAnsewer(b, !0),
    handleItemRelation(b))
}
function handleItemRelation(a) {
    var b, c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
    for (b = cur_page; b < pageHolder.length; b++)
        for (c = pageHolder[b].questions,
        pageHolder[b]._maxtime > 0,
        e = 0; e < c.length; e++)
            if (!(parseInt(c[e].dataNode._topic) <= parseInt(a))) {
                if (f = c[e].getAttribute("relation")) {
                    for (g = "",
                    g = -1 != f.indexOf("|") ? "|" : "$",
                    h = f.split(g),
                    i = !1,
                    "|" == g && (i = !0),
                    j = 0; j < h.length; j++)
                        if (k = displayRelationLogic(h[j]),
                        "$" == g) {
                            if (k) {
                                i = !0;
                                break
                            }
                        } else if (!k) {
                            i = !1;
                            break
                        }
                    l = i ? "" : "none",
                    checkDisplayItemques(c[e], l),
                    i ? c[e].dataNode._hasjump || relationQs[c[e].dataNode._topic] || ItemrelationQs[c[e].dataNode._topic] ? (loopHideRelation(c[e]),
                    initEleSelect2(c[e]),
                    window.hasHeatMap && heatMapInit(c[e]),
                    "jump" == progressArray[c[e].dataNode._topic] && (progressArray[c[e].dataNode._topic] = !1)) : (loopShowRelation(c[e]),
                    initEleSelect2(c[e]),
                    window.hasHeatMap && heatMapInit(c[e]),
                    "jump" == progressArray[c[e].dataNode._topic] && (progressArray[c[e].dataNode._topic] = !1)) : loopHideRelation(c[e])
                }
                if (m = c[e].getAttribute("hasitemrelation"))
                    for (n = c[e].itemInputs || c[e].itemLis,
                    o = 0; o < n.length; o++)
                        if (p = n[o].getAttribute("id"),
                        HasSetItemrelationList[p]) {
                            for (q = HasSetItemrelationList[p],
                            g = "",
                            g = -1 != q.indexOf("|") ? "|" : "$",
                            h = q.split(g),
                            i = !1,
                            "|" == g && (i = !0),
                            j = 0; j < h.length; j++)
                                if (k = displayRelationLogic(h[j]),
                                "$" == g) {
                                    if (k) {
                                        i = !0;
                                        break
                                    }
                                } else if (!k) {
                                    i = !1;
                                    break
                                }
                            l = i ? "" : "none",
                            checkDisplayques(p, l),
                            i || loopHideItemRelation(p)
                        }
            }
    if (window.totalCut && window.totalCut > 0)
        for (e = 0; e < window.totalCut; e++)
            if (r = document.getElementById("divCut" + (e + 1)),
            f = r.getAttribute("relation"),
            f && f && "0" != f) {
                for (g = "",
                g = -1 != f.indexOf("|") ? "|" : "$",
                h = f.split(g),
                i = !1,
                "|" == g && (i = !0),
                j = 0; j < h.length; j++)
                    if (k = displayRelationLogic(h[j]),
                    "$" == g) {
                        if (k) {
                            i = !0;
                            break
                        }
                    } else if (!k) {
                        i = !1;
                        break
                    }
                s = e + 1,
                p = "c" + s,
                r.style.display = i ? "" : "none",
                relationNotDisplayQ[p] = i ? "" : "1"
            }
}
function GetAnsewer(a, b) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, w, x, y, z, A, B, C, D, E, F, G, H, I, J, c = questionsObject[a], d = "";
    if (!c.dataNode)
        return d;
    if (e = c.dataNode,
    !b && e.quesAnswer && "" != e.quesAnswer)
        return d = e.quesAnswer,
        "-3" == d && (d = ""),
        d;
    if (f = e._type,
    "check" != f && "radio" != f && "radio_down" != f && "matrix" != f)
        return d;
    switch (g = "none" == c.style.display.toLowerCase() && "-1" != $(c).attr("relation") || c.dataNode._referTopic && !c.displayContent && !window.cepingCandidate,
    f) {
    case "radio":
    case "check":
        if (d = "-3",
        e.isSort) {
            for (h = new Array,
            i = 0; i < c.itemInputs.length; i++)
                if ("checkbox" == c.itemInputs[i].type) {
                    if (j = c.itemInputs[i].parentNode,
                    k = j.getElementsByTagName("span")[0].innerHTML,
                    "none" == j.parentNode.style.display && (k = ""),
                    g)
                        continue;
                    if (!k)
                        continue;
                    l = c.itemInputs[i].value,
                    h.push(l)
                }
            for (m = 0; m < h.length; m++)
                m > 0 ? d += "," : d = "",
                d += h[m];
            break
        }
        if (g) {
            d = "-3",
            "1" == c.getAttribute("hrq") && (d = "-3");
            break
        }
        if (n = c.itemInputs || c.itemLis,
        c.isShop) {
            for (o = !1,
            i = 0; i < n.length; i++)
                l = parseInt(n[i].value),
                l > 0 && ("-3" != d ? d += "," : d = "",
                d += i + 1,
                o = !0);
            if (!o) {
                d = "-3";
                break
            }
        }
        for (p = -1,
        q = 0,
        i = 0; i < n.length; i++)
            n[i].className.toLowerCase().indexOf("on") > -1 && (p = i),
            r = n[i].parentNode && "none" == n[i].parentNode.style.display,
            !r && n[i].checked && (q++,
            "-3" != d ? d += "," + n[i].value : d = n[i].value + "");
        p > -1 ? d = n[p].value + "" : q > 0 || (d = "-3");
        break;
    case "radio_down":
        if (g) {
            d = "-3";
            break
        }
        d = c.itemSel.value;
        break;
    case "matrix":
        for (d = "-3",
        s = c.itemTrs,
        t = e._mode,
        len = s.length,
        u = 0,
        w = 0,
        x = 0,
        y = new Array,
        z = !1,
        i = 0; i < s.length; i++)
            if (A = s[i].getAttribute("rindex"),
            !A && c.getAttribute("DaoZhi") && (A = s[i].cellIndex - 1),
            0 == A && "true" == s[i].getAttribute("randomrow") && (z = !0),
            B = new Object,
            B.rIndex = parseInt(A),
            C = "201" != t && "202" != t && "301" != t && "302" != t && "303" != t && "203" != t && "204" != t,
            "none" == s[i].style.display && C)
                d = "-3";
            else if (n = s[i].itemInputs || s[i].itemLis || s[i].divSlider || s[i].itemSels || s[i].uploadFrame) {
                if (u = n.length,
                p = -1,
                D = "",
                "201" != t && "202" != t && "203" != t && "204" != t) {
                    for (E = 0; E < n.length; E++)
                        n[E].className.toLowerCase().indexOf("on") > -1 && (p = E,
                        D = n[E].value),
                        n[E].checked && (p = E,
                        D ? D += ";" + n[E].value : D = n[E].value);
                    p > -1 ? ("-3" != d ? d += "301" == t || "302" == t || "303" == t ? spChars[2] + D : "," + D : d = D,
                    B.val = D) : ("-3" != d ? d += ",-2" : d = "-2",
                    B.val = "-2")
                } else
                    "201" == t || "204" == t ? (l = trim(n[0].value.substring(0, 3e3)),
                    "none" == s[i].style.display && (l = "\u2163"),
                    l && n[0].lnglat && (l = l + "[" + n[0].lnglat + "]"),
                    w > 0 ? d += spChars[2] + replace_specialChar(l) : d = replace_specialChar(l),
                    B.val = replace_specialChar(l)) : "202" == t ? (F = void 0 == s[i].divSlider.value ? "" : s[i].divSlider.value,
                    "none" == s[i].style.display && (F = "\u2163"),
                    w > 0 ? d += spChars[2] + F : d = F,
                    B.val = F) : "203" == t && (B.val = s[i].fileName);
                y.push(B),
                w++
            } else
                len -= 1,
                x = 1;
        if (g) {
            E = 0,
            d = "-3";
            break
        }
        for (y.sort(function(a, b) {
            return a.rIndex - b.rIndex
        }),
        G = spChars[2],
        "201" != t && "202" != t && "301" != t && "302" != t && "303" != t && "203" != t && "204" != t && (G = ","),
        H = "",
        I = 0; I < y.length; I++)
            I > 0 && (H += G),
            J = y[I].rIndex,
            parseInt(J) == J && (A = parseInt(J) + 1,
            H += A + spChars[4]),
            H += void 0 == y[I].val ? "" : y[I].val;
        d = H
    }
    return c.dataNode.quesAnswer = d,
    d
}
function displayRelationLogic(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, b = !1;
    if (!a)
        return !0;
    if (c = a.split(","),
    c.length < 2)
        return b;
    if (d = GetAnsewer(c[0]),
    !d || "" == d || "-3" == d)
        return !1;
    if (e = questionsObject[c[0]],
    "matrix" == e.dataNode._type) {
        for (f = new Array,
        g = d.split(","),
        h = 0; h < g.length; h++) {
            if (i = g[h].split("!"),
            i.length < 2)
                return b;
            j = new Object,
            j.sIndex = i[0],
            j.val = i[1],
            f.push(j)
        }
        if (k = c[1].split("^"),
        k.length < 2)
            return !1;
        for (l = k[1].split(";"),
        m = !1,
        n = 0; n < f.length; n++) {
            if (k[0] == f[n].sIndex)
                for (m = !0,
                o = 0; o < l.length; o++)
                    if (l[o] == f[n].val) {
                        b = !0;
                        break
                    }
            if (m)
                break
        }
        return b
    }
    if (p = -1 != a.indexOf(".") ? !1 : !0,
    !d)
        return !1;
    if (q = d.split(","),
    l = p ? c[1].split(";") : c[1].split("."),
    -1 != c[1].indexOf("-")) {
        if (p) {
            for (h = 0; h < l.length; h++) {
                for (r = !0,
                s = l[h].replace("-", ""),
                n = 0; n < q.length; n++)
                    if (s == q[n]) {
                        r = !1;
                        break
                    }
                if (!r)
                    break
            }
            return b = r
        }
        for (r = !1,
        h = 0; h < l.length; h++) {
            for (s = l[h].replace("-", ""),
            t = !0,
            n = 0; n < q.length; n++)
                if (s == q[n]) {
                    t = !1;
                    break
                }
            if (t) {
                r = !0;
                break
            }
        }
        return b = r
    }
    if (p) {
        for (h = 0; h < l.length; h++) {
            for (r = !1,
            s = l[h].replace("-", ""),
            n = 0; n < q.length; n++)
                if (s == q[n]) {
                    r = !0;
                    break
                }
            if (r)
                break
        }
        return b = r
    }
    for (r = !0,
    h = 0; h < l.length; h++) {
        for (t = !1,
        s = l[h].replace("-", ""),
        n = 0; n < q.length; n++)
            if (s == q[n]) {
                t = !0;
                break
            }
        if (!t) {
            r = !1;
            break
        }
    }
    return b = r
}
function clearItemOption(a, b) {
    var c, d, e, f, g, h;
    if (!a.checked)
        return !1;
    if (c = getPreviousNode(a),
    c && "a" == c.tagName.toLowerCase())
        a.checked = !1,
        c.className = c.className.replace("jqChecked", ""),
        displayRelationRaidoCheck(b),
        b.dataNode._referedTopics && createItem(b),
        displaypeie(b);
    else if (d = getNextNode(a),
    d && "span" == d.tagName.toLowerCase()) {
        for (e = a.parentNode.parentNode.parentNode,
        f = e.getElementsByTagName("li"),
        g = 0; g < f.length; g++)
            h = f[g].getElementsByTagName("span")[0],
            f[g].getElementsByTagName("input")[0].checked && (f[g].getElementsByTagName("input")[0].checked = !1,
            h.innerHTML = "",
            h.className = "sortnum");
        displayRelationRaidoCheck(b),
        b.dataNode._referedTopics && createItem(b)
    }
    return checkMinMax(a, b.dataNode, b),
    !0
}
function loopShowRelation(a) {
    var b = "";
    b = a.dataNode ? a.dataNode._topic : a.getAttribute("topic"),
    "1" == a.getAttribute("isshop") && updateCart(a),
    "jump" == progressArray[b] && (progressArray[b] = !1,
    joinedTopic--),
    "1" == a.getAttribute("qingjing") && (relationQs[b] || ItemrelationQs[b]) && GetAnsewer(b, !0)
}
function loopHideRelation(a) {
    if (!isLoadQues) {
        var b = clearAllOption(a);
        b && (jumpAny(!1, a),
        displaypeie(a))
    }
}
function loopHideItemRelation(a) {
    var b, c, d, e, f;
    isLoadQues || (b = a.split("_"),
    2 == b.length && (c = b[0].replace("q", ""),
    d = document.getElementById(a),
    d && (e = questionsObject[c],
    f = clearItemOption(d, e),
    f && (e.dataNode.quesAnswer = "",
    jumpAny(!1, e)))))
}
function checkDisplayItemques(a, b) {
    var c = "";
    return c = a.dataNode ? a.dataNode._topic : a.getAttribute("topic"),
    relationNotDisplayQ[c] = "none" == b ? "1" : "",
    a.style.display == b ? ("" == b && window.monitoringEmbeddingIframeSwitch && monitoringEmbeddingIframeSwitch(a),
    void 0) : (a.style.display = b,
    "1" == a.getAttribute("qingjing") && (relationQs[c] || ItemrelationQs[c]) && GetAnsewer(c, !0),
    a.dataNode ? "" == b ? (window.monitoringEmbeddingIframeSwitch && monitoringEmbeddingIframeSwitch(a),
    void 0) : void 0 : void 0)
}
function checkDisplayques(a, b) {
    var g, h, i, j, k, l, m, c = a.replace("q", "").split("_"), d = c[0], e = c[1].replace("-", ""), f = document.getElementById("q" + d + "_" + e);
    if (f && (g = document.getElementById("div" + d),
    g && (h = g.dataNode._topic,
    "none" != b && !g.dataNode._hasjump || isLoadQues || clearItemOption(f, g),
    i = f.parentNode,
    ("LI" == i.nodeName || (i = f.parentNode.parentNode,
    "LI" == i.nodeName || (i = f.parentNode.parentNode.parentNode,
    i && "LI" == i.nodeName))) && i.style.display != b && (i.style.display = b,
    c = a.replace("q", "").split("_"),
    2 == c.length && !relationNotDisplayQ[h]))))
        if (j = g.itemInputs,
        "" == b)
            "none" == g.style.display && (g.style.display = "",
            "1" == relationItemNotDisplayQ[h] && (relationItemNotDisplayQ[h] = ""));
        else {
            for (k = "none",
            l = 0; l < j.length; l++)
                if (m = j[l].parentNode,
                ("LI" == m.nodeName || (m = j[l].parentNode.parentNode,
                "LI" == m.nodeName || (m = j[l].parentNode.parentNode.parentNode,
                m && "LI" == m.nodeName))) && "" == m.style.display) {
                    k = "";
                    break
                }
            g.style.display = k,
            "none" == k && (relationItemNotDisplayQ[h] || (relationItemNotDisplayQ[h] = "1"),
            jumpAny(!1, g))
        }
}
function sumClick(a, b, c) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, d = a.getElementsByTagName("input"), e = a.dataNode;
    if (updateProgressBar(e),
    d) {
        for (f = d.length,
        g = e._total,
        h = g,
        i = 0,
        l = b.value,
        parseInt(l) < 0 && (b.value = ""),
        m = new Array,
        n = 0; f > n; n++)
            o = d[n].value,
            p = a.itemTrs[n],
            q = p.sliderImage,
            "none" != p.style.display ? (j = d[n],
            k = q,
            d[n].sIndex = n,
            m.push(d[n]),
            o && trim(o) ? isInt(o) ? (h -= parseInt(o),
            void 0 == q._value ? q.setValue(parseInt(l), !0) : c && d[n] == b && q.setValue(parseInt(l), !0)) : (d[n].value = "",
            i++) : "none" == p.style.display || i++) : (o = "",
            d[n].value = "");
        if (1 == i && h >= 0 && (k.setValue(h, !0),
        j.value = h,
        h = 0),
        r = "",
        0 == i && 0 != h && (s = parseInt(j.value) + h,
        s >= 0 ? j != b ? (k.setValue(s, !0),
        j.value = s,
        h = 0) : 2 == m.length && (t = g - parseInt(j.value),
        u = m[0].sIndex,
        a.itemTrs[u].sliderImage.setValue(t),
        m[0].value = t,
        h = 0) : r = "\uff0c<span style='color:red;'>" + sum_warn + "</span>"),
        0 == h)
            for (n = 0; f > n; n++)
                d[n].value || (d[n].value = "0");
        a.sumLeft = h,
        a.relSum && (a.relSum.innerHTML = "<span style='font-size:13px;'>" + sum_total + "<b>" + g + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (g - h) + "</span>" + r + "</span>"),
        jump(a, this)
    }
}
function jump(a, b) {
    var c = a.dataNode
      , d = c._anytimejumpto
      , e = c._hasjump
      , f = c._referTopic;
    e && !f && (d > 0 ? jumpAnyChoice(a) : 0 == d && "radio" != c._type && "radio_down" != c._type ? jumpAnyChoice(a) : jumpByChoice(a, b))
}
function jumpAnyChoice(a, b) {
    var e, f, c = a.itemInputs || a.itemLis || a.itemTrs || a.gapFills, d = !1;
    if (c)
        for (e = 0; e < c.length; e++) {
            if (c[e].checked)
                d = !0;
            else if (c[e].className.indexOf("on") > -1)
                d = !0;
            else if (c[e].divSlider && c[e].divSlider.value)
                d = !0;
            else if ("TEXTAREA" == c[e].tagName && "" != trim(c[e].value))
                d = !0;
            else if ("text" == c[e].type && "" != trim(c[e].value))
                d = !0;
            else if (c[e].itemSels)
                for (f = 0; f < c[e].itemSels.length; f++)
                    if (c[e].itemSels[f]) {
                        d = !0;
                        break
                    }
            if (d)
                break
        }
    else
        a.itemSel ? d = a.itemSel.selectedIndex > 0 ? !0 : !1 : a.divSlider ? d = void 0 != a.divSlider.value && null != a.divSlider.value ? !0 : !1 : a.itemTextarea ? d = "" != trim(a.itemTextarea.value) : a.uploadFrame && (d = a.fileName ? !0 : !1);
    jumpAny(d, a, b)
}
function jumpByChoice(a, b) {
    var d, c = a.dataNode;
    "-2" == b.value ? processJ(a.indexInPage - 0, 0, !1, a.pageIndex) : "-1" == b.value || "" == b.value ? processJ(a.indexInPage - 0, 0, !1, a.pageIndex) : "radio" != c._type && "radio_down" != c._type || parseInt(b.value) != b.value || (d = c._select[b.value - 1]._item_jump,
    processJ(a.indexInPage - 0, d - 0, !1, a.pageIndex))
}
function txtChange(a, b) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, c = a.parent.parent || a.parent;
    if (updateProgressBar(c.dataNode),
    hasAnswer = !0,
    c.removeError && !isGsWrite && c.removeError(),
    d = c.dataNode._verify,
    e = c.dataNode._needOnly || a.getAttribute("needonly"),
    f = a.value,
    !f && b && b.value && (f = b.value),
    f || (f = ""),
    g = !1,
    "" == f) {
        if (h = c.itemInputs || c.itemLis || c.itemTrs || c.gapFills)
            for (i = 0; i < h.length; i++) {
                if (h[i].checked)
                    g = !0;
                else if (h[i].className.indexOf("on") > -1)
                    g = !0;
                else if (h[i].divSlider && h[i].divSlider.value)
                    g = !0;
                else if ("TEXTAREA" == h[i].tagName && "" != trim(h[i].value))
                    g = !0;
                else if ("text" == h[i].type && "" != trim(h[i].value))
                    g = !0;
                else if (h[i].itemSels)
                    for (j = 0; j < h[i].itemSels.length; j++)
                        if (h[i].itemSels[j]) {
                            g = !0;
                            break
                        }
                if (g)
                    break
            }
    } else
        g = !0;
    f = trim(f),
    k = !0,
    "3" == hasJoin && a.prevvalue == a.value && (a.isOnly = !0,
    k = !1),
    e && "" != f && "\u5730\u56fe" != d && b && k && !c.needsms && (l = getXmlHttp(),
    l.onreadystatechange = function() {
        4 == l.readyState && 200 == l.status && ("false1" == unescape(l.responseText) ? (a.isOnly = !1,
        writeError(c, validate_only, 3e3)) : a.isOnly = !0)
    }
    ,
    m = c.dataNode._topic,
    n = a.getAttribute("gapindex"),
    n && (m = 1e4 * parseInt(m) + parseInt(n)),
    o = "/joinnew/AnswerOnlyHandler.ashx?q=" + activityId + "&at=" + encodeURIComponent(f) + "&qI=" + m + "&o=true&t=" + (new Date).valueOf(),
    window.nfjoinid && "2" != hasJoin && (o += "&joinid=" + nfjoinid),
    l.open("get", o),
    l.send(null)),
    ("matrix" != c.dataNode._type || "201" != c.dataNode._mode) && ("matrix" == c.dataNode._type && "303" == c.dataNode._mode && (d = "\u6570\u5b57"),
    "matrix" == c.dataNode._type && "302" == c.dataNode._mode && "" != f && window.hideTip && hideTip(a),
    "" != f && d && "0" != d && (c.removeError && !isGsWrite && c.removeError(),
    p = c.dataNode,
    q = c.getAttribute("issample"),
    r = !0,
    q && "t" != promoteSource && (r = !1),
    r && (s = verifyMinMax(a, d, p._minword, p._maxword),
    "" != s && (validate_ok = writeError(c, s, 3e3)),
    "\u5bc6\u7801" == d && a && a.firstPwd && (d = "\u786e\u8ba4\u5bc6\u7801"),
    s = verifydata(a, d, c.dataNode),
    "" != s && (validate_ok = writeError(c, s, 3e3)))),
    "gapfill" == c.dataNode._type && (t = 0,
    t = validateMatrix(c.dataNode, a, a),
    t && (c.errorControl = a,
    writeError(c, verifyMsg, 3e3)),
    "" != f && window.hideTip && hideTip(a)),
    "sum" == c.dataNode._type ? sumClick(c, a, 1) : jumpAny(g, c))
}
function dateQuota(a) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, b = a.getAttribute("datept"), c = a;
    if (b && c && "" != c.value) {
        for (d = a.id.substr(1, a.id.length - 1),
        e = b.split(","),
        f = 0; f < e.length; f++)
            g = e[f].split("|"),
            4 == g.length && g[0] != c.value && (h = "q" + g[1] + "_" + g[2],
            Number(g[1]) < Number(d) && !(i = document.getElementById("div" + g[1]).pageIndex == document.getElementById("div" + d).pageIndex) || (j = document.getElementById(h),
            j ? (j.disabled = !1,
            j.parentNode && (k = j.parentNode.getElementsByTagName("label")[0],
            l = k.getElementsByTagName("b"),
            l.length > 0 && k.removeChild(l[0]))) : (m = document.getElementById("div" + g[1]),
            n = m.getElementsByTagName("option"),
            n && n.length > g[2] && (n[g[2]].disabled = !1,
            o = "\uff08" + g[3] + ")",
            -1 != n[g[2]].innerHTML.indexOf(o) && (n[g[2]].innerHTML = n[g[2]].innerHTML.replace(o, ""),
            m.getElementsByTagName("select")[0].className = "",
            m.getElementsByTagName("select")[0].style.width = "auto",
            initEleSelect2("#div" + g[1]))))));
        for (p = 0; p < e.length; p++)
            if (g = e[p].split("|"),
            4 == g.length && (g[0] == c.value || "D" == g[0]))
                if (h = "q" + g[1] + "_" + g[2],
                i = document.getElementById("div" + g[1]).pageIndex == document.getElementById("div" + d).pageIndex,
                j = document.getElementById(h)) {
                    if (Number(g[1]) < Number(d) && !i && j.checked) {
                        k = j.parentNode.getElementsByTagName("label")[0],
                        popUpAlert(c.value + "\u65e5 " + k.innerHTML + " \u914d\u989d\u5df2\u6ee1"),
                        c.value = "";
                        break
                    }
                    j.disabled = !0,
                    j.checked = !1,
                    q = j.parentNode.getElementsByClassName("jqChecked")[0],
                    q && (q.className.indexOf("jqRadio") > -1 ? q.setAttribute("class", "jqRadio") : q.setAttribute("class", "jqCheckbox")),
                    j.parentNode && (k = j.parentNode.getElementsByTagName("label")[0],
                    l = k.getElementsByTagName("b"),
                    0 == l.length && (k.innerHTML = k.innerHTML + "<b>&nbsp;\uff08" + g[3] + "\uff09</b>"))
                } else if (m = document.getElementById("div" + g[1]),
                n = m.getElementsByTagName("option"),
                n && n.length > g[2]) {
                    if (Number(g[1]) < Number(d) && !i && n[g[2]].selected) {
                        r = n[g[2]].innerText,
                        popUpAlert(c.value + "\u65e5 " + r + " \u914d\u989d\u5df2\u6ee1"),
                        c.value = "";
                        break
                    }
                    n[g[2]].disabled = !0,
                    n[g[2]].selected = "",
                    o = "\uff08" + g[3] + ")",
                    -1 == n[g[2]].innerHTML.indexOf(o) && (n[g[2]].innerHTML = n[g[2]].innerHTML + o,
                    m.getElementsByTagName("select")[0].className = "",
                    m.getElementsByTagName("select")[0].style.width = "auto",
                    initEleSelect2("#div" + g[1]))
                }
    }
}
function jumpAny(a, b, c) {
    var d = b.dataNode;
    d && d._hasjump && (a ? processJ(b.indexInPage - 0, d._anytimejumpto - 0, c, b.pageIndex) : processJ(b.indexInPage - 0, 0, c, b.pageIndex))
}
function processJ(a, b, c, d) {
    var f, g, h, i, j, k, l, n, o, e = a + 1;
    for (d -= 1,
    f = d,
    g = 1 == b || -1 == b,
    h = 0,
    i = d; i < pageHolder.length; i++) {
        for (j = pageHolder[i].questions,
        g && (f = i),
        !h && j[a] && j[a].dataNode && (h = parseInt(j[a].dataNode._topic)),
        k = e; k < j.length; k++)
            l = j[k].dataNode._topic,
            (l == b || g) && (f = i),
            "1" != j[k].getAttribute("nhide") && (b > l || g ? (j[k].style.display = "none",
            JumpNotDisplayQ[l] = 1,
            progressArray[l] || (joinedTopic++,
            progressArray[l] = "jump"),
            clearAllOption(j[k]),
            (relationQs[l] || ItemrelationQs[l]) && displayRelationRaidoCheck(j[k])) : (relationNotDisplayQ[l] || relationItemNotDisplayQ[l] || (j[k].style.display = ""),
            "jump" == progressArray[l] && (joinedTopic--,
            progressArray[l] = !1),
            j[k].dataNode._hasjump && !c && clearAllOption(j[k]),
            "1" == j[k].getAttribute("qingjing") && displayRelationRaidoCheck(j[k])));
        for (k = 0; k < pageHolder[i].cuts.length; k++)
            n = pageHolder[i].cuts[k],
            l = n.getAttribute("qtopic"),
            l && (h && h >= l || e >= l || (b > l || g ? n.style.display = "none" : (o = n.getAttribute("topic"),
            relationNotDisplayQ[o] || (n.style.display = ""))));
        e = 0
    }
    1 == b && (joinedTopic = totalQ),
    showProgressBar()
}
function addClearHref(a) {
    var b, d;
    if (!window.isKaoShi || "1" == a.getAttribute("nc")) {
        if (a.hasClearHref)
            return a.clearHref.style.display = "",
            void 0;
        b = "1" == $(a).attr("maxdiff"),
        a.dataNode,
        d = document.createElement("a"),
        d.title = validate_info_submit_title2,
        d.className = "link-999",
        d.style.marginLeft = "25px",
        d.innerHTML = "[" + type_radio_clear + "]",
        b && (d.innerHTML = wjxlang.rechiose),
        d.href = "javascript:void(0);",
        a.hasClearHref = !0,
        b ? (d.className = "mdrechioce",
        $(a).find(".mdpageWrap").append(d)) : a.divTitle.appendChild(d),
        a.clearHref = d,
        d.onclick = function() {
            clearAllOption(a),
            displayRelationRaidoCheck(a),
            TotalValBoxInit(),
            referTitle(a),
            jumpAny(!1, a)
        }
    }
}
function clearAllOption(a) {
    var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v;
    if (-1 != $(a).attr("relation")) {
        if (b = a.dataNode._topic,
        c = !1,
        a.dataNode && a.dataNode._hasjump && (c = !0),
        d = !1,
        a.itemSel) {
            if (d = !0,
            0 != a.itemSel.selectedIndex) {
                try {
                    0 != a.itemSel.selectedIndex && window.$ && a.hasInitSelect2 && $(a.itemSel).select2("val", "-2")
                } catch (e) {}
                a.itemSel.selectedIndex = 0
            }
        } else if (a.divSlider && void 0 != a.divSlider.value)
            a.sliderImage.setValue(a.dataNode._minvalue, !0),
            a.divSlider.value = void 0;
        else if (a.itemTextarea && c)
            a.itemTextarea.value && (d = !0),
            a.itemTextarea.value = "",
            a.dataNode && "\u65e5\u671f" == a.dataNode._verify && "1" == a.getAttribute("haspeie") && dateQuota(a.itemTextarea);
        else if (a.uploadFrame) {
            if (a.fileName && (d = !0),
            a.uploadFrame.style.display = "",
            a.fileName = !1,
            f = a.getElementsByTagName("ul")[0],
            f && "uploadBox" == f.className && (g = f.getElementsByTagName("a")))
                for (h = 0; h < g.length; h++)
                    g[h].click();
            a.uploadmsg.innerHTML = ""
        } else if (a.dataNode && c && "gapfill" == a.dataNode._type && a.dataNode._gapcount && a.gapFills) {
            for (d = !1,
            i = a.gapFills,
            j = 0; j < i.length; j++)
                "" != i[j].value && (d = !0),
                i[j].value = "";
            if (k = $$tag("select", a))
                for (j = 0; j < k.length; j++)
                    "" != $(k[j]).val() && $(k[j]).val("").change()
        } else if (a.dataNode && "check" == a.dataNode._type && a.dataNode.isSort) {
            if (l = a.getElementsByTagName("li"),
            !l)
                return !1;
            for (h = 0; h < l.length; h++)
                m = l[h].getElementsByTagName("span")[0],
                m && l[h].getElementsByTagName("input")[0].checked && (d = !0,
                l[h].getElementsByTagName("input")[0].checked = !1,
                m.innerHTML = "",
                m.className = "sortnum");
            d && a.dataNode._referedTopics && createItem(a)
        } else if (a.dataNode && c && "matrix" == a.dataNode._type && ("301" == a.dataNode._mode || "302" == a.dataNode._mode || "303" == a.dataNode._mode)) {
            if (n = a.itemTrs)
                for (j = 0; j < n.length; j++)
                    if ("none" != n[j].style.display && (o = n[j].itemInputs || n[j].itemLis || n[j].divSlider || n[j].itemSels || n[j].uploadFrame))
                        for (p = 0; p < o.length; p++)
                            ("TEXTAREA" == o[p].tagName || "SELECT" == o[p].tagName) && (q = trim(o[p].value),
                            q && (o[p].nextElementSibling,
                            o[p].nextElementSibling && "SELECT" == o[p].nextElementSibling.tagName ? ($(o[p].nextElementSibling).val("").change(),
                            txtChange(n[j])) : ($(o[p]).val("").change(),
                            txtChange(n[j]))))
        } else {
            if (a.dataNode && !c && "matrix" == a.dataNode._type && "201" == a.dataNode._mode)
                return !1;
            if (s = a.itemInputs || a.itemLis || a.itemTrs,
            !s)
                return !1;
            if ("1" == a.getAttribute("qingjing"))
                return !1;
            for ("1" == $(a).attr("maxdiff") && ($(a).find(".maxdiffWrap .jqChecked").removeClass("jqChecked"),
            $(a).find(".maxdiffWrap .maxdifftab").css({
                display: "none",
                left: "0px"
            }),
            $(a).find(".maxdiffWrap .maxdifftab").eq(0).show(),
            $(a).find(".maxdiffWrap .curmdsetindex").html(1),
            $(a).find("textarea").val("")),
            1 == a.getAttribute("pj") && ($(a).find(".evaluateTagDiv").hide(),
            $(a).find(".evaluateTagItem").removeClass("clicked"),
            $(a).find(".wjxui_limit_box").hide().find("textarea").val("")),
            a.hasClearHref = !1,
            a.clearHref && (a.clearHref.parentNode.removeChild(a.clearHref),
            a.clearHref = null),
            j = 0; j < s.length; j++)
                if (s[j].checked)
                    d = !0,
                    s[j].checked = !1,
                    t = getPreviousNode(s[j]),
                    t && "a" == t.tagName.toLowerCase() && (t.className = t.className.replace("jqChecked", ""));
                else if (0 == s[j].className.toLowerCase().indexOf("on"))
                    d = !0,
                    s[j].className = "off" + a.dataNode._mode;
                else if (s[j].parent && s[j].parent.holder)
                    d = !0,
                    s[j].parent.holder = 0;
                else if (s[j].divSlider && s[j].divSlider.value)
                    d = !0,
                    s[j].sliderImage.setValue(a.dataNode._minvalue, !0),
                    s[j].divSlider.value = void 0;
                else if ("TEXTAREA" == s[j].tagName && "" != trim(s[j].value))
                    d = !0,
                    s[j].value = "",
                    u = getNextNode(s[j]),
                    u && "SELECT" == u.tagName && window.$ && $(u).val("").change();
                else if ("text" == s[j].type && "" != trim(s[j].value))
                    d = !0,
                    s[j].value = "";
                else if (v = s[j].itemInputs || s[j].itemLis)
                    for (p = 0; p < v.length; p++)
                        v[p].checked ? (d = !0,
                        v[p].checked = !1,
                        t = getPreviousNode(v[p]),
                        t && "a" == t.tagName.toLowerCase() && (t.className = t.className.replace("jqChecked", ""))) : 0 == v[p].className.toLowerCase().indexOf("on") ? v[p].className = "off" + a.dataNode._mode : v[p].parent && v[p].parent.holder ? v[p].parent.holder = 0 : "201" == a.dataNode._mode && v[p].value && "" != v[p].value && (v[p].value = "");
            a.holder && (a.holder = 0),
            d && (a.dataNode._referedTopics && createItem(a),
            (relationQs[b] || ItemrelationQs[b]) && GetAnsewer(b, !0))
        }
        return "1" == $(a).attr("hasgs") && clickClearAsnwer(b),
        a.dataNode.quesAnswer = "",
        d
    }
}
function itemMouseOver() {
    var b, c, d, e, a = this.parent.parent || this.parent;
    if (a.dataNode.isRate) {
        if (b = a.dataNode._mode,
        2 == b || 3 == b || 7 == b)
            return;
        for (c = this.parent.itemLis.length,
        d = "on",
        e = 0; c > e; e++)
            d = e < this.value ? "on" : "off",
            this.parent.itemLis[e].className = d + a.dataNode._mode
    }
}
function itemMouseOut() {
    var b, c, d, e, f, a = this.parent.parent || this.parent;
    if (a.dataNode.isRate) {
        if (b = a.dataNode._mode,
        2 == b || 3 == b || 7 == b)
            return;
        for (c = this.parent.itemLis.length,
        d = "on",
        e = this.parent.holder || 0,
        f = 0; c > f; f++)
            d = e > f ? "on" : "off",
            this.parent.itemLis[f].className = d + a.dataNode._mode
    }
}
function itemLiClick() {
    var c, d, f, a = this.parent.parent || this.parent, b = a.dataNode;
    if (("matrix" != b._type || CheckMax(a, this.parentNode.parentNode, this, !0)) && (updateProgressBar(b),
    showEvaluate(a, this),
    b.isRate)) {
        for (this.parent.holder = this.value,
        c = "",
        ("2" == b._mode || "3" == b._mode || "7" == b._mode) && (c = " modekey ",
        $(this.parent.itemLis).removeClass("modekey on" + b._mode),
        $(this.parent.itemLis).addClass("off" + b._mode)),
        d = 0; d < this.value; d++)
            this.parent.itemLis[d].offsetWidth,
            this.parent.itemLis[d].className = "on" + b._mode + c;
        b._requir || a.hasClearHref || addClearHref(a),
        displayRelationRaidoCheck(a),
        jump(a, this),
        f = $(this.parent.itemLis[this.value - 1]).attr("title"),
        referTitle(a, f),
        0 == itempopUpindex && processSamecount(a, this),
        count360Val()
    }
}
function showEvaluate(a, b) {
    var d, c = 1 == a.getAttribute("pj");
    c && (d = $(b).attr("value"),
    d || (d = $(b).find("input[type='radio']").attr("value")),
    $(b).closest(".div_table_radio_question").find(".evaluateTagWrap").show().children(".evaluateTagDiv").eq(d - 1).show().siblings(".evaluateTagDiv").hide())
}
function checkedtag(a) {
    if ($(a).toggleClass("clicked"),
    $(a).hasClass("writeRvaluate")) {
        $(a).next(".wjxui_limit_box").toggle();
        var b = $(a).next(".wjxui_limit_box").find("textarea");
        b[0].bindevent || (b[0].bindevent = !0,
        b.on("input blur keydown", function() {
            var a = $.trim($(this).val()).length
              , b = $(this).attr("limit");
            a > b && ($(this).val($(this).val().substring(0, b)),
            a = b),
            $(this).closest(".wjxui_limit_box").find(".limit").text(a + "/" + b)
        }))
    }
}
function set_data_fromServer(a) {
    var c, d, f, g, h, i, j, k, l, m, n, o, b = new Array;
    for (b = a.split("\u00a4"),
    c = b[0],
    d = c.split("\u00a7"),
    hasTouPiao = "true" == d[0],
    useSelfTopic = "true" == d[1],
    f = 0,
    g = !0,
    h = 0,
    i = 1; i < b.length; i++)
        switch (j = new Object,
        k = b[i].split("\u00a7"),
        k[0]) {
        case "page":
            g ? g = !1 : f++,
            h = 0,
            "true" == k[2] ? pageHolder[f]._iszhenbie = !0 : "time" == k[2] && (pageHolder[f]._istimer = !0),
            pageHolder[f]._mintime = k[3] ? parseInt(k[3]) : "",
            pageHolder[f]._maxtime = k[4] ? parseInt(k[4]) : "";
            break;
        case "question":
            j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._height = trim(k[2]),
            j._maxword = trim(k[3]),
            j._requir = "true" == k[4] ? !0 : !1,
            j._norepeat = "true" == k[5] ? !0 : !1,
            j._hasjump = "true" == trim(k[6]) ? !0 : !1,
            j._anytimejumpto = trim(k[7]),
            j._verify = trim(k[8]),
            j._needOnly = "true" == k[9] ? !0 : !1,
            j._hasList = "true" == k[10] ? !0 : !1,
            j._listId = k[11] ? parseInt(k[11]) : -1,
            j._minword = k[12],
            pageHolder[f].questions[h].dataNode = j,
            h++;
            break;
        case "slider":
            j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._requir = "true" == k[2] ? !0 : !1,
            j._minvalue = trim(k[3]),
            j._maxvalue = trim(k[4]),
            j._hasjump = "true" == trim(k[5]) ? !0 : !1,
            j._anytimejumpto = trim(k[6]),
            pageHolder[f].questions[h].dataNode = j,
            h++;
            break;
        case "fileupload":
            j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._requir = "true" == k[2] ? !0 : !1,
            j._maxsize = trim(k[3]),
            j._ext = trim(k[4]),
            j._hasjump = "true" == trim(k[5]) ? !0 : !1,
            j._anytimejumpto = trim(k[6]),
            pageHolder[f].questions[h].dataNode = j,
            h++;
            break;
        case "gapfill":
            j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._requir = "true" == k[2] ? !0 : !1,
            j._gapcount = trim(k[3]),
            j._hasjump = "true" == trim(k[4]) ? !0 : !1,
            j._anytimejumpto = trim(k[5]),
            pageHolder[f].questions[h].dataNode = j,
            h++;
            break;
        case "sum":
            j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._requir = "true" == k[2] ? !0 : !1,
            j._total = parseInt(k[3]),
            j._hasjump = "true" == trim(k[4]) ? !0 : !1,
            j._anytimejumpto = trim(k[5]),
            j._referTopic = k[6],
            pageHolder[f].questions[h].dataNode = j,
            h++;
            break;
        case "radio":
        case "check":
        case "radio_down":
        case "matrix":
            for (j._type = trim(k[0]),
            j._topic = trim(k[1]),
            j._numperrow = trim(k[2]),
            j._hasvalue = "true" == k[3] ? !0 : !1,
            j._hasjump = "true" == k[4] ? !0 : !1,
            j._anytimejumpto = k[5],
            j._mode = trim(k[9]),
            "check" != k[0] ? (j._requir = "true" == k[6] ? !0 : !1,
            j.isSort = !1,
            j.isRate = isRadioRate(j._mode)) : (l = k[6].split(","),
            j._minValue = 0,
            j._maxValue = 0,
            j._requir = "true" == l[0] ? !0 : !1,
            "" != l[1] && (j._minValue = Number(l[1])),
            "" != l[2] && (j._maxValue = Number(l[2])),
            j.isSort = "" != j._mode && "0" != j._mode,
            j.isRate = !1),
            j._isTouPiao = "true" == k[7] ? !0 : !1,
            j._verify = trim(k[8]),
            j._referTopic = k[10],
            j._referedTopics = k[11],
            m = 12,
            j._select = new Array,
            n = m; n < k.length; n++)
                j._select[n - m] = new Object,
                o = k[n].split("\u3012"),
                j._select[n - m]._item_radio = "true" == o[0] ? !0 : !1,
                j._select[n - m]._item_value = trim(o[1]),
                j._select[n - m]._item_jump = trim(o[2]),
                j._select[n - m]._item_relation = trim(o[3]),
                j._select[n - m]._item_huchi = "true" == o[4],
                j._select[n - m]._item_huchi && (j.hasHuChi = !0),
                8 == o.length && (j._select[n - m]._item_shopunit = o[5],
                j._select[n - m]._item_limpur = o[6],
                j._select[n - m]._item_startpay = o[7]);
            pageHolder[f].questions[h].dataNode = j,
            h++
        }
}
function groupMutual(a, b) {
    var d, e, c = 1 == $("#divquestion" + a).attr("gm");
    c && (d = "li" == b.tagName ? b : $(b).closest("li")[0],
    e = $(d).parent().parent("li").find("li"),
    e.each(function(a, b) {
        var c = $(b).find("input[type='checkbox']");
        c.prop("checked") && d != b && (c.prop("checked", !1),
        c[0].itemText && (c[0].itemText.pvalue = c[0].itemText.value,
        c[0].itemText.value = "",
        c.siblings(".select2,.requireSpan").hide()),
        $(b).find(".jqCheckbox")[0].className = "jqCheckbox")
    }))
}
function show_pre_page() {
    var b, c, d, e, f, g;
    if (cur_page > 0 && pageHolder[cur_page - 1].hasExceedTime)
        return popUpAlert(wjxlang.tit_prevpage_timeup),
        void 0;
    for (showSubmitTable(!1),
    next_page.style.display = "",
    pageHolder[cur_page].style.display = "none",
    stopCurpageVideo(),
    cur_page--,
    window.isKaoShi,
    b = cur_page; b >= 0 && pageHolder[b].skipPage; b--)
        cur_page--;
    for (b = cur_page; b >= 0; b--) {
        for (c = pageHolder[b].questions,
        d = !1,
        e = 0; e < c.length; e++)
            if (f = c[e],
            "none" != f.style.display) {
                d = !0;
                break
            }
        if (g = !1,
        !d && pageHolder[b].cuts && pageHolder[b].cuts.length > 0)
            for (e = 0; e < pageHolder[b].cuts.length; e++)
                if ("none" != pageHolder[b].cuts[e].style.display) {
                    g = !0;
                    break
                }
        if (d || g || !(cur_page > 0))
            break;
        cur_page--
    }
    0 == cur_page && pre_page && (pre_page.style.display = "none",
    pre_page.disabled = !0),
    showDesc(),
    clockRecordTime(),
    pageHolder[cur_page].style.display = "",
    c = pageHolder[cur_page].questions,
    pageHolder[cur_page].scrollIntoView(),
    postHeight(),
    initSelelct2(),
    curPageHeatmapInit(),
    TotalValBoxInit()
}
function checkDisalbed() {
    if (curdiv = null,
    !submit_button.disabled)
        return !1;
    if (divMinTime.innerHTML) {
        var a = divMinTime.innerHTML.replace(/<.+?>/gim, "");
        popUpAlert(a)
    }
    return !0
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
function show_next_page(a) {
    if (next_page && (next_page.disabled = !0),
    window.hasHeatMap && !pageHolder[cur_page].hasGetHeatmapdata)
        return maxTimer && clearInterval(maxTimer),
        getHeatmapAns(function() {
            pageHolder[cur_page].hasGetHeatmapdata = !0,
            show_next_page(a)
        }),
        void 0;
    if (curdiv = null,
    1 != pubNoCheck) {
        if (1 != a && !validate())
            return isPub && null == pubNoCheck ? (maxCheatTimes > 0 && (fireConfirm = !0),
            confirmnew("\u60a8\u586b\u5199\u7684\u6570\u636e\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u7531\u4e8e\u60a8\u662f\u53d1\u5e03\u8005\uff0c\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u8df3\u5230\u4e0b\u4e00\u9875\uff08\u6b64\u6b21\u586b\u5199\u7684\u7b54\u5377\u5c06\u4e0d\u80fd\u63d0\u4ea4\uff09\uff0c\u662f\u5426\u786e\u5b9a\uff1f", function() {
                pubNoCheck = !0,
                document.getElementById("submittest_button").onclick = submit_button.onclick = function() {
                    checkDisalbed() || popUpAlert("\u7531\u4e8e\u60a8\u9009\u62e9\u4e86\u8df3\u8fc7\u4e86\u6570\u636e\u68c0\u67e5\uff0c\u6240\u4ee5\u6b64\u6b21\u586b\u5199\u7684\u7b54\u5377\u65e0\u6cd5\u63d0\u4ea4\uff01\u5982\u679c\u60a8\u9700\u8981\u63d0\u4ea4\u7b54\u5377\uff0c\u8bf7\u5237\u65b0\u6b64\u9875\u9762\u5e76\u518d\u6b21\u586b\u5199\u95ee\u5377\u3002")
                }
                ,
                to_next_page()
            }, function() {
                pubNoCheck = !1,
                next_page.disabled = !1
            }),
            void 0) : (next_page.disabled = !1,
            void 0)
    } else if (1 == pubNoCheck)
        return to_next_page(),
        void 0;
    needSubmitNotValid && "true" == isRunning && 1 != a ? submit(3) : pageHolder[cur_page]._iszhenbie && "true" == isRunning && 1 != a && !isAutoSubmit ? submit(3) : (to_next_page(),
    1 != a && allowSaveJoin && "true" == isRunning && guid && (saveNeedAlert = !1,
    submit(2)))
}
function stopCurpageVideo() {
    try {
        var a = $(pageHolder[cur_page]).find("iframe");
        a.each(function(a, b) {
            var c = $(b).attr("src");
            c.indexOf("WjxVideo.html") > -1 && $(b).attr("src", c)
        })
    } catch (b) {}
}
function to_next_page() {
    var a, c, d, f, g, h, i;
    for (0 == cur_page && nextPageAlertText && popUpAlert(nextPageAlertText),
    pre_page.style.display = displayPrevPage,
    pre_page.disabled = !1,
    clockRecordTime(!0),
    pageHolder[cur_page].style.display = "none",
    stopCurpageVideo(),
    cur_page++,
    next_page.disabled = !1,
    a = cur_page; a < pageHolder.length && pageHolder[a].skipPage; a++)
        cur_page++;
    for (window.isKaoShi,
    a = cur_page; a < pageHolder.length; a++) {
        for (c = pageHolder[a].questions,
        d = !1,
        f = 0; f < c.length; f++)
            if (g = c[f],
            "none" != g.style.display) {
                d = !0;
                break
            }
        if (h = !1,
        !d && pageHolder[a].cuts && pageHolder[a].cuts.length > 0)
            for (f = 0; f < pageHolder[a].cuts.length; f++)
                if ("none" != pageHolder[a].cuts[f].style.display) {
                    h = !0;
                    break
                }
        if (d || h || !(cur_page < pageHolder.length - 1))
            break;
        cur_page++
    }
    for (i = !0,
    a = cur_page + 1; a < pageHolder.length; a++)
        pageHolder[a].skipPage || (i = !1);
    cur_page >= pageHolder.length - 1 || i ? (next_page.style.display = "none",
    "1" != hasJoin && showSubmitTable(!0)) : cur_page < pageHolder.length - 1 && (next_page.style.display = ""),
    divMaxTime && (divMaxTime.style.display = "none"),
    showDesc(),
    window.divPromote && (divPromote.style.display = cur_page > 0 ? "none" : ""),
    clockRecordTime(),
    pageHolder[cur_page].style.display = "",
    window.monitoringEmbeddingIframe && monitoringEmbeddingIframe(),
    pageHolder[cur_page].scrollIntoView(),
    window.zunxiangAutoClick && window.zunxiangAutoClick(),
    showProgressBar(),
    processMinMax(),
    postHeight(),
    initSelelct2(),
    curPageHeatmapInit(),
    TotalValBoxInit()
}
function showDesc() {
    if (window.divDec) {
        var a = document.getElementById(window.divDec);
        a && (a.style.display = cur_page > 0 ? "none" : "")
    }
}
function processError(a, b, c) {
    var d, e, f;
    havereturn || (havereturn = !0,
    d = "",
    e = encodeURIComponent(answer_send),
    e.length > 1800 ? d = c + "&submitdata=exceed" : (d = c,
    -1 == c.indexOf("submitdata=") && (d += "&submitdata=" + e),
    -1 == c.indexOf("useget=") && (d += "&useget=1"),
    -1 == c.indexOf("iframe=") && (d += "&iframe=1")),
    errorTimes++,
    1 != errorTimes || hasSendErrorMail || (d += "&nsd=1",
    hasSendErrorMail = !0),
    f = document.createElement("img"),
    f.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/submiterror/track.gif?APIVersion=0.6.0&activity=" + activityId + "&starttime=" + encodeURIComponent(starttime) + "&status=" + a + "&errortimes=" + errorTimes + "&ua=" + encodeURIComponent(navigator.userAgent) + "&answer=" + encodeURIComponent(answer_send) + "&submittype=" + b + "&url=" + encodeURIComponent(c),
    PDF_launch("/wjx/join/jqerror.aspx?" + d + "&status=" + encodeURIComponent(a) + "&et=" + errorTimes, 400, 120),
    refresh_validate(),
    submit_tip.style.display = "none",
    submit_div.style.display = "block"),
    prevsaveanswer = "",
    window.submitWithGet || (window.submitWithGet = 1),
    timeoutTimer && clearTimeout(timeoutTimer)
}
function submit(a) {
    var b, c, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
    var delta = parseInt(prompt("输入时长（毫秒）"))
    var date = new Date(Date.parse(new Date) - delta)
    if (2 == a || validate()) {
        if (1 == a) {
            if (window.useAliVerify && !isCaptchaValid)
                return document.getElementById("captcha").style.display = "",
                !1;
            hasAutoSubmit = !0
        }
        if (submit_tip.innerHTML = validate_info_submit2,
        b = 1,
        0 == a ? PromoteUser("\u6b63\u5728\u5904\u7406\uff0c\u8bf7\u7a0d\u5019...", 3e3, !0) : 2 == a ? (b = cur_page,
        hlv = "1") : 3 == a ? PromoteUser(wjxlang.tit_validata, 3e3, !0) : (new_submit_tipshow(validate_info_submit2),
        submit_div.style.display = "none"),
        needCheckLeave = !1,
        clockRecordTime(!0),
        answer_send = sent_to_answer(a),
        2 == a && prevsaveanswer == answer_send)
            return c = wjxlang.tit_saved,
            spanSave && (spanSave.innerHTML = c),
            hrefSave && (hrefSave.style.display = "none"),
            void 0;
        if (d = getXmlHttp(),
        d.onreadystatechange = function() {
            if (4 == d.readyState) {
                clearTimeout(timeoutTimer);
                var b = d.status;
                200 == b ? (afterSubmit(d.responseText, a),
                prevsaveanswer = answer_send) : processError(b, a, e)
            }
        }
        ,
        e = "curID=" + activityId,
        window.shortAid && (e = "shortid=" + shortAid),
        e += "&submittype=" + a + "&t=" + date.valueOf(),
        source && (e += "&source=" + encodeURIComponent(source)),
        window.cats && (e += "&cats=" + cats + "&casign=" + encodeURIComponent(casign)),
        window.udsid && (e += "&udsid=" + window.udsid),
        window.fromsour && (e += "&fromsour=" + window.fromsour),
        nvvv && (e += "&nvvv=1"),
        window.wxUserId && (e += "&wxUserId=" + window.wxUserId),
        window.cProvince && (e += "&cp=" + encodeURIComponent(cProvince.replace("'", "")) + "&cc=" + encodeURIComponent(cCity.replace("'", "")) + "&ci=" + escape(cIp),
        0 == jiFen)) {
            f = cProvince + "," + cCity;
            try {
                setCookie("ip_" + cIp, f, null, "/", "", null)
            } catch (g) {}
        }
        for (hasTouPiao && (e += "&toupiao=t"),
        jiFen > 0 && (e += "&jf=" + jiFen),
        randomparm && (e += "&ranparm=" + randomparm),
        inviteid && (e += "&inviteid=" + encodeURIComponent(inviteid)),
        SJBack && (e += "&sjback=1"),
        window.cpid && (e += "&cpid=" + cpid),
        2 == a && (e += "&lastpage=" + b + "&lastq=" + MaxTopic),
        3 == a && (e += "&zbp=" + (cur_page + 1),
        needSubmitNotValid && (e += "&nsnv=1")),
        hasJoin && 0 != a && (e += "&nfjoinid=" + nfjoinid),
        window.sojumpParm && (h = window.sojumpParm,
        window.hasEncode || (h = encodeURIComponent(h)),
        e += "&sojumpparm=" + h),
        window.hasMaxdiff && (e += "&maxdiff=1"),
        window.endTs && (e += "&endts=" + endTs),
        window.parmsign && (e += "&parmsign=" + encodeURIComponent(parmsign)),
        window.qdataList && qdataList.length > 0 && (e += "&aqsj=" + encodeURIComponent(qdataList.join(""))),
        window.useAliVerify && (e += "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene),
        verifymob && (e += "&verifymob=" + verifymob),
        e += "&starttime=" + encodeURIComponent(date.toLocaleString()),
        initstime != starttime && (e += "&initst=" + encodeURIComponent(date.toLocaleString())),
        guid && (e += "&emailguid=" + guid),
        window.sjUser && (e += "&sjUser=" + encodeURIComponent(sjUser)),
        window.sjts && (e += "&sjts=" + sjts),
        window.sjsign && (e += "&sjsign=" + encodeURIComponent(sjsign)),
        window.FromSj && (e += "&fromsj=1"),
        window.sourcelink && window.outuser && (e += window.sourcelink,
        window.outsign && (e += "&outsign=" + encodeURIComponent(outsign))),
        e += "&ktimes=" + /*ktimes*/
        Math.floor(Math.random() * 51 + 300),
        window.mobileRnum && (e += "&m=" + window.mobileRnum),
        window.rndnum && (e += "&rn=" + encodeURIComponent(rndnum)),
        rName && (i = rName.replace("(", "\uff08").replace(")", "\uff09"),
        setCookie("jcn" + activityId, i, getExpDate(0, 0, 30), "/", "", null),
        e += "&jcn=" + encodeURIComponent(dataenc(i))),
        window.relts && (e += "&relts=" + relts),
        window.relusername && (e += "&relusername=" + encodeURIComponent(relusername)),
        window.relsign && (e += "&relsign=" + encodeURIComponent(relsign)),
        window.relrealname && (e += "&relrealname=" + encodeURIComponent(relrealname)),
        window.reldept && (e += "&reldept=" + encodeURIComponent(reldept)),
        window.relext && (e += "&relext=" + encodeURIComponent(relext)),
        Password && (e += "&psd=" + encodeURIComponent(Password)),
        PasswordExt && (e += "&pwdext=" + encodeURIComponent(PasswordExt)),
        hasMaxtime && (e += "&hmt=1"),
        window.amt && (e += "&amt=" + amt),
        window.isVip && (e += "&vpsiu=1"),
        window.jqParam && (e += "&jqpram=" + encodeURIComponent(jqParam)),
        e += "&hlv=" + hlv,
        sourceDetail && (e += "&sd=" + sourceDetail),
        window.access_token && window.openid && (e += "&access_token=" + encodeURIComponent(access_token) + "&qqopenid=" + encodeURIComponent(openid)),
        window.initMaxSurveyTime && (e += "&mst=" + window.initMaxSurveyTime),
        shopHT.length > 0 && (j = document.getElementById("shopcart"),
        j && "none" != j.style.display && (e += "&ishop=1")),
        modata && setCookie("jcm" + activityId, modata, getExpDate(0, 0, 30), "/", "", null),
        window.jqnonce && (e += "&jqnonce=" + encodeURIComponent(window.jqnonce),
        k = dataenc(window.jqnonce),
        e += "&jqsign=" + encodeURIComponent(k)),
        GetJpMatch(),
        window.newAward ? (jpWayText && (e += "&jwt=" + encodeURIComponent(jpWayText)),
        e += "&nw=" + encodeURIComponent(window.newAward),
        jpMatchId && (e += "&jpm=" + encodeURIComponent(jpMatchId))) : jpMatchId && (e += "&jpm=" + encodeURIComponent(jpMatchId)),
        l = encodeURIComponent(answer_send),
        m = !1,
        n = "",
        o = "",
        p = 0; p < trapHolder.length; p++) {
            for (n = "",
            q = trapHolder[p].itemInputs,
            r = new Array,
            s = 0; s < q.length; s++)
                q[s].checked && r.push(q[s].value);
            for (r.sort(function(a, b) {
                return a - b
            }),
            s = 0; s < r.length; s++)
                n += r[s] + ",";
            if (t = trapHolder[p].getAttribute("trapanswer"),
            n && t && -1 == n.indexOf(t)) {
                m = !0,
                o = trapHolder[p].getAttribute("tikuindex");
                break
            }
        }
        if (m && (e += "&ite=1&ics=" + encodeURIComponent(o + ";" + n)),
        u = !1,
        v = "post",
        w = window.getMaxWidth || 1800,
        window.submitWithGet && l.length <= w && (u = !0),
        u ? (e += "&submitdata=" + l,
        e += "&useget=1",
        v = "get") : window.submitWithGet && (window.postIframe = 1),
        window.refDepartment && (e += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
        window.refUserId && (e += "&ruserid=" + encodeURIComponent(refUserIdVal)),
        window.deptId && window.corpId && (e += "&deptid=" + deptId + "&corpid=" + corpId),
        x = "/joinnew/processjq.ashx?" + e,
        d.open(v, x, !1),
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        havereturn = !1,
        window.postIframe ? postWithIframe(x, a) : u ? 2 == errorTimes || window.getWithIframe ? GetWithIframe(x, a, e) : (1 == a && (timeoutTimer = setTimeout(function() {
            processError("ajaxget", a, e)
        }, 2e4)),
        d.send(null)) : (1 == a && (timeoutTimer = setTimeout(function() {
            processError("ajaxpost", a, e)
        }, 2e4)),
        d.send("submitdata=" + l)),
        window.dealQuestionType) {
            if (2 == a)
                return dealQuestionType({
                    event: {},
                    questionId: "",
                    eventType: "save",
                    location: "save"
                }),
                void 0;
            dealQuestionType({
                event: {},
                questionId: "",
                eventType: "submitted",
                location: "sumbit"
            })
        }
    }
}
function postWithIframe(a, b, c) {
    var d, e;
    1 == b && (timeoutTimer = setTimeout(function() {
        processError(answer_send, "postiframe", b, c)
    }, 2e4)),
    d = document.createElement("div"),
    d.style.display = "none",
    d.innerHTML = "<iframe id='mainframe' name='mainframe' style='display:none;' > </iframe><form target='mainframe' id='frameform' action='' method='post' enctype='application/x-www-form-urlencoded'><input  value='' id='submitdata' name='submitdata' type='hidden'><input type='submit' value='\u63d0\u4ea4' ></form>",
    document.body.appendChild(d),
    document.getElementById("submitdata").value = answer_send,
    e = document.getElementById("frameform"),
    e.action = a + "&iframe=1",
    e.submit()
}
function GetWithIframe(a, b, c) {
    var d, e, f;
    1 == b && (timeoutTimer = setTimeout(function() {
        processError(answer_send, "getiframe", b, c)
    }, 2e4)),
    d = document.createElement("div"),
    d.style.display = "none",
    e = a + "&iframe=1",
    d.innerHTML = "<iframe id='mainframe' name='mainframe'> </iframe>",
    document.body.appendChild(d),
    f = document.getElementById("mainframe"),
    f.src = e
}
function getExpDate(a, b, c) {
    var d = new Date;
    return "number" == typeof a && "number" == typeof b && "number" == typeof b ? (d.setDate(d.getDate() + parseInt(a)),
    d.setHours(d.getHours() + parseInt(b)),
    d.setMinutes(d.getMinutes() + parseInt(c)),
    d.toGMTString()) : void 0
}
function processRedirect(a) {
    var d, f, g, b = a[1];
    a[3] || "",
    d = a[2],
    a[4] || "",
    f = a[5] || "",
    b && "?" != b[0] ? -1 == b.toLowerCase().indexOf("http://") && -1 == b.toLowerCase().indexOf("https://") && -1 == b.toLowerCase().indexOf("hap://") && (b = "http://" + b) : b = window.location.href,
    g = 1e3,
    d && "\u4e0d\u63d0\u793a" != d && 0 == window.jiFenBao && (PromoteUser(d, 5e3, !0),
    g = 2e3);
    try {
        setCookie(activityId + "_save", "", getExpDate(-1, 0, 0), "/", "", null),
        maxCheatTimes > 0 && setCookie(activityId + "_" + "curCheatTime", 0, getExpDate(-1, 0, 0), "/", "", null)
    } catch (h) {}
    -1 == b.toLowerCase().indexOf("hap://") && f ? openPostWindow(b, f, "_self") : setTimeout(function() {
        location.replace(b)
    }, g)
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
    $(d).submit(),
    document.body.removeChild(d)
}
function addtolog() {
    var b = document.createElement("img")
      , c = window.isVip ? window.isVip : 0
      , d = window.cqType || 0
      , e = window.emUserName || "";
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityfinish/track.gif?APIVersion=0.6.0&activity=" + activityId + "&source=0&weixin=0&vip=" + c + "&qtype=" + d + "&name=" + encodeURIComponent(e)
}
function addtoactivitystat() {
    var a = document.createElement("img");
    a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&type=rel"
}
function addtoForein() {
    if (window.curProvince && window.survey) {
        var a = document.createElement("img");
        window.LogStoreLocal ? 1 : 0,
        a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/foreinvisit/track.gif?APIVersion=0.6.0&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(document.title) + "&p=" + encodeURIComponent(curProvince) + "&c=" + encodeURIComponent(curCity) + "&ip=" + encodeURIComponent(curIp) + "&fh=" + (window.curFuHe || 0) + "&cr=" + (window.curCheckResult || 0)
    }
}
function addtoHistory() {
    var a, b;
    window.addtoHis && window.survey && (a = window.LogStoreLocal ? 1 : 0,
    b = document.createElement("img"),
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityhistory/track.gif?APIVersion=0.6.0&activity=" + activityId + "&forein=" + (window.isForein || 0) + "&ip=" + encodeURIComponent(window.curIp || "") + "&test=" + a)
}
function putWebTracking(a, b, c, d) {
    var e = JSON.stringify({
        __logs__: [{
            activity: activityId.toString(),
            index: d,
            url: a,
            content: b,
            status: "success" == c ? "\u6210\u529f" : "\u5931\u8d25",
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
function afterSubmit(a, b) {
    var c, d, e, f, g, j, k, l, m, n, o, p, q, r, s, t, u;
    if (havereturn = !0,
    errorTimes = 0,
    document.getElementById("PDF_bg_chezchenz") && PDF_close(),
    clearTimeout(timeoutTimer),
    c = a.split("\u3012"),
    d = c[0],
    e = !1,
    0 == b) {
        if (14 == d)
            return previewopen(),
            void 0;
        popUpAlert("\u8bf7\u70b9\u51fb\u9884\u89c8\u7b54\u5377\u6309\u94ae")
    } else if (2 == b) {
        if (14 == d) {
            if (f = c[1],
            g = window.location.href.toLowerCase(),
            g = g.indexOf("?") > -1 ? g.indexOf("sg=") > -1 ? g.replace(/sg=([\w|\-]+)/g, "sg=" + f) : g + "&sg=" + f : g + "?sg=" + f,
            hrefSave && (getTop(hrefSave),
            spanSave || (divSaveText.innerHTML = "",
            spanSave = document.createElement("div"),
            divSaveText.appendChild(spanSave)),
            spanSave.innerHTML = wjxlang.tit_saved,
            totalSaveSec = 1,
            spanSave.style.display = "",
            hrefSave.style.display = "none",
            submit_tip.style.display = "none",
            clearInterval(changeInterval),
            changeInterval = setInterval(function() {
                var a = document.getElementById("saveData");
                a && (totalSaveSec++,
                a.innerHTML = totalSaveSec,
                totalSaveSec > 60 && (a.innerHTML = parseInt(totalSaveSec / 60),
                document.getElementById("divUnit").innerHTML = "\u5206"))
            }, 1e3)),
            window.Ischangeans || (clearInterval(saveInterval),
            saveInterval = setInterval(function() {
                submit(2)
            }, 6e4)),
            !window.saveGuid)
                try {
                    setCookie(activityId + "_save", f, getExpDate(30, 0, 0), "/", "", null)
                } catch (i) {}
            return c[2] && (nfjoinid = c[2],
            hasJoin = "2"),
            c[3] && (starttime = c[3]),
            changeSave && (g = window.location.href,
            g += -1 == g.indexOf("?") ? "?csave=1" : "&csave=1",
            window.location = g),
            void 0
        }
    } else if (3 == b) {
        if (12 == d)
            return randomparm = c[1],
            PromoteUser("", 1, !0),
            to_next_page(),
            void 0;
        if (13 == d)
            return setCookie("join_" + activityId, "1", getExpDate(0, 0, 30), "/", "", null),
            j = c[1],
            k = c[2] || "0",
            g = "/wjx/join/complete.aspx?q=" + activityId + "&s=" + simple + "&joinid=" + j,
            window.sojumpParm && (g += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
            guid && (g += "&guid=" + guid),
            "t" == promoteSource && (g += "&ps=" + promoteSource),
            g += "&v=" + k,
            window.sjUser && (g += "&sjUser=" + encodeURIComponent(sjUser)),
            window.FromSj && (g += "&fromsj=1"),
            c[3] && (g += "&comsign=" + encodeURIComponent(c[3])),
            location.replace(g),
            void 0;
        if (11 == d)
            return processRedirect(c),
            void 0;
        if (5 == d)
            return popUpAlert(c[1]),
            submit_tip.innerHTML = c[1],
            void 0;
        if (c[2])
            return popUpAlert(c[2]),
            submit_tip.innerHTML = c[2],
            next_page && (next_page.disabled = !1),
            void 0
    } else {
        if (10 == d) {
            window.localStorage && 0 == window.informedShowTimes && localStorage.removeItem("ain" + activityId),
            g = c[1],
            g += "&s=" + simple,
            "t" == promoteSource && (g += "&ps=" + promoteSource),
            qwidth && (g += "&width=" + qwidth),
            inviteid && (g += "&inviteid=" + inviteid),
            source && source.length < 20 && (g += "&source=" + encodeURIComponent(source)),
            guid && (g += "&guid=" + guid),
            window.sjUser && (g += "&sjUser=" + encodeURIComponent(sjUser)),
            window.FromSj && (g += "&fromsj=1"),
            window.needJQJiang && (g += "&njqj=1"),
            window.HasJiFenBao && (g += "&hjfb=1"),
            startAge && (g += "&sa=" + encodeURIComponent(startAge)),
            endAge && (g += "&ea=" + encodeURIComponent(endAge)),
            startIncome && (g += "&si=" + encodeURIComponent(startIncome)),
            endIncome && (g += "&ei=" + encodeURIComponent(endIncome)),
            window.refDepartment && (g += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
            window.refUserId && (g += "&ruserid=" + encodeURIComponent(window.refUserIdVal)),
            gender && (g += "&ge=" + gender),
            marriage && (g += "&ma=" + marriage),
            education && (g += "&edu=" + education),
            jpMatchId && (g += "&jpm=" + jpMatchId),
            window.sourcename && (g += "&souname=" + encodeURIComponent(sourcename)),
            window.sojumpParm && (g += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
            shopHT.length > 0 && (l = document.getElementById("shopcart"),
            l && "none" != l.style.display && (g += "&ishop=1")),
            window.newAward && (g += "&nw=" + encodeURIComponent(window.newAward)),
            setCookie("join_" + activityId, "1", getExpDate(0, 0, 30), "/", "", null);
            try {
                setCookie(activityId + "_save", "", getExpDate(-1, 0, 0), "/", "", null),
                maxCheatTimes > 0 && setCookie(activityId + "_" + "curCheatTime", 0, getExpDate(-1, 0, 0), "/", "", null)
            } catch (i) {}
            if (isEdtData) {
                if (window.Ischangeans) {
                    if (window.IsEditSave)
                        return PromoteUser("\u6210\u529f\u4fdd\u5b58\u6570\u636e\uff01", 0, !0),
                        window.IsEditSave = !1,
                        void 0;
                    g = "/resultquery.aspx?activity=" + activityId,
                    window.isActivityRel && (g = "/user/joinrelquery.aspx?activity=" + activityId),
                    setTimeout(function() {
                        location.replace(g)
                    }, 1500)
                } else
                    PromoteUser("\u6210\u529f\u4fdd\u5b58\u6570\u636e\uff01", 0, !0);
                return
            }
            return m = wjxlang.tit_submit_success,
            new_submit_tipshow(m, 3e3, !0),
            addtolog(g),
            process360Jump(),
            c[3] && (n = c[3] || "",
            o = c[4] || "",
            p = g.match(/&sojumpindex=(\d*)&/)[1],
            doAjaxPost(n, o, p)),
            setTimeout(function() {
                location.replace(g)
            }, 1500),
            void 0
        }
        if (11 == d)
            return window.localStorage && 0 == window.informedShowTimes && localStorage.removeItem("ain" + activityId),
            addtolog(),
            process360Jump(),
            c[6] && (q = c[6] || "",
            o = c[5] || "",
            r = c[3] || "",
            doAjaxPost(q, o, r)),
            setTimeout(function() {
                processRedirect(c)
            }, 1500),
            void 0;
        if (9 == d || 16 == d || 23 == d) {
            if (s = parseInt(c[1]),
            t = s + 1 + "",
            u = c[2] || wjxlang.submit_error,
            -1 == s)
                return popUpAlert(u),
                submit_tip.innerHTML = u,
                void 0;
            1 == pageHolder.length && pageHolder[0].questions[s] ? (popUpAlert(u),
            pageHolder[0].questions[s].scrollIntoView(),
            $("#new_submit_tipcolor").hide()) : questionsObject[t] ? (writeError(questionsObject[t], u, 3e3),
            popUpAlert(u),
            questionsObject[t].scrollIntoView(),
            $("#new_submit_tipcolor").hide()) : (popUpAlert(wjxlang.submit_error),
            $("#new_submit_tipcolor").hide())
        } else if (7 == d)
            /*popUpAlert(c[1]),*/
            e = !0,
            $("#new_submit_tipcolor").hide();
        else if (2 == d)
            popUpAlert(c[1]),
            window.submitWithGet = 1,
            $("#new_submit_tipcolor").hide();
        else {
            if (17 == d)
                return popUpAlert(wjxlang.submit_password_repeat),
                submit(2),
                void 0;
            if (4 == d)
                return popUpAlert(c[1]),
                changeSave = !0,
                submit(2),
                void 0;
            if (5 == d || 19 == d)
                return popUpAlert(c[1]),
                submit_tip.innerHTML = c[1],
                void 0;
            if (33 == d)
                return popUpAlert(c[1]),
                window.location.href = window.location.href,
                void 0;
            if (34 == d)
                return popUpAlert(wjxlang.submit_password_repeat_hassuiji),
                window.location.href = window.location.href,
                void 0;
            if (35 == d)
                return popUpAlert("\u95ee\u5377\u4e0d\u80fd\u4f7f\u7528\u6570\u5b57\u94fe\u63a5"),
                submit_tip.innerHTML = "\u95ee\u5377\u4e0d\u80fd\u4f7f\u7528\u6570\u5b57\u94fe\u63a5",
                void 0;
            22 == d ? (/*popUpAlert(wjxlang.submit_need_validate),*/
            nvvv = 1,
            e = !0,
            $("#new_submit_tipcolor").hide()) : popUpAlert(c[1] || c[0])
        }
    }
    refresh_validate(e),
    submit_tip.style.display = "none",
    submit_div.style.display = "block"
}
function doAjaxPost(a, b, c) {
    if (a) {
        a = a.split("\u00a7");
        for (var d = 0; d < a.length; d++)
            !function(a, b, c) {
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
function process360Jump() {
    var b, c;
    window.oneneedcontcp && (document.getElementById("confirm_box2"),
    b = window.location.href,
    -1 == b.indexOf("cpid=") && (b += -1 != b.indexOf("?") ? "&cpid=" + window.cpid : "?cpid=" + window.cpid),
    c = wjxlang.tit_360people,
    1 == window.oneDept && (c = wjxlang.tit_360depart),
    confirm(c) && (window.location = b))
}
function getRname(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m;
    if (!(rName && hasMatchName || b.getAttribute("ceshi")))
        if ("question" == a._type)
            l = b.divTitle.innerHTML,
            (l.indexOf("\u59d3\u540d") > -1 || l.indexOf("\u540d\u5b57") > -1) && (hasMatchName = !0),
            ("\u59d3\u540d" == a._verify || hasMatchName) && (a._height > 1 && l.length > 5 || (m = b.itemTextarea || b.itemInputs[0],
            m && (rName = m.value),
            rName || (hasMatchName = !1)));
        else if ("matrix" == a._type && "201" == a._mode) {
            for (c = b.getElementsByTagName("th"),
            d = 0; d < c.length; d++)
                if (c[d].innerHTML.indexOf("\u59d3\u540d") > -1 || c[d].innerHTML.indexOf("\u540d\u5b57") > -1 || c[d].innerHTML.indexOf("\u59d3") > -1 && c[d].innerHTML.indexOf("\u540d") > -1) {
                    e = c[d].parentNode.getElementsByTagName("textarea"),
                    e[0] && e[0].value && (rName = e[0].value,
                    hasMatchName = !0);
                    break
                }
        } else if ("gapfill" == a._type && (f = b.innerHTML.indexOf("\u59d3\u540d"),
        g = b.innerHTML.indexOf("\u59d3"),
        h = b.innerHTML.indexOf("\u540d"),
        f > -1 || g > -1 && h > -1))
            for (-1 == f && (f = h),
            i = b.getElementsByTagName("input"),
            d = 0; d < i.length; d++)
                if (j = i[d].id,
                k = b.innerHTML.indexOf(j),
                k > f && i[d].value) {
                    rName = i[d].value,
                    hasMatchName = !0;
                    break
                }
}
function getM(a, b) {
    var c, d, e, f, g;
    if (!modata)
        if (c = /^\d{11}$/,
        "matrix" == a._type && "201" == a._mode && b.itemTrs) {
            for (d = 0; d < b.itemTrs.length; d++)
                if (e = b.itemTrs[d].getAttribute("itemverify"),
                "\u624b\u673a" == e && (f = b.itemTrs[d].getElementsByTagName("textarea")[0],
                c.exec(f.value)))
                    return modata = f.value,
                    void 0
        } else
            "question" == a._type && (g = b.divTitle.innerHTML,
            ("\u624b\u673a" == a._verify || -1 != g.indexOf("\u624b\u673a") || -1 != g.indexOf("\u8054\u7cfb\u65b9\u5f0f")) && (f = b.itemTextarea || b.itemInputs[0],
            f && c.exec(f.value) && (modata = f.value)))
}
function getRefUsername(a, b) {
    var c, d, e;
    if (void 0 != refUsername && !b.getAttribute("ceshi")) {
        if ("question" != a._type)
            return "matrix" == a._type && "201" == a._mode && (c = refUsername - 1e4 * a._topic - 1,
            d = b.getElementsByTagName("textarea"),
            d[c] && (refUsernameVal = d[c].value)),
            void 0;
        e = b.itemTextarea || b.itemInputs[0],
        e && (refUsernameVal = e.value)
    }
}
function getRefUserId(a, b) {
    var c, d, e;
    if (void 0 != refUserId && !b.getAttribute("ceshi")) {
        if ("question" != a._type)
            return "matrix" == a._type && "201" == a._mode && (c = refUserId - 1e4 * a._topic - 1,
            d = b.getElementsByTagName("textarea"),
            d[c] && (refUserIdVal = d[c].value)),
            void 0;
        e = b.itemTextarea || b.itemInputs[0],
        e && (refUserIdVal = e.value)
    }
}
function getRefDepartment(a, b) {
    var c, d, e, f, g, h, i;
    if (void 0 != refDepartment && !b.getAttribute("ceshi"))
        if ("question" == a._type)
            i = b.itemTextarea || b.itemInputs[0],
            i && (refDepartmentVal = i.value);
        else if ("matrix" == a._type && "201" == a._mode)
            c = refDepartment - 1e4 * a._topic - 1,
            d = b.getElementsByTagName("textarea"),
            d[c] && (refDepartmentVal = d[c].value);
        else if ("radio" == a._type) {
            for (e = 0; e < b.itemInputs.length; e++)
                if (b.itemInputs[e].checked) {
                    f = getNextNode(b.itemInputs[e]),
                    g = getInnerText(f),
                    refDepartmentVal = g;
                    break
                }
        } else
            "radio_down" == a._type && (h = b.getElementsByTagName("select"),
            h && (refDepartmentVal = h[0].options[h[0].selectedIndex].text))
}
function checkJpMatch(a) {
    var b, c, d;
    if (!a.hasCheck) {
        if (a.hasCheck = !0,
        b = getInnerText(a.divTitle),
        "question" == a.dataNode._type && quarray)
            for (c = 0; c < quarray.length; c++)
                if (b.indexOf(quarray[c]) > -1) {
                    d = document.createElement("img"),
                    d.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&q=" + a.dataNode._topic + "&type=npl&jointimes=" + (window.currJT || 0),
                    quResult.push(a);
                    break
                }
        0 == newAward && checkQuesMatch(b, a)
    }
}
function getInnerText(a) {
    if (!a)
        return "";
    var b = "string" == typeof a.textContent ? a.textContent : a.innerText;
    return b || ""
}
function getKsAnswer(a) {
    return a ? (a = a.dbc2sbc(),
    a = a.replace(/\</g, "\uff1c").replace(/\>/g, "\uff1e").replace(/\&/g, "\uff06").replace(/\!/g, "\uff01").replace(/\^/g, "\uff3e").replace(/\$/g, "\uff04").replace(/\}/g, "\uff5d")) : ""
}
function sent_to_answer(a) {
    var d, e, f, g, h, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, b = new Array, c = 0;
    try {
        if (1 == a)
            for (d = 0; d < quResult.length; d++)
                e = quResult[d].itemTextarea,
                f = trim(e.value),
                !f || f.length < 2 || (g = document.createElement("img"),
                h = getInnerText(quResult[d].divTitle),
                g.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitynlp/track.gif?APIVersion=0.6.0&activity=" + activityId + "&title=" + encodeURIComponent(document.title) + "&qtitle=" + encodeURIComponent(h) + "&q=" + quResult[d].dataNode._topic + "&text=" + encodeURIComponent(f) + "&jointimes=" + (window.currJT || 0))
    } catch (i) {}
    for (j = new Object,
    k = 1,
    l = 0; l < pageHolder.length; l++)
        for (m = pageHolder[l].questions,
        pageHolder[l]._maxtime > 0,
        d = 0; d < m.length; d++) {
            if (o = m[d].dataNode,
            p = "none" == m[d].style.display.toLowerCase() || m[d].dataNode._referTopic && !m[d].displayContent && !window.cepingCandidate || pageHolder[l].skipPage,
            "-1" == $(m[d]).attr("relation") && (p = !1),
            m[d].isCepingQ && (p = !1),
            q = new Object,
            q._topic = o._topic,
            q._value = "",
            b[c++] = q,
            1 == a)
                try {
                    getAgeGender(o, m[d]),
                    1 == newAward && checkQuesMatch(m[d]),
                    window.refUsername ? 1e4 * q._topic == refUsername - refUsername % 1e4 && (getRefUsername(o, m[d]),
                    rName = refUsernameVal) : (getRname(o, m[d]),
                    rName.length > 30 && (rName = "")),
                    window.refUserId && 1e4 * q._topic == refUserId - refUserId % 1e4 && getRefUserId(o, m[d]),
                    window.refDepartment && 1e4 * q._topic == refDepartment - refDepartment % 1e4 && getRefDepartment(o, m[d]),
                    getM(o, m[d])
                } catch (i) {}
            switch (window.isKaoShi && "1" != m[d].getAttribute("nc") && (j[o._topic] = k,
            k++),
            o._type) {
            case "question":
                if (p) {
                    q._value = "(\u8df3\u8fc7)",
                    "1" == m[d].getAttribute("hrq") && (q._value = "\u2163");
                    continue
                }
                r = m[d].itemTextarea || m[d].itemInputs[0],
                f = r.value || "",
                f && r.lnglat && (f = f + "[" + r.lnglat + "]"),
                "1" == m[d].getAttribute("ceshi") && (f = getKsAnswer(f)),
                q._value = replace_specialChar(f);
                break;
            case "gapfill":
                if (p && "1" == m[d].getAttribute("hrq")) {
                    q._value = "\u2163";
                    continue
                }
                for (s = m[d].gapFills,
                t = "1" == m[d].getAttribute("ceshi"),
                u = 0; u < s.length; u++)
                    if (u > 0 && (q._value += spChars[2]),
                    p)
                        q._value += "(\u8df3\u8fc7)";
                    else {
                        if (f = trim(s[u].value.substring(0, 3e3)),
                        f && s[u].lnglat && (f = f + "[" + s[u].lnglat + "]"),
                        t) {
                            f = getKsAnswer(f);
                            try {
                                v = m[d].getElementsByTagName("select").length > 0,
                                v || (f = f.replace(/,/g, "\uff0c"))
                            } catch (i) {}
                        }
                        q._value += replace_specialChar(f)
                    }
                break;
            case "slider":
                if (w = m[d].divSlider.value,
                p) {
                    q._value = "(\u8df3\u8fc7)";
                    continue
                }
                q._value = void 0 == w ? "" : w;
                break;
            case "fileupload":
                if (x = m[d].fileName,
                p) {
                    q._value = "(\u8df3\u8fc7)";
                    continue
                }
                q._value = x || "";
                break;
            case "sum":
                for (y = m[d].itemInputs,
                ub = y.length,
                u = 0; ub > u; u++)
                    z = y[u],
                    A = 0 == m[d].relSum ? trim(z.value) || "0" : trim(z.value),
                    "none" == m[d].itemTrs[u].style.display && (A = "\u2163"),
                    u > 0 && (q._value += spChars[2]),
                    B = m[d].itemTrs[u].getAttribute("rowid"),
                    B && (q._value += B + spChars[4]),
                    q._value += A;
                if (p)
                    for (C = 0; ub > C; )
                        0 == C ? q._value = "(\u8df3\u8fc7)" : q._value += spChars[2] + "(\u8df3\u8fc7)",
                        C++;
                break;
            case "radio":
            case "check":
                if (o.isSort) {
                    for (D = new Array,
                    u = 0; u < m[d].itemInputs.length; u++)
                        "checkbox" == m[d].itemInputs[u].type && (E = m[d].itemInputs[u].parentNode,
                        F = E.getElementsByTagName("span")[0].innerHTML,
                        "none" == E.parentNode.style.display && (F = ""),
                        G = new Object,
                        G.sIndex = F,
                        H = m[d].itemInputs[u].value,
                        p ? H = "-3" : F || (H = "-2"),
                        G.val = H,
                        m[d].itemInputs[u].checked && m[d].itemInputs[u].itemText && (I = m[d].itemInputs[u].itemText.value,
                        I == defaultOtherText && (I = ""),
                        G.val += spChars[2] + replace_specialChar(trim(I.substring(0, 3e3)))),
                        G.sIndex || (G.sIndex = 1e4),
                        D.push(G));
                    for (D.sort(function(a, b) {
                        return a.sIndex - b.sIndex
                    }),
                    J = 0; J < D.length; J++)
                        J > 0 && (q._value += ","),
                        q._value += D[J].val;
                    continue
                }
                if (p) {
                    q._value = "-3",
                    "1" == m[d].getAttribute("hrq") && (q._value = "-4");
                    continue
                }
                if (K = m[d].itemInputs || m[d].itemLis,
                m[d].isShop) {
                    for (L = !1,
                    u = 0; u < K.length; u++)
                        H = parseInt(K[u].value),
                        H > 0 && (q._value && (q._value += spChars[3]),
                        q._value += u + 1 + "",
                        q._value += spChars[2] + H,
                        L = !0);
                    L || (q._value = "-2");
                    continue
                }
                for (M = -1,
                N = 0,
                u = 0; u < K.length; u++)
                    K[u].className.toLowerCase().indexOf("on") > -1 && (M = u),
                    O = K[u].parentNode && "none" == K[u].parentNode.style.display,
                    !O && K[u].checked && (N++,
                    q._value ? q._value += spChars[3] + K[u].value : q._value = K[u].value + "",
                    K[u].itemText && (I = K[u].itemText.value,
                    I == defaultOtherText && (I = ""),
                    q._value += spChars[2] + replace_specialChar(trim(I.substring(0, 3e3)))));
                M > -1 ? q._value = K[M].value + "" : N > 0 || (q._value = "-2"),
                P = parseInt(q._value),
                (M > -1 || N > 0) && 1 == m[d].getAttribute("pj") && (Q = $(m[d]).find(".evaluateTagDiv").eq(P - 1),
                R = "",
                Q.find(".writeRvaluate").siblings(".clicked").each(function(a, b) {
                    var c = 0 == a ? "" : "\u3001";
                    R += c + $.trim($(b).html())
                }),
                S = R ? "\u3001" : "",
                Q.find("textarea").val() && Q.find(".writeRvaluate").hasClass("clicked") && (R += S + Q.find("textarea").val().replace(/\u3001/gi, "\uff64")),
                R && (q._value += spChars[2] + replace_specialChar(trim(R.substring(0, 3e3)))));
                break;
            case "radio_down":
                if (p) {
                    q._value = "-3";
                    continue
                }
                q._value = m[d].itemSel.value;
                break;
            case "matrix":
                if (T = m[d].itemTrs,
                U = o._mode,
                V = "201" != U && "202" != U && "301" != U && "302" != U && "303" != U && "203" != U && "204" != U,
                "none" == m[d].style.display && window.cepingCandidate) {
                    q._value = V ? "-4" : "\u2163";
                    continue
                }
                if (ub = T.length,
                W = 0,
                Y = 0,
                Z = 0,
                _ = new Array,
                ab = !1,
                bb = 1 == $(m[d]).attr("maxdiff") && !o._requir,
                bb && (cb = $(m[d]).find("textarea"),
                db = !1,
                cb.each(function() {
                    return $(this).val() ? void 0 : (db = !0,
                    !1)
                }),
                db))
                    break;
                for (u = 0; u < T.length; u++)
                    if (eb = T[u].getAttribute("rindex"),
                    0 == eb && "true" == T[u].getAttribute("randomrow") && (ab = !0),
                    fb = new Object,
                    fb.rIndex = parseInt(eb),
                    "none" != T[u].style.display)
                        if (hb = "",
                        K = T[u].itemInputs || T[u].itemLis || T[u].divSlider || T[u].itemSels || T[u].uploadFrame) {
                            if (W = K.length,
                            M = -1,
                            "201" != U && "202" != U && "203" != U && "204" != U) {
                                for (C = 0; C < K.length; C++)
                                    K[C].className.toLowerCase().indexOf("on") > -1 && (M = C,
                                    hb = K[C].value),
                                    K[C].checked ? (M = C,
                                    hb ? hb += ";" + K[C].value : hb = K[C].value,
                                    ("103" == U || "102" == U || "101" == U) && (ib = K[C].getAttribute("needfill"),
                                    ib && (jb = K[C].fillvalue || K[C].getAttribute("fillvalue") || "",
                                    jb == defaultOtherText && (jb = ""),
                                    jb = replace_specialChar(jb).replace(/;/g, "\uff1b").replace(/,/g, "\uff0c"),
                                    hb += spChars[2] + jb))) : ("TEXTAREA" == K[C].tagName || "SELECT" == K[C].tagName) && (M = C,
                                    jb = trim(K[C].value),
                                    "none" == T[u].style.display && (jb = "\u2163"),
                                    C > 0 && (hb += spChars[3]),
                                    jb ? ("302" == U && (jb && K[C].lnglat && (jb = jb + "[" + K[C].lnglat + "]"),
                                    jb = replace_specialChar(jb)),
                                    hb += jb) : hb += "303" == U ? "-2" : "(\u7a7a)");
                                M > -1 ? (q._value ? q._value += "301" == U || "302" == U || "303" == U ? spChars[2] + hb : "," + hb : q._value = hb,
                                fb.val = hb) : (q._value ? q._value += ",-2" : q._value = "-2",
                                fb.val = "-2")
                            } else
                                "201" == U || "204" == U ? (H = trim(K[0].value.substring(0, 3e3)),
                                "none" == T[u].style.display && (H = "\u2163"),
                                H && K[0].lnglat && (H = H + "[" + K[0].lnglat + "]"),
                                Y > 0 ? q._value += spChars[2] + replace_specialChar(H) : q._value = replace_specialChar(H),
                                fb.val = replace_specialChar(H)) : "202" == U ? (kb = void 0 == T[u].divSlider.value ? "" : T[u].divSlider.value,
                                "none" == T[u].style.display && (kb = "\u2163"),
                                Y > 0 ? q._value += spChars[2] + kb : q._value = kb,
                                fb.val = kb) : "203" == U && (fb.val = T[u].fileName);
                            _.push(fb),
                            Y++
                        } else
                            ub -= 1,
                            Z = 1;
                    else {
                        if (V) {
                            gb = "-4",
                            q._value ? q._value += "," + gb : q._value = gb,
                            fb.val = gb;
                            continue
                        }
                        gb = "\u2163",
                        q._value ? q._value += "," + gb : q._value = gb,
                        fb.val = gb
                    }
                if (p) {
                    for (C = 0,
                    q._value = ""; ub > C; ) {
                        if ("201" == U || "202" == U || "203" == U || "204" == U)
                            0 == C ? q._value = "(\u8df3\u8fc7)" : q._value += spChars[2] + "(\u8df3\u8fc7)";
                        else if ("301" == U || "302" == U || "303" == U)
                            for (C > 0 && (q._value += spChars[2]),
                            lb = 0; W > lb; lb++)
                                lb > 0 && (q._value += spChars[3]),
                                q._value += "303" == U ? "-3" : "(\u8df3\u8fc7)";
                        else
                            0 == C ? q._value = "-3" : q._value += ",-3";
                        C++
                    }
                    continue
                }
                for (_.sort(function(a, b) {
                    return a.rIndex - b.rIndex
                }),
                mb = spChars[2],
                "201" != U && "202" != U && "301" != U && "302" != U && "303" != U && "203" != U && "204" != U && (mb = ","),
                nb = "",
                ob = 0; ob < _.length; ob++)
                    ob > 0 && (nb += mb),
                    pb = _[ob].rIndex,
                    parseInt(pb) == pb && (eb = parseInt(pb) + 1,
                    nb += eb + spChars[4]),
                    nb += void 0 == _[ob].val ? "" : _[ob].val;
                q._value = nb
            }
        }
    for (b.sort(function(a, b) {
        return a._topic - b._topic
    }),
    qb = "",
    d = 0; d < b.length; d++)
        d > 0 && (qb += spChars[1]),
        qb += b[d]._topic,
        qb += spChars[0],
        qb += b[d]._value;
    try {
        if (window.isKaoShi && j && window.localStorage && window.JSON) {
            if (rb = localStorage.getItem("sortactivity"),
            rb ? rb += "," + activityId : rb = activityId,
            rb += "",
            sb = rb.split(","),
            tb = 2,
            sb.length > tb) {
                for (ub = sb.length,
                d = 0; ub - tb > d; d++)
                    vb = sb[0],
                    sb.splice(0, 1),
                    localStorage.removeItem("sortorder_" + vb);
                rb = sb.join(",")
            }
            localStorage.setItem("sortactivity", rb),
            wb = "sortorder_" + activityId,
            xb = JSON.stringify(j),
            localStorage.setItem(wb, xb)
        }
    } catch (i) {}
    return qb
}
function validate(a, b) {
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z, _, ab, bb, c = !1, d = !0;
    if (needSubmitNotValid = !1,
    e = pageHolder[cur_page].questions,
    hlv = "1",
    f = pageHolder[cur_page].hasExceedTime,
    firstError = null,
    firstMatrixError = null,
    curMatrixError = null,
    g = document.getElementById("divNA"),
    h = g.getElementsByTagName("input"),
    h[0].checked || h[1].checked)
        return popUpAlert(wjxlang.tit_isjiqi),
        window.location.href = window.location.href,
        void 0;
    if (hasPeiEFull)
        return popUpAlert(peiemsg),
        !1;
    for (i = 0; i < e.length; i++)
        if (!(a && a != e[i] || (j = e[i].dataNode,
        k = j._hasjump,
        verifyMsg = "",
        l = "none" == e[i].style.display.toLowerCase() || pageHolder[cur_page].skipPage,
        e[i].removeError && e[i].removeError(),
        l || e[i].dataNode._referTopic && !e[i].displayContent && !window.cepingCandidate || f)))
            switch (j._type) {
            case "question":
                if (m = e[i].itemTextarea || e[i].itemInputs[0],
                n = m.value || "",
                j._requir && "" == trim(n) && (d = writeError(e[i], validate_info_q1, 3e3)),
                !e[i].needsms || !n || e[i].issmsvalid || window.nfjoinid && "2" != hasJoin || (d = writeError(e[i], "\u63d0\u793a\uff1a\u60a8\u7684\u624b\u673a\u53f7\u7801\u6ca1\u6709\u901a\u8fc7\u9a8c\u8bc1\uff0c\u8bf7\u5148\u9a8c\u8bc1", 3e3)),
                n.length - 3e3 > 0 && (o = wjxlang.tips_overtextnum,
                d = writeError(e[i], o, 3e3)),
                p = j._verify,
                "\u5bc6\u7801" == p && (m.needCheckConfirm = !0,
                q = verifydata(m, p, j),
                "" != q && (d = writeError(e[i], q, 3e3))),
                r = e[i].getAttribute("issample"),
                s = !0,
                r && "t" != promoteSource && (s = !1),
                s && (n && (q = verifyMinMax(m, p, j._minword, j._maxword),
                "" != q && (d = writeError(e[i], q, 3e3))),
                "" != n && p && "0" != p && (q = verifydata(m, p, j),
                "" != q && (d = writeError(e[i], q, 3e3)))),
                d && "" != trim(n) && "true" == isRunning && j._needOnly)
                    if (0 == m.isOnly)
                        d = writeError(e[i], validate_only, 3e3);
                    else if (1 != m.isOnly && "\u5730\u56fe" != j._verify && !e[i].needsms)
                        return d = writeError(e[i], validate_error, 3e3),
                        m.focus(),
                        d;
                m.gserror && (c = !0,
                d = writeError(e[i], "\u9a8c\u8bc1\u5931\u8d25\uff1a" + m.gserror, 3e3));
                break;
            case "gapfill":
                for (t = e[i].gapFills,
                u = 0; u < t.length; u++) {
                    if (n = t[u].value || "",
                    "" == trim(n)) {
                        if (j._requir && "0" != t[u].getAttribute("isrequir")) {
                            e[i].errorControl = t[u],
                            d = writeError(e[i], validate_info_q1, 3e3);
                            break
                        }
                    } else {
                        if (v = 0,
                        v = validateMatrix(j, t[u], t[u])) {
                            e[i].errorControl = t[u],
                            d = writeError(e[i], verifyMsg, 3e3);
                            break
                        }
                        if (t[u].getAttribute("needonly"))
                            if (0 == t[u].isOnly)
                                e[i].errorControl = t[u],
                                d = writeError(e[i], validate_only, 3e3);
                            else if (1 != t[u].isOnly && "\u5730\u56fe" != t[u].getAttribute("itemverify")) {
                                e[i].errorControl = t[u],
                                d = writeError(e[i], validate_error, 3e3);
                                break
                            }
                    }
                    t[u].gserror && (c = !0,
                    d = writeError(e[i], "\u9a8c\u8bc1\u5931\u8d25\uff1a" + t[u].gserror, 3e3))
                }
                break;
            case "slider":
                w = e[i].divSlider.value,
                j._requir && void 0 == w && (d = writeError(e[i], validate_info_wd1, 3e3));
                break;
            case "fileupload":
                if ($(e[i]).find(".heatmapWrap").length > 0 && e[i].isHeaterr) {
                    d = writeError(e[i], e[i].isHeaterr, 3e3);
                    break
                }
                j._requir && !e[i].fileName && (d = writeError(e[i], validate_info_f1, 3e3));
                break;
            case "sum":
                if (x = e[i].sumLeft,
                0 == x)
                    for (y = e[i].getElementsByTagName("input"),
                    x = e[i].dataNode._total,
                    z = 0; z < y.length; z++)
                        A = y[z],
                        B = e[i].itemTrs[z],
                        "none" != B.style.display && (x -= parseInt(A.value));
                j._requir ? 0 != x && (d = !1,
                x || (x = 100),
                firstError || (firstError = e[i]),
                q = "<span style='color:red;'>" + sum_warn + "</span>",
                e[i].relSum && (e[i].relSum.innerHTML = "<span style='font-size:13px;'>" + sum_total + "<b>" + j._total + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (j._total - x) + "</span>\uff0c" + q + "</span>")) : void 0 != x && 0 != x && (d = !1,
                firstError || (firstError = e[i]),
                q = "<span style='color:red;'>" + sum_warn + "</span>",
                e[i].relSum && (e[i].relSum.innerHTML = "<span style='font-size:13px;'>" + sum_total + "<b>" + j._total + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (j._total - x) + "</span>\uff0c" + q + "</span>"));
                break;
            case "radio":
            case "check":
                if (e[i].itemSel) {
                    C = e[i].itemSel,
                    D = C.options,
                    0 == D.length && j._requir ? d = writeError(e[i], validate_info_o1, 3e3) : D.length > 0 && (0 != j._minValue && j._minValue != j._select.length || D.length == j._select.length ? j._maxValue > 0 && D.length > j._maxValue ? (E = wjxlang.sort_duoxuan.replace("{0}", j._maxValue).replace("{1}", D.length - j._maxValue),
                    d = writeError(e[i], E, 3e3)) : j._minValue > 0 && D.length < j._minValue && (E = wjxlang.sort_shaoxuan.replace("{0}", j._minValue).replace("{1}", j._minValue - D.length),
                    d = writeError(e[i], E, 3e3)) : d = writeError(e[i], validate_info + validate_info_check3, 3e3));
                    continue
                }
                for (D = e[i].itemInputs || e[i].itemLis,
                F = -1,
                G = 0,
                H = -1,
                u = 0; u < D.length; u++)
                    e[i].isShop ? D[u].value && D[u].value - 0 > 0 && (G++,
                    H = u) : D[u].className.toLowerCase().indexOf("on") > -1 && (F = u,
                    H = u),
                    D[u].checked && (G++,
                    H = u,
                    "radio" == j._type && k && j._select[D[H].value - 1] && -1 == j._select[D[H].value - 1]._item_jump && (needSubmitNotValid = !0),
                    D[u].req && isTextBoxEmpty(D[u].itemText.value) && (I = validate_textbox,
                    $(D[u].itemText).hasClass("cusomSelect") && (I = validate_textbox_select),
                    d = writeError(e[i], I, 3e3)));
                F > -1 ? hasChoice = !0 : G > 0 ? (hasChoice = !0,
                j._maxValue > 0 && G > j._maxValue ? (E = wjxlang.validate_check_duoxuan.replace("{0}", j._maxValue).replace("{1}", G - j._maxValue),
                d = writeError(e[i], E, 3e3)) : j._minValue > 0 && G < j._minValue && (E = wjxlang.validate_check_shaoxuan.replace("{0}", j._minValue).replace("{1}", j._minValue - G),
                e[i].isShop && 0 == langVer && (E = E.replace(/\u9879/g, "\u79cd\u5546\u54c1")),
                1 == G && j._select[D[H].value - 1] && j._select[D[H].value - 1]._item_huchi ? E = "" : d = writeError(e[i], E, 3e3))) : j._requir && (J = validate_info_c1,
                "1" == e[i].getAttribute("qingjing") && (J = wjxlang.qingjingtips),
                d = writeError(e[i], J, 3e3));
                break;
            case "radio_down":
                j._requir && 0 == e[i].itemSel.selectedIndex && (d = writeError(e[i], validate_info_c1, 3e3)),
                k && e[i].itemSel.selectedIndex > 0 && j._select[e[i].itemSel.value - 1] && -1 == j._select[e[i].itemSel.value - 1]._item_jump && (needSubmitNotValid = !0);
                break;
            case "matrix":
                for (K = e[i].itemTrs,
                L = j._mode,
                len = K.length,
                M = 0,
                N = 0,
                v = 0,
                P = "",
                u = 0; u < K.length; u++)
                    if ("none" != K[u].style.display)
                        if (D = K[u].itemInputs || K[u].itemLis || K[u].divSlider || K[u].itemSels || K[u].uploadFrame) {
                            if (F = -1,
                            G = 0,
                            "201" != L && "202" != L && "203" != L && "204" != L) {
                                for (Q = 0; Q < D.length; Q++) {
                                    if (D[Q].className.toLowerCase().indexOf("on") > -1)
                                        F = Q;
                                    else if (D[Q].checked) {
                                        if (F = Q,
                                        G++,
                                        ("103" == L || "102" == L || "101" == L) && (R = D[Q].getAttribute("needfill"),
                                        S = D[Q].getAttribute("req"),
                                        R && S && (T = D[Q].fillvalue || D[Q].getAttribute("fillvalue") || "",
                                        isTextBoxEmpty(T)))) {
                                            verifyMsg = validate_textbox,
                                            v = 1,
                                            firstMatrixError || (firstMatrixError = e[i].itemTrs[u]),
                                            showMatrixFill(D[Q], 1);
                                            break
                                        }
                                    } else if ("TEXTAREA" == D[Q].tagName || "SELECT" == D[Q].tagName)
                                        if (U = trim(D[Q].value),
                                        F = Q,
                                        U || b)
                                            "301" == L ? (U = DBC2SBC(D[Q]),
                                            D[Q].gserror && (P = D[Q].gserror,
                                            N = 1),
                                            "\u6570\u5b57" == j._verify && parseInt(U) != U && "" != U ? N = 1 : "\u5c0f\u6570" != j._verify || /^(\-)?\d+(\.\d+)?$/.exec(U) || "" == U ? (j._minvalue && parseInt(U) - parseInt(j._minvalue) < 0 || j._maxvalue && parseInt(U) - parseInt(j._maxvalue) > 0) && (N = 2) : N = 1,
                                            N && (O || (O = D[Q]),
                                            firstMatrixError || (firstMatrixError = e[i].itemTrs[u]))) : "302" == L && (v || (v = validateMatrix(j, D[Q], D[Q])),
                                            v && (O || (O = D[Q]),
                                            firstMatrixError || (firstMatrixError = e[i].itemTrs[u])));
                                        else if (V = D[Q].parentNode,
                                        "303" == L) {
                                            if ("none" != V.style.display) {
                                                F = -1;
                                                break
                                            }
                                        } else if ("none" != V.style.display) {
                                            if (F = -1,
                                            "301" == L && j._requir) {
                                                N = 1,
                                                O || (O = D[Q]),
                                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u]);
                                                break
                                            }
                                            if ("302" == L)
                                                break
                                        }
                                    D[Q].gserror && (c = !0,
                                    v = 1,
                                    b ? (b.id == D[Q].id && (verifyMsg = D[Q].gserror),
                                    b.id == D[Q].id && (O = D[Q]),
                                    firstMatrixError || (firstMatrixError = e[i].itemTrs[u])) : (verifyMsg || (verifyMsg = D[Q].gserror),
                                    O || (O = D[Q]),
                                    firstMatrixError || (firstMatrixError = e[i].itemTrs[u])))
                                }
                                "102" == L && F > -1 && (j._maxvalue > 0 && G > j._maxvalue ? (E = wjxlang.check_duoxuan.replace("{0}", G).replace("{1}", G - j._maxvalue),
                                verifyMsg = E,
                                v = 1,
                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u])) : j._minvalue > 0 && G < j._minvalue && (E = wjxlang.check_shaoxuan.replace("{0}", G).replace("{1}", j._minvalue - G),
                                verifyMsg = E,
                                v = 1,
                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u])))
                            } else
                                "201" == L || "204" == L ? (v || (v = validateMatrix(j, K[u], D[0])),
                                D[0].gserror && (c = !0,
                                v = 1,
                                verifyMsg = D[0].gserror),
                                v && (O || (O = D[0]),
                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u])),
                                K[u].getAttribute("needonly") && (0 == K[u].isOnly ? (O || (O = D[0]),
                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u]),
                                verifyMsg = validate_only,
                                v = 1) : 1 != K[u].isOnly && "\u5730\u56fe" != K[u].getAttribute("itemverify") && (O || (O = D[0]),
                                firstMatrixError || (firstMatrixError = e[i].itemTrs[u]),
                                verifyMsg = validate_error,
                                v = 1)),
                                "" != trim(D[0].value) ? F = 0 : "0" == K[u].getAttribute("isrequir") && (F = 0)) : "202" == L ? void 0 != K[u].divSlider.value && (F = 0) : "203" == L && (X = K[u].fileName,
                                j._requir && !X ? v = 1 : F = 0);
                            if (F > -1)
                                M++;
                            else if (j._requir && !b)
                                break
                        } else
                            len -= 1;
                    else
                        len -= 1;
                "201" != L && "302" != L && "204" != L || !v || (O && (e[i].errorControl = O),
                d = writeError(e[i], verifyMsg, 3e3),
                firstMatrixError && firstMatrixError.onclick()),
                "203" == L && v && (d = writeError(e[i], validate_info_f1, 3e3)),
                j._requir && len > M && (d = "1" == $(e[i]).attr("maxdiff") ? writeError(e[i], validate_info_wd1, 3e3) : writeError(e[i], wjxlang.validate_matrix_requied.replace("{0}", M + 1), 3e3),
                e[i].itemTrs[u] && !firstMatrixError && (firstMatrixError = e[i].itemTrs[u],
                Y = e[i].getAttribute("DaoZhi"),
                Y || e[i].itemTrs[u].onclick())),
                "102" != L && "103" != L && "101" != L || !v || (O && (e[i].errorControl = O),
                d = writeError(e[i], verifyMsg, 3e3),
                firstMatrixError && firstMatrixError.onclick()),
                "301" == L && N && (Z = wjxlang.validate_matrix_number,
                2 == N && (j._minvalue && (Z = wjxlang.validate_matrix_number_min.replace("{0}", j._minvalue)),
                j._maxvalue && (Z = wjxlang.validate_matrix_number_max.replace("{0}", j._maxvalue))),
                O && (e[i].errorControl = O),
                P && (Z = verifyMsg || P,
                d = writeError(e[i], Z, 3e3),
                isGsWrite = !0),
                d = writeError(e[i], Z, 3e3),
                firstMatrixError && firstMatrixError.onclick())
            }
    for (_ = 0; _ < trapHolder.length; _++)
        if (trapHolder[_].pageIndex == cur_page + 1) {
            for (D = trapHolder[_].itemInputs,
            ab = "",
            u = 0; u < D.length; u++)
                D[u].checked && (ab += D[u].value + ",");
            if (!ab) {
                d = writeError(trapHolder[_], validate_info_wd1, 3e3);
                break
            }
        }
    if (firstError) {
        if (c || PromoteUser(validate_submit, 3e3, !1),
        c && a)
            return d;
        bb = "1" == $(firstError).attr("maxdiff"),
        firstMatrixError && firstMatrixError.parent == firstError && !bb ? firstMatrixError.scrollIntoView() : firstError.scrollIntoView()
    }
    return d
}
function validateMatrix(a, b, c) {
    var f, g, h, i, j, d = 0;
    return c.value ? (c.value,
    f = b.getAttribute("itemverify") || "",
    g = b.getAttribute("minword") || "",
    h = b.getAttribute("maxword") || "",
    i = b.getAttribute("issample"),
    j = !0,
    verifyMsg = "",
    i && "t" != promoteSource && (j = !1),
    j && (verifyMsg = verifyMinMax(c, f, g, h)),
    "" != verifyMsg && (d = 1),
    j && 0 == d && f && "0" != f && (verifyMsg = verifydata(c, f, a),
    "" != verifyMsg && (d = 2)),
    d) : d
}
function removeError() {
    this.errorMessage && (this.errorMessage.innerHTML = "",
    this.removeError = null,
    this.style.border = "solid 2px white",
    this.errorControl && (this.errorControl.style.background = "white",
    this.errorControl = null))
}
function PromoteUser(a, b, c) {
    c ? show_status_tip(a, b) : popUpAlert(a)
}
function writeError(a, b, c, d) {
    var e, f, g;
    if (!a.errorMessage || "" == a.errorMessage.innerHTML) {
        if (a.dataNode && ("matrix" == a.dataNode._type && "202" == a.dataNode._mode || "slider" == a.dataNode._type) || d || (a.style.border = "solid 2px #ff9900"),
        !a.errorMessage)
            for (e = $$tag("div", a),
            f = 0; f < e.length; f++)
                if (g = e[f].className.toLowerCase(),
                "errormessage" == g) {
                    a.errorMessage = e[f];
                    break
                }
        if (a.errorMessage)
            return a.errorMessage.innerHTML = b,
            a.removeError = removeError,
            a.errorControl && (a.errorControl.style.background = "#FBD5B5"),
            firstError || (firstError = a),
            !1
    }
}
function new_submit_tipshow(a, b, c) {
    var d = document.getElementById("new_submit_tipcolor");
    d.style.display = "inline-block",
    d.innerHTML = c ? '<i class="iconfontNew" style="color:#01AD56!important;">&#xe699;</i>' + a : a,
    b > 0 && setTimeout("new_submit_tipcolor.style.display='none'", b)
}
function show_status_tip(a, b) {
    submit_tip.style.display = "block",
    submit_tip.innerHTML = a,
    b > 0 && setTimeout("submit_tip.style.display='none'", b)
}
function isDate(a) {
    var c, b = new Array;
    if (-1 != a.indexOf("-"))
        b = a.toString().split("-");
    else {
        if (-1 == a.indexOf("/"))
            return !1;
        b = a.toString().split("/")
    }
    return 4 == b[0].length && (c = new Date(b[0],b[1] - 1,b[2]),
    c.getFullYear() == b[0] && c.getMonth() == b[1] - 1 && c.getDate() == b[2]) ? !0 : !1
}
function DBC2SBC(a) {
    var b = a.value
      , c = b.dbc2sbc();
    return b != c && (a.value = c),
    a.value
}
function verifydata(a, b) {
    var f, d = trim(a.value), e = null;
    if ("email" == b.toLowerCase() || "msn" == b.toLowerCase())
        return e = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        e.exec(d) ? "" : validate_email;
    if ("\u65e5\u671f" == b || "\u751f\u65e5" == b || "\u5165\u5b66\u65f6\u95f4" == b)
        return isDate(d) ? "" : validate_date;
    if ("\u56fa\u8bdd" == b)
        return d = DBC2SBC(a),
        e = /^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$/,
        e.exec(d) ? "" : validate_phone;
    if ("\u624b\u673a" == b)
        return d = DBC2SBC(a),
        e = /^\d{11}$/,
        e.exec(d) ? "" : validate_mobile;
    if ("\u5bc6\u7801" == b)
        return checkPassword(d, a);
    if ("\u786e\u8ba4\u5bc6\u7801" == b) {
        if (a && a.firstPwd && a.firstPwd.value != d)
            return wjxlang.validate_password
    } else {
        if ("\u7535\u8bdd" == b)
            return e = /(^\d{11}$)|(^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$)/,
            e.exec(d) ? "" : validate_mo_phone;
        if ("\u6c49\u5b57" == b)
            return e = /^[\u4e00-\u9fa5\u00b7]+$/,
            e.exec(d) ? "" : validate_chinese;
        if ("\u59d3\u540d" == b)
            return e = /^[\u4e00-\u9fa5\u00b7]{2,15}$/,
            e.exec(d) ? "" : "\u59d3\u540d\u5fc5\u987b\u4e3a2\u523015\u4e2a\u6c49\u5b57";
        if ("\u82f1\u6587" == b)
            return e = /^[A-Z\sa-z]+$/,
            e.exec(d) ? "" : validate_english;
        if ("\u82f1\u6587\u6570\u5b57" == b)
            return e = /^[A-Za-z\d]+$/,
            e.exec(d) ? "" : validate_englishdigit;
        if ("\u7f51\u5740" == b || "\u516c\u53f8\u7f51\u5740" == b)
            return e = /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
            f = /^www.[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
            e.exec(d) || f.exec(d) ? "" : validate_reticulation;
        if ("\u8eab\u4efd\u8bc1\u53f7" == b)
            return d = DBC2SBC(a),
            18 == d.length && checkIDCard(d) ? "" : validate_idcardNum;
        if ("\u5b66\u53f7" == b) {
            if (d = DBC2SBC(a),
            e = /^\d+$/,
            !e.exec(d))
                return validate_num.replace("\uff0c\u8bf7\u6ce8\u610f\u4f7f\u7528\u82f1\u6587\u5b57\u7b26\u683c\u5f0f", "")
        } else if ("\u6570\u5b57" == b) {
            if (d = DBC2SBC(a),
            e = /^(\-)?\d+$/,
            !e.exec(d))
                return validate_num
        } else if ("\u5c0f\u6570" == b) {
            if (d = DBC2SBC(a),
            e = /^(\-)?\d+(\.\d+)?$/,
            !e.exec(d))
                return validate_decnum
        } else if ("qq" == b.toLowerCase())
            return d = DBC2SBC(a),
            e = /^\d+$/,
            f = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/,
            e.exec(d) || f.exec(d) ? "" : validate_qq
    }
    return ""
}
function checkIDCard(a) {
    var j, k, l, m, n, b = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], c = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], d = a + "", e = a[17], f = d.substring(0, 17), g = f.split(""), h = g.length, i = 0;
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
    var f, c = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,20}/, d = /[a-zA-Z]+/, e = /[0-9]+/;
    return b && b.confirmPwd && b.needCheckConfirm && (f = trim(b.confirmPwd.value),
    f != a) ? wjxlang.validate_password : c.test(a) && d.test(a) && e.test(a) ? "" : c.test(a) ? d.test(a) ? e.test(a) ? "" : wjxlang.validate_pass_number : wjxlang.validate_pass_zm : wjxlang.validate_pass_long
}
function verifyMinMax(a, b, c, d) {
    var f, e = a.value;
    if ("\u6570\u5b57" == b || "\u5c0f\u6570" == b) {
        if (!afterDigitPublish)
            return "";
        if (e = DBC2SBC(a),
        f = /^(\-)?\d+$/,
        "\u5c0f\u6570" == b && (f = /^(\-)?\d+(\.\d+)?$/),
        !f.exec(e))
            return "\u5c0f\u6570" == b ? validate_decnum : validate_num;
        if (0 != e && (e = e.replace(/^0+/, "")),
        "" != c) {
            if ("\u6570\u5b57" == b && parseInt(e) - parseInt(c) < 0)
                return validate_num2 + c;
            if ("\u5c0f\u6570" == b && parseFloat(e) - parseFloat(c) < 0)
                return validate_num2 + c
        }
        if ("" != d) {
            if ("\u6570\u5b57" == b && parseInt(e) - parseInt(d) > 0)
                return validate_num1 + d;
            if ("\u5c0f\u6570" == b && parseFloat(e) - parseFloat(d) > 0)
                return validate_num1 + d
        }
    } else {
        if ("" != d && e.length - d > 0)
            return validate_info_wd3.format(d, e.length);
        if ("" != c && e.length - c < 0)
            return validate_info_wd4.format(c, e.length)
    }
    return ""
}
function getXmlHttp() {
    var a;
    return window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")),
    a
}
function postHeight() {
    if (window != window.top)
        try {
            var a = parent.postMessage ? parent : parent.document.postMessage ? parent.document : null;
            null != a && a.postMessage("heightChanged," + (document.documentElement.scrollHeight || document.body.scrollHeight), "*")
        } catch (b) {}
}
function avoidPaste() {
    var c, a = document.getElementsByTagName("input"), b = document.getElementsByTagName("textarea");
    for (c = 0; c < a.length; c++)
        a[c].onpaste = function() {
            return isTest ? !0 : this.parent && "1" == this.parent.getAttribute("nc") ? !0 : !1
        }
        ;
    for (c = 0; c < b.length; c++)
        b[c].onpaste = function() {
            return isTest ? !0 : this.parent && "1" == this.parent.getAttribute("nc") ? !0 : this.parent && "tr" == this.parent.tagName.toLowerCase() ? !0 : !1
        }
}
function setLastOp() {
    window.localStorage && localStorage.setItem("wjxlastanswer" + activityId, (new Date).getTime())
}
function setTimeOpup(a) {
    var b, c;
    hasSurveyTime = !0,
    hasMaxtime = !0,
    divTimeUp && "none" != divTimeUp.style.display && PDF_close(),
    window.amt = 2,
    b = wjxlang.tit_maxOpTime.replace("{0}", maxOpTime),
    c = wjxlang.tit_needsubmit,
    a || (c = ""),
    autoSubmit(b + c)
}
function replaceImg(a) {
    var b = "http://pubimageqiniu.paperol.cn"
      , c = "//pubnewfr.paperol.cn";
    0 == a.src.indexOf("http://pubssl.sojump.com") || 0 == a.src.indexOf("https://pubssl.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.cn") || 0 == a.src.indexOf("http://pubssl.sojump.cn") ? a.src = a.src.replace("http://pubssl.sojump.com", b).replace("https://pubssl.sojump.com", b).replace("http://pubimage.sojump.com", b).replace("http://pubimage.sojump.cn", b).replace("http://pubssl.sojump.cn", b) : (0 == a.src.indexOf("http://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.cn") || 0 == a.src.indexOf("http://pubalifr.sojump.cn") || 0 == a.src.indexOf("https://pubali.sojump.cn") || 0 == a.src.indexOf("https://pubalifr.sojump.cn")) && (a.src = a.src.replace("http://pubalifr.sojump.com", c).replace("https://pubalifr.sojump.com", c).replace("http://pubali.sojump.com", c).replace("https://pubali.sojump.com", c).replace("http://pubali.sojump.cn", c).replace("https://pubali.sojump.cn", c).replace("http://pubalifr.sojump.cn", c).replace("https://pubalifr.sojump.cn", c))
}
function popUpAlert(a) {
    maxCheatTimes > 0 && window.screenfull ? window.screenfull.alert(a) : alertNew(a)
}
function CheckMax(a, b, c, d) {
    var e, f, g, h, i, k, l, m, n, o, p, q, r, s, t;
    if (!(d || c && "radio" == c.type))
        return !0;
    if (e = c.value,
    f = b.parentNode.parentNode.parentNode,
    "table" != f.tagName.toLocaleLowerCase())
        return !0;
    if (g = 0,
    h = null,
    d)
        g = c.getAttribute("itemmax");
    else {
        if (i = f.getElementsByTagName("thead")[0],
        h = i.getElementsByTagName("td"),
        !h[e - 1])
            return !0;
        g = h[e - 1].getAttribute("itemmax")
    }
    if (g && window.cepingCandidate && "-1" != g.indexOf("%") && (k = parseInt(g.replace("%", "")),
    l = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
    g = Math.ceil(l.length * k / 100)),
    g && g > 0) {
        if (a && !a.hasClearHref && addClearHref(a),
        m = f.getElementsByTagName("input"),
        n = 0,
        m.length)
            for (o = 0; o < m.length && (m[o].checked && m[o].value == e && n++,
            !(n >= g)); o++)
                ;
        else {
            for (o = 0; o < f.rows.length; o++) {
                for (p = $$tag("li", f.rows[o]),
                q = null,
                j = 0; j < p.length; j++)
                    r = p[j].className.toLowerCase(),
                    p[j].className && (r.indexOf("off") > -1 || r.indexOf("on") > -1) && r.indexOf("on") > -1 && (q = p[j]);
                q && e == q.value && n++
            }
            n -= 1
        }
        if (n >= g)
            return s = "",
            t = "\u5217",
            d ? t = "\u6b64" : s = "\u201c" + h[e - 1].innerHTML + "\u201d",
            msg = wjxlang.tit_item_max.replace("{0}", t).replace("{1}", s).replace("{2}", g),
            alertNew(msg),
            !1
    }
    return !0
}
function elagerImg(a, b) {
    a = a || window.event,
    a.stopPropagation && a.stopPropagation();
    var c = $(b).parent().find("img");
    c[0].hasinitviewer || (c.viewer({
        url: function(a) {
            var c, d, b = a.src;
            return $(a).parent().attr("pimg") && (b = $(a).parent().attr("pimg")),
            b && (c = b.split(",w_"),
            2 == c.length && (b = c[0] + ",w_2400"),
            d = b.split(",h_200"),
            1 == d.length && (d = b.split(",h_400")),
            2 == d.length && (b = d[0] + d[1])),
            b
        }
    }),
    c[0].hasinitviewer = !0),
    c[0].viewer.show()
}
function displaypeie(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
    if ("1" == a.getAttribute("haspeie") && (b = a.itemInputs,
    c = 0,
    "radio_down" == a.dataNode._type && (b = $$tag("option", a),
    c = 1),
    b)) {
        for (d = c; d < b.length; d++) {
            if (1 == c) {
                if (b[d].selected)
                    continue
            } else if (b[d].checked)
                continue;
            if (e = b[d].getAttribute("attrpeie"))
                for (f = e.split(";"),
                g = 0; g < f.length; g++)
                    if (h = f[g].split("|"),
                    3 == h.length)
                        if (i = "q" + h[0] + "_" + h[1],
                        j = document.getElementById(i)) {
                            if (b[d] == j)
                                return;
                            j.disabled = !1,
                            j.parentNode && (k = j.parentNode.getElementsByTagName("label")[0],
                            l = k.getElementsByTagName("b"),
                            l.length > 0 && k.removeChild(l[0]))
                        } else {
                            if (m = document.getElementById("div" + h[0]),
                            n = m.getElementsByTagName("option"),
                            b == n)
                                return;
                            n && n.length > h[1] && (n[h[1]].disabled = !1,
                            o = "\uff08" + h[2] + ")",
                            -1 != n[h[1]].innerHTML.indexOf(o) && (n[h[1]].innerHTML = n[h[1]].innerHTML.replace(o, ""),
                            m.getElementsByTagName("select")[0].className = "",
                            m.getElementsByTagName("select")[0].style.width = "auto",
                            initEleSelect2("#div" + h[0])))
                        }
        }
        for (d = c; d < b.length; d++) {
            if (1 == c) {
                if (!b[d].selected)
                    continue
            } else if (!b[d].checked)
                continue;
            if (e = b[d].getAttribute("attrpeie"))
                for (f = e.split(";"),
                g = 0; g < f.length; g++)
                    if (h = f[g].split("|"),
                    3 == h.length)
                        if (i = "q" + h[0] + "_" + h[1],
                        j = document.getElementById(i)) {
                            if (b[d] == j)
                                return;
                            j.disabled = !0,
                            j.parentNode && (k = j.parentNode.getElementsByTagName("label")[0],
                            l = k.getElementsByTagName("b"),
                            0 == l.length && (k.innerHTML = k.innerHTML + "<b>&nbsp;\uff08" + h[2] + "\uff09</b>"))
                        } else {
                            if (m = document.getElementById("div" + h[0]),
                            n = m.getElementsByTagName("option"),
                            b == n)
                                return;
                            n[h[1]] && (n[h[1]].disabled = !0),
                            n && n.length > h[1] && (o = "\uff08" + h[2] + ")",
                            -1 == n[h[1]].innerHTML.indexOf(o) && (n[h[1]].innerHTML = n[h[1]].innerHTML + o,
                            m.getElementsByTagName("select")[0].className = "",
                            m.getElementsByTagName("select")[0].style.width = "auto",
                            initEleSelect2("#div" + h[0])))
                        }
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
function getTableTrHandler(a) {
    var c, d, b = a.dataNode;
    return "301" == b._mode || "302" == b._mode || "303" == b._mode || "102" == b._mode ? (c = $$tag("table", a),
    d = $$tag("tr", c[0])) : $$tag("tr", a)
}
function initSelelct2() {
    if (window.hasDropDown && pageHolder[cur_page] && !pageHolder[cur_page].initSelelct2) {
        pageHolder[cur_page].initSelelct2 = !0;
        var a = $(pageHolder[cur_page]).find("select").length;
        pageHolder[cur_page].selectLen = a,
        $(pageHolder[cur_page].questions).each(function() {
            "none" != this.style.display && initEleSelect2(this)
        })
    }
}
function initEleSelect2(a) {
    var b, c, d;
    window.hasDropDown && pageHolder[cur_page] && (a.hasInitSelect2 || (b = $(a)[0].dataNode._type,
    ("matrix" == b || "radio_down" == b || "gapfill" == b || "gapfill" == b) && (c = $(a).find("select"),
    a.hasInitSelect2 = !0,
    window.useRawSelect || c.length > 100 || pageHolder[cur_page].selectLen > 300 || (d = "zh-CN",
    1 == langVer ? d = "" : 2 == langVer && (d = "zh-TW"),
    c.each(function(a, b) {
        var d, e, f, c = $(b).outerWidth();
        $(b).is(":hidden") && (d = $(b).clone(),
        d.appendTo($("body")),
        c = d.outerWidth(),
        d.remove()),
        e = c + 40,
        f = parseInt($(b).css("max-width")),
        f && (e = e > f ? f : e),
        e = e > 680 ? 680 : e,
        b.style.width = e + "px"
    }),
    c.select2({
        language: d,
        width: "element",
        minimumResultsForSearch: 10
    }),
    c.on("select2:open", function() {
        isSelect2 = !0
    }),
    c.on("select2:close", function() {
        count360Val(),
        isSelect2 = !1
    })))))
}
function addWaterMarker(a, b) {
    var e, f, g, h, i, c = document.createElement("canvas"), d = document.body;
    d.appendChild(c),
    c.width = 500,
    c.height = 250,
    canFontsize = "14px",
    console.log(a.length),
    a && a.length >= 20 && (canFontsize = "12px",
    c.width = 650,
    c.height = 325),
    a && a.length >= 30 && (c.width = 800,
    c.height = 400),
    c.style.display = "none",
    e = c.getContext("2d"),
    e.font = canFontsize + ' "Helvetica Neue", Helvetica, Arial, "PingFang SC","Microsoft YaHei","Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif',
    e.fillStyle = "rgba(17, 17, 17, 0.2)",
    e.textAlign = "center",
    f = 60,
    g = 40,
    e.translate(f, g),
    e.rotate(-20 * Math.PI / 180),
    e.translate(-f, -g),
    e.fillText(a, f, g),
    h = c.width / 2 + 30,
    i = c.height / 2 + g + 40,
    e.fillText(a, h, i),
    b(c.toDataURL("image/png"))
}
function closeAlert() {
    var a = document.getElementById("alert_box");
    a.style.display = "none",
    a.callback && a.callback()
}
function alertNew(a, b) {
    if (window != window.top)
        return alert(a),
        b && b(),
        void 0;
    var c = document.getElementById("alert_box");
    c ? document.getElementById("pop_box_msg").innerHTML = a : (c = document.createElement("div"),
    c.id = "alert_box",
    alertHtml = "<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='min-height: 160px;width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:2px;text-align: left;'><div style='font-size:18px;color: #262626;font-weight:500;padding: 20px 20px 0 20px;z-index: 1;'><div>" + wjxlang.system_message + "</div>" + "</div>" + "<div style='width: 100%;border-radius: 0 0 8px 8px; z-index: 1;'>" + "<div style='min-height: 50px;padding: 24px 20px 14px;font-size: 16px;line-height: 22px;;color:#595959' id='pop_box_msg'>" + a + "</div>" + "<div style='padding:0 20px 20px;text-align:right'><button class='mainBgColor' style='display:inline-block;min-width:64px;font-size:14px;height:40px;box-sizing:border-box;line-height:38px;border-radius:2px;color:#fff;text-align: center;text-decoration: none;border: none;background: #0095FF;outline:none;cursor:pointer;' onclick='closeAlert();'>" + wjxlang.ensure + "</button></div>" + "</div></div>",
    c.innerHTML = alertHtml,
    document.body.appendChild(c)),
    c.style.display = "",
    c.callback = b || ""
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
function hideTip() {
    tipNode && (tipNode.innerHTML = "",
    tipNode.style.display = "none")
}
function getMousePos() {
    var a = window.event
      , b = document.documentElement.scrollLeft || document.body.scrollLeft
      , c = document.documentElement.scrollTop || document.body.scrollTop
      , d = a.pageX || a.clientX + b
      , e = a.pageY || a.clientY + c;
    return {
        x: d,
        y: e
    }
}
function setTip(a, b) {
    var e, f, g, h, c = /^div(\d+)/g, d = 0;
    return curdiv && curdiv.id && (e = c.exec(curdiv.id)[1],
    e && (f = document.getElementById("divquestion" + e),
    f && (d = f.scrollLeft))),
    g = getMousePos(),
    tipNode || (tipNode = document.createElement("div"),
    tipNode.id = "tip-box",
    tipNode.className = "tip-style",
    tipNode.style.display = "none",
    tipNode.style.position = "absolute",
    document.body.appendChild(tipNode)),
    b && !a.value ? !1 : (b && a.value && a != document.activeElement ? (tipNode.style.left = g.x + "px",
    tipNode.style.top = g.y + "px") : (tipNode.style.left = getTop(a).x + a.clientWidth - d - 15 + "px",
    tipNode.style.top = getTop(a).y + a.clientHeight + 10 + "px"),
    a.value && (tipNode.style.display = ""),
    h = limitWordFn(a.value),
    tipNode.innerHTML = h,
    void 0)
}
function limitWordFn(a) {
    return a = a.length > 100 ? a.substr(0, 100) + "..." : a
}
function forbidEdit(a) {
    var b, c;
    if (a)
        for (a += "",
        b = a.split(";"),
        c = 0; c < b.length; c++)
            $("#div" + b[c] + " input").prop("disabled", "disabled"),
            $("#div" + b[c] + " iframe").hide(),
            $("#div" + b[c] + " .increase-btn").hide(),
            $("#div" + b[c] + " .delete-icon").hide(),
            $("#div" + b[c] + " .imageBar1").attr("onmousedown", "return false"),
            $("#div" + b[c] + " select").prop("disabled", "disabled"),
            $("#div" + b[c] + " textarea").prop("disabled", "disabled"),
            $("#div" + b[c] + " .jqRadio").attr("onclick", "return false").parent().attr("onclick", "return false"),
            $("#div" + b[c] + " .jqCheckbox").attr("onclick", "return false").parent().attr("onclick", "return false"),
            $("#div" + b[c] + " .ruler").attr("onclick", "return false"),
            $("#div" + b[c] + " li").attr("onclick", "return false"),
            $("#div" + b[c] + " .operation").attr("onclick", "return false"),
            $("#div" + b[c] + " .evaluateTagItem").attr("onclick", "return false")
}
function initCusomSelect(a, b, c) {
    var f, g, h, i, j, k, l, m, n, o, p, d = $(c).find("input[type='text']"), e = $(a).find("input[type='text']");
    if (0 != d.length) {
        if (f = b.checked,
        g = "radio" == b.type,
        h = e.attr("cusom"),
        h && !e[0].hasInitCusom) {
            for (e.hide(),
            i = e[0].disabled,
            j = $("<select></select>"),
            k = h.split(","),
            l = e.attr("value"),
            j.append($('<option value="">' + wjxlang.chioce + "</option>")),
            m = 0; m < k.length; m++)
                n = k[m] == l ? "selected" : "",
                o = $("<option " + n + "></option>"),
                o.attr("value", k[m]),
                o.text(k[m]),
                j.append(o);
            j.change(function(a) {
                a.stopPropagation();
                var b = this.value;
                return e.val(b).trigger("blur"),
                !1
            }),
            e.before(j),
            i && j.prop("disabled", !0),
            e[0].hasInitCusom = !0,
            p = "zh-CN",
            1 == langVer ? p = "" : 2 == langVer && (p = "zh-TW"),
            j.select2({
                language: p,
                width: "element",
                minimumResultsForSearch: 10
            }),
            j.click(function(a) {
                a.stopPropagation()
            }),
            j.next(".select2").click(function(a) {
                a.stopPropagation()
            })
        }
        g ? ($(a).siblings().find("input[type='text'],.select2,.requireSpan").hide(),
        h ? e.siblings(".select2,.requireSpan").show() : e.show().siblings(".requireSpan").show()) : f ? h ? e.siblings(".select2,.requireSpan").show() : e.show().siblings(".requireSpan").show() : e.hide().siblings(".select2,.requireSpan").hide()
    }
}
function hasJoinCusomInit() {
    2 == window.hasDropDown && $(".ulradiocheck input[type='radio']:checked,.ulradiocheck input[type='checkbox']:checked").each(function(a, b) {
        var c = $(b).closest("li")[0]
          , d = $(b).closest(".div_question")[0];
        initCusomSelect(c, b, d)
    })
}
function getDevice() {
    var a, b, c, d, e, f, g;
    if (0 != $(".div_question[verify='device']").length) {
        for (a = $(".div_question[verify='device']"),
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
            var a = $(this).find(".inputtext");
            a.eq(0).val(c),
            a.eq(1).val(b),
            a.eq(2).val(g),
            a.eq(3).val(d)
        })
    }
}
function curPageHeatmapInit() {
    window.hasHeatMap && pageHolder[cur_page] && (pageHolder[cur_page].initHeatmap || (pageHolder[cur_page].initHeatmap = !0,
    $(pageHolder[cur_page]).find(".heatmapWrap").each(function() {
        "none" != this.style.display && heatMapInit(this)
    })))
}
function trimStr(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function TotalValBoxInit() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
    if (4 == cqType && window.showTotalScore) {
        if (a = document.getElementById("countValBox"),
        totalPage - 1 > cur_page)
            return a.style.display = "none",
            void 0;
        for (b = document.getElementById("countTotalValue"),
        c = [],
        d = !1,
        e = !1,
        g = "",
        h = {},
        i = 0; i < pageHolder.length; i++)
            for (j = 0; j < pageHolder[i].questions.length; j++)
                if (k = pageHolder[i].questions[j],
                l = k.dataNode._mode,
                "101" == l && c.push(k),
                ("101" == l || "202" == l || "303" == l || "301" == l || "3" == l || "2" == l || "6" == l) && (d = !0),
                "none" != k.style.display)
                    for (f = k.getElementsByTagName("tr"),
                    m = 0; m < f.length; m++)
                        if ("none" != f[m].style.display) {
                            if ("303" == k.dataNode._mode && 0 == k.getElementsByClassName("select2").length)
                                for (n = f[m].getElementsByTagName("select"),
                                o = 0; o < n.length; o++)
                                    n[o].onchange = count360Val;
                            if (p = f[m].getElementsByTagName("th")[0],
                            q = "\u5206",
                            (1 == langVer || langVer > 2) && (q = ""),
                            p && trimStr(p.innerText)) {
                                if (0 == h[trimStr(p.innerText)])
                                    continue;
                                r = '<li class="clearfix" style="box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 0.5);line-height:36px;height:36px;"><span style="float:left;font-size: 14px;font-weight: 500;color: #595959;line-height: 36px;">' + p.innerText + '</span><b style="float:right;font-size: 14px;font-weight: 500;color: #0095FF;line-height: 36px;">0' + q + "</b></li>",
                                g += r,
                                h[trimStr(p.innerText)] = 0,
                                e = !0
                            }
                        }
        if (!d)
            return window.showTotalScore = 0,
            void 0;
        if (e) {
            for (b.innerHTML = g,
            a.style.display = "block",
            a.style.marginTop = "20px",
            a.scoreB = b.getElementsByTagName("b"),
            a.perArr = h,
            s = a.getElementsByTagName("li"),
            s[s.length - 1].style.boxShadow = "none",
            t = 0; t < c.length; t++)
                for (u = c[t].getElementsByTagName("thead"),
                u && (u = u[0].getElementsByTagName("td")),
                v = c[t].getElementsByTagName("tbody"),
                v && (v = v[0].getElementsByTagName("tr")),
                m = 0; m < v.length; m++)
                    if ("none" != v[m].style.display)
                        for (w = v[m].getElementsByTagName("td"),
                        x = 0; x < u.length; x++)
                            y = u[x].getAttribute("score"),
                            w[x].setAttribute("score", y);
            count360Val()
        } else
            a.style.display = "none"
    }
}
function count360Val() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (4 == cqType && window.showTotalScore) {
        a = document.getElementById("countValBox"),
        b = {},
        c = !0;
        for (name in a.perArr)
            b[trimStr(name)] = 0,
            c = !1;
        if (c || "none" == a.style.display)
            return;
        for (d = 0; d < pageHolder.length; d++)
            for (e = 0; e < pageHolder[d].questions.length; e++)
                if (f = pageHolder[d].questions[e],
                "none" != f.style.display)
                    switch (f.dataNode._mode) {
                    case "101":
                        for (g = f.getElementsByClassName("jqChecked"),
                        h = 0; h < g.length; h++)
                            i = g[h].parentNode.parentNode.getElementsByTagName("th")[0],
                            -77777 != g[h].parentNode.getAttribute("score") - 0 && i && b[trimStr(i.innerText)] >= 0 && (b[trimStr(i.innerText)] += g[h].parentNode.getAttribute("score") - 0);
                        break;
                    case "202":
                        for (j in f.itemTrs)
                            f.itemTrs[j].divSlider.value > 0 && (i = f.itemTrs[j].getElementsByTagName("th")[0],
                            i && b[trimStr(i.innerText)] >= 0 && (b[trimStr(i.innerText)] += f.itemTrs[j].divSlider.value - 0));
                        break;
                    case "303":
                        for (k = f.getElementsByTagName("table")[0],
                        k && (k = k.getElementsByTagName("select")),
                        h = 0; h < k.length; h++)
                            i = k[h].parentNode.parentNode.getElementsByTagName("th")[0],
                            k[h].options[k[h].value] && i && b[trimStr(i.innerText)] >= 0 && (b[trimStr(i.innerText)] += k[h].options[k[h].value].getAttribute("score") - 0);
                        break;
                    case "301":
                        for (l = f.getElementsByTagName("table")[0],
                        l && (l = l.getElementsByTagName("textarea")),
                        h = 0; h < l.length; h++)
                            i = l[h].parentNode.parentNode.getElementsByTagName("th")[0],
                            l[h].value - 0 >= 0 && i && b[trimStr(i.innerText)] >= 0 && (b[trimStr(i.innerText)] += l[h].value - 0);
                        break;
                    case "2":
                    case "3":
                    case "6":
                        for (m = f.getElementsByTagName("table")[0],
                        m && (m = m.getElementsByTagName("tr")),
                        h = 0; h < m.length; h++)
                            "none" != m[h].style.display && (n = m[h].getElementsByClassName("on" + f.dataNode._mode),
                            i = m[h].getElementsByTagName("th")[0],
                            n.length > 0 && -77777 != n[n.length - 1].getAttribute("score") - 0 && i && b[trimStr(i.innerText)] >= 0 && (b[trimStr(i.innerText)] += n[n.length - 1].getAttribute("score") - 0))
                    }
        o = 0,
        p = "\u5206",
        (1 == langVer || langVer > 2) && (p = "");
        for (name in b)
            a.scoreB[o].innerHTML = b[name] + p,
            o++;
        a.perArr = b
    }
}
function clockRecordTime(a) {
    var b, c, d;
    try {
        if (0 == $(pageHolder[cur_page]).find("textarea[verify='clock']").length)
            return;
        if (a) {
            if (b = pageHolder[cur_page].openTime,
            !b)
                return;
            c = (new Date).getTime(),
            d = $(pageHolder[cur_page]).find("textarea[verify='clock']"),
            d.length > 0 && d.val(c - b).blur()
        } else
            pageHolder[cur_page].openTime = (new Date).getTime()
    } catch (e) {}
}
function perDetailIntro(a) {
    var b = $(a).attr("introtext") || ""
      , c = $(a).attr("nametext") || "";
    $(".perTitle").html(c + "\u7684\u8be6\u7ec6\u4ecb\u7ecd"),
    $(".self_made_content").html(decodeURIComponent(b)),
    PDF_launch("selfMadeDialog", 600, 450)
}
function clickCancel() {
    layer.closeAll()
}
function clickClearAsnwer(a) {
    for (var b in dataMap)
        b.split("_")[0] == "q" + a && (dataMap[b] = "",
        dealId(b))
}
var hasAnswer, initCounterDate, initstime, hrefSave, cur_page, jumpPages, pageHolder, trapHolder, totalQ, completeLoaded, firstImplementation, MaxTopic, curdiv, curfilediv, isUploadingFile, hasZhenBiePage, progressArray, questionsObject, joinedTopic, randomparm, hasTouPiao, useSelfTopic, hlv, keywordarray, keywordObj, quarray, jpmarr, jpmObj, jqParam, ZheZhaoControl, divTimeUp, iscropper, isMatchTitle, isGsWrite, mainColor, needCheckLeave, txtCurCity, submit_tip, submit_div, hasPeiEFull, peiemsg, spChars, spToChars, submit_table, pre_page, next_page, submit_button, divMinTime, spanMinTime, divMaxTime, spanMaxTime, maxCounter, maxTimer, minTimer, initMaxSurveyTime, isLoadQues, curMatrixFill, curMatrixError, divMatrixRel, matrixinput, isCaptchaValid, nc_csessionid, nc_sig, captchaOjb, nc_appkey, nc_token, hasSubmitTimes, relationQs, relationNotDisplayQ, ItemrelationQs, relationItemNotDisplayQ, HasSetItemrelationList, relationGroup, relationGroupHT, ItemrelationGroup, ItemrelationGroupHT, verifymob, verifyControl, JumpNotDisplayQ, nextPageAlertText, hasMaxtime, isEdtData, shopHT, prevPostion, resizedMax, isAutoSubmit, hasAutoSubmit, amt, curMatrixItem, loadcss, loadprogress, hasConfirmBtn, itempopUpindex, popUpindex, pubNoCheck, saveNeedAlert, ktimes, spanSave, saveInterval, changeInterval, totalSaveSec, havereturn, timeoutTimer, errorTimes, hasSendErrorMail, prevsaveanswer, answer_send, changeSave, nvvv, firstError, firstMatrixError, startAge, endAge, gender, education, marriage, startIncome, endIncome, labelName, labelIndex, rName, modata, jpMatchId, quesMatchId, jpWayText, hasMatchName, quResult, verifyMsg, needSubmitNotValid, ii, allimgs, i, isopUp, saveTime, cTime, minutes, dTime, days, leftOpTime, divOpTip, intervalId, fireConfirm, isSelect2, tipNode;
if ("function" != typeof Array.prototype.push && (Array.prototype.push = function() {
    for (var a = 0; a < arguments.length; a++)
        this[this.length] = arguments[a];
    return this.length
}
),
"function" != typeof Array.prototype.indexOf && (Array.prototype.indexOf = function(a) {
    for (var b = 0; b < this.length; b++)
        if (a === this[b])
            return b;
    return -1
}
),
String.prototype.format = function() {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function(b, c) {
        return a[c]
    })
}
,
String.prototype.dbc2sbc = function() {
    return this.replace(/[\uff01-\uff5e]/g, function(a) {
        return String.fromCharCode(a.charCodeAt(0) - 65248)
    }).replace(/\u3000/g, " ")
}
,
window.maxCheatTimes || (maxCheatTimes = 0),
hasAnswer = !1,
initCounterDate = null,
initstime = starttime,
hrefSave = document.getElementById("hrefSave"),
cur_page = 0,
pageHolder = new Array,
trapHolder = new Array,
totalQ = 0,
completeLoaded = !1,
firstImplementation = !1,
MaxTopic = 0,
"none" != displayPrevPage || "1" != hasJoin && !isSuper || (displayPrevPage = ""),
curdiv = null,
curfilediv = null,
isUploadingFile = !1,
hasZhenBiePage = !1,
progressArray = new Object,
questionsObject = new Object,
joinedTopic = 0,
randomparm = "",
hasTouPiao = !1,
useSelfTopic = !1,
hlv = "0",
keywordarray = "",
keywordObj = null,
quarray = "",
jpmarr = new Array,
jpmObj = new Object,
jqParam = "",
document.oncontextmenu = document.ondragstart = document.onselectstart = avoidCopy,
ZheZhaoControl = null,
divTimeUp = document.getElementById("divTimeUp"),
iscropper = !1,
isMatchTitle = 0,
isGsWrite = !1,
hrefSave)
    try {
        mainColor = getStyle(document.getElementById("submit_button"), "backgroundColor"),
        mainColor && document.getElementById("loadcss") && (document.getElementById("loadcss").style.background = hrefSave.style.background = mainColor)
    } catch (err) {}
if (document.onkeydown = forbidBackSpace,
needCheckLeave = !0,
allowSaveJoin && "true" == isRunning && guid && (window.onunload = function() {
    needCheckLeave && (maxCheatTimes > 0 && (fireConfirm = !0),
    confirm(wjxlang.tit_issaveanswer) && (submit(2),
    popUpAlert(wjxlang.tit_saveanswer_success)))
}
),
$$tag = function(a, b) {
    return b ? b.getElementsByTagName(a) : document.getElementsByTagName(a)
}
,
txtCurCity = null,
submit_tip = document.getElementById("submit_tip"),
submit_div = document.getElementById("submit_div"),
hasPeiEFull = !1,
peiemsg = "",
spChars = ["$", "}", "^", "|", "!", "<"],
spToChars = ["\u03be", "\uff5d", "\u02c6", "\u00a6", "\uff01", "\uff1c"],
submit_table = document.getElementById("submit_table"),
pre_page = document.getElementById("btnPre"),
next_page = document.getElementById("btnNext"),
submit_button = document.getElementById("submit_button"),
divMinTime = document.getElementById("divMinTime"),
spanMinTime = document.getElementById("spanMinTime"),
divMaxTime = document.getElementById("divMaxTime"),
spanMaxTime = document.getElementById("spanMaxTime"),
maxCounter = 0,
maxTimer = null,
minTimer = null,
initMaxSurveyTime = 0,
isLoadQues = !1,
curMatrixFill = null,
curMatrixError = null,
divMatrixRel = document.getElementById("divMatrixRel"),
matrixinput = document.getElementById("matrixinput"),
divMatrixRel.onclick = function(a) {
    if (curMatrixFill) {
        var b = curMatrixFill.parent.parent;
        b && b.removeError && b.removeError()
    }
    stopPropa(a)
}
,
matrixinput.onkeyup = matrixinput.onblur = matrixinput.onfocus = function() {
    if (curMatrixFill) {
        var b = this.value;
        (0 == b.indexOf("\u8bf7\u6ce8\u660e...") || 0 == b.indexOf("Please specify")) && (this.value = b = ""),
        curMatrixFill.fillvalue = trim(b)
    }
}
,
isCaptchaValid = !1,
nc_csessionid = "",
nc_sig = "",
captchaOjb = null,
nc_appkey = "FFFF00000000016770EE",
nc_token = [nc_appkey, (new Date).getTime(), Math.random()].join(":"),
hasSubmitTimes = 0,
relationQs = new Object,
relationNotDisplayQ = new Object,
ItemrelationQs = new Object,
relationItemNotDisplayQ = new Object,
HasSetItemrelationList = new Object,
relationGroup = new Array,
relationGroupHT = new Object,
ItemrelationGroup = new Array,
ItemrelationGroupHT = new Object,
verifymob = "",
verifyControl = null,
JumpNotDisplayQ = new Object,
nextPageAlertText = "",
hasMaxtime = !1,
isEdtData = !1,
shopHT = new Array,
Init(),
isAutoSubmit = !1,
hasAutoSubmit = !1,
amt = 0,
curMatrixItem = null,
loadcss = null,
loadprogress = null,
hasConfirmBtn = !1,
itempopUpindex = 0,
popUpindex = 0,
pubNoCheck = null,
saveNeedAlert = !0,
ktimes = 0,
hrefPreview && (hrefPreview.onclick = function() {
    return window.hasHeatMap ? getHeatmapAns(function() {
        previewopen()
    }) : previewopen(),
    !1
}
),
spanSave = null,
saveInterval = null,
changeInterval = null,
totalSaveSec = 1,
hrefSave && (hrefSave.onclick = function() {
    return window.hasHeatMap ? (getHeatmapAns(function() {
        return "true" != isRunning ? (popUpAlert(wjxlang.tit_save_err),
        void 0) : (window.Ischangeans ? (window.IsEditSave = !0,
        isEdtData = !0,
        submit(6)) : submit(2),
        void 0)
    }),
    !1) : "true" != isRunning ? (popUpAlert(wjxlang.tit_save_err),
    void 0) : (window.Ischangeans ? (window.IsEditSave = !0,
    isEdtData = !0,
    submit(6)) : submit(2),
    !1)
}
,
"true" != isRunning || window.Ischangeans || (saveInterval = setInterval(function() {
    submit(2)
}, 6e4))),
havereturn = !1,
timeoutTimer = null,
errorTimes = 0,
hasSendErrorMail = !1,
prevsaveanswer = "",
answer_send = "",
changeSave = !1,
nvvv = 0,
firstError = null,
firstMatrixError = null,
startAge = 0,
endAge = 0,
gender = 0,
education = 0,
marriage = 0,
startIncome = 0,
endIncome = 0,
labelName = "",
labelIndex = 0,
rName = "",
modata = "",
jpMatchId = 0,
quesMatchId = 0,
jpWayText = 0,
hasMatchName = !1,
quResult = new Array,
verifyMsg = "",
needSubmitNotValid = !1,
1 == nv)
    for (ii = cur_page; totalPage > ii && validate(); ii++)
        to_next_page();
for (postHeight(),
allimgs = document.getElementsByTagName("img"),
i = 0; i < allimgs.length; i++)
    allimgs[i].onerror = function() {
        this.onerror = null,
        replaceImg(this)
    }
    ,
    replaceImg(allimgs[i]);
window.isKaoShi && (avoidPaste(),
window.maxOpTime && (isopUp = !1,
window.localStorage && (saveTime = localStorage["wjxlastanswer" + activityId],
saveTime && (cTime = (new Date).getTime(),
minutes = (cTime - saveTime) / 6e4,
10 > minutes && (isopUp = !0,
setTimeOpup(),
showSubmitTable(!1)))),
isopUp || (dTime = (new Date).getTime(),
days = (dTime - saveTime) / 864e5,
leftOpTime = maxOpTime + 5,
document.onclick = document.onkeyup = document.onscroll = document.onmousemove = function() {
    leftOpTime = maxOpTime + 5
}
,
divOpTip = null,
intervalId = setInterval(function() {
    var a, b, c, d;
    0 >= leftOpTime ? (clearInterval(intervalId),
    setLastOp(),
    setTimeOpup(!0)) : 5 >= leftOpTime && divTimeUp && (a = wjxlang.tit_leavetime.replace("{0}", leftOpTime),
    b = 60,
    1 == langVer && (b = 80),
    "none" == divTimeUp.style.display && (c = document.getElementById("prevDiv"),
    c && "block" == c.style.display && PDF_close(),
    PDF_launch("divTimeUp", 350, b),
    d = document.getElementById("PDF_bg_chezchenz"),
    d && (d.onclick = d.onkeyup = d.onmousemove = d.onscroll = function() {
        leftOpTime = maxOpTime + 5,
        PDF_close()
    }
    )),
    document.getElementById("divTimeUpTip").innerHTML = a),
    leftOpTime--
}, 1e3)))),
fireConfirm = !1,
isSelect2 = !1,
window.hasDropDown && $(function() {
    initSelelct2()
}),
window.markerText && window.addEventListener("load", addWaterMarker(markerText, function(a) {
    setTimeout(function() {
        document.querySelector("#box").style.background = "url(" + a + ") repeat"
    }, 0)
}), !0),
window.confirmnew = function(a, b, c) {
    var e, d = document.getElementById("confirm_box");
    return d ? document.getElementById("pop_box_msg2").innerHTML = a : (d = document.createElement("div"),
    d.id = "confirm_box",
    e = "<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='min-height: 160px;width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:2px;text-align: left;'><div style='font-size:18px;color: #262626;font-weight: 500;padding: 20px 20px 0;width:100%;text-align: left;'><div>" + wjxlang.system_message + "</div>" + "</div>" + "<div style='padding: 24px 20px 20px;font-size: 14px;line-height: 20px;text-align: left;color:#595959' id='pop_box_msg2'>" + a + "</div>" + "<div style='padding:0 20px 20px;text-align:right'>" + "<button style='display:inline-block;margin-right:10px;min-width:64px;font-size:14px;height:40px;box-sizing:border-box;line-height:38px;border-radius:2px;color:#8C8C8C;text-align: center;text-decoration: none;border: none;background:#F2F2F2;outline:none;cursor:pointer;' onclick='closeNo();'>" + wjxlang.cancel + "</button><button class='mainBgColor' style='display:inline-block;min-width:64px;font-size:14px;height:40px;box-sizing:border-box;line-height:38px;border-radius:2px;color:#fff;text-align: center;text-decoration: none;border: none;background: #0095FF;outline:none;cursor:pointer;' onclick='closeConfirm();'>" + wjxlang.ensure + "</button></div>" + "</div>",
    d.innerHTML = e,
    document.body.appendChild(d)),
    d.style.display = "",
    d.callback = b || "",
    d.callback2 = c || "",
    d
}
,
tipNode = document.getElementById("tip-box"),
$(function() {
    window.informedInit && informedInit(),
    window.forbidEditStr && forbidEdit(forbidEditStr),
    clockRecordTime(),
    hasJoinCusomInit(),
    TotalValBoxInit(),
    curPageHeatmapInit(),
    getDevice()
});
