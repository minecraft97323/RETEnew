(function() {
    var aa = '" style="background-image:url('
      , ba = "-disabled"
      , ca = "-document.getElementById('"
      , ea = "/translate_a/t"
      , fa = "/translate_suggestion?client="
      , ha = '</button></div></div></td></tr><tr id="'
      , ia = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="'
      , ja = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="'
      , ka = "Component already rendered"
      , g = "DIV"
      , la = "Edge"
      , ma = "Google Website Translator"
      , na = "IFRAME"
      , oa = "INPUT"
      , pa = "INTERNAL_SERVER_ERROR"
      , qa = "OPTION"
      , ra = "Opera"
      , sa = "POST"
      , ta = "SCRIPT"
      , ua = "SPAN"
      , va = "TEXTAREA"
      , wa = "TITLE"
      , xa = "Unable to set parent component"
      , ya = "[goog.net.IframeIo] Unable to send, already active."
      , za = "about:blank"
      , Aa = "about:invalid#zClosurez"
      , Ba = ""
      , Ca = "absolute"
      , Da = "action"
      , Ea = "activedescendant"
      , Fa = "activity-form-container"
      , Ga = "alt-edited"
      , Ha = "array"
      , Ia = "auto"
      , Ja = "backgroundImage"
      , Ka = "backgroundPosition"
      , La = "blur"
      , Ma = "border-box"
      , Na = "button"
      , Oa = "cancelled"
      , Pa = "change"
      , Qa = "character"
      , Ra = "checked"
      , Sa = "chg_tgt_lang"
      , Ta = "click"
      , Ua = "clk_no_ap_site"
      , Va = "complete"
      , Wa = "container"
      , Xa = "contextmenu"
      , Ya = "dblclick"
      , Za = "direction"
      , $a = "div"
      , ab = "finish"
      , bb = "finishSourceLang"
      , cb = "finishTargetLang"
      , db = "focus"
      , eb = "focusin"
      , fb = "focusout"
      , p = "function"
      , gb = "goog-float-bottom"
      , hb = "goog-float-top"
      , ib = "goog-inline-block "
      , jb = "goog-menuheader"
      , kb = "goog-menuseparator"
      , lb = "goog-option"
      , mb = "goog-option-selected"
      , nb = "goog-te-menu-value"
      , ob = "goog-te-menu2-item-selected"
      , pb = "goog-te-spinner-animation-show"
      , qb = "goog-te-spinner-pos-show"
      , rb = "hidden"
      , tb = "hide"
      , ub = "horizontal"
      , vb = "https://translate.google.com"
      , wb = translate.resourcesUrl + "/js/cleardot.gif"
      , xb = "javascript:void(0)"
      , yb = "keydown"
      , zb = "keypress"
      , Ab = "load"
      , Bb = "mousedown"
      , Cb = "mousemove"
      , Db = "mouseout"
      , Eb = "mouseover"
      , Fb = "mouseup"
      , Gb = "move_offscreen"
      , q = "none"
      , Hb = "number"
      , Ib = "object"
      , Jb = "opacity 1s linear"
      , Kb = "paddingLeft"
      , Lb = "paddingRight"
      , Mb = "position"
      , Nb = "progressSection"
      , Ob = "promptSourceLang"
      , Pb = "promptTargetLang"
      , Qb = "ready"
      , Rb = "readystatechange"
      , Sb = "rtl"
      , Tb = "selected"
      , Ub = "skiptranslate"
      , Vb = "status-message"
      , Wb = "string"
      , Xb = "submitted"
      , Yb = "targetLanguage"
      , Zb = "textarea-placeholder-input"
      , $b = "toggle_display"
      , ac = "trans-target-empty"
      , bc = "trans-target-highlight"
      , cc = "transition"
      , dc = "translate"
      , ec = "vertical"
      , fc = "visible"
      , gc = "withCredentials";
    function hc() {
        return function() {}
    }
    function ic(a) {
        return function(b) {
            this[a] = b
        }
    }
    function t(a) {
        return function() {
            return this[a]
        }
    }
    function u(a) {
        return function() {
            return a
        }
    }
    var v, jc = typeof Object.create == p ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , kc;
    if (typeof Object.setPrototypeOf == p)
        kc = Object.setPrototypeOf;
    else {
        var lc;
        a: {
            var mc = {
                Dh: !0
            }
              , nc = {};
            try {
                nc.__proto__ = mc;
                lc = nc.Dh;
                break a
            } catch (a) {}
            lc = !1
        }
        kc = lc ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var oc = kc;
    function pc(a, b) {
        a.prototype = jc(b.prototype);
        a.prototype.constructor = a;
        if (oc)
            oc(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.m = b.prototype
    }
    var qc = qc || {}
      , x = this || self;
    function y(a) {
        return void 0 !== a
    }
    function z(a) {
        return typeof a == Wb
    }
    function rc(a) {
        return typeof a == Hb
    }
    var sc = /^[\w+/_-]+[=]{0,2}$/
      , tc = null;
    function A() {}
    function uc(a) {
        a.Te = void 0;
        a.X = function() {
            return a.Te ? a.Te : a.Te = new a
        }
    }
    function B(a) {
        var b = typeof a;
        if (b == Ib)
            if (a) {
                if (a instanceof Array)
                    return Ha;
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return Ib;
                if ("[object Array]" == c || typeof a.length == Hb && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return Ha;
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return p
            } else
                return "null";
        else if (b == p && "undefined" == typeof a.call)
            return Ib;
        return b
    }
    function C(a) {
        return B(a) == Ha
    }
    function vc(a) {
        var b = B(a);
        return b == Ha || b == Ib && typeof a.length == Hb
    }
    function wc(a) {
        return B(a) == p
    }
    function xc(a) {
        var b = typeof a;
        return b == Ib && null != a || b == p
    }
    function yc(a) {
        return a[zc] || (a[zc] = ++Ac)
    }
    var zc = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ac = 0;
    function Bc(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function Cc(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function D(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? D = Bc : D = Cc;
        return D.apply(null, arguments)
    }
    function Dc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var Ec = Date.now || function() {
        return +new Date
    }
    ;
    function Fc(a, b) {
        a = a.split(".");
        var c = x;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && y(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }
    function E(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;function Gc(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Gc);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    E(Gc, Error);
    Gc.prototype.name = "CustomError";
    var Hc, Ic = {
        Tj: 1,
        Ij: 2,
        nk: 3,
        Lj: 4,
        Vj: 5,
        Uj: 6,
        fk: 7,
        Nj: 8,
        Oj: 9,
        Qj: 10,
        Pj: 11,
        ck: 12
    };
    function Jc(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Gc.call(this, c + a[d])
    }
    E(Jc, Gc);
    Jc.prototype.name = "AssertionError";
    function Kc(a) {
        return a[a.length - 1]
    }
    var Lc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (z(a))
            return z(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Mc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , Nc = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = z(a) ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }
      , Oc = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = Array(c), e = z(a) ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , Pc = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
      , Qc = Array.prototype.every ? function(a, b) {
        return Array.prototype.every.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a))
                return !1;
        return !0
    }
    ;
    function Rc(a, b) {
        a: {
            for (var c = a.length, d = z(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : z(a) ? a.charAt(b) : a[b]
    }
    function Sc(a, b) {
        return 0 <= Lc(a, b)
    }
    function Tc(a, b) {
        b = Lc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function Uc(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Vc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Wc(a, b, c, d) {
        Array.prototype.splice.apply(a, Xc(arguments, 1))
    }
    function Xc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;function Yc(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function Zc(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function $c(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function ad(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function bd(a, b) {
        return null !== a && b in a
    }
    function cd() {
        var a = dd, b;
        for (b in a)
            return !1;
        return !0
    }
    function ed(a, b, c) {
        if (null !== a && b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }
    function fd(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var gd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function hd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < gd.length; f++)
                c = gd[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function id(a) {
        var b = arguments.length;
        if (1 == b && C(arguments[0]))
            return id.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;var jd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function kd(a, b) {
        this.a = a === ld && b || "";
        this.b = md
    }
    kd.prototype.gb = !0;
    kd.prototype.La = t("a");
    kd.prototype.toString = function() {
        return "Const{" + this.a + "}"
    }
    ;
    function nd(a) {
        return a instanceof kd && a.constructor === kd && a.b === md ? a.a : "type_error:Const"
    }
    var md = {}
      , ld = {}
      , od = new kd(ld,"");
    var pd = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    function qd() {
        this.b = "";
        this.c = rd
    }
    qd.prototype.gb = !0;
    qd.prototype.La = function() {
        return this.b.toString()
    }
    ;
    qd.prototype.Qe = !0;
    qd.prototype.a = u(1);
    function sd(a) {
        if (a instanceof qd && a.constructor === qd && a.c === rd)
            return a.b;
        B(a);
        return "type_error:TrustedResourceUrl"
    }
    var td = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , rd = {};
    function ud(a) {
        var b = new qd;
        b.b = a;
        return b
    }
    function vd(a, b, c) {
        if (null == c)
            return b;
        if (z(c))
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = C(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                null != h && (b || (b = a),
                b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
            }
        }
        return b
    }
    ;var wd = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    function xd(a, b) {
        if (b)
            a = a.replace(yd, "&amp;").replace(zd, "&lt;").replace(Ad, "&gt;").replace(Bd, "&quot;").replace(Cd, "&#39;").replace(Dd, "&#0;");
        else {
            if (!Ed.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(yd, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(zd, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Ad, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Bd, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Cd, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Dd, "&#0;"))
        }
        return a
    }
    var yd = /&/g
      , zd = /</g
      , Ad = />/g
      , Bd = /"/g
      , Cd = /'/g
      , Dd = /\x00/g
      , Ed = /[\x00&<>"']/;
    function Fd(a, b) {
        var c = 0;
        a = wd(String(a)).split(".");
        b = wd(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Gd(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Gd(0 == f[2].length, 0 == h[2].length) || Gd(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
    function Gd(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;function Hd() {
        this.b = "";
        this.c = Id
    }
    Hd.prototype.gb = !0;
    Hd.prototype.La = function() {
        return this.b.toString()
    }
    ;
    Hd.prototype.Qe = !0;
    Hd.prototype.a = u(1);
    function Jd(a) {
        if (a instanceof Hd && a.constructor === Hd && a.c === Id)
            return a.b;
        B(a);
        return "type_error:SafeUrl"
    }
    var Kd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Ld(a) {
        if (a instanceof Hd)
            return a;
        a = typeof a == Ib && a.gb ? a.La() : String(a);
        Kd.test(a) || (a = Aa);
        return Md(a)
    }
    var Id = {};
    function Md(a) {
        var b = new Hd;
        b.b = a;
        return b
    }
    Md(za);
    function Nd() {
        this.a = "";
        this.b = Od
    }
    Nd.prototype.gb = !0;
    var Od = {};
    Nd.prototype.La = t("a");
    function Pd(a) {
        if (a instanceof Nd && a.constructor === Nd && a.b === Od)
            return a.a;
        B(a);
        return "type_error:SafeStyle"
    }
    function Qd(a) {
        var b = new Nd;
        b.a = a;
        return b
    }
    var Rd = Qd("");
    function Sd(a) {
        if (a instanceof Hd)
            return 'url("' + Jd(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof kd)
            a = nd(a);
        else {
            a = String(a);
            var b = a.replace(Td, "$1").replace(Td, "$1").replace(Ud, "url");
            if (Vd.test(b)) {
                if (b = !Wd.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Xd(a)
                }
                a = b ? Yd(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new Jc("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function Xd(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var Vd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
      , Ud = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , Td = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
      , Wd = /\/\*/;
    function Yd(a) {
        return a.replace(Ud, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                f = k;
                return l
            });
            b = Ld(d).La();
            return c + f + b + f + e
        })
    }
    ;function Zd() {
        this.a = "";
        this.b = $d
    }
    Zd.prototype.gb = !0;
    var $d = {};
    Zd.prototype.La = t("a");
    function ae(a) {
        if (a instanceof Zd && a.constructor === Zd && a.b === $d)
            return a.a;
        B(a);
        return "type_error:SafeStyleSheet"
    }
    function be(a) {
        var b = new Zd;
        b.a = a;
        return b
    }
    be("");
    var ce;
    a: {
        var de = x.navigator;
        if (de) {
            var ee = de.userAgent;
            if (ee) {
                ce = ee;
                break a
            }
        }
        ce = ""
    }
    function H(a) {
        return -1 != ce.indexOf(a)
    }
    function fe(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;function ge() {
        return H("Trident") || H("MSIE")
    }
    function he() {
        return H("Firefox") || H("FxiOS")
    }
    function ie() {
        return (H("Chrome") || H("CriOS")) && !H(la)
    }
    function je() {
        function a(e) {
            e = Rc(e, d);
            return c[e] || ""
        }
        var b = ce;
        if (!ge()) {
            b = fe(b);
            var c = {};
            Mc(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Dc(bd, c);
            H(ra) ? a(["Version", ra]) : H(la) ? a([la]) : H("Edg/") ? a(["Edg"]) : ie() && a(["Chrome", "CriOS"])
        }
    }
    ;function ke() {
        this.b = "";
        this.f = le;
        this.c = null
    }
    ke.prototype.Qe = !0;
    ke.prototype.a = t("c");
    ke.prototype.gb = !0;
    ke.prototype.La = function() {
        return this.b.toString()
    }
    ;
    function me(a) {
        if (a instanceof ke && a.constructor === ke && a.f === le)
            return a.b;
        B(a);
        return "type_error:SafeHtml"
    }
    function ne(a) {
        if (a instanceof ke)
            return a;
        var b = typeof a == Ib
          , c = null;
        b && a.Qe && (c = a.a());
        return oe(xd(b && a.gb ? a.La() : String(a)), c)
    }
    var pe = /^[a-zA-Z0-9-]+$/
      , qe = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , re = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    function se(a, b) {
        var c = String(a);
        if (!pe.test(c))
            throw Error("Invalid tag name <" + c + ">.");
        if (c.toUpperCase()in re)
            throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
        a = String(a);
        c = null;
        var d = "<" + a
          , e = "";
        if (b)
            for (n in b) {
                if (!pe.test(n))
                    throw Error('Invalid attribute name "' + n + '".');
                var f = b[n];
                if (null != f) {
                    var h = a;
                    var k = n;
                    var l = f;
                    if (l instanceof kd)
                        l = nd(l);
                    else if ("style" == k.toLowerCase()) {
                        f = void 0;
                        h = l;
                        if (!xc(h))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                        if (!(h instanceof Nd)) {
                            l = "";
                            for (f in h) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(f))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + f);
                                var m = h[f];
                                null != m && (m = C(m) ? Oc(m, Sd).join(" ") : Sd(m),
                                l += f + ":" + m + ";")
                            }
                            h = l ? Qd(l) : Rd
                        }
                        l = Pd(h)
                    } else {
                        if (/^on/i.test(k))
                            throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                        if (k.toLowerCase()in qe)
                            if (l instanceof qd)
                                l = sd(l).toString();
                            else if (l instanceof Hd)
                                l = Jd(l).toString();
                            else if (z(l))
                                l = Ld(l).La();
                            else
                                throw Error('Attribute "' + k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                    }
                    l.gb && (l = l.La());
                    k = k + '="' + xd(String(l)) + '"';
                    e += " " + k
                }
            }
        var n = d + e;
        d = void 0;
        null != d ? C(d) || (d = [d]) : d = [];
        !0 === jd[a.toLowerCase()] ? n += ">" : (c = te(d),
        n += ">" + me(c).toString() + "</" + a + ">",
        c = c.a());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return ue(n, c)
    }
    function ve(a) {
        function b(f) {
            C(f) ? Mc(f, b) : (f = ne(f),
            e.push(me(f).toString()),
            f = f.a(),
            0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = ne(we)
          , d = c.a()
          , e = [];
        Mc(a, b);
        return oe(e.join(me(c).toString()), d)
    }
    function te(a) {
        return ve(Array.prototype.slice.call(arguments))
    }
    var le = {};
    function oe(a, b) {
        return ue(a, b)
    }
    function ue(a, b) {
        var c = new ke;
        c.b = a;
        c.c = b;
        return c
    }
    ue("<!DOCTYPE html>", 0);
    var we = ue("", 0)
      , xe = ue("<br>", 0);
    var ye = Yc(function() {
        var a = document.createElement($a)
          , b = document.createElement($a);
        b.appendChild(document.createElement($a));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = me(we);
        return !b.parentElement
    });
    function ze(a, b) {
        if (ye())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = me(b)
    }
    function Ae(a, b) {
        b instanceof Hd || b instanceof Hd || (b = typeof b == Ib && b.gb ? b.La() : String(b),
        Kd.test(b) || (b = Aa),
        b = Md(b));
        a.action = Jd(b)
    }
    function Be(a) {
        var b = ud(nd(od));
        a.src = sd(b).toString()
    }
    function Ce(a, b) {
        a.src = sd(b);
        if (null === tc)
            b: {
                b = x.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && sc.test(b)) {
                    tc = b;
                    break b
                }
                tc = ""
            }
        b = tc;
        b && a.setAttribute("nonce", b)
    }
    ;function De(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }
    function Ee(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }
    function Fe(a) {
        return a.replace(/^[\s\xa0]+/, "")
    }
    function Ge(a) {
        return a.replace(/[\s\xa0]+$/, "")
    }
    function He(a) {
        return encodeURIComponent(String(a))
    }
    function Ie(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function Je(a) {
        return a = xd(a, void 0)
    }
    function Ke(a) {
        return -1 != a.indexOf("&") ? "document"in x ? Le(a) : Me(a) : a
    }
    function Le(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = x.document.createElement($a);
        return a.replace(Ne, function(d, e) {
            var f = b[d];
            if (f)
                return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
            isNaN(e) || (f = String.fromCharCode(e)));
            f || (f = ue(d + " ", null),
            ze(c, f),
            f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    }
    function Me(a) {
        return a.replace(/&([^;]+);/g, function(b, c) {
            switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    }
    var Ne = /&([^;\s<&]+);?/g;
    function Oe(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Pe(a) {
        var b = z(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(c, d, e) {
            return d + e.toUpperCase()
        })
    }
    ;function Qe() {
        return H("iPhone") && !H("iPod") && !H("iPad")
    }
    function Re() {
        return Qe() || H("iPad") || H("iPod")
    }
    ;function Se(a) {
        Se[" "](a);
        return a
    }
    Se[" "] = A;
    function Te(a, b) {
        try {
            return Se(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function Ue(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    }
    ;var Ve = H(ra)
      , I = ge()
      , We = H(la)
      , Xe = We || I
      , J = H("Gecko") && !(-1 != ce.toLowerCase().indexOf("webkit") && !H(la)) && !(H("Trident") || H("MSIE")) && !H(la)
      , K = -1 != ce.toLowerCase().indexOf("webkit") && !H(la)
      , Ye = K && H("Mobile")
      , Ze = H("Macintosh")
      , $e = H("Windows")
      , af = H("Android")
      , bf = Qe()
      , cf = H("iPad")
      , df = H("iPod")
      , ef = Re();
    function ff() {
        var a = x.document;
        return a ? a.documentMode : void 0
    }
    var gf;
    a: {
        var jf = ""
          , kf = function() {
            var a = ce;
            if (J)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (We)
                return /Edge\/([\d\.]+)/.exec(a);
            if (I)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (K)
                return /WebKit\/(\S+)/.exec(a);
            if (Ve)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        kf && (jf = kf ? kf[1] : "");
        if (I) {
            var lf = ff();
            if (null != lf && lf > parseFloat(jf)) {
                gf = String(lf);
                break a
            }
        }
        gf = jf
    }
    var mf = gf
      , nf = {};
    function L(a) {
        return Ue(nf, a, function() {
            return 0 <= Fd(mf, a)
        })
    }
    function of(a) {
        return Number(pf) >= a
    }
    var qf;
    qf = x.document && I ? ff() : void 0;
    var pf = qf;
    var rf = he()
      , sf = Qe() || H("iPod")
      , tf = H("iPad")
      , uf = H("Android") && !(ie() || he() || H(ra) || H("Silk"))
      , vf = ie()
      , wf = H("Safari") && !(ie() || H("Coast") || H(ra) || H(la) || H("Edg/") || H("OPR") || he() || H("Silk") || H("Android")) && !Re();
    var xf = null
      , yf = J || K && !wf || Ve || !wf && !I && typeof x.atob == p;
    function zf(a) {
        if (yf)
            return x.atob(a);
        var b = "";
        Af(a, function(c) {
            b += String.fromCharCode(c)
        });
        return b
    }
    function Af(a, b) {
        function c(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = xf[m];
                if (null != n)
                    return n;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Bf();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != k && b(h << 6 & 192 | k))
        }
    }
    function Bf() {
        if (!xf) {
            xf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === xf[f] && (xf[f] = e)
                }
        }
    }
    ;function Cf() {}
    var Df = typeof Uint8Array == p;
    function Ef(a, b, c) {
        a.a = null;
        b || (b = []);
        a.l = void 0;
        a.f = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (!(null === d || typeof d != Ib || C(d) || Df && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.h = {};
        if (c)
            for (b = 0; b < c.length; b++)
                d = c[b],
                d < a.g ? (d += a.f,
                a.b[d] = a.b[d] || Ff) : (Gf(a),
                a.c[d] = a.c[d] || Ff)
    }
    var Ff = [];
    function Gf(a) {
        var b = a.g + a.f;
        a.b[b] || (a.c = a.b[b] = {})
    }
    function Hf(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.b[b];
            return c === Ff ? a.b[b] = [] : c
        }
        if (a.c)
            return c = a.c[b],
            c === Ff ? a.c[b] = [] : c
    }
    function If(a, b, c) {
        b < a.g ? a.b[b + a.f] = c : (Gf(a),
        a.c[b] = c);
        return a
    }
    function Jf(a, b, c) {
        a.a || (a.a = {});
        var d = c ? c.Fb() : c;
        a.a[b] = c;
        If(a, b, d)
    }
    function Kf(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[b]) {
            for (var d = Hf(a, b), e = [], f = 0; f < d.length; f++)
                e[f] = new c(d[f]);
            a.a[b] = e
        }
        (d = a.a[b]) || (d = a.a[b] = []);
        c = new c;
        a = Hf(a, b);
        d.push(c);
        a.push(c.Fb());
        return c
    }
    function Lf(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (C(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && c[d].Fb();
                else
                    c && c.Fb()
            }
    }
    Cf.prototype.Fb = function() {
        Lf(this);
        return this.b
    }
    ;
    Cf.prototype.toString = function() {
        Lf(this);
        return this.b.toString()
    }
    ;
    function Mf(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return z(a) && a.match(/\S+/g) || []
    }
    function Nf(a, b) {
        return a.classList ? a.classList.contains(b) : Sc(Mf(a), b)
    }
    function M(a, b) {
        a.classList ? a.classList.add(b) : Nf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function Of(a, b) {
        if (a.classList)
            Mc(b, function(e) {
                M(a, e)
            });
        else {
            var c = {};
            Mc(Mf(a), function(e) {
                c[e] = !0
            });
            Mc(b, function(e) {
                c[e] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    }
    function Pf(a, b) {
        a.classList ? a.classList.remove(b) : Nf(a, b) && (a.className = Nc(Mf(a), function(c) {
            return c != b
        }).join(" "))
    }
    function Qf(a, b) {
        a.classList ? Mc(b, function(c) {
            Pf(a, c)
        }) : a.className = Nc(Mf(a), function(c) {
            return !Sc(b, c)
        }).join(" ")
    }
    ;var Rf = !I || of(9)
      , Sf = !J && !I || I && of(9) || J && L("1.9.1")
      , Tf = I && !L("9")
      , Uf = I || Ve || K
      , Vf = I && !of(9);
    function N(a, b) {
        this.x = y(a) ? a : 0;
        this.y = y(b) ? b : 0
    }
    function Wf(a) {
        return new N(a.x,a.y)
    }
    function Xf(a, b) {
        return new N(a.x - b.x,a.y - b.y)
    }
    N.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    N.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    N.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    N.prototype.translate = function(a, b) {
        a instanceof N ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        rc(b) && (this.y += b));
        return this
    }
    ;
    function Yf(a, b) {
        this.width = a;
        this.height = b
    }
    Yf.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    Yf.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    Yf.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    Yf.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function Zf(a) {
        return a ? new $f(O(a)) : Hc || (Hc = new $f)
    }
    function ag(a, b) {
        return z(b) ? a.getElementById(b) : b
    }
    function bg(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }
    function cg() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : dg(document, "*", Ga, void 0)
    }
    function eg(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : dg(c, "*", a, b)[0] || null
        }
        return a || null
    }
    function dg(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)
                b = h.className,
                typeof b.split == p && Sc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }
    function fg(a, b) {
        Zc(b, function(c, d) {
            c && typeof c == Ib && c.gb && (c = c.La());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : gg.hasOwnProperty(d) ? a.setAttribute(gg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var gg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function hg(a) {
        a = a.document;
        a = ig(a) ? a.documentElement : a.body;
        return new Yf(a.clientWidth,a.clientHeight)
    }
    function jg(a) {
        var b = kg(a);
        a = a.parentWindow || a.defaultView;
        return I && L("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft,b.scrollTop) : new N(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function kg(a) {
        return a.scrollingElement ? a.scrollingElement : !K && ig(a) ? a.documentElement : a.body || a.documentElement
    }
    function lg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function mg(a, b, c) {
        return ng(document, arguments)
    }
    function ng(a, b) {
        var c = String(b[0])
          , d = b[1];
        if (!Rf && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Je(d.name), '"');
            if (d.type) {
                c.push(' type="', Je(d.type), '"');
                var e = {};
                hd(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z(d) ? c.className = d : C(d) ? c.className = d.join(" ") : fg(c, d));
        2 < b.length && og(a, c, b, 2);
        return c
    }
    function og(a, b, c, d) {
        function e(h) {
            h && b.appendChild(z(h) ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !vc(f) || xc(f) && 0 < f.nodeType ? e(f) : Mc(pg(f) ? Vc(f) : f, e)
        }
    }
    function qg() {
        var a = se("WBR")
          , b = document
          , c = b.createElement(g);
        I ? (a = te(xe, a),
        ze(c, a),
        c.removeChild(c.firstChild)) : ze(c, a);
        if (1 == c.childNodes.length)
            c = c.removeChild(c.firstChild);
        else {
            for (b = b.createDocumentFragment(); c.firstChild; )
                b.appendChild(c.firstChild);
            c = b
        }
        return c
    }
    function ig(a) {
        return "CSS1Compat" == a.compatMode
    }
    function rg(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case oa:
        case na:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case ta:
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    function sg(a, b) {
        og(O(a), a, arguments, 1)
    }
    function tg(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function ug(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    function vg(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    function wg(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function xg(a) {
        return Sf && void 0 != a.children ? a.children : Nc(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }
    function yg(a) {
        return y(a.firstElementChild) ? a.firstElementChild : zg(a.firstChild, !0)
    }
    function zg(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    function Ag(a) {
        return xc(a) && 1 == a.nodeType
    }
    function Bg(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Cg(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (I && !of(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode
              , f = b.parentNode;
            return e == f ? Dg(a, b) : !c && Bg(e, b) ? -1 * Eg(a, b) : !d && Bg(f, a) ? Eg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = O(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(x.Range.START_TO_END, a)
    }
    function Eg(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (; b.parentNode != c; )
            b = b.parentNode;
        return Dg(b, a)
    }
    function Dg(a, b) {
        for (; b = b.previousSibling; )
            if (b == a)
                return -1;
        return 1
    }
    function Fg(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h; )
                f.unshift(h),
                h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b])
                    return f;
            f = h
        }
        return f
    }
    function O(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Gg(a) {
        return a.contentDocument || a.contentWindow.document
    }
    function Hg(a) {
        try {
            return a.contentWindow || (a.contentDocument ? lg(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    function Ig(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            tg(a),
            a.appendChild(O(a).createTextNode(String(b)))
    }
    var Jg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Kg = {
        IMG: " ",
        BR: "\n"
    };
    function Lg(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    }
    function Mg(a) {
        return I && !L("9") ? (a = a.getAttributeNode("tabindex"),
        null != a && a.specified) : a.hasAttribute("tabindex")
    }
    function Ng(a) {
        a = a.tabIndex;
        return rc(a) && 0 <= a && 32768 > a
    }
    function Og(a) {
        if (Tf && null !== a && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Pg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Tf || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Qg(a) {
        var b = [];
        Pg(a, b, !1);
        return b.join("")
    }
    function Pg(a, b, c) {
        if (!(a.nodeName in Jg))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Kg)
                b.push(Kg[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Pg(a, b, c),
                    a = a.nextSibling
    }
    function pg(a) {
        if (a && typeof a.length == Hb) {
            if (xc(a))
                return typeof a.item == p || typeof a.item == Wb;
            if (wc(a))
                return typeof a.item == p
        }
        return !1
    }
    function $f(a) {
        this.a = a || x.document || document
    }
    v = $f.prototype;
    v.j = function(a) {
        return ag(this.a, a)
    }
    ;
    v.D = function(a, b, c) {
        return ng(this.a, arguments)
    }
    ;
    function Rg(a, b) {
        return a.a.createElement(String(b))
    }
    function Sg(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    }
    v.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    v.Qc = tg;
    v.Rh = xg;
    v.bg = yg;
    v.contains = Bg;
    v.ib = Ig;
    v.dg = Og;
    function Tg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    v = Tg.prototype;
    v.contains = function(a) {
        return this && a ? a instanceof Tg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    v.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    v.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    v.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    v.translate = function(a, b) {
        a instanceof N ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        rc(b) && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    function Ug(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    v = Ug.prototype;
    v.contains = function(a) {
        return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    v.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    v.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    v.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    v.translate = function(a, b) {
        a instanceof N ? (this.left += a.x,
        this.top += a.y) : (this.left += a,
        rc(b) && (this.top += b));
        return this
    }
    ;
    function P(a, b, c) {
        if (z(b))
            (b = Vg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Vg(c, d);
                f && (c.style[f] = e)
            }
    }
    var Wg = {};
    function Vg(a, b) {
        var c = Wg[b];
        if (!c) {
            var d = Oe(b);
            c = d;
            void 0 === a.style[d] && (d = (K ? "Webkit" : J ? "Moz" : I ? "ms" : Ve ? "O" : null) + Pe(d),
            void 0 !== a.style[d] && (c = d));
            Wg[b] = c
        }
        return c
    }
    function Xg(a, b) {
        var c = O(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function Yg(a, b) {
        return Xg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Zg(a, b, c) {
        if (b instanceof N) {
            var d = b.x;
            b = b.y
        } else
            d = b,
            b = c;
        a.style.left = $g(d);
        a.style.top = $g(b)
    }
    function ah(a) {
        a = a ? O(a) : document;
        return !I || of(9) || ig(Zf(a).a) ? a.documentElement : a.body
    }
    function bh(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        I && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function ch(a) {
        if (I && !of(8))
            return a.offsetParent;
        var b = O(a)
          , c = Yg(a, Mb)
          , d = "fixed" == c || c == Ca;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = Yg(a, Mb),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ca || "relative" == c))
                return a;
        return null
    }
    function dh(a) {
        for (var b = new Tg(0,Infinity,Infinity,0), c = Zf(a), d = c.a.body, e = c.a.documentElement, f = kg(c.a); a = ch(a); )
            if (!(I && 0 == a.clientWidth || K && 0 == a.clientHeight && a == d) && a != d && a != e && Yg(a, "overflow") != fc) {
                var h = eh(a)
                  , k = new N(a.clientLeft,a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = hg(Sg(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    function eh(a) {
        var b = O(a)
          , c = new N(0,0)
          , d = ah(b);
        if (a == d)
            return c;
        a = bh(a);
        b = jg(Zf(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function fh(a, b) {
        var c = new N(0,0)
          , d = lg(O(a));
        if (!Te(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = eh(a);
            else
                e = bh(a),
                e = new N(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    function $g(a) {
        typeof a == Hb && (a += "px");
        return a
    }
    function gh(a) {
        var b = hh;
        if (Yg(a, "display") != q)
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = rb;
        c.position = Ca;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function hh(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = K && !b && !c;
        return y(b) && !d || !a.getBoundingClientRect ? new Yf(b,c) : (a = bh(a),
        new Yf(a.right - a.left,a.bottom - a.top))
    }
    function Q(a, b) {
        a.style.display = b ? "" : q
    }
    function ih(a, b) {
        b = Zf(b);
        var c = b.a;
        if (I && c.createStyleSheet)
            b = c.createStyleSheet(),
            jh(b, a);
        else {
            c = dg(b.a, "HEAD", void 0, void 0)[0];
            if (!c) {
                var d = dg(b.a, "BODY", void 0, void 0)[0];
                c = b.D("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.D("STYLE");
            jh(d, a);
            b.appendChild(c, d)
        }
    }
    function jh(a, b) {
        b = ae(b);
        I && y(a.cssText) ? a.cssText = b : a.innerHTML = b
    }
    function kh(a) {
        return Sb == Yg(a, Za)
    }
    var lh = J ? "MozUserSelect" : K || We ? "WebkitUserSelect" : null;
    function mh(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (lh) {
            if (b = b ? q : "",
            a.style && (a.style[lh] = b),
            c) {
                a = 0;
                for (var d; d = c[a]; a++)
                    d.style && (d.style[lh] = b)
            }
        } else if (I || Ve)
            if (b = b ? "on" : "",
            a.setAttribute("unselectable", b),
            c)
                for (a = 0; d = c[a]; a++)
                    d.setAttribute("unselectable", b)
    }
    function nh(a) {
        return new Yf(a.offsetWidth,a.offsetHeight)
    }
    function oh(a, b) {
        var c = ig(Zf(O(a)).a);
        if (!I || L("10") || c && L("8"))
            ph(a, b, "content-box");
        else {
            var d = a.style;
            c ? (d.pixelWidth = b.width,
            d.pixelHeight = b.height) : (c = qh(a),
            a = rh(a),
            d.pixelWidth = b.width + a.left + c.left + c.right + a.right,
            d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
        }
    }
    function ph(a, b, c) {
        a = a.style;
        J ? a.MozBoxSizing = c : K ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }
    function sh(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c]
          , f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    }
    function th(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? sh(a, b, "left", "pixelLeft") : 0
    }
    function qh(a) {
        if (I) {
            var b = th(a, Kb)
              , c = th(a, Lb)
              , d = th(a, "paddingTop");
            a = th(a, "paddingBottom");
            return new Tg(d,c,a,b)
        }
        b = Xg(a, Kb);
        c = Xg(a, Lb);
        d = Xg(a, "paddingTop");
        a = Xg(a, "paddingBottom");
        return new Tg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    var uh = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function vh(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == q)
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in uh ? uh[b] : sh(a, b, "left", "pixelLeft")
    }
    function rh(a) {
        if (I && !of(9)) {
            var b = vh(a, "borderLeft")
              , c = vh(a, "borderRight")
              , d = vh(a, "borderTop");
            a = vh(a, "borderBottom");
            return new Tg(d,c,a,b)
        }
        b = Xg(a, "borderLeftWidth");
        c = Xg(a, "borderRightWidth");
        d = Xg(a, "borderTopWidth");
        a = Xg(a, "borderBottomWidth");
        return new Tg(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    }
    ;var wh;
    id(["A", "AREA", "BUTTON", "HEAD", oa, "LINK", "MENU", "META", "OPTGROUP", qa, "PROGRESS", "STYLE", "SELECT", "SOURCE", va, wa, "TRACK"]);
    function xh(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }
    function yh(a, b, c) {
        C(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (wh || (wh = {
            atomic: !1,
            autocomplete: q,
            dropeffect: q,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: ec,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: q,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }),
        c = wh,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
    ;function R() {
        this.ub = this.ub;
        this.wa = this.wa
    }
    R.prototype.ub = !1;
    R.prototype.M = function() {
        this.ub || (this.ub = !0,
        this.F())
    }
    ;
    function zh(a, b) {
        a.ub ? y(void 0) ? b.call(void 0) : b() : (a.wa || (a.wa = []),
        a.wa.push(y(void 0) ? D(b, void 0) : b))
    }
    R.prototype.F = function() {
        if (this.wa)
            for (; this.wa.length; )
                this.wa.shift()()
    }
    ;
    function Ah(a) {
        a && typeof a.M == p && a.M()
    }
    ;var Bh = !I || of(9)
      , Ch = !I || of(9)
      , Dh = I && !L("9")
      , Eh = function() {
        if (!x.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            x.addEventListener("test", A, b),
            x.removeEventListener("test", A, b)
        } catch (c) {}
        return a
    }();
    function Fh(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.Tg = !0
    }
    Fh.prototype.stopPropagation = function() {
        this.c = !0
    }
    ;
    Fh.prototype.b = function() {
        this.Tg = !1
    }
    ;
    var Gh = {
        pc: Bb,
        qc: Fb,
        oc: "mousecancel",
        $j: Cb,
        bk: Eb,
        ak: Db,
        Yj: "mouseenter",
        Zj: "mouseleave"
    };
    function Hh(a, b) {
        Fh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.a = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? J && (Te(b, "nodeName") || (b = null)) : c == Eb ? b = a.fromElement : c == Db && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.f = Ze ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = z(a.pointerType) ? a.pointerType : Ih[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.b()
        }
    }
    E(Hh, Fh);
    var Jh = [1, 4, 2]
      , Ih = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    function Kh(a) {
        return Bh ? 0 == a.a.button : a.type == Ta ? !0 : !!(a.a.button & Jh[0])
    }
    Hh.prototype.stopPropagation = function() {
        Hh.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    }
    ;
    Hh.prototype.b = function() {
        Hh.m.b.call(this);
        var a = this.a;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Dh)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Lh = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Mh(a) {
        return !(!a || !a[Lh])
    }
    var Nh = 0;
    function Oh(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Hd = e;
        this.key = ++Nh;
        this.mc = this.dd = !1
    }
    function Ph(a) {
        a.mc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Hd = null
    }
    ;function Qh(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Qh.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [],
        this.b++);
        var h = Rh(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.dd = !1)) : (b = new Oh(b,this.src,f,!!d,e),
        b.dd = c,
        a.push(b));
        return b
    }
    ;
    Qh.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = Rh(e, b, c, d);
        return -1 < b ? (Ph(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.a[a],
        this.b--),
        !0) : !1
    }
    ;
    function Sh(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = Tc(a.a[c], b);
        d && (Ph(b),
        0 == a.a[c].length && (delete a.a[c],
        a.b--));
        return d
    }
    function Th(a, b) {
        b = b && b.toString();
        var c = 0, d;
        for (d in a.a)
            if (!b || d == b) {
                for (var e = a.a[d], f = 0; f < e.length; f++)
                    ++c,
                    Ph(e[f]);
                delete a.a[d];
                a.b--
            }
        return c
    }
    Qh.prototype.Ec = function(a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Rh(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    Qh.prototype.hasListener = function(a, b) {
        var c = y(a)
          , d = c ? a.toString() : ""
          , e = y(b);
        return $c(this.a, function(f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    function Rh(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.mc && f.listener == b && f.capture == !!c && f.Hd == d)
                return e
        }
        return -1
    }
    ;var Uh = "closure_lm_" + (1E6 * Math.random() | 0)
      , Vh = {}
      , Wh = 0;

    function S(a, b, c, d, e) {
        if (d && d.once) {
            return Xh(a, b, c, d, e);
        }

        if (C(b)) {
            for (var f = 0; f < b.length; f++)
                S(a, b[f], c, d, e);
            return null
        }
        c = Yh(c);
        return Mh(a) ? a.w(b, c, xc(d) ? !!d.capture : !!d, e) : Zh(a, b, c, !1, d, e);
    }

    function Zh(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = xc(e) ? !!e.capture : !!e
          , k = $h(a);
        k || (a[Uh] = k = new Qh(a));
        c = k.add(b, c, d, h, f);
        if (c.a)
            return c;
        d = ai();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Eh || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(bi(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Wh++;
        return c
    }
    function ai() {
        var a = ci
          , b = Ch ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Xh(a, b, c, d, e) {
        if (C(b)) {
            for (var f = 0; f < b.length; f++)
                Xh(a, b[f], c, d, e);
            return null
        }
        c = Yh(c);
        return Mh(a) ? a.Ab(b, c, xc(d) ? !!d.capture : !!d, e) : Zh(a, b, c, !0, d, e)
    }
    function di(a, b, c, d, e) {
        if (C(b))
            for (var f = 0; f < b.length; f++)
                di(a, b[f], c, d, e);
        else
            d = xc(d) ? !!d.capture : !!d,
            c = Yh(c),
            Mh(a) ? a.ba(b, c, d, e) : a && (a = $h(a)) && (b = a.Ec(b, c, d, e)) && ei(b)
    }
    function ei(a) {
        if (rc(a) || !a || a.mc)
            return !1;
        var b = a.src;
        if (Mh(b))
            return Sh(b.Ka, a);
        var c = a.type
          , d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(bi(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Wh--;
        (c = $h(b)) ? (Sh(c, a),
        0 == c.b && (c.src = null,
        b[Uh] = null)) : Ph(a);
        return !0
    }
    function fi(a, b) {
        if (!a)
            return 0;
        if (Mh(a))
            return a.Ka ? Th(a.Ka, b) : 0;
        a = $h(a);
        if (!a)
            return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f)
                    ei(e[f]) && ++c;
        return c
    }
    function bi(a) {
        return a in Vh ? Vh[a] : Vh[a] = "on" + a
    }
    function gi(a, b, c, d) {
        var e = !0;
        if (a = $h(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.mc && (f = hi(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    function hi(a, b) {
        var c = a.listener
          , d = a.Hd || a.src;
        a.dd && ei(a);
        return c.call(d, b)
    }
    function ci(a, b) {
        if (a.mc)
            return !0;
        if (!Ch) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = x, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                        null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new Hh(d,this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.c && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = gi(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.c && e < d.length; e++)
                    b.currentTarget = d[e],
                    f = gi(d[e], a, !1, b),
                    c = c && f
            }
            return c
        }
        return hi(a, new Hh(b,this))
    }
    function $h(a) {
        a = a[Uh];
        return a instanceof Qh ? a : null
    }
    var ii = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Yh(a) {
        if (wc(a))
            return a;
        a[ii] || (a[ii] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[ii]
    }
    ;function ji(a) {
        R.call(this);
        this.b = a;
        this.a = {}
    }
    E(ji, R);
    var ki = [];
    v = ji.prototype;
    v.w = function(a, b, c, d) {
        return li(this, a, b, c, d)
    }
    ;
    function mi(a, b, c, d) {
        li(a, b, Ta, c, !1, d)
    }
    function li(a, b, c, d, e, f) {
        C(c) || (c && (ki[0] = c.toString()),
        c = ki);
        for (var h = 0; h < c.length; h++) {
            var k = S(b, c[h], d || a.handleEvent, e || !1, f || a.b || a);
            if (!k)
                break;
            a.a[k.key] = k
        }
        return a
    }
    v.Ab = function(a, b, c, d) {
        return ni(this, a, b, c, d)
    }
    ;
    function ni(a, b, c, d, e, f) {
        if (C(c))
            for (var h = 0; h < c.length; h++)
                ni(a, b, c[h], d, e, f);
        else {
            b = Xh(b, c, d || a.handleEvent, e, f || a.b || a);
            if (!b)
                return a;
            a.a[b.key] = b
        }
        return a
    }
    v.ba = function(a, b, c, d, e) {
        if (C(b))
            for (var f = 0; f < b.length; f++)
                this.ba(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = xc(d) ? !!d.capture : !!d,
            e = e || this.b || this,
            c = Yh(c),
            d = !!d,
            b = Mh(a) ? a.Ec(b, c, d, e) : a ? (a = $h(a)) ? a.Ec(b, c, d, e) : null : null,
            b && (ei(b),
            delete this.a[b.key]);
        return this
    }
    ;
    function oi(a) {
        Zc(a.a, function(b, c) {
            this.a.hasOwnProperty(c) && ei(b)
        }, a);
        a.a = {}
    }
    v.F = function() {
        ji.m.F.call(this);
        oi(this)
    }
    ;
    v.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function pi() {
        R.call(this);
        this.Ka = new Qh(this);
        this.Fh = this;
        this.lf = null
    }
    E(pi, R);
    pi.prototype[Lh] = !0;
    v = pi.prototype;
    v.md = t("lf");
    v.uf = ic("lf");
    v.addEventListener = function(a, b, c, d) {
        S(this, a, b, c, d)
    }
    ;
    v.removeEventListener = function(a, b, c, d) {
        di(this, a, b, c, d)
    }
    ;
    v.dispatchEvent = function(a) {
        var b = this.md();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.md())
                c.push(b),
                ++d
        }
        b = this.Fh;
        d = a.type || a;
        if (z(a))
            a = new Fh(a,b);
        else if (a instanceof Fh)
            a.target = a.target || b;
        else {
            var e = a;
            a = new Fh(d,b);
            hd(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.c && 0 <= f; f--) {
                var h = a.currentTarget = c[f];
                e = qi(h, d, !0, a) && e
            }
        a.c || (h = a.currentTarget = b,
        e = qi(h, d, !0, a) && e,
        a.c || (e = qi(h, d, !1, a) && e));
        if (c)
            for (f = 0; !a.c && f < c.length; f++)
                h = a.currentTarget = c[f],
                e = qi(h, d, !1, a) && e;
        return e
    }
    ;
    v.F = function() {
        pi.m.F.call(this);
        this.Ka && Th(this.Ka, void 0);
        this.lf = null
    }
    ;
    v.w = function(a, b, c, d) {
        return this.Ka.add(String(a), b, !1, c, d)
    }
    ;
    v.Ab = function(a, b, c, d) {
        return this.Ka.add(String(a), b, !0, c, d)
    }
    ;
    v.ba = function(a, b, c, d) {
        return this.Ka.remove(String(a), b, c, d)
    }
    ;
    function qi(a, b, c, d) {
        b = a.Ka.a[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.mc && h.capture == c) {
                var k = h.listener
                  , l = h.Hd || h.src;
                h.dd && Sh(a.Ka, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Tg
    }
    v.Ec = function(a, b, c, d) {
        return this.Ka.Ec(String(a), b, c, d)
    }
    ;
    v.hasListener = function(a, b) {
        return this.Ka.hasListener(y(a) ? String(a) : void 0, b)
    }
    ;
    function ri() {}
    uc(ri);
    ri.prototype.a = 0;
    function T(a) {
        pi.call(this);
        this.b = a || Zf();
        this.la = si;
        this.ia = null;
        this.U = !1;
        this.A = null;
        this.K = void 0;
        this.G = this.s = this.B = this.ra = null;
        this.jb = !1
    }
    E(T, pi);
    T.prototype.tb = ri.X();
    var si = null;
    function ti(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? db : La;
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }
    function ui(a) {
        return a.ia || (a.ia = ":" + (a.tb.a++).toString(36))
    }
    function vi(a, b) {
        if (a.B && a.B.G) {
            var c = a.B.G
              , d = a.ia;
            d in c && delete c[d];
            ed(a.B.G, b, a)
        }
        a.ia = b
    }
    v = T.prototype;
    v.j = t("A");
    function wi(a, b) {
        return a.A ? eg(b, a.A || a.b.a) : null
    }
    function U(a) {
        a.K || (a.K = new ji(a));
        return a.K
    }
    function xi(a, b) {
        if (a == b)
            throw Error(xa);
        if (b && a.B && a.ia && yi(a.B, a.ia) && a.B != b)
            throw Error(xa);
        a.B = b;
        T.m.uf.call(a, b)
    }
    v.wb = t("B");
    v.uf = function(a) {
        if (this.B && this.B != a)
            throw Error("Method not supported");
        T.m.uf.call(this, a)
    }
    ;
    v.D = function() {
        this.A = Rg(this.b, g)
    }
    ;
    v.fa = function(a) {
        zi(this, a)
    }
    ;
    function zi(a, b, c) {
        if (a.U)
            throw Error(ka);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.U || a.O()
    }
    function Ai(a, b) {
        if (a.U)
            throw Error(ka);
        if (b && a.Be(b)) {
            a.jb = !0;
            var c = O(b);
            a.b && a.b.a == c || (a.b = Zf(b));
            a.S(b);
            a.O()
        } else
            throw Error("Invalid element to decorate");
    }
    v.Be = u(!0);
    v.S = ic("A");
    v.O = function() {
        this.U = !0;
        Bi(this, function(a) {
            !a.U && a.j() && a.O()
        })
    }
    ;
    v.Z = function() {
        Bi(this, function(a) {
            a.U && a.Z()
        });
        this.K && oi(this.K);
        this.U = !1
    }
    ;
    v.F = function() {
        this.U && this.Z();
        this.K && (this.K.M(),
        delete this.K);
        Bi(this, function(a) {
            a.M()
        });
        !this.jb && this.A && wg(this.A);
        this.B = this.ra = this.A = this.G = this.s = null;
        T.m.F.call(this)
    }
    ;
    function V(a, b) {
        return ui(a) + "." + b
    }
    v.rc = function(a, b) {
        this.he(a, Ci(this), b)
    }
    ;
    v.he = function(a, b, c) {
        if (a.U && (c || !this.U))
            throw Error(ka);
        if (0 > b || b > Ci(this))
            throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {},
        this.s = []);
        if (a.wb() == this) {
            var d = ui(a);
            this.G[d] = a;
            Tc(this.s, a)
        } else
            ed(this.G, ui(a), a);
        xi(a, this);
        Wc(this.s, b, 0, a);
        a.U && this.U && a.wb() == this ? (c = this.td(),
        b = c.childNodes[b] || null,
        b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(),
        b = Di(this, b + 1),
        zi(a, this.td(), b ? b.A : null)) : this.U && !a.U && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.O()
    }
    ;
    v.td = t("A");
    function Ei(a) {
        null == a.la && (a.la = kh(a.U ? a.A : a.b.a.body));
        return a.la
    }
    function Ci(a) {
        return a.s ? a.s.length : 0
    }
    function yi(a, b) {
        a.G && b ? (a = a.G,
        b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }
    function Di(a, b) {
        return a.s ? a.s[b] || null : null
    }
    function Bi(a, b, c) {
        a.s && Mc(a.s, b, c)
    }
    function Fi(a, b) {
        return a.s && b ? Lc(a.s, b) : -1
    }
    v.removeChild = function(a, b) {
        if (a) {
            var c = z(a) ? a : ui(a);
            a = yi(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                Tc(this.s, a);
                b && (a.Z(),
                a.A && wg(a.A));
                xi(a, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    v.Qc = function(a) {
        for (var b = []; this.s && 0 != this.s.length; )
            b.push(this.removeChild(Di(this, 0), a));
        return b
    }
    ;
    function Gi() {}
    var Hi;
    uc(Gi);
    var Ii = {
        button: "pressed",
        checkbox: Ra,
        menuitem: Tb,
        menuitemcheckbox: Ra,
        menuitemradio: Ra,
        radio: Ra,
        tab: Tb,
        treeitem: Tb
    };
    v = Gi.prototype;
    v.Yb = hc();
    v.D = function(a) {
        return a.b.D(g, Ji(this, a).join(" "), a.ea())
    }
    ;
    v.zb = function(a) {
        return a
    }
    ;
    function Ki(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            I && !L("7") && (d = Li(Mf(a), b),
            d.push(b));
            (c ? Of : Qf)(a, d)
        }
    }
    v.wd = u(!0);
    v.Oa = function(a, b) {
        b.id && vi(a, b.id);
        var c = this.zb(b);
        c && c.firstChild ? Mi(a, c.firstChild.nextSibling ? Vc(c.childNodes) : c.firstChild) : a.Mb = null;
        var d = 0
          , e = this.da()
          , f = this.da()
          , h = !1
          , k = !1
          , l = !1
          , m = Vc(Mf(b));
        Mc(m, function(r) {
            h || r != e ? k || r != f ? d |= this.od(r) : k = !0 : (h = !0,
            f == e && (k = !0));
            1 == this.od(r) && Mg(c) && Ng(c) && Lg(c, !1)
        }, this);
        a.V = d;
        h || (m.push(e),
        f == e && (k = !0));
        k || m.push(f);
        (a = a.ue) && m.push.apply(m, a);
        if (I && !L("7")) {
            var n = Li(m);
            0 < n.length && (m.push.apply(m, n),
            l = !0)
        }
        if (!h || !k || a || l)
            b.className = m.join(" ");
        return b
    }
    ;
    v.gg = function(a) {
        Ei(a) && this.Ge(a.j(), !0);
        a.isEnabled() && this.Zb(a, a.isVisible())
    }
    ;
    function Oi(a, b, c) {
        if (a = c || a.Yb())
            c = b.getAttribute("role") || null,
            a != c && xh(b, a)
    }
    function Pi(a, b, c) {
        b.isVisible() || yh(c, rb, !b.isVisible());
        b.isEnabled() || a.Wa(c, 1, !b.isEnabled());
        b.aa & 8 && a.Wa(c, 8, !!(b.V & 8));
        b.aa & 16 && a.Wa(c, 16, !!(b.V & 16));
        b.aa & 64 && a.Wa(c, 64, !!(b.V & 64))
    }
    v.xd = function(a, b) {
        mh(a, !b, !I && !Ve)
    }
    ;
    v.Ge = function(a, b) {
        Ki(a, this.da() + "-rtl", b)
    }
    ;
    v.Fe = function(a) {
        var b;
        return a.aa & 32 && (b = a.j()) ? Mg(b) && Ng(b) : !1
    }
    ;
    v.Zb = function(a, b) {
        var c;
        if (a.aa & 32 && (c = a.j())) {
            if (!b && a.V & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.V & 32 && a.hg(null)
            }
            (Mg(c) && Ng(c)) != b && Lg(c, b)
        }
    }
    ;
    v.I = function(a, b) {
        Q(a, b);
        a && yh(a, rb, !b)
    }
    ;
    v.Jc = function(a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.Dc(b);
            e && Ki(a, e, c);
            this.Wa(d, b, c)
        }
    }
    ;
    v.Wa = function(a, b, c) {
        Hi || (Hi = {
            1: "disabled",
            8: Tb,
            16: Ra,
            64: "expanded"
        });
        b = Hi[b];
        var d = a.getAttribute("role") || null;
        d && (d = Ii[d] || b,
        b = b == Ra || b == Tb ? d : b);
        b && yh(a, b, c)
    }
    ;
    v.Ic = function(a, b) {
        var c = this.zb(a);
        c && (tg(c),
        b && (z(b) ? Ig(c, b) : (a = function(d) {
            if (d) {
                var e = O(c);
                c.appendChild(z(d) ? e.createTextNode(d) : d)
            }
        }
        ,
        C(b) ? Mc(b, a) : !vc(b) || "nodeType"in b ? a(b) : Mc(Vc(b), a))))
    }
    ;
    v.da = u("goog-control");
    function Ji(a, b) {
        var c = a.da()
          , d = [c]
          , e = a.da();
        e != c && d.push(e);
        c = b.V;
        for (e = []; c; ) {
            var f = c & -c;
            e.push(a.Dc(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.ue) && d.push.apply(d, a);
        I && !L("7") && d.push.apply(d, Li(d));
        return d
    }
    function Li(a, b) {
        var c = [];
        b && (a = Uc(a, [b]));
        Mc([], function(d) {
            !Qc(d, Dc(Sc, a)) || b && !Sc(d, b) || c.push(d.join("_"))
        });
        return c
    }
    v.Dc = function(a) {
        this.a || Qi(this);
        return this.a[a]
    }
    ;
    v.od = function(a) {
        if (!this.c) {
            this.a || Qi(this);
            var b = this.a, c = {}, d;
            for (d in b)
                c[b[d]] = d;
            this.c = c
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a
    }
    ;
    function Qi(a) {
        var b = a.da();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    ;function Ri() {}
    E(Ri, Gi);
    uc(Ri);
    v = Ri.prototype;
    v.Yb = u(Na);
    v.Wa = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            yh(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            Ri.m.Wa.call(this, a, b, c)
        }
    }
    ;
    v.D = function(a) {
        var b = Ri.m.D.call(this, a)
          , c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.Aa()) && this.ya(b, c);
        a.aa & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    }
    ;
    v.Oa = function(a, b) {
        b = Ri.m.Oa.call(this, a, b);
        var c = this.Aa(b);
        a.g = c;
        a.l = b.title;
        a.aa & 16 && this.Wa(b, 16, !!(a.V & 16));
        return b
    }
    ;
    v.Aa = A;
    v.ya = A;
    v.da = u("goog-button");
    function Si(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        if (Ti(a.keyCode))
            return !0;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !J;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    }
    function Ui(a, b, c, d, e, f) {
        if (K && !L("525"))
            return !0;
        if (Ze && e)
            return Ti(a);
        if (e && !d)
            return !1;
        if (!J) {
            rc(b) && (b = Vi(b));
            var h = 17 == b || 18 == b || Ze && 91 == b;
            if ((!c || Ze) && h || Ze && 16 == b && (d || f))
                return !1
        }
        if ((K || We) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (I && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return J ? f || e ? !1 : !(c && d) : !0;
        case 27:
            return !(K || We || J)
        }
        return J && (d || e || f) ? !1 : Ti(a)
    }
    function Ti(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (K || We) && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
            return !0;
        case 173:
            return J;
        default:
            return !1
        }
    }
    function Vi(a) {
        if (J)
            a = Wi(a);
        else if (Ze && K)
            switch (a) {
            case 93:
                a = 91
            }
        return a
    }
    function Wi(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    }
    ;function Xi(a, b) {
        pi.call(this);
        a && Yi(this, a, b)
    }
    E(Xi, pi);
    v = Xi.prototype;
    v.A = null;
    v.Md = null;
    v.Ve = null;
    v.Nd = null;
    v.Fa = -1;
    v.hb = -1;
    v.ke = !1;
    var Zi = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }
      , $i = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }
      , aj = !K || L("525")
      , bj = Ze && J;
    v = Xi.prototype;
    v.ki = function(a) {
        if (K || We)
            if (17 == this.Fa && !a.ctrlKey || 18 == this.Fa && !a.altKey || Ze && 91 == this.Fa && !a.metaKey)
                this.hb = this.Fa = -1;
        -1 == this.Fa && (a.ctrlKey && 17 != a.keyCode ? this.Fa = 17 : a.altKey && 18 != a.keyCode ? this.Fa = 18 : a.metaKey && 91 != a.keyCode && (this.Fa = 91));
        aj && !Ui(a.keyCode, this.Fa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.hb = Vi(a.keyCode),
        bj && (this.ke = a.altKey))
    }
    ;
    v.li = function(a) {
        this.hb = this.Fa = -1;
        this.ke = a.altKey
    }
    ;
    v.handleEvent = function(a) {
        var b = a.a
          , c = b.altKey;
        if (I && a.type == zb) {
            var d = this.hb;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else
            (K || We) && a.type == zb ? (d = this.hb,
            e = 0 <= b.charCode && 63232 > b.charCode && Ti(d) ? b.charCode : 0) : Ve && !K ? (d = this.hb,
            e = Ti(d) ? b.keyCode : 0) : (a.type == zb ? (bj && (c = this.ke),
            b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
            e = 0) : (d = this.hb,
            e = b.charCode) : (d = b.keyCode || this.hb,
            e = b.charCode || 0)) : (d = b.keyCode || this.hb,
            e = b.charCode || 0),
            Ze && 63 == e && 224 == d && (d = 191));
        var f = d = Vi(d);
        d ? 63232 <= d && d in Zi ? f = Zi[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in $i && (f = $i[b.keyIdentifier]);
        J && aj && a.type == zb && !Ui(f, this.Fa, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Fa,
        this.Fa = f,
        b = new cj(f,e,a,b),
        b.altKey = c,
        this.dispatchEvent(b))
    }
    ;
    v.j = t("A");
    function Yi(a, b, c) {
        a.Nd && dj(a);
        a.A = b;
        a.Md = S(a.A, zb, a, c);
        a.Ve = S(a.A, yb, a.ki, c, a);
        a.Nd = S(a.A, "keyup", a.li, c, a)
    }
    function dj(a) {
        a.Md && (ei(a.Md),
        ei(a.Ve),
        ei(a.Nd),
        a.Md = null,
        a.Ve = null,
        a.Nd = null);
        a.A = null;
        a.Fa = -1;
        a.hb = -1
    }
    v.F = function() {
        Xi.m.F.call(this);
        dj(this)
    }
    ;
    function cj(a, b, c, d) {
        Hh.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c
    }
    E(cj, Hh);
    function ej(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!wc(b))
            throw Error("Invalid decorator function " + b);
        fj[a] = b
    }
    var gj = {}
      , fj = {};
    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b; ) {
                d = yc(b);
                if (d = gj[d])
                    break;
                b = b.m ? b.m.constructor : null
            }
            b = d ? wc(d.X) ? d.X() : new d : null
        }
        this.a = b;
        this.Mb = y(a) ? a : null
    }
    E(W, T);
    v = W.prototype;
    v.Mb = null;
    v.V = 0;
    v.aa = 39;
    v.kb = 255;
    v.Uc = 0;
    v.ga = !0;
    v.ue = null;
    v.Ne = !0;
    v.$c = !1;
    function hj(a, b) {
        a.U && b != a.Ne && ij(a, b);
        a.Ne = b
    }
    v.D = function() {
        var a = this.a.D(this);
        this.A = a;
        Oi(this.a, a, this.Fc());
        this.$c || this.a.xd(a, !1);
        this.isVisible() || this.a.I(a, !1)
    }
    ;
    v.Fc = u(null);
    v.td = function() {
        return this.a.zb(this.j())
    }
    ;
    v.Be = function(a) {
        return this.a.wd(a)
    }
    ;
    v.S = function(a) {
        this.A = a = this.a.Oa(this, a);
        Oi(this.a, a, this.Fc());
        this.$c || this.a.xd(a, !1);
        this.ga = a.style.display != q
    }
    ;
    v.O = function() {
        W.m.O.call(this);
        Pi(this.a, this, this.A);
        this.a.gg(this);
        if (this.aa & -2 && (this.Ne && ij(this, !0),
        this.aa & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new Xi);
                Yi(b, a);
                U(this).w(b, "key", this.Ga).w(a, db, this.Vh).w(a, La, this.hg)
            }
        }
    }
    ;
    function ij(a, b) {
        var c = U(a)
          , d = a.j();
        b ? (c.w(d, Gh.pc, a.Lc).w(d, [Gh.qc, Gh.oc], a.bc).w(d, Eb, a.He).w(d, Db, a.Oe),
        a.Nc != A && c.w(d, Xa, a.Nc),
        I && (L(9) || c.w(d, Ya, a.lg),
        a.h || (a.h = new jj(a),
        zh(a, Dc(Ah, a.h))))) : (c.ba(d, Gh.pc, a.Lc).ba(d, [Gh.qc, Gh.oc], a.bc).ba(d, Eb, a.He).ba(d, Db, a.Oe),
        a.Nc != A && c.ba(d, Xa, a.Nc),
        I && (L(9) || c.ba(d, Ya, a.lg),
        Ah(a.h),
        a.h = null))
    }
    v.Z = function() {
        W.m.Z.call(this);
        this.f && dj(this.f);
        this.isVisible() && this.isEnabled() && this.a.Zb(this, !1)
    }
    ;
    v.F = function() {
        W.m.F.call(this);
        this.f && (this.f.M(),
        delete this.f);
        delete this.a;
        this.h = this.ue = this.Mb = null
    }
    ;
    v.ea = t("Mb");
    v.Nb = function(a) {
        this.a.Ic(this.j(), a);
        this.Mb = a
    }
    ;
    function Mi(a, b) {
        a.Mb = b
    }
    v.bb = function() {
        var a = this.ea();
        if (!a)
            return "";
        a = z(a) ? a : C(a) ? Oc(a, Qg).join("") : Og(a);
        return Ee(a)
    }
    ;
    v.Wg = function(a) {
        this.Nb(a)
    }
    ;
    v.isVisible = t("ga");
    v.I = function(a, b) {
        return b || this.ga != a && this.dispatchEvent(a ? "show" : tb) ? ((b = this.j()) && this.a.I(b, a),
        this.isEnabled() && this.a.Zb(this, a),
        this.ga = a,
        !0) : !1
    }
    ;
    v.isEnabled = function() {
        return !(this.V & 1)
    }
    ;
    v.ka = function(a) {
        var b = this.wb();
        b && typeof b.isEnabled == p && !b.isEnabled() || !kj(this, 1, !a) || (a || (lj(this, !1),
        mj(this, !1)),
        this.isVisible() && this.a.Zb(this, a),
        nj(this, 1, !a, !0))
    }
    ;
    function mj(a, b) {
        kj(a, 2, b) && nj(a, 2, b)
    }
    v.dc = function() {
        return !!(this.V & 4)
    }
    ;
    function lj(a, b) {
        kj(a, 4, b) && nj(a, 4, b)
    }
    function oj(a, b) {
        kj(a, 64, b) && nj(a, 64, b)
    }
    function nj(a, b, c, d) {
        d || 1 != b ? a.aa & b && c != !!(a.V & b) && (a.a.Jc(a, b, c),
        a.V = c ? a.V | b : a.V & ~b) : a.ka(!c)
    }
    v.sa = function(a, b) {
        if (this.U && this.V & a && !b)
            throw Error(ka);
        !b && this.V & a && nj(this, a, !1);
        this.aa = b ? this.aa | a : this.aa & ~a
    }
    ;
    function pj(a, b) {
        return !!(a.kb & b) && !!(a.aa & b)
    }
    function kj(a, b, c) {
        return !!(a.aa & b) && !!(a.V & b) != c && (!(a.Uc & b) || a.dispatchEvent(ti(b, c))) && !a.ub
    }
    v.He = function(a) {
        (!a.relatedTarget || !Bg(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && pj(this, 2) && mj(this, !0)
    }
    ;
    v.Oe = function(a) {
        a.relatedTarget && Bg(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (pj(this, 4) && lj(this, !1),
        pj(this, 2) && mj(this, !1))
    }
    ;
    v.Nc = A;
    v.Lc = function(a) {
        this.isEnabled() && (pj(this, 2) && mj(this, !0),
        !Kh(a) || K && Ze && a.ctrlKey || (pj(this, 4) && lj(this, !0),
        this.a && this.a.Fe(this) && this.j().focus()));
        this.$c || !Kh(a) || K && Ze && a.ctrlKey || a.b()
    }
    ;
    v.bc = function(a) {
        this.isEnabled() && (pj(this, 2) && mj(this, !0),
        this.dc() && this.kc(a) && pj(this, 4) && lj(this, !1))
    }
    ;
    v.lg = function(a) {
        this.isEnabled() && this.kc(a)
    }
    ;
    v.kc = function(a) {
        if (pj(this, 16)) {
            var b = !(this.V & 16);
            kj(this, 16, b) && nj(this, 16, b)
        }
        pj(this, 8) && kj(this, 8, !0) && nj(this, 8, !0);
        pj(this, 64) && oj(this, !(this.V & 64));
        b = new Fh(Da,this);
        a && (b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.f = a.f);
        return this.dispatchEvent(b)
    }
    ;
    v.Vh = function() {
        pj(this, 32) && kj(this, 32, !0) && nj(this, 32, !0)
    }
    ;
    v.hg = function() {
        pj(this, 4) && lj(this, !1);
        pj(this, 32) && kj(this, 32, !1) && nj(this, 32, !1)
    }
    ;
    v.Ga = function(a) {
        return this.isVisible() && this.isEnabled() && this.Kc(a) ? (a.b(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    v.Kc = function(a) {
        return 13 == a.keyCode && this.kc(a)
    }
    ;
    if (!wc(W))
        throw Error("Invalid component class " + W);
    if (!wc(Gi))
        throw Error("Invalid renderer class " + Gi);
    var qj = yc(W);
    gj[qj] = Gi;
    ej("goog-control", function() {
        return new W(null)
    });
    function jj(a) {
        R.call(this);
        this.b = a;
        this.a = !1;
        this.c = new ji(this);
        zh(this, Dc(Ah, this.c));
        a = this.b.A;
        this.c.w(a, Bb, this.g).w(a, Fb, this.h).w(a, Ta, this.f)
    }
    E(jj, R);
    var rj = !I || of(9);
    jj.prototype.g = function() {
        this.a = !1
    }
    ;
    jj.prototype.h = function() {
        this.a = !0
    }
    ;
    function sj(a, b) {
        if (!rj)
            return a.button = 0,
            a.type = b,
            a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }
    jj.prototype.f = function(a) {
        if (this.a)
            this.a = !1;
        else {
            var b = a.a
              , c = b.button
              , d = b.type
              , e = sj(b, Bb);
            this.b.Lc(new Hh(e,a.currentTarget));
            e = sj(b, Fb);
            this.b.bc(new Hh(e,a.currentTarget));
            rj || (b.button = c,
            b.type = d)
        }
    }
    ;
    jj.prototype.F = function() {
        this.b = null;
        jj.m.F.call(this)
    }
    ;
    function tj() {}
    E(tj, Ri);
    uc(tj);
    v = tj.prototype;
    v.Yb = hc();
    v.D = function(a) {
        hj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        return a.b.D("BUTTON", {
            "class": Ji(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.Aa() || ""
        }, a.bb() || "")
    }
    ;
    v.wd = function(a) {
        return "BUTTON" == a.tagName || a.tagName == oa && (a.type == Na || "submit" == a.type || "reset" == a.type)
    }
    ;
    v.Oa = function(a, b) {
        hj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        if (b.disabled) {
            var c = this.Dc(1);
            M(b, c)
        }
        return tj.m.Oa.call(this, a, b)
    }
    ;
    v.gg = function(a) {
        U(a).w(a.j(), Ta, a.kc)
    }
    ;
    v.xd = A;
    v.Ge = A;
    v.Fe = function(a) {
        return a.isEnabled()
    }
    ;
    v.Zb = A;
    v.Jc = function(a, b, c) {
        tj.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    }
    ;
    v.Aa = function(a) {
        return a.value
    }
    ;
    v.ya = function(a, b) {
        a && (a.value = b)
    }
    ;
    v.Wa = A;
    function uj(a, b, c) {
        W.call(this, a, b || tj.X(), c)
    }
    E(uj, W);
    v = uj.prototype;
    v.Aa = t("g");
    v.ya = function(a) {
        this.g = a;
        this.a.ya(this.j(), a)
    }
    ;
    v.F = function() {
        uj.m.F.call(this);
        delete this.g;
        delete this.l
    }
    ;
    v.O = function() {
        uj.m.O.call(this);
        if (this.aa & 32) {
            var a = this.j();
            a && U(this).w(a, "keyup", this.Kc)
        }
    }
    ;
    v.Kc = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kc(a) : 32 == a.keyCode
    }
    ;
    ej("goog-button", function() {
        return new uj(null)
    });
    function vj() {}
    E(vj, Ri);
    uc(vj);
    v = vj.prototype;
    v.D = function(a) {
        var b = Ji(this, a);
        b = a.b.D(g, ib + b.join(" "), wj(this, a.ea(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b
    }
    ;
    v.Yb = u(Na);
    v.zb = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    }
    ;
    function wj(a, b, c) {
        return c.D(g, ib + (a.da() + "-outer-box"), c.D(g, ib + (a.da() + "-inner-box"), b))
    }
    v.wd = function(a) {
        return a.tagName == g
    }
    ;
    v.Oa = function(a, b) {
        xj(b, !0);
        xj(b, !1);
        a: {
            var c = a.b.bg(b);
            var d = this.da() + "-outer-box";
            if (c && Nf(c, d) && (c = a.b.bg(c),
            d = this.da() + "-inner-box",
            c && Nf(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(wj(this, b.childNodes, a.b));
        Of(b, ["goog-inline-block", this.da()]);
        return vj.m.Oa.call(this, a, b)
    }
    ;
    v.da = u("goog-custom-button");
    function xj(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if ("" == wd(e))
                        a.removeChild(c);
                    else {
                        c.nodeValue = b ? Fe(e) : Ge(e);
                        break
                    }
                } else
                    break;
                c = d
            }
    }
    ;function yj(a, b, c) {
        uj.call(this, a, b || vj.X(), c);
        this.sa(16, !0)
    }
    E(yj, uj);
    ej("goog-toggle-button", function() {
        return new yj(null)
    });
    var zj = "StopIteration"in x ? x.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function Aj() {}
    Aj.prototype.next = function() {
        throw zj;
    }
    ;
    Aj.prototype.Ja = function() {
        return this
    }
    ;
    function Bj(a) {
        if (a instanceof Aj)
            return a;
        if (typeof a.Ja == p)
            return a.Ja(!1);
        if (vc(a)) {
            var b = 0
              , c = new Aj;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw zj;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function Cj(a, b, c) {
        a = Bj(a);
        try {
            for (; b.call(c, a.next(), void 0, a); )
                ;
        } catch (d) {
            if (d !== zj)
                throw d;
        }
    }
    ;function Dj(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Dj)
                for (c = a.Ra(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    v = Dj.prototype;
    v.Da = function() {
        Ej(this);
        for (var a = [], b = 0; b < this.a.length; b++)
            a.push(this.b[this.a[b]]);
        return a
    }
    ;
    v.Ra = function() {
        Ej(this);
        return this.a.concat()
    }
    ;
    function Fj(a, b) {
        return Gj(a.b, b)
    }
    function Hj(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0
    }
    v.remove = function(a) {
        return Gj(this.b, a) ? (delete this.b[a],
        this.c--,
        this.f++,
        this.a.length > 2 * this.c && Ej(this),
        !0) : !1
    }
    ;
    function Ej(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length; ) {
                var d = a.a[b];
                Gj(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length; )
                d = a.a[b],
                Gj(e, d) || (a.a[c++] = d,
                e[d] = 1),
                b++;
            a.a.length = c
        }
    }
    v.get = function(a, b) {
        return Gj(this.b, a) ? this.b[a] : b
    }
    ;
    v.set = function(a, b) {
        Gj(this.b, a) || (this.c++,
        this.a.push(a),
        this.f++);
        this.b[a] = b
    }
    ;
    v.forEach = function(a, b) {
        for (var c = this.Ra(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    v.Ja = function(a) {
        Ej(this);
        var b = 0
          , c = this.f
          , d = this
          , e = new Aj;
        e.next = function() {
            if (c != d.f)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length)
                throw zj;
            var f = d.a[b++];
            return a ? f : d.b[f]
        }
        ;
        return e
    }
    ;
    function Gj(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function Ij(a) {
        if (a.Da && typeof a.Da == p)
            return a.Da();
        if (z(a))
            return a.split("");
        if (vc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Jj(a, b, c) {
        if (a.forEach && typeof a.forEach == p)
            a.forEach(b, c);
        else if (vc(a) || z(a))
            Mc(a, b, c);
        else {
            if (a.Ra && typeof a.Ra == p)
                var d = a.Ra();
            else if (a.Da && typeof a.Da == p)
                d = void 0;
            else if (vc(a) || z(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else
                d = ad(a);
            e = Ij(a);
            f = e.length;
            for (var h = 0; h < f; h++)
                b.call(c, e[h], d && d[h], a)
        }
    }
    ;var Kj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Lj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Ie(e) : "")
            }
        }
    }
    ;function Mj(a) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof Mj) {
            this.b = y(void 0) ? void 0 : a.b;
            Nj(this, a.c);
            this.s = a.s;
            this.f = a.f;
            Oj(this, a.l);
            this.h = a.h;
            var b = a.a;
            var c = new Pj;
            c.c = b.c;
            b.a && (c.a = new Dj(b.a),
            c.b = b.b);
            Qj(this, c);
            this.g = a.g
        } else
            a && (b = String(a).match(Kj)) ? (this.b = !1,
            Nj(this, b[1] || "", !0),
            this.s = Rj(b[2] || ""),
            this.f = Rj(b[3] || "", !0),
            Oj(this, b[4]),
            this.h = Rj(b[5] || "", !0),
            Qj(this, b[6] || "", !0),
            this.g = Rj(b[7] || "")) : (this.b = !1,
            this.a = new Pj(null,this.b))
    }
    Mj.prototype.toString = function() {
        var a = []
          , b = this.c;
        b && a.push(Sj(b, Tj, !0), ":");
        var c = this.f;
        if (c || "file" == b)
            a.push("//"),
            (b = this.s) && a.push(Sj(b, Tj, !0), "@"),
            a.push(He(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.l,
            null != c && a.push(":", String(c));
        if (c = this.h)
            this.f && "/" != c.charAt(0) && a.push("/"),
            a.push(Sj(c, "/" == c.charAt(0) ? Uj : Vj, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Sj(c, Wj));
        return a.join("")
    }
    ;
    function Nj(a, b, c) {
        a.c = c ? Rj(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    }
    function Oj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.l = b
        } else
            a.l = null
    }
    function Qj(a, b, c) {
        b instanceof Pj ? (a.a = b,
        Xj(a.a, a.b)) : (c || (b = Sj(b, Yj)),
        a.a = new Pj(b,a.b))
    }
    function Rj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function Sj(a, b, c) {
        return z(a) ? (a = encodeURI(a).replace(b, Zj),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    function Zj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Tj = /[#\/\?@]/g
      , Vj = /[#\?:]/g
      , Uj = /[#\?]/g
      , Yj = /[#\?@]/g
      , Wj = /#/g;
    function Pj(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b
    }
    function ak(a) {
        a.a || (a.a = new Dj,
        a.b = 0,
        a.c && Lj(a.c, function(b, c) {
            a.add(Ie(b), c)
        }))
    }
    v = Pj.prototype;
    v.add = function(a, b) {
        ak(this);
        this.c = null;
        a = bk(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this
    }
    ;
    v.remove = function(a) {
        ak(this);
        a = bk(this, a);
        return Fj(this.a, a) ? (this.c = null,
        this.b = this.b - this.a.get(a).length,
        this.a.remove(a)) : !1
    }
    ;
    function ck(a, b) {
        ak(a);
        b = bk(a, b);
        return Fj(a.a, b)
    }
    v.forEach = function(a, b) {
        ak(this);
        this.a.forEach(function(c, d) {
            Mc(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    v.Ra = function() {
        ak(this);
        for (var a = this.a.Da(), b = this.a.Ra(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    v.Da = function(a) {
        ak(this);
        var b = [];
        if (z(a))
            ck(this, a) && (b = Uc(b, this.a.get(bk(this, a))));
        else {
            a = this.a.Da();
            for (var c = 0; c < a.length; c++)
                b = Uc(b, a[c])
        }
        return b
    }
    ;
    v.set = function(a, b) {
        ak(this);
        this.c = null;
        a = bk(this, a);
        ck(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this
    }
    ;
    v.get = function(a, b) {
        if (!a)
            return b;
        a = this.Da(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    function dk(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null,
        a.a.set(bk(a, b), Vc(c)),
        a.b = a.b + c.length)
    }
    v.toString = function() {
        if (this.c)
            return this.c;
        if (!this.a)
            return "";
        for (var a = [], b = this.a.Ra(), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = He(d);
            d = this.Da(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + He(d[f]));
                a.push(h)
            }
        }
        return this.c = a.join("&")
    }
    ;
    function bk(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b
    }
    function Xj(a, b) {
        b && !a.f && (ak(a),
        a.c = null,
        a.a.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            dk(this, e, c))
        }, a));
        a.f = b
    }
    v.cg = function(a) {
        for (var b = 0; b < arguments.length; b++)
            Jj(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
    }
    ;
    var ek = {}
      , fk = {}
      , gk = {}
      , hk = {};
    function ik() {
        throw Error("Do not instantiate directly");
    }
    ik.prototype.ed = null;
    ik.prototype.ea = t("a");
    ik.prototype.toString = t("a");
    function jk(a) {
        if (a.Ib !== ek)
            throw Error("Sanitized content was not of kind HTML.");
        return ue(a.toString(), a.ed || null)
    }
    function kk() {
        ik.call(this)
    }
    E(kk, ik);
    kk.prototype.Ib = ek;
    function lk() {
        ik.call(this)
    }
    E(lk, ik);
    lk.prototype.Ib = hk;
    lk.prototype.ed = 1;
    function mk(a, b) {
        b = a(b || nk, void 0, void 0);
        a = Rg(Zf(), g);
        b = xc(b) ? b instanceof ik ? jk(b) : ne("zSoyz") : ne(String(b));
        ze(a, b);
        1 == a.childNodes.length && (b = a.firstChild,
        1 == b.nodeType && (a = b));
        return a
    }
    var nk = {};
    function ok(a, b) {
        return null != a && a.Ib === b
    }
    ;function pk(a) {
        if (null != a)
            switch (a.ed) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    function qk(a) {
        return ok(a, ek) ? a : a instanceof ke ? rk(me(a).toString(), a.a()) : rk(Je(String(String(a))), pk(a))
    }
    var rk = function(a) {
        function b(c) {
            this.a = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ed = d);
            return c
        }
    }(kk)
      , sk = function(a) {
        function b(c) {
            this.a = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return new b(String(c))
        }
    }(lk);
    function tk(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }
    function X(a) {
        return ok(a, ek) ? String(String(a.ea()).replace(uk, "").replace(vk, "&lt;")).replace(wk, xk) : Je(String(a))
    }
    function yk(a) {
        ok(a, fk) || ok(a, gk) ? a = zk(a) : a instanceof Hd ? a = zk(Jd(a).toString()) : a instanceof qd ? a = zk(sd(a).toString()) : (a = String(a),
        a = Ak.test(a) ? a.replace(Bk, Ck) : Ba);
        return a
    }
    function Dk(a) {
        ok(a, fk) || ok(a, gk) ? a = zk(a) : a instanceof Hd ? a = zk(Jd(a).toString()) : a instanceof qd ? a = zk(sd(a).toString()) : (a = String(a),
        a = Ek.test(a) ? a.replace(Bk, Ck) : Ba);
        return a
    }
    function Fk(a) {
        return ok(a, gk) ? a.ea() : a instanceof qd ? sd(a).toString() : Ba
    }
    function Gk(a) {
        ok(a, hk) ? a = tk(a.ea()) : null == a ? a = "" : a instanceof Nd ? a = tk(Pd(a)) : a instanceof Zd ? a = tk(ae(a)) : (a = String(a),
        a = Hk.test(a) ? a : "zSoyz");
        return a
    }
    var Ik = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function xk(a) {
        return Ik[a]
    }
    var Jk = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };
    function Kk(a) {
        return Jk[a]
    }
    var Lk = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function Ck(a) {
        return Lk[a]
    }
    var wk = /[\x00\x22\x27\x3c\x3e]/g
      , Mk = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g
      , Bk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Hk = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i
      , Ak = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , Ek = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function zk(a) {
        return String(a).replace(Bk, Ck)
    }
    var uk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , vk = /</g;
    function Nk(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null
    }
    Nk.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else
            a = this.c();
        return a
    }
    ;
    function Ok(a, b) {
        a.f(b);
        100 > a.b && (a.b++,
        b.next = a.a,
        a.a = b)
    }
    ;function Pk(a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    }
    var Qk;
    function Rk() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !H("Presto") && (a = function() {
            var e = document.createElement(na);
            e.style.display = q;
            Be(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(me(we));
            e.close();
            var h = "callImmediate" + Math.random()
              , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = D(function(l) {
                if (("*" == k || l.origin == k) && l.data == h)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(h, k)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !ge()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (y(c.next)) {
                    c = c.next;
                    var e = c.Rf;
                    c.Rf = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    Rf: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement(ta) ? function(e) {
            var f = document.createElement(ta);
            f.onreadystatechange = function() {
                f.onreadystatechange = null;
                f.parentNode.removeChild(f);
                f = null;
                e();
                e = null
            }
            ;
            document.documentElement.appendChild(f)
        }
        : function(e) {
            x.setTimeout(e, 0)
        }
    }
    ;function Sk() {
        this.b = this.a = null
    }
    var Uk = new Nk(function() {
        return new Tk
    }
    ,function(a) {
        a.reset()
    }
    );
    Sk.prototype.add = function(a, b) {
        var c = Uk.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    }
    ;
    Sk.prototype.remove = function() {
        var a = null;
        this.a && (a = this.a,
        this.a = this.a.next,
        this.a || (this.b = null),
        a.next = null);
        return a
    }
    ;
    function Tk() {
        this.next = this.b = this.a = null
    }
    Tk.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null
    }
    ;
    Tk.prototype.reset = function() {
        this.next = this.b = this.a = null
    }
    ;
    function Vk(a, b) {
        Wk || Xk();
        Yk || (Wk(),
        Yk = !0);
        Zk.add(a, b)
    }
    var Wk;
    function Xk() {
        if (x.Promise && x.Promise.resolve) {
            var a = x.Promise.resolve(void 0);
            Wk = function() {
                a.then($k)
            }
        } else
            Wk = function() {
                var b = $k;
                !wc(x.setImmediate) || x.Window && x.Window.prototype && !H(la) && x.Window.prototype.setImmediate == x.setImmediate ? (Qk || (Qk = Rk()),
                Qk(b)) : x.setImmediate(b)
            }
    }
    var Yk = !1
      , Zk = new Sk;
    function $k() {
        for (var a; a = Zk.remove(); ) {
            try {
                a.a.call(a.b)
            } catch (b) {
                Pk(b)
            }
            Ok(Uk, a)
        }
        Yk = !1
    }
    ;function al(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function bl(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != A)
            try {
                var c = this;
                a.call(b, function(d) {
                    cl(c, 2, d)
                }, function(d) {
                    cl(c, 3, d)
                })
            } catch (d) {
                cl(this, 3, d)
            }
    }
    function dl() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    dl.prototype.reset = function() {
        this.c = this.b = this.f = this.a = null;
        this.g = !1
    }
    ;
    var el = new Nk(function() {
        return new dl
    }
    ,function(a) {
        a.reset()
    }
    );
    function fl(a, b, c) {
        var d = el.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d
    }
    function gl(a) {
        if (a instanceof bl)
            return a;
        var b = new bl(A);
        cl(b, 2, a);
        return b
    }
    function hl() {
        var a = il[5];
        return new bl(function(b, c) {
            c(a)
        }
        )
    }
    bl.prototype.then = function(a, b, c) {
        return jl(this, wc(a) ? a : null, wc(b) ? b : null, c)
    }
    ;
    bl.prototype.$goog_Thenable = !0;
    bl.prototype.cancel = function(a) {
        0 == this.a && Vk(function() {
            var b = new kl(a);
            ll(this, b)
        }, this)
    }
    ;
    function ll(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, h = c.b; h && (h.g || (d++,
                    h.a == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.a && 1 == d ? ll(c, b) : (f ? (d = f,
                    d.next == c.f && (c.f = d),
                    d.next = d.next.next) : ml(c),
                    nl(c, e, 3, b)))
                }
                a.c = null
            } else
                cl(a, 3, b)
    }
    function ol(a, b) {
        a.b || 2 != a.a && 3 != a.a || pl(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }
    function jl(a, b, c, d) {
        var e = fl(null, null, null);
        e.a = new bl(function(f, h) {
            e.f = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            }
            : f;
            e.b = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    !y(l) && k instanceof kl ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            }
            : h
        }
        );
        e.a.c = a;
        ol(a, e);
        return e.a
    }
    bl.prototype.o = function(a) {
        this.a = 0;
        cl(this, 2, a)
    }
    ;
    bl.prototype.B = function(a) {
        this.a = 0;
        cl(this, 3, a)
    }
    ;
    function cl(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c
                  , e = a.o
                  , f = a.B;
                if (d instanceof bl) {
                    ol(d, fl(e || A, f || null, a));
                    var h = !0
                } else if (al(d))
                    d.then(e, f, a),
                    h = !0;
                else {
                    if (xc(d))
                        try {
                            var k = d.then;
                            if (wc(k)) {
                                ql(d, k, e, f, a);
                                h = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            h = !0;
                            break a
                        }
                    h = !1
                }
            }
            h || (a.l = c,
            a.a = b,
            a.c = null,
            pl(a),
            3 != b || c instanceof kl || rl(a, c))
        }
    }
    function ql(a, b, c, d, e) {
        function f(l) {
            k || (k = !0,
            d.call(e, l))
        }
        function h(l) {
            k || (k = !0,
            c.call(e, l))
        }
        var k = !1;
        try {
            b.call(a, h, f)
        } catch (l) {
            f(l)
        }
    }
    function pl(a) {
        a.h || (a.h = !0,
        Vk(a.s, a))
    }
    function ml(a) {
        var b = null;
        a.b && (b = a.b,
        a.b = b.next,
        b.next = null);
        a.b || (a.f = null);
        return b
    }
    bl.prototype.s = function() {
        for (var a; a = ml(this); )
            nl(this, a, this.a, this.l);
        this.h = !1
    }
    ;
    function nl(a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.g; a = a.c)
                a.g = !1;
        if (b.a)
            b.a.c = null,
            sl(b, c, d);
        else
            try {
                b.g ? b.f.call(b.c) : sl(b, c, d)
            } catch (e) {
                tl.call(null, e)
            }
        Ok(el, b)
    }
    function sl(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
    }
    function rl(a, b) {
        a.g = !0;
        Vk(function() {
            a.g && tl.call(null, b)
        })
    }
    var tl = Pk;
    function kl(a) {
        Gc.call(this, a)
    }
    E(kl, Gc);
    kl.prototype.name = "cancel";
    function ul(a, b, c) {
        if (wc(a))
            c && (a = D(a, c));
        else if (a && typeof a.handleEvent == p)
            a = D(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    }
    function vl(a) {
        x.clearTimeout(a)
    }
    ;function wl(a, b, c) {
        R.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = D(this.Th, this)
    }
    E(wl, R);
    v = wl.prototype;
    v.ia = 0;
    v.F = function() {
        wl.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c
    }
    ;
    v.start = function(a) {
        this.stop();
        this.ia = ul(this.a, y(a) ? a : this.f)
    }
    ;
    v.stop = function() {
        this.dc() && vl(this.ia);
        this.ia = 0
    }
    ;
    v.dc = function() {
        return 0 != this.ia
    }
    ;
    v.Th = function() {
        this.ia = 0;
        this.b && this.b.call(this.c)
    }
    ;
    var xl = function() {
        if ($e) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(ce)) ? a[1] : "0"
        }
        return Ze ? (a = /10[_.][0-9_.]+/,
        (a = a.exec(ce)) ? a[0].replace(/_/g, ".") : "10") : af ? (a = /Android\s+([^\);]+)(\)|;)/,
        (a = a.exec(ce)) ? a[1] : "") : bf || cf || df ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
        (a = a.exec(ce)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    function yl(a) {
        return (a = a.exec(ce)) ? a[1] : ""
    }
    var zl = function() {
        if (rf)
            return yl(/Firefox\/([0-9.]+)/);
        if (I || We || Ve)
            return mf;
        if (vf)
            return Re() ? yl(/CriOS\/([0-9.]+)/) : yl(/Chrome\/([0-9.]+)/);
        if (wf && !Re())
            return yl(/Version\/([0-9.]+)/);
        if (sf || tf) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ce);
            if (a)
                return a[1] + "." + a[2]
        } else if (uf)
            return (a = yl(/Android\s+([0-9.]+)/)) ? a : yl(/Version\/([0-9.]+)/);
        return ""
    }();
    function Al(a, b, c, d, e, f, h, k, l) {
        var m = Bl(c);
        var n = eh(a);
        var r = gh(a);
        n = new Ug(n.x,n.y,r.width,r.height);
        if (r = dh(a)) {
            var w = new Ug(r.left,r.top,r.right - r.left,r.bottom - r.top);
            r = Math.max(n.left, w.left);
            var G = Math.min(n.left + n.width, w.left + w.width);
            if (r <= G) {
                var F = Math.max(n.top, w.top);
                w = Math.min(n.top + n.height, w.top + w.height);
                F <= w && (n.left = r,
                n.top = F,
                n.width = G - r,
                n.height = w - F)
            }
        }
        r = Zf(a);
        F = Zf(c);
        r.a != F.a && (G = r.a.body,
        F = fh(G, Sg(F)),
        F = Xf(F, eh(G)),
        !I || of(9) || ig(r.a) || (F = Xf(F, jg(r.a))),
        n.left += F.x,
        n.top += F.y);
        a = Cl(a, b);
        b = n.left;
        a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
        b = new N(b,n.top + (a & 1 ? n.height : 0));
        b = Xf(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x,
        b.y += (a & 1 ? -1 : 1) * e.y);
        if (h)
            if (l)
                var da = l;
            else if (da = dh(c))
                da.top -= m.y,
                da.right -= m.x,
                da.bottom -= m.y,
                da.left -= m.x;
        return Dl(b, c, d, f, da, h, k)
    }
    function Bl(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Yg(a, Mb)) {
                var c = eh(a);
                if (!b) {
                    b = kh(a);
                    var d;
                    if (d = b) {
                        d = wf && 0 <= Fd(zl, 10);
                        var e;
                        if (e = ef)
                            e = 0 <= Fd(xl, 10);
                        d = J || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Xe && L("8") || Yg(a, "overflowX") == fc ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Xf(c, new N(b,a.scrollTop))
                }
            }
        }
        return c || new N
    }
    function Dl(a, b, c, d, e, f, h) {
        a = Wf(a);
        var k = Cl(b, c);
        c = gh(b);
        h = h ? new Yf(h.width,h.height) : new Yf(c.width,c.height);
        a = Wf(a);
        h = new Yf(h.width,h.height);
        var l = 0;
        if (d || 0 != k)
            k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left),
            k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left,
                l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left,
                    l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left),
                    k.width = Math.max(k.width, 0),
                    l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left),
                l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top,
                l |= 2);
                f & 32 && (m = d.y,
                d.y < e.top && (d.y = e.top,
                l |= 8),
                d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top),
                k.height = Math.max(k.height, 0),
                l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top),
                l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else
                e = 256;
            l = e
        }
        f = new Ug(0,0,0,0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496)
            return e;
        Zg(b, new N(f.left,f.top));
        h = new Yf(f.width,f.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h,
        a = ig(Zf(O(b)).a),
        !I || L("10") || a && L("8") ? ph(b, c, Ma) : (h = b.style,
        a ? (a = qh(b),
        b = rh(b),
        h.pixelWidth = c.width - b.left - a.left - a.right - b.right,
        h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width,
        h.pixelHeight = c.height)));
        return e
    }
    function Cl(a, b) {
        return (b & 8 && kh(a) ? b ^ 4 : b) & -9
    }
    ;function El() {}
    El.prototype.b = hc();
    function Fl() {}
    Fl.prototype.a = null;
    function Gl(a) {
        var b;
        (b = a.a) || (b = {},
        Hl(a) && (b[0] = !0,
        b[1] = !0),
        b = a.a = b);
        return b
    }
    ;var Il;
    function Jl() {}
    E(Jl, Fl);
    function Kl(a) {
        return (a = Hl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function Hl(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    Il = new Jl;
    function Ll(a) {
        pi.call(this);
        this.headers = new Dj;
        this.fe = a || null;
        this.ma = !1;
        this.ee = this.N = null;
        this.rb = "";
        this.Ha = 0;
        this.Od = "";
        this.Qb = this.Re = this.Jd = this.se = !1;
        this.Vc = 0;
        this.be = null;
        this.Sg = "";
        this.Df = this.lh = !1
    }
    E(Ll, pi);
    Ll.prototype.va = null;
    var Ml = /^https?$/i
      , Nl = [sa, "PUT"]
      , Ol = [];
    function Pl(a, b, c, d, e) {
        var f = new Ll;
        Ol.push(f);
        b && f.w(Va, b);
        f.Ab(Qb, f.Ih);
        e && (f.Vc = Math.max(0, e));
        f.send(a, c, d, void 0)
    }
    v = Ll.prototype;
    v.Ih = function() {
        this.M();
        Tc(Ol, this)
    }
    ;
    v.send = function(a, b, c, d) {
        if (this.N)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.rb + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.rb = a;
        this.Od = "";
        this.Ha = 0;
        this.se = !1;
        this.ma = !0;
        this.N = this.fe ? Kl(this.fe) : Kl(Il);
        this.ee = this.fe ? Gl(this.fe) : Gl(Il);
        this.N.onreadystatechange = D(this.Kg, this);
        try {
            this.xa(),
            this.Re = !0,
            this.N.open(b, String(a), !0),
            this.Re = !1
        } catch (f) {
            this.xa();
            this.jd(5, f);
            return
        }
        a = c || "";
        var e = new Dj(this.headers);
        d && Jj(d, function(f, h) {
            e.set(h, f)
        });
        d = Rc(e.Ra(), Ql);
        c = x.FormData && a instanceof x.FormData;
        !Sc(Nl, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, h) {
            this.N.setRequestHeader(h, f)
        }, this);
        this.Sg && (this.N.responseType = this.Sg);
        gc in this.N && this.N.withCredentials !== this.lh && (this.N.withCredentials = this.lh);
        try {
            Rl(this),
            0 < this.Vc && (this.Df = Sl(this.N),
            this.xa(),
            this.Df ? (this.N.timeout = this.Vc,
            this.N.ontimeout = D(this.Eb, this)) : this.be = ul(this.Eb, this.Vc, this)),
            this.xa(),
            this.Jd = !0,
            this.N.send(a),
            this.Jd = !1
        } catch (f) {
            this.xa(),
            this.jd(5, f)
        }
    }
    ;
    function Sl(a) {
        return I && L(9) && rc(a.timeout) && y(a.ontimeout)
    }
    function Ql(a) {
        return "content-type" == a.toLowerCase()
    }
    v.Eb = function() {
        "undefined" != typeof qc && this.N && (this.Od = "Timed out after " + this.Vc + "ms, aborting",
        this.Ha = 8,
        this.xa(),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    v.jd = function(a, b) {
        this.ma = !1;
        this.N && (this.Qb = !0,
        this.N.abort(),
        this.Qb = !1);
        this.Od = b;
        this.Ha = a;
        Tl(this);
        Ul(this)
    }
    ;
    function Tl(a) {
        a.se || (a.se = !0,
        a.dispatchEvent(Va),
        a.dispatchEvent("error"))
    }
    v.abort = function(a) {
        this.N && this.ma && (this.xa(),
        this.ma = !1,
        this.Qb = !0,
        this.N.abort(),
        this.Qb = !1,
        this.Ha = a || 7,
        this.dispatchEvent(Va),
        this.dispatchEvent("abort"),
        Ul(this))
    }
    ;
    v.F = function() {
        this.N && (this.ma && (this.ma = !1,
        this.Qb = !0,
        this.N.abort(),
        this.Qb = !1),
        Ul(this, !0));
        Ll.m.F.call(this)
    }
    ;
    v.Kg = function() {
        this.ub || (this.Re || this.Jd || this.Qb ? Vl(this) : this.Zi())
    }
    ;
    v.Zi = function() {
        Vl(this)
    }
    ;
    function Vl(a) {
        if (a.ma && "undefined" != typeof qc)
            if (a.ee[1] && 4 == Wl(a) && 2 == a.xa())
                a.xa();
            else if (a.Jd && 4 == Wl(a))
                ul(a.Kg, 0, a);
            else if (a.dispatchEvent(Rb),
            a.Ld()) {
                a.xa();
                a.ma = !1;
                try {
                    if (a.Pc())
                        a.dispatchEvent(Va),
                        a.dispatchEvent("success");
                    else {
                        a.Ha = 6;
                        try {
                            var b = 2 < Wl(a) ? a.N.statusText : ""
                        } catch (c) {
                            b = ""
                        }
                        a.Od = b + " [" + a.xa() + "]";
                        Tl(a)
                    }
                } finally {
                    Ul(a)
                }
            }
    }
    function Ul(a, b) {
        if (a.N) {
            Rl(a);
            var c = a.N
              , d = a.ee[0] ? A : null;
            a.N = null;
            a.ee = null;
            b || a.dispatchEvent(Qb);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function Rl(a) {
        a.N && a.Df && (a.N.ontimeout = null);
        a.be && (vl(a.be),
        a.be = null)
    }
    v.dc = function() {
        return !!this.N
    }
    ;
    v.Ld = function() {
        return 4 == Wl(this)
    }
    ;
    v.Pc = function() {
        var a = this.xa();
        a: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var b = !0;
            break a;
        default:
            b = !1
        }
        if (!b) {
            if (a = 0 === a)
                a = String(this.rb).match(Kj)[1] || null,
                !a && x.self && x.self.location && (a = x.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                a = !Ml.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    }
    ;
    function Wl(a) {
        return a.N ? a.N.readyState : 0
    }
    v.xa = function() {
        try {
            return 2 < Wl(this) ? this.N.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    v.ze = function() {
        return String(this.rb)
    }
    ;
    v.Lb = function() {
        try {
            return this.N ? this.N.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    v.getResponseHeader = function(a) {
        if (this.N && this.Ld())
            return a = this.N.getResponseHeader(a),
            null === a ? void 0 : a
    }
    ;
    v.getAllResponseHeaders = function() {
        return this.N && this.Ld() ? this.N.getAllResponseHeaders() || "" : ""
    }
    ;
    v.ye = t("Ha");
    function Xl() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.B = 1;
        this.g = {};
        this.f = null;
        this.s = "";
        S(window, "beforeunload", this.o, !1, this)
    }
    uc(Xl);
    function Yl(a, b, c) {
        if (null == b)
            return "1";
        switch (B(b)) {
        case Wb:
            return a = b,
            !(64 < a.length) || null != c && c || (a = a.substr(0, 64)),
            He(a);
        case Hb:
            return "" + b;
        case "boolean":
            return b ? "1" : "0";
        case Ha:
            var d = [], e;
            for (e in b)
                d.push(Yl(a, b[e], c));
            return d.join(",");
        case Ib:
            d = [];
            for (e in b)
                d.push(Zl(a, e, b[e], c));
            return d.join(",");
        default:
            return ""
        }
    }
    function Zl(a, b, c, d) {
        return [He(b), Yl(a, c, d || "smtalt" == b)].join("=")
    }
    Xl.prototype.log = function(a, b) {
        this.b.push([a, b]);
        this.c || (this.c = !0,
        ul(this.h, 0, this))
    }
    ;
    Xl.prototype.h = function() {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            $l(this, b[0], b[1])
        }
        this.b = [];
        this.c = !1
    }
    ;

    function $l(a, b, c) {
        console.log('$1');
        am(a, a.s + "/gen204?" + (a.f ? ["client=", a.f, "&"].join("") : "") + Zl(a, b, c))
    }
    function am(a, b) {
        var c = new Image
          , d = a.B++;
        a.g[d] = c;
        c.onload = c.onerror = function() {
            delete Xl.X().g[d]
        }
        ;
        c.src = b;
        c = null;
    }

    function bm(a, b) {
        var c = 0
          , d = null;
        b in a.a && (d = a.a[b],
        c = d[0],
        d = d[1]);
        if (B(1) == Ib) {
            B(d) != Ib && (d = {});
            for (var e in 1)
                d[e] = dm(e in d ? d[e] : null, 1[e])
        } else
            d = dm(d, 1);
        a.a[b] = [c, d];
        vl(a.a[b][0]);
        c = ul(D(a.l, a, b), 2E3);
        a.a[b][0] = c
    }
    Xl.prototype.l = function(a) {
        $l(this, a, this.a[a][1]);
        a in this.a && (vl(this.a[a][0]),
        delete this.a[a])
    }
    ;
    function dm(a, b) {
        null != b || (b = 1);
        isNaN(a) && (a = parseInt(a, 10));
        isNaN(b) && (b = parseInt(b, 10));
        return a + b
    }
    Xl.prototype.o = function() {
        this.h();
        for (var a in this.a)
            0 != this.a[a] && this.l(a)
    }
    ;
    function em() {}
    uc(em);
    function fm(a) {
        Ef(this, a, null)
    }
    E(fm, Cf);
    function gm(a) {
        Ef(this, a, hm)
    }
    E(gm, Cf);
    var hm = [3, 4];
    function im(a) {
        Ef(this, a, jm)
    }
    E(im, Cf);
    var jm = [3];
    function km(a) {
        Ef(this, a, lm)
    }
    E(km, Cf);
    var lm = [2];
    function mm(a) {
        Ef(this, a, nm)
    }
    E(mm, Cf);
    var nm = [26, 80];
    mm.prototype.cb = function() {
        return Hf(this, 16)
    }
    ;
    mm.prototype.Tb = function(a) {
        If(this, 16, a)
    }
    ;
    mm.prototype.oa = function() {
        return Hf(this, 1)
    }
    ;
    mm.prototype.ta = function(a) {
        If(this, 1, a)
    }
    ;
    function om() {
        this.c = this.a = "";
        em.X()
    }
    uc(om);
    om.prototype.Tb = ic("a");
    om.prototype.ta = ic("c");
    om.prototype.store = function(a) {
        If(a, 65, 0);
        a.Tb(this.a);
        If(a, 14, "");
        a.ta(this.c);
        If(a, 50, "");
        If(a, 52, "");
        If(a, 32, 0)
    }
    ;
    new ArrayBuffer(0);
    function pm(a, b) {
        var c = a[b - 1];
        if (null == c || qm(c))
            a = a[a.length - 1],
            qm(a) && (c = a[b]);
        return c
    }
    function qm(a) {
        return xc(a) && !vc(a)
    }
    ;function rm(a, b) {
        return a === b ? !0 : Qc(a, function(c, d) {
            if (qm(c)) {
                d = c;
                for (var e in d) {
                    c = d[e];
                    var f = pm(b, +e);
                    if (!sm(c, f))
                        return !1
                }
                return !0
            }
            e = pm(b, d + 1);
            return sm(c, e)
        }) && Qc(b, function(c, d) {
            if (qm(c)) {
                for (var e in c)
                    if (null == pm(a, +e))
                        return !1;
                return !0
            }
            return null == c == (null == pm(a, d + 1))
        })
    }
    function sm(a, b) {
        return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : C(a) && C(b) ? rm(a, b) : !1
    }
    ;function tm() {}
    function um(a, b, c) {
        a = a.Ea = b = b || [];
        if (a.length) {
            var d = a.length - 1;
            b = a[d];
            if (qm(b) && (delete a[d],
            d < c)) {
                d = 0;
                for (var e in b) {
                    var f = +e;
                    f <= c ? (a[f - 1] = b[e],
                    delete b[e]) : d++
                }
                d && (a[c] = b)
            }
        }
    }
    function vm(a, b, c) {
        a = a.Ea[b];
        return null != a ? a : c
    }
    function wm(a, b) {
        return !!vm(a, b, void 0)
    }
    function xm(a, b) {
        return vm(a, b, 0)
    }
    function ym(a, b) {
        return vm(a, b, "")
    }
    function zm(a, b, c) {
        a = a.Ea;
        a[b] || (a[b] = []);
        return a[b][c]
    }
    function Y(a, b) {
        return a.Ea[b] ? a.Ea[b].length : 0
    }
    tm.prototype.Fb = t("Ea");
    tm.prototype.sj = function(a) {
        var b = this.Ea;
        this.Ea = a.Ea;
        a.Ea = b
    }
    ;
    function Am(a) {
        um(this, a, 9)
    }
    E(Am, tm);
    function Bm() {
        this.b = om.X()
    }
    E(Bm, R);
    uc(Bm);
    Bm.prototype.a = function() {
        Cm(this, 25)
    }
    ;
    function Cm(a, b) {
        var c = new mm;
        a.b.store(c);
        If(c, 31, b);
        return c
    }
    ;function Dm() {
        this.a = []
    }
    Dm.prototype.add = function(a) {
        this.a.push(a)
    }
    ;
    function Em() {
        this.a = []
    }
    E(Em, Dm);
    uc(Em);
    Em.prototype.add = function(a) {
        if (a)
            for (; a(); )
                ;
    }
    ;
    function Fm(a) {
        this.a = [];
        this.b = .5;
        Gm(this, a);
        this.f = 0;
        this.c = !0;
        this.g = D(this.h, this)
    }
    E(Fm, Dm);
    function Gm(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b)
    }
    Fm.prototype.add = function(a) {
        Fm.m.add.call(this, a);
        this.c && Hm(this)
    }
    ;
    function Hm(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3))
    }
    Fm.prototype.h = function() {
        var a = (new Date).getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = (new Date).getTime() - a
        } while (b && d < c);
        this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? Hm(this) : this.c = !0
    }
    ;
    function Im(a, b) {
        this.o = a || null;
        this.C = b || Em.X();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0
    }
    function Jm() {}
    function Km() {}
    function Lm(a, b) {
        a.c || (a.G = b)
    }
    function Mm(a, b, c) {
        a.h = c ? D(b, c) : b
    }
    function Nm(a, b, c) {
        a.l = c ? D(b, c) : b
    }
    function Om(a, b) {
        a.c || (a.c = !0,
        a.B = b,
        a.b++,
        a.g = a.G,
        a.s())
    }
    Im.prototype.stop = function() {
        this.b++;
        this.c = !1;
        this.a = []
    }
    ;
    function Pm(a) {
        if (!a.c)
            return null;
        for (var b = !1, c = 0; c < a.a.length; ++c)
            if (a.a[c].target === a) {
                a.a[c].ready = !1;
                a.a[c].jh = a.b + 1;
                b = !0;
                break
            }
        b || a.a.push({
            target: a,
            ready: !1,
            jh: a.b + 1
        });
        return D(a.s, a, a, a.b + 1)
    }
    function Qm(a) {
        if (!a.c)
            return !0;
        for (var b = 0; b < a.a.length; ++b)
            if (a.a[b].target === a && a.a[b].jh == a.b)
                return a.a[b].ready;
        return !0
    }
    Im.prototype.s = function(a, b) {
        if (this.c) {
            if (a)
                for (var c = 0; c < this.a.length; ++c)
                    if (this.a[c].target === a) {
                        this.a[c].ready = !0;
                        break
                    }
            this.f || this.C.add(D(this.K, this, b || this.b))
        }
    }
    ;
    Im.prototype.K = function(a) {
        if (this.b != a)
            return !1;
        a = this.g;
        if (a == Km)
            return this.stop(),
            this.h && this.h.call(this.o, this, this.B),
            !1;
        this.f = !0;
        try {
            var b = a.call(this.o, this, this.B);
            if (!b)
                throw Error();
        } catch (c) {
            this.stop();
            a = c;
            if (this.l)
                this.l.call(this.o, a, this, this.B);
            else
                throw a;
            return !1
        } finally {
            this.f = !1
        }
        b != Jm && (this.g = b,
        this.b++,
        this.s());
        return !1
    }
    ;
    function Rm() {
        pi.call(this);
        this.a = 0;
        this.endTime = this.b = null
    }
    E(Rm, pi);
    Rm.prototype.c = function() {
        this.Qa("begin")
    }
    ;
    Rm.prototype.f = function() {
        this.Qa("end")
    }
    ;
    Rm.prototype.Bb = function() {
        this.Qa("stop")
    }
    ;
    Rm.prototype.Qa = function(a) {
        this.dispatchEvent(a)
    }
    ;
    function Sm(a, b) {
        C(b) || (b = [b]);
        b = Oc(b, function(c) {
            return z(c) ? c : c.Ck + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        P(a, cc, b.join(","))
    }
    var Tm = Yc(function() {
        if (I)
            return L("10.0");
        var a = document.createElement(g)
          , b = K ? "-webkit" : J ? "-moz" : I ? "-ms" : Ve ? "-o" : null
          , c = {
            transition: Jb
        };
        b && (c[b + "-transition"] = Jb);
        b = se($a, {
            style: c
        });
        ze(a, b);
        a = a.firstChild;
        b = a.style[Oe(cc)];
        return "" != ("undefined" !== typeof b ? b : a.style[Vg(a, cc)] || "")
    });
    function Um(a, b, c, d, e) {
        Rm.call(this);
        this.A = a;
        this.l = b;
        this.s = c;
        this.g = d;
        this.o = C(e) ? e : [e]
    }
    E(Um, Rm);
    v = Um.prototype;
    v.play = function() {
        if (1 == this.a)
            return !1;
        this.c();
        this.Qa("play");
        this.b = Ec();
        this.a = 1;
        if (Tm())
            return P(this.A, this.s),
            this.h = ul(this.ej, void 0, this),
            !0;
        this.Af(!1);
        return !1
    }
    ;
    v.ej = function() {
        gh(this.A);
        Sm(this.A, this.o);
        P(this.A, this.g);
        this.h = ul(D(this.Af, this, !1), 1E3 * this.l)
    }
    ;
    v.stop = function() {
        1 == this.a && this.Af(!0)
    }
    ;
    v.Af = function(a) {
        P(this.A, cc, "");
        vl(this.h);
        P(this.A, this.g);
        this.endTime = Ec();
        this.a = 0;
        a ? this.Bb() : this.Qa(ab);
        this.f()
    }
    ;
    v.F = function() {
        this.stop();
        Um.m.F.call(this)
    }
    ;
    function Vm(a, b) {
        pi.call(this);
        this.h = new ji(this);
        this.$b(a || null);
        b && (this.nc = b)
    }
    E(Vm, pi);
    v = Vm.prototype;
    v.A = null;
    v.sc = !0;
    v.Pf = null;
    v.fc = !1;
    v.Xe = -1;
    v.nc = $b;
    v.j = t("A");
    v.$b = function(a) {
        Wm(this);
        this.A = a
    }
    ;
    v.Sc = function(a) {
        Wm(this);
        this.sc = a
    }
    ;
    function Wm(a) {
        if (a.fc)
            throw Error("Can not change this state of the popup while showing.");
    }
    v.isVisible = t("fc");
    v.I = function(a) {
        this.ua && this.ua.stop();
        this.qa && this.qa.stop();
        if (a) {
            if (!this.fc && this.Ie()) {
                if (!this.A)
                    throw Error("Caller must call setElement before trying to show the popup");
                this.ob();
                a = O(this.A);
                if (this.sc)
                    if (this.h.w(a, Bb, this.gf, !0),
                    I) {
                        try {
                            var b = a.activeElement
                        } catch (d) {}
                        for (; b && b.nodeName == na; ) {
                            try {
                                var c = Gg(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.h.w(a, Bb, this.gf, !0);
                        this.h.w(a, "deactivate", this.Jg)
                    } else
                        this.h.w(a, La, this.Jg);
                this.nc == $b ? (this.A.style.visibility = fc,
                Q(this.A, !0)) : this.nc == Gb && this.ob();
                this.fc = !0;
                this.Xe = Ec();
                this.ua ? (Xh(this.ua, "end", this.Lg, !1, this),
                this.ua.play()) : this.Lg()
            }
        } else
            Xm(this)
    }
    ;
    v.ob = A;
    function Xm(a, b) {
        a.fc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && oi(a.h),
        a.fc = !1,
        Ec(),
        a.qa ? (Xh(a.qa, "end", Dc(a.Sf, b), !1, a),
        a.qa.play()) : a.Sf(b))
    }
    v.Sf = function(a) {
        this.nc == $b ? this.Di() : this.nc == Gb && (this.A.style.top = "-10000px");
        this.hf(a)
    }
    ;
    v.Di = function() {
        this.A.style.visibility = rb;
        Q(this.A, !1)
    }
    ;
    v.Ie = function() {
        return this.dispatchEvent("beforeshow")
    }
    ;
    v.Lg = function() {
        this.dispatchEvent("show")
    }
    ;
    v.hf = function(a) {
        this.dispatchEvent({
            type: tb,
            target: a
        })
    }
    ;
    v.gf = function(a) {
        a = a.target;
        Bg(this.A, a) || Ym(this, a) || 150 > Ec() - this.Xe || Xm(this, a)
    }
    ;
    v.Jg = function(a) {
        var b = O(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement,
            !a || Bg(this.A, a) || "BODY" == a.tagName)
                return
        } else if (a.target != b)
            return;
        150 > Ec() - this.Xe || Xm(this)
    }
    ;
    function Ym(a, b) {
        return Pc(a.Pf || [], function(c) {
            return b === c || Bg(c, b)
        })
    }
    v.F = function() {
        Vm.m.F.call(this);
        this.h.M();
        Ah(this.ua);
        Ah(this.qa);
        delete this.A;
        delete this.h;
        delete this.Pf
    }
    ;
    function Zm(a, b) {
        this.s = b || void 0;
        Vm.call(this, a)
    }
    E(Zm, Vm);
    Zm.prototype.ob = function() {
        if (this.s) {
            var a = !this.isVisible() && this.nc != Gb
              , b = this.j();
            a && (b.style.visibility = rb,
            Q(b, !0));
            this.s.b(b, 8, this.$e);
            a && Q(b, !1)
        }
    }
    ;
    function $m(a, b) {
        Zm.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.I(!0);
        this.I(!1);
        M(this.j(), "round-trip-popup");
        M(this.c, "round-trip-content")
    }
    E($m, Zm);
    $m.prototype.o = function() {
        vl(this.f);
        1 == this.a ? Xh(this.b, ab, D(this.o, this)) : 0 == this.a && (this.f = ul(D(this.l, this, -1), 200))
    }
    ;
    $m.prototype.l = function(a) {
        if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
            var b = this.isVisible();
            this.I(!0);
            var c = -Math.ceil(gh(this.c).width);
            kh(this.j()) && (c = -c);
            var d = 1 == a ? c : 0;
            c = 1 == a ? 0 : c;
            this.I(b);
            if (Tm()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Xg(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e
                }
                this.a = a;
                this.b = new Um(this.c,b,{
                    left: d + "px"
                },{
                    left: c + "px"
                },"left " + b + "s");
                this.b.play();
                Xh(this.b, ab, D(this.g, this));
                -1 == a ? Xh(this.b, ab, D(this.I, this, !1)) : this.I(!0)
            } else
                P(this.c, "left", c + "px"),
                this.I(1 == a ? !0 : !1)
        }
    }
    ;
    $m.prototype.g = function() {
        0 != this.a && (this.b.stop(),
        ul(D(fi, this, this.b)),
        this.a = 0,
        this.b = null)
    }
    ;
    function an(a) {
        um(this, a, 4)
    }
    E(an, tm);
    function bn(a) {
        um(this, a, 2)
    }
    E(bn, tm);
    function cn(a) {
        um(this, a, 7)
    }
    E(cn, tm);
    function dn(a, b) {
        return new an(zm(a, 2, b))
    }
    ;function en(a) {
        um(this, a, 19)
    }
    E(en, tm);
    function fn(a, b) {
        return new cn(zm(a, 5, b))
    }
    ;function gn() {
        this.A = null;
        this.a = mg(g, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && (ug(this.a, this.A),
        hn(this))
    }
    function jn(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.A && (a.A.value || Og(a.A));
        hn(a);
        tg(a.a);
        if (b != c || e) {
            if (0 < b) {
                var h = d.substring(0, b);
                kn(a.a, h, 0, e)
            }
            b < c && (h = d.substring(b, c),
            f = mg(ua, f),
            kn(f, h, b, e),
            a.a.appendChild(f));
            c < d.length && (h = d.substring(c),
            kn(a.a, h, c, e))
        }
    }
    function hn(a) {
        var b = a.A;
        var c = O(b)
          , d = I && b.currentStyle;
        d && ig(Zf(c).a) && d.width != Ia && d.height != Ia && !d.boxSizing ? (c = sh(b, d.width, "width", "pixelWidth"),
        b = sh(b, d.height, "height", "pixelHeight"),
        b = new Yf(c,b)) : (d = nh(b),
        c = qh(b),
        b = rh(b),
        b = new Yf(d.width - b.left - c.left - c.right - b.right,d.height - b.top - c.top - c.bottom - b.bottom));
        oh(a.a, b);
        c = eh(a.A);
        b = a.a;
        d = c.x;
        c = c.y;
        var e = eh(b);
        d instanceof N && (c = d.y,
        d = d.x);
        Zg(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = qh(a.A);
        P(a.a, Kb, b.left + "px");
        P(a.a, Lb, b.right + "px");
        a.a.dir = a.A.dir
    }
    function kn(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Bc - c)) {
                if (f.Bc - c >= b.length)
                    break;
                if (0 < f.Bc - c) {
                    var h = b.substring(0, f.Bc - c);
                    ln(a, h)
                }
                var k = f.className || "gt-hl-text";
                h = b.substring(f.Bc - c, f.Bf - c);
                k = mg(ua, k);
                ln(k, h);
                a.appendChild(k);
                b = b.substring(f.Bf - c);
                c = f.Bf
            }
        b && ln(a, b)
    }
    function ln(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = mg("BR");
                a.appendChild(e)
            }
            a.appendChild(document.createTextNode(String(b[c])))
        }
    }
    ;function mn(a, b, c, d, e) {
        this.f = !!b;
        this.node = null;
        this.c = 0;
        this.o = !1;
        this.C = !c;
        a && nn(this, a, d);
        this.depth = void 0 != e ? e : this.c || 0;
        this.f && (this.depth *= -1)
    }
    E(mn, Aj);
    function nn(a, b, c, d) {
        if (a.node = b)
            a.c = rc(c) ? c : 1 != a.node.nodeType ? 0 : a.f ? -1 : 1;
        rc(d) && (a.depth = d)
    }
    mn.prototype.g = function() {
        var a = this.f ? -1 : 1;
        this.c == a && (this.c = -1 * a,
        this.depth += this.c * (this.f ? -1 : 1))
    }
    ;
    mn.prototype.next = function() {
        if (this.o) {
            if (!this.node || this.C && 0 == this.depth)
                throw zj;
            var a = this.node;
            var b = this.f ? -1 : 1;
            if (this.c == b) {
                var c = this.f ? a.lastChild : a.firstChild;
                c ? nn(this, c) : nn(this, a, -1 * b)
            } else
                (c = this.f ? a.previousSibling : a.nextSibling) ? nn(this, c) : nn(this, a.parentNode, -1 * b);
            this.depth += this.c * (this.f ? -1 : 1)
        } else
            this.o = !0;
        a = this.node;
        if (!this.node)
            throw zj;
        return a
    }
    ;
    mn.prototype.splice = function(a) {
        var b = this.node
          , c = this.f ? 1 : -1;
        this.c == c && (this.c = -1 * c,
        this.depth += this.c * (this.f ? -1 : 1));
        this.f = !this.f;
        mn.prototype.next.call(this);
        this.f = !this.f;
        c = vc(arguments[0]) ? arguments[0] : arguments;
        for (var d = c.length - 1; 0 <= d; d--)
            vg(c[d], b);
        wg(b)
    }
    ;
    function on() {}
    function pn(a) {
        if (a.getSelection)
            return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a)
                        return null
                } else if (!c.length || c.item(0).document != a)
                    return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    }
    function qn(a) {
        for (var b = [], c = 0, d = a.Gc(); c < d; c++)
            b.push(a.Xb(c));
        return b
    }
    function rn(a) {
        return a.Ue() ? a.Ma() : a.eb()
    }
    on.prototype.Ue = u(!1);
    function sn(a, b) {
        mn.call(this, a, b, !0)
    }
    E(sn, mn);
    function tn(a, b, c, d, e) {
        this.b = this.a = null;
        this.B = this.G = 0;
        this.h = !!e;
        if (a) {
            this.a = a;
            this.G = b;
            this.b = c;
            this.B = d;
            if (1 == a.nodeType && "BR" != a.tagName)
                if (a = a.childNodes,
                b = a[b])
                    this.a = b,
                    this.G = 0;
                else {
                    a.length && (this.a = Kc(a));
                    var f = !0
                }
            1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.B = 0 : this.b = c)
        }
        mn.call(this, this.h ? this.b : this.a, this.h, !0);
        if (f)
            try {
                this.next()
            } catch (h) {
                if (h != zj)
                    throw h;
            }
    }
    E(tn, sn);
    tn.prototype.s = t("a");
    tn.prototype.l = function() {
        return this.o && (this.node != (this.h ? this.a : this.b) ? !1 : this.h ? this.G ? -1 != this.c : 1 == this.c : !this.B || 1 != this.c)
    }
    ;
    tn.prototype.next = function() {
        if (this.l())
            throw zj;
        return tn.m.next.call(this)
    }
    ;
    tn.prototype.g = function() {
        tn.m.g.apply(this);
        if (Bg(this.node, this.h ? this.a : this.b))
            throw zj;
    }
    ;
    function un() {}
    function vn(a, b) {
        b = b.Cc();
        try {
            return 0 <= a.ab(b, 0, 0) && 0 >= a.ab(b, 1, 1)
        } catch (c) {
            if (!I)
                throw c;
            return !1
        }
    }
    un.prototype.Ja = function() {
        return new tn(this.Sa(),this.nb(),this.mb(),this.vb())
    }
    ;
    function wn(a) {
        this.a = a
    }
    E(wn, un);
    function xn(a) {
        var b = O(a).createRange();
        if (3 == a.nodeType)
            b.setStart(a, 0),
            b.setEnd(a, a.length);
        else if (yn(a)) {
            for (var c, d = a; (c = d.firstChild) && yn(c); )
                d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && yn(c); )
                d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else
            c = a.parentNode,
            a = Lc(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b
    }
    function zn(a, b, c, d) {
        var e = O(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }
    v = wn.prototype;
    v.Cc = t("a");
    v.Ae = function() {
        return this.a.commonAncestorContainer
    }
    ;
    v.Sa = function() {
        return this.a.startContainer
    }
    ;
    v.nb = function() {
        return this.a.startOffset
    }
    ;
    v.mb = function() {
        return this.a.endContainer
    }
    ;
    v.vb = function() {
        return this.a.endOffset
    }
    ;
    v.ab = function(a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.START_TO_END : 1 == b ? x.Range.END_TO_START : x.Range.END_TO_END, a)
    }
    ;
    v.Ta = function() {
        return this.a.collapsed
    }
    ;
    v.eg = function() {
        return this.a.toString()
    }
    ;
    v.select = function(a) {
        var b = lg(O(this.Sa()));
        this.Rc(b.getSelection(), a)
    }
    ;
    v.Rc = function(a) {
        a.removeAllRanges();
        a.addRange(this.a)
    }
    ;
    function An(a) {
        this.a = a
    }
    E(An, wn);
    An.prototype.Rc = function(a, b) {
        !b || this.Ta() ? An.m.Rc.call(this, a, b) : (a.collapse(this.mb(), this.vb()),
        a.extend(this.Sa(), this.nb()))
    }
    ;
    function Bn(a) {
        this.b = this.a = this.h = null;
        this.g = this.f = -1;
        this.c = a
    }
    E(Bn, un);
    function Cn(a) {
        var b = O(a).body.createTextRange();
        if (1 == a.nodeType)
            b.moveToElementText(a),
            yn(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling; ) {
                var e = d.nodeType;
                if (3 == e)
                    c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Qa, c);
            b.moveEnd(Qa, a.length)
        }
        return b
    }
    v = Bn.prototype;
    v.Cc = t("c");
    v.Ae = function() {
        if (!this.h) {
            var a = this.c.text
              , b = this.c.duplicate()
              , c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Qa, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Ta() && 0 < b)
                return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; )
                c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == Dn(c.firstChild) && yn(c.firstChild); )
                c = c.firstChild;
            0 == a.length && (c = En(this, c));
            this.h = c
        }
        return this.h
    }
    ;
    function En(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            if (yn(f)) {
                var h = Cn(f)
                  , k = h.htmlText != f.outerHTML;
                if (a.Ta() && k ? 0 <= a.ab(h, 1, 1) && 0 >= a.ab(h, 1, 0) : a.c.inRange(h))
                    return En(a, f)
            }
        }
        return b
    }
    v.Sa = function() {
        this.a || (this.a = Fn(this, 1),
        this.Ta() && (this.b = this.a));
        return this.a
    }
    ;
    v.nb = function() {
        0 > this.f && (this.f = Gn(this, 1),
        this.Ta() && (this.g = this.f));
        return this.f
    }
    ;
    v.mb = function() {
        if (this.Ta())
            return this.Sa();
        this.b || (this.b = Fn(this, 0));
        return this.b
    }
    ;
    v.vb = function() {
        if (this.Ta())
            return this.nb();
        0 > this.g && (this.g = Gn(this, 0),
        this.Ta() && (this.f = this.g));
        return this.g
    }
    ;
    v.ab = function(a, b, c) {
        return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    }
    ;
    function Fn(a, b, c) {
        c = c || a.Ae();
        if (!c || !c.firstChild)
            return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var h = d ? e : f - e - 1
              , k = c.childNodes[h];
            try {
                var l = Hn(k)
            } catch (n) {
                continue
            }
            var m = l.Cc();
            if (a.Ta())
                if (!yn(k)) {
                    if (0 == a.ab(m, 1, 1)) {
                        a.f = a.g = h;
                        break
                    }
                } else {
                    if (vn(l, a))
                        return Fn(a, b, k)
                }
            else {
                if (vn(a, l)) {
                    if (!yn(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break
                    }
                    return Fn(a, b, k)
                }
                if (0 > a.ab(m, 1, 0) && 0 < a.ab(m, 0, 1))
                    return Fn(a, b, k)
            }
        }
        return c
    }
    function Gn(a, b) {
        var c = 1 == b
          , d = c ? a.Sa() : a.mb();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += f) {
                var k = d[h];
                if (!yn(k) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Hn(k).Cc()))
                    return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        a = a.c.duplicate();
        b = Cn(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    }
    function Dn(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    }
    v.Ta = function() {
        return 0 == this.c.compareEndPoints("StartToEnd", this.c)
    }
    ;
    v.eg = function() {
        return this.c.text
    }
    ;
    v.select = function() {
        this.c.select()
    }
    ;
    function In(a) {
        this.a = a
    }
    E(In, wn);
    In.prototype.Rc = function(a) {
        a.collapse(this.Sa(), this.nb());
        this.mb() == this.Sa() && this.vb() == this.nb() || a.extend(this.mb(), this.vb());
        0 == a.rangeCount && a.addRange(this.a)
    }
    ;
    function Jn(a) {
        this.a = a
    }
    E(Jn, wn);
    Jn.prototype.ab = function(a, b, c) {
        return L("528") ? Jn.m.ab.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.END_TO_START : 1 == b ? x.Range.START_TO_END : x.Range.END_TO_END, a)
    }
    ;
    Jn.prototype.Rc = function(a, b) {
        b ? a.setBaseAndExtent(this.mb(), this.vb(), this.Sa(), this.nb()) : a.setBaseAndExtent(this.Sa(), this.nb(), this.mb(), this.vb())
    }
    ;
    function Kn(a) {
        return Vf ? new Bn(a,O(a.parentElement())) : K ? new Jn(a) : J ? new An(a) : Ve ? new In(a) : new wn(a)
    }
    function Hn(a) {
        if (I && !of(9)) {
            var b = new Bn(Cn(a),O(a));
            if (yn(a)) {
                for (var c, d = a; (c = d.firstChild) && yn(c); )
                    d = c;
                b.a = d;
                b.f = 0;
                for (d = a; (c = d.lastChild) && yn(c); )
                    d = c;
                b.b = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a
            } else
                b.a = b.b = b.h = a.parentNode,
                b.f = Lc(b.h.childNodes, a),
                b.g = b.f + 1;
            a = b
        } else
            a = K ? new Jn(xn(a)) : J ? new An(xn(a)) : Ve ? new In(xn(a)) : new wn(xn(a));
        return a
    }
    function yn(a) {
        return rg(a) || 3 == a.nodeType
    }
    ;function Ln() {
        this.c = this.b = this.g = this.a = this.h = null;
        this.f = !1
    }
    E(Ln, on);
    function Mn(a, b) {
        var c = new Ln;
        c.h = a;
        c.f = !!b;
        return c
    }
    v = Ln.prototype;
    v.we = function() {
        return Nn(this).Cc()
    }
    ;
    v.Gc = u(1);
    v.Xb = function() {
        return this
    }
    ;
    function Nn(a) {
        var b;
        if (!(b = a.h)) {
            b = a.Ma();
            var c = a.Na()
              , d = a.eb()
              , e = a.fb();
            if (I && !of(9)) {
                var f = b
                  , h = c
                  , k = d
                  , l = e
                  , m = !1;
                1 == f.nodeType && (h = f.childNodes[h],
                m = !h,
                f = h || f.lastChild || f,
                h = 0);
                var n = Cn(f);
                h && n.move(Qa, h);
                f == k && h == l ? n.collapse(!0) : (m && n.collapse(!1),
                m = !1,
                1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k,
                l = 0,
                m = !h),
                f = Cn(k),
                f.collapse(!m),
                l && f.moveEnd(Qa, l),
                n.setEndPoint("EndToEnd", f));
                l = new Bn(n,O(b));
                l.a = b;
                l.f = c;
                l.b = d;
                l.g = e;
                b = l
            } else
                b = K ? new Jn(zn(b, c, d, e)) : J ? new An(zn(b, c, d, e)) : Ve ? new In(zn(b, c, d, e)) : new wn(zn(b, c, d, e));
            b = a.h = b
        }
        return b
    }
    v.qd = function() {
        return Nn(this).Ae()
    }
    ;
    v.Ma = function() {
        return this.a || (this.a = Nn(this).Sa())
    }
    ;
    v.Na = function() {
        return null != this.g ? this.g : this.g = Nn(this).nb()
    }
    ;
    v.eb = function() {
        return this.b || (this.b = Nn(this).mb())
    }
    ;
    v.fb = function() {
        return null != this.c ? this.c : this.c = Nn(this).vb()
    }
    ;
    v.Ue = t("f");
    v.sd = function() {
        return Nn(this).Ta()
    }
    ;
    v.rd = function() {
        return Nn(this).eg()
    }
    ;
    v.Ja = function() {
        return new tn(this.Ma(),this.Na(),this.eb(),this.fb())
    }
    ;
    v.select = function() {
        Nn(this).select(this.f)
    }
    ;
    function On() {}
    E(On, on);
    function Pn() {
        this.c = this.b = this.a = null
    }
    E(Pn, On);
    v = Pn.prototype;
    v.we = function() {
        return this.a || document.body.createControlRange()
    }
    ;
    v.Gc = function() {
        return this.a ? this.a.length : 0
    }
    ;
    v.Xb = function(a) {
        a = this.a.item(a);
        return Mn(Hn(a), void 0)
    }
    ;
    v.qd = function() {
        return Fg.apply(null, Qn(this))
    }
    ;
    v.Ma = function() {
        return Rn(this)[0]
    }
    ;
    v.Na = u(0);
    v.eb = function() {
        var a = Rn(this)
          , b = Kc(a);
        return Rc(a, function(c) {
            return Bg(c, b)
        })
    }
    ;
    v.fb = function() {
        return this.eb().childNodes.length
    }
    ;
    function Qn(a) {
        if (!a.b && (a.b = [],
        a.a))
            for (var b = 0; b < a.a.length; b++)
                a.b.push(a.a.item(b));
        return a.b
    }
    function Rn(a) {
        a.c || (a.c = Qn(a).concat(),
        a.c.sort(function(b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.c
    }
    v.sd = function() {
        return !this.a || !this.a.length
    }
    ;
    v.rd = u("");
    v.Ja = function() {
        return new Sn(this)
    }
    ;
    v.select = function() {
        this.a && this.a.select()
    }
    ;
    function Sn(a) {
        this.h = this.b = this.a = null;
        a && (this.h = Rn(a),
        this.a = this.h.shift(),
        this.b = Kc(this.h) || this.a);
        mn.call(this, this.a, !1, !0)
    }
    E(Sn, sn);
    Sn.prototype.s = t("a");
    Sn.prototype.l = function() {
        return !this.depth && !this.h.length
    }
    ;
    Sn.prototype.next = function() {
        if (this.l())
            throw zj;
        if (!this.depth) {
            var a = this.h.shift();
            nn(this, a, 1, 1);
            return a
        }
        return Sn.m.next.call(this)
    }
    ;
    function Tn() {
        this.va = null;
        this.a = [];
        this.f = [];
        this.c = this.b = null
    }
    E(Tn, On);
    v = Tn.prototype;
    v.we = function() {
        return this.a[0]
    }
    ;
    v.Gc = function() {
        return this.a.length
    }
    ;
    v.Xb = function(a) {
        this.f[a] || (this.f[a] = Mn(Kn(this.a[a]), void 0));
        return this.f[a]
    }
    ;
    v.qd = function() {
        if (!this.c) {
            for (var a = [], b = 0, c = this.Gc(); b < c; b++)
                a.push(this.Xb(b).qd());
            this.c = Fg.apply(null, a)
        }
        return this.c
    }
    ;
    function Un(a) {
        a.b || (a.b = qn(a),
        a.b.sort(function(b, c) {
            var d = b.Ma();
            b = b.Na();
            var e = c.Ma();
            c = c.Na();
            return d == e && b == c ? 0 : Vn(d, b, e, c) ? 1 : -1
        }));
        return a.b
    }
    v.Ma = function() {
        return Un(this)[0].Ma()
    }
    ;
    v.Na = function() {
        return Un(this)[0].Na()
    }
    ;
    v.eb = function() {
        return Kc(Un(this)).eb()
    }
    ;
    v.fb = function() {
        return Kc(Un(this)).fb()
    }
    ;
    v.sd = function() {
        return 0 == this.a.length || 1 == this.a.length && this.Xb(0).sd()
    }
    ;
    v.rd = function() {
        return Oc(qn(this), function(a) {
            return a.rd()
        }).join("")
    }
    ;
    v.Ja = function() {
        return new Wn(this)
    }
    ;
    v.select = function() {
        var a = pn(lg(O(I ? this.qd() : this.Ma())));
        a.removeAllRanges();
        for (var b = 0, c = this.Gc(); b < c; b++)
            a.addRange(this.Xb(b).we())
    }
    ;
    function Wn(a) {
        this.a = null;
        this.b = 0;
        a && (this.a = Oc(Un(a), function(b) {
            return Bj(b)
        }));
        mn.call(this, a ? this.s() : null, !1, !0)
    }
    E(Wn, sn);
    Wn.prototype.s = function() {
        return this.a[0].s()
    }
    ;
    Wn.prototype.l = function() {
        return this.a[this.b].l()
    }
    ;
    Wn.prototype.next = function() {
        try {
            var a = this.a[this.b]
              , b = a.next();
            nn(this, a.node, a.c, a.depth);
            return b
        } catch (c) {
            if (c !== zj || this.a.length - 1 == this.b)
                throw c;
            this.b++;
            return this.next()
        }
    }
    ;
    function Xn() {
        var a = pn(window);
        return a && Yn(a)
    }
    function Yn(a) {
        var b = !1;
        if (a.createRange)
            try {
                var c = a.createRange()
            } catch (e) {
                return null
            }
        else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Tn;
                c = 0;
                for (var d = a.rangeCount; c < d; c++)
                    b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = Vn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        (a = c) && a.addElement ? (b = new Pn,
        b.a = a,
        a = b) : a = Mn(Kn(a), b);
        return a
    }
    function Vn(a, b, c, d) {
        if (a == c)
            return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b])
                a = e,
                b = 0;
            else if (Bg(a, c))
                return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d])
                c = e,
                d = 0;
            else if (Bg(c, a))
                return !1;
        return 0 < (Cg(a, c) || b - d)
    }
    ;function Zn() {
        var a = Xn();
        return null != a && !a.sd() && 0 < a.rd().length
    }
    ;function $n() {
        this.b = []
    }
    E($n, Gi);
    uc($n);
    function ao(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.da() + "-highlight";
                break;
            case 1:
                c = a.da() + "-checkbox";
                break;
            case 2:
                c = a.da() + "-content"
            }
            a.b[b] = c
        }
        return c
    }
    v = $n.prototype;
    v.Yb = u("menuitem");
    v.D = function(a) {
        var b = a.b.D(g, Ji(this, a).join(" "), bo(this, a.ea(), a.b));
        co(this, a, b, !!(a.aa & 8) || !!(a.aa & 16));
        return b
    }
    ;
    v.zb = function(a) {
        return a && a.firstChild
    }
    ;
    v.Oa = function(a, b) {
        var c = yg(b)
          , d = ao(this, 2);
        c && Nf(c, d) || b.appendChild(bo(this, b.childNodes, a.b));
        Nf(b, lb) && (a.sa(16, !0),
        a && b && co(this, a, b, !0));
        return $n.m.Oa.call(this, a, b)
    }
    ;
    v.Ic = function(a, b) {
        var c = this.zb(a)
          , d = eo(this, a) ? c.firstChild : null;
        $n.m.Ic.call(this, a, b);
        d && !eo(this, a) && c.insertBefore(d, c.firstChild || null)
    }
    ;
    function bo(a, b, c) {
        a = ao(a, 2);
        return c.D(g, a, b)
    }
    function eo(a, b) {
        return (b = a.zb(b)) ? (b = b.firstChild,
        a = ao(a, 1),
        !!b && Ag(b) && Nf(b, a)) : !1
    }
    function co(a, b, c, d) {
        Oi(a, c, b.Fc());
        Pi(a, b, c);
        d != eo(a, c) && (d ? M(c, lb) : Pf(c, lb),
        c = a.zb(c),
        d ? (a = ao(a, 1),
        c.insertBefore(b.b.D(g, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }
    v.Dc = function(a) {
        switch (a) {
        case 2:
            return ao(this, 0);
        case 16:
        case 8:
            return mb;
        default:
            return $n.m.Dc.call(this, a)
        }
    }
    ;
    v.od = function(a) {
        var b = ao(this, 0);
        switch (a) {
        case mb:
            return 16;
        case b:
            return 2;
        default:
            return $n.m.od.call(this, a)
        }
    }
    ;
    v.da = u("goog-menuitem");
    function fo(a, b, c, d) {
        W.call(this, a, d || $n.X(), c);
        this.ya(b)
    }
    E(fo, W);
    v = fo.prototype;
    v.Aa = function() {
        var a = this.ra;
        return null != a ? a : this.bb()
    }
    ;
    v.ya = ic("ra");
    v.sa = function(a, b) {
        fo.m.sa.call(this, a, b);
        switch (a) {
        case 8:
            this.V & 16 && !b && kj(this, 16, !1) && nj(this, 16, !1);
            (a = this.j()) && this && a && co(this.a, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && co(this.a, this, a, b)
        }
    }
    ;
    v.bb = function() {
        var a = this.ea();
        return C(a) ? (a = Oc(a, function(b) {
            return Ag(b) && (Nf(b, "goog-menuitem-accel") || Nf(b, "goog-menuitem-mnemonic-separator")) ? "" : Qg(b)
        }).join(""),
        Ee(a)) : fo.m.bb.call(this)
    }
    ;
    v.bc = function(a) {
        var b = this.wb();
        if (b) {
            var c = b.J;
            b.J = null;
            if (b = c && rc(a.clientX))
                b = new N(a.clientX,a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b)
                return
        }
        fo.m.bc.call(this, a)
    }
    ;
    v.Kc = function(a) {
        return a.keyCode == this.Hg && this.kc(a) ? !0 : fo.m.Kc.call(this, a)
    }
    ;
    v.Sh = t("Hg");
    ej("goog-menuitem", function() {
        return new fo(null)
    });
    fo.prototype.Fc = function() {
        return this.aa & 16 ? "menuitemcheckbox" : this.aa & 8 ? "menuitemradio" : fo.m.Fc.call(this)
    }
    ;
    fo.prototype.wb = function() {
        return W.prototype.wb.call(this)
    }
    ;
    fo.prototype.md = function() {
        return W.prototype.md.call(this)
    }
    ;
    function go(a) {
        this.a = a
    }
    uc(go);
    function ho(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }
    v = go.prototype;
    v.D = function(a) {
        return a.b.D(g, io(this, a).join(" "))
    }
    ;
    v.Ce = function(a) {
        return a.tagName == g
    }
    ;
    function jo(a, b, c) {
        c.id && vi(b, c.id);
        var d = a.ud()
          , e = !1
          , f = Mf(c);
        f && Mc(f, function(h) {
            h == d ? e = !0 : h && (h == d + ba ? b.ka(!1) : h == d + "-horizontal" ? ko(b, ub) : h == d + "-vertical" && ko(b, ec))
        }, a);
        e || M(c, d);
        lo(a, b, c);
        return c
    }
    function lo(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c; ) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.xe(d);
                    f && (f.A = d,
                    b.isEnabled() || f.ka(!1),
                    b.rc(f),
                    Ai(f, d))
                } else
                    d.nodeValue && "" != wd(d.nodeValue) || c.removeChild(d);
                d = e
            }
    }
    v.xe = function(a) {
        a: {
            a = Mf(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in fj ? fj[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    }
    ;
    v.De = function(a) {
        a = a.j();
        mh(a, !0, J);
        I && (a.hideFocus = !0);
        var b = this.a;
        b && xh(a, b)
    }
    ;
    v.ud = u("goog-container");
    function io(a, b) {
        a = a.ud();
        var c = [a, b.Sb == ub ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ba);
        return c
    }
    ;function mo() {}
    E(mo, Gi);
    uc(mo);
    mo.prototype.D = function(a) {
        return a.b.D(g, this.da())
    }
    ;
    mo.prototype.Oa = function(a, b) {
        b.id && vi(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            ug(b, c);
            wg(c)
        } else
            M(b, this.da());
        return b
    }
    ;
    mo.prototype.Ic = hc();
    mo.prototype.da = u(kb);
    function no(a, b) {
        W.call(this, null, a || mo.X(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.V = 1
    }
    E(no, W);
    no.prototype.O = function() {
        no.m.O.call(this);
        xh(this.j(), "separator")
    }
    ;
    ej(kb, function() {
        return new no
    });
    function oo(a) {
        this.a = a || "menu"
    }
    E(oo, go);
    uc(oo);
    v = oo.prototype;
    v.Ce = function(a) {
        return "UL" == a.tagName || oo.m.Ce.call(this, a)
    }
    ;
    v.xe = function(a) {
        return "HR" == a.tagName ? new no : oo.m.xe.call(this, a)
    }
    ;
    v.xc = function(a, b) {
        return Bg(a.j(), b)
    }
    ;
    v.ud = u("goog-menu");
    v.De = function(a) {
        oo.m.De.call(this, a);
        yh(a.j(), "haspopup", "true")
    }
    ;
    function po(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c
    }
    E(po, El);
    po.prototype.b = function(a, b, c) {
        Al(this.c, this.f, a, b, void 0, c, this.s)
    }
    ;
    function qo(a, b, c, d) {
        po.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0
    }
    E(qo, po);
    qo.prototype.h = ic("l");
    qo.prototype.b = function(a, b, c) {
        var d = Al(this.c, this.f, a, b, null, c, 10, void 0, this.g);
        if (d & 496) {
            var e = ro(d, this.f);
            b = ro(d, b);
            d = Al(this.c, e, a, b, null, c, 10, void 0, this.g);
            d & 496 && (e = ro(d, e),
            b = ro(d, b),
            Al(this.c, e, a, b, null, c, this.l, void 0, this.g))
        }
    }
    ;
    function ro(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    }
    ;function so(a, b) {
        this.a = a instanceof N ? a : new N(a,b)
    }
    E(so, El);
    so.prototype.b = function(a, b, c) {
        var d = O(a);
        var e = d.body;
        d = d.documentElement;
        d = new N(e.scrollLeft || d.scrollLeft,e.scrollTop || d.scrollTop);
        e = this.a.x + d.x;
        d = this.a.y + d.y;
        var f = Bl(a);
        e -= f.x;
        d -= f.y;
        Dl(new N(e,d), a, b, c, null, null, void 0)
    }
    ;
    function to(a, b) {
        so.call(this, a, b)
    }
    E(to, so);
    to.prototype.c = 0;
    to.prototype.h = ic("c");
    to.prototype.b = function(a, b, c) {
        var d = ah(a);
        d = dh(d);
        var e = kg(Zf(a).a);
        e = new N(this.a.x + e.scrollLeft,this.a.y + e.scrollTop);
        var f = b
          , h = Dl(e, a, f, c, d, 10, void 0);
        if (0 != (h & 496)) {
            if (h & 16 || h & 32)
                f ^= 4;
            if (h & 64 || h & 128)
                f ^= 1;
            h = Dl(e, a, f, c, d, 10, void 0);
            0 != (h & 496) && Dl(e, a, b, c, d, this.c, void 0)
        }
    }
    ;
    function uo(a, b, c) {
        T.call(this, c);
        this.yb = b || go.X();
        this.Sb = a || ec
    }
    E(uo, T);
    v = uo.prototype;
    v.gc = null;
    v.Hc = null;
    v.yb = null;
    v.Sb = null;
    v.ga = !0;
    v.xb = !0;
    v.Jb = !0;
    v.ha = -1;
    v.pa = null;
    v.hc = !1;
    v.lb = null;
    function vo(a) {
        return a.gc || a.j()
    }
    function wo(a, b) {
        if (a.Jb) {
            var c = vo(a)
              , d = a.U;
            a.gc = b;
            var e = vo(a);
            d && (a.gc = c,
            xo(a, !1),
            a.gc = b,
            Yi(yo(a), e),
            xo(a, !0))
        } else
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }
    function yo(a) {
        return a.Hc || (a.Hc = new Xi(vo(a)))
    }
    v.D = function() {
        this.A = this.yb.D(this)
    }
    ;
    v.td = function() {
        return this.j()
    }
    ;
    v.Be = function(a) {
        return this.yb.Ce(a)
    }
    ;
    v.S = function(a) {
        this.A = jo(this.yb, this, a);
        a.style.display == q && (this.ga = !1)
    }
    ;
    v.O = function() {
        uo.m.O.call(this);
        Bi(this, function(b) {
            b.U && zo(this, b)
        }, this);
        var a = this.j();
        this.yb.De(this);
        this.I(this.ga, !0);
        U(this).w(this, "enter", this.Le).w(this, "highlight", this.Oc).w(this, "unhighlight", this.Pe).w(this, "open", this.oi).w(this, "close", this.ci).w(a, Gh.pc, this.Uh).w(O(a), [Gh.qc, Gh.oc], this.ei).w(a, [Gh.pc, Gh.qc, Gh.oc, Eb, Db, Xa], this.ai);
        this.Jb && xo(this, !0)
    }
    ;
    function xo(a, b) {
        var c = U(a)
          , d = vo(a);
        b ? c.w(d, db, a.fg).w(d, La, a.vd).w(yo(a), "key", a.Ga) : c.ba(d, db, a.fg).ba(d, La, a.vd).ba(yo(a), "key", a.Ga)
    }
    v.Z = function() {
        this.Cb(-1);
        this.pa && oj(this.pa, !1);
        this.hc = !1;
        uo.m.Z.call(this)
    }
    ;
    v.F = function() {
        uo.m.F.call(this);
        this.Hc && (this.Hc.M(),
        this.Hc = null);
        this.yb = this.pa = this.lb = this.gc = null
    }
    ;
    v.Le = u(!0);
    v.Oc = function(a) {
        var b = Fi(this, a.target);
        if (-1 < b && b != this.ha) {
            var c = Ao(this);
            c && mj(c, !1);
            this.ha = b;
            c = Ao(this);
            this.hc && lj(c, !0);
            this.pa && c != this.pa && (c.aa & 64 ? oj(c, !0) : oj(this.pa, !1))
        }
        b = this.j();
        null != a.target.j() && yh(b, Ea, a.target.j().id)
    }
    ;
    v.Pe = function(a) {
        a.target == Ao(this) && (this.ha = -1);
        this.j().removeAttribute("aria-activedescendant")
    }
    ;
    v.oi = function(a) {
        (a = a.target) && a != this.pa && a.wb() == this && (this.pa && oj(this.pa, !1),
        this.pa = a)
    }
    ;
    v.ci = function(a) {
        a.target == this.pa && (this.pa = null);
        var b = this.j()
          , c = a.target.j();
        b && a.target.V & 2 && c && (a = "",
        c && (a = c.id),
        yh(b, Ea, a))
    }
    ;
    v.Uh = function(a) {
        this.xb && (this.hc = !0);
        var b = vo(this);
        b && Mg(b) && Ng(b) ? b.focus() : a.b()
    }
    ;
    v.ei = function() {
        this.hc = !1
    }
    ;
    v.ai = function(a) {
        a: {
            var b = a.target;
            if (this.lb)
                for (var c = this.j(); b && b !== c; ) {
                    var d = b.id;
                    if (d in this.lb) {
                        b = this.lb[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case Gh.pc:
                b.Lc(a);
                break;
            case Gh.qc:
            case Gh.oc:
                b.bc(a);
                break;
            case Eb:
                b.He(a);
                break;
            case Db:
                b.Oe(a);
                break;
            case Xa:
                b.Nc(a)
            }
    }
    ;
    v.fg = hc();
    v.vd = function() {
        this.Cb(-1);
        this.hc = !1;
        this.pa && oj(this.pa, !1)
    }
    ;
    v.Ga = function(a) {
        return this.isEnabled() && this.isVisible() && (0 != Ci(this) || this.gc) && this.Ee(a) ? (a.b(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    v.Ee = function(a) {
        var b = Ao(this);
        if (b && typeof b.Ga == p && b.Ga(a) || this.pa && this.pa != b && typeof this.pa.Ga == p && this.pa.Ga(a))
            return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
            return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Jb)
                vo(this).blur();
            else
                return !1;
            break;
        case 36:
            Bo(this);
            break;
        case 35:
            Co(this);
            break;
        case 38:
            if (this.Sb == ec)
                Do(this);
            else
                return !1;
            break;
        case 37:
            if (this.Sb == ub)
                Ei(this) ? Eo(this) : Do(this);
            else
                return !1;
            break;
        case 40:
            if (this.Sb == ec)
                Eo(this);
            else
                return !1;
            break;
        case 39:
            if (this.Sb == ub)
                Ei(this) ? Do(this) : Eo(this);
            else
                return !1;
            break;
        default:
            return !1
        }
        return !0
    }
    ;
    function zo(a, b) {
        var c = b.j();
        c = c.id || (c.id = ui(b));
        a.lb || (a.lb = {});
        a.lb[c] = b
    }
    v.rc = function(a, b) {
        uo.m.rc.call(this, a, b)
    }
    ;
    v.he = function(a, b, c) {
        a.Uc |= 2;
        a.Uc |= 64;
        a.sa(32, !1);
        hj(a, !1);
        var d = a.wb() == this ? Fi(this, a) : -1;
        uo.m.he.call(this, a, b, c);
        a.U && this.U && zo(this, a);
        a = d;
        -1 == a && (a = Ci(this));
        a == this.ha ? this.ha = Math.min(Ci(this) - 1, b) : a > this.ha && b <= this.ha ? this.ha++ : a < this.ha && b > this.ha && this.ha--
    }
    ;
    v.removeChild = function(a, b) {
        if (a = z(a) ? yi(this, a) : a) {
            var c = Fi(this, a);
            -1 != c && (c == this.ha ? (mj(a, !1),
            this.ha = -1) : c < this.ha && this.ha--);
            var d = a.j();
            d && d.id && this.lb && (c = this.lb,
            d = d.id,
            d in c && delete c[d])
        }
        a = uo.m.removeChild.call(this, a, b);
        hj(a, !0);
        return a
    }
    ;
    function ko(a, b) {
        if (a.j())
            throw Error(ka);
        a.Sb = b
    }
    v.isVisible = t("ga");
    v.I = function(a, b) {
        if (b || this.ga != a && this.dispatchEvent(a ? "show" : tb)) {
            this.ga = a;
            var c = this.j();
            c && (Q(c, a),
            this.Jb && ho(vo(this), this.xb && this.ga),
            b || this.dispatchEvent(this.ga ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    }
    ;
    v.isEnabled = t("xb");
    v.ka = function(a) {
        this.xb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.xb = !0,
        Bi(this, function(b) {
            b.kh ? delete b.kh : b.ka(!0)
        })) : (Bi(this, function(b) {
            b.isEnabled() ? b.ka(!1) : b.kh = !0
        }),
        this.hc = this.xb = !1),
        this.Jb && ho(vo(this), a && this.ga))
    }
    ;
    function Fo(a, b) {
        b != a.Jb && a.U && xo(a, b);
        a.Jb = b;
        a.xb && a.ga && ho(vo(a), b)
    }
    v.Cb = function(a) {
        (a = Di(this, a)) ? mj(a, !0) : -1 < this.ha && mj(Ao(this), !1)
    }
    ;
    function Ao(a) {
        return Di(a, a.ha)
    }
    function Bo(a) {
        Go(a, function(b, c) {
            return (b + 1) % c
        }, Ci(a) - 1)
    }
    function Co(a) {
        Go(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    }
    function Eo(a) {
        Go(a, function(b, c) {
            return (b + 1) % c
        }, a.ha)
    }
    function Do(a) {
        Go(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.ha)
    }
    function Go(a, b, c) {
        c = 0 > c ? Fi(a, a.pa) : c;
        var d = Ci(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d; ) {
            var f = Di(a, c);
            if (f && a.Qf(f)) {
                a.Cb(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }
    v.Qf = function(a) {
        return a.isVisible() && a.isEnabled() && !!(a.aa & 2)
    }
    ;
    function Ho() {}
    E(Ho, Gi);
    uc(Ho);
    Ho.prototype.da = u(jb);
    function Io(a, b, c) {
        W.call(this, a, c || Ho.X(), b);
        this.sa(1, !1);
        this.sa(2, !1);
        this.sa(4, !1);
        this.sa(32, !1);
        this.V = 1
    }
    E(Io, W);
    ej(jb, function() {
        return new Io(null)
    });
    ej(kb, function() {
        return new no
    });
    function Jo(a, b) {
        uo.call(this, ec, b || oo.X(), a);
        Fo(this, !1)
    }
    E(Jo, uo);
    v = Jo.prototype;
    v.ie = !0;
    v.xc = function(a) {
        if (this.yb.xc(this, a))
            return !0;
        for (var b = 0, c = Ci(this); b < c; b++) {
            var d = Di(this, b);
            if (typeof d.xc == p && d.xc(a))
                return !0
        }
        return !1
    }
    ;
    v.I = function(a, b, c) {
        (b = Jo.m.I.call(this, a, b)) && a && this.U && this.ie && vo(this).focus();
        a && c && rc(c.clientX) ? this.J = new N(c.clientX,c.clientY) : this.J = null;
        return b
    }
    ;
    v.Le = function(a) {
        this.ie && vo(this).focus();
        return Jo.m.Le.call(this, a)
    }
    ;
    v.Qf = function(a) {
        return a.isEnabled() && a.isVisible() && !!(a.aa & 2)
    }
    ;
    v.S = function(a) {
        for (var b = this.yb, c = dg(this.b.a, g, b.ud() + "-content", a), d = c.length, e = 0; e < d; e++)
            lo(b, this, c[e]);
        Jo.m.S.call(this, a)
    }
    ;
    v.Ee = function(a) {
        var b = Jo.m.Ee.call(this, a);
        b || Bi(this, function(c) {
            !b && c.Sh && c.Hg == a.keyCode && (this.isEnabled() && this.Cb(Fi(this, c)),
            b = c.Ga(a))
        }, this);
        return b
    }
    ;
    v.Cb = function(a) {
        Jo.m.Cb.call(this, a);
        var b = Di(this, a);
        if (b) {
            a = this.j() || kg(document);
            var c = b.j();
            b = a || kg(document);
            var d = eh(c)
              , e = eh(b)
              , f = rh(b);
            if (b == kg(document)) {
                var h = d.x - b.scrollLeft;
                d = d.y - b.scrollTop;
                I && !of(10) && (h += f.left,
                d += f.top)
            } else
                h = d.x - e.x - f.left,
                d = d.y - e.y - f.top;
            c = hh(c);
            f = b.clientHeight - c.height;
            e = b.scrollLeft;
            var k = b.scrollTop;
            e += Math.min(h, Math.max(h - (b.clientWidth - c.width), 0));
            k += Math.min(d, Math.max(d - f, 0));
            b = new N(e,k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    }
    ;
    function Ko(a, b) {
        Jo.call(this, a, b);
        this.ie = !0;
        Fo(this, !0);
        this.I(!1, !0);
        this.a = new Dj
    }
    E(Ko, Jo);
    v = Ko.prototype;
    v.ih = !1;
    v.Bg = 0;
    v.Ca = null;
    v.S = function(a) {
        Ko.m.S.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && Lo(this, this.b.j(a), 1)
    }
    ;
    v.O = function() {
        Ko.m.O.call(this);
        this.a.forEach(this.ad, this);
        var a = U(this);
        a.w(this, Da, this.ef);
        a.w(this.b.a, Bb, this.Xi, !0)
    }
    ;
    function Lo(a, b, c, d, e, f) {
        b && Fj(a.a, yc(b)) || (c = a.pe(b, c, d, e, f),
        a.U && a.ad(c),
        b = Dc(a.Yi, b),
        a.j() && U(a).w(a.j(), yb, b))
    }
    v.Yi = function(a, b) {
        if (27 == b.keyCode)
            a.focus();
        else if (a = Di(this, this.ha)) {
            a = a.j();
            var c = new Hh(b.a,a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode)
                Mh(a) ? qi(a, yb, !1, c) : gi(a, yb, !1, c);
            32 == b.keyCode && this.pb()
        }
    }
    ;
    v.pe = function(a, b, c, d, e) {
        if (!a)
            return null;
        b = {
            A: a,
            bh: b,
            Ui: c,
            Ac: d ? Xa : Bb,
            $e: e
        };
        this.a.set(yc(a), b);
        return b
    }
    ;
    v.ad = function(a) {
        U(this).w(a.A, a.Ac, this.Ud);
        a.Ac != Xa && U(this).w(a.A, yb, this.aj)
    }
    ;
    v.gd = function() {
        if (this.U)
            for (var a = this.a.Ra(), b = 0; b < a.length; b++)
                this.re(this.a.get(a[b]));
        Hj(this.a)
    }
    ;
    v.re = function(a) {
        U(this).ba(a.A, a.Ac, this.Ud)
    }
    ;
    v.yd = function(a, b, c) {
        b = y(a.bh) ? new qo(a.A,a.bh,!0) : new to(b,c);
        b.h && b.h(5);
        var d = a.Ui;
        c = a.$e;
        var e = a.A;
        a = this.isVisible();
        var f;
        (f = this.isVisible()) || (f = 150 > Ec() - this.Bg);
        f && this.ih ? this.pb() : (this.Ca = e || null,
        this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
        a || (this.j().style.visibility = rb),
        Q(this.j(), !0),
        b.b(this.j(), d, c),
        a || (this.j().style.visibility = fc),
        this.Cb(-1),
        this.I(!0)))
    }
    ;
    v.pb = function() {
        this.isVisible() && (this.I(!1),
        this.isVisible() || (this.Bg = Ec(),
        this.Ca = null))
    }
    ;
    v.ef = function() {
        this.pb()
    }
    ;
    v.Ud = function(a) {
        Mo(this, a)
    }
    ;
    v.aj = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Mo(this, a);
        40 == a.keyCode && Bo(this)
    }
    ;
    function Mo(a, b) {
        for (var c = a.a.Ra(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.yd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break
            }
        }
    }
    v.Xi = function(a) {
        this.isVisible() && !this.xc(a.target) && this.pb()
    }
    ;
    v.vd = function(a) {
        Ko.m.vd.call(this, a);
        this.pb()
    }
    ;
    v.F = function() {
        Ko.m.F.call(this);
        this.a && (Hj(this.a),
        delete this.a)
    }
    ;
    function No(a) {
        pi.call(this);
        this.A = a;
        a = I ? fb : La;
        this.a = S(this.A, I ? eb : db, this, !I);
        this.b = S(this.A, a, this, !I)
    }
    E(No, pi);
    No.prototype.handleEvent = function(a) {
        var b = new Hh(a.a);
        b.type = a.type == eb || a.type == db ? eb : fb;
        this.dispatchEvent(b)
    }
    ;
    No.prototype.F = function() {
        No.m.F.call(this);
        ei(this.a);
        ei(this.b);
        delete this.A
    }
    ;
    function Oo(a, b) {
        this.a = a instanceof N ? a : new N(a,b)
    }
    E(Oo, El);
    Oo.prototype.b = function(a, b, c) {
        Al(ah(a), 0, a, b, this.a, c, null, void 0)
    }
    ;
    function Po() {
        this.a = new Dj
    }
    function Qo(a) {
        var b = typeof a;
        return b == Ib && a || b == p ? "o" + yc(a) : b.substr(0, 1) + a
    }
    v = Po.prototype;
    v.add = function(a) {
        this.a.set(Qo(a), a)
    }
    ;
    v.remove = function(a) {
        return this.a.remove(Qo(a))
    }
    ;
    v.contains = function(a) {
        return Fj(this.a, Qo(a))
    }
    ;
    v.Da = function() {
        return this.a.Da()
    }
    ;
    v.Ja = function() {
        return this.a.Ja(!1)
    }
    ;
    function Ro(a, b, c) {
        this.ca = c || (a ? Zf(ag(document, a)) : Zf());
        Zm.call(this, this.ca.D(g, {
            style: "position:absolute;display:none;"
        }));

        this.Gb = new N(1,1);
        this.B = new Po;
        this.G = null;
        a && So(this, a);
        null != b && this.Pa(b)
    }
    E(Ro, Zm);
    var To = [];
    v = Ro.prototype;
    v.za = null;
    v.className = "goog-tooltip";
    v.Zg = 500;
    v.yg = 0;

    function So(a, b) {
        b = ag(document, b);
        a.B.add(b);
        S(b, Eb, a.Je, !1, a);
        S(b, Db, a.ac, !1, a);
        S(b, Cb, a.pg, !1, a);
        S(b, db, a.ig, !1, a);
        S(b, La, a.ac, !1, a)
    }
    function Uo(a, b) {
        if (b)
            b = ag(document, b),
            Vo(a, b),
            a.B.remove(b);
        else {
            for (var c = a.B.Da(), d = 0; b = c[d]; d++)
                Vo(a, b);
            Hj(a.B.a)
        }
    }
    function Vo(a, b) {
        di(b, Eb, a.Je, !1, a);
        di(b, Db, a.ac, !1, a);
        di(b, Cb, a.pg, !1, a);
        di(b, db, a.ig, !1, a);
        di(b, La, a.ac, !1, a)
    }
    v.Pa = function(a) {
        Ig(this.j(), a)
    }
    ;
    v.$b = function(a) {
        var b = this.j();
        b && wg(b);
        Ro.m.$b.call(this, a);
        a ? (b = this.ca.a.body,
        b.insertBefore(a, b.lastChild),
        Ah(this.G),
        this.G = new No(this.j()),
        zh(this, Dc(Ah, this.G)),
        S(this.G, eb, this.Wb, void 0, this),
        S(this.G, fb, this.Yd, void 0, this)) : (Ah(this.G),
        this.G = null)
    }
    ;
    v.Mc = function() {
        return Og(this.j())
    }
    ;
    function Wo(a) {
        return a.L ? a.isVisible() ? 4 : 1 : a.la ? 3 : a.isVisible() ? 2 : 0
    }
    v.Ie = function() {
        if (!Vm.prototype.Ie.call(this))
            return !1;
        if (this.b)
            for (var a, b = 0; a = To[b]; b++)
                Bg(a.j(), this.b) || a.I(!1);
        Sc(To, this) || To.push(this);
        a = this.j();
        a.className = this.className;
        this.Wb();
        S(a, Eb, this.Gd, !1, this);
        S(a, Db, this.Fd, !1, this);
        Xo(this);
        return !0
    }
    ;
    v.hf = function() {
        Tc(To, this);
        for (var a = this.j(), b, c = 0; b = To[c]; c++)
            b.b && Bg(a, b.b) && b.I(!1);
        this.Zc && this.Zc.Yd();
        di(a, Eb, this.Gd, !1, this);
        di(a, Db, this.Fd, !1, this);
        this.b = void 0;
        0 == Wo(this) && (this.Ia = !1);
        Vm.prototype.hf.call(this)
    }
    ;
    v.cf = function(a, b) {
        this.b == a && this.B.contains(this.b) && (this.Ia || !this.Mf ? (this.I(!1),
        this.isVisible() || (this.b = a,
        this.s = b || new Yo(Wf(this.Gb)),
        this.isVisible() && this.ob(),
        this.I(!0))) : this.b = void 0);
        this.L = void 0
    }
    ;
    v.Ti = function(a) {
        this.la = void 0;
        if (a == this.b) {
            a = this.ca;
            var b = a.a;
            try {
                var c = b && b.activeElement;
                var d = c && c.nodeName ? c : null
            } catch (e) {
                d = null
            }
            d = d && this.j() && a.contains(this.j(), d);
            null != this.za && (this.za == this.j() || this.B.contains(this.za)) || d || this.Yc && this.Yc.za || this.I(!1)
        }
    }
    ;
    function Zo(a, b) {
        var c = jg(a.ca.a);
        a.Gb.x = b.clientX + c.x;
        a.Gb.y = b.clientY + c.y
    }
    v.Je = function(a) {
        var b = $o(this, a.target);
        this.za = b;
        this.Wb();
        b != this.b && (this.b = b,
        ap(this, b),
        bp(this),
        Zo(this, a))
    }
    ;
    function $o(a, b) {
        try {
            for (; b && !a.B.contains(b); )
                b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }
    v.pg = function(a) {
        Zo(this, a);
        this.Ia = !0
    }
    ;
    v.ig = function(a) {
        this.za = a = $o(this, a.target);
        this.Ia = !0;
        if (this.b != a) {
            this.b = a;
            var b = new cp(this.za);
            this.Wb();
            ap(this, a, b);
            bp(this)
        }
    }
    ;
    function bp(a) {
        if (a.b)
            for (var b, c = 0; b = To[c]; c++)
                Bg(b.j(), a.b) && (b.Yc = a,
                a.Zc = b)
    }
    v.ac = function(a) {
        var b = $o(this, a.target)
          , c = $o(this, a.relatedTarget);
        b != c && (b == this.za && (this.za = null),
        Xo(this),
        this.Ia = !1,
        !this.isVisible() || a.relatedTarget && Bg(this.j(), a.relatedTarget) ? this.b = void 0 : this.Yd())
    }
    ;
    v.Gd = function() {
        var a = this.j();
        this.za != a && (this.Wb(),
        this.za = a)
    }
    ;
    v.Fd = function(a) {
        var b = this.j();
        this.za != b || a.relatedTarget && Bg(b, a.relatedTarget) || (this.za = null,
        this.Yd())
    }
    ;
    function ap(a, b, c) {
        a.L || (a.L = ul(D(a.cf, a, b, c), a.Zg))
    }
    function Xo(a) {
        a.L && (vl(a.L),
        a.L = void 0)
    }
    v.Yd = function() {
        2 == Wo(this) && (this.la = ul(D(this.Ti, this, this.b), this.yg))
    }
    ;
    v.Wb = function() {
        this.la && (vl(this.la),
        this.la = void 0)
    }
    ;
    v.F = function() {
        this.I(!1);
        Xo(this);
        Uo(this);
        this.j() && wg(this.j());
        this.za = null;
        delete this.ca;
        Ro.m.F.call(this)
    }
    ;
    function Yo(a, b) {
        Oo.call(this, a, b)
    }
    E(Yo, Oo);
    Yo.prototype.b = function(a, b, c) {
        b = ah(a);
        b = dh(b);
        c = c ? new Tg(c.top + 10,c.right,c.bottom,c.left + 10) : new Tg(10,0,0,10);
        Dl(this.a, a, 8, c, b, 9) & 496 && Dl(this.a, a, 8, c, b, 5)
    }
    ;
    function cp(a) {
        po.call(this, a, 5)
    }
    E(cp, po);
    cp.prototype.b = function(a, b, c) {
        var d = new N(10,0);
        Al(this.c, this.f, a, b, d, c, 9) & 496 && Al(this.c, 4, a, 1, d, c, 5)
    }
    ;
    function dp(a, b, c) {
        Ko.call(this, b, c);
        this.h = new Dj;
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = Xl.X();
        this.va = Bm.X();
        this.L = null;
        this.ih = !0
    }
    E(dp, Ko);
    var ep = "";
    v = dp.prototype;
    v.D = function() {
        dp.m.D.call(this);
        for (var a = 0; a < this.f; ++a)
            this.rc(new fo(""), !0)
    }
    ;
    v.fa = function(a) {
        dp.m.fa.call(this, a);
        M(this.j(), "alt-menu")
    }
    ;
    v.wf = function(a) {
        a = this.h.get(yc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = Di(this, b);
            c.Nb(ym(dn(a, b), 0));
            c.ya(b);
            c.I(!0, !0)
        }
        for (; b < this.f; ++b)
            Di(this, b).I(!1)
    }
    ;
    function fp(a, b, c) {
        a.h.set(yc(b), c);
        Lo(a, b, 9, 8, !1, new Tg(-2,1,-2,1))
    }
    v.gd = function() {
        dp.m.gd.call(this);
        Hj(this.h)
    }
    ;
    v.I = function(a, b) {
        var c = this.Ca;
        this.L = c;
        a && null != c ? (gp(this, c),
        bm(this.C, "altshow"),
        Cm(this.va, 207)) : null != this.l && jn(this.l, 0, 0);
        null != c && (a ? this.qe(c) : this.ne(c));
        b = dp.m.I.call(this, a, b);
        a && null != this.j() && mh(this.j(), !1);
        return b
    }
    ;
    v.bb = function() {
        if (null != this.L) {
            var a = Og(this.L);
            if (null != a)
                return a
        }
        return ""
    }
    ;
    v.pb = function() {
        dp.m.pb.call(this);
        if (this.o)
            for (var a = 0; a < this.g.length; a++) {
                var b = this.g[a];
                vl(b.f);
                b.g();
                b.l(-1);
                b.g();
                b.I(!1)
            }
    }
    ;
    v.qe = function(a) {
        M(a, "trans-target");
        a.title = ""
    }
    ;
    v.ne = function(a) {
        Pf(a, "trans-target");
        a.title = ep
    }
    ;
    v.Ga = function(a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
            return !1;
        var b = dp.m.Ga.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = kh(this.Ca.parentNode.parentNode)
              , d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
                d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
                d = !0;
            if (this.je(d) && (c = this.Ca,
            (c = d ? y(c.nextElementSibling) ? c.nextElementSibling : zg(c.nextSibling, !0) : y(c.previousElementSibling) ? c.previousElementSibling : zg(c.previousSibling, !1)) && c != this.Ca))
                return this.pb(),
                this.Yg(d),
                this.yd(c ? this.a.get(yc(c)) : null, 0, 0),
                hp(this),
                a.b(),
                a.stopPropagation(),
                !0
        }
        return b
    }
    ;
    v.yd = function(a, b, c) {
        kh((a.A || this.Ca).parentNode.parentNode) ? P(this.j(), Za, Sb) : P(this.j(), Za, "");
        if (this.o)
            for (var d = 0; d < this.g.length; d++)
                ip(this, d),
                Ig(this.g[d].c, "...");
        this.wf(a.A);
        dp.m.yd.call(this, a, b, c)
    }
    ;
    function jp(a, b, c) {
        !a.o || b >= a.f || "" == c || (Ig(a.g[b].c, c),
        ip(a, b))
    }
    function ip(a, b) {
        Al(Di(a, b).j(), 12, a.g[b].j(), 8, new N(1,0))
    }
    v.Oc = function(a) {
        dp.m.Oc.call(this, a);
        var b = this.Ca;
        null != b && (bm(this.C, "altmenuhl"),
        Cm(this.va, 209),
        gp(this, b),
        a = this.nd(a.target),
        -1 != a && a != this.f && (vl(this.H[a]),
        this.H[a] = ul(this.Ri, 300, this),
        this.o && (b = this.g[a],
        kh(this.Ca.parentNode.parentNode) ? (M(b.j(), Sb),
        P(b.j(), Za, Sb)) : (Pf(b.j(), Sb),
        P(b.j(), Za, "")),
        ip(this, a),
        vl(b.f),
        0 == b.a ? b.f = ul(D(b.l, b, 1), 300) : b.l(1))))
    }
    ;
    v.Ri = function() {
        bm(this.C, "altmenuhold");
        Cm(this.va, 208)
    }
    ;
    v.Pe = function(a) {
        dp.m.Pe.call(this, a);
        a = this.nd(a.target);
        -1 != a && a != this.f && (vl(this.H[a]),
        this.o && this.g[a].o())
    }
    ;
    v.nd = function(a) {
        return Fi(this, a)
    }
    ;
    v.je = u(!0);
    v.Yg = hc();
    v.pe = function(a, b, c, d, e) {
        (a = dp.m.pe.call(this, a, b, c, d, e)) && a.Ac == Bb && (a.Ac = Ta);
        return a
    }
    ;
    v.ad = function(a) {
        dp.m.ad.call(this, a);
        U(this).w(a.A, Eb, this.ug);
        U(this).w(a.A, Db, this.Dd);
        U(this).w(a.A, Xa, this.sg);
        U(this).w(a.A, Cb, this.tg)
    }
    ;
    v.re = function(a) {
        dp.m.re.call(this, a);
        U(this).ba(a.A, Eb, this.ug);
        U(this).ba(a.A, Db, this.Dd);
        U(this).ba(a.A, Xa, this.sg);
        U(this).ba(a.A, Cb, this.tg)
    }
    ;
    function gp(a, b) {
        if (null != a.l && (b = a.h.get(yc(b))) && (a = a.l,
        a.b))
            for (var c = a.A && (a.A.value || Og(a.A)), d = -1, e = -1, f = !1, h = 0; h < Y(a.b, 5); h++) {
                var k = fn(a.b, h);
                if (0 != Y(k, 2) && (0 == xm(k, 5) && (f = c.indexOf(ym(k, 4), e + 1),
                0 <= f ? (d = f,
                e = d + ym(k, 4).length,
                f = !0) : f = !1),
                fn(a.b, h).Fb() == b.Fb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < Y(b, 3); ++e)
                            c.push({
                                Bc: d + xm(new bn(zm(b, 3, e)), 0),
                                Bf: d + xm(new bn(zm(b, 3, e)), 1)
                            });
                        jn(a, 0, 0, void 0, c)
                    } else
                        d = c.indexOf(ym(b, 0)),
                        0 <= d && jn(a, d, d + ym(b, 0).length);
                    break
                }
            }
    }
    function kp(a, b) {
        b ? Cj(a.a.Ja(!1), function(c) {
            "" == this.b.dg(c.A) && (M(c.A, ac),
            this.b.ib(c.A, "_"));
            return !0
        }, a) : Cj(a.a.Ja(!1), function(c) {
            Nf(c.A, ac) && (Pf(c.A, ac),
            this.b.ib(c.A, ""));
            return !0
        }, a)
    }
    v.ug = function(a) {
        !Zn() && this.isEnabled() && (M(a.target, bc),
        gp(this, a.target),
        kp(this, !0),
        bm(this.C, "althighlight"),
        Cm(this.va, 206))
    }
    ;
    v.Dd = function(a) {
        Pf(a.target, bc);
        null == this.l || this.isVisible() || jn(this.l, 0, 0);
        kp(this, !1)
    }
    ;
    v.tg = function(a) {
        Zn() && this.Dd(a)
    }
    ;
    v.sg = function(a) {
        Zn() || (this.Dd(a),
        Mn(Hn(a.target), void 0).select())
    }
    ;
    function hp(a) {
        Cj(a.a.Ja(!1), function(b) {
            Pf(b.A, bc);
            return !0
        }, a)
    }
    v.ef = function(a) {
        a && a.currentTarget && a.currentTarget.Ca && (a.g = a.currentTarget.Ca);
        dp.m.ef.call(this, a)
    }
    ;
    v.Ud = function(a) {
        Zn() ? hp(this) : this.xb && dp.m.Ud.call(this, a)
    }
    ;
    function lp(a, b, c) {
        this.P = this.c = null;
        dp.call(this, a, b, c)
    }
    E(lp, dp);
    v = lp.prototype;
    v.Yg = ic("c");
    v.I = function(a, b) {
        b = lp.m.I.call(this, a, b);
        this.c = null;
        a ? this.P = this.bb() : null != this.P && this.P != this.bb() && this.dispatchEvent(new Fh(Da,this));
        return b
    }
    ;
    v.qe = function(a) {
        lp.m.qe.call(this, a);
        M(a, "trans-edit");
        a.contentEditable = !0;
        wo(this, a);
        vo(this).focus();
        Lg(vo(this), !0);
        U(this).w(a, yb, this.mg);
        U(this).w(a, Db, this.Ed);
        U(this).w(a, Eb, this.Ed);
        if (null != this.c) {
            a = Mn(Hn(a), void 0);
            var b = this.c ? a.Na() : a.fb()
              , c = rn(a);
            a = c;
            var d = b
              , e = new Ln;
            e.f = Vn(a, d, c, b);
            if (Ag(a) && !rg(a)) {
                var f = a.parentNode;
                d = Lc(f.childNodes, a);
                a = f
            }
            Ag(c) && !rg(c) && (f = c.parentNode,
            b = Lc(f.childNodes, c),
            c = f);
            e.f ? (e.a = c,
            e.g = b,
            e.b = a,
            e.c = d) : (e.a = a,
            e.g = d,
            e.b = c,
            e.c = b);
            e.select()
        }
    }
    ;
    v.ne = function(a) {
        lp.m.ne.call(this, a);
        Pf(a, "trans-edit");
        a.contentEditable = !1;
        vo(this) && Lg(vo(this), !1);
        U(this).ba(a, yb, this.mg);
        U(this).ba(a, Db, this.Ed);
        U(this).ba(a, Eb, this.Ed)
    }
    ;
    v.Ed = function() {
        var a = Xn();
        null == a || a.Ma() == a.eb() && a.Na() == a.fb() || this.I(a.Ma() == a.eb())
    }
    ;
    v.mg = function(a) {
        for (var b = 0; b < this.f; ++b)
            Di(this, b).I(!1);
        if (13 == a.keyCode || 3 == a.keyCode)
            return null === Ao(this) ? (this.pb(),
            a.stopPropagation(),
            a.b(),
            !0) : !1;
        null === Ao(this) || !Si(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ca.focus(),
        this.Cb(Fi(this, null)));
        return !1
    }
    ;
    v.je = function(a) {
        var b = Xn();
        if (b.Ma() == b.eb() && b.Na() == b.fb()) {
            var c = b.Ue() ? b.Na() : b.fb();
            b = Mn(Hn(rn(b)), void 0);
            if (!a && c == b.Na() || a && c == b.fb())
                return !0
        }
        return !1
    }
    ;
    function mp(a, b, c) {
        dp.call(this, a, b, c);
        this.c = null
    }
    E(mp, dp);
    v = mp.prototype;
    v.fa = function(a) {
        mp.m.fa.call(this, a);
        this.c = new np("");
        this.rc(this.c, !0)
    }
    ;
    v.wf = function(a) {
        mp.m.wf.call(this, a);
        this.c.j().firstChild.value = this.b.dg(a)
    }
    ;
    v.I = function(a, b) {
        b = mp.m.I.call(this, a, b);
        a && null != this.j() && (vo(this) == this.c.j().firstChild || vo(this) == this.c.j().firstChild.nextSibling) && mj(this.c, !0);
        return b
    }
    ;
    v.Oc = function(a) {
        mp.m.Oc.call(this, a);
        a.target == this.c ? wo(this, this.c.j().firstChild) : wo(this, this.j());
        vo(this).focus();
        vo(this).tabIndex = 0
    }
    ;
    v.nd = function(a) {
        return a == this.c ? -1 : mp.m.nd.call(this, a)
    }
    ;
    v.Ga = function(a) {
        return 9 == a.keyCode ? (this.c.V & 2 ? (vo(this) == this.c.j().firstChild ? wo(this, this.c.j().firstChild.nextSibling) : wo(this, this.c.j().firstChild),
        vo(this).focus(),
        vo(this).tabIndex = 0) : mj(this.c, !0),
        a.b(),
        a.stopPropagation(),
        !0) : mp.m.Ga.call(this, a)
    }
    ;
    v.je = function() {
        return null === Ao(this) || !(Ao(this)instanceof np)
    }
    ;
    function np(a, b, c) {
        W.call(this, a, c || op.X(), b);
        this.sa(4, !1)
    }
    E(np, W);
    np.prototype.Lc = function(a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent(Da)
    }
    ;
    np.prototype.O = function() {
        np.m.O.call(this);
        U(this).w(this.j().firstChild, yb, function(a) {
            32 == a.keyCode && a.stopPropagation()
        })
    }
    ;
    np.prototype.bb = function() {
        return this.j().firstChild.value
    }
    ;
    function op() {}
    E(op, Gi);
    uc(op);
    var pp = "";
    op.prototype.D = function(a) {
        var b = a.b.D(oa, {
            value: a.ea(),
            id: "alt-input-text",
            type: "text"
        })
          , c = a.b.D(oa, {
            value: pp,
            id: "alt-input-submit",
            "class": "",
            type: Na
        });
        return a.b.D(g, {
            id: "alt-input"
        }, b, c)
    }
    ;
    function qp() {}
    E(qp, Gi);
    uc(qp);
    v = qp.prototype;
    v.Yb = hc();
    v.Oa = function(a, b) {
        hj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        qp.m.Oa.call(this, a, b);
        a.Nb(b.value);
        return b
    }
    ;
    v.D = function(a) {
        hj(a, !1);
        a.kb &= -256;
        a.sa(32, !1);
        return a.b.D(va, {
            "class": Ji(this, a).join(" "),
            disabled: !a.isEnabled()
        }, a.ea() || "")
    }
    ;
    v.wd = function(a) {
        return a.tagName == va
    }
    ;
    v.Ge = A;
    v.Fe = function(a) {
        return a.isEnabled()
    }
    ;
    v.Zb = A;
    v.Jc = function(a, b, c) {
        qp.m.Jc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c)
    }
    ;
    v.Wa = A;
    v.Ic = function(a, b) {
        a && (a.value = b)
    }
    ;
    v.da = u("goog-textarea");
    function rp(a, b, c) {
        W.call(this, a, b || qp.X(), c);
        hj(this, !1);
        this.$c = !0;
        (b = this.j()) && this.a.xd(b, !0);
        this.cc = "" != a;
        a || (this.Mb = "")
    }
    E(rp, W);
    var sp = !(I && !of(11));
    v = rp.prototype;
    v.ec = !1;
    v.Id = !1;
    v.cc = !1;
    v.qb = 0;
    v.Fg = 0;
    v.df = 0;
    v.xg = !1;
    v.Sd = !1;
    v.sf = !1;
    v.rf = !1;
    v.lc = "";
    function tp(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom
    }
    function up(a) {
        var b = a.df
          , c = a.j();
        b && c && a.Sd && (b -= tp(a));
        return b
    }
    function vp(a) {
        a.df = 50;
        wp(a)
    }
    function xp(a) {
        a.Fg = 50;
        wp(a)
    }
    v.ya = function(a) {
        this.Nb(String(a))
    }
    ;
    v.Aa = function() {
        return this.j().value != this.lc || yp(this) || this.cc ? this.j().value : ""
    }
    ;
    v.Nb = function(a) {
        rp.m.Nb.call(this, a);
        this.cc = "" != a;
        wp(this)
    }
    ;
    v.ka = function(a) {
        rp.m.ka.call(this, a);
        this.j().disabled = !a
    }
    ;
    function wp(a) {
        a.j() && a.zd()
    }
    function yp(a) {
        return "placeholder"in a.j()
    }
    function zp(a) {
        a.lc && (yp(a) ? a.j().placeholder = a.lc : !a.j() || a.cc || a.Id || (M(a.j(), Zb),
        a.j().value = a.lc))
    }
    v.O = function() {
        rp.m.O.call(this);
        var a = this.j();
        P(a, {
            overflowY: rb,
            overflowX: Ia,
            boxSizing: Ma,
            MsBoxSizing: Ma,
            WebkitBoxSizing: Ma,
            MozBoxSizing: Ma
        });
        this.c = qh(a);
        this.o = rh(a);
        U(this).w(a, "scroll", this.zd).w(a, db, this.zd).w(a, "keyup", this.zd).w(a, Fb, this.Vi).w(a, La, this.Hh);
        zp(this);
        wp(this)
    }
    ;
    function Ap(a) {
        if (!a.xg) {
            var b = a.j().cloneNode(!1);
            P(b, {
                position: Ca,
                height: Ia,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: rb
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.sf = d > c;
            b.style.borderWidth = "10px";
            a.rf = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Sd = !0);
            wg(b);
            a.xg = !0
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = qh(b),
        a.o = rh(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.sf) {
            var f = a.c;
            d -= f.top + f.bottom
        }
        a.rf || (e = rh(e),
        d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Sd ? c -= tp(a) : (a.sf || (d = a.c,
        c += d.top + d.bottom),
        a.rf || (a = rh(b),
        c += a.top + a.bottom));
        return c
    }
    function Bp(a, b) {
        a.qb != b && (a.qb = b,
        a.j().style.height = b + "px")
    }
    function Cp(a) {
        var b = a.j();
        b.style.height = Ia;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.qb = 0
    }
    v.Hh = function() {
        yp(this) || (this.Id = !1,
        "" == this.j().value && (this.cc = !1,
        zp(this)))
    }
    ;
    v.zd = function(a) {
        if (!this.ec) {
            var b = this.j();
            !yp(this) && a && a.type == db && (b.value == this.lc && this.lc && !this.Id && (Pf(b, Zb),
            b.value = ""),
            this.Id = !0,
            this.cc = "" != b.value);
            var c = !1;
            this.ec = !0;
            a = this.qb;
            if (b.scrollHeight) {
                var d = !1
                  , e = !1
                  , f = Ap(this)
                  , h = b.offsetHeight
                  , k = up(this);
                var l = this.Fg;
                var m = this.j();
                l && m && this.Sd && (l -= tp(this));
                k && f < k ? (Bp(this, k),
                d = !0) : l && f > l ? (Bp(this, l),
                b.style.overflowY = "",
                e = !0) : h != f ? Bp(this, f) : this.qb || (this.qb = f);
                d || e || !sp || (c = !0)
            } else
                Cp(this);
            this.ec = !1;
            c && (b = this.j(),
            this.ec || (this.ec = !0,
            (e = b.scrollHeight) ? (f = Ap(this),
            c = up(this),
            c && f <= c || (d = this.c,
            b.style.paddingBottom = d.bottom + 1 + "px",
            Ap(this) == f && (b.style.paddingBottom = d.bottom + e + "px",
            b.scrollTop = 0,
            e = Ap(this) - e,
            e >= c ? Bp(this, e) : Bp(this, c)),
            b.style.paddingBottom = d.bottom + "px")) : Cp(this),
            this.ec = !1));
            a != this.qb && this.dispatchEvent("resize")
        }
    }
    ;
    v.Vi = function() {
        var a = this.j()
          , b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.qb && (this.qb = this.df = b)
    }
    ;
    function Dp(a) {
        return function() {
            return a
        }
    }
    function Ep(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }
    function Fp(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, f = 0; f < a.length; f++) {
            var h = a.charCodeAt(f);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++f) & 1023),
            d[e++] = h >> 18 | 240,
            d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224,
            d[e++] = h >> 6 & 63 | 128),
            d[e++] = h & 63 | 128)
        }
        a = b;
        for (e = 0; e < d.length; e++)
            a += d[e],
            a = Ep(a, "+-a^+6");
        a = Ep(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() + "." + (c ^ b)
    }
    var Gp = null;
    function Hp() {
        var a = Dp(String.fromCharCode(116))
          , b = Dp(String.fromCharCode(107));
        a = [a(), a()];
        a[1] = b();
        return a.join("")
    }
    ;function Ip() {
        this.a = 0;
        this.va = Bm.X()
    }
    function Jp(a) {
        a = a.Da("q").join("");
        if (null !== Gp)
            var b = Gp;
        else {
            var c = Dp(String.fromCharCode(84));
            b = Dp(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (Gp = window[c.join(b())] || "") || ""
        }
        return "&" + Hp() + "=" + Fp(a, b)
    }
    function Kp(a, b, c, d, e) {
        c = c.toString();
        c += Jp(d);
        d = d.toString();
        var f = sa;
        b += "?" + c;
        2E3 > b.length + d.length && (f = "GET",
        b += "&" + d,
        d = "");
        ++a.a;
        Pl(b, function(h) {
            --a.a;
            e(h)
        }, f, d, void 0)
    }
    Ip.prototype.b = function(a, b, c) {
        c = c.target;
        !c.Pc() || "[" != c.Lb()[0] && "{" != c.Lb()[0] ? (Lp(this, c),
        b && b(c.xa())) : (b = Mp(c, "handleSingleResult_"),
        C(b) && (b = new en(b)),
        a(b))
    }
    ;
    Ip.prototype.c = function(a, b, c) {
        c = c.target;
        if (c.Pc()) {
            c = Mp(c, "handleTextResult_");
            var d = [];
            if (a)
                d.push(C(c) ? c[0] : c);
            else if (C(c))
                for (a = 0; a < c.length; ++a)
                    d.push(C(c[a]) ? c[a][0] : c[a]);
            b(d)
        } else
            Lp(this, c),
            b(null, c.ye())
    }
    ;
    function Mp(a, b) {
        var c = a.Lb();
        a = {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: a.ze()
        };
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Xl.X(),
            a.js = c,
            a.error = e.message,
            d.log("jsonParseErr", a),
            e;
        }
        return d
    }
    var Np = {}
      , Op = (Np[1] = 15,
    Np[2] = 16,
    Np[3] = 17,
    Np[4] = 18,
    Np[5] = 19,
    Np[6] = 20,
    Np[7] = 21,
    Np[8] = 22,
    Np[9] = 23,
    Np);
    function Lp(a, b) {
        var c = b.ye();
        c = c in Op ? Op[c] : 0;
        a = Cm(a.va, 148);
        var d = new fm;
        d = If(d, 1, 156);
        c && If(d, 5, c);
        Jf(a, 63, d);
        c = Xl.X();
        a = b.ze();
        b = b.Lb();
        c.log("invalidResponse", {
            q: a.substring(0, 500),
            ql: a.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    }
    ;function Pp(a, b) {
        this.b = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            d && f == b || (c[e] = f,
            d = !1)
        }
        this.a = c
    }
    var Qp = {};
    function Rp(a) {
        return -128 <= a && 128 > a ? Ue(Qp, a, function(b) {
            return new Pp([b | 0],0 > b ? -1 : 0)
        }) : new Pp([a | 0],0 > a ? -1 : 0)
    }
    function Sp(a) {
        if (isNaN(a) || !isFinite(a))
            return Tp;
        if (0 > a)
            return Up(Sp(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++)
            b[d] = a / c | 0,
            c *= 4294967296;
        return new Pp(b,0)
    }
    var Tp = Rp(0)
      , Vp = Rp(1)
      , Wp = Rp(16777216);
    function Xp(a) {
        if (-1 == a.b)
            return -Xp(Up(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Yp(a, d);
            b += (0 <= e ? e : 4294967296 + e) * c;
            c *= 4294967296
        }
        return b
    }
    v = Pp.prototype;
    v.toString = function(a) {
        a = a || 10;
        if (2 > a || 36 < a)
            throw Error("radix out of range: " + a);
        if (Zp(this))
            return "0";
        if (-1 == this.b)
            return "-" + Up(this).toString(a);
        for (var b = Sp(Math.pow(a, 6)), c = this, d = ""; ; ) {
            var e = $p(c, b).a;
            c = aq(c, bq(e, b));
            var f = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a);
            c = e;
            if (Zp(c))
                return f + d;
            for (; 6 > f.length; )
                f = "0" + f;
            d = "" + f + d
        }
    }
    ;
    function Yp(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }
    function Zp(a) {
        if (0 != a.b)
            return !1;
        for (var b = 0; b < a.a.length; b++)
            if (0 != a.a[b])
                return !1;
        return !0
    }
    function cq(a, b) {
        a = aq(a, b);
        return -1 == a.b ? -1 : Zp(a) ? 0 : 1
    }
    function Up(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++)
            c[d] = ~a.a[d];
        return (new Pp(c,~a.b)).add(Vp)
    }
    v.abs = function() {
        return -1 == this.b ? Up(this) : this
    }
    ;
    v.add = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var f = d + (Yp(this, e) & 65535) + (Yp(a, e) & 65535)
              , h = (f >>> 16) + (Yp(this, e) >>> 16) + (Yp(a, e) >>> 16);
            d = h >>> 16;
            f &= 65535;
            h &= 65535;
            c[e] = h << 16 | f
        }
        return new Pp(c,c[c.length - 1] & -2147483648 ? -1 : 0)
    }
    ;
    function aq(a, b) {
        return a.add(Up(b))
    }
    function bq(a, b) {
        if (Zp(a) || Zp(b))
            return Tp;
        if (-1 == a.b)
            return -1 == b.b ? bq(Up(a), Up(b)) : Up(bq(Up(a), b));
        if (-1 == b.b)
            return Up(bq(a, Up(b)));
        if (0 > cq(a, Wp) && 0 > cq(b, Wp))
            return Sp(Xp(a) * Xp(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++)
            d[e] = 0;
        for (e = 0; e < a.a.length; e++)
            for (var f = 0; f < b.a.length; f++) {
                var h = Yp(a, e) >>> 16
                  , k = Yp(a, e) & 65535
                  , l = Yp(b, f) >>> 16
                  , m = Yp(b, f) & 65535;
                d[2 * e + 2 * f] += k * m;
                dq(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += h * m;
                dq(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += k * l;
                dq(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += h * l;
                dq(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++)
            d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++)
            d[e] = 0;
        return new Pp(d,0)
    }
    function dq(a, b) {
        for (; (a[b] & 65535) != a[b]; )
            a[b + 1] += a[b] >>> 16,
            a[b] &= 65535,
            b++
    }
    function eq(a, b) {
        this.a = a;
        this.b = b
    }
    function $p(a, b) {
        if (Zp(b))
            throw Error("division by zero");
        if (Zp(a))
            return new eq(Tp,Tp);
        if (-1 == a.b)
            return b = $p(Up(a), b),
            new eq(Up(b.a),Up(b.b));
        if (-1 == b.b)
            return b = $p(a, Up(b)),
            new eq(Up(b.a),b.b);
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b)
                throw Error("slowDivide_ only works with positive integers.");
            for (var c = Vp, d = b; 0 >= cq(d, a); )
                c = fq(c, 1),
                d = fq(d, 1);
            var e = gq(c, 1)
              , f = gq(d, 1);
            d = gq(d, 2);
            for (c = gq(c, 2); !Zp(d); ) {
                var h = f.add(d);
                0 >= cq(h, a) && (e = e.add(c),
                f = h);
                d = gq(d, 1);
                c = gq(c, 1)
            }
            b = aq(a, bq(e, b));
            return new eq(e,b)
        }
        for (e = Tp; 0 <= cq(a, b); ) {
            c = Math.max(1, Math.floor(Xp(a) / Xp(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = Sp(c);
            for (h = bq(f, b); -1 == h.b || 0 < cq(h, a); )
                c -= d,
                f = Sp(c),
                h = bq(f, b);
            Zp(f) && (f = Vp);
            e = e.add(f);
            a = aq(a, h)
        }
        return new eq(e,a)
    }
    v.and = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Yp(this, d) & Yp(a, d);
        return new Pp(c,this.b & a.b)
    }
    ;
    v.or = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Yp(this, d) | Yp(a, d);
        return new Pp(c,this.b | a.b)
    }
    ;
    v.xor = function(a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0; d < b; d++)
            c[d] = Yp(this, d) ^ Yp(a, d);
        return new Pp(c,this.b ^ a.b)
    }
    ;
    function fq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++)
            e[f] = 0 < b ? Yp(a, f - c) << b | Yp(a, f - c - 1) >>> 32 - b : Yp(a, f - c);
        return new Pp(e,a.b)
    }
    function gq(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], f = 0; f < d; f++)
            e[f] = 0 < b ? Yp(a, f + c) >>> b | Yp(a, f + c + 1) << 32 - b : Yp(a, f + c);
        return new Pp(e,a.b)
    }
    ;aq(fq(Vp, 32), Vp);
    aq(fq(Vp, 128), Vp);
    var hq = I || K || Ve || We || !1;
    vf && 0 <= Fd(zl, "4") || wf && L("533") || J && L("2.0") || I && L("10") || Ve && je();
    function iq(a, b, c, d, e, f, h, k, l) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(D(this.fi, this));
        this.l = null;
        this.a = Ia;
        this.ca = this.c = "";
        this.Za = new Ip;
        this.Gb = !!b && hq && !I;
        this.J = null != e ? e : 0;
        this.f = null;
        this.Gb ? this.f = new lp : this.f = new mp;
        l && this.f.ka(!1);
        if (0 < this.J)
            for (a = this.f,
            a.o = !0,
            b = 0; b < a.f; b++)
                h = mg(g, "goog-menu", ""),
                e = mg(g, null, h),
                h = new $m(e,h),
                a.g[b] = h,
                document.body.appendChild(e);
        this.f.fa(c);
        this.h = k || null;
        this.Ia = null != d ? d : -1;
        this.L = Xl.X();
        this.C = new Dj;
        this.H = null;
        this.Ya = "t";
        this.P = this.W = null;
        this.o = f || null;
        this.qa = !1;
        null != this.o && (this.o.c(D(this.kj, this)),
        this.o.a(D(this.bi, this)));
        this.ua = null;
        this.va = Bm.X()
    }
    E(iq, T);
    function jq(a, b) {
        a.ua = b;
        a.f.l = b
    }
    function kq(a) {
        a.H = vb;
        a.f.C.s = a.H || ""
    }
    function lq(a) {
        var b = mq;
        a.L.f = b;
        a.Ya = b
    }
    function nq(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new en(b),
        a.P = null);
        oq(a) && (a.g.b(),
        null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != cg().length;
            a.b.Qc(a.j());
            a.f.gd();
            a.ua && (a.ua.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++)
                pq(a.l, e) && (c += " "),
                c += qq(a.l, e),
                d += Y(fn(a.l, e), 2);
            if (0 != d) {
                c = [];
                d = !1;
                e = a.l;
                for (var f = "", h = 0; h < Y(e, 5); h++) {
                    var k = fn(e, h);
                    null != k.Ea[4] && 0 < ym(k, 4).length ? f = ym(k, 4) : (new cn(k.Fb())).Ea[4] = f
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    f = fn(a.l, e);
                    h = dn(f, 0);
                    pq(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) : ("km" == a.c || "lo" == a.c) && a.b.appendChild(a.j(), K ? qg() : Ve ? document.createTextNode("&shy;") : I ? document.createTextNode("&#8203;") : qg());
                    null != f.Ea[4] && 0 < ym(f, 4).length && 0 == xm(f, 5) && c.push(ym(f, 4));
                    var l;
                    k = qq(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = rq(k)) : (l = a.b.D(ua, null, k),
                    h = xm(h, 1),
                    0 <= a.Ia && h < a.Ia && M(l, "alt-low-conf"),
                    Fj(a.C, a.a + "." + a.c + "." + ym(f, 0)) && (h = a.C.get(a.a + "." + a.c + "." + ym(f, 0)),
                    h != sq(f, 0) && (a.b.ib(l, h),
                    M(l, Ga),
                    d = !0,
                    tq(a, !0))),
                    l.title = ep,
                    fp(a.f, l, f));
                    l && a.b.appendChild(a.j(), l)
                }
                if (null != a.g) {
                    l = a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e)
                        l += "." + c[e];
                    Fj(a.C, l) && (uq(a, !1),
                    d = !0,
                    vq(a, a.C.get(l)),
                    null != a.h && a.h.a(!1),
                    tq(a, !0))
                }
                d || (tq(a, !1),
                uq(a, !1));
                (d || b) && a.dispatchEvent(Da)
            }
        } else
            tq(a, !1),
            uq(a, !1)
    }
    function rq(a) {
        a = Je(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment()
          , c = 0;
        Mc(a, function(d) {
            0 != c && b.appendChild(mg("BR"));
            c++;
            "" != d && b.appendChild(document.createTextNode(String(Ke(d))))
        });
        return b
    }
    function wq(a, b) {
        if (oq(a))
            return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes)
            for (var d = 0; d < a.j().childNodes.length; ++d) {
                var e = a.j().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Og(e)
            }
        return c.join("")
    }
    function xq(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = fn(b, a);
            if ((e = e && e) && rm(c.Ea, e.Ea)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (var f = b; 0 <= f; f--)
                    if (0 == xm(fn(c, f), 5)) {
                        e = f;
                        break
                    }
                for (f = b + 1; f <= Y(c, 5); f++)
                    if (0 == xm(fn(c, f), 5)) {
                        a = f;
                        break
                    }
                if (null != d && d)
                    b = yq(c, e, a);
                else if (d = c,
                c = e,
                d) {
                    e = b + 1;
                    f = b;
                    for (b = qq(d, b).length; 64 > b && (e != a || f != c); )
                        e < a && (b += qq(d, e++).length + 1),
                        64 > b && f > c && (b += qq(d, --f).length + 1);
                    b = yq(d, f, e)
                } else
                    b = "";
                return b
            }
        }
        return ""
    }
    function yq(a, b, c) {
        var d = [];
        d.push(qq(a, b));
        for (b += 1; b < c; b++)
            pq(a, b) && d.push(" "),
            d.push(qq(a, b));
        return d.join("")
    }
    function pq(a, b) {
        if (0 == b)
            return !1;
        var c = fn(a, b)
          , d = fn(a, b - 1);
        if (c = wm(dn(c, 0), 2) && !wm(dn(d, 0), 3))
            a = qq(a, b - 1),
            b = a.length - 1,
            c = !(0 <= b && a.indexOf("\n", b) == b);
        return c
    }
    v = iq.prototype;
    v.cb = t("a");
    v.oa = t("c");
    v.D = function() {
        this.S(Rg(this.b, "span"))
    }
    ;
    v.S = function(a) {
        iq.m.S.call(this, a);
        nq(this)
    }
    ;
    v.O = function() {
        iq.m.O.call(this);
        U(this).w(this.f, Da, this.si);
        null != this.h && null != this.h.b && (U(this).w(this.h.b, Ta, this.wi),
        mi(U(this), this.h.b, this.va.a, this.va));
        U(this).w(this.f, "show", this.ri);
        this.j() && U(this).w(this.j(), yb, function(a) {
            32 == a.keyCode && a.stopPropagation()
        }, !0)
    }
    ;
    v.F = function() {
        iq.m.F.call(this);
        this.f.M()
    }
    ;
    v.fi = function() {
        this.o.ka(this.g.c());
        tq(this, this.g.c())
    }
    ;
    v.si = function(a) {
        if (a.type != tb || a.target == this.f)
            if (null == a.target && null != this.g)
                this.L.log("editpopupclk"),
                Cm(this.va, 233),
                null != this.h && this.h.a(!0),
                this.g.l(wq(this)),
                this.qa = this.o.j().style.display != q,
                this.o.reset(),
                null != this.h ? this.o.ka(this.h.b.style.display != q) : this.o.ka(!1),
                tq(this, !1);
            else {
                var b = a.g;
                null == b && null != a.currentTarget && (b = a.currentTarget.Ca);
                var c = a.target.bb();
                if (null != b && null != a.target) {
                    var d = b
                      , e = this.f.h.get(yc(d));
                    this.b.ib(d, c);
                    c == sq(e, 0) ? (Pf(d, Ga),
                    0 == cg().length && (tq(this, !1),
                    uq(this, !1))) : (M(d, Ga),
                    tq(this, !0),
                    uq(this, !0));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + ym(e, 0), c);
                    e = this.f.h.get(yc(b));
                    null != this.C && this.C.set(this.a + "." + this.c + "." + ym(e, 0), c);
                    d = sq(e, 0);
                    b = Fi(this.f, a.target);
                    d = {
                        sl: this.a,
                        tl: this.c,
                        utrans: c,
                        gtrans: d,
                        index: b,
                        ophrase: ym(e, 0),
                        osentence: ym(e, 4),
                        tsentence: xq(this, this.l, e)
                    };
                    0 < Y(e, 2) && (d.confidence = xm(dn(e, 0), 1));
                    if (a.target instanceof np || -1 == b)
                        d.manual = 1,
                        Cm(this.va, 240);
                    else {
                        a = Cm(this.va, 239);
                        e = new km;
                        var f = Kf(Kf(e, 2, im), 3, gm);
                        If(f, 1, b);
                        Jf(a, 27, e)
                    }
                    for (var h in d)
                        z(d[h]) && 64 < d[h].length && (d.tr = 1,
                        d[h] = d[h].substr(0, 64));
                    this.L.log("usealt", d, this.H);
                    h = new Fh("usealt");
                    h.text = c;
                    this.dispatchEvent(h);
                    this.dispatchEvent(Da)
                }
            }
    }
    ;
    function vq(a, b) {
        if (a.j()) {
            null == a.W && (a.P = Vc(a.b.Rh(a.j())));
            a.W = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length)
                c = (c = a.j().childNodes[0]) ? Fj(a.f.a, yc(c)) : !1;
            c ? (a.b.Qc(a.j()),
            a.f.gd(),
            b = a.b.D(ua, Ga, a.W),
            a.b.appendChild(a.j(), b),
            fp(a.f, b, new cn)) : a.j().innerHTML = Je(b).replace(/(\r\n|\r|\n)/g, "<br>")
        }
    }
    v.wi = function() {
        null != this.g && oq(this) ? this.g.g() : zq(this);
        this.L.log("clkundo", void 0, this.H)
    }
    ;
    v.bi = function() {
        oq(this) && (this.g.c() && (vq(this, this.g.a()),
        this.qa = !0),
        this.g.b(),
        null != this.h && this.h.a(!1),
        this.g.c() && tq(this, !0),
        this.o.ka(!0),
        Q(this.o.j(), this.qa),
        this.dispatchEvent(Da));
        Cm(this.va, 215);
        this.L.log("clkcancel", void 0, this.H)
    }
    ;
    v.ri = function() {
        var a = this.f.h.get(yc(this.f.Ca));
        if (a) {
            if (0 < this.J) {
                var b = new Pj("source=baf");
                if (1 == this.J) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++)
                        c.push(sq(a, d));
                    d = this.Za;
                    var f = this.c
                      , h = this.a
                      , k = Aq(this)
                      , l = D(this.mj, this);
                    e = new Pj;
                    var m = new Pj;
                    e.set("client", "mt");
                    e.set("sl", f);
                    e.set("tl", h);
                    e.set("hl", k);
                    e.set("v", "1.0");
                    b && e.cg(b);
                    (b = !C(c) || C(c) && 1 == c.length) ? m.set("q", c) : dk(m, "q", c);
                    b = D(d.c, d, b, l);
                    Kp(d, ea, e, m, b)
                } else
                    for (d = 0,
                    e = Y(a, 2); d < e; d++) {
                        h = sq(a, d);
                        c = this.Za;
                        m = this.c;
                        l = this.a;
                        f = Aq(this);
                        k = D(this.nj, this, d);
                        var n = b
                          , r = new Pj
                          , w = new Pj;
                        r.set("client", "mt");
                        r.set("sl", m);
                        r.set("tl", l);
                        r.set("hl", f);
                        dk(r, "dt", ["at", "t"]);
                        n && r.cg(n);
                        w.set("q", h);
                        Kp(c, "/translate_a/single", r, w, D(c.b, c, k, void 0))
                    }
            }
            b = new Fh(Ta);
            b.text = this.f.bb();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = xm(dn(a, 0), 1);
            this.a && this.c && this.ca && (b.segments = Y(this.l, 5),
            b.sl = this.a,
            b.tl = this.c,
            b.hl = this.ca);
            Cm(this.va, 238);
            this.L.log("phrsclk", b, this.H)
        }
    }
    ;
    v.nj = function(a, b) {
        if (1 == this.J || 1 < Y(b, 5)) {
            var c = ym(new Am(zm(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++)
                c += " " + ym(new Am(zm(b, 0, d)), 0);
            d = c
        } else if (1 == Y(b, 5)) {
            c = [];
            b = fn(b, 0);
            d = 0;
            for (e = Math.min(this.J, Y(b, 2)); d < e; d++)
                c.push(sq(b, d));
            d = c.join(", ")
        } else
            d = "...";
        jp(this.f, a, d)
    }
    ;
    v.mj = function(a) {
        for (var b = 0; b < a.length; b++)
            jp(this.f, b, a[b])
    }
    ;
    function zq(a) {
        oq(a) && (null != a.h && a.h.a(!1),
        a.g.b());
        Hj(a.C);
        a.W = null;
        nq(a);
        a.dispatchEvent(Da)
    }
    function tq(a, b) {
        null != a.h && null != a.h.b && Q(a.h.b, b)
    }
    function uq(a, b) {
        null != a.o && (b && a.o.reset(),
        Q(a.o.j(), b))
    }
    v.kj = function() {
        var a = [], b;
        null != this.P ? b = this.P : b = xg(this.j());
        for (var c = {
            segment: []
        }, d = null, e = 0, f = 0; f < b.length; f++) {
            var h = fn(this.l, f);
            if (null != h) {
                var k = Og(b[f]);
                a: {
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2))
                        l = 0;
                    else {
                        for (var n = 0; n < Y(m, 2); ++n)
                            if (l == sq(m, n)) {
                                l = n;
                                break a
                            }
                        l = -1
                    }
                }
                m = wd(ym(h, 4));
                n = xq(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1])
                        a.push(m),
                        d = Bq(this, a.length - 1),
                        e = 0,
                        d = {
                            source: m,
                            original_target: n,
                            segment_source: d,
                            phrase_correction: []
                        },
                        c.segment.push(d);
                    if (0 != l)
                        for (m = sq(h, 0).length,
                        l = {
                            alternative_index: l,
                            edited_phrase: k,
                            source_span: [],
                            target_span: [{
                                start: e,
                                end: e + m
                            }]
                        },
                        d.phrase_correction.push(l),
                        m = 0; m < Y(h, 3); ++m)
                            n = new bn(zm(h, 3, m)),
                            l.source_span.push({
                                start: xm(n, 0),
                                end: xm(n, 1)
                            });
                    e += k.length;
                    wm(dn(h, 0), 2) && e++
                }
            }
        }
        if (oq(this)) {
            this.dispatchEvent(Da);
            this.g.b();
            null != this.h && this.h.a(!1);
            tq(this, !0);
            this.g.a() != wq(this) && vq(this, this.g.a());
            b = this.a + "." + this.c;
            for (f = 0; f < a.length; ++f)
                b += "." + a[f];
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0
        }
        c.edited_target = wq(this, !0);
        a = new Pj;
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        Pl(fa + this.Ya, void 0, sa, a.toString(), 1E4)
    }
    ;
    function Bq(a, b) {
        if (b < Y(a.l, 0))
            switch (vm(new Am(zm(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
            }
        return 0
    }
    function oq(a) {
        return null != a.g && a.g.f()
    }
    function qq(a, b) {
        a = fn(a, b);
        return 0 == Y(a, 2) ? ym(a, 0) : sq(a, 0)
    }
    function sq(a, b) {
        return ym(dn(a, b), 0)
    }
    function Aq(a) {
        a = a.ca;
        0 === a.length && null != ag(document, "hl") && (a = ag(document, "hl").value);
        return a
    }
    ;function Cq() {}
    ;var Dq = window.google && google.translate && google.translate._const;
    Dq || (Dq = {
        _cac: "",
        _cam: "",
        _cest: new Date,
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        wk: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var Eq = window.google && window.google.translate && window.google.translate.v || ""
      , Fq = Dq._cl || "en"
      , Gq = Dq._cuc
      , Hq = Dq._cnad
      , Iq = Dq._cest
      , Jq = Dq._cnal || {}
      , Kq = "lib" == Dq._cam ? 1 : 0
      , Lq = (Dq._cac || "te") + (1 == Kq ? "_lib" : "")
      , Mq = function() {
        function a(d) {
            return function() {
                return d
            }
        }
        var b = String.fromCharCode(107)
          , c = a(String.fromCharCode(116));
        b = a(b);
        c = [c(), c()];
        c[1] = b();
        return Dq["_c" + c.join(b())] || ""
    }()
      , Nq = Dq._pah || ""
      , Oq = Dq._pas || "https://"
      , Pq = Dq._pbi || ""
      , Qq = Dq._pci || ""
      , Rq = Dq._plla || ""
      , Sq = Dq._pli || ""
      , Tq = Dq._ps || ""
      , Uq = Dq._puh || ""
      , Vq = "//" + Uq + fa + Lq
      , Wq = "https://www.google.com/support/translate" + ("en" == Fq ? "" : "#googtrans/en/" + Fq);
    function Xq(a) {
        for (var b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = !0;
        return b
    }
    function Yq(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1
    }
    Yq.prototype.register = function(a) {
        if (this.c)
            return a || A;
        this.a.push(0);
        var b = this.a.length - 1;
        return D(function() {
            this.a[b]++;
            a && a.apply(null, arguments);
            Zq(this)
        }, this)
    }
    ;
    Yq.prototype.delay = function(a) {
        return this.c ? a : D(function() {
            if (this.c)
                a.apply(null, arguments);
            else {
                var b = arguments;
                this.b.push(function() {
                    a.apply(null, b)
                })
            }
        }, this)
    }
    ;
    Yq.prototype.finish = function() {
        this.a[0] = 1;
        Zq(this)
    }
    ;
    function Zq(a) {
        for (var b = 0; b < a.a.length; ++b)
            if (0 == a.a[b])
                return;
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call()
        }
        a.b = [];
        a.a = []
    }
    function $q(a) {
        this.c = a;
        this.b = this.a = !1
    }
    function ar(a, b) {
        return D(function() {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(),
            this.a = !0) : this.a = !0
        }, a)
    }
    $q.prototype.finish = function() {
        this.b || (this.b = !0,
        this.a && this.c.call())
    }
    ;
    function br(a, b, c) {
        this.a = b;
        this.h = a;
        this.l = c || 0;
        this.b = this.c = !1
    }
    function cr(a) {
        a.c || a.g()
    }
    br.prototype.g = function() {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b),
        this.f = 0) : this.f = window.setTimeout(D(this.g, this), 30)
    }
    ;
    br.prototype.cancel = function() {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b)
    }
    ;
    function dr(a, b) {
        return function() {
            a.dispatchEvent(b)
        }
    }
    function er(a) {
        a = wd(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a)
            return "zh-CN";
        if ("zh-tw" == a)
            return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }
    function fr(a) {
        var b = [], c;
        for (c in a)
            if (a[c] !== Object.prototype[c]) {
                var d = He(c);
                if (B(a[c]) == Ha)
                    for (var e = 0; e < a[c].length; ++e)
                        b.push(d + "=" + He(a[c][e]));
                else
                    b.push(d + "=" + He(a[c]))
            }
        return b.join("&")
    }

    function gr(a, b) {
        //	console.log('gr');
        if (true) {
            return;
        }

        b = b || {};
        b.nca = a;
        b.client = Lq;
        Eq && (b.logld = "v" + Eq);
        var c = new Image;
        c.src = "https://" + Uq + "/gen204?" + fr(b);
        c.onload = function() {
            c.onload = null
        }
    }

    function hr(a, b) {
        if ((I || Ve) && window.location.hostname != document.domain) {
            ir = ir ? ir + 1 : 1;
            var c = "f" + ir + "_" + Ec().toString(36);
            window[c] = function() {
                window[c] = void 0;
                a.src = xb;
                b && window.setTimeout(function() {
                    b()
                }, 0)
            }
            ;
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
        } else
            b && b()
    }
    var ir;
    function jr() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c
            }
        } catch (d) {
            return {}
        }
        return a
    }
    function kr(a) {
        for (var b in a)
            Object.prototype[b] = a[b]
    }
    function lr(a) {
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                return !1;
        return !0
    }
    function mr(a, b) {
        return a != Ia && "zh-CN" != a && a == b
    }
    ;var nr, or, pr;
    (function() {
        function a(d, e, f) {
            var h = Array.prototype.slice.call(arguments);
            h.splice(0, 2);
            h = "l" + d.toString(16) + "i" + e.toString(16) + (h.length ? "-" + h.join("_") : "");
            b ? b.push(h) : gr(h)
        }
        var b = null
          , c = null;
        nr = function(d, e, f) {
            for (var h in f)
                f[h] !== Object.prototype[h] && (e[h] = wc(f[h]) ? f[h] : Dc(a, d, Number(f[h])))
        }
        ;
        or = function() {
            b && pr();
            b = [];
            c = S(window, "unload", function() {
                pr()
            })
        }
        ;
        pr = function() {
            c && (ei(c),
            c = null);
            b && b.length && gr(b.join(""));
            b = null
        }
    }
    )();
    function qr(a) {
        rr();
        return ue(a, null)
    }
    function sr(a) {
        rr();
        return ud(a)
    }
    var rr = A;
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function tr(a) {
        var b = ur;
        this.g = [];
        this.C = b;
        this.G = a || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.o = this.K = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0
    }
    tr.prototype.cancel = function(a) {
        if (this.a)
            this.c instanceof tr && this.c.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--,
                0 >= b.s && b.cancel())
            }
            this.C ? this.C.call(this.G, this) : this.o = !0;
            this.a || (a = new vr(this),
            wr(this),
            xr(this, !1, a))
        }
    }
    ;
    tr.prototype.B = function(a, b) {
        this.l = !1;
        xr(this, a, b)
    }
    ;
    function xr(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        yr(a)
    }
    function wr(a) {
        if (a.a) {
            if (!a.o)
                throw new zr(a);
            a.o = !1
        }
    }
    function Ar(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && yr(a)
    }
    tr.prototype.then = function(a, b, c) {
        var d, e, f = new bl(function(h, k) {
            d = h;
            e = k
        }
        );
        Ar(this, d, function(h) {
            h instanceof vr ? f.cancel() : e(h)
        });
        return f.then(a, b, c)
    }
    ;
    tr.prototype.$goog_Thenable = !0;
    function Br(a) {
        return Pc(a.g, function(b) {
            return wc(b[1])
        })
    }
    function yr(a) {
        if (a.h && a.a && Br(a)) {
            var b = a.h
              , c = Cr[b];
            c && (x.clearTimeout(c.ia),
            delete Cr[b]);
            a.h = 0
        }
        a.b && (a.b.s--,
        delete a.b);
        b = a.c;
        for (var d = c = !1; a.g.length && !a.l; ) {
            var e = a.g.shift()
              , f = e[0]
              , h = e[1];
            e = e[2];
            if (f = a.f ? h : f)
                try {
                    var k = f.call(e || a.G, b);
                    y(k) && (a.f = a.f && (k == b || k instanceof Error),
                    a.c = b = k);
                    if (al(b) || typeof x.Promise === p && b instanceof x.Promise)
                        d = !0,
                        a.l = !0
                } catch (l) {
                    b = l,
                    a.f = !0,
                    Br(a) || (c = !0)
                }
        }
        a.c = b;
        d && (k = D(a.B, a, !0),
        d = D(a.B, a, !1),
        b instanceof tr ? (Ar(b, k, d),
        b.K = !0) : b.then(k, d));
        c && (b = new Dr(b),
        Cr[b.ia] = b,
        a.h = b.ia)
    }
    function zr() {
        Gc.call(this)
    }
    E(zr, Gc);
    zr.prototype.message = "Deferred has already fired";
    zr.prototype.name = "AlreadyCalledError";
    function vr() {
        Gc.call(this)
    }
    E(vr, Gc);
    vr.prototype.message = "Deferred was canceled";
    vr.prototype.name = "CanceledError";
    function Dr(a) {
        this.ia = x.setTimeout(D(this.a, this), 0);
        this.jd = a
    }
    Dr.prototype.a = function() {
        delete Cr[this.ia];
        throw this.jd;
    }
    ;
    var Cr = {};
    function Er(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = sd(a).toString()
          , e = document.createElement(ta)
          , f = {
            Vg: e,
            Eb: void 0
        }
          , h = new tr(f)
          , k = null
          , l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function() {
            Fr(e, !0);
            var m = new Gr(1,"Timeout reached for loading script " + d);
            wr(h);
            xr(h, !1, m)
        }, l),
        f.Eb = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != Va || (Fr(e, c.Jh || !1, k),
            wr(h),
            xr(h, !0, null))
        }
        ;
        e.onerror = function() {
            Fr(e, !0, k);
            var m = new Gr(0,"Error while loading script " + d);
            wr(h);
            xr(h, !1, m)
        }
        ;
        f = c.attributes || {};
        hd(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        fg(e, f);
        Ce(e, a);

		//console.log(e);
        Hr(b).appendChild(e);
		//console.log(h);
		
		var urls=(e.src+'').split("&cb=");
		//console.log(urls);
		var calname = urls[1];
		var text = calname+'({"sl":{"auto":"检测语言","sq":"阿尔巴尼亚语","ar":"阿拉伯语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","ee":"埃维语","ay":"艾马拉语","ga":"爱尔兰语","et":"爱沙尼亚语","or":"奥利亚语","om":"奥罗莫语","eu":"巴斯克语","be":"白俄罗斯语","bm":"班巴拉语","bg":"保加利亚语","is":"冰岛语","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","bho":"博杰普尔语","af":"布尔语(南非荷兰语)","tt":"鞑靼语","da":"丹麦语","de":"德语","dv":"迪维希语","ti":"蒂格尼亚语","doi":"多格来语","ru":"俄语","fr":"法语","sa":"梵语","tl":"菲律宾语","fi":"芬兰语","fy":"弗里西语","km":"高棉语","ka":"格鲁吉亚语","gom":"贡根语","gu":"古吉拉特语","gn":"瓜拉尼语","kk":"哈萨克语","ht":"海地克里奥尔语","ko":"韩语","ha":"豪萨语","nl":"荷兰语","ky":"吉尔吉斯语","gl":"加利西亚语","ca":"加泰罗尼亚语","cs":"捷克语","kn":"卡纳达语","co":"科西嘉语","kri":"克里奥尔语","hr":"克罗地亚语","qu":"克丘亚语","ku":"库尔德语（库尔曼吉语）","ckb":"库尔德语（索拉尼）","la":"拉丁语","lv":"拉脱维亚语","lo":"老挝语","lt":"立陶宛语","ln":"林格拉语","lg":"卢干达语","lb":"卢森堡语","rw":"卢旺达语","ro":"罗马尼亚语","mg":"马尔加什语","mt":"马耳他语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mk":"马其顿语","mai":"迈蒂利语","mi":"毛利语","mni-Mtei":"梅泰语（曼尼普尔语）","mn":"蒙古语","bn":"孟加拉语","lus":"米佐语","my":"缅甸语","hmn":"苗语","xh":"南非科萨语","zu":"南非祖鲁语","ne":"尼泊尔语","no":"挪威语","pa":"旁遮普语","pt":"葡萄牙语","ps":"普什图语","ny":"齐切瓦语","ak":"契维语","ja":"日语","sv":"瑞典语","sm":"萨摩亚语","sr":"塞尔维亚语","nso":"塞佩蒂语","st":"塞索托语","si":"僧伽罗语","eo":"世界语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","gd":"苏格兰盖尔语","ceb":"宿务语","so":"索马里语","tg":"塔吉克语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","tr":"土耳其语","tk":"土库曼语","cy":"威尔士语","ug":"维吾尔语","ur":"乌尔都语","uk":"乌克兰语","uz":"乌兹别克语","es":"西班牙语","iw":"希伯来语","el":"希腊语","haw":"夏威夷语","sd":"信德语","hu":"匈牙利语","sn":"修纳语","hy":"亚美尼亚语","ig":"伊博语","ilo":"伊洛卡诺语","it":"意大利语","yi":"意第绪语","hi":"印地语","su":"印尼巽他语","id":"印尼语","jw":"印尼爪哇语","en":"英语","yo":"约鲁巴语","vi":"越南语","zh-CN":"中文","ts":"宗加语"},"tl":{"sq":"阿尔巴尼亚语","ar":"阿拉伯语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","ee":"埃维语","ay":"艾马拉语","ga":"爱尔兰语","et":"爱沙尼亚语","or":"奥利亚语","om":"奥罗莫语","eu":"巴斯克语","be":"白俄罗斯语","bm":"班巴拉语","bg":"保加利亚语","is":"冰岛语","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","bho":"博杰普尔语","af":"布尔语(南非荷兰语)","tt":"鞑靼语","da":"丹麦语","de":"德语","dv":"迪维希语","ti":"蒂格尼亚语","doi":"多格来语","ru":"俄语","fr":"法语","sa":"梵语","tl":"菲律宾语","fi":"芬兰语","fy":"弗里西语","km":"高棉语","ka":"格鲁吉亚语","gom":"贡根语","gu":"古吉拉特语","gn":"瓜拉尼语","kk":"哈萨克语","ht":"海地克里奥尔语","ko":"韩语","ha":"豪萨语","nl":"荷兰语","ky":"吉尔吉斯语","gl":"加利西亚语","ca":"加泰罗尼亚语","cs":"捷克语","kn":"卡纳达语","co":"科西嘉语","kri":"克里奥尔语","hr":"克罗地亚语","qu":"克丘亚语","ku":"库尔德语（库尔曼吉语）","ckb":"库尔德语（索拉尼）","la":"拉丁语","lv":"拉脱维亚语","lo":"老挝语","lt":"立陶宛语","ln":"林格拉语","lg":"卢干达语","lb":"卢森堡语","rw":"卢旺达语","ro":"罗马尼亚语","mg":"马尔加什语","mt":"马耳他语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mk":"马其顿语","mai":"迈蒂利语","mi":"毛利语","mni-Mtei":"梅泰语（曼尼普尔语）","mn":"蒙古语","bn":"孟加拉语","lus":"米佐语","my":"缅甸语","hmn":"苗语","xh":"南非科萨语","zu":"南非祖鲁语","ne":"尼泊尔语","no":"挪威语","pa":"旁遮普语","pt":"葡萄牙语","ps":"普什图语","ny":"齐切瓦语","ak":"契维语","ja":"日语","sv":"瑞典语","sm":"萨摩亚语","sr":"塞尔维亚语","nso":"塞佩蒂语","st":"塞索托语","si":"僧伽罗语","eo":"世界语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","gd":"苏格兰盖尔语","ceb":"宿务语","so":"索马里语","tg":"塔吉克语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","tr":"土耳其语","tk":"土库曼语","cy":"威尔士语","ug":"维吾尔语","ur":"乌尔都语","uk":"乌克兰语","uz":"乌兹别克语","es":"西班牙语","iw":"希伯来语","el":"希腊语","haw":"夏威夷语","sd":"信德语","hu":"匈牙利语","sn":"修纳语","hy":"亚美尼亚语","ig":"伊博语","ilo":"伊洛卡诺语","it":"意大利语","yi":"意第绪语","hi":"印地语","su":"印尼巽他语","id":"印尼语","jw":"印尼爪哇语","en":"英语","yo":"约鲁巴语","vi":"越南语","zh-TW":"中文（繁体）","zh-CN":"中文（简体）","ts":"宗加语"},"al":{}})';
		//console.log(text);
		//eval(text);
		//window[calname] = ({"sl":{"auto":"检测语言","sq":"阿尔巴尼亚语","ar":"阿拉伯语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","ee":"埃维语","ay":"艾马拉语","ga":"爱尔兰语","et":"爱沙尼亚语","or":"奥利亚语","om":"奥罗莫语","eu":"巴斯克语","be":"白俄罗斯语","bm":"班巴拉语","bg":"保加利亚语","is":"冰岛语","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","bho":"博杰普尔语","af":"布尔语(南非荷兰语)","tt":"鞑靼语","da":"丹麦语","de":"德语","dv":"迪维希语","ti":"蒂格尼亚语","doi":"多格来语","ru":"俄语","fr":"法语","sa":"梵语","tl":"菲律宾语","fi":"芬兰语","fy":"弗里西语","km":"高棉语","ka":"格鲁吉亚语","gom":"贡根语","gu":"古吉拉特语","gn":"瓜拉尼语","kk":"哈萨克语","ht":"海地克里奥尔语","ko":"韩语","ha":"豪萨语","nl":"荷兰语","ky":"吉尔吉斯语","gl":"加利西亚语","ca":"加泰罗尼亚语","cs":"捷克语","kn":"卡纳达语","co":"科西嘉语","kri":"克里奥尔语","hr":"克罗地亚语","qu":"克丘亚语","ku":"库尔德语（库尔曼吉语）","ckb":"库尔德语（索拉尼）","la":"拉丁语","lv":"拉脱维亚语","lo":"老挝语","lt":"立陶宛语","ln":"林格拉语","lg":"卢干达语","lb":"卢森堡语","rw":"卢旺达语","ro":"罗马尼亚语","mg":"马尔加什语","mt":"马耳他语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mk":"马其顿语","mai":"迈蒂利语","mi":"毛利语","mni-Mtei":"梅泰语（曼尼普尔语）","mn":"蒙古语","bn":"孟加拉语","lus":"米佐语","my":"缅甸语","hmn":"苗语","xh":"南非科萨语","zu":"南非祖鲁语","ne":"尼泊尔语","no":"挪威语","pa":"旁遮普语","pt":"葡萄牙语","ps":"普什图语","ny":"齐切瓦语","ak":"契维语","ja":"日语","sv":"瑞典语","sm":"萨摩亚语","sr":"塞尔维亚语","nso":"塞佩蒂语","st":"塞索托语","si":"僧伽罗语","eo":"世界语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","gd":"苏格兰盖尔语","ceb":"宿务语","so":"索马里语","tg":"塔吉克语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","tr":"土耳其语","tk":"土库曼语","cy":"威尔士语","ug":"维吾尔语","ur":"乌尔都语","uk":"乌克兰语","uz":"乌兹别克语","es":"西班牙语","iw":"希伯来语","el":"希腊语","haw":"夏威夷语","sd":"信德语","hu":"匈牙利语","sn":"修纳语","hy":"亚美尼亚语","ig":"伊博语","ilo":"伊洛卡诺语","it":"意大利语","yi":"意第绪语","hi":"印地语","su":"印尼巽他语","id":"印尼语","jw":"印尼爪哇语","en":"英语","yo":"约鲁巴语","vi":"越南语","zh-CN":"中文","ts":"宗加语"},"tl":{"sq":"阿尔巴尼亚语","ar":"阿拉伯语","am":"阿姆哈拉语","as":"阿萨姆语","az":"阿塞拜疆语","ee":"埃维语","ay":"艾马拉语","ga":"爱尔兰语","et":"爱沙尼亚语","or":"奥利亚语","om":"奥罗莫语","eu":"巴斯克语","be":"白俄罗斯语","bm":"班巴拉语","bg":"保加利亚语","is":"冰岛语","pl":"波兰语","bs":"波斯尼亚语","fa":"波斯语","bho":"博杰普尔语","af":"布尔语(南非荷兰语)","tt":"鞑靼语","da":"丹麦语","de":"德语","dv":"迪维希语","ti":"蒂格尼亚语","doi":"多格来语","ru":"俄语","fr":"法语","sa":"梵语","tl":"菲律宾语","fi":"芬兰语","fy":"弗里西语","km":"高棉语","ka":"格鲁吉亚语","gom":"贡根语","gu":"古吉拉特语","gn":"瓜拉尼语","kk":"哈萨克语","ht":"海地克里奥尔语","ko":"韩语","ha":"豪萨语","nl":"荷兰语","ky":"吉尔吉斯语","gl":"加利西亚语","ca":"加泰罗尼亚语","cs":"捷克语","kn":"卡纳达语","co":"科西嘉语","kri":"克里奥尔语","hr":"克罗地亚语","qu":"克丘亚语","ku":"库尔德语（库尔曼吉语）","ckb":"库尔德语（索拉尼）","la":"拉丁语","lv":"拉脱维亚语","lo":"老挝语","lt":"立陶宛语","ln":"林格拉语","lg":"卢干达语","lb":"卢森堡语","rw":"卢旺达语","ro":"罗马尼亚语","mg":"马尔加什语","mt":"马耳他语","mr":"马拉地语","ml":"马拉雅拉姆语","ms":"马来语","mk":"马其顿语","mai":"迈蒂利语","mi":"毛利语","mni-Mtei":"梅泰语（曼尼普尔语）","mn":"蒙古语","bn":"孟加拉语","lus":"米佐语","my":"缅甸语","hmn":"苗语","xh":"南非科萨语","zu":"南非祖鲁语","ne":"尼泊尔语","no":"挪威语","pa":"旁遮普语","pt":"葡萄牙语","ps":"普什图语","ny":"齐切瓦语","ak":"契维语","ja":"日语","sv":"瑞典语","sm":"萨摩亚语","sr":"塞尔维亚语","nso":"塞佩蒂语","st":"塞索托语","si":"僧伽罗语","eo":"世界语","sk":"斯洛伐克语","sl":"斯洛文尼亚语","sw":"斯瓦希里语","gd":"苏格兰盖尔语","ceb":"宿务语","so":"索马里语","tg":"塔吉克语","te":"泰卢固语","ta":"泰米尔语","th":"泰语","tr":"土耳其语","tk":"土库曼语","cy":"威尔士语","ug":"维吾尔语","ur":"乌尔都语","uk":"乌克兰语","uz":"乌兹别克语","es":"西班牙语","iw":"希伯来语","el":"希腊语","haw":"夏威夷语","sd":"信德语","hu":"匈牙利语","sn":"修纳语","hy":"亚美尼亚语","ig":"伊博语","ilo":"伊洛卡诺语","it":"意大利语","yi":"意第绪语","hi":"印地语","su":"印尼巽他语","id":"印尼语","jw":"印尼爪哇语","en":"英语","yo":"约鲁巴语","vi":"越南语","zh-TW":"中文（繁体）","zh-CN":"中文（简体）","ts":"宗加语"},"al":{}})
		
        return h
    }
    function Hr(a) {
        var b = bg("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    }
    function ur() {
        if (this && this.Vg) {
            var a = this.Vg;
            a && a.tagName == ta && Fr(a, !0, this.Eb)
        }
    }
    function Fr(a, b, c) {
        null != c && x.clearTimeout(c);
        a.onload = A;
        a.onerror = A;
        a.onreadystatechange = A;
        b && window.setTimeout(function() {
            wg(a)
        }, 0)
    }
    function Gr(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Gc.call(this, c);
        this.code = a
    }
    E(Gr, Gc);
    function Ir(a, b) {
        this.b = a;
        this.a = b ? b : "callback";
        this.Eb = 5E3
    }
    var Jr = 0;
    Ir.prototype.send = function(a, b, c, d) {
        a = a ? fd(a) : {};
        d = d || "_" + (Jr++).toString(36) + Ec().toString(36);
        var e = "_callbacks___" + d;
        b && (x[e] = Kr(d, b),
        a[this.a] = e);
        b = {
            timeout: this.Eb,
            Jh: !0
        };
        e = sd(this.b).toString();
        e = td.exec(e);
        var f = e[3] || "";
        e = ud(e[1] + vd("?", e[2] || "", a) + vd("#", f, void 0));
        b = Er(e, b);
        Ar(b, null, Lr(d, a, c), void 0);
        return {
            ia: d,
            Tf: b
        }
    }
    ;
    Ir.prototype.cancel = function(a) {
        a && (a.Tf && a.Tf.cancel(),
        a.ia && Mr(a.ia, !1))
    }
    ;
    function Lr(a, b, c) {
        return function() {
            Mr(a, !1);
            c && c(b)
        }
    }
    function Kr(a, b) {
        return function(c) {
            Mr(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function Mr(a, b) {
        a = "_callbacks___" + a;
        if (x[a])
            if (b)
                try {
                    delete x[a]
                } catch (c) {
                    x[a] = void 0
                }
            else
                x[a] = A
    }
    ;function Nr(a, b) {
        R.call(this);
        this.a = new Mj(a);
        if (b)
            for (var c in b)
                b[c] !== Object.prototype[c] && this.a.a.set(c, b[c])
    }
    E(Nr, R);
    Nr.prototype.c = u(!0);
    Nr.prototype.Ua = function() {
        return this.c()
    }
    ;
    Nr.prototype.send = u(null);
    Nr.prototype.cancel = hc();
    function Or(a, b, c, d) {
        Nr.call(this, a, b);
        this.f = null == d || !!d;
        this.b = new Ir(sr(this.a.toString()),c)
    }
    E(Or, Nr);
    Or.prototype.c = t("f");
    Or.prototype.send = function(a, b) {
        this.b.Eb = -1;
        return this.b.send(a, b)
    }
    ;
    Or.prototype.cancel = function(a) {
        this.b.cancel(a)
    }
    ;
    function Pr(a, b) {
        Nr.call(this, a, b);
        this.f = {};
        this.b = this.g = 0;
        window.XMLHttpRequest && gc in new XMLHttpRequest && (this.b = 1);
        !this.b && window.XDomainRequest && "file:" != window.location.protocol && (this.b = 2,
        this.a.a.set("u", window.location.href))
    }
    E(Pr, Nr);
    nr(17170, Pr.prototype, {
        Eg: 1,
        Dg: 2
    });
    Pr.prototype.c = function() {
        return !!this.b
    }
    ;
    Pr.prototype.send = function(a, b) {
        var c = jr()
          , d = ++this.g
          , e = {}
          , f = {};
        "q"in a && (f.q = a.q,
        delete a.q);
        a.mode = this.b;
        1 == this.b ? (e.sb = new Ll,
        S(e.sb, Va, D(function() {
            e.uc || (e.sb.Pc() ? b(e.sb.Lb()) : (this.Dg(),
            b(null, e.sb.Lb() || null)),
            Qr(this, d))
        }, this)),
        S(e.sb, "timeout", D(function() {
            e.uc || (this.Eg(),
            Qr(this, d))
        }, this)),
        e.sb.send(this.a.toString() + "&" + fr(a), sa, fr(f), {
            "Content-Type": "application/x-www-form-urlencoded"
        })) : (e.Xa = new XDomainRequest,
        e.Xa.timeout = 2E4,
        e.Xa.onload = D(function() {
            e.uc || (b(e.Xa.responseText),
            Qr(this, d))
        }, this),
        e.Xa.onerror = D(function() {
            e.uc || (this.Dg(),
            b(null),
            Qr(this, d))
        }, this),
        e.Xa.ontimeout = D(function() {
            e.uc || (this.Eg(),
            b(null),
            Qr(this, d))
        }, this),
        e.Xa.open(sa, this.a.toString() + "&" + fr(a)),
        e.Xa.send(fr(f)));
        this.f[d] = e;
        kr(c);
        return d
    }
    ;
    Pr.prototype.cancel = function(a) {
        var b = this.f[a];
        b && (b.uc = !0,
        b.Xa && b.Xa.abort(),
        Qr(this, a))
    }
    ;
    function Qr(a, b) {
        var c = a.f[b];
        c && (c.sb ? (c.sb.M(),
        c.sb = null) : c.Xa && (c.Xa = null),
        delete a.f[b])
    }
    Pr.prototype.F = function() {
        Pr.m.F.call(this);
        for (var a in this.f)
            this.cancel(a)
    }
    ;
    function Rr(a, b, c) {
        Nr.call(this, a, c);
        this.f = b.a;
        this.g = b.send;
        this.b = b.cancel
    }
    E(Rr, Nr);
    Rr.prototype.c = function() {
        return this.f()
    }
    ;
    Rr.prototype.send = function(a, b) {
        return this.g(this.a.toString(), a, b)
    }
    ;
    Rr.prototype.cancel = function(a) {
        this.b(a)
    }
    ;
    function Sr(a, b) {
        R.call(this);
        this.c = !0;
        this.b = a;
        this.a = b ? b : null
    }
    E(Sr, R);
    nr(47504, Sr.prototype, {
        Ii: function() {
            gr("te_afbr")
        }
    });
    function Tr(a, b) {
        if (!a.c)
            return b;
        if (B(b) != Ha)
            a = [[b, 200]];
        else if (2 == b.length && B(b[0]) != Ha && B(b[1]) != Ha)
            a = [[b[0], 200, b[1]], [b[1], 200, b[1]]];
        else {
            a = [];
            for (var c = 0; c < b.length; ++c)
                B(b[c]) != Ha ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]]
        }
        return a
    }
    Sr.prototype.g = function(a) {
        var b = this;
        return function(c) {
            if (c)
                try {
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    var e = JSON.parse(c)
                } catch (f) {
                    e = null,
                    b.Ii()
                }
            e ? a(Tr(b, e), 200) : a([], 500)
        }
    }
    ;
    Sr.prototype.f = function(a) {
        var b = this;
        return function(c) {
            c ? a(Tr(b, c), 200) : a([], 500)
        }
    }
    ;
    Sr.prototype.F = function() {
        Sr.m.F.call(this)
    }
    ;
    var il = {
        0: "NO_ERROR",
        1: "UNKNOWN_ERROR",
        2: "JWT_TOKEN_CANNOT_PARSE",
        3: "JWT_TOKEN_MISS_PARAM",
        4: "JWT_TOKEN_INVALID_ISS",
        5: "JWT_TOKEN_INVALID",
        6: pa,
        7: "OUT_OF_QUOTA",
        8: pa
    };
    function Ur() {}
    Ur.prototype.b = hc();
    function Vr(a) {
        a = a.split(".");
        if (3 !== a.length)
            return !1;
        a = JSON.parse(zf(a[1]));
        return null == a || !a.exp || 1E3 * a.exp < Ec() ? !1 : !0
    }
    function Wr(a) {
        this.a = a
    }
    pc(Wr, Ur);
    Wr.prototype.b = function() {
        return Vr(this.a) ? gl(this.a) : hl()
    }
    ;
    function Xr(a) {
        this.a = null;
        this.c = a
    }
    pc(Xr, Ur);
    Xr.prototype.b = function() {
        if (null != this.a && Vr(this.a))
            return gl(this.a);
        this.a = null;
        return new bl(function(a, b) {
            var c = this;
            this.c(function(d) {
                c.a = d;
                Vr(c.a) ? a(d) : b(il[5])
            }, b)
        }
        ,this)
    }
    ;
    function Yr(a, b, c, d, e, f) {
        R.call(this);
        var h;
        b ? h = {
            client: b
        } : h = {
            anno: 3,
            client: Lq,
            format: "html",
            v: "1.0"
        };
        c && (h.sp = c);
        h.key = a;
        Eq && (h.logld = "v" + Eq);
        this.s = d || null;
        this.Vb = e || null;
        this.a = null;
        this.b = {
            vc: D(this.G, this),
            Gg: 300
        };
        this.h = h;
        a = this.f = new Sr(h,f);
        b = Oq + Rq;
        this.g = a.a ? new Rr(b,a.a,{
            client: Lq
        }) : new Or(b,{
            client: Lq
        },"cb");
        a = this.f;
        if (a.a) {
            if (!a.a)
                throw Error("this.remoteApiProxyHandlers_ is null");
            a = [{
                na: new Rr(Oq + Nq + ea,a.a,a.b),
                vc: D(a.f, a),
                Rd: 1900,
                bf: 4294967295,
                af: -1,
                tf: 0,
                hd: !1
            }]
        } else
            b = Oq + Nq,
            a = [{
                na: new Pr(b + ea,a.b),
                vc: D(a.g, a),
                Rd: 30720,
                bf: 4294967295,
                af: -1,
                tf: 0,
                hd: !1
            }, {
                na: new Or(b + ea,a.b,"cb",I && 7 >= mf),
                vc: D(a.f, a),
                Rd: 1900,
                bf: 4294967295,
                af: -1,
                tf: 3,
                hd: !0
            }];
        this.o = new Zr(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b)
            this.c = this.c || a[b].na.c();
        this.c || this.Ji()
    }
    E(Yr, R);
    nr(7361, Yr.prototype, {
        Ji: function() {
            gr("te_au")
        }
    });
    Yr.prototype.G = function(a) {
        return function(b) {
            if (b)
                try {
                    var c = JSON.parse(b)
                } catch (d) {
                    c = null
                }
            a(c && c[1] || void 0)
        }
    }
    ;
    function Zr(a) {
        this.b = a
    }
    Zr.prototype.start = function(a) {
        this.a = a;
        this.c = 0;
        $r(this)
    }
    ;
    function $r(a) {
        if (a.c >= a.b.length)
            a.a(null);
        else {
            var b = a.b[a.c++];
            b.fj ? cr(new br(D(b.na.Ua, b.na),D(function(c) {
                c ? this.a(b) : $r(this)
            }, a),b.fj)) : b.na.Ua() ? a.a(b) : $r(a)
        }
    }
    Yr.prototype.l = function(a) {
        this.B || (this.B = !0,
        this.o.start(D(function(b) {
            b && (this.a = b,
            this.b.na = b.na);
            a()
        }, this)))
    }
    ;
    Yr.prototype.Ua = function() {
        return null !== this.a && null !== this.a.na && this.a.na.Ua()
    }
    ;
    Yr.prototype.translate = function(a, b, c, d, e, f, h, k) {
        var l = this
          , m = this.a.vc(a)
          , n = {
            q: b,
            sl: c,
            tl: d
        };
        this.h.sp && 0 == this.h.sp.indexOf("nmt") || (n.sp = "nmt");
        n.tc = e;
        f && (n.ctt = 1);
        h && (n.dom = 1);
        k && (n.sr = 1);
        n[Hp()] = Fp(b.join(""), Mq);
        return this.s ? this.s.b().then(function(r) {
            null != r && (n.jwtt = r,
            n.rurl = location.hostname);
            return l.a.na.send(n, D(as(m), l))
        }, function(r) {
            r && l.Vb && l.Vb(r)
        }) : this.a.na.send(n, m)
    }
    ;
    function as(a) {
        return function(b, c) {
            if (c && this.Vb) {
                try {
                    var d = JSON.parse(c).error_code
                } catch (e) {
                    d = null
                }
                c = il[1];
                this.Vb(null != d ? il[d] || c : c)
            }
            a(b)
        }
    }
    function bs(a, b) {
        b instanceof bl ? b.then(function(c) {
            a.a.na.cancel(c)
        }) : a.a.na.cancel(b)
    }
    Yr.prototype.F = function() {
        Yr.m.F.call(this);
        this.a && (this.a.na.M(),
        this.a.na = null);
        this.b.na = null;
        this.g.M();
        this.g = null
    }
    ;
    var cs = Xq(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", oa, "NOBR", "LABEL", "Q", "S", "SMALL", ua, "STRIKE", "STRONG", "SUB", "SUP", va, "TT", "U", "VAR"])
      , ds = Xq(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", oa, va, wa])
      , es = Xq(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", ta, "STYLE", "WBR", "svg"])
      , fs = Xq(["submit", Na]);
    function gs(a, b) {
        this.a = new mn(a,!1,b,3 == a.nodeType ? 0 : 1,1);
        this.c = I ? [] : null;
        for (this.b = []; a = a.parentNode; )
            hs(this, a, !0);
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a)
            null == this.b[a] && (this.b[a] = this.b[a - 1]);
        this.f = !1
    }
    nr(52754, gs.prototype, {
        Pi: 1
    });
    function hs(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1])
    }
    gs.prototype.node = function() {
        return this.a.node
    }
    ;
    gs.prototype.depth = function() {
        return this.a.depth
    }
    ;
    gs.prototype.next = function() {
        try {
            this.c && 0 < this.c.length && -1 == this.a.c && this.c.length--,
            -1 == this.a.c && this.b.length--,
            this.c && 0 < this.c.length && 1 != this.a.c && !this.a.node.nextSibling ? nn(this.a, this.c[this.c.length - 1], -1, this.a.depth - 1) : (this.a.next(),
            this.c && 1 == this.a.c && this.c.push(this.a.node)),
            1 == this.a.c && this.a.o && hs(this, this.a.node)
        } catch (a) {
            a != zj && this.Pi(a),
            this.f = !0
        }
    }
    ;
    function is() {
        return "[msg_undefined]"
    }
    var Z = {};
    (function() {
        function a(b) {
            return function() {
                return b
            }
        }
        Z = {
            Lf: a(0),
            Gf: a(1),
            Hf: a(2),
            ek: a(3),
            wh: a(4),
            If: a(5),
            nh: a(45),
            oh: a(6),
            rh: a(7),
            Wc: a(8),
            xh: a(9),
            sk: a(10),
            Bh: a(11),
            sh: a(12),
            mk: a(13),
            uh: a(14),
            lk: a(15),
            th: a(16),
            uk: a(17),
            yh: a(18),
            Hj: a(19),
            dk: a(20),
            mh: a(21),
            vh: a(22),
            jk: a(23),
            ik: a(24),
            gk: a(25),
            tk: a(26),
            rk: a(27),
            hk: a(28),
            ph: a(29),
            zh: a(30),
            Gj: a(32),
            Fj: a(33),
            Ah: a(34),
            Sj: a(35),
            Mj: a(36),
            Rj: a(37),
            Kf: a(38),
            Xj: a(39),
            Ff: a(40),
            qh: a(41),
            Jf: a(46)
        }
    }
    )();
    function js(a) {
        return rk('<span id="' + X(a.id) + '"></span>')
    }
    function ks(a) {
        var b = a.id
          , c = a.Pg;
        return rk(qk(a.Qg) + '<div id="' + X(b) + '"></div>' + qk(c))
    }
    function ls() {
        var a = I && !L("7.0");
        return rk("")
    }
    function ms(a) {
        var b = a.Si;
        return rk('<!-- shubiao yiru tanchu fanyi duibi -->')
    }
    function ns(a) {
        var b = a.method
          , c = a.Qh
          , d = a.dir;
        a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(yk(a.Eh)) + '" method="' + X(b) + '"><div class="form-buttons" style="text-align:';
        d = wc(d) && wc(Sb) ? d.Ib !== "rtl".Ib ? !1 : d.toString() === "rtl".toString() : d == Sb;
        d = a + (d ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + X(Z.vh) + '"><input class="activity-cancel" type="button" value="' + X(Z.Gf) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        a = c.length;
        for (b = 0; b < a; b++)
            d += '<input type="hidden" name="' + X(c[b]) + '"/>';
        return rk(d + "</div></form></div>")
    }
    function os() {
        return rk('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
    }
    function ps(a) {
        return rk('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + qk(a.Bi) + '</div><div class="activity-form-container"></div></div>')
    }
    function qs() {
        return rk('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
    }
    ;function rs(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || ui(this);
        this.Ye = a.Ye || "";
        this.Pd = a.Pd || null;
        this.Qd = a.Qd || null;
        this.cd = a.cd || !1;
        this.className = a.className || null;
        this.c = null
    }
    E(rs, T);
    rs.prototype.jc = ic("c");
    rs.prototype.Ub = function() {
        if (!this.U)
            throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c)
            throw Error("Activity must have a tooltip instance to be resumed");
    }
    ;
    rs.prototype.Bb = hc();
    rs.prototype.M = function() {
        this.ub || (rs.m.M.call(this),
        delete this.Qd)
    }
    ;
    function ss() {
        pi.call(this);
        this.c = "closure_frame" + ts++;
        this.b = [];
        us[this.c] = this
    }
    var vs;
    E(ss, pi);
    var us = {}
      , ts = 0;
    function ws(a, b) {
        var c = Zf(a);
        Jj(b, function(d, e) {
            C(d) || (d = [d]);
            Mc(d, function(f) {
                f = c.D(oa, {
                    type: rb,
                    name: e,
                    value: f
                });
                a.appendChild(f)
            })
        })
    }
    v = ss.prototype;
    v.va = null;
    v.Y = null;
    v.ja = null;
    v.Pb = null;
    v.Wi = 0;
    v.ma = !1;
    v.wc = !1;
    v.Zd = !1;
    v.rb = null;
    v.We = null;
    v.Ha = 0;
    v.Ob = null;
    v.send = function(a, b, c, d) {
        if (this.ma)
            throw Error(ya);
        this.rb = a = new Mj(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ec()).toString(36),
        a.a.set("zx", c));
        vs || (vs = mg("FORM"),
        vs.acceptCharset = "utf-8",
        c = vs.style,
        c.position = Ca,
        c.visibility = rb,
        c.top = c.left = "-10px",
        c.width = c.height = "10px",
        c.overflow = rb,
        document.body.appendChild(vs));
        this.Y = vs;
        "GET" == b && ws(this.Y, a.a);
        d && ws(this.Y, d);
        d = this.Y;
        a = a.toString();
        rr();
        a = Md(a);
        Ae(d, a);
        this.Y.method = b;
        xs(this);
        ys(this)
    }
    ;
    function zs(a, b) {
        if (a.ma)
            throw Error(ya);
        var c = new Mj(b.action);
        a.rb = c;
        a.Y = b;
        Ae(a.Y, c.toString());
        xs(a)
    }
    v.abort = function(a) {
        this.ma && (fi(As(this)),
        this.Zd = this.ma = this.wc = !1,
        this.Ha = a || 7,
        this.dispatchEvent("abort"),
        Bs(this))
    }
    ;
    v.F = function() {
        this.ma && this.abort();
        ss.m.F.call(this);
        this.ja && Cs(this);
        ys(this);
        delete this.f;
        this.rb = this.We = this.Y = null;
        this.Ha = 0;
        delete us[this.c]
    }
    ;
    v.Ld = t("wc");
    v.Pc = t("Zd");
    v.dc = t("ma");
    v.Lb = t("We");
    v.ze = t("rb");
    v.ye = t("Ha");
    function xs(a) {
        a.ma = !0;
        a.wc = !1;
        a.Ha = 0;
        a.Pb = a.c + "_" + (a.Wi++).toString(36);
        a.ja = Zf(a.Y).D(na, {
            name: a.Pb,
            id: a.Pb
        });
        I && 7 > Number(mf) && Ae(a.ja, Md(nd(new kd(ld,'javascript:""'))));
        var b = a.ja.style;
        b.visibility = rb;
        b.width = b.height = "10px";
        b.display = q;
        K ? b.marginTop = b.marginLeft = "-10px" : (b.position = Ca,
        b.top = b.left = "-10px");
        if (I && !L("11")) {
            a.Y.target = a.Pb || "";
            Zf(a.Y).a.body.appendChild(a.ja);
            S(a.ja, Rb, a.jf, !1, a);
            try {
                a.a = !1,
                a.Y.submit()
            } catch (w) {
                di(a.ja, Rb, a.jf, !1, a),
                Ds(a, 1)
            }
        } else {
            Zf(a.Y).a.body.appendChild(a.ja);
            b = a.Pb + "_inner";
            var c = Gg(a.ja);
            if (document.baseURI) {
                var d = Je(b);
                d = '<head><base href="' + Je(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = ue(d, null)
            } else
                d = Je(b),
                d = ue('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            Ve && !K ? ze(c.documentElement, d) : c.write(me(d));
            S(c.getElementById(b), Ab, a.Td, !1, a);
            var e = bg(va, a.Y);
            d = 0;
            for (var f = e.length; d < f; d++) {
                var h = e[d].value;
                Qg(e[d]) != h && (Ig(e[d], h),
                e[d].value = h)
            }
            e = c.importNode(a.Y, !0);
            e.target = b;
            e.action = a.Y.action;
            c.body.appendChild(e);
            h = bg("SELECT", a.Y);
            var k = bg("SELECT", e);
            d = 0;
            for (f = h.length; d < f; d++)
                for (var l = bg(qa, h[d]), m = bg(qa, k[d]), n = 0, r = l.length; n < r; n++)
                    m[n].selected = l[n].selected;
            h = bg(oa, a.Y);
            k = bg(oa, e);
            d = 0;
            for (f = h.length; d < f; d++)
                if ("file" == h[d].type && h[d].value != k[d].value) {
                    a.Y.target = b;
                    e = a.Y;
                    break
                }
            try {
                a.a = !1,
                e.submit(),
                c.close(),
                J && ul(a.gh, 250, a)
            } catch (w) {
                di(c.getElementById(b), Ab, a.Td, !1, a),
                c.close(),
                Ds(a, 2)
            }
        }
    }
    v.jf = function() {
        if (this.ja.readyState == Va) {
            di(this.ja, Rb, this.jf, !1, this);
            try {
                var a = Gg(this.ja);
                if (I && a.location == za && !navigator.onLine) {
                    Ds(this, 9);
                    return
                }
            } catch (b) {
                Ds(this, 1);
                return
            }
            Es(this, a)
        }
    }
    ;
    v.Td = function() {
        if (!Ve || K || (this.ja ? Gg(As(this)) : null).location != za) {
            di(As(this), Ab, this.Td, !1, this);
            try {
                Es(this, this.ja ? Gg(As(this)) : null)
            } catch (a) {
                Ds(this, 1)
            }
        }
    }
    ;
    function Es(a, b) {
        a.wc = !0;
        a.ma = !1;
        try {
            var c = b.body;
            a.We = c.textContent || c.innerText
        } catch (e) {
            var d = 1
        }
        d || typeof a.f != p || (b = a.f(b)) && (d = 4);
        d ? Ds(a, d) : (a.Zd = !0,
        a.Ha = 0,
        a.dispatchEvent(Va),
        a.dispatchEvent("success"),
        Bs(a))
    }
    function Ds(a, b) {
        a.a || (a.Zd = !1,
        a.ma = !1,
        a.wc = !0,
        a.Ha = b,
        a.dispatchEvent(Va),
        a.dispatchEvent("error"),
        Bs(a),
        a.a = !0)
    }
    function Bs(a) {
        Cs(a);
        ys(a);
        a.Y = null;
        a.dispatchEvent(Qb)
    }
    function Cs(a) {
        var b = a.ja;
        b && (b.onreadystatechange = null,
        b.onload = null,
        b.onerror = null,
        a.b.push(b));
        a.Ob && (vl(a.Ob),
        a.Ob = null);
        J || Ve && !K ? a.Ob = ul(a.Vf, 2E3, a) : a.Vf();
        a.ja = null;
        a.Pb = null
    }
    v.Vf = function() {
        this.Ob && (vl(this.Ob),
        this.Ob = null);
        for (; 0 != this.b.length; ) {
            var a = this.b.pop();
            wg(a)
        }
    }
    ;
    function ys(a) {
        a.Y && a.Y == vs && tg(a.Y)
    }
    function As(a) {
        return a.ja ? I && !L("11") ? a.ja : Gg(a.ja).getElementById(a.Pb + "_inner") : null
    }
    v.gh = function() {
        if (this.ma) {
            var a = this.ja ? Gg(As(this)) : null;
            a && !Te(a, "documentUri") ? (di(As(this), Ab, this.Td, !1, this),
            navigator.onLine ? Ds(this, 3) : Ds(this, 9)) : ul(this.gh, 250, this)
        }
    }
    ;
    function Fs(a, b) {
        T.call(this);
        this.l = a || "";
        this.f = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.c = this.g = null
    }
    E(Fs, T);
    v = Fs.prototype;
    v.D = function() {
        var a = {
            Eh: this.l,
            method: this.o,
            Qh: this.h,
            dir: pd.test(Fq) ? Sb : "ltr"
        };
        this.S(mk(ns, a))
    }
    ;
    v.S = function(a) {
        this.A = a;
        this.a = wi(this, "activity-form");
        a = wi(this, "activity-submit");
        this.c = new uj("");
        Ai(this.c, a);
        a = wi(this, "activity-cancel");
        this.f = new uj("");
        Ai(this.f, a)
    }
    ;
    v.O = function() {
        var a = U(this);
        a.w(this.c, Da, D(this.rj, this));
        a.w(this.f, Da, D(this.dispatchEvent, this, Oa))
    }
    ;
    v.rj = function() {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new ss,
        S(a, "success", function() {
            this.dispatchEvent("successful")
        }),
        S(a, "error", function() {
            this.dispatchEvent("failed")
        }),
        zs(a, this.a));
        this.dispatchEvent(Xb)
    }
    ;
    function Gs(a, b) {
        for (var c in b)
            a.a[c] && (a.a[c].value = b[c])
    }
    function Hs(a, b) {
        return a.a[b] ? a.a[b].value : ""
    }
    v.F = function() {
        this.c = this.a = this.f = null;
        Fs.m.F.call(this)
    }
    ;
    function Is(a, b) {
        a.g = b
    }
    ;function Js(a, b) {
        rs.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new gn;
        this.l = this.a = null;
        this.g = new Yr((a || {}).$a || "",mq);
        this.g.f.c = !1
    }
    E(Js, rs);
    var mq = Lq.replace("_", "-") + "-alt";
    v = Js.prototype;
    v.jc = function(a) {
        Js.m.jc.call(this, a);
        this.g.l(D(this.Ub, this))
    }
    ;
    v.Ub = function() {
        Js.m.Ub.call(this);
        var a = this.c.J
          , b = this.c.o;
        if (a && b) {
            Ig(this.l, a);
            var c = this.h;
            c.A = b;
            ug(c.a, c.A);
            hn(c);
            Q(this.h.a, !0);
            b = this.c.cb();
            c = this.c.oa();
            if (this.g.Ua() && b && c) {
                var d = this.c.Mc()
                  , e = D(this.$i, this);
                this.g && this.g.translate(e, {
                    dj: [d],
                    zk: !0,
                    Dk: !1
                }.dj, b, c, 0, !1);
                Gs(this.a, {
                    gtrans: a,
                    text: this.c.Mc(),
                    hl: Fq,
                    langpair: b + "|" + c
                });
                Gs(this.a, this.o);
                Gs(this.a, {
                    client: mq
                })
            }
            this.dispatchEvent(Qb)
        }
    }
    ;
    v.D = function() {
        this.S(mk(ps, {
            Bi: Z.Ff
        }))
    }
    ;
    v.S = function(a) {
        this.A = a;
        this.l = wi(this, "alt-translated-text");
        var b = wi(this, Fa);
        this.a = new Fs(Vq,sa);
        this.a.h = ad(this.o);
        Is(this.a, D(function() {
            Gs(this.a, {
                utrans: wq(this.f)
            });
            return Hs(this.a, "utrans") != Hs(this.a, "gtrans")
        }, this));
        this.a.fa(b);
        pp = Z.Ah;
        ep = Z.Ff;
        this.f = new iq(void 0,!0,a);
        jq(this.f, this.h);
        kq(this.f);
        lq(this.f);
        Ai(this.f, this.l)
    }
    ;
    v.O = function() {
        Js.m.O.call(this);
        var a = U(this);
        a.w(this.a, Oa, D(function() {
            zq(this.f);
            this.dispatchEvent(Oa)
        }, this));
        a.w(this.a, Xb, D(function() {
            var b = wq(this.f);
            this.c.J = b && wd(b);
            this.dispatchEvent(Xb);
            b = this.c.xa();
            Ig(b.j(), Z.Kf)
        }, this))
    }
    ;
    v.$i = function(a) {
        a && nq(this.f, a)
    }
    ;
    v.Bb = function() {
        Q(this.h.a, !1)
    }
    ;
    v.F = function() {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        Js.m.F.call(this)
    }
    ;
    function Ks(a, b) {
        rs.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null
    }
    E(Ks, rs);
    v = Ks.prototype;
    v.jc = function(a) {
        Ks.m.jc.call(this, a);
        U(this).w(this.f.j(), yb, D(this.c.Sc, this.c, !1));
        this.h = this.c.sc;
        this.Ub()
    }
    ;
    v.Ub = function() {
        Ks.m.Ub.call(this);
        this.f.Nb(this.c.J);
        var a = this.c.cb()
          , b = this.c.oa();
        a && b && (Gs(this.a, {
            gtrans: this.c.J,
            text: this.c.Mc(),
            hl: Fq,
            langpair: a + "|" + b
        }),
        Gs(this.a, this.g));
        this.dispatchEvent(Qb);
        this.f.j().focus()
    }
    ;
    v.Bb = function() {
        this.c.Sc(this.h)
    }
    ;
    v.D = function() {
        this.S(mk(os))
    }
    ;
    v.S = function(a) {
        this.A = a;
        a = wi(this, "contribute-original-text");
        this.f = new rp("");
        Ai(this.f, a);
        xp(this.f);
        vp(this.f);
        a = wi(this, Fa);
        this.a = new Fs(Vq,sa);
        this.a.h = ad(this.g);
        Is(this.a, D(function() {
            Gs(this.a, {
                utrans: wd(this.f.Aa())
            });
            return Hs(this.a, "utrans") != Hs(this.a, "gtrans")
        }, this));
        this.a.fa(a)
    }
    ;
    v.O = function() {
        Ks.m.O.call(this);
        var a = U(this);
        a.w(this.a, Oa, D(function() {
            this.dispatchEvent(Oa)
        }, this));
        a.w(this.a, Xb, D(function() {
            var b = this.f.Aa();
            this.c.J = b && wd(b);
            this.dispatchEvent(Xb);
            b = this.c.xa();
            Ig(b.j(), Z.Kf)
        }, this))
    }
    ;
    v.F = function() {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        Ks.m.F.call(this)
    }
    ;
    function Ls(a) {
        pi.call(this);
        this.h = a;
        this.g = {};
        this.c = new ji(this);
        this.f = null
    }
    E(Ls, pi);
    Ls.prototype.eh = hc();
    Ls.prototype.fh = hc();
    Ls.prototype.F = function() {
        this.c.M();
        this.c = null
    }
    ;
    function Ms(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.Ba.length; ++d)
                b.Ba[d] && a.zg(b.Ba[d], c)
        }
    }
    Ls.prototype.zg = function(a, b) {
        P(a, "backgroundColor", b ? "#E6ECF9" : "");
        P(a, "color", b ? "#000" : "")
    }
    ;
    var dd = {}
      , Ns = null;
    function Os(a) {
        a = yc(a);
        delete dd[a];
        cd() && Ns && Ns.stop()
    }
    function Ps() {
        Ns || (Ns = new wl(function() {
            Qs()
        }
        ,20));
        var a = Ns;
        a.dc() || a.start()
    }
    function Qs() {
        var a = Ec();
        Zc(dd, function(b) {
            Rs(b, a)
        });
        cd() || Ps()
    }
    ;function Ss(a, b, c, d) {
        Rm.call(this);
        if (!C(a) || !C(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.g = a;
        this.B = b;
        this.duration = c;
        this.o = d;
        this.coords = [];
        this.progress = 0
    }
    E(Ss, Rm);
    v = Ss.prototype;
    v.play = function(a) {
        if (a || 0 == this.a)
            this.progress = 0,
            this.coords = this.g;
        else if (1 == this.a)
            return !1;
        Os(this);
        this.b = a = Ec();
        -1 == this.a && (this.b -= this.duration * this.progress);
        this.endTime = this.b + this.duration;
        this.progress || this.c();
        this.Qa("play");
        -1 == this.a && this.Qa("resume");
        this.a = 1;
        var b = yc(this);
        b in dd || (dd[b] = this);
        Ps();
        Rs(this, a);
        return !0
    }
    ;
    v.stop = function(a) {
        Os(this);
        this.a = 0;
        a && (this.progress = 1);
        Ts(this, this.progress);
        this.Bb();
        this.f()
    }
    ;
    v.vf = function(a) {
        this.progress = a;
        1 == this.a && (this.b = Ec() - this.duration * this.progress,
        this.endTime = this.b + this.duration)
    }
    ;
    v.F = function() {
        0 == this.a || this.stop(!1);
        this.Qa("destroy");
        Ss.m.F.call(this)
    }
    ;
    function Rs(a, b) {
        b < a.b && (a.endTime = b + a.endTime - a.b,
        a.b = b);
        a.progress = (b - a.b) / (a.endTime - a.b);
        1 < a.progress && (a.progress = 1);
        Ts(a, a.progress);
        1 == a.progress ? (a.a = 0,
        Os(a),
        a.Qa(ab),
        a.f()) : 1 == a.a && a.ff()
    }
    function Ts(a, b) {
        wc(a.o) && (b = a.o(b));
        a.coords = Array(a.g.length);
        for (var c = 0; c < a.g.length; c++)
            a.coords[c] = (a.B[c] - a.g[c]) * b + a.g[c]
    }
    v.ff = function() {
        this.Qa("animate")
    }
    ;
    v.Qa = function(a) {
        this.dispatchEvent(new Us(a,this))
    }
    ;
    function Us(a, b) {
        Fh.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress
    }
    E(Us, Fh);
    function Vs(a, b, c, d, e) {
        Ss.call(this, b, c, d, e);
        this.h = a
    }
    E(Vs, Ss);
    Vs.prototype.s = A;
    Vs.prototype.ff = function() {
        this.s();
        Vs.m.ff.call(this)
    }
    ;
    Vs.prototype.f = function() {
        this.s();
        Vs.m.f.call(this)
    }
    ;
    Vs.prototype.c = function() {
        this.s();
        Vs.m.c.call(this)
    }
    ;
    function Ws(a, b, c, d, e) {
        rc(b) && (b = [b]);
        rc(c) && (c = [c]);
        Vs.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
        this.l = -1
    }
    E(Ws, Vs);
    var Xs = 1 / 1024;
    Ws.prototype.s = function() {
        var a = this.coords[0];
        if (Math.abs(a - this.l) >= Xs) {
            var b = this.h.style;
            "opacity"in b ? b.opacity = a : "MozOpacity"in b ? b.MozOpacity = a : "filter"in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.l = a
        }
    }
    ;
    Ws.prototype.c = function() {
        this.l = -1;
        Ws.m.c.call(this)
    }
    ;
    Ws.prototype.f = function() {
        this.l = -1;
        Ws.m.f.call(this)
    }
    ;
    function Ys(a, b, c) {
        Ws.call(this, a, 1, 0, b, c)
    }
    E(Ys, Ws);
    Ys.prototype.c = function() {
        this.h.style.display = "";
        Ys.m.c.call(this)
    }
    ;
    Ys.prototype.f = function() {
        this.h.style.display = q;
        Ys.m.f.call(this)
    }
    ;
    function Zs(a, b, c) {
        Ws.call(this, a, 0, 1, b, c)
    }
    E(Zs, Ws);
    Zs.prototype.c = function() {
        this.h.style.display = "";
        Zs.m.c.call(this)
    }
    ;
    function $s() {
        T.call(this);
        this.a = null
    }
    E($s, T);
    v = $s.prototype;
    v.D = function() {
        this.S(this.b.D(g, {
            "class": Vb
        }))
    }
    ;
    v.S = function(a) {
        this.A = a;
        a.style.display = q
    }
    ;
    function at(a) {
        var b = c;
        var c = D(function() {
            Ig(this.j(), "");
            b && b()
        }, a);
        c = D(a.Ci, a, 750, c);
        bt(a, c)
    }
    function ct(a) {
        a.a && (a.a.stop(!0),
        a.a = null);
        Ig(a.j(), "");
        a.I(!1)
    }
    function bt(a, b) {
        a.a = new Zs(a.j(),750);
        U(a).Ab(a.a, "begin", D(function() {
            this.j().style.display = "block"
        }, a));
        U(a).Ab(a.a, ab, D(function() {
            this.a = null;
            window.setTimeout(b, 2E3)
        }, a));
        a.a.play()
    }
    v.Ci = function(a, b) {
        this.isVisible() && (this.a = new Ys(this.j(),a),
        U(this).Ab(this.a, ab, D(function() {
            b && b()
        }, this)),
        this.a.play())
    }
    ;
    v.I = function(a) {
        this.j().style.display = a ? "block" : q;
        this.j().style.opacity = a ? "1" : "0"
    }
    ;
    v.isVisible = function() {
        return this.j().style.display !== q && "0" !== this.j().style.opacity
    }
    ;
    function dt() {
        Ro.call(this);
        this.P = {};
        this.jb = {};
        this.K = null;
        this.Xc = !1;
        this.tb = this.f = this.H = null;
        this.W = {};
        this.l = new ji(this);
        this.o = this.c = this.g = this.Ya = this.a = this.J = this.ra = null;
        this.C = !0;
        this.Za = []
    }
    E(dt, Ro);
    v = dt.prototype;
    v.fa = function() {
        this.C = !1;
        var a = pd.test(Fq) ? Sb : "ltr";
        this.$b(mk(ms, {
            Si: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            yk: wb,
            Bk: Qq,
            dir: a
        }));
        this.className += " skiptranslate";
        this.j() && this.K && this.Ya && this.g.j() && this.H && this.o && (this.l.w(window, "resize", D(this.ob, this)),
        this.l.w(this, tb, D(this.bj, this)),
        this.Za.length && (this.ge.apply(this, this.Za),
        this.Za = []))
    }
    ;
    v.ge = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d)
                if (this.K || d.Qd) {
                    var e = d;
                    var f = mg(ua, {
                        "class": e.className || "activity-link"
                    });
                    Ig(f, e.Ye || "");
                    e = f;
                    b.push(e);
                    sg(d.Qd || this.K, e);
                    d.jc && d.Bb && (f = D(this.Wh, this, d),
                    this.l.w(e, Ta, f),
                    d.Pd && this.l.w(this.H, d.Pd, f));
                    d.id = d.id || ui(d);
                    this.P[d.id] && this.Rg(d);
                    this.P[d.id] = d;
                    this.jb[d.id] = e
                } else
                    this.Za.push(d)
        }
        return b
    }
    ;
    v.Rg = function(a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = z(arguments[b]) || arguments[b]instanceof String ? arguments[b] : arguments[b].id
              , d = this.P[c]
              , e = this.jb[c];
            d && e && (this.f && this.f.id === c && this.oe(),
            this.l.ba(d, [Xb, Oa]),
            d.M(),
            this.W[c] && delete this.W[c],
            delete this.P[c],
            delete this.jb[c],
            wg(e))
        }
    }
    ;
    v.Wh = function(a) {
        if (this.H) {
            a != this.f && this.f && (ct(this.g),
            this.f.Bb.call(this.f),
            this.f.j() && (this.f.j().style.display = q),
            et(this, !1),
            this.f = null);
            et(this, !0);
            ct(this.g);
            this.f = a;
            if (this.W[a.id]) {
                var b = this.W[a.id];
                var c = a.Ub
            } else
                a.fa(),
                b = a.j(),
                c = a.jc,
                this.l.w(a, [Xb, Oa], D(this.oe, this)),
                a.cd && (this.W[a.id] = b);
            sg(this.H, b);
            c.call(a, this);
            a = new Zs(b,100);
            this.l.Ab(a, ab, D(this.ob, this, !0, !0));
            a.play()
        }
    }
    ;
    v.oe = function() {
        if (this.f)
            if (ct(this.g),
            this.f.Bb.call(this.f),
            this.f.j()) {
                var a = new Ys(this.f.j(),100);
                this.l.Ab(a, ab, D(function() {
                    wg(this.f.j());
                    this.f = null;
                    et(this, !1);
                    Og(this.g.j()) && (at(this.g),
                    this.ob(!0, !0))
                }, this));
                a.play()
            } else
                et(this, !1),
                this.f = null
    }
    ;
    v.cf = function(a, b) {
        this.tb = a;
        dt.m.cf.call(this, a, b);
        this.j().style.display = "block"
    }
    ;
    v.Je = function(a) {
        if (!this.C) {
            var b = $o(this, a.target);
            this.za = b;
            this.Wb();
            b != this.b ? (this.b = b,
            ap(this, b),
            bp(this),
            Zo(this, a)) : ap(this, b)
        }
    }
    ;
    v.bj = function() {
        ct(this.g);
        this.Xc && this.oe()
    }
    ;
    v.F = function() {
        for (var a in this.P)
            this.Rg(a);
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.o = this.Ya = this.tb = this.H = this.K = this.g = null;
        dt.m.F.call(this)
    }
    ;
    function et(a, b) {
        a.Xc = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.ra = new N(c.offsetLeft,c.offsetTop)
        } else
            a.ra && (null != (a.s || null) && ((a.s || null).a = a.ra),
            Zg(a.j(), a.ra),
            a.ra = null);
        a.K.style.display = b ? q : "inline-block";
        a.Ya.style.display = b ? "inline-block" : q
    }
    v.Sc = function(a) {
        this.isVisible() ? (this.sc = a,
        (this.sc ? this.h.w : this.h.ba).call(this.h, O(this.j()), Bb, this.gf, !0)) : dt.m.Sc.call(this, a)
    }
    ;
    v.$b = function(a) {
        dt.m.$b.call(this, a);
        if (a) {
            this.K = eg("activity-links", a);
            var b = eg(Vb, a);
            b && (this.g = new $s,
            Ai(this.g, b));
            this.Ya = eg("started-activity-container", a);
            this.H = eg("activity-root", a);
            this.o = eg("original-text", a)
        }
    }
    ;
    v.ob = function(a, b) {
        var c = eh(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            dt.m.ob.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.$e || {},
            a -= b.top || 10,
            d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Zg(this.j(), new N(d,a))
        }
    }
    ;
    v.I = function(a) {
        dt.m.I.call(this, a)
    }
    ;
    v.Tb = ic("a");
    v.ta = ic("c");
    v.Pa = function(a) {
        a = a ? wd(a) : "";
        this.o ? Ig(this.o, a) : dt.m.Pa.call(this, a)
    }
    ;
    v.cb = t("a");
    v.xa = t("g");
    v.oa = t("c");
    v.Mc = function() {
        return this.o ? Og(this.o) : dt.m.Mc.call(this)
    }
    ;
    v.ac = function(a) {
        this.C || dt.m.ac.call(this, a)
    }
    ;
    v.Gd = function(a) {
        this.C || dt.m.Gd.call(this, a)
    }
    ;
    v.Fd = function(a) {
        this.C || dt.m.Fd.call(this, a)
    }
    ;
    var ft = {
        set: function(a, b) {
            a.className = b
        },
        get: function(a) {
            a = a.className;
            return z(a) && a.match(/\S+/g) || []
        },
        add: function(a, b) {
            var c = ft.get(a)
              , d = Xc(arguments, 1)
              , e = c.length + d.length;
            ft.Nf(c, d);
            ft.set(a, c.join(" "));
            return c.length == e
        },
        remove: function(a, b) {
            var c = ft.get(a)
              , d = Xc(arguments, 1)
              , e = ft.ag(c, d);
            ft.set(a, e.join(" "));
            return e.length == c.length - d.length
        },
        Nf: function(a, b) {
            for (var c = 0; c < b.length; c++)
                Sc(a, b[c]) || a.push(b[c])
        },
        ag: function(a, b) {
            return Nc(a, function(c) {
                return !Sc(b, c)
            })
        },
        sj: function(a, b, c) {
            for (var d = ft.get(a), e = !1, f = 0; f < d.length; f++)
                d[f] == b && (Wc(d, f--, 1),
                e = !0);
            e && (d.push(c),
            ft.set(a, d.join(" ")));
            return e
        },
        xk: function(a, b, c) {
            var d = ft.get(a);
            z(b) ? Tc(d, b) : C(b) && (d = ft.ag(d, b));
            z(c) && !Sc(d, c) ? d.push(c) : C(c) && ft.Nf(d, c);
            ft.set(a, d.join(" "))
        },
        has: function(a, b) {
            return Sc(ft.get(a), b)
        },
        enable: function(a, b, c) {
            c ? ft.add(a, b) : ft.remove(a, b)
        },
        toggle: function(a, b) {
            var c = !ft.has(a, b);
            ft.enable(a, b, c);
            return c
        }
    };
    function gt(a, b) {
        Ls.call(this, a);
        b = b || {};
        this.a = {
            $a: b.$a || "",
            Kb: b.Kb || 1
        };
        this.b = null
    }
    E(gt, Ls);
    v = gt.prototype;
    v.eh = function(a, b) {
        b && (b.a = a,
        So(this.b, b))
    }
    ;
    v.fh = function(a) {
        a && Uo(this.b, a)
    }
    ;
    v.Aj = function() {
        var a = this.b.tb;
        if (a && void 0 !== a.a) {
            var b = a.a;
            a = this.h.c[b];
            Ms(this, this.f, !1);
            this.f = b;
            Ms(this, b);
            this.b.Tb(a.qj);
            this.b.ta(a.Bj);
            b = a.T;
            this.b.J = b && wd(b);
            this.b.Pa(a.text)
        }
    }
    ;
    v.zj = function() {
        Ms(this, this.f, !1)
    }
    ;
    v.Mg = function() {
        this.h.c[this.f].Ph.dispatchEvent("updating")
    }
    ;
    v.F = function() {
        this.b.M();
        this.b = null;
        gt.m.F.call(this)
    }
    ;
    v.zg = function(a, b) {
        ft[b ? "add" : "remove"](a, "goog-text-highlight")
    }
    ;
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var ht = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    function it(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.o = "";
        this.B = 0
    }
    it.prototype.start = function() {
        if (!this.g) {
            this.g = !0;
            var a = [], b;
            var c = 62;
            for (b = 0; 15 > b; b++)
                a[b] = ht[0 | Math.random() * c];
            this.o = a.join("");
            this.s = 0;
            this.c = this.a = this.f = this.b = -1;
            this.B = Ec();
            ul(this.l, 1E4, this)
        }
    }
    ;
    it.prototype.stop = function() {
        this.g && (this.g = !1,
        jt(this))
    }
    ;
    it.prototype.l = function() {
        this.g && (jt(this),
        ul(this.l, 1E3, this))
    }
    ;
    function jt(a) {
        var b = a.h.f
          , c = a.h.h
          , d = a.h.c
          , e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var f = {};
            f.ct = b;
            f.cv = c;
            f.cts = d;
            f.cvs = e;
            f.sid = a.o;
            f.seq = a.s++;
            f.tat = Ec() - a.B;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c)
                f.pt = a.b,
                f.pv = a.f,
                f.pts = a.a,
                f.pvs = a.c;
            gr("te_v", f);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e
        }
    }
    ;function kt() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != x.IntersectionObserver ? new IntersectionObserver(D(this.l, this)) : null
    }
    nr(36546, kt.prototype, {
        Cg: 1
    });
    var lt = "_gt_" + Math.random().toString(36).substr(2);
    kt.prototype.reset = function() {
        this.g = this.c = this.h = this.f = 0;
        this.a = []
    }
    ;
    kt.prototype.l = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[lt]) {
                this.h += Og(c.target).length;
                var d = c.target[lt];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[lt] = void 0
            }
        }
    }
    ;
    function mt(a, b) {
        R.call(this);
        a = a || {};
        this.a = fd(a);
        this.a.Kb = a.Kb;
        this.a.yf = !!a.yf;
        this.a.Kh = parseInt(a.Kh, 10) || 300;
        this.a.gj = a.gj;
        this.a.trackVisibility = a.trackVisibility || !1;
        this.h = 0;
        this.c = {};
        this.l = new ji(this);
        this.f = new gt(this,this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new dt({
            pj: a.a.pj
        });
        a.b.yg = 300;
        a.b.Zg = 1E3;
        a.b.Sc(!0);
        a.c.w(a.b, "show", D(a.Aj, a));
        a.c.w(a.b, tb, D(a.zj, a));
        b = new Js({
            $a: a.a.$a,
            id: "alternate",
            Ye: Z.mh,
            cd: !0
        },a.g);
        a.b.ge(b);
        a.c.w(b, Xb, D(a.Mg, a));
        a.a.Kb && (b = new Ks({
            id: "contribute",
            Pd: Ya,
            cd: !0
        },a.g),
        a.b.ge(b),
        a.c.w(b, Xb, D(a.Mg, a)));
        a.b.fa();
        this.g = this.b = null;
        this.a.trackVisibility && null != x.IntersectionObserver && (this.b = new kt,
        this.g = new it(this.b))
    }
    E(mt, R);
    function nt(a, b, c, d, e, f) {
        d = a.c[++a.h] = {
            id: a.h.toString(),
            Ph: f,
            text: c,
            Ek: e || c,
            T: d,
            qj: a.s,
            Bj: a.o,
            Ba: b
        };
        for (e = 0; e < b.length; ++e)
            b[e] && a.f.eh(d.id, b[e]);
        if (a.b)
            for (e = a.b,
            f = c.length,
            e.c += f,
            c = e.a.length,
            e.a.push(f),
            f = 0; f < b.length; ++f) {
                var h = e
                  , k = b[f];
                Ag(k) ? (k[lt] = c,
                h.f += Og(k).length,
                h.b && h.b.observe(k)) : h.Cg(k.nodeType)
            }
        a.g && a.g.start();
        return d.id
    }
    function ot(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a
              , d = b
              , e = c.c[d];
            if (e) {
                if (c.b)
                    for (var f = c.b, h = e.Ba, k = 0; k < h.length; ++k) {
                        var l = f
                          , m = h[k];
                        Ag(m) ? (m[lt] = void 0,
                        l.b && l.b.unobserve(m)) : l.Cg(m.nodeType)
                    }
                for (f = 0; f < e.Ba.length; ++f)
                    e.Ba[f] && c.f.fh(e.Ba[f]);
                delete c.c[d]
            }
        }
        a.b && a.b.reset()
    }
    mt.prototype.F = function() {
        ot(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null
    }
    ;
    function pt(a) {
        for (var b = 0; b < a.length; ++b)
            if (a[b] && a[b].node)
                return a[b].node;
        return null
    }
    function qt(a) {
        var b = pt(a);
        if (!b)
            return null;
        var c = []
          , d = []
          , e = [];
        b = new gs(b,!0);
        var f = a[a.length - 1].node
          , h = 0
          , k = !1;
        do {
            b.next();
            var l = b.node();
            if (!l)
                break;
            var m = b.a.c
              , n = b.depth();
            for (1 == m && --n; h < a.length && !a[h].node; )
                ++h;
            l == a[h].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !rt(st(l))) ? (m = tt(l),
            d.push({
                node: m,
                Pa: hc()
            }),
            e[d.length - 1] = n,
            ug(m, l),
            l == a[h].node && (c[h++] = d.length - 1,
            k = !0)) : k = !1
        } while (l != f);
        return {
            Ef: e,
            cj: c,
            Ei: d
        }
    }
    function rt(a) {
        return null != a && es[a.tagName]
    }
    function st(a) {
        if (null == a)
            return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == wd(Og(a)); )
            a = a.previousSibling;
        return a
    }
    function ut(a, b, c, d, e, f) {
        pi.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h)
            this.a.push("nodeType"in a[h] ? vt(a[h]) : a[h]),
            wt(a[h].node);
        this.f = b;
        this.G = d || 0;
        this.J = e || 0;
        this.l = c;
        this.s = f || null;
        this.C = this.B = this.K = !1;
        this.c = [];
        this.h = [];
        this.b = [];
        this.L = [];
        new ji(this);
        this.g = this.H = !1
    }
    var vt;
    E(ut, pi);
    function xt() {
        this.b = {};
        this.a = {}
    }
    xt.prototype.has = function(a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a)
    }
    ;
    xt.prototype.write = function(a, b) {
        this.a[a] = b
    }
    ;
    xt.prototype.remove = function(a) {
        delete this.a[a];
        delete this.b[a]
    }
    ;
    var yt = "_gt_" + Math.random().toString(36).substr(2)
      , zt = "_gtn_" + Math.random().toString(36).substr(2);
    function At(a) {
        if (!a)
            return !1;
        if (3 != a.nodeType || !I)
            return yt in a && !!a[yt];
        if (!a.parentNode)
            return !0;
        if (!(zt in a.parentNode))
            return !1;
        var b = a.parentNode[zt];
        if (!b || !b[a.nodeValue])
            return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c)
            if (b[c] == a)
                return !0;
        return !1
    }
    (function() {
        function a(c) {
            document.title = c
        }
        var b = {};
        vt = function(c, d) {
            if (c.tagName == wa)
                return {
                    node: c,
                    Pa: a,
                    de: !0,
                    Ag: !0,
                    Cf: !0
                };
            if (3 == c.nodeType)
                return {
                    node: c,
                    Pa: function(e, f) {
                        Ig(f, e)
                    }
                };
            d || (d = "value");
            b[d] || (b[d] = function(e, f) {
                f.setAttribute && f.setAttribute(d, e);
                z(e) && (f[d] = e)
            }
            );
            c = {
                node: c,
                Pa: b[d],
                de: !0
            };
            "value" != d && (c.Cf = !0);
            return c
        }
    }
    )();
    function Bt(a, b) {
        if (!a)
            return "";
        if (a.tagName == wa)
            return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : z(a[b]) ? String(a[b]) : ""
    }
    ut.prototype.ea = t("f");
    function Ct(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Og(d);
        d = {
            R: c,
            T: Ke(d)
        };
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {
            start: d,
            end: d
        };
        return d
    }
    function Dt(a, b, c) {
        b = {
            Ng: b,
            kf: c,
            $: []
        };
        a.b.push(b);
        return b
    }
    function Et(a) {
        if (!a.g && a.K && !a.B && !a.C) {
            a.B = !0;
            var b;
            if (b = Ft(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].Cf) {
                    for (var d = [], e = 0; e < c.length; ++e)
                        for (var f = 0; f < c[e].$.length; ++f)
                            d.push(c[e].$[f].T);
                    b[0].Pa(d.join(" "), b[0].node);
                    b = !0
                } else
                    b = !1;
                b = !b
            }
            if (b && (b = qt(a.a))) {
                a.h = b.cj;
                a.c = b.Ei;
                d = a.a;
                e = a.h;
                f = a.c;
                var h = b.Ef;
                c = [];
                for (var k = 0; k < d.length; ++k)
                    if (c[k] = [],
                    d[k].node && y(e[k]))
                        for (var l = 0; l < f.length; ++l)
                            if (!(h[l] > h[e[k]])) {
                                if (h[l] == h[e[k]]) {
                                    if (f[l].node.parentNode != f[e[k]].node.parentNode)
                                        continue
                                } else {
                                    for (var m = h[e[k]] - h[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode; )
                                        n = n.parentNode;
                                    if (n != f[l].node.parentNode)
                                        continue
                                }
                                c[k].push(l)
                            }
                d = a.a;
                e = a.b;
                f = -1;
                for (h = e.length - 1; 0 <= h; --h)
                    for (k = e[h],
                    l = k.$.length - 1; 0 <= l; --l)
                        if (m = k.$[l],
                        !(0 > m.R) && d[m.R] && d[m.R].node)
                            if (0 > f)
                                m.Kd = Xq(c[m.R]),
                                f = c[m.R][c[m.R].length - 1];
                            else
                                for (n = c[m.R].length - 1; 0 <= n; --n)
                                    if (c[m.R][n] <= f) {
                                        m.Kd = Xq(c[m.R].slice(0, n + 1));
                                        f = c[m.R][n];
                                        break
                                    }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    f = a.a;
                    h = d;
                    k = b.Ef;
                    l = a.h;
                    m = "";
                    for (n = 0; n < h.$.length; ++n) {
                        var r = h.$[n];
                        m += r.T;
                        if (0 > r.R) {
                            var w = -1
                              , G = -1
                              , F = l[h.$[n - 1].R];
                            y(F) && (w = k[F]);
                            n < h.$.length - 1 && (F = l[h.$[n + 1].R],
                            y(F) && (G = k[F]));
                            if (0 <= w || 0 <= G)
                                a: if (G = (0 > w || G < w) && n < h.$.length - 1,
                                w = h.$[G ? n + 1 : n - 1],
                                !(w.R >= f.length) && null != f[w.R].node) {
                                    F = r.T;
                                    r.T = "";
                                    if (/^ +$/.test(F) && (r = G ? w.T.charCodeAt(0) : w.T.charCodeAt(w.T.length - 1),
                                    3584 <= r && 3711 >= r || 12288 <= r && 12351 >= r || 12352 <= r && 12543 >= r || 12784 <= r && 12799 >= r || 19968 <= r && 40959 >= r || 65280 <= r && 65519 >= r))
                                        break a;
                                    w.T = G ? F + w.T : w.T + F
                                }
                        }
                    }
                    f = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.Ef;
                    n = a.h;
                    r = [];
                    for (w = 0; w < k.$.length && !(e >= l.length); ++w)
                        if (G = k.$[w],
                        G.Kd && !(0 > G.R) && h[G.R].node && G.T)
                            if (e == n[G.R] || e in G.Kd && (!(e + 1 in G.Kd) || e + 1 != n[G.R])) {
                                if (l[e] && l[e].node) {
                                    F = tt(l[e].node);
                                    r.push(F);
                                    for (var da = l[e].node, cm = m[n[G.R]] - m[e], hf = F, sb = h[G.R].node.parentNode, Ni = hf; sb && cm--; )
                                        Ni = sb.cloneNode(!1),
                                        Ni.appendChild(hf),
                                        sb = sb.parentNode,
                                        hf = Ni;
                                    da.appendChild(Ni);
                                    da = h[G.R].node;
                                    h[G.R].de ? h[G.R].Ag || F.appendChild(da) : (da = h[G.R].node.cloneNode(!1),
                                    da.id && (da.id = ""),
                                    F.appendChild(da));
                                    h[G.R].Pa(G.T, da)
                                }
                            } else
                                ++e,
                                --w;
                    h = r;
                    r = a.a;
                    k = a.l;
                    if (d.Ng)
                        k = d.Ng;
                    else {
                        l = r.length;
                        m = -1;
                        for (n = 0; n < d.$.length; ++n)
                            w = d.$[n].R,
                            0 <= w && r[w] && r[w].node && (m = Math.max(m, w),
                            l = Math.min(l, w));
                        r = "";
                        for (n = l; n <= m; ++n)
                            k[n] && (r += k[n]);
                        k = r
                    }
                    if (a.s)
                        3 != a.s.a.Kb && a.L.push(nt(a.s, h, k, f, d.kf, a));
                    else
                        for (d = 0; d < h.length; ++d)
                            h[d].title = k
                }
                b = a.a;
                for (c = 0; c < b.length; ++c)
                    b[c].node && !b[c].de && wg(b[c].node);
                b = a.a;
                c = a.c;
                a = a.h;
                for (e = d = 0; e < c.length; ++e)
                    if (f = c[e].node) {
                        for (; d < b.length && e > a[d]; )
                            d++;
                        (d >= b.length || e != a[d]) && !f.firstChild && (wg(f),
                        c[e].node = null)
                    }
            }
        }
    }
    ut.prototype.restore = function() {
        if (this.B)
            if (this.B = !1,
            this.s && ot(this.s),
            this.L = [],
            Ft(this.c),
            1 == this.a.length && this.a[0].Cf)
                this.a[0].Pa(this.l[0], this.a[0].node);
            else {
                for (var a = 0, b = 0; b < this.c.length; ++b) {
                    var c = this.c[b].node;
                    if (c) {
                        for (; a < this.a.length && b > this.h[a]; ) {
                            var d = a++;
                            this.a[d].node && (Gt(this.a[d].node),
                            this.a[d].node = null)
                        }
                        if (a < this.a.length && b == this.h[a] && this.a[a].node) {
                            this.a[a].Ag || (tg(c),
                            c.appendChild(this.a[a].node));
                            this.a[a].Pa(this.l[a], this.a[a].node);
                            a++;
                            d = c;
                            var e = d.parentNode;
                            if (e && 11 != e.nodeType)
                                if (d.removeNode)
                                    d.removeNode(!1);
                                else {
                                    for (; c = d.firstChild; )
                                        e.insertBefore(c, d);
                                    wg(d)
                                }
                        } else
                            wg(c)
                    }
                }
                this.c = []
            }
    }
    ;
    ut.prototype.F = function() {
        ut.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a)
            this.a[a].node && Gt(this.a[a].node);
        this.a = null
    }
    ;

    function wt(a) {
        if (a) {
            //console.log(a.nodeType+','+a.tagName+','+I);
            if (3 == a.nodeType && I) {
                /* 3是undefined */
                zt in a.parentNode && a.parentNode[zt] || (a.parentNode[zt] = {});
                var b = a.parentNode[zt];
                b[a.nodeValue] || (b[a.nodeValue] = []);
                b = b[a.nodeValue];
                //console.log(b);
                for (var c = 0; c < b.length; ++c) {
                    if (b[c] == a) {
                        return;
                    }
                    b.push(a)
                }
            } else {
                a[yt] = 1;
            }
        }
    }

    function Gt(a) {
        if (!a || 3 == a.nodeType && I) {
            var b = a.parentNode;
            if (b && zt in b) {
                var c = b[zt];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d)
                        for (var e = 0; e < d.length; ++e)
                            if (d[e] == a) {
                                d.splice(e, 1);
                                break
                            }
                    0 == d.length && delete c[a.nodeValue]
                }
                if (c && lr(c))
                    try {
                        delete b[zt]
                    } catch (f) {
                        b[zt] = ""
                    }
            }
        } else if (yt in a)
            try {
                delete a[yt]
            } catch (f) {
                a[yt] = ""
            }
    }
    function Ft(a) {
        for (var b = 0; b < a.length; ++b)
            try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b)
            ;
        a.length = b + 1;
        return a.length
    }

    function tt(a) {
        //console.log('-------');
        if (a.nodeName.toUpperCase() == 'FONT') {//console.log('font-');
        //return a.;
        }

        //console.log(a);
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        //a = document.createElement("font");
        //console.log(a);
        //wt(a);
        //console.log(a);
        a.style.verticalAlign = "inherit";
        a.style.color = 'inherit';
        //console.log(a);

        return a;
    }

    function Ht(a) {
        for (var b, c = a.firstChild; c; c = b)
            b = c.nextSibling,
            3 != c.nodeType && (c == a.firstChild ? ug(c, a) : vg(c, a),
            Ht(c))
    }
    ;function It(a, b, c, d, e) {
        b = b || {};
        this.wa = e || [];
        this.h = [];
        this.o = [];
        Jt(this, a || document.documentElement, !y(b.Ug) || !!b.Ug);
        this.l = c || ut;
        this.C = b.Hi;
        this.c = this.a = this.g = this.zc = null;
        this.s = !!b.Ej;
        this.H = !!b.Dj;
        this.K = this.s ? 27 : 13;
        this.G = !0;
        this.B = [];
        this.f = new Im(this,d)
    }
    nr(5762, It.prototype, {
        Oi: 1
    });
    function Kt(a, b, c, d) {
        a.f.c || (b = {
            hh: b,
            $g: c,
            Ba: [],
            Og: [],
            Hb: [],
            ae: 0,
            size: 0,
            continuous: !0
        },
        a.zc = null,
        Lm(a.f, a.b),
        Mm(a.f, d),
        Nm(a.f, D(function(e) {
            this.Oi(e);
            d()
        }, a)),
        Om(a.f, b))
    }
    function Lt(a, b) {
        return 0 < a.Ba.length ? new b(a.Ba,a.Hb.join(""),a.Og,a.ae,a.size) : null
    }
    function Mt(a, b) {
        if (!a.c)
            return a.zc = Lt(b, a.l),
            !0;
        if (!b.continuous && 0 < b.Ba.length)
            return a.zc = Lt(b, a.l),
            !0;
        b.continuous = a.c.Ig;
        a: {
            var c = a.c;
            var d = a.K;
            if (b.size > b.$g || b.ae > b.hh)
                c = !1;
            else {
                var e = c.size
                  , f = c.text.length;
                if (0 != b.Ba.length && (e += 1 == b.Ba.length ? b.size + d + d : b.size + d,
                f += b.ae,
                e > b.$g || f > b.hh)) {
                    c = !1;
                    break a
                }
                b.size = e;
                b.ae = f;
                b.Ba.push(c.node);
                b.Og.push(c.text);
                d = b.Ba.length - 1;
                0 == d ? b.Hb.push(c.te) : (1 == d && (b.Hb[0] = "<a i=0>" + b.Hb[0] + "</a>"),
                b.Hb.push("<a i=" + d + ">"),
                b.Hb.push(c.te),
                b.Hb.push("</a>"));
                c = !0
            }
        }
        if (c)
            return a.c = null,
            !1;
        a.zc = Lt(b, a.l);
        return !0
    }
    function Nt(a, b, c) {
        var d = Bt(b, c);
        d && wd(De(d)) && a.B.push({
            node: b,
            Gh: c,
            text: d
        })
    }
    It.prototype.b = function(a, b) {
        if (this.c && Mt(this, b))
            return Km;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.B.shift()))
                return this.c = {
                    Ig: !1,
                    node: vt(a.node, a.Gh),
                    text: a.text,
                    te: Je(a.text),
                    size: this.s ? He(a.text).length : a.text.length
                },
                b.continuous = !1,
                Mt(this, b),
                Km;
            a = this.h.shift() || this.o.shift();
            if (!a)
                return this.c = null,
                Mt(this, b),
                Km;
            this.g = [a.Cj];
            this.a = new gs(a.root)
        }
        this.a.next();
        if (this.a.f)
            return this.a = null,
            b.continuous = !1,
            this.b;
        a = this.a.node();
        var c = this.a.a.c;
        if (-1 == c) {
            Ot(this);
            if (!a || 3 != a.nodeType && !cs[a.tagName])
                b.continuous = !1;
            return this.b
        }
        var d = !At(a) && (a.nodeType == Ic && Pt(this) || !Nf(a, "notranslate") && (Nf(a, dc) || Pt(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && z(a.nodeValue) || a.tagName == wa && z(a.value) || a.tagName == va && Nf(a, dc) || a.tagName == oa && (fs[a.type] || Nf(a, dc)))) || c) && this.G && !Qt(a))
            return Jt(this, a, Pt(this), !0),
            this.a.a.g(),
            Ot(this),
            this.b;
        if (c && Pt(this)) {
            this.H && Nt(this, a, "title");
            Nt(this, a, "alt");
            Nt(this, a, "aria-label");
            Nt(this, a, "aria-placeholder");
            Nt(this, a, "aria-roledescription");
            Nt(this, a, "aria-valuetext");
            var e = this.a;
            if (e.b[e.b.length - 1])
                for (e = a.firstChild; e; ) {
                    if (3 == e.nodeType) {
                        var f = e.nodeValue.split("\n");
                        if (2 < f.length || 2 == f.length && "" != wd(f[0]) && "" != wd(f[1])) {
                            e.nodeValue = f[0];
                            for (var h = 1; h < f.length; ++h) {
                                var k = O(a).createElement("font");
                                this.wa.push(k);
                                vg(k, e);
                                e = k;
                                vg(O(a).createTextNode("\n" + f[h]), e);
                                e = e.nextSibling
                            }
                        }
                    }
                    e = e.nextSibling
                }
        }
        if (d) {
            this.a.a.g();
            if (Pt(this)) {
                var l = Bt(a);
                if (wd(De(l)) && (this.c = {
                    Ig: !0,
                    node: vt(a),
                    text: l,
                    te: Je(l),
                    size: this.s ? He(l).length : l.length
                },
                Mt(this, b)))
                    return Ot(this),
                    Km
            }
            Ot(this);
            return this.b
        }
        if (c) {
            if (Rt(a) || !a.firstChild && a.tagName != na)
                return b.continuous = b.continuous && !!es[a.tagName],
                this.a.a.g(),
                Ot(this),
                this.b;
            if (a.tagName == na) {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) {
                        var m = a.src.match(Kj)[3] || null;
                        l = (m ? decodeURI(m) : m) == window.location.hostname
                    }
                    if (l) {
                        var n = Gg(a).documentElement;
                        n && Jt(this, n, Pt(this))
                    }
                } catch (r) {}
                b.continuous = !1;
                this.a.a.g();
                Ot(this);
                return this.b
            }
            Pt(this) && a && (3 == a.nodeType || cs[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b
        }
        this.a.a.g();
        Ot(this);
        return this.b
    }
    ;
    function Rt(a) {
        return At(a) || 3 != a.nodeType && (!a.tagName || ds[a.tagName] || es[a.tagName] || Nf(a, Ub) || "gts-order" == a.id)
    }
    function Qt(a) {
        if (3 == a.nodeType)
            return !0;
        if (1 != a.nodeType)
            return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = O(a)
              , c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != q && c.visibility != rb
        }
        return !0
    }
    function Jt(a, b, c, d) {
        (d ? a.o : a.h).push({
            root: b,
            Cj: !y(c) || c
        })
    }
    function Pt(a) {
        return a.g[a.g.length - 1]
    }
    function Ot(a) {
        a.g.pop()
    }
    ;function St() {
        R.call(this);
        this.a = []
    }
    E(St, R);
    St.prototype.restore = function() {
        ul(this.b, 0, this)
    }
    ;
    St.prototype.b = function() {
        for (var a = 0; a < this.a.length; ++a)
            wg(this.a[a]);
        this.a = []
    }
    ;
    St.prototype.F = function() {
        St.m.F.call(this);
        this.restore()
    }
    ;
    function Tt(a) {
        var b = new Po;
        Jj(a, function(c) {
            if (Ag(c))
                b.add(c);
            else {
                a: {
                    var d;
                    if (Uf && !(I && L("9") && !L("10") && x.SVGElement && c instanceof x.SVGElement) && (d = c.parentElement)) {
                        c = d;
                        break a
                    }
                    d = c.parentNode;
                    c = Ag(d) ? d : null
                }
                null != c && b.add(c)
            }
        });
        return b
    }
    ;function Ut(a) {
        this.b = !0;
        this.f = a;
        this.c = !1;
        this.a = []
    }
    Ut.prototype.ea = function() {
        return this.a.join("")
    }
    ;
    function Vt(a, b) {
        this.g = a;
        this.f = !0;
        this.c = b;
        this.a = null;
        this.b = 0
    }
    function Wt(a, b) {
        return a.f ? (b(D(a.h, a), a.g, a.c ? "en" : ""),
        !0) : !1
    }
    Vt.prototype.h = function(a, b, c) {
        this.a = b;
        this.b = c;
        a()
    }
    ;
    function Xt(a, b) {
        this.f = a;
        this.o = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0
    }
    var Yt = Xq(". , ; : \\? !".split(" "))
      , Zt = Xq([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
    function $t(a, b, c) {
        a.o && (b -= 9);
        for (var d = "", e = 0, f = a.s; f < a.f.length; ++f) {
            var h = a.f.charAt(f)
              , k = h.charCodeAt(0);
            e++;
            a.a += a.o ? 127 >= k ? 32 >= k || Zt[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            Yt[h] ? (a.g = f,
            a.l = a.a,
            k = k || e > c) : " " == h && (a.c = f,
            a.h = a.a,
            k = k || e > c);
            if (k)
                return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1),
                a.a -= a.l,
                a.b = a.g + 1,
                a.g >= a.c ? (a.c = -1,
                a.h = 0) : a.h -= a.l,
                a.g = -1,
                a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1),
                a.a -= a.h,
                a.b = a.c + 1,
                a.c = -1,
                a.h = 0) : (d = a.f.substring(a.b, f + 1),
                a.a = 0,
                a.b = f + 1,
                a.g = a.c = -1,
                a.h = a.l = 0),
                a.s = f + 1,
                d
        }
        a.b < a.f.length && (d = a.f.substring(a.b),
        a.b = a.f.length);
        return d
    }
    ;function au(a, b, c, d, e, f) {
        this.l = d || A;
        this.W = f || A;
        this.L = !!e;
        this.c = a.a.bf;
        this.f = 0;
        this.G = A;
        this.C = c;
        this.o = this.b = this.g = 0;
        this.a = null;
        this.K = 0;
        this.qa = !1;
        this.ca = a.a.af;
        this.J = [];
        this.H = 0;
        this.h = (this.P = a.a.hd) ? a.a.Rd - (new Mj(a.a.na.a)).toString().length : a.a.Rd;
        this.ua = this.L ? 1 : 6;
        this.Ia = a.a.tf;
        this.wa = b;
        this.s = [];
        this.la = a
    }
    function bu(a, b) {
        var c = 0;
        a.G = D(function() {
            ++c == this.s.length && b()
        }, a)
    }
    function cu(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.h,
        !c || c <= a.h)) {
            a.g = a.b;
            return
        }
        do
            b = a.b,
            a.b < a.h && (a.b *= a.ua,
            a.b > a.h && (a.b = a.h));
        while (b != a.b && c && a.b < c);
        a.g = a.b
    }
    function du(a, b) {
        var c = null != b
          , d = !c && !a.qa;
        (d || c) && a.l(100, d, b)
    }
    function eu(a) {
        return a.P ? a.a.J : a.a.ea().length
    }
    function fu(a, b, c, d, e) {
        return new It(a.wa.shift(),{
            Ej: a.P,
            Hi: b,
            Ug: !0,
            Dj: !!c
        },function() {
            var f = Array.prototype.slice.call(arguments);
            return new ut(f.shift(),f.shift(),f.shift(),f.shift(),f.shift(),c,d)
        }
        ,a.C,e)
    }
    function gu(a, b, c) {
        if (0 < a.ca && hu(b) >= a.ca)
            return !0;
        if (eu(a) > a.b) {
            if (0 < hu(b))
                return !0;
            cu(a, c, eu(a));
            for (var d = a.a.ea(), e = new Xt(d,a.P), f; f = $t(e, a.b, a.c); )
                if (b.g.push(new Vt([f],!1)),
                a.f += f.length,
                a.c -= f.length,
                0 >= a.c) {
                    b.B = d.substring(e.b);
                    break
                } else
                    cu(a, c);
            iu(b, a.a, !0);
            a.a = null;
            return !0
        }
        if (eu(a) > a.g)
            return !0;
        iu(b, a.a, !0);
        a.g -= eu(a) + a.Ia;
        a.f += a.a.G;
        a.c -= a.a.G;
        a.a = null;
        return !1
    }
    ;function ju(a, b) {
        R.call(this);
        this.f = b;
        this.b = {
            rootMargin: a
        };
        this.a = new IntersectionObserver(D(this.c, this),this.b)
    }
    E(ju, R);
    ju.prototype.F = function() {
        ju.m.F.call(this);
        this.a = null
    }
    ;
    ju.prototype.c = function(a) {
        for (var b = 0; b < a.length; b++)
            if (0 < a[b].intersectionRatio) {
                this.f();
                break
            }
    }
    ;
    function ku() {
        T.call(this)
    }
    E(ku, T);
    ku.prototype.D = function() {
        this.S(mk(qs))
    }
    ;
    ku.prototype.S = ic("A");
    function lu(a) {
        Pf(a.j(), qb);
        Pf(a.j().firstChild, pb)
    }
    ;function mu() {
        this.a = new ku;
        this.a.D();
        this.a.fa();
        this.b = 0
    }
    mu.prototype.reset = function() {
        this.b = 0;
        lu(this.a)
    }
    ;
    function nu(a, b, c, d, e, f, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.B = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.wa = f;
        this.H = h;
        this.o = this.h = null;
        this.l = k || null;
        this.K = this.C = !1;
        this.G = {}
    }
    function ou(a) {
        for (var b = new Po, c = 0; c < a.length; c++) {
            for (var d = a[c], e = new Po, f = 0; f < d.a.length; f++) {
                var h = d.a[f].node;
                null != h && e.add(h)
            }
            d = b;
            e = Ij(e);
            f = e.length;
            for (h = 0; h < f; h++)
                d.add(e[h])
        }
        return b
    }
    v = nu.prototype;
    v.trackVisibility = function(a) {
        a = this.h = new ju("200px",D(this.ti, this, a));
        var b = Tt(ou([].concat(this.b, this.s)));
        Jj(b, D(a.a.observe, a.a));
        a = this.o = new ju("0px",D(this.xi, this));
        b = Tt(ou([].concat(this.b, this.s)));
        Jj(b, D(a.a.observe, a.a))
    }
    ;
    v.ti = function(a) {
        this.h && (this.h.a.disconnect(),
        this.h = null);
        a()
    }
    ;
    v.xi = function() {
        this.C = !0;
        pu(this);
        if (!this.K && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a,
            M(a.j(), qb),
            M(a.j().firstChild, pb))
        }
    }
    ;
    function pu(a) {
        a.o && (a.o.a.disconnect(),
        a.o = null)
    }
    v.dh = function() {
        if (this.C && !this.K && this.l) {
            var a = this.l;
            0 == --a.b && lu(a.a)
        }
        this.h && (this.h.a.disconnect(),
        this.h = null);
        pu(this)
    }
    ;
    function iu(a, b, c) {
        c ? (a.b.push(b),
        a.G[b.ea()] = !0) : a.s.push(b)
    }
    function hu(a) {
        return a.b.length + a.s.length
    }
    function qu(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c)
                b.push(a.b[c].ea());
            a.g.push(new Vt(b,!1))
        }
    }
    v.translate = function(a) {
        function b() {
            d++;
            d == c && e()
        }
        qu(this);
        for (var c = 0, d = 0, e = A, f = this.f, h = this.a, k = this.c, l = this.wa, m = this.H, n = 0; n < this.g.length; ++n)
            Wt(this.g[n], function(r, w, G) {
                r = f.la.translate(Dc(r, b), w, G || h, k, ++f.H, l, m, f.L);
                f.J.push(r);
                return r
            }) && c++;
        0 != c && (e = Pm(a));
        return c
    }
    ;
    function ru(a, b) {
        R.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b
    }
    E(ru, R);
    ru.prototype.g = function(a) {
        var b = wd(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href),
        this.b.push(a),
        a.href = b + "#googtrans/" + this.a + "/" + this.c)
    }
    ;
    ru.prototype.F = function() {
        ru.m.F.call(this);
        this.restore()
    }
    ;
    ru.prototype.restore = function() {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a)
                this.b[a].href = this.f[a];
            this.b = [];
            this.f = []
        }
    }
    ;
    function su(a, b) {
        R.call(this);
        this.b = a;
        this.a = pd.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b)
            Ag(a[b]) && M(a[b], this.a)
    }
    E(su, R);
    su.prototype.F = function() {
        su.m.F.call(this);
        this.restore()
    }
    ;
    su.prototype.restore = function() {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b)
            Ag(a[b]) && Pf(a[b], this.a)
    }
    ;
    function tu(a, b, c, d, e, f, h, k, l, m) {
        R.call(this);
        this.B = a;
        this.Ch = b;
        this.la = c || null;
        this.ua = m || null;
        this.C = null;
        this.tb = !!d;
        this.Xc = e || "transparent";
        this.Gb = !!f;
        this.o = [];
        this.jb = this.G = this.b = !1;
        this.l = k || new xt;
        this.Mf = !k;
        this.ra = h || Em.X();
        this.Ia = new St;
        this.W = this.P = this.K = !1;
        this.Ya = this.f = .5;
        this.Za = .01;
        this.s = new Fm(this.f);
        this.J = (this.h = this.qa = !!l) ? new MutationObserver(D(this.ni, this)) : null;
        this.c = this.a = null;
        S(window, La, this.vg, !0, this);
        S(window, db, this.wg, !0, this)
    }
    E(tu, R);
    nr(3046, tu.prototype, {
        Ki: 1,
        Mi: 2,
        Li: 3,
        Ni: 4
    });
    v = tu.prototype;
    v.cb = function() {
        return this.a ? this.a : ""
    }
    ;
    v.oa = function() {
        return this.c ? this.c : ""
    }
    ;
    v.Mh = function(a) {
        this.Ki.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Xf = function(a) {
        this.Li.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Nh = function(a) {
        this.Mi.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.Oh = function(a) {
        this.Ni.apply(this, arguments);
        this.g && this.g(0, !1, 1)
    }
    ;
    v.translate = function(a, b, c, d, e) {
        if (d || a != this.a || b != this.c)
            uu(this),
            this.Mf && (this.l = new xt);
        else if (this.b)
            return;
        this.g = c;
        this.Yc = e;
        this.h = this.qa && !0;
        this.J && this.J.observe(document.body, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        });
        this.b = !0;
        this.a = a;
        this.c = b;
        this.tb && (this.C = new ru(a,b));
        this.W = this.a == Ia;
        this.la && (c = this.la,
        a && (c.s = a),
        b && (c.o = b));
        this.ca = new su(this.B,this.c);
        this.H = vu(this);
        (a = this.B instanceof Node ? this.B : null) && wu(a, this.c)
    }
    ;
    function vu(a) {
        var b = new Im(a,a.ra);
        Lm(b, a.rg);
        Nm(b, D(a.Mh, a));
        Om(b, new au(a.Ch,[].concat(a.B),a.ra,a.g,a.h,a.Yc));
        return b
    }
    v.restore = function() {
        uu(this);
        this.Ia.restore();
        var a = this.B instanceof Node ? this.B : null;
        a && wu(a, this.cb())
    }
    ;
    v.F = function() {
        tu.m.F.call(this);
        this.restore();
        di(window, La, this.vg, !0, this);
        di(window, db, this.wg, !0, this)
    }
    ;
    function xu(a, b, c, d) {
        var e = lr(a.l.b)
          , f = new Im(a,b.C);
        b.s.push(f);
        Mm(f, b.G);
        cu(b, e);
        Lm(f, d || a.ng);
        b = c || new nu([],[],b,a.cb(),a.oa(),a.jb,a.G,a.ua);
        Nm(f, a.ui, a);
        a.h && Mm(f, b.dh, b);
        Om(f, b)
    }
    v.ui = function(a, b, c) {
        c.dh();
        this.G ? this.Oh(a) : this.Nh(a);
        c.f.G()
    }
    ;
    v.wg = function() {
        this.K = !1;
        this.L = 0;
        Gm(this.s, this.f)
    }
    ;
    v.vg = function(a) {
        a.target == window && (this.K = !0,
        this.L = 0,
        Gm(this.s, .01))
    }
    ;
    v.ni = function(a) {
        if (this.b && this.h) {
            for (var b = 0; b < a.length; b++)
                if (a[b].target && a[b].target.className && (0 <= a[b].target.className.indexOf(dc) || 0 == a[b].target.className.indexOf("goog-")))
                    return;
            this.ra.add(D(this.hj, this))
        }
    }
    ;
    v.hj = function() {
        this.G = !0;
        this.H.stop();
        this.H = vu(this);
        return !1
    }
    ;
    v.rg = function(a, b) {
        bu(b, Pm(a));
        xu(this, b);
        return this.zi
    }
    ;
    v.zi = function(a, b) {
        if (!this.b)
            return Km;
        if (!Qm(a))
            return Jm;
        if (!this.h)
            for (a = 0; a < this.o.length; ++a) {
                var c = D(this.Of, this, b, this.o[a]);
                b.C.add(c)
            }
        return this.yi
    }
    ;
    v.kg = function(a, b) {
        if (this.L && !this.K) {
            a = (new Date).getTime() - this.L;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.P ? this.Za = .01 : this.Ya = this.f
        }
        this.G = this.b = !0;
        this.L = (new Date).getTime();
        this.Zc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Zc = a,
        a = !0) : a = !1;
        a ? (this.P = !1,
        this.f = this.Ya,
        this.K || Gm(this.s, this.f),
        a = [].concat(this.B),
        c = this.s,
        b.l = A,
        b.wa = a,
        b.a = null,
        b.H = 0,
        b.s = [],
        b.G = A,
        b.C = c,
        a = new Im(this,this.s),
        Lm(a, this.rg),
        Nm(a, D(this.Xf, this)),
        Om(a, b),
        this.H = a) : (this.P = !0,
        this.f = this.Za,
        this.K || Gm(this.s, this.f),
        a = new Im(this,this.s),
        Lm(a, this.kg),
        Nm(a, D(this.Xf, this)),
        Om(a, b),
        this.H = a);
        return Km
    }
    ;
    v.yi = function(a, b) {
        if (!this.b)
            return Km;
        this.G = this.b = !1;
        this.W ? du(b, !0) : (du(b),
        b.W(b.f));
        if (this.Gb)
            return this.kg;
        for (a = 0; a < b.s.length; ++a)
            b.s[a].stop();
        for (a = 0; a < b.J.length; ++a)
            bs(b.la, b.J[a]);
        return Km
    }
    ;
    function yu(a, b, c) {
        a: {
            var d = a.tb ? D(a.C.g, a.C) : A
              , e = a.la
              , f = a.Xc
              , h = a.Ia.a;
            b = Pm(b);
            if (!c.B) {
                if (0 == c.wa.length) {
                    0 == c.f && 0 == c.H && c.l(0, !0);
                    c = !1;
                    break a
                }
                c.B = fu(c, d, e, f, h)
            }
            c.ra = !0;
            Kt(c.B, c.c, c.b, b);
            c = !0
        }
        return c ? a.ng : a.Cd
    }
    v.ng = function(a, b) {
        if (!this.b)
            return Km;
        var c = b.f;
        if (null == c.a) {
            if (!c.ra)
                return yu(this, a, b.f);
            if (!Qm(a))
                return Jm;
            c.ra = !1;
            c.a = c.B.zc || null;
            var d = c.a ? c.a : c.B = null;
            if (!d)
                return yu(this, a, b.f);
            this.o.push(d);
            var e = d.ea();
            if (this.l.has(e, !this.h) || null != b.G[e] && b.G[e])
                return e = c.a.G,
                c.f += e,
                c.c -= e,
                c.a = null,
                this.h && iu(b, d, !1),
                yu(this, a, b.f);
            this.l.a[d.ea()] = null
        }
        0 < hu(b) && Gm(this.s, .5);
        return gu(c, b, lr(this.l.b)) ? this.Cd : yu(this, a, b.f)
    }
    ;
    v.Cd = function(a, b) {
        if (!this.b || 0 == hu(b))
            return Km;
        xu(this, b.f);
        return this.h ? (b.trackVisibility(Pm(a)),
        this.Ai) : 0 == b.translate(a) ? Km : this.qg
    }
    ;
    v.Ai = function(a, b) {
        return this.b ? Qm(a) ? 0 == b.translate(a) ? Km : this.qg : Jm : Km
    }
    ;
    v.Of = function(a, b) {
        b.g && this.l.remove(b.f);
        if (!this.b)
            return !1;
        if (this.l.has(b.ea(), !1)) {
            var c = this.l;
            if (c.has(b.f, !1)) {
                var d = b.f
                  , e = c.a[d];
                e || (e = c.b[d],
                c.a[d] = e);
                b.b = e;
                b.K = !0
            } else
                c.remove(b.f),
                b.g = !0;
            Et(b)
        } else if (c = this.l,
        b.g)
            c.remove(b.f);
        else if (b.o) {
            d = b.o.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.K = !0;
            delete b.o;
            b.o = null;
            b.b = [];
            e = document.createElement($a);
            Q(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            d = [];
            var f;
            for (f = e.firstChild; f; f = f.nextSibling)
                if ("I" == f.tagName)
                    var h = Dt(b, Og(f), f.innerHTML);
                else if ("B" == f.tagName) {
                    h || (h = Dt(b, "", ""));
                    if (1 == b.a.length)
                        Ct(h.$, d, 0, f);
                    else {
                        var k = d;
                        var l = f;
                        var m = b.a;
                        h = h.$;
                        for (var n = [], r, w = l.firstChild; w; w = r)
                            r = w.nextSibling,
                            Ht(w);
                        for (r = l.firstChild; r; r = r.nextSibling)
                            r.attributes && r.attributes.i ? (l = parseInt(r.attributes.i.nodeValue, 10),
                            !isNaN(l) && 0 <= l && l < m.length && (m[l].de && n[l] ? n[l].T += r.firstChild && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : Og(r) : n[l] = Ct(h, k, l, r))) : 3 == r.nodeType && h.push({
                                R: -1,
                                T: Ke(r.nodeValue)
                            });
                        null != h && 0 < h.length && -1 == h[0].R && (1 == h.length ? h[0].R = 0 : (h[1].T = h[0].T + h[1].T,
                        h.shift()))
                    }
                    h = void 0
                }
            f = b.b;
            for (k = 0; k < f.length - 1; ++k)
                m = f[k],
                h = Ge(m.$[m.$.length - 1].T),
                h = h.charCodeAt(h.length - 1),
                12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.$[m.$.length - 1].T += " ");
            wg(e);
            for (e = 0; e < b.a.length; ++e)
                e < d.length && e < b.l.length && null != d[e] && (f = b.l[e],
                k = d[e].start,
                null != k && (m = f.substring(0, f.length - Fe(f).length),
                " " == m && (m = ""),
                m && (k.T = m + Fe(k.T))),
                k = d[e].end,
                null != k && (f = f.substring(Ge(f).length),
                " " == f && (f = ""),
                f && (k.T = Ge(k.T) + f)));
            1 != b.b.length || b.b[0].kf || (b.b[0].kf = b.f);
            c.write(b.f, b.b);
            Et(b)
        }
        b.H || (this.W = !1);
        c = b.g ? !0 : void 0;
        a.K += b.G;
        null != c && (a.qa = !0);
        b = Math.min(Math.floor(100 * a.K / a.f), 100);
        if (a.o != b || c)
            a.o = b,
            a.L ? (a.l(a.o, !0, c),
            a.W(a.K)) : a.l(a.o, !1, c);
        return !1
    }
    ;
    v.qg = function(a, b) {
        if (!this.b)
            return Km;
        if (!Qm(a))
            return Jm;
        if (1 < hu(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.c || 0 == c.length || null == a.a || 0 == a.a.length)
                a = null;
            else {
                for (var d = [], e = [], f = 0; f < a.a.length && f < c.length; ++f) {
                    var h = a.a[f];
                    h && h[0] && 200 == h[1] || (e.push(c[f]),
                    d.push(a.g[f]))
                }
                a = 0 < e.length ? {
                    ij: new Vt(d,!0),
                    jj: e
                } : null
            }
            a = a ? new nu([a.ij],a.jj,b.f,b.a,b.c,b.wa,b.H,b.l) : null;
            null != a && xu(this, b.f, a, this.Cd)
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c)
                d = b.g[c],
                d.c || 200 == d.b && d.a && d.a[0] ? d = d.f = !1 : (d.c = !0,
                d = d.f = !0),
                a = d || a;
            if (a)
                return this.Cd
        }
        d = this.cb();
        a = this.oa();
        if (1 < b.b.length)
            if (c = b.g[0],
            e = d == Ia,
            d = b.b,
            200 == c.b)
                for (f = 0; f < c.a.length && f < d.length; ++f)
                    if ((h = c.a[f]) && 200 == h[1]) {
                        var k = h[2]
                          , l = d[f]
                          , m = l
                          , n = null != k && k == a;
                        m.o = h[0];
                        y(n) && (m.C = n);
                        l.H = e && null == k
                    } else
                        d[f].g = !0;
            else
                for (a = 0; a < d.length; ++a)
                    d[a].g = !0;
        else {
            c = new Ut(d == Ia);
            for (d = 0; d < b.g.length; ++d)
                h = b.g[d],
                e = a,
                f = c,
                200 == h.b && h.a && h.a[0] ? (h = h.a[0],
                f.a.push(h[0]),
                h = h[2],
                f.b = f.b && null != h && h == e,
                null != h && (f.f = !1)) : 500 != h.b && (f.c = !0);
            null != b.B && (c.a.push(b.B),
            b.B = null);
            if (a = b.b[0])
                d = c.b,
                a.o = c.ea(),
                y(d) && (a.C = d),
                a.H = c.f,
                a.g = c.c
        }
        if (this.h) {
            a = D(this.Of, this);
            for (c = 0; c < b.b.length; c++)
                a(b.f, b.b[c]);
            for (c = 0; c < b.s.length; c++)
                a(b.f, b.s[c]);
            pu(b);
            b.K = !0;
            b.C && b.l && (b = b.l,
            0 == --b.b && lu(b.a))
        }
        return Km
    }
    ;
    function uu(a) {
        a.J && a.J.disconnect();
        a.ua && a.ua.reset();
        a.b && (a.H.stop(),
        a.b = !1,
        a.G = !1);
        if (a.o.length) {
            for (var b = 0; b < a.o.length; ++b)
                a.o[b].M();
            a.o = []
        }
        null != a.C && (a.C.restore(),
        a.C = null);
        null != a.ca && (a.ca.restore(),
        a.ca = null)
    }
    function wu(a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b)
    }
    ;function zu(a, b, c, d, e, f, h, k, l, m, n) {
        R.call(this);
        this.K = b || null;
        this.L = !!c;
        this.C = d || "transparent";
        this.g = f || "";
        b = h || {
            fetchStart: 0,
            Ak: 0
        };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.J = Ec() - Iq;
        this.s = !1;
        this.b = new Yr(e || "",void 0,f,l,m,n);
        this.H = new Fm(1);
        this.o = new xt;
        this.f = null;
        this.h = !0;
        this.l = null != x.IntersectionObserver;
        this.B = k || null;
        new ji(this);
        e = new Yq;
        f = new $q(D(this.b.l, this.b, e.register()));
        this.pd = ar(f, e.delay(D(this.pd, this)));
        this.ld = ar(f, e.delay(D(this.ld, this)));
        this.ce = ar(f, e.delay(D(this.ce, this)));
        this.restore = ar(f, e.delay(D(this.restore, this)));
        f.finish();
        e.finish()
    }
    E(zu, R);
    nr(14097, zu.prototype, {
        Ze: function() {
            gr(this.b.c ? "te_afas" : "te_afau")
        }
    });
    v = zu.prototype;
    v.lj = ic("l");
    v.Ua = function() {
        return this.b.c
    }
    ;
    v.pd = function(a, b) {
        if (this.b.Ua()) {
            var c = this.b
              , d = {
                alpha: !0
            };
            b && (d.hl = b);
            c.g.send(d, a)
        } else
            this.Ze(),
            a(null)
    }
    ;
    v.ld = function(a) {
        var b = document.documentElement.lang;
        if (b)
            a(b);
        else if (this.b.Ua()) {
            var c = new mn(document.body,!1,!1,1,1);
            b = [];
            try {
                for (var d = 0, e = this.b.b.Gg; b.length + d < e; ) {
                    var f = c.next();
                    if (1 == c.c && Rt(f))
                        c.g();
                    else if (3 == f.nodeType) {
                        var h = wd(De(f.nodeValue));
                        h && (b.push(h),
                        d += h.length)
                    }
                }
            } catch (k) {
                if (k != zj)
                    throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.vc(a);
            e.b.na.send({
                q: b.substring(0, e.b.Gg),
                sl: Ia,
                tl: "en"
            }, a)
        } else
            this.Ze(),
            a(null, !0)
    }
    ;
    v.ce = function(a, b, c, d, e) {
        var f = Ec();
        or();
        if (!a || mr(a, b))
            a = Ia;
        if (e || a != this.a || b != this.c)
            this.o = new xt;
        this.a = a;
        this.c = b;
        this.b.Ua() ? (d = d || document.documentElement,
        this.f && this.f.M(),
        this.B.reset(),
        this.f = new tu(d,this.b,this.K,this.L,this.C,!0,this.H,this.o,this.l,this.B),
        this.f.jb = this.s,
        this.h = !0,
        this.f.translate(a, b, c, e, D(this.Qi, this, f, a, b))) : (this.Ze(),
        c(0, !1, !0))
    }
    ;
    v.tj = function() {
        return !!this.f && this.f.b
    }
    ;
    v.Xg = ic("s");
    v.restore = function() {
        or();
        this.b.Ua() && this.f && this.f.restore()
    }
    ;

    v.F = function() {
        pr();
        zu.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.o = new xt
    }
    ;

    v.Qi = function(a, b, c, d) {
        this.h && (this.h = !1,
        b = {
            sl: b,
            tl: c,
            textlen: d
        },
        this.s && (b.ctt = "1"),
        "" != this.g && (b.sp = this.g),
        0 != this.g.indexOf("nmt") && (b.sp = "" != this.g ? "nmt," + this.g : "nmt"),
        b.ttt = Ec() - a,
        b.ttl = this.J,
        this.G && (b.ttf = this.G),
        this.l && (b.sr = 1),
        gr("te_time", b))
    }
    ;
    function Au(a) {
        T.call(this, a);
        this.l = new ji(this)
    }
    E(Au, T);
    v = Au.prototype;

    v.D = function() {
        var a = Rg(this.b, "select");
        a.className = "translateSelectLanguage";
        this.S(a);
    }
    ;

    v.O = function() {
        Au.m.O.call(this);
        this.Wf()
    }
    ;
    v.Wf = function() {
        S(this.j(), Pa, dr(this, Pa));
        this.dispatchEvent(Ab)
    }
    ;
    v.Z = function() {
        Au.m.Z.call(this);
        this.l.M();
        this.l = null
    }
    ;
    function Bu(a, b) {
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()),
        b.appendChild(a.j()))
    }

    v.Tc = function(a) {
        this.b.Qc(this.j());
        for (var b in a)
            if (a[b] !== Object.prototype[b]) {
                var c = this.b.D(qa, {
                    value: b
                });
                this.b.ib(c, a[b]);
                this.j().appendChild(c)
            }
        this.j().selectedIndex = 0
    }
    ;
    v.Aa = function() {
        return this.j().value
    }
    ;
    v.ya = function(a) {
        if (this.j().value != a)
            for (var b = 0, c; c = this.j().options.item(b); ++b)
                if (c.value == a) {
                    this.j().selectedIndex = b;
                    break
                }
    }
    ;
    v.$d = function(a) {
        if ("undefined" == B(a))
            return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b)
            if (c.value == a)
                return c.text
    }
    ;
    v.ka = function(a) {
        this.j().disabled = !a
    }
    ;
    function Cu(a) {
        Au.call(this, a)
    }
    E(Cu, Au);
    Cu.prototype.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Du(a, b) {
        Au.call(this, b);
        this.a = a && fd(a) || {};
        this.a.qf = this.a.qf || 11;
        this.a.Xd = 0 != this.a.Xd;
        this.a.Va || (this.a.Va = Tq)
    }
    E(Du, Au);
    v = Du.prototype;
    v.fd = function() {
        throw Error("Not implemented.");
    }
    ;
    v.D = function() {
        this.fd();
        this.o = this.j();
        this.f = mg(na, {
            frameBorder: 0,
            "class": "goog-te-menu-frame skiptranslate",
            title: Z.Jf
        });
        this.f.style.visibility = fc;
        Q(this.f, !1);
        document.body.appendChild(this.f)
    }
    ;
    v.Wf = function() {
        var a = pd.test(Fq) ? Sb : "ltr"
          , b = sr(this.a.Va)
          , c = V(this, "menuBody");
        this.l.w(this.f, Ab, this.yj);
        hr(this.f, D(function() {
            var d = Gg(this.f);
            var e = rk(ja + X(Fk(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(c) + '" class="goog-te-menu"></div></body>');
            e = jk(e);
            d.write(me(e));
            d.close()
        }, this))
    }
    ;
    v.yj = function() {
        this.c = new $f(Gg(this.f));
        this.L = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, Ta, this.Me);
        I ? this.l.w(this.f, La, this.Bd) : this.l.w(Hg(this.f), La, this.Bd);
        this.dispatchEvent(Ab)
    }
    ;
    v.Z = function() {
        Du.m.Z.call(this);
        wg(this.f);
        this.o = this.P = this.h = this.L = this.c = this.f = null
    }
    ;
    v.og = function(a) {
        this.g != a.currentTarget.value && (this.ya(a.currentTarget.value),
        this.dispatchEvent(Pa));
        this.Bd()
    }
    ;
    v.Me = function() {
        Eu(this);
        Hg(this.f).focus();
        this.W = !0
    }
    ;
    v.Bd = function() {
        this.W && (this.W = !1,
        Eu(this, !1),
        lg(O(this.o)).focus())
    }
    ;
    v.mf = hc();
    v.nf = hc();
    function Eu(a, b) {
        if ("undefined" == typeof b || b) {
            a.nf();
            b = fh(a.o, window);
            var c = b.y + a.o.offsetHeight
              , d = b.y - a.C.height
              , e = b.x
              , f = b.x + a.o.offsetWidth - a.C.width;
            if (I && !L("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                f -= h.offsetLeft
            } else
                h = jg(document),
                c -= h.y,
                d -= h.y,
                e -= h.x,
                f -= h.x;
            h = hg(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            pd.test(Fq) ? b.x = 0 <= f ? f : e : b.x = e <= h.width - a.C.width ? e : f;
            b.x > h.width - a.C.width && (b.x = h.width - a.C.width);
            0 > b.x && (b.x = 0);
            Zg(a.f, b);
            Q(a.f, !0);
            Fu(a)
        } else
            a.mf(),
            Q(a.f, !1)
    }
    v.Aa = t("g");
    v.Tc = function(a) {
        this.c.Qc(this.L);
        Q(this.f, !0);
        this.ca = a;
        this.h = [];
        for (var b in a)
            if (a[b] !== Object.prototype[b])
                if ("---" == a[b]) {
                    var c = {
                        link: this.c.D(g, {
                            className: "goog-te-menu2-separator",
                            value: b
                        }),
                        Fi: !0
                    };
                    this.h.push(c)
                } else {
                    c = {
                        link: this.c.D("A", {
                            className: ob,
                            href: xb,
                            value: b
                        })
                    };
                    this.h.push(c);
                    var d = this.c.D(g, {
                        style: "white-space:nowrap"
                    });
                    this.c.appendChild(c.link, d);
                    this.a.Xd && this.c.appendChild(d, this.c.D(ua, {
                        className: "indicator"
                    }, "\u203a"));
                    this.c.appendChild(d, this.c.D(ua, {
                        className: "text"
                    }, a[b]));
                    this.l.w(c.link, Ta, this.og)
                }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.qf) / this.a.qf) + 1;
        this.P = this.c.D("TABLE", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
        });
        c = this.c.D("TBODY");
        b = this.c.D("TR", {
            valign: "top"
        });
        this.L.className = "goog-te-menu2";
        this.c.appendChild(this.L, this.P);
        this.c.appendChild(this.P, c);
        this.c.appendChild(c, b);
        for (d = c = 0; c < a; ++c) {
            var e = this.c.D("TD");
            this.c.appendChild(b, e);
            for (var f = 0; 11 > f && d < this.h.length; ++f,
            ++d)
                this.c.appendChild(e, this.h[d].link);
            c != a - 1 && (e = this.c.D("TD", {
                "class": "goog-te-menu2-colpad"
            }, "\u00a0"),
            this.c.appendChild(b, e))
        }
        this.g = null;
        this.ya(this.h[0].link.value);
        Fu(this);
        Q(this.f, !1)
    }
    ;
    v.$d = function(a) {
        a = "undefined" == B(a) ? this.g : a;
        return this.ca[a]
    }
    ;
    v.pf = hc();
    v.ya = function(a) {
        if (this.g != a) {
            this.$d(a) && (this.g = a,
            this.pf());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.Fi || (c.link.className = c.link.value == a && this.a.Xd ? ob : "goog-te-menu2-item")
            }
        }
    }
    ;
    function Fu(a) {
        oh(a.L, nh(a.P));
        oh(a.f, nh(a.L));
        a.C = nh(a.f)
    }
    function Gu(a, b) {
        Du.call(this, a, b)
    }
    E(Gu, Du);
    v = Gu.prototype;
    v.fd = function() {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = nb;
        a.href = xb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        this.J = this.b.D("IMG", {
            src: wb,
            alt: "",
            style: "background-image:url(" + Qq + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.J);
        this.S(a)
    }
    ;
    v.mf = function() {
        P(this.J, Ka, "-14px 0px")
    }
    ;
    v.nf = function() {
        P(this.J, Ka, "0px 0px")
    }
    ;
    v.Z = function() {
        Gu.m.Z.call(this);
        this.J = this.H = null
    }
    ;
    v.pf = function() {
        this.b.ib(this.H, this.$d(this.g) || "")
    }
    ;
    v.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Hu(a, b) {
        Du.call(this, a, b)
    }
    E(Hu, Du);
    v = Hu.prototype;
    v.fd = function() {
        var a = this.b.D("a", {
            "aria-haspopup": "true"
        });
        a.className = nb;
        a.href = xb;
        this.H = this.b.D(ua);
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {
            src: wb,
            alt: "",
            width: 1,
            height: 1
        }));
        a.appendChild(this.b.D(ua, {
            style: "border-left:1px solid #bbb"
        }, "\u200b"));
        a.appendChild(this.b.D("IMG", {
            src: wb,
            alt: "",
            width: 1,
            height: 1
        }));
        this.J = this.b.D("span", {
            style: "color:#767676",
            "aria-hidden": "true"
        }, "\u25bc");
        a.appendChild(this.J);
        this.S(a)
    }
    ;
    v.mf = function() {
        P(this.J, "color", "#9b9b9b")
    }
    ;
    v.nf = function() {
        P(this.J, "color", "#d5d5d5")
    }
    ;
    v.Z = function() {
        Hu.m.Z.call(this);
        this.J = this.H = null
    }
    ;
    v.pf = function() {
        this.b.ib(this.H, this.$d(this.g) || "")
    }
    ;
    v.Db = function(a) {
        this.Tc.call(this, a)
    }
    ;
    function Iu(a, b) {
        Du.call(this, a, b);
        this.a.Xd = !1
    }
    E(Iu, Du);
    Iu.prototype.fd = function() {
        var a = Rg(this.b, $a);
        a.className = "goog-te-button";
        var b = this.b.D(g, {
            style: "background: url(" + Pq + ") repeat-x 0 -39px"
        });
        a.appendChild(b);
        this.H = Rg(this.b, Na);
        b.appendChild(this.H);
        this.S(a)
    }
    ;
    Iu.prototype.Wg = function(a) {
        tg(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\u00a0\u25bc")))
    }
    ;
    Iu.prototype.Z = function() {
        Iu.m.Z.call(this);
        this.H = null
    }
    ;
    Iu.prototype.og = function(a) {
        this.ya(a.currentTarget.value);
        this.dispatchEvent(Pa);
        this.Bd()
    }
    ;
    function Ju(a, b) {
        T.call(this, b);
        this.a = a && fd(a) || {};
        this.c = new ji(this)
    }
    E(Ju, T);
    var Ku = {
        vk: 0,
        Wj: 1,
        kk: 2
    };
    v = Ju.prototype;
    v.D = function() {
        var a = Rg(this.b, $a);
        M(a, Ub);
        Q(a, !1);
        if (2 == this.a.Rb)
            a.innerHTML = ks({
                id: V(this, Yb),
                Qg: "",
                Pg: ""
            });
        else {
            var b = Z.rh(ls() || "");
            a.innerHTML = ks({
                id: V(this, Yb),
                Qg: "",
                Pg: qr(1 == this.a.Rb ? "&nbsp;&nbsp;" + b : b)
            })
        }
        this.S(a)
    }
    ;
    v.O = function() {
        Ju.m.O.call(this);
        this.f = 2 == this.a.Rb ? new Hu(null,this.b) : new Cu(this.b);
        this.c.w(this.f, Pa, dr(this, Sa));
        this.c.w(this.f, Ab, this.wj);
        var a = this.b.j(V(this, Yb));
        if (2 == this.a.Rb) {
            var b = this.b.D("IMG", {
                src: wb,
                "class": "goog-te-gadget-icon",
                alt: ""
            });
            b.style.display = 'none';
            b.style.backgroundImage = "url(" + Qq + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D(ua, {
                style: "vertical-align: middle"
            });
            a.appendChild(b);
            a.appendChild(c);
            this.f.fa(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple"
        } else
            this.f.fa(a),
            1 == this.a.Rb && (a.style.display = "inline")
    }
    ;
    v.wj = function() {
        if (2 == this.a.Rb) {
            var a = this.f
              , b = this.b.j(V(this, Yb));
            a.l.ba(a.o, Ta, a.Me);
            a.o = b;
            a.l.w(a.o, Ta, a.Me)
        }
        this.dispatchEvent(Ab)
    }
    ;
    v.Z = function() {
        Ju.m.Z.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null
    }
    ;
    v.oa = function() {
        return this.f.Aa()
    }
    ;
    v.ta = function(a) {
        "" == a ? this.H && this.f.Db(this.H) : this.C && this.f.Db(this.C);
        this.f.ya(a)
    }
    ;
    v.I = function(a) {
        Q(this.j(), a)
    }
    ;
    v.ka = function(a) {
        this.f.ka(a)
    }
    ;
    v.xf = function(a, b) {
        this.H = a;
        this.C = b
    }
    ;
    function Lu() {
        Zf()
    }
    Lu.prototype.fa = function(a) {
        a = a({}, {});
        this.a(null, a && a.Ib)
    }
    ;
    function Mu(a, b) {
        b = b || {};
        var c = b.top
          , d = b.left
          , e = b.bottom
          , f = b.right
          , h = b.id;
        b = sk("." + Gk(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + Gk(c) + "px; _top:expression((" + Gk(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + Gk(d) + "px; _left:expression((" + Gk(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + Gk(e) + "px; _top:expression((-" + Gk(e) + ca + String(h).replace(Mk, Kk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (f || 0 == f ? "right:" + Gk(f) + "px; _left:expression((-" + Gk(f) + ca + String(h).replace(Mk, Kk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.a(null, b.Ib);
        return be(b.toString())
    }
    Lu.prototype.a = A;
    function Nu(a, b) {
        T.call(this, b);
        this.a = a && fd(a) || {};
        this.a.Va || (this.a.Va = Tq);
        this.c = new ji(this)
    }
    E(Nu, T);
    var Ou = {
        pk: 1,
        qk: 2,
        Kj: 3,
        Jj: 4
    };
    v = Nu.prototype;
    v.D = function() {
        var a = Rg(this.b, $a);
        this.ga = !1;
        Q(a, !1);
        var b = V(this, Wa);
        a.innerHTML = rk('<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
        this.S(a)
    }
    ;
    v.O = function() {
        Nu.m.O.call(this);
        var a = pd.test(Fq) ? Sb : "ltr"
          , b = sr(this.a.Va)
          , c = V(this, dc);
        this.j().id = V(this, "floatContainer");
        var d = {
            id: this.j().id,
            className: "goog-te-ftab-float"
        };
        this.j().className += " goog-te-ftab-float";
        switch (this.a.kd) {
        case 2:
            var e = hb;
            d.top = 0;
            d.right = 20;
            break;
        case 3:
            e = gb;
            d.bottom = 0;
            d.right = 20;
            break;
        case 4:
            e = gb;
            d.bottom = 0;
            d.left = 20;
            break;
        default:
            e = hb,
            d.top = 0,
            d.left = 20
        }
        ih(Mu(new Lu, d), this.j());
        this.l = this.b.j(V(this, Wa));
        this.c.w(this.l, Ab, this.xj);
        hr(this.l, D(function() {
            var f = Gg(this.l);
            var h = e;
            h = rk(ja + X(Fk(b)) + '"></head><body class="goog-te-ftab ' + X(h) + '" scroll="no" style="overflow:hidden" dir="' + X(a) + '"><a id="' + X(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(Dk(wb)) + aa + X(Dk(Qq)) + ');background-position:-65px 0px"><span>' + qk(Z.Lf) + "</span></a></body>");
            h = jk(h);
            f.write(me(h));
            f.close()
        }, this))
    }
    ;
    v.xj = function() {
        this.f = (new $f(Gg(this.l))).j(V(this, dc));
        this.c.w(this.f, Ta, dr(this, "clk_trans"));
        Q(this.j(), !0);
        var a = nh(this.f);
        Q(this.j(), !1);
        oh(this.l, a);
        oh(this.j(), a);
        this.dispatchEvent(Ab)
    }
    ;
    v.Z = function() {
        Nu.m.Z.call(this);
        this.c.M();
        this.c = null;
        wg(this.l);
        this.f = this.l = null
    }
    ;
    v.isVisible = t("ga");
    v.I = function(a) {
        this.ga = a;
        Q(this.j(), a)
    }
    ;
    function Pu(a, b) {
        T.call(this, b);
        this.h = new ji(this);
        this.a = a && fd(a) || {};
        this.a.Va || (this.a.Va = Tq);
        this.a.zf = !1;
        P(this.b.a.body, Mb, "relative");
        uf || P(this.b.a.body, "minHeight", "100%");
        P(this.b.a.documentElement, "height", "100%");
        P(this.b.a.body, "top", "0px");
        I && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10),
        window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40)
    }
    E(Pu, T);
    v = Pu.prototype;
    v.fa = function() {
        var a = this.b.a.body.firstChild;
        zi(this, a.parentNode, a)
    }
    ;
    v.D = function() {
        var a = Rg(this.b, $a);
        this.ga = !1;
        Q(a, !1);
        M(a, Ub);
        var b = V(this, Wa);
        a.innerHTML = rk('<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
        this.S(a)
    }
    ;
    v.O = function() {
        Pu.m.O.call(this);
        var a = pd.test(Fq) ? Sb : "ltr", b = sr(this.a.Va), c = V(this, "promptSection"), d = V(this, "confirm"), e = V(this, Nb), f = V(this, "progressValue"), h = V(this, "cancel"), k = V(this, "finishSection"), l = V(this, "restore"), m = V(this, "errorSection"), n = V(this, "errorContent"), r = V(this, "close"), w = V(this, "noAutoPopup"), G, F = [];
        this.a.zf && F.push(js({
            id: V(this, Ob)
        }));
        F.push(js({
            id: V(this, Pb)
        }));
        var da = qr(Z.Bh.apply(null, F));
        F = [];
        this.a.zf && F.push(js({
            id: V(this, bb)
        }));
        F.push(js({
            id: V(this, cb)
        }));
        var cm = qr(Z.wh.apply(null, F));
        this.a.ah && (G = this.a.ah);
        this.l = this.b.j(V(this, Wa));
        this.h.w(this.l, Ab, this.uj);
        hr(this.l, D(function() {
            var hf = Gg(this.l);
            var sb = G;
            sb = rk(ja + X(Fk(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle>' + (sb ? '<td width=1><img src="' + X(Dk(wb)) + '" width="9" height="15" title="' + X(sb) + '" alt="' + X(sb) + aa + X(Dk(Qq)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + qk(da) + ia + X(d) + '"><b>' + qk(Z.Lf) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(w) + '"></button></div></div></td></tr><tr id="' + X(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + qk(Z.xh) + '&nbsp;<span dir="ltr">(<b id="' + X(f) + '"></b>%)</span>&nbsp;<img src="' + X(Dk(Sq)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(h) + '">' + qk(Z.Gf) + ha + X(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + qk(cm) + ia + X(l) + '">' + qk(Z.sh) + ha + X(m) + '" style="display:none" valign=middle><td><span id="' + X(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + X(r) + '" class="goog-close-link" href="javascript:void(0)" title="' + X(Z.Hf) + '"><img src="' + X(Dk(wb)) + '" width="15" height="15" alt="' + X(Z.Hf) + aa + X(Dk(Qq)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
            sb = jk(sb);
            hf.write(me(sb));
            hf.close()
        }, this))
    }
    ;
    v.uj = function() {
        this.c = new $f(Gg(this.l));
        Qu(this, Z.If);
        if (this.a.Va == Tq) {
            var a = "url(" + Pq + ")";
            P(this.c.a.body, Ja, a);
            for (var b = this.c.a.getElementsByTagName(Na), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                P(d, Ja, a);
                P(d, "backgroundRepeat", "repeat-x");
                P(d, Ka, "0 -39px")
            }
        }
        this.a.zf && (this.g = new Gu(this.a,this.c));
        this.f = new Gu(this.a,this.c);
        this.o = new Iu(this.a,this.c);
        this.h.w(this.c.j(V(this, "confirm")), Ta, dr(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), Ta, dr(this, "clk_cancel"));
        this.h.w(this.c.j(V(this, "restore")), Ta, dr(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), Ta, dr(this, "clk_close"));
        this.L = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.L, Ta, dr(this, "clk_no_ap"));
        this.g && this.h.w(this.g, Pa, dr(this, "chg_src_lang"));
        this.h.w(this.f, Pa, dr(this, Sa));
        this.h.w(this.o, Pa, this.pi);
        a = new Yq(D(this.vj, this));
        this.g && this.h.w(this.g, Ab, a.register());
        this.h.w(this.f, Ab, a.register());
        this.h.w(this.o, Ab, a.register());
        a.finish();
        this.g && this.g.fa(this.c.j(V(this, Ob)));
        this.f.fa(this.c.j(V(this, Pb)));
        this.o.fa(this.c.j("options"))
    }
    ;
    v.vj = function() {
        this.o.Wg(Z.ph);
        this.o.Tc({
            turn_off_site: Z.zh,
            s1: "---",
            learn_more: Z.oh
        });
        this.dispatchEvent(Ab)
    }
    ;
    v.pi = function() {
        switch (this.o.Aa()) {
        case "learn_more":
            window.open(Wq, "_blank");
            break;
        case "turn_off_site":
            this.dispatchEvent(Ua)
        }
    }
    ;
    v.Z = function() {
        this.I(!1);
        Pu.m.Z.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(),
        this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        wg(this.l);
        this.yc = this.c = null
    }
    ;
    v.cb = function() {
        return this.g ? this.g.Aa() : ""
    }
    ;
    v.oa = function() {
        return this.f.Aa()
    }
    ;
    v.Tb = function(a) {
        this.g && this.g.ya(a);
        this.J && this.J[a] && this.c.ib(this.L, Z.yh(this.J[a]))
    }
    ;
    v.ta = function(a) {
        this.f.ya(a)
    }
    ;
    function Ru(a, b, c, d) {
        if (a.yc != b) {
            a.yc = b;
            if (0 == b) {
                a.g && Bu(a.g, a.c.j(V(a, Ob)));
                if (a.H) {
                    var e = a.oa();
                    a.f.Db(a.H);
                    a.ta(e)
                }
                Bu(a.f, a.c.j(V(a, Pb)))
            } else
                2 == b && (a.g && Bu(a.g, a.c.j(V(a, bb))),
                a.C && (e = a.oa(),
                a.f.Db(a.C),
                a.ta(e)),
                Bu(a.f, a.c.j(V(a, cb))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, Nb));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var f in e)
                e[f] !== Object.prototype[f] && Q(e[f], f == b)
        }
        c && a.I(!0);
        a.L.parentNode.parentNode.style.display = d ? "block" : q
    }
    v.isVisible = t("ga");
    v.I = function(a) {
        if (this.ga != a) {
            this.ga = a;
            if (I)
                var b = parseInt("0" + this.b.a.body.leftMargin, 10)
                  , c = parseInt("0" + this.b.a.body.topMargin, 10);
            var d = "BackCompat" == this.b.a.compatMode;
            a ? (P(this.b.a.body, "top", "40px"),
            Q(this.j(), !0),
            I && (L("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0,
            d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40,
            window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b,
            window._bannerquirkfixtop = -c - 40))) : (P(this.b.a.body, "top", "0px"),
            Q(this.j(), !1),
            d && 40 <= c && (this.b.a.body.topMargin = c - 40))
        }
    }
    ;
    v.vf = function(a) {
        this.c.ib(this.c.j(V(this, "progressValue")), a)
    }
    ;
    function Qu(a, b) {
        a.c.ib(a.c.j(V(a, "errorContent")), b)
    }
    v.xf = function(a, b) {
        this.H = a;
        this.C = b;
        this.f.Db(a)
    }
    ;
    function Su(a, b) {
        R.call(this);
        B(a) == Wb && (b = a,
        a = {});
        B(b) == Wb && (b = ag(document, String(b)));
        this.ca = b;
        this.h = new ji(this);
        this.Vb = this.W = void 0;
        a = Object(a);
        this.g = Ia;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
        b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            le: b,
            Zf: !1,
            me: null,
            bd: null,
            Se: [],
            Yf: [],
            Lh: !1,
            ic: !1,
            $a: "",
            $f: !1,
            ve: "",
            Rb: 0,
            Uf: !1
        };
        this.qa = {
            Va: Tq,
            ah: "https://" == Oq ? Z.uh : null
        };
        this.P = {
            Va: Tq,
            kd: null
        };
        a && ("autoDisplay"in a && (this.a.le = this.a.le && !!a.autoDisplay),
        "multilanguagePage"in a && (this.a.ic = !!a.multilanguagePage),
        "gaTrack"in a && (this.a.$f = !!a.gaTrack),
        "layout"in a && (this.a.Rb = a.layout),
        a.pageLanguage && (this.a.Vd = er(a.pageLanguage)),
        a.includedLanguages && (this.a.Se = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.a.Yf = a.excludedLanguages.split(",")),
        this.a.Vd && (this.g = this.a.Vd),
        a.key && (this.a.$a = a.key),
        a.gaId && (this.a.ve = a.gaId),
        this.P.kd = Number(a.floatPosition) || this.P.kd,
        "disableAutoTranslation"in a && (this.a.Uf = !!a.disableAutoTranslation),
        a.jwtToken && (this.W = new Wr(a.jwtToken)),
        a.jwtTokenProvider && (this.W = new Xr(a.jwtTokenProvider)),
        a.translateErrorHandler && (this.Vb = a.translateErrorHandler));
        !this.a.Uf && Tu(this) && (this.a.Zf = !0);
        this.s = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
            for (this.s = {},
            a = Ie(a[2]).split("|"),
            b = 0; b < a.length; ++b) {
                var c = a[b].split("=");
                c[0] && (this.s[c[0]] = c[1])
            }
        this.ua = new mt({
            $a: this.a.$a,
            Kb: 1,
            yf: !0,
            Fk: Vq
        },{
            client: Lq,
            u: window.location.href
        });
        this.B = new zu(void 0,this.ua,void 0,void 0,this.a.$a,void 0,void 0,new mu,this.W,this.Vb);
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.K = new Yq(D(this.ji, this));
        this.C = new Yq(D(this.mi, this));
        this.L = new $q(D(this.Gi, this));
        this.b = new Pu(this.qa);
        this.B.pd(this.K.register(D(this.ii, this)), Fq);
        this.ca ? (this.f = new Ju(this.a),
        this.h.w(this.f, Ab, this.K.register()),
        this.h.w(this.f, Sa, ar(this.L, this.C.delay(D(this.hi, this)))),
        this.f.fa(this.ca)) : this.P.kd && (this.l = new Nu(this.P),
        this.h.w(this.l, Ab, this.K.register()),
        this.h.w(this.l, "clk_trans", ar(this.L, this.C.delay(D(this.gi, this)))),
        this.l.fa());
        !this.a.Vd && this.a.Lh && this.B.ld(this.K.register(D(this.di, this)));
        this.K.finish()
    }
    E(Su, R);
    function Tu(a) {
        function b(f, h) {
            if (f = Ie(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (f[3])
                    return h.a.me = f[2],
                    h.a.bd = f[3],
                    !0;
                if (f[6])
                    return h.a.me = f[5],
                    h.a.bd = f[6],
                    !0
            }
            return !1
        }
        var c = {
            url: function() {
                var f = window.location.href.match(/#.*googtrans(.*)/);
                return f && f[1]
            },
            cookie: function() {
                var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                return f && f[2]
            }
        }, d;
        for (d in c)
            if (c[d] !== Object.prototype[d]) {
                var e = c[d]();
                if (e && b(e, a))
                    return d
            }
        return ""
    }
    function Uu(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length; )
            c.shift();
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date,
        b.setTime(b.getTime() - 1),
        a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c
        } catch (d) {}
    }
    function Vu(a, b) {
        var c = null;
        y(b) && (c = y(a) ? "/" + a + "/" + b : "/" + b);
        Uu("googtrans", c)
    }
    v = Su.prototype;
    v.ii = function(a) {
        this.c = er(Fq);
        this.H = a || {};
        this.o = {};
        this.J = {};
        a = !this.a.Se.length;
        var b = Xq(this.a.Se)
          , c = Xq(this.a.Yf);
        this.o[Fq] = "";
        this.J[Fq] = "";
        for (var d in this.H.tl)
            this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.J[d] = this.H.tl[d],
            d == this.a.Vd && !this.a.ic) || (this.o[d] = this.H.tl[d]);
        this.o[Fq] || delete this.o[Fq];
        this.J[Fq] || delete this.J[Fq];
        this.la = fd(this.H.sl)
    }
    ;
    v.di = function(a) {
        a && (this.g = er(a))
    }
    ;
    v.ji = function() {
        delete this.K;
        if (this.H) {
            this.g = this.g || this.a.me;
            this.c = this.a.bd || this.c;
            var a = this.a.Zf || this.a.le && this.g != this.c && !(this.g in Jq) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.la[this.g] || (a = !1,
            this.g = Ia);
            if (!this.o[this.c])
                if (a = !1,
                this.o.en)
                    this.c = "en";
                else
                    for (var b in this.o)
                        if (this.o[b] !== Object.prototype[b]) {
                            this.c = b;
                            break
                        }
            if (this.f) {
                var c = this.o
                  , d = {
                    "": Z.th
                };
                for (b in c)
                    c[b] !== Object.prototype[b] && (d[b] = c[b]);
                this.f.xf(d, this.J);
                this.f.ta("")
            }
            !Hq && a ? this.a.bd ? ar(this.L, this.C.delay(D(this.Wd, this, !0, !0))).call() : (this.G = !0,
            ar(this.L, this.C.delay(D(this.Wd, this))).call(),
            gr("te_ap", {
                sl: this.g
            })) : (this.l && this.l.I(!0),
            this.f && this.f.I(!0));
            window.google.translate.TranslateService && this.ka(!1);
            this.L.finish()
        }
    }
    ;
    v.mi = function() {
        var a = this.b
          , b = this.la;
        a.g && a.g.Db(b);
        a.J = b;
        this.b.xf(this.o, this.J);
        this.b.Tb(this.g);
        this.b.ta(this.c);
        this.h.w(this.b, "clk_confirm", this.Yh);
        this.h.w(this.b, "clk_cancel", this.Xh);
        this.h.w(this.b, "clk_restore", this.Ke);
        this.h.w(this.b, "clk_close", this.Ad);
        this.h.w(this.b, "clk_no_ap", this.Zh);
        this.h.w(this.b, Ua, this.$h);
        this.h.w(this.b, "chg_src_lang", this.jg);
        this.h.w(this.b, Sa, this.jg);
        this.f && this.f.I(!0)
    }
    ;
    v.Gi = function() {
        this.h.w(this.b, Ab, this.C.register());
        this.b.fa();
        this.C.finish()
    }
    ;
    v.F = function() {
        this.B.restore();
        Su.m.F.call(this);
        this.B.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.ca = this.f = null
    }
    ;
    v.Yh = function() {
        !this.b.isVisible() || !this.a.ic && mr(this.g, this.b.oa()) || (this.G && gr("te_apt", {
            sl: this.g
        }),
        Wu(this, !1),
        this.f && this.f.ta(this.b.oa()))
    }
    ;
    v.Xh = function() {
        this.b.isVisible() && (Xu(this),
        Ru(this.b, 0),
        this.f && this.f.ta(""))
    }
    ;
    v.Ke = function() {
        this.b.isVisible() && (Xu(this),
        Ru(this.b, 0));
        this.f && this.f.ta("")
    }
    ;
    v.Ad = function() {
        this.b.isVisible() && (this.G && (this.G = !1,
        gr("te_apc", {
            sl: this.g
        })),
        Xu(this),
        this.b.I(!1),
        this.f && this.f.ta(""),
        this.l && this.l.I(!0))
    }
    ;
    v.Zh = function() {
        this.b.isVisible() && (this.s["o" + this.g] = "1",
        gr("te_apr", {
            sl: this.g
        }),
        this.G = !1,
        this.Ad())
    }
    ;
    v.$h = function() {
        if (this.b.isVisible()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                a = [];
                for (var b in this.s)
                    this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                a = a.join("|")
            }
            Uu("googtransopt", a);
            this.Ad()
        }
    }
    ;
    v.jg = function() {
        this.b.isVisible() && (!this.a.ic && mr(this.g, this.b.oa()) ? this.Ke() : (this.g = this.b.cb() || this.g,
        this.c = this.b.oa(),
        2 == this.b.yc && (this.f && this.f.ta(this.b.oa()),
        Wu(this))))
    }
    ;
    v.Wd = function(a, b) {
        this.b.isVisible() || (this.l && this.l.I(!1),
        a ? Wu(this, b) : Ru(this.b, 0, !0, this.G))
    }
    ;
    v.oj = function(a, b) {
        ar(this.L, this.C.delay(D(this.Wd, this, a, b))).call()
    }
    ;
    v.gi = function() {
        this.Wd(2 == this.b.yc)
    }
    ;
    v.hi = function() {
        this.f.oa() ? !this.a.ic && mr(this.g, this.b.oa()) ? this.Ke() : (this.c = this.f.oa(),
        this.b.ta(this.c),
        Wu(this)) : this.f.ta(this.c)
    }
    ;
    function Wu(a, b) {
        if (window.google.translate.TranslateService)
            try {
                window.google.translate.TranslateService.getInstance().restore()
            } catch (c) {}
        Vu(a.g, a.c);
        a.G = !1;
        !b && a.g in Jq && gr("te_ape", {
            sl: a.g
        });
        a.b.vf(0);
        Ru(a.b, 1, !0);
        a.B.Xg(!!b);
        window.setTimeout(D(a.B.ce, a.B, a.a.ic ? Ia : a.g, a.c, D(a.vi, a), void 0, void 0), 0);
        if (a.a.$f && window._gaq && window._gat)
            try {
                a.a.ve ? window._gat._getTracker(a.a.ve)._trackEvent(ma, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(ma, "Translate", a.c)
            } catch (c) {}
    }
    v.vi = function(a, b, c) {
        B(this.ra) == p && this.ra();
        this.b.isVisible() && 1 == this.b.yc && (c ? (Xu(this),
        Ru(this.b, -1, !0),
        2 == c ? Qu(this.b, Z.nh) : Qu(this.b, Z.If)) : (this.b.vf(a),
        b && (this.f && this.f.ta(this.c),
        this.b.Tb(this.g),
        Ru(this.b, 2))))
    }
    ;
    function Xu(a) {
        Vu();
        window.setTimeout(D(a.B.restore, a.B, null), 0)
    }
    v.ka = function(a) {
        a || this.Ad();
        this.f && this.f.ka(a);
        this.l && this.l.I(a)
    }
    ;
    function Yu(a) {
        if (a && (a = String(a),
        a = a.split("."),
        a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b))
                    return;
                b = b[d]
            }
            return b
        }
    }
    ;var Zu = Yu("google.translate.m");
    if (Zu)
        for (var $u in Z)
            if (Z[$u] !== Object.prototype[Z[$u]] && Z[$u]) {
                var av = Z[$u]();
                Z[$u] = Zu[av] ? Zu[av] : is
            }
    if (1 == Kq) {
        var bv = null
          , cv = function(a) {
            if (!bv) {
                var b, c, d, e;
                a && ("key"in a && (b = a.key),
                "serverParams"in a && (c = a.serverParams),
                "timeInfo"in a && (d = a.timeInfo),
                "remoteApiProxyHandlers"in a && (e = a.remoteApiProxyHandlers),
                (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                a = 0;
                if ("te_lib" == Lq || Ye)
                    a = 3;
                bv = new zu(void 0,new mt({
                    $a: b,
                    Kb: a,
                    yf: !0,
                    trackVisibility: "tvis" == c
                }),void 0,void 0,b,c,d,new mu,void 0,void 0,e);
                bv.constructor = A;
                bv.isAvailable = bv.Ua;
                bv.getSupportedLanguages = bv.pd;
                bv.getPageLanguage = bv.ld;
                bv.setClickThrough = bv.Xg;
                bv.translatePage = bv.ce;
                bv.restore = bv.restore;
                bv.isTranslating = bv.tj;
                bv.setCheckVisibility = bv.lj
            }
            return bv
        };
        cv.getInstance = function() {
            return bv
        }
        ;
        Fc("google.translate.TranslateService", cv);
        Fc("google.translate.RemoteApiProxyHandlers", Cq);
        Cq.isSupported = Cq.prototype.a;
        Cq.send = Cq.prototype.send;
        Cq.cancel = Cq.prototype.cancel;
        gr("te_li")
    } else {
        var dv = null
          , ev = function(a, b) {
            dv || (dv = new Su(a,b),
            dv.constructor = A);
            return dv
        };
        ev.getInstance = function() {
            return dv
        }
        ;
        Fc("google.translate.TranslateElement", ev);
        Su.prototype.dispose = Su.prototype.M;
        Su.prototype.showBanner = Su.prototype.oj;
        Su.prototype.setEnabled = Su.prototype.ka;
        Fc("google.translate.TranslateElement.FloatPosition", Ou);
        Ou.TOP_LEFT = 1;
        Ou.TOP_RIGHT = 2;
        Ou.BOTTOM_RIGHT = 3;
        Ou.BOTTOM_LEFT = 4;
        Fc("google.translate.TranslateElement.InlineLayout", Ku);
        Ku.VERTICAL = 0;
        Ku.HORIZONTAL = 1;
        Ku.SIMPLE = 2
    }
    (function() {
        for (var a in Object.prototype) {
            Zc = function(d, e, f) {
                for (var h in d)
                    d[h] !== Object.prototype[h] && e.call(f, d[h], h, d)
            }
            ;
            break
        }
        var b = Ec()
          , c = Yu(Gq);
        c && B(c) == p && (1 == Kq ? c() : function e() {
            var f = document.readyState;
            "undefined" == B(f) || f == Va || "interactive" == f || 2E4 <= Ec() - b ? c() : window.setTimeout(e, 500)
        }())
    }
    )();
}
).call(window)
