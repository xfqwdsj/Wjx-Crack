function getWinheight() {
    if (!window.sessionStorage)
        return 0;
    var a = sessionStorage["winheight"];
    return a ? parseInt(a) : 0
}

function showContent() {
    if (divFengMian.style.display = "none",
        document.getElementById("divDesc") && document.getElementById("divDesc")
        .getElementsByTagName("iframe")
        .length > 0 && adjustVideoHeight(document.getElementById("divDesc")),
        pageHolder[cur_page] && (adjustVideoHeight(pageHolder[cur_page]),
            window.showHomePageFixedSlider))
        if (window.showAllPageQues)
            for (var c, b = 0; c = pageHolder[b++];)
                showHomePageFixedSlider(c);
        else
            showHomePageFixedSlider(pageHolder[cur_page]);
    window.hasHeatMap && curPageHeatmapInit(),
        fixBottom()
}

function replaceSrcImg(a) {
    var b = "http://pubimageqiniu.paperol.cn",
        c = "//pubref.paperol.cn";
    return 0 == a.indexOf("http://pubssl.sojump.com") || 0 == a.indexOf("https://pubssl.sojump.com") || 0 == a.indexOf("http://pubimage.sojump.com") || 0 == a.indexOf("http://pubimage.sojump.cn") || 0 == a.indexOf("http://pubssl.sojump.cn") ? a = a.replace("http://pubssl.sojump.com", b)
        .replace("https://pubssl.sojump.com", b)
        .replace("http://pubimage.sojump.com", b)
        .replace("http://pubimage.sojump.cn", b)
        .replace("http://pubssl.sojump.cn", b) : (0 == a.indexOf("http://pubalifr.sojump.com") || 0 == a.indexOf("https://pubalifr.sojump.com") || 0 == a.indexOf("https://pubali.sojump.com") || 0 == a.indexOf("http://pubali.sojump.com") || 0 == a.indexOf("http://pubali.sojump.cn") || 0 == a.indexOf("http://pubalifr.sojump.cn") || 0 == a.indexOf("https://pubali.sojump.cn") || 0 == a.indexOf("https://pubalifr.sojump.cn")) && (a = a.replace("http://pubalifr.sojump.com", c)
            .replace("https://pubalifr.sojump.com", c)
            .replace("http://pubali.sojump.com", c)
            .replace("https://pubali.sojump.com", c)
            .replace("http://pubali.sojump.cn", c)
            .replace("https://pubali.sojump.cn", c)
            .replace("http://pubalifr.sojump.cn", c)
            .replace("https://pubalifr.sojump.cn", c)),
        a
}

function showHideFengMian(a) {
    var d, e, f, g, h, j, k, l, m, n, o, p, q, r, s, b = document.getElementById("slideChunk"),
        c = document.getElementById(divContentID);
    if (a) {
        if ($("#divCePing")
            .hide(),
            divFengMian.addEventListener("touchstart", function(a) {
                a.preventDefault(),
                    a.stopPropagation();
                var b = a.touches[0];
                return d = b.pageY,
                    !1
            }, !1),
            divFengMian.addEventListener("touchmove", function(a) {
                var b = a.touches[0];
                return e = b.pageY,
                    e > d && $(window)
                    .scrollTop() <= 0 && a.preventDefault(),
                    !1
            }, !1),
            divFengMian.addEventListener("touchend", function() {
                var a = e - d,
                    b = 0 > a ? 1 : 0;
                return b && Math.abs(a) > 10 && (window.buttonfooter && window.buttonfooter.show(),
                        event.preventDefault(),
                        event.stopPropagation(),
                        showHideFengMian(!1)),
                    !1
            }, !1),
            $(b)
            .on("click", function() {
                showHideFengMian(!1)
            }),
            f = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent),
            f || $("#divFengMian")
            .on("click", function() {
                showHideFengMian(!1)
            }),
            !window.laShen && ($("#divFengMian")
                .css({
                    "background-size": "100%"
                }),
                g = $(divFengMian)
                .css("background-image"))) {
            h = g.replace('url("', "")
                .replace('")', "")
                .replace("url(", "")
                .replace(")", ""),
                h = replaceSrcImg(h),
                h = h.replace("pubnew.paperol.cn", "pubref.paperol.cn")
                .replace("pubnewfr.paperol.cn", "pubref.paperol.cn");
            try {
                RGBaster.colors(h, {
                    paletteSize: 3,
                    exclude: ["rgb(0,0,0)"],
                    success: function(a) {
                        var f, g, i, c = a.dominant.match(/\d+/g),
                            d = "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")",
                            e = .299 * c[0] + .587 * c[1] + .114 * c[2];
                        $("#divFengMian")
                            .css({
                                "background-color": d
                            }),
                            f = document.createElement("img"),
                            g = $(window)
                            .width(),
                            i = $(window)
                            .height(),
                            f.onload = function() {
                                var a = this.width,
                                    c = this.height,
                                    d = g / a * c;
                                i > d + 62 && ($(b)
                                    .css("background", "none"),
                                    e >= 192 && ($(".slideChunkWord")
                                        .css("color", "#262626"),
                                        $("#slideChunkArrow")
                                        .css("background-image", "url('/images/newimg/mobile-cover/arrow-black@3x.png')")))
                            },
                            f.src = h
                    }
                })
            } catch (i) {}
        }
        2 != window.laShen && $(b)
            .css("background", "rgba(0,0,0,.5)"),
            $(b)
            .height("62px")
            .css("padding-top", "15px"),
            c.style.display = "none"
    } else
        $("#divCePing")
        .show(),
        c.style.display = "",
        2 == window.isChuangGuan ? showContent(c) : $(divFengMian)
        .animate({
            height: 0
        }, 200)
        .promise()
        .then(function() {
            $("#fengMianTitle")
                .hide(),
                $("#slideChunk")
                .hide(),
                divTip && ("none" != divTip.style.display || divTip.needShow) && (divTip.style.display = "",
                    $("#tipHeight")
                    .show()),
                showContent(c)
        }),
        (3 == window.isChuangGuan || 4 == window.isChuangGuan) && newksinit();
    j = $("body")
        .hasClass("hasbgpic"),
        k = document.getElementById("toptitle"),
        l = k.getAttribute("nv"),
        a ? $("#divBackgroundWrap")
        .hide() : $("#divBackgroundWrap")
        .show(),
        a || $("#htitle")
        .show(),
        m = document.getElementById("toplogo"),
        n = document.getElementById("divPowerBy"),
        m && (m.style.display = a ? "none" : ""),
        a && divTip && ("none" != divTip.style.display || divTip.needShow) && (divTip.style.display = "none",
            $("#tipHeight")
            .hide(),
            divTip.needShow = !0),
        o = document.getElementById("divLoadAnswer"),
        o && ("none" != o.style.display || o.needShow) && (o.style.display = a ? "none" : "",
            o.needShow = !0),
        p = document.getElementById("divTopHeader"),
        p && (p.style.display = a ? "none" : ""),
        q = document.getElementById("voteHead"),
        q && (q.style.display = a ? "none" : ""),
        r = document.getElementById("voteSelSearch"),
        r && (r.style.display = a ? "none" : ""),
        k && !l && (k.style.display = a ? "none" : ""),
        n && (n.style.display = a ? "none" : ""),
        j && (s = a ? "0px" : "40px",
            $("body")
            .css("padding-top", s),
            $(pageHolder[cur_page].querySelectorAll(".field"))
            .each(function(a, b) {
                var c = b.getAttribute("fixedslider");
                c && setFixedsliderWidth($(b.querySelector(".ui-table-body")))
            })),
        a || 2 != window.isChuangGuan || startChuangGuan(!0),
        window.initSlider && initSlider(),
        window.initTableWidth && initTableWidth(),
        window.pageHolder && window.bindUploadMultipleFn && $(pageHolder[cur_page].querySelectorAll(".field"))
        .each(function(a, b) {
            "33" == b.getAttribute("type") ? b.querySelectorAll(".file")
                .forEach(function(a) {
                    a.parentNode.uploader && a.parentNode.uploader.refresh()
                }) : b.uploader && b.uploader.refresh()
        })
}
var canvasHeight = 150,
    getContext = function(a) {
        var c = document.createElement("canvas");
        return c.setAttribute("width", a),
            c.setAttribute("height", canvasHeight),
            c.getContext("2d")
    },
    getImageData = function(a, b) {
        var c = a.src || a,
            d = new Image;
        "data:" !== c.substring(0, 5) && (d.crossOrigin = "anonymous"),
            d.onload = function() {
                var c, a = getContext(d.width, d.height);
                a.drawImage(d, 0, d.height - canvasHeight, d.width, canvasHeight, 0, 0, d.width, canvasHeight),
                    c = a.getImageData(0, 0, d.width, canvasHeight),
                    b && b(c.data)
            },
            d.src = c
    },
    makeRGB = function(a) {
        return ["rgb(", a, ")"].join("")
    },
    mapPalette = function(a) {
        var c, b = [];
        for (c in a)
            b.push(frmtPobj(c, a[c]));
        return b.sort(function(a, b) {
                return b.count - a.count
            }),
            b
    },
    fitPalette = function(a, b) {
        if (a.length > b)
            return a.slice(0, b);
        for (var c = a.length - 1; b - 1 > c; c++)
            a.push(frmtPobj("0,0,0", 0));
        return a
    },
    frmtPobj = function(a, b) {
        return {
            name: makeRGB(a),
            count: b
        }
    },
    PALETTESIZE = 10,
    RGBaster = {};
RGBaster.colors = function(a, b) {
        b = b || {};
        var c = b.exclude || [],
            d = b.paletteSize || PALETTESIZE;
        getImageData(a, function(a) {
            for (var j, e = {}, f = "", g = [], i = 0; i < a.length; i += 4)
                g[0] = a[i],
                g[1] = a[i + 1],
                g[2] = a[i + 2],
                f = g.join(","),
                -1 === g.indexOf(void 0) && 0 !== a[i + 3] && -1 === c.indexOf(makeRGB(f)) && (e[f] = f in e ? e[f] + 1 : 1);
            b.success && (j = fitPalette(mapPalette(e), d + 1),
                b.success({
                    dominant: j[0].name,
                    secondary: j[1].name,
                    palette: j.map(function(a) {
                            return a.name
                        })
                        .slice(1)
                }))
        })
    },
    $(function() {
        var a = getWinheight(),
            b = document.documentElement.clientHeight;
        fmHeight = a ? b > a - 100 ? b : a : b,
            divFengMian.style.height = fmHeight + "px",
            showHideFengMian(!0),
            $(window)
            .on("resize", function() {
                $(window)
                    .width() >= 800 && $(window)
                    .height() != fmHeight && (divFengMian.style.height = $(window)
                        .height() + "px")
            })
    });