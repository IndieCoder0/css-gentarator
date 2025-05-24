const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./CT3MLxkB.js", "./Bd7YyUO7.js", "./DnGVcCox.js", "./AppInput.C0iHTG0e.css", "./DPMsOK0k.js", "./CNrj3ZmR.js", "./Dzb3jdvO.js", "./D5lPbg0-.js", "./D_D_KPs8.js", "./DtwhktPV.js", "./CdSnYwyj.js", "./DJlm_hyW.js", "./CB81-RX4.js", "./Dnb2Gvzr.js", "./D0mpCo43.js", "./C8BJHQ37.js", "./eXWNli8h.js", "./CGrgyLC8.js", "./CO-iQIiX.js", "./DNSIB097.js", "./D3yKnveS.js", "./BmXPLnZQ.js", "./8VAo5oMs.js", "./DplrtLGB.js", "./BQguRQ_Q.js", "./DlAUqK2U.js", "./D6m6k_xx.js", "./BgF3UY6u.js", "./DbSnibly.js", "./DwtGsmW5.js", "./CgCn6qVr.js", "./BJI5yTQ7.js", "./BTZ45fU4.js", "./CYqJj7J6.js", "./Bs5FqREO.js", "./D7vVS2Hj.js", "./B705aMGX.js", "./0S1KI4k9.js", "./DnSbIYIz.js", "./D4mz8J-e.js", "./CTRlhk8X.js", "./pzZgpct-.js", "./CZ453KYi.js", "./Bkh7C-Ea.js", "./DA63HS7H.js", "./DYFrvEr6.js", "./CBltlzRu.js", "./BcPp-rPP.js", "./BDr71xLx.js", "./DY_Lr4HD.js", "./GfHinqAJ.js", "./C5NNCcPp.js", "./K_HXzQWF.js", "./BmjeTXPT.js", "./DI-LCzLi.js", "./Bh1j5J2y.js", "./CBYefRHJ.js", "./C7puVTLC.js", "./DhtZkKB_.js", "./ChAKhqYU.js", "./O7toQX6c.js", "./CSHnPalA.js", "./Bqwnsqpb.js", "./DER_uvtT.js", "./7S-1XT3o.js", "./DKENS7I1.js", "./CLrzz-e_.js", "./CxRUVVBe.js", "./d-WQTDHH.js", "./DyvW0mp4.js", "./DlYX7i6_.js", "./1ixlLFLh.js", "./D1Av-cSQ.js", "./p4IoLRNg.js", "./S9E5VGU7.js", "./A1l86awx.js", "./B72xjydA.js", "./DXbeiKZs.js", "./C_ufiNWI.js", "./RrWGhuw0.js", "./DhGhOeTa.js", "./yz51RUMJ.js", "./1wLL4xzt.js", "./fObW_NXH.js", "./B_Xkcjv_.js", "./C78LwHvU.js", "./Do0Kas1X.js", "./Cg6R2Rb8.js", "./BaIPomby.js", "./D6DCGT5R.js", "./BUiAYHY_.js", "./aD4W92Qy.js", "./B1aakGof.js", "./DKuIy7bX.js", "./BSzJ5VXm.js", "./DqAQvYay.js", "./DwmjaIIf.js", "./DU5Xcmuk.js", "./D8wOBlQi.js", "./BwqlpCf0.js", "./YhDPCd6F.js", "./Dl_uCcbV.js", "./BC3kxRAD.js", "./BZCWwJ1G.js", "./BuDmWEOs.js", "./DBPz_LTE.js", "./CpkVo2PE.js", "./C9utqbBN.js", "./C6ietlIX.js", "./BL4ioxTB.js", "./sqGDi4DY.js", "./j7DaoryI.js", "./C7dHw7tC.js", "./CmD2GYyl.js", "./BcH73Lin.js", "./CE8uaIdU.js", "./DW4aKTXg.js", "./DB77YJu1.js", "./BGfkDEE7.js", "./DUfdThAg.js", "./Ca1cagOn.js", "./DZtsku03.js", "./B1P0tIHE.js", "./BUngZ1as.js", "./BJqJn9WK.js", "./C4dDATTa.js", "./HrrAE4G2.js", "./DImk7cbi.js", "./D2rC0YpQ.js", "./DyZ1cJYn.js", "./DFh-FqHN.js", "./CVOdyvAH.js", "./DBUXmbzI.js", "./CznVokBH.js", "./DNi5yf4o.js", "./Djsam_pd.js", "./IOnPVRG4.js", "./Dr9VCd9x.js", "./BkRTdZU0.js", "./generator.D7O0sRb4.css"]))) => i.map(i => d[i]);
var Pf = Object.defineProperty;
var Rf = (e, t, n) => t in e ? Pf(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var er = (e, t, n) => Rf(e, typeof t != "symbol" ? t + "" : t, n);
function vi(e, t) {
    const n = Object.create(null)
      , r = e.split(",");
    for (let o = 0; o < r.length; o++)
        n[r[o]] = !0;
    return o => !!n[o]
}
const Se = {}
  , Dn = []
  , Tt = () => {}
  , Mf = () => !1
  , Of = /^on[^a-z]/
  , Lr = e => Of.test(e)
  , _i = e => e.startsWith("onUpdate:")
  , Ne = Object.assign
  , Ai = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Lf = Object.prototype.hasOwnProperty
  , me = (e, t) => Lf.call(e, t)
  , ae = Array.isArray
  , Bn = e => Ir(e) === "[object Map]"
  , Tc = e => Ir(e) === "[object Set]"
  , If = e => Ir(e) === "[object RegExp]"
  , se = e => typeof e == "function"
  , Me = e => typeof e == "string"
  , Ro = e => typeof e == "symbol"
  , ke = e => e !== null && typeof e == "object"
  , Sc = e => (ke(e) || se(e)) && se(e.then) && se(e.catch)
  , xc = Object.prototype.toString
  , Ir = e => xc.call(e)
  , Df = e => Ir(e).slice(8, -1)
  , Cc = e => Ir(e) === "[object Object]"
  , wi = e => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ur = vi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Mo = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Bf = /-(\w)/g
  , St = Mo(e => e.replace(Bf, (t, n) => n ? n.toUpperCase() : ""))
  , Nf = /\B([A-Z])/g
  , qn = Mo(e => e.replace(Nf, "-$1").toLowerCase())
  , Oo = Mo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Qo = Mo(e => e ? `on${Oo(e)}` : "")
  , An = (e, t) => !Object.is(e, t)
  , dr = (e, t) => {
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , po = (e, t, n) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Ff = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Pc = e => {
    const t = Me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Os;
const Ta = () => Os || (Os = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lo(e) {
    if (ae(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = Me(r) ? jf(r) : Lo(r);
            if (o)
                for (const a in o)
                    t[a] = o[a]
        }
        return t
    } else if (Me(e) || ke(e))
        return e
}
const $f = /;(?![^(]*\))/g
  , Uf = /:([^]+)/
  , Hf = /\/\*[^]*?\*\//g;
function jf(e) {
    const t = {};
    return e.replace(Hf, "").split($f).forEach(n => {
        if (n) {
            const r = n.split(Uf);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function gt(e) {
    let t = "";
    if (Me(e))
        t = e;
    else if (ae(e))
        for (let n = 0; n < e.length; n++) {
            const r = gt(e[n]);
            r && (t += r + " ")
        }
    else if (ke(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Vf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Gf = vi(Vf);
function Rc(e) {
    return !!e || e === ""
}
const Et = e => Me(e) ? e : e == null ? "" : ae(e) || ke(e) && (e.toString === xc || !se(e.toString)) ? JSON.stringify(e, Mc, 2) : String(e)
  , Mc = (e, t) => t && t.__v_isRef ? Mc(e, t.value) : Bn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,o]) => (n[`${r} =>`] = o,
    n), {})
} : Tc(t) ? {
    [`Set(${t.size})`]: [...t.values()]
} : ke(t) && !ae(t) && !Cc(t) ? String(t) : t;
let Ze;
class Oc {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ze,
        !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ze;
            try {
                return Ze = this,
                t()
            } finally {
                Ze = n
            }
        }
    }
    on() {
        Ze = this
    }
    off() {
        Ze = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Ei(e) {
    return new Oc(e)
}
function Kf(e, t=Ze) {
    t && t.active && t.effects.push(e)
}
function Tn() {
    return Ze
}
function wn(e) {
    Ze && Ze.cleanups.push(e)
}
const ki = e => {
    const t = new Set(e);
    return t.w = 0,
    t.n = 0,
    t
}
  , Lc = e => (e.w & nn) > 0
  , Ic = e => (e.n & nn) > 0
  , zf = ({deps: e}) => {
    if (e.length)
        for (let t = 0; t < e.length; t++)
            e[t].w |= nn
}
  , Wf = e => {
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let r = 0; r < t.length; r++) {
            const o = t[r];
            Lc(o) && !Ic(o) ? o.delete(e) : t[n++] = o,
            o.w &= ~nn,
            o.n &= ~nn
        }
        t.length = n
    }
}
  , mo = new WeakMap;
let ir = 0
  , nn = 1;
const Sa = 30;
let mt;
const yn = Symbol("")
  , xa = Symbol("");
class Ti {
    constructor(t, n=null, r) {
        this.fn = t,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        Kf(this, r)
    }
    run() {
        if (!this.active)
            return this.fn();
        let t = mt
          , n = Qt;
        for (; t; ) {
            if (t === this)
                return;
            t = t.parent
        }
        try {
            return this.parent = mt,
            mt = this,
            Qt = !0,
            nn = 1 << ++ir,
            ir <= Sa ? zf(this) : Ls(this),
            this.fn()
        } finally {
            ir <= Sa && Wf(this),
            nn = 1 << --ir,
            mt = this.parent,
            Qt = n,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        mt === this ? this.deferStop = !0 : this.active && (Ls(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Ls(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
let Qt = !0;
const Dc = [];
function Jn() {
    Dc.push(Qt),
    Qt = !1
}
function Yn() {
    const e = Dc.pop();
    Qt = e === void 0 ? !0 : e
}
function qe(e, t, n) {
    if (Qt && mt) {
        let r = mo.get(e);
        r || mo.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = ki()),
        Bc(o)
    }
}
function Bc(e, t) {
    let n = !1;
    ir <= Sa ? Ic(e) || (e.n |= nn,
    n = !Lc(e)) : n = !e.has(mt),
    n && (e.add(mt),
    mt.deps.push(e))
}
function Dt(e, t, n, r, o, a) {
    const i = mo.get(e);
    if (!i)
        return;
    let s = [];
    if (t === "clear")
        s = [...i.values()];
    else if (n === "length" && ae(e)) {
        const l = Number(r);
        i.forEach( (c, u) => {
            (u === "length" || !Ro(u) && u >= l) && s.push(c)
        }
        )
    } else
        switch (n !== void 0 && s.push(i.get(n)),
        t) {
        case "add":
            ae(e) ? wi(n) && s.push(i.get("length")) : (s.push(i.get(yn)),
            Bn(e) && s.push(i.get(xa)));
            break;
        case "delete":
            ae(e) || (s.push(i.get(yn)),
            Bn(e) && s.push(i.get(xa)));
            break;
        case "set":
            Bn(e) && s.push(i.get(yn));
            break
        }
    if (s.length === 1)
        s[0] && Ca(s[0]);
    else {
        const l = [];
        for (const c of s)
            c && l.push(...c);
        Ca(ki(l))
    }
}
function Ca(e, t) {
    const n = ae(e) ? e : [...e];
    for (const r of n)
        r.computed && Is(r);
    for (const r of n)
        r.computed || Is(r)
}
function Is(e, t) {
    (e !== mt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function qf(e, t) {
    var n;
    return (n = mo.get(e)) == null ? void 0 : n.get(t)
}
const Jf = vi("__proto__,__v_isRef,__isVue")
  , Nc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ro))
  , Ds = Yf();
function Yf() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = pe(this);
            for (let a = 0, i = this.length; a < i; a++)
                qe(r, "get", a + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(pe)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Jn();
            const r = pe(this)[t].apply(this, n);
            return Yn(),
            r
        }
    }
    ),
    e
}
function Zf(e) {
    const t = pe(this);
    return qe(t, "has", e),
    t.hasOwnProperty(e)
}
class Fc {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._shallow = n
    }
    get(t, n, r) {
        const o = this._isReadonly
          , a = this._shallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return a;
        if (n === "__v_raw" && r === (o ? a ? up : jc : a ? Hc : Uc).get(t))
            return t;
        const i = ae(t);
        if (!o) {
            if (i && me(Ds, n))
                return Reflect.get(Ds, n, r);
            if (n === "hasOwnProperty")
                return Zf
        }
        const s = Reflect.get(t, n, r);
        return (Ro(n) ? Nc.has(n) : Jf(n)) || (o || qe(t, "get", n),
        a) ? s : Ce(s) ? i && wi(n) ? s : s.value : ke(s) ? o ? Vc(s) : st(s) : s
    }
}
class $c extends Fc {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let a = t[n];
        if (En(a) && Ce(a) && !Ce(r))
            return !1;
        if (!this._shallow && (!ho(r) && !En(r) && (a = pe(a),
        r = pe(r)),
        !ae(t) && Ce(a) && !Ce(r)))
            return a.value = r,
            !0;
        const i = ae(t) && wi(n) ? Number(n) < t.length : me(t, n)
          , s = Reflect.set(t, n, r, o);
        return t === pe(o) && (i ? An(r, a) && Dt(t, "set", n, r) : Dt(t, "add", n, r)),
        s
    }
    deleteProperty(t, n) {
        const r = me(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && Dt(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Ro(n) || !Nc.has(n)) && qe(t, "has", n),
        r
    }
    ownKeys(t) {
        return qe(t, "iterate", ae(t) ? "length" : yn),
        Reflect.ownKeys(t)
    }
}
class Qf extends Fc {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Xf = new $c
  , ep = new Qf
  , tp = new $c(!0)
  , Si = e => e
  , Io = e => Reflect.getPrototypeOf(e);
function Gr(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const o = pe(e)
      , a = pe(t);
    n || (An(t, a) && qe(o, "get", t),
    qe(o, "get", a));
    const {has: i} = Io(o)
      , s = r ? Si : n ? Pi : Er;
    if (i.call(o, t))
        return s(e.get(t));
    if (i.call(o, a))
        return s(e.get(a));
    e !== o && e.get(t)
}
function Kr(e, t=!1) {
    const n = this.__v_raw
      , r = pe(n)
      , o = pe(e);
    return t || (An(e, o) && qe(r, "has", e),
    qe(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
}
function zr(e, t=!1) {
    return e = e.__v_raw,
    !t && qe(pe(e), "iterate", yn),
    Reflect.get(e, "size", e)
}
function Bs(e) {
    e = pe(e);
    const t = pe(this);
    return Io(t).has.call(t, e) || (t.add(e),
    Dt(t, "add", e, e)),
    this
}
function Ns(e, t) {
    t = pe(t);
    const n = pe(this)
      , {has: r, get: o} = Io(n);
    let a = r.call(n, e);
    a || (e = pe(e),
    a = r.call(n, e));
    const i = o.call(n, e);
    return n.set(e, t),
    a ? An(t, i) && Dt(n, "set", e, t) : Dt(n, "add", e, t),
    this
}
function Fs(e) {
    const t = pe(this)
      , {has: n, get: r} = Io(t);
    let o = n.call(t, e);
    o || (e = pe(e),
    o = n.call(t, e)),
    r && r.call(t, e);
    const a = t.delete(e);
    return o && Dt(t, "delete", e, void 0),
    a
}
function $s() {
    const e = pe(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Dt(e, "clear", void 0, void 0),
    n
}
function Wr(e, t) {
    return function(r, o) {
        const a = this
          , i = a.__v_raw
          , s = pe(i)
          , l = t ? Si : e ? Pi : Er;
        return !e && qe(s, "iterate", yn),
        i.forEach( (c, u) => r.call(o, l(c), l(u), a))
    }
}
function qr(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , a = pe(o)
          , i = Bn(a)
          , s = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , c = o[e](...r)
          , u = n ? Si : t ? Pi : Er;
        return !t && qe(a, "iterate", l ? xa : yn),
        {
            next() {
                const {value: d, done: f} = c.next();
                return f ? {
                    value: d,
                    done: f
                } : {
                    value: s ? [u(d[0]), u(d[1])] : u(d),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Ft(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function np() {
    const e = {
        get(a) {
            return Gr(this, a)
        },
        get size() {
            return zr(this)
        },
        has: Kr,
        add: Bs,
        set: Ns,
        delete: Fs,
        clear: $s,
        forEach: Wr(!1, !1)
    }
      , t = {
        get(a) {
            return Gr(this, a, !1, !0)
        },
        get size() {
            return zr(this)
        },
        has: Kr,
        add: Bs,
        set: Ns,
        delete: Fs,
        clear: $s,
        forEach: Wr(!1, !0)
    }
      , n = {
        get(a) {
            return Gr(this, a, !0)
        },
        get size() {
            return zr(this, !0)
        },
        has(a) {
            return Kr.call(this, a, !0)
        },
        add: Ft("add"),
        set: Ft("set"),
        delete: Ft("delete"),
        clear: Ft("clear"),
        forEach: Wr(!0, !1)
    }
      , r = {
        get(a) {
            return Gr(this, a, !0, !0)
        },
        get size() {
            return zr(this, !0)
        },
        has(a) {
            return Kr.call(this, a, !0)
        },
        add: Ft("add"),
        set: Ft("set"),
        delete: Ft("delete"),
        clear: Ft("clear"),
        forEach: Wr(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
        e[a] = qr(a, !1, !1),
        n[a] = qr(a, !0, !1),
        t[a] = qr(a, !1, !0),
        r[a] = qr(a, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [rp,op,ap,ip] = np();
function xi(e, t) {
    const n = t ? e ? ip : ap : e ? op : rp;
    return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(me(n, o) && o in r ? n : r, o, a)
}
const sp = {
    get: xi(!1, !1)
}
  , lp = {
    get: xi(!1, !0)
}
  , cp = {
    get: xi(!0, !1)
}
  , Uc = new WeakMap
  , Hc = new WeakMap
  , jc = new WeakMap
  , up = new WeakMap;
function dp(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function fp(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : dp(Df(e))
}
function st(e) {
    return En(e) ? e : Ci(e, !1, Xf, sp, Uc)
}
function It(e) {
    return Ci(e, !1, tp, lp, Hc)
}
function Vc(e) {
    return Ci(e, !0, ep, cp, jc)
}
function Ci(e, t, n, r, o) {
    if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const a = o.get(e);
    if (a)
        return a;
    const i = fp(e);
    if (i === 0)
        return e;
    const s = new Proxy(e,i === 2 ? r : n);
    return o.set(e, s),
    s
}
function Xt(e) {
    return En(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function En(e) {
    return !!(e && e.__v_isReadonly)
}
function ho(e) {
    return !!(e && e.__v_isShallow)
}
function Gc(e) {
    return Xt(e) || En(e)
}
function pe(e) {
    const t = e && e.__v_raw;
    return t ? pe(t) : e
}
function Do(e) {
    return po(e, "__v_skip", !0),
    e
}
const Er = e => ke(e) ? st(e) : e
  , Pi = e => ke(e) ? Vc(e) : e;
function Ri(e) {
    Qt && mt && (e = pe(e),
    Bc(e.dep || (e.dep = ki())))
}
function Mi(e, t) {
    e = pe(e);
    const n = e.dep;
    n && Ca(n)
}
function Ce(e) {
    return !!(e && e.__v_isRef === !0)
}
function q(e) {
    return Kc(e, !1)
}
function kn(e) {
    return Kc(e, !0)
}
function Kc(e, t) {
    return Ce(e) ? e : new pp(e,t)
}
class pp {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : pe(t),
        this._value = n ? t : Er(t)
    }
    get value() {
        return Ri(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ho(t) || En(t);
        t = n ? t : pe(t),
        An(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : Er(t),
        Mi(this))
    }
}
function K(e) {
    return Ce(e) ? e.value : e
}
function dn(e) {
    return se(e) ? e() : K(e)
}
const mp = {
    get: (e, t, n) => K(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Ce(o) && !Ce(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function zc(e) {
    return Xt(e) ? e : new Proxy(e,mp)
}
class hp {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t( () => Ri(this), () => Mi(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function gp(e) {
    return new hp(e)
}
function yp(e) {
    const t = ae(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Wc(e, n);
    return t
}
class bp {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return qf(pe(this._object), this._key)
    }
}
class vp {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function Oi(e, t, n) {
    return Ce(e) ? e : se(e) ? new vp(e) : ke(e) && arguments.length > 1 ? Wc(e, t, n) : q(e)
}
function Wc(e, t, n) {
    const r = e[t];
    return Ce(r) ? r : new bp(e,t,n)
}
class _p {
    constructor(t, n, r, o) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this._dirty = !0,
        this.effect = new Ti(t, () => {
            this._dirty || (this._dirty = !0,
            Mi(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = r
    }
    get value() {
        const t = pe(this);
        return Ri(t),
        (t._dirty || !t._cacheable) && (t._dirty = !1,
        t._value = t.effect.run()),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
}
function Ap(e, t, n=!1) {
    let r, o;
    const a = se(e);
    return a ? (r = e,
    o = Tt) : (r = e.get,
    o = e.set),
    new _p(r,o,a || !o,n)
}
function en(e, t, n, r) {
    let o;
    try {
        o = r ? e(...r) : e()
    } catch (a) {
        Dr(a, t, n)
    }
    return o
}
function it(e, t, n, r) {
    if (se(e)) {
        const a = en(e, t, n, r);
        return a && Sc(a) && a.catch(i => {
            Dr(i, t, n)
        }
        ),
        a
    }
    const o = [];
    for (let a = 0; a < e.length; a++)
        o.push(it(e[a], t, n, r));
    return o
}
function Dr(e, t, n, r=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const i = t.proxy
          , s = n;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, s) === !1)
                        return
            }
            a = a.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            en(l, null, 10, [e, i, s]);
            return
        }
    }
    wp(e, n, o, r)
}
function wp(e, t, n, r=!0) {
    console.error(e)
}
let kr = !1
  , Pa = !1;
const He = [];
let kt = 0;
const Nn = [];
let Lt = null
  , fn = 0;
const qc = Promise.resolve();
let Li = null;
function lt(e) {
    const t = Li || qc;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ep(e) {
    let t = kt + 1
      , n = He.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = He[r]
          , a = Tr(o);
        a < e || a === e && o.pre ? t = r + 1 : n = r
    }
    return t
}
function Ii(e) {
    (!He.length || !He.includes(e, kr && e.allowRecurse ? kt + 1 : kt)) && (e.id == null ? He.push(e) : He.splice(Ep(e.id), 0, e),
    Jc())
}
function Jc() {
    !kr && !Pa && (Pa = !0,
    Li = qc.then(Yc))
}
function kp(e) {
    const t = He.indexOf(e);
    t > kt && He.splice(t, 1)
}
function Ra(e) {
    ae(e) ? Nn.push(...e) : (!Lt || !Lt.includes(e, e.allowRecurse ? fn + 1 : fn)) && Nn.push(e),
    Jc()
}
function Us(e, t=kr ? kt + 1 : 0) {
    for (; t < He.length; t++) {
        const n = He[t];
        n && n.pre && (He.splice(t, 1),
        t--,
        n())
    }
}
function go(e) {
    if (Nn.length) {
        const t = [...new Set(Nn)];
        if (Nn.length = 0,
        Lt) {
            Lt.push(...t);
            return
        }
        for (Lt = t,
        Lt.sort( (n, r) => Tr(n) - Tr(r)),
        fn = 0; fn < Lt.length; fn++)
            Lt[fn]();
        Lt = null,
        fn = 0
    }
}
const Tr = e => e.id == null ? 1 / 0 : e.id
  , Tp = (e, t) => {
    const n = Tr(e) - Tr(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Yc(e) {
    Pa = !1,
    kr = !0,
    He.sort(Tp);
    try {
        for (kt = 0; kt < He.length; kt++) {
            const t = He[kt];
            t && t.active !== !1 && en(t, null, 14)
        }
    } finally {
        kt = 0,
        He.length = 0,
        go(),
        kr = !1,
        Li = null,
        (He.length || Nn.length) && Yc()
    }
}
function Sp(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Se;
    let o = n;
    const a = t.startsWith("update:")
      , i = a && t.slice(7);
    if (i && i in r) {
        const u = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: d, trim: f} = r[u] || Se;
        f && (o = n.map(p => Me(p) ? p.trim() : p)),
        d && (o = n.map(Ff))
    }
    let s, l = r[s = Qo(t)] || r[s = Qo(St(t))];
    !l && a && (l = r[s = Qo(qn(t))]),
    l && it(l, e, 6, o);
    const c = r[s + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[s])
            return;
        e.emitted[s] = !0,
        it(c, e, 6, o)
    }
}
function Zc(e, t, n=!1) {
    const r = t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const a = e.emits;
    let i = {}
      , s = !1;
    if (!se(e)) {
        const l = c => {
            const u = Zc(c, t, !0);
            u && (s = !0,
            Ne(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !a && !s ? (ke(e) && r.set(e, null),
    null) : (ae(a) ? a.forEach(l => i[l] = null) : Ne(i, a),
    ke(e) && r.set(e, i),
    i)
}
function Bo(e, t) {
    return !e || !Lr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    me(e, t[0].toLowerCase() + t.slice(1)) || me(e, qn(t)) || me(e, t))
}
let Fe = null
  , Qc = null;
function yo(e) {
    const t = Fe;
    return Fe = e,
    Qc = e && e.type.__scopeId || null,
    t
}
function Ie(e, t=Fe, n) {
    if (!t || e._n)
        return e;
    const r = (...o) => {
        r._d && Ao(-1);
        const a = yo(t);
        let i;
        try {
            i = e(...o)
        } finally {
            yo(a),
            r._d && Ao(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Xo(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, props: a, propsOptions: [i], slots: s, attrs: l, emit: c, render: u, renderCache: d, data: f, setupState: p, ctx: m, inheritAttrs: b} = e;
    let w, E;
    const _ = yo(e);
    try {
        if (n.shapeFlag & 4) {
            const g = o || r;
            w = ot(u.call(g, g, d, a, p, f, m)),
            E = l
        } else {
            const g = t;
            w = ot(g.length > 1 ? g(a, {
                attrs: l,
                slots: s,
                emit: c
            }) : g(a, null)),
            E = t.props ? l : Cp(l)
        }
    } catch (g) {
        hr.length = 0,
        Dr(g, e, 1),
        w = ie(Ve)
    }
    let h = w;
    if (E && b !== !1) {
        const g = Object.keys(E)
          , {shapeFlag: A} = h;
        g.length && A & 7 && (i && g.some(_i) && (E = Pp(E, i)),
        h = xt(h, E))
    }
    return n.dirs && (h = xt(h),
    h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs),
    n.transition && (h.transition = n.transition),
    w = h,
    yo(_),
    w
}
function xp(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (Gn(r)) {
            if (r.type !== Ve || r.children === "v-if") {
                if (t)
                    return;
                t = r
            }
        } else
            return
    }
    return t
}
const Cp = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Lr(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , Pp = (e, t) => {
    const n = {};
    for (const r in e)
        (!_i(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function Rp(e, t, n) {
    const {props: r, children: o, component: a} = e
      , {props: i, children: s, patchFlag: l} = t
      , c = a.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Hs(r, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                const f = u[d];
                if (i[f] !== r[f] && !Bo(c, f))
                    return !0
            }
        }
    } else
        return (o || s) && (!s || !s.$stable) ? !0 : r === i ? !1 : r ? i ? Hs(r, i, c) : !0 : !!i;
    return !1
}
function Hs(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        if (t[a] !== e[a] && !Bo(n, a))
            return !0
    }
    return !1
}
function Di({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e; )
        (e = t.vnode).el = n,
        t = t.parent
}
const Xc = "components";
function Hw(e, t) {
    return tu(Xc, e, !0, t) || e
}
const eu = Symbol.for("v-ndc");
function Bi(e) {
    return Me(e) ? tu(Xc, e, !1) || e : e || eu
}
function tu(e, t, n=!0, r=!1) {
    const o = Fe || Be;
    if (o) {
        const a = o.type;
        {
            const s = Fa(a, !1);
            if (s && (s === t || s === St(t) || s === Oo(St(t))))
                return a
        }
        const i = js(o[e] || a[e], t) || js(o.appContext[e], t);
        return !i && r ? a : i
    }
}
function js(e, t) {
    return e && (e[t] || e[St(t)] || e[Oo(St(t))])
}
const nu = e => e.__isSuspense
  , Mp = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, a, i, s, l, c) {
        e == null ? Op(t, n, r, o, a, i, s, l, c) : Lp(e, t, n, r, o, i, s, l, c)
    },
    hydrate: Ip,
    create: Fi,
    normalize: Dp
}
  , Ni = Mp;
function Sr(e, t) {
    const n = e.props && e.props[t];
    se(n) && n()
}
function Op(e, t, n, r, o, a, i, s, l) {
    const {p: c, o: {createElement: u}} = l
      , d = u("div")
      , f = e.suspense = Fi(e, o, r, t, d, n, a, i, s, l);
    c(null, f.pendingBranch = e.ssContent, d, null, r, f, a, i),
    f.deps > 0 ? (Sr(e, "onPending"),
    Sr(e, "onFallback"),
    c(null, e.ssFallback, t, n, r, null, a, i),
    Fn(f, e.ssFallback)) : f.resolve(!1, !0)
}
function Lp(e, t, n, r, o, a, i, s, {p: l, um: c, o: {createElement: u}}) {
    const d = t.suspense = e.suspense;
    d.vnode = t,
    t.el = e.el;
    const f = t.ssContent
      , p = t.ssFallback
      , {activeBranch: m, pendingBranch: b, isInFallback: w, isHydrating: E} = d;
    if (b)
        d.pendingBranch = f,
        ht(f, b) ? (l(b, f, d.hiddenContainer, null, o, d, a, i, s),
        d.deps <= 0 ? d.resolve() : w && (l(m, p, n, r, o, null, a, i, s),
        Fn(d, p))) : (d.pendingId++,
        E ? (d.isHydrating = !1,
        d.activeBranch = b) : c(b, o, d),
        d.deps = 0,
        d.effects.length = 0,
        d.hiddenContainer = u("div"),
        w ? (l(null, f, d.hiddenContainer, null, o, d, a, i, s),
        d.deps <= 0 ? d.resolve() : (l(m, p, n, r, o, null, a, i, s),
        Fn(d, p))) : m && ht(f, m) ? (l(m, f, n, r, o, d, a, i, s),
        d.resolve(!0)) : (l(null, f, d.hiddenContainer, null, o, d, a, i, s),
        d.deps <= 0 && d.resolve()));
    else if (m && ht(f, m))
        l(m, f, n, r, o, d, a, i, s),
        Fn(d, f);
    else if (Sr(t, "onPending"),
    d.pendingBranch = f,
    d.pendingId++,
    l(null, f, d.hiddenContainer, null, o, d, a, i, s),
    d.deps <= 0)
        d.resolve();
    else {
        const {timeout: _, pendingId: h} = d;
        _ > 0 ? setTimeout( () => {
            d.pendingId === h && d.fallback(p)
        }
        , _) : _ === 0 && d.fallback(p)
    }
}
function Fi(e, t, n, r, o, a, i, s, l, c, u=!1) {
    const {p: d, m: f, um: p, n: m, o: {parentNode: b, remove: w}} = c;
    let E;
    const _ = Bp(e);
    _ && t != null && t.pendingBranch && (E = t.pendingId,
    t.deps++);
    const h = e.props ? Pc(e.props.timeout) : void 0
      , g = {
        vnode: e,
        parent: t,
        parentComponent: n,
        isSVG: i,
        container: r,
        hiddenContainer: o,
        anchor: a,
        deps: 0,
        pendingId: 0,
        timeout: typeof h == "number" ? h : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(A=!1, M=!1) {
            const {vnode: I, activeBranch: P, pendingBranch: T, pendingId: C, effects: F, parentComponent: S, container: R} = g;
            let V = !1;
            if (g.isHydrating)
                g.isHydrating = !1;
            else if (!A) {
                V = P && T.transition && T.transition.mode === "out-in",
                V && (P.transition.afterLeave = () => {
                    C === g.pendingId && (f(T, R, O, 0),
                    Ra(F))
                }
                );
                let {anchor: O} = g;
                P && (O = m(P),
                p(P, S, g, !0)),
                V || f(T, R, O, 0)
            }
            Fn(g, T),
            g.pendingBranch = null,
            g.isInFallback = !1;
            let $ = g.parent
              , k = !1;
            for (; $; ) {
                if ($.pendingBranch) {
                    $.effects.push(...F),
                    k = !0;
                    break
                }
                $ = $.parent
            }
            !k && !V && Ra(F),
            g.effects = [],
            _ && t && t.pendingBranch && E === t.pendingId && (t.deps--,
            t.deps === 0 && !M && t.resolve()),
            Sr(I, "onResolve")
        },
        fallback(A) {
            if (!g.pendingBranch)
                return;
            const {vnode: M, activeBranch: I, parentComponent: P, container: T, isSVG: C} = g;
            Sr(M, "onFallback");
            const F = m(I)
              , S = () => {
                g.isInFallback && (d(null, A, T, F, P, null, C, s, l),
                Fn(g, A))
            }
              , R = A.transition && A.transition.mode === "out-in";
            R && (I.transition.afterLeave = S),
            g.isInFallback = !0,
            p(I, P, null, !0),
            R || S()
        },
        move(A, M, I) {
            g.activeBranch && f(g.activeBranch, A, M, I),
            g.container = A
        },
        next() {
            return g.activeBranch && m(g.activeBranch)
        },
        registerDep(A, M) {
            const I = !!g.pendingBranch;
            I && g.deps++;
            const P = A.vnode.el;
            A.asyncDep.catch(T => {
                Dr(T, A, 0)
            }
            ).then(T => {
                if (A.isUnmounted || g.isUnmounted || g.pendingId !== A.suspenseId)
                    return;
                A.asyncResolved = !0;
                const {vnode: C} = A;
                Na(A, T, !1),
                P && (C.el = P);
                const F = !P && A.subTree.el;
                M(A, C, b(P || A.subTree.el), P ? null : m(A.subTree), g, i, l),
                F && w(F),
                Di(A, C.el),
                I && --g.deps === 0 && g.resolve()
            }
            )
        },
        unmount(A, M) {
            g.isUnmounted = !0,
            g.activeBranch && p(g.activeBranch, n, A, M),
            g.pendingBranch && p(g.pendingBranch, n, A, M)
        }
    };
    return g
}
function Ip(e, t, n, r, o, a, i, s, l) {
    const c = t.suspense = Fi(t, r, n, e.parentNode, document.createElement("div"), null, o, a, i, s, !0)
      , u = l(e, c.pendingBranch = t.ssContent, n, c, a, i);
    return c.deps === 0 && c.resolve(!1, !0),
    u
}
function Dp(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = Vs(r ? n.default : n),
    e.ssFallback = r ? Vs(n.fallback) : ie(Ve)
}
function Vs(e) {
    let t;
    if (se(e)) {
        const n = Vn && e._c;
        n && (e._d = !1,
        ne()),
        e = e(),
        n && (e._d = !0,
        t = at,
        Eu())
    }
    return ae(e) && (e = xp(e)),
    e = ot(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function ru(e, t) {
    t && t.pendingBranch ? ae(e) ? t.effects.push(...e) : t.effects.push(e) : Ra(e)
}
function Fn(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e
      , o = n.el = t.el;
    r && r.subTree === n && (r.vnode.el = o,
    Di(r, o))
}
function Bp(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
function Ge(e, t) {
    return $i(e, null, t)
}
const Jr = {};
function Pe(e, t, n) {
    return $i(e, t, n)
}
function $i(e, t, {immediate: n, deep: r, flush: o, onTrack: a, onTrigger: i}=Se) {
    var s;
    const l = Tn() === ((s = Be) == null ? void 0 : s.scope) ? Be : null;
    let c, u = !1, d = !1;
    if (Ce(e) ? (c = () => e.value,
    u = ho(e)) : Xt(e) ? (c = () => e,
    r = !0) : ae(e) ? (d = !0,
    u = e.some(g => Xt(g) || ho(g)),
    c = () => e.map(g => {
        if (Ce(g))
            return g.value;
        if (Xt(g))
            return hn(g);
        if (se(g))
            return en(g, l, 2)
    }
    )) : se(e) ? t ? c = () => en(e, l, 2) : c = () => {
        if (!(l && l.isUnmounted))
            return f && f(),
            it(e, l, 3, [p])
    }
    : c = Tt,
    t && r) {
        const g = c;
        c = () => hn(g())
    }
    let f, p = g => {
        f = _.onStop = () => {
            en(g, l, 4)
        }
    }
    , m;
    if (Cr)
        if (p = Tt,
        t ? n && it(t, l, 3, [c(), d ? [] : void 0, p]) : c(),
        o === "sync") {
            const g = Pm();
            m = g.__watcherHandles || (g.__watcherHandles = [])
        } else
            return Tt;
    let b = d ? new Array(e.length).fill(Jr) : Jr;
    const w = () => {
        if (_.active)
            if (t) {
                const g = _.run();
                (r || u || (d ? g.some( (A, M) => An(A, b[M])) : An(g, b))) && (f && f(),
                it(t, l, 3, [g, b === Jr ? void 0 : d && b[0] === Jr ? [] : b, p]),
                b = g)
            } else
                _.run()
    }
    ;
    w.allowRecurse = !!t;
    let E;
    o === "sync" ? E = w : o === "post" ? E = () => Ue(w, l && l.suspense) : (w.pre = !0,
    l && (w.id = l.uid),
    E = () => Ii(w));
    const _ = new Ti(c,E);
    t ? n ? w() : b = _.run() : o === "post" ? Ue(_.run.bind(_), l && l.suspense) : _.run();
    const h = () => {
        _.stop(),
        l && l.scope && Ai(l.scope.effects, _)
    }
    ;
    return m && m.push(h),
    h
}
function Np(e, t, n) {
    const r = this.proxy
      , o = Me(e) ? e.includes(".") ? ou(r, e) : () => r[e] : e.bind(r, r);
    let a;
    se(t) ? a = t : (a = t.handler,
    n = t);
    const i = Be;
    Kn(this);
    const s = $i(o, a.bind(r), n);
    return i ? Kn(i) : vn(),
    s
}
function ou(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function hn(e, t) {
    if (!ke(e) || e.__v_skip || (t = t || new Set,
    t.has(e)))
        return e;
    if (t.add(e),
    Ce(e))
        hn(e.value, t);
    else if (ae(e))
        for (let n = 0; n < e.length; n++)
            hn(e[n], t);
    else if (Tc(e) || Bn(e))
        e.forEach(n => {
            hn(n, t)
        }
        );
    else if (Cc(e))
        for (const n in e)
            hn(e[n], t);
    return e
}
function Fp(e, t) {
    const n = Fe;
    if (n === null)
        return e;
    const r = Uo(n) || n.proxy
      , o = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let[i,s,l,c=Se] = t[a];
        i && (se(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && hn(s),
        o.push({
            dir: i,
            instance: r,
            value: s,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}
function wt(e, t, n, r) {
    const o = e.dirs
      , a = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const s = o[i];
        a && (s.oldValue = a[i].value);
        let l = s.dir[r];
        l && (Jn(),
        it(l, n, 8, [e.el, s, e, t]),
        Yn())
    }
}
const Kt = Symbol("_leaveCb")
  , Yr = Symbol("_enterCb");
function $p() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return xe( () => {
        e.isMounted = !0
    }
    ),
    Br( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const nt = [Function, Array]
  , au = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: nt,
    onEnter: nt,
    onAfterEnter: nt,
    onEnterCancelled: nt,
    onBeforeLeave: nt,
    onLeave: nt,
    onAfterLeave: nt,
    onLeaveCancelled: nt,
    onBeforeAppear: nt,
    onAppear: nt,
    onAfterAppear: nt,
    onAppearCancelled: nt
}
  , Up = {
    name: "BaseTransition",
    props: au,
    setup(e, {slots: t}) {
        const n = vt()
          , r = $p();
        let o;
        return () => {
            const a = t.default && su(t.default(), !0);
            if (!a || !a.length)
                return;
            let i = a[0];
            if (a.length > 1) {
                for (const b of a)
                    if (b.type !== Ve) {
                        i = b;
                        break
                    }
            }
            const s = pe(e)
              , {mode: l} = s;
            if (r.isLeaving)
                return ea(i);
            const c = Gs(i);
            if (!c)
                return ea(i);
            const u = Ma(c, s, r, n);
            bo(c, u);
            const d = n.subTree
              , f = d && Gs(d);
            let p = !1;
            const {getTransitionKey: m} = c.type;
            if (m) {
                const b = m();
                o === void 0 ? o = b : b !== o && (o = b,
                p = !0)
            }
            if (f && f.type !== Ve && (!ht(c, f) || p)) {
                const b = Ma(f, s, r, n);
                if (bo(f, b),
                l === "out-in")
                    return r.isLeaving = !0,
                    b.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && n.update()
                    }
                    ,
                    ea(i);
                l === "in-out" && c.type !== Ve && (b.delayLeave = (w, E, _) => {
                    const h = iu(r, f);
                    h[String(f.key)] = f,
                    w[Kt] = () => {
                        E(),
                        w[Kt] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = _
                }
                )
            }
            return i
        }
    }
}
  , Hp = Up;
function iu(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Ma(e, t, n, r) {
    const {appear: o, mode: a, persisted: i=!1, onBeforeEnter: s, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: f, onAfterLeave: p, onLeaveCancelled: m, onBeforeAppear: b, onAppear: w, onAfterAppear: E, onAppearCancelled: _} = t
      , h = String(e.key)
      , g = iu(n, e)
      , A = (P, T) => {
        P && it(P, r, 9, T)
    }
      , M = (P, T) => {
        const C = T[1];
        A(P, T),
        ae(P) ? P.every(F => F.length <= 1) && C() : P.length <= 1 && C()
    }
      , I = {
        mode: a,
        persisted: i,
        beforeEnter(P) {
            let T = s;
            if (!n.isMounted)
                if (o)
                    T = b || s;
                else
                    return;
            P[Kt] && P[Kt](!0);
            const C = g[h];
            C && ht(e, C) && C.el[Kt] && C.el[Kt](),
            A(T, [P])
        },
        enter(P) {
            let T = l
              , C = c
              , F = u;
            if (!n.isMounted)
                if (o)
                    T = w || l,
                    C = E || c,
                    F = _ || u;
                else
                    return;
            let S = !1;
            const R = P[Yr] = V => {
                S || (S = !0,
                V ? A(F, [P]) : A(C, [P]),
                I.delayedLeave && I.delayedLeave(),
                P[Yr] = void 0)
            }
            ;
            T ? M(T, [P, R]) : R()
        },
        leave(P, T) {
            const C = String(e.key);
            if (P[Yr] && P[Yr](!0),
            n.isUnmounting)
                return T();
            A(d, [P]);
            let F = !1;
            const S = P[Kt] = R => {
                F || (F = !0,
                T(),
                R ? A(m, [P]) : A(p, [P]),
                P[Kt] = void 0,
                g[C] === e && delete g[C])
            }
            ;
            g[C] = e,
            f ? M(f, [P, S]) : S()
        },
        clone(P) {
            return Ma(P, t, n, r)
        }
    };
    return I
}
function ea(e) {
    if (No(e))
        return e = xt(e),
        e.children = null,
        e
}
function Gs(e) {
    return No(e) ? e.children ? e.children[0] : void 0 : e
}
function bo(e, t) {
    e.shapeFlag & 6 && e.component ? bo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function su(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let a = 0; a < e.length; a++) {
        let i = e[a];
        const s = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
        i.type === we ? (i.patchFlag & 128 && o++,
        r = r.concat(su(i.children, t, s))) : (t || i.type !== Ve) && r.push(s != null ? xt(i, {
            key: s
        }) : i)
    }
    if (o > 1)
        for (let a = 0; a < r.length; a++)
            r[a].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function he(e, t) {
    return se(e) ? Ne({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const bn = e => !!e.type.__asyncLoader
  , No = e => e.type.__isKeepAlive
  , jp = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = vt()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const _ = t.default && t.default();
                return _ && _.length === 1 ? _[0] : _
            }
            ;
        const o = new Map
          , a = new Set;
        let i = null;
        const s = n.suspense
          , {renderer: {p: l, m: c, um: u, o: {createElement: d}}} = r
          , f = d("div");
        r.activate = (_, h, g, A, M) => {
            const I = _.component;
            c(_, h, g, 0, s),
            l(I.vnode, _, h, g, I, s, A, _.slotScopeIds, M),
            Ue( () => {
                I.isDeactivated = !1,
                I.a && dr(I.a);
                const P = _.props && _.props.onVnodeMounted;
                P && ze(P, I.parent, _)
            }
            , s)
        }
        ,
        r.deactivate = _ => {
            const h = _.component;
            c(_, f, null, 1, s),
            Ue( () => {
                h.da && dr(h.da);
                const g = _.props && _.props.onVnodeUnmounted;
                g && ze(g, h.parent, _),
                h.isDeactivated = !0
            }
            , s)
        }
        ;
        function p(_) {
            ta(_),
            u(_, n, s, !0)
        }
        function m(_) {
            o.forEach( (h, g) => {
                const A = Fa(h.type);
                A && (!_ || !_(A)) && b(g)
            }
            )
        }
        function b(_) {
            const h = o.get(_);
            !i || !ht(h, i) ? p(h) : i && ta(i),
            o.delete(_),
            a.delete(_)
        }
        Pe( () => [e.include, e.exclude], ([_,h]) => {
            _ && m(g => sr(_, g)),
            h && m(g => !sr(h, g))
        }
        , {
            flush: "post",
            deep: !0
        });
        let w = null;
        const E = () => {
            w != null && o.set(w, na(n.subTree))
        }
        ;
        return xe(E),
        cu(E),
        Br( () => {
            o.forEach(_ => {
                const {subTree: h, suspense: g} = n
                  , A = na(h);
                if (_.type === A.type && _.key === A.key) {
                    ta(A);
                    const M = A.component.da;
                    M && Ue(M, g);
                    return
                }
                p(_)
            }
            )
        }
        ),
        () => {
            if (w = null,
            !t.default)
                return null;
            const _ = t.default()
              , h = _[0];
            if (_.length > 1)
                return i = null,
                _;
            if (!Gn(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128))
                return i = null,
                h;
            let g = na(h);
            const A = g.type
              , M = Fa(bn(g) ? g.type.__asyncResolved || {} : A)
              , {include: I, exclude: P, max: T} = e;
            if (I && (!M || !sr(I, M)) || P && M && sr(P, M))
                return i = g,
                h;
            const C = g.key == null ? A : g.key
              , F = o.get(C);
            return g.el && (g = xt(g),
            h.shapeFlag & 128 && (h.ssContent = g)),
            w = C,
            F ? (g.el = F.el,
            g.component = F.component,
            g.transition && bo(g, g.transition),
            g.shapeFlag |= 512,
            a.delete(C),
            a.add(C)) : (a.add(C),
            T && a.size > parseInt(T, 10) && b(a.values().next().value)),
            g.shapeFlag |= 256,
            i = g,
            nu(h.type) ? h : g
        }
    }
}
  , Vp = jp;
function sr(e, t) {
    return ae(e) ? e.some(n => sr(n, t)) : Me(e) ? e.split(",").includes(t) : If(e) ? e.test(t) : !1
}
function Ui(e, t) {
    lu(e, "a", t)
}
function Hi(e, t) {
    lu(e, "da", t)
}
function lu(e, t, n=Be) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Fo(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            No(o.parent.vnode) && Gp(r, t, n, o),
            o = o.parent
    }
}
function Gp(e, t, n, r) {
    const o = Fo(t, e, r, !0);
    tt( () => {
        Ai(r[t], o)
    }
    , n)
}
function ta(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function na(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function Fo(e, t, n=Be, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , a = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted)
                return;
            Jn(),
            Kn(n);
            const s = it(t, n, e, i);
            return vn(),
            Yn(),
            s
        }
        );
        return r ? o.unshift(a) : o.push(a),
        a
    }
}
const Bt = e => (t, n=Be) => (!Cr || e === "sp") && Fo(e, (...r) => t(...r), n)
  , ji = Bt("bm")
  , xe = Bt("m")
  , Kp = Bt("bu")
  , cu = Bt("u")
  , Br = Bt("bum")
  , tt = Bt("um")
  , zp = Bt("sp")
  , Wp = Bt("rtg")
  , qp = Bt("rtc");
function uu(e, t=Be) {
    Fo("ec", e, t)
}
function Mn(e, t, n, r) {
    let o;
    const a = n;
    if (ae(e) || Me(e)) {
        o = new Array(e.length);
        for (let i = 0, s = e.length; i < s; i++)
            o[i] = t(e[i], i, void 0, a)
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++)
            o[i] = t(i + 1, i, void 0, a)
    } else if (ke(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (i, s) => t(i, s, void 0, a));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let s = 0, l = i.length; s < l; s++) {
                const c = i[s];
                o[s] = t(e[c], c, s, a)
            }
        }
    else
        o = [];
    return o
}
function Jp(e, t, n={}, r, o) {
    if (Fe.isCE || Fe.parent && bn(Fe.parent) && Fe.parent.isCE)
        return t !== "default" && (n.name = t),
        ie("slot", n, r);
    let a = e[t];
    a && a._c && (a._d = !1),
    ne();
    const i = a && du(a(n))
      , s = et(we, {
        key: n.key || i && i.key || `_${t}`
    }, i || [], i && e._ === 1 ? 64 : -2);
    return s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    s
}
function du(e) {
    return e.some(t => Gn(t) ? !(t.type === Ve || t.type === we && !du(t.children)) : !0) ? e : null
}
const Oa = e => e ? Su(e) ? Uo(e) || e.proxy : Oa(e.parent) : null
  , fr = Ne(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Oa(e.parent),
    $root: e => Oa(e.root),
    $emit: e => e.emit,
    $options: e => Vi(e),
    $forceUpdate: e => e.f || (e.f = () => Ii(e.update)),
    $nextTick: e => e.n || (e.n = lt.bind(e.proxy)),
    $watch: e => Np.bind(e)
})
  , ra = (e, t) => e !== Se && !e.__isScriptSetup && me(e, t)
  , Yp = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: o, props: a, accessCache: i, type: s, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const p = i[t];
            if (p !== void 0)
                switch (p) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return a[t]
                }
            else {
                if (ra(r, t))
                    return i[t] = 1,
                    r[t];
                if (o !== Se && me(o, t))
                    return i[t] = 2,
                    o[t];
                if ((c = e.propsOptions[0]) && me(c, t))
                    return i[t] = 3,
                    a[t];
                if (n !== Se && me(n, t))
                    return i[t] = 4,
                    n[t];
                La && (i[t] = 0)
            }
        }
        const u = fr[t];
        let d, f;
        if (u)
            return t === "$attrs" && qe(e, "get", t),
            u(e);
        if ((d = s.__cssModules) && (d = d[t]))
            return d;
        if (n !== Se && me(n, t))
            return i[t] = 4,
            n[t];
        if (f = l.config.globalProperties,
        me(f, t))
            return f[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: a} = e;
        return ra(o, t) ? (o[t] = n,
        !0) : r !== Se && me(r, t) ? (r[t] = n,
        !0) : me(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (a[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: a}}, i) {
        let s;
        return !!n[i] || e !== Se && me(e, i) || ra(t, i) || (s = a[0]) && me(s, i) || me(r, i) || me(fr, i) || me(o.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function jw() {
    return fu().slots
}
function Zp() {
    return fu().attrs
}
function fu() {
    const e = vt();
    return e.setupContext || (e.setupContext = Cu(e))
}
function Ks(e) {
    return ae(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let La = !0;
function Qp(e) {
    const t = Vi(e)
      , n = e.proxy
      , r = e.ctx;
    La = !1,
    t.beforeCreate && zs(t.beforeCreate, e, "bc");
    const {data: o, computed: a, methods: i, watch: s, provide: l, inject: c, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: m, activated: b, deactivated: w, beforeDestroy: E, beforeUnmount: _, destroyed: h, unmounted: g, render: A, renderTracked: M, renderTriggered: I, errorCaptured: P, serverPrefetch: T, expose: C, inheritAttrs: F, components: S, directives: R, filters: V} = t;
    if (c && Xp(c, r, null),
    i)
        for (const O in i) {
            const B = i[O];
            se(B) && (r[O] = B.bind(n))
        }
    if (o) {
        const O = o.call(n, n);
        ke(O) && (e.data = st(O))
    }
    if (La = !0,
    a)
        for (const O in a) {
            const B = a[O]
              , J = se(B) ? B.bind(n, n) : se(B.get) ? B.get.bind(n, n) : Tt
              , le = !se(B) && se(B.set) ? B.set.bind(n) : Tt
              , De = X({
                get: J,
                set: le
            });
            Object.defineProperty(r, O, {
                enumerable: !0,
                configurable: !0,
                get: () => De.value,
                set: de => De.value = de
            })
        }
    if (s)
        for (const O in s)
            pu(s[O], r, n, O);
    if (l) {
        const O = se(l) ? l.call(n) : l;
        Reflect.ownKeys(O).forEach(B => {
            $e(B, O[B])
        }
        )
    }
    u && zs(u, e, "c");
    function k(O, B) {
        ae(B) ? B.forEach(J => O(J.bind(n))) : B && O(B.bind(n))
    }
    if (k(ji, d),
    k(xe, f),
    k(Kp, p),
    k(cu, m),
    k(Ui, b),
    k(Hi, w),
    k(uu, P),
    k(qp, M),
    k(Wp, I),
    k(Br, _),
    k(tt, g),
    k(zp, T),
    ae(C))
        if (C.length) {
            const O = e.exposed || (e.exposed = {});
            C.forEach(B => {
                Object.defineProperty(O, B, {
                    get: () => n[B],
                    set: J => n[B] = J
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    A && e.render === Tt && (e.render = A),
    F != null && (e.inheritAttrs = F),
    S && (e.components = S),
    R && (e.directives = R)
}
function Xp(e, t, n=Tt) {
    ae(e) && (e = Ia(e));
    for (const r in e) {
        const o = e[r];
        let a;
        ke(o) ? "default"in o ? a = be(o.from || r, o.default, !0) : a = be(o.from || r) : a = be(o),
        Ce(a) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: i => a.value = i
        }) : t[r] = a
    }
}
function zs(e, t, n) {
    it(ae(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function pu(e, t, n, r) {
    const o = r.includes(".") ? ou(n, r) : () => n[r];
    if (Me(e)) {
        const a = t[e];
        se(a) && Pe(o, a)
    } else if (se(e))
        Pe(o, e.bind(n));
    else if (ke(e))
        if (ae(e))
            e.forEach(a => pu(a, t, n, r));
        else {
            const a = se(e.handler) ? e.handler.bind(n) : t[e.handler];
            se(a) && Pe(o, a, e)
        }
}
function Vi(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: a, config: {optionMergeStrategies: i}} = e.appContext
      , s = a.get(t);
    let l;
    return s ? l = s : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(c => vo(l, c, i, !0)),
    vo(l, t, i)),
    ke(t) && a.set(t, l),
    l
}
function vo(e, t, n, r=!1) {
    const {mixins: o, extends: a} = t;
    a && vo(e, a, n, !0),
    o && o.forEach(i => vo(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const s = em[i] || n && n[i];
            e[i] = s ? s(e[i], t[i]) : t[i]
        }
    return e
}
const em = {
    data: Ws,
    props: qs,
    emits: qs,
    methods: lr,
    computed: lr,
    beforeCreate: je,
    created: je,
    beforeMount: je,
    mounted: je,
    beforeUpdate: je,
    updated: je,
    beforeDestroy: je,
    beforeUnmount: je,
    destroyed: je,
    unmounted: je,
    activated: je,
    deactivated: je,
    errorCaptured: je,
    serverPrefetch: je,
    components: lr,
    directives: lr,
    watch: nm,
    provide: Ws,
    inject: tm
};
function Ws(e, t) {
    return t ? e ? function() {
        return Ne(se(e) ? e.call(this, this) : e, se(t) ? t.call(this, this) : t)
    }
    : t : e
}
function tm(e, t) {
    return lr(Ia(e), Ia(t))
}
function Ia(e) {
    if (ae(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function je(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function lr(e, t) {
    return e ? Ne(Object.create(null), e, t) : t
}
function qs(e, t) {
    return e ? ae(e) && ae(t) ? [...new Set([...e, ...t])] : Ne(Object.create(null), Ks(e), Ks(t ?? {})) : t
}
function nm(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = Ne(Object.create(null), e);
    for (const r in t)
        n[r] = je(e[r], t[r]);
    return n
}
function mu() {
    return {
        app: null,
        config: {
            isNativeTag: Mf,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let rm = 0;
function om(e, t) {
    return function(r, o=null) {
        se(r) || (r = Ne({}, r)),
        o != null && !ke(o) && (o = null);
        const a = mu()
          , i = new WeakSet;
        let s = !1;
        const l = a.app = {
            _uid: rm++,
            _component: r,
            _props: o,
            _container: null,
            _context: a,
            _instance: null,
            version: Pu,
            get config() {
                return a.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && se(c.install) ? (i.add(c),
                c.install(l, ...u)) : se(c) && (i.add(c),
                c(l, ...u))),
                l
            },
            mixin(c) {
                return a.mixins.includes(c) || a.mixins.push(c),
                l
            },
            component(c, u) {
                return u ? (a.components[c] = u,
                l) : a.components[c]
            },
            directive(c, u) {
                return u ? (a.directives[c] = u,
                l) : a.directives[c]
            },
            mount(c, u, d) {
                if (!s) {
                    const f = ie(r, o);
                    return f.appContext = a,
                    u && t ? t(f, c) : e(f, c, d),
                    s = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    Uo(f.component) || f.component.proxy
                }
            },
            unmount() {
                s && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, u) {
                return a.provides[c] = u,
                l
            },
            runWithContext(c) {
                xr = l;
                try {
                    return c()
                } finally {
                    xr = null
                }
            }
        };
        return l
    }
}
let xr = null;
function $e(e, t) {
    if (Be) {
        let n = Be.provides;
        const r = Be.parent && Be.parent.provides;
        r === n && (n = Be.provides = Object.create(r)),
        n[e] = t
    }
}
function be(e, t, n=!1) {
    const r = Be || Fe;
    if (r || xr) {
        const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : xr._context.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && se(t) ? t.call(r && r.proxy) : t
    }
}
function Gi() {
    return !!(Be || Fe || xr)
}
function am(e, t, n, r=!1) {
    const o = {}
      , a = {};
    po(a, $o, 1),
    e.propsDefaults = Object.create(null),
    hu(e, t, o, a);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = r ? o : It(o) : e.type.props ? e.props = o : e.props = a,
    e.attrs = a
}
function im(e, t, n, r) {
    const {props: o, attrs: a, vnode: {patchFlag: i}} = e
      , s = pe(o)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let d = 0; d < u.length; d++) {
                let f = u[d];
                if (Bo(e.emitsOptions, f))
                    continue;
                const p = t[f];
                if (l)
                    if (me(a, f))
                        p !== a[f] && (a[f] = p,
                        c = !0);
                    else {
                        const m = St(f);
                        o[m] = Da(l, s, m, p, e, !1)
                    }
                else
                    p !== a[f] && (a[f] = p,
                    c = !0)
            }
        }
    } else {
        hu(e, t, o, a) && (c = !0);
        let u;
        for (const d in s)
            (!t || !me(t, d) && ((u = qn(d)) === d || !me(t, u))) && (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (o[d] = Da(l, s, d, void 0, e, !0)) : delete o[d]);
        if (a !== s)
            for (const d in a)
                (!t || !me(t, d)) && (delete a[d],
                c = !0)
    }
    c && Dt(e, "set", "$attrs")
}
function hu(e, t, n, r) {
    const [o,a] = e.propsOptions;
    let i = !1, s;
    if (t)
        for (let l in t) {
            if (ur(l))
                continue;
            const c = t[l];
            let u;
            o && me(o, u = St(l)) ? !a || !a.includes(u) ? n[u] = c : (s || (s = {}))[u] = c : Bo(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            i = !0)
        }
    if (a) {
        const l = pe(n)
          , c = s || Se;
        for (let u = 0; u < a.length; u++) {
            const d = a[u];
            n[d] = Da(o, l, d, c[d], e, !me(c, d))
        }
    }
    return i
}
function Da(e, t, n, r, o, a) {
    const i = e[n];
    if (i != null) {
        const s = me(i, "default");
        if (s && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && se(l)) {
                const {propsDefaults: c} = o;
                n in c ? r = c[n] : (Kn(o),
                r = c[n] = l.call(null, t),
                vn())
            } else
                r = l
        }
        i[0] && (a && !s ? r = !1 : i[1] && (r === "" || r === qn(n)) && (r = !0))
    }
    return r
}
function gu(e, t, n=!1) {
    const r = t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const a = e.props
      , i = {}
      , s = [];
    let l = !1;
    if (!se(e)) {
        const u = d => {
            l = !0;
            const [f,p] = gu(d, t, !0);
            Ne(i, f),
            p && s.push(...p)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!a && !l)
        return ke(e) && r.set(e, Dn),
        Dn;
    if (ae(a))
        for (let u = 0; u < a.length; u++) {
            const d = St(a[u]);
            Js(d) && (i[d] = Se)
        }
    else if (a)
        for (const u in a) {
            const d = St(u);
            if (Js(d)) {
                const f = a[u]
                  , p = i[d] = ae(f) || se(f) ? {
                    type: f
                } : Ne({}, f);
                if (p) {
                    const m = Qs(Boolean, p.type)
                      , b = Qs(String, p.type);
                    p[0] = m > -1,
                    p[1] = b < 0 || m < b,
                    (m > -1 || me(p, "default")) && s.push(d)
                }
            }
        }
    const c = [i, s];
    return ke(e) && r.set(e, c),
    c
}
function Js(e) {
    return e[0] !== "$"
}
function Ys(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function Zs(e, t) {
    return Ys(e) === Ys(t)
}
function Qs(e, t) {
    return ae(t) ? t.findIndex(n => Zs(n, e)) : se(t) && Zs(t, e) ? 0 : -1
}
const yu = e => e[0] === "_" || e === "$stable"
  , Ki = e => ae(e) ? e.map(ot) : [ot(e)]
  , sm = (e, t, n) => {
    if (t._n)
        return t;
    const r = Ie( (...o) => Ki(t(...o)), n);
    return r._c = !1,
    r
}
  , bu = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
        if (yu(o))
            continue;
        const a = e[o];
        if (se(a))
            t[o] = sm(o, a, r);
        else if (a != null) {
            const i = Ki(a);
            t[o] = () => i
        }
    }
}
  , vu = (e, t) => {
    const n = Ki(t);
    e.slots.default = () => n
}
  , lm = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = pe(t),
        po(t, "_", n)) : bu(t, e.slots = {})
    } else
        e.slots = {},
        t && vu(e, t);
    po(e.slots, $o, 1)
}
  , cm = (e, t, n) => {
    const {vnode: r, slots: o} = e;
    let a = !0
      , i = Se;
    if (r.shapeFlag & 32) {
        const s = t._;
        s ? n && s === 1 ? a = !1 : (Ne(o, t),
        !n && s === 1 && delete o._) : (a = !t.$stable,
        bu(t, o)),
        i = t
    } else
        t && (vu(e, t),
        i = {
            default: 1
        });
    if (a)
        for (const s in o)
            !yu(s) && i[s] == null && delete o[s]
}
;
function _o(e, t, n, r, o=!1) {
    if (ae(e)) {
        e.forEach( (f, p) => _o(f, t && (ae(t) ? t[p] : t), n, r, o));
        return
    }
    if (bn(r) && !o)
        return;
    const a = r.shapeFlag & 4 ? Uo(r.component) || r.component.proxy : r.el
      , i = o ? null : a
      , {i: s, r: l} = e
      , c = t && t.r
      , u = s.refs === Se ? s.refs = {} : s.refs
      , d = s.setupState;
    if (c != null && c !== l && (Me(c) ? (u[c] = null,
    me(d, c) && (d[c] = null)) : Ce(c) && (c.value = null)),
    se(l))
        en(l, s, 12, [i, u]);
    else {
        const f = Me(l)
          , p = Ce(l);
        if (f || p) {
            const m = () => {
                if (e.f) {
                    const b = f ? me(d, l) ? d[l] : u[l] : l.value;
                    o ? ae(b) && Ai(b, a) : ae(b) ? b.includes(a) || b.push(a) : f ? (u[l] = [a],
                    me(d, l) && (d[l] = u[l])) : (l.value = [a],
                    e.k && (u[e.k] = l.value))
                } else
                    f ? (u[l] = i,
                    me(d, l) && (d[l] = i)) : p && (l.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            i ? (m.id = -1,
            Ue(m, n)) : m()
        }
    }
}
let $t = !1;
const Zr = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject"
  , Qr = e => e.nodeType === 8;
function um(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: o, nextSibling: a, parentNode: i, remove: s, insert: l, createComment: c}} = e
      , u = (h, g) => {
        if (!g.hasChildNodes()) {
            n(null, h, g),
            go(),
            g._vnode = h;
            return
        }
        $t = !1,
        d(g.firstChild, h, null, null, null),
        go(),
        g._vnode = h,
        $t && console.error("Hydration completed but contains mismatches.")
    }
      , d = (h, g, A, M, I, P=!1) => {
        const T = Qr(h) && h.data === "["
          , C = () => b(h, g, A, M, I, T)
          , {type: F, ref: S, shapeFlag: R, patchFlag: V} = g;
        let $ = h.nodeType;
        g.el = h,
        V === -2 && (P = !1,
        g.dynamicChildren = null);
        let k = null;
        switch (F) {
        case jn:
            $ !== 3 ? g.children === "" ? (l(g.el = o(""), i(h), h),
            k = h) : k = C() : (h.data !== g.children && ($t = !0,
            h.data = g.children),
            k = a(h));
            break;
        case Ve:
            _(h) ? (k = a(h),
            E(g.el = h.content.firstChild, h, A)) : $ !== 8 || T ? k = C() : k = a(h);
            break;
        case mr:
            if (T && (h = a(h),
            $ = h.nodeType),
            $ === 1 || $ === 3) {
                k = h;
                const O = !g.children.length;
                for (let B = 0; B < g.staticCount; B++)
                    O && (g.children += k.nodeType === 1 ? k.outerHTML : k.data),
                    B === g.staticCount - 1 && (g.anchor = k),
                    k = a(k);
                return T ? a(k) : k
            } else
                C();
            break;
        case we:
            T ? k = m(h, g, A, M, I, P) : k = C();
            break;
        default:
            if (R & 1)
                ($ !== 1 || g.type.toLowerCase() !== h.tagName.toLowerCase()) && !_(h) ? k = C() : k = f(h, g, A, M, I, P);
            else if (R & 6) {
                g.slotScopeIds = I;
                const O = i(h);
                if (T ? k = w(h) : Qr(h) && h.data === "teleport start" ? k = w(h, h.data, "teleport end") : k = a(h),
                t(g, O, null, A, M, Zr(O), P),
                bn(g)) {
                    let B;
                    T ? (B = ie(we),
                    B.anchor = k ? k.previousSibling : O.lastChild) : B = h.nodeType === 3 ? We("") : ie("div"),
                    B.el = h,
                    g.component.subTree = B
                }
            } else
                R & 64 ? $ !== 8 ? k = C() : k = g.type.hydrate(h, g, A, M, I, P, e, p) : R & 128 && (k = g.type.hydrate(h, g, A, M, Zr(i(h)), I, P, e, d))
        }
        return S != null && _o(S, null, M, g),
        k
    }
      , f = (h, g, A, M, I, P) => {
        P = P || !!g.dynamicChildren;
        const {type: T, props: C, patchFlag: F, shapeFlag: S, dirs: R, transition: V} = g
          , $ = T === "input" && R || T === "option";
        if ($ || F !== -1) {
            if (R && wt(g, null, A, "created"),
            C)
                if ($ || !P || F & 48)
                    for (const B in C)
                        ($ && B.endsWith("value") || Lr(B) && !ur(B)) && r(h, B, null, C[B], !1, void 0, A);
                else
                    C.onClick && r(h, "onClick", null, C.onClick, !1, void 0, A);
            let k;
            (k = C && C.onVnodeBeforeMount) && ze(k, A, g);
            let O = !1;
            if (_(h)) {
                O = Au(M, V) && A && A.vnode.props && A.vnode.props.appear;
                const B = h.content.firstChild;
                O && V.beforeEnter(B),
                E(B, h, A),
                g.el = h = B
            }
            if (R && wt(g, null, A, "beforeMount"),
            ((k = C && C.onVnodeMounted) || R || O) && ru( () => {
                k && ze(k, A, g),
                O && V.enter(h),
                R && wt(g, null, A, "mounted")
            }
            , M),
            S & 16 && !(C && (C.innerHTML || C.textContent))) {
                let B = p(h.firstChild, g, h, A, M, I, P);
                for (; B; ) {
                    $t = !0;
                    const J = B;
                    B = B.nextSibling,
                    s(J)
                }
            } else
                S & 8 && h.textContent !== g.children && ($t = !0,
                h.textContent = g.children)
        }
        return h.nextSibling
    }
      , p = (h, g, A, M, I, P, T) => {
        T = T || !!g.dynamicChildren;
        const C = g.children
          , F = C.length;
        for (let S = 0; S < F; S++) {
            const R = T ? C[S] : C[S] = ot(C[S]);
            if (h)
                h = d(h, R, M, I, P, T);
            else {
                if (R.type === jn && !R.children)
                    continue;
                $t = !0,
                n(null, R, A, null, M, I, Zr(A), P)
            }
        }
        return h
    }
      , m = (h, g, A, M, I, P) => {
        const {slotScopeIds: T} = g;
        T && (I = I ? I.concat(T) : T);
        const C = i(h)
          , F = p(a(h), g, C, A, M, I, P);
        return F && Qr(F) && F.data === "]" ? a(g.anchor = F) : ($t = !0,
        l(g.anchor = c("]"), C, F),
        F)
    }
      , b = (h, g, A, M, I, P) => {
        if ($t = !0,
        g.el = null,
        P) {
            const F = w(h);
            for (; ; ) {
                const S = a(h);
                if (S && S !== F)
                    s(S);
                else
                    break
            }
        }
        const T = a(h)
          , C = i(h);
        return s(h),
        n(null, g, C, T, A, M, Zr(C), I),
        T
    }
      , w = (h, g="[", A="]") => {
        let M = 0;
        for (; h; )
            if (h = a(h),
            h && Qr(h) && (h.data === g && M++,
            h.data === A)) {
                if (M === 0)
                    return a(h);
                M--
            }
        return h
    }
      , E = (h, g, A) => {
        const M = g.parentNode;
        M && M.replaceChild(h, g);
        let I = A;
        for (; I; )
            I.vnode.el === g && (I.vnode.el = I.subTree.el = h),
            I = I.parent
    }
      , _ = h => h.nodeType === 1 && h.tagName.toLowerCase() === "template";
    return [u, d]
}
const Ue = ru;
function dm(e) {
    return _u(e)
}
function fm(e) {
    return _u(e, um)
}
function _u(e, t) {
    const n = Ta();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: a, createElement: i, createText: s, createComment: l, setText: c, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p=Tt, insertStaticContent: m} = e
      , b = (y, v, x, D=null, U=null, H=null, Z=!1, G=null, W=!!v.dynamicChildren) => {
        if (y === v)
            return;
        y && !ht(y, v) && (D = N(y),
        de(y, U, H, !0),
        y = null),
        v.patchFlag === -2 && (W = !1,
        v.dynamicChildren = null);
        const {type: j, ref: re, shapeFlag: ee} = v;
        switch (j) {
        case jn:
            w(y, v, x, D);
            break;
        case Ve:
            E(y, v, x, D);
            break;
        case mr:
            y == null && _(v, x, D, Z);
            break;
        case we:
            S(y, v, x, D, U, H, Z, G, W);
            break;
        default:
            ee & 1 ? A(y, v, x, D, U, H, Z, G, W) : ee & 6 ? R(y, v, x, D, U, H, Z, G, W) : (ee & 64 || ee & 128) && j.process(y, v, x, D, U, H, Z, G, W, z)
        }
        re != null && U && _o(re, y && y.ref, H, v || y, !v)
    }
      , w = (y, v, x, D) => {
        if (y == null)
            r(v.el = s(v.children), x, D);
        else {
            const U = v.el = y.el;
            v.children !== y.children && c(U, v.children)
        }
    }
      , E = (y, v, x, D) => {
        y == null ? r(v.el = l(v.children || ""), x, D) : v.el = y.el
    }
      , _ = (y, v, x, D) => {
        [y.el,y.anchor] = m(y.children, v, x, D, y.el, y.anchor)
    }
      , h = ({el: y, anchor: v}, x, D) => {
        let U;
        for (; y && y !== v; )
            U = f(y),
            r(y, x, D),
            y = U;
        r(v, x, D)
    }
      , g = ({el: y, anchor: v}) => {
        let x;
        for (; y && y !== v; )
            x = f(y),
            o(y),
            y = x;
        o(v)
    }
      , A = (y, v, x, D, U, H, Z, G, W) => {
        Z = Z || v.type === "svg",
        y == null ? M(v, x, D, U, H, Z, G, W) : T(y, v, U, H, Z, G, W)
    }
      , M = (y, v, x, D, U, H, Z, G) => {
        let W, j;
        const {type: re, props: ee, shapeFlag: oe, transition: ce, dirs: fe} = y;
        if (W = y.el = i(y.type, H, ee && ee.is, ee),
        oe & 8 ? u(W, y.children) : oe & 16 && P(y.children, W, null, D, U, H && re !== "foreignObject", Z, G),
        fe && wt(y, null, D, "created"),
        I(W, y, y.scopeId, Z, D),
        ee) {
            for (const _e in ee)
                _e !== "value" && !ur(_e) && a(W, _e, null, ee[_e], H, y.children, D, U, Ae);
            "value"in ee && a(W, "value", null, ee.value),
            (j = ee.onVnodeBeforeMount) && ze(j, D, y)
        }
        fe && wt(y, null, D, "beforeMount");
        const Ee = Au(U, ce);
        Ee && ce.beforeEnter(W),
        r(W, v, x),
        ((j = ee && ee.onVnodeMounted) || Ee || fe) && Ue( () => {
            j && ze(j, D, y),
            Ee && ce.enter(W),
            fe && wt(y, null, D, "mounted")
        }
        , U)
    }
      , I = (y, v, x, D, U) => {
        if (x && p(y, x),
        D)
            for (let H = 0; H < D.length; H++)
                p(y, D[H]);
        if (U) {
            let H = U.subTree;
            if (v === H) {
                const Z = U.vnode;
                I(y, Z, Z.scopeId, Z.slotScopeIds, U.parent)
            }
        }
    }
      , P = (y, v, x, D, U, H, Z, G, W=0) => {
        for (let j = W; j < y.length; j++) {
            const re = y[j] = G ? zt(y[j]) : ot(y[j]);
            b(null, re, v, x, D, U, H, Z, G)
        }
    }
      , T = (y, v, x, D, U, H, Z) => {
        const G = v.el = y.el;
        let {patchFlag: W, dynamicChildren: j, dirs: re} = v;
        W |= y.patchFlag & 16;
        const ee = y.props || Se
          , oe = v.props || Se;
        let ce;
        x && rn(x, !1),
        (ce = oe.onVnodeBeforeUpdate) && ze(ce, x, v, y),
        re && wt(v, y, x, "beforeUpdate"),
        x && rn(x, !0);
        const fe = U && v.type !== "foreignObject";
        if (j ? C(y.dynamicChildren, j, G, x, D, fe, H) : Z || B(y, v, G, null, x, D, fe, H, !1),
        W > 0) {
            if (W & 16)
                F(G, v, ee, oe, x, D, U);
            else if (W & 2 && ee.class !== oe.class && a(G, "class", null, oe.class, U),
            W & 4 && a(G, "style", ee.style, oe.style, U),
            W & 8) {
                const Ee = v.dynamicProps;
                for (let _e = 0; _e < Ee.length; _e++) {
                    const Le = Ee[_e]
                      , dt = ee[Le]
                      , xn = oe[Le];
                    (xn !== dt || Le === "value") && a(G, Le, dt, xn, U, y.children, x, D, Ae)
                }
            }
            W & 1 && y.children !== v.children && u(G, v.children)
        } else
            !Z && j == null && F(G, v, ee, oe, x, D, U);
        ((ce = oe.onVnodeUpdated) || re) && Ue( () => {
            ce && ze(ce, x, v, y),
            re && wt(v, y, x, "updated")
        }
        , D)
    }
      , C = (y, v, x, D, U, H, Z) => {
        for (let G = 0; G < v.length; G++) {
            const W = y[G]
              , j = v[G]
              , re = W.el && (W.type === we || !ht(W, j) || W.shapeFlag & 70) ? d(W.el) : x;
            b(W, j, re, null, D, U, H, Z, !0)
        }
    }
      , F = (y, v, x, D, U, H, Z) => {
        if (x !== D) {
            if (x !== Se)
                for (const G in x)
                    !ur(G) && !(G in D) && a(y, G, x[G], null, Z, v.children, U, H, Ae);
            for (const G in D) {
                if (ur(G))
                    continue;
                const W = D[G]
                  , j = x[G];
                W !== j && G !== "value" && a(y, G, j, W, Z, v.children, U, H, Ae)
            }
            "value"in D && a(y, "value", x.value, D.value)
        }
    }
      , S = (y, v, x, D, U, H, Z, G, W) => {
        const j = v.el = y ? y.el : s("")
          , re = v.anchor = y ? y.anchor : s("");
        let {patchFlag: ee, dynamicChildren: oe, slotScopeIds: ce} = v;
        ce && (G = G ? G.concat(ce) : ce),
        y == null ? (r(j, x, D),
        r(re, x, D),
        P(v.children, x, re, U, H, Z, G, W)) : ee > 0 && ee & 64 && oe && y.dynamicChildren ? (C(y.dynamicChildren, oe, x, U, H, Z, G),
        (v.key != null || U && v === U.subTree) && zi(y, v, !0)) : B(y, v, x, re, U, H, Z, G, W)
    }
      , R = (y, v, x, D, U, H, Z, G, W) => {
        v.slotScopeIds = G,
        y == null ? v.shapeFlag & 512 ? U.ctx.activate(v, x, D, Z, W) : V(v, x, D, U, H, Z, W) : $(y, v, W)
    }
      , V = (y, v, x, D, U, H, Z) => {
        const G = y.component = Em(y, D, U);
        if (No(y) && (G.ctx.renderer = z),
        km(G),
        G.asyncDep) {
            if (U && U.registerDep(G, k),
            !y.el) {
                const W = G.subTree = ie(Ve);
                E(null, W, v, x)
            }
            return
        }
        k(G, y, v, x, U, H, Z)
    }
      , $ = (y, v, x) => {
        const D = v.component = y.component;
        if (Rp(y, v, x))
            if (D.asyncDep && !D.asyncResolved) {
                O(D, v, x);
                return
            } else
                D.next = v,
                kp(D.update),
                D.update();
        else
            v.el = y.el,
            D.vnode = v
    }
      , k = (y, v, x, D, U, H, Z) => {
        const G = () => {
            if (y.isMounted) {
                let {next: re, bu: ee, u: oe, parent: ce, vnode: fe} = y, Ee = re, _e;
                rn(y, !1),
                re ? (re.el = fe.el,
                O(y, re, Z)) : re = fe,
                ee && dr(ee),
                (_e = re.props && re.props.onVnodeBeforeUpdate) && ze(_e, ce, re, fe),
                rn(y, !0);
                const Le = Xo(y)
                  , dt = y.subTree;
                y.subTree = Le,
                b(dt, Le, d(dt.el), N(dt), y, U, H),
                re.el = Le.el,
                Ee === null && Di(y, Le.el),
                oe && Ue(oe, U),
                (_e = re.props && re.props.onVnodeUpdated) && Ue( () => ze(_e, ce, re, fe), U)
            } else {
                let re;
                const {el: ee, props: oe} = v
                  , {bm: ce, m: fe, parent: Ee} = y
                  , _e = bn(v);
                if (rn(y, !1),
                ce && dr(ce),
                !_e && (re = oe && oe.onVnodeBeforeMount) && ze(re, Ee, v),
                rn(y, !0),
                ee && ye) {
                    const Le = () => {
                        y.subTree = Xo(y),
                        ye(ee, y.subTree, y, U, null)
                    }
                    ;
                    _e ? v.type.__asyncLoader().then( () => !y.isUnmounted && Le()) : Le()
                } else {
                    const Le = y.subTree = Xo(y);
                    b(null, Le, x, D, y, U, H),
                    v.el = Le.el
                }
                if (fe && Ue(fe, U),
                !_e && (re = oe && oe.onVnodeMounted)) {
                    const Le = v;
                    Ue( () => ze(re, Ee, Le), U)
                }
                (v.shapeFlag & 256 || Ee && bn(Ee.vnode) && Ee.vnode.shapeFlag & 256) && y.a && Ue(y.a, U),
                y.isMounted = !0,
                v = x = D = null
            }
        }
          , W = y.effect = new Ti(G, () => Ii(j),y.scope)
          , j = y.update = () => W.run();
        j.id = y.uid,
        rn(y, !0),
        j()
    }
      , O = (y, v, x) => {
        v.component = y;
        const D = y.vnode.props;
        y.vnode = v,
        y.next = null,
        im(y, v.props, D, x),
        cm(y, v.children, x),
        Jn(),
        Us(),
        Yn()
    }
      , B = (y, v, x, D, U, H, Z, G, W=!1) => {
        const j = y && y.children
          , re = y ? y.shapeFlag : 0
          , ee = v.children
          , {patchFlag: oe, shapeFlag: ce} = v;
        if (oe > 0) {
            if (oe & 128) {
                le(j, ee, x, D, U, H, Z, G, W);
                return
            } else if (oe & 256) {
                J(j, ee, x, D, U, H, Z, G, W);
                return
            }
        }
        ce & 8 ? (re & 16 && Ae(j, U, H),
        ee !== j && u(x, ee)) : re & 16 ? ce & 16 ? le(j, ee, x, D, U, H, Z, G, W) : Ae(j, U, H, !0) : (re & 8 && u(x, ""),
        ce & 16 && P(ee, x, D, U, H, Z, G, W))
    }
      , J = (y, v, x, D, U, H, Z, G, W) => {
        y = y || Dn,
        v = v || Dn;
        const j = y.length
          , re = v.length
          , ee = Math.min(j, re);
        let oe;
        for (oe = 0; oe < ee; oe++) {
            const ce = v[oe] = W ? zt(v[oe]) : ot(v[oe]);
            b(y[oe], ce, x, null, U, H, Z, G, W)
        }
        j > re ? Ae(y, U, H, !0, !1, ee) : P(v, x, D, U, H, Z, G, W, ee)
    }
      , le = (y, v, x, D, U, H, Z, G, W) => {
        let j = 0;
        const re = v.length;
        let ee = y.length - 1
          , oe = re - 1;
        for (; j <= ee && j <= oe; ) {
            const ce = y[j]
              , fe = v[j] = W ? zt(v[j]) : ot(v[j]);
            if (ht(ce, fe))
                b(ce, fe, x, null, U, H, Z, G, W);
            else
                break;
            j++
        }
        for (; j <= ee && j <= oe; ) {
            const ce = y[ee]
              , fe = v[oe] = W ? zt(v[oe]) : ot(v[oe]);
            if (ht(ce, fe))
                b(ce, fe, x, null, U, H, Z, G, W);
            else
                break;
            ee--,
            oe--
        }
        if (j > ee) {
            if (j <= oe) {
                const ce = oe + 1
                  , fe = ce < re ? v[ce].el : D;
                for (; j <= oe; )
                    b(null, v[j] = W ? zt(v[j]) : ot(v[j]), x, fe, U, H, Z, G, W),
                    j++
            }
        } else if (j > oe)
            for (; j <= ee; )
                de(y[j], U, H, !0),
                j++;
        else {
            const ce = j
              , fe = j
              , Ee = new Map;
            for (j = fe; j <= oe; j++) {
                const Ye = v[j] = W ? zt(v[j]) : ot(v[j]);
                Ye.key != null && Ee.set(Ye.key, j)
            }
            let _e, Le = 0;
            const dt = oe - fe + 1;
            let xn = !1
              , Ps = 0;
            const Xn = new Array(dt);
            for (j = 0; j < dt; j++)
                Xn[j] = 0;
            for (j = ce; j <= ee; j++) {
                const Ye = y[j];
                if (Le >= dt) {
                    de(Ye, U, H, !0);
                    continue
                }
                let At;
                if (Ye.key != null)
                    At = Ee.get(Ye.key);
                else
                    for (_e = fe; _e <= oe; _e++)
                        if (Xn[_e - fe] === 0 && ht(Ye, v[_e])) {
                            At = _e;
                            break
                        }
                At === void 0 ? de(Ye, U, H, !0) : (Xn[At - fe] = j + 1,
                At >= Ps ? Ps = At : xn = !0,
                b(Ye, v[At], x, null, U, H, Z, G, W),
                Le++)
            }
            const Rs = xn ? pm(Xn) : Dn;
            for (_e = Rs.length - 1,
            j = dt - 1; j >= 0; j--) {
                const Ye = fe + j
                  , At = v[Ye]
                  , Ms = Ye + 1 < re ? v[Ye + 1].el : D;
                Xn[j] === 0 ? b(null, At, x, Ms, U, H, Z, G, W) : xn && (_e < 0 || j !== Rs[_e] ? De(At, x, Ms, 2) : _e--)
            }
        }
    }
      , De = (y, v, x, D, U=null) => {
        const {el: H, type: Z, transition: G, children: W, shapeFlag: j} = y;
        if (j & 6) {
            De(y.component.subTree, v, x, D);
            return
        }
        if (j & 128) {
            y.suspense.move(v, x, D);
            return
        }
        if (j & 64) {
            Z.move(y, v, x, z);
            return
        }
        if (Z === we) {
            r(H, v, x);
            for (let ee = 0; ee < W.length; ee++)
                De(W[ee], v, x, D);
            r(y.anchor, v, x);
            return
        }
        if (Z === mr) {
            h(y, v, x);
            return
        }
        if (D !== 2 && j & 1 && G)
            if (D === 0)
                G.beforeEnter(H),
                r(H, v, x),
                Ue( () => G.enter(H), U);
            else {
                const {leave: ee, delayLeave: oe, afterLeave: ce} = G
                  , fe = () => r(H, v, x)
                  , Ee = () => {
                    ee(H, () => {
                        fe(),
                        ce && ce()
                    }
                    )
                }
                ;
                oe ? oe(H, fe, Ee) : Ee()
            }
        else
            r(H, v, x)
    }
      , de = (y, v, x, D=!1, U=!1) => {
        const {type: H, props: Z, ref: G, children: W, dynamicChildren: j, shapeFlag: re, patchFlag: ee, dirs: oe} = y;
        if (G != null && _o(G, null, x, y, !0),
        re & 256) {
            v.ctx.deactivate(y);
            return
        }
        const ce = re & 1 && oe
          , fe = !bn(y);
        let Ee;
        if (fe && (Ee = Z && Z.onVnodeBeforeUnmount) && ze(Ee, v, y),
        re & 6)
            Nt(y.component, x, D);
        else {
            if (re & 128) {
                y.suspense.unmount(x, D);
                return
            }
            ce && wt(y, null, v, "beforeUnmount"),
            re & 64 ? y.type.remove(y, v, x, U, z, D) : j && (H !== we || ee > 0 && ee & 64) ? Ae(j, v, x, !1, !0) : (H === we && ee & 384 || !U && re & 16) && Ae(W, v, x),
            D && Je(y)
        }
        (fe && (Ee = Z && Z.onVnodeUnmounted) || ce) && Ue( () => {
            Ee && ze(Ee, v, y),
            ce && wt(y, null, v, "unmounted")
        }
        , x)
    }
      , Je = y => {
        const {type: v, el: x, anchor: D, transition: U} = y;
        if (v === we) {
            ut(x, D);
            return
        }
        if (v === mr) {
            g(y);
            return
        }
        const H = () => {
            o(x),
            U && !U.persisted && U.afterLeave && U.afterLeave()
        }
        ;
        if (y.shapeFlag & 1 && U && !U.persisted) {
            const {leave: Z, delayLeave: G} = U
              , W = () => Z(x, H);
            G ? G(y.el, H, W) : W()
        } else
            H()
    }
      , ut = (y, v) => {
        let x;
        for (; y !== v; )
            x = f(y),
            o(y),
            y = x;
        o(v)
    }
      , Nt = (y, v, x) => {
        const {bum: D, scope: U, update: H, subTree: Z, um: G} = y;
        D && dr(D),
        U.stop(),
        H && (H.active = !1,
        de(Z, y, v, x)),
        G && Ue(G, v),
        Ue( () => {
            y.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , Ae = (y, v, x, D=!1, U=!1, H=0) => {
        for (let Z = H; Z < y.length; Z++)
            de(y[Z], v, x, D, U)
    }
      , N = y => y.shapeFlag & 6 ? N(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : f(y.anchor || y.el)
      , Y = (y, v, x) => {
        y == null ? v._vnode && de(v._vnode, null, null, !0) : b(v._vnode || null, y, v, null, null, null, x),
        Us(),
        go(),
        v._vnode = y
    }
      , z = {
        p: b,
        um: de,
        m: De,
        r: Je,
        mt: V,
        mc: P,
        pc: B,
        pbc: C,
        n: N,
        o: e
    };
    let te, ye;
    return t && ([te,ye] = t(z)),
    {
        render: Y,
        hydrate: te,
        createApp: om(Y, te)
    }
}
function rn({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Au(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function zi(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (ae(r) && ae(o))
        for (let a = 0; a < r.length; a++) {
            const i = r[a];
            let s = o[a];
            s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[a] = zt(o[a]),
            s.el = i.el),
            n || zi(i, s)),
            s.type === jn && (s.el = i.el)
        }
}
function pm(e) {
    const t = e.slice()
      , n = [0];
    let r, o, a, i, s;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1],
            e[o] < c) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (a = 0,
            i = n.length - 1; a < i; )
                s = a + i >> 1,
                e[n[s]] < c ? a = s + 1 : i = s;
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]),
            n[a] = r)
        }
    }
    for (a = n.length,
    i = n[a - 1]; a-- > 0; )
        n[a] = i,
        i = t[i];
    return n
}
const mm = e => e.__isTeleport
  , pr = e => e && (e.disabled || e.disabled === "")
  , Xs = e => typeof SVGElement < "u" && e instanceof SVGElement
  , Ba = (e, t) => {
    const n = e && e.to;
    return Me(n) ? t ? t(n) : null : n
}
  , hm = {
    __isTeleport: !0,
    process(e, t, n, r, o, a, i, s, l, c) {
        const {mc: u, pc: d, pbc: f, o: {insert: p, querySelector: m, createText: b, createComment: w}} = c
          , E = pr(t.props);
        let {shapeFlag: _, children: h, dynamicChildren: g} = t;
        if (e == null) {
            const A = t.el = b("")
              , M = t.anchor = b("");
            p(A, n, r),
            p(M, n, r);
            const I = t.target = Ba(t.props, m)
              , P = t.targetAnchor = b("");
            I && (p(P, I),
            i = i || Xs(I));
            const T = (C, F) => {
                _ & 16 && u(h, C, F, o, a, i, s, l)
            }
            ;
            E ? T(n, M) : I && T(I, P)
        } else {
            t.el = e.el;
            const A = t.anchor = e.anchor
              , M = t.target = e.target
              , I = t.targetAnchor = e.targetAnchor
              , P = pr(e.props)
              , T = P ? n : M
              , C = P ? A : I;
            if (i = i || Xs(M),
            g ? (f(e.dynamicChildren, g, T, o, a, i, s),
            zi(e, t, !0)) : l || d(e, t, T, C, o, a, i, s, !1),
            E)
                P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xr(t, n, A, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const F = t.target = Ba(t.props, m);
                F && Xr(t, F, null, c, 0)
            } else
                P && Xr(t, M, I, c, 1)
        }
        wu(t)
    },
    remove(e, t, n, r, {um: o, o: {remove: a}}, i) {
        const {shapeFlag: s, children: l, anchor: c, targetAnchor: u, target: d, props: f} = e;
        if (d && a(u),
        i && a(c),
        s & 16) {
            const p = i || !pr(f);
            for (let m = 0; m < l.length; m++) {
                const b = l[m];
                o(b, t, n, p, !!b.dynamicChildren)
            }
        }
    },
    move: Xr,
    hydrate: gm
};
function Xr(e, t, n, {o: {insert: r}, m: o}, a=2) {
    a === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: s, shapeFlag: l, children: c, props: u} = e
      , d = a === 2;
    if (d && r(i, t, n),
    (!d || pr(u)) && l & 16)
        for (let f = 0; f < c.length; f++)
            o(c[f], t, n, 2);
    d && r(s, t, n)
}
function gm(e, t, n, r, o, a, {o: {nextSibling: i, parentNode: s, querySelector: l}}, c) {
    const u = t.target = Ba(t.props, l);
    if (u) {
        const d = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (pr(t.props))
                t.anchor = c(i(e), t, s(e), n, r, o, a),
                t.targetAnchor = d;
            else {
                t.anchor = i(e);
                let f = d;
                for (; f; )
                    if (f = i(f),
                    f && f.nodeType === 8 && f.data === "teleport anchor") {
                        t.targetAnchor = f,
                        u._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                c(d, t, u, n, r, o, a)
            }
        wu(t)
    }
    return t.anchor && i(t.anchor)
}
const ym = hm;
function wu(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const we = Symbol.for("v-fgt")
  , jn = Symbol.for("v-txt")
  , Ve = Symbol.for("v-cmt")
  , mr = Symbol.for("v-stc")
  , hr = [];
let at = null;
function ne(e=!1) {
    hr.push(at = e ? null : [])
}
function Eu() {
    hr.pop(),
    at = hr[hr.length - 1] || null
}
let Vn = 1;
function Ao(e) {
    Vn += e
}
function ku(e) {
    return e.dynamicChildren = Vn > 0 ? at || Dn : null,
    Eu(),
    Vn > 0 && at && at.push(e),
    e
}
function ue(e, t, n, r, o, a) {
    return ku(Q(e, t, n, r, o, a, !0))
}
function et(e, t, n, r, o) {
    return ku(ie(e, t, n, r, o, !0))
}
function Gn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ht(e, t) {
    return e.type === t.type && e.key === t.key
}
const $o = "__vInternal"
  , Tu = ({key: e}) => e ?? null
  , so = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Me(e) || Ce(e) || se(e) ? {
    i: Fe,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Q(e, t=null, n=null, r=0, o=null, a=e === we ? 0 : 1, i=!1, s=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Tu(t),
        ref: t && so(t),
        scopeId: Qc,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Fe
    };
    return s ? (Wi(l, n),
    a & 128 && e.normalize(l)) : n && (l.shapeFlag |= Me(n) ? 8 : 16),
    Vn > 0 && !i && at && (l.patchFlag > 0 || a & 6) && l.patchFlag !== 32 && at.push(l),
    l
}
const ie = bm;
function bm(e, t=null, n=null, r=0, o=null, a=!1) {
    if ((!e || e === eu) && (e = Ve),
    Gn(e)) {
        const s = xt(e, t, !0);
        return n && Wi(s, n),
        Vn > 0 && !a && at && (s.shapeFlag & 6 ? at[at.indexOf(e)] = s : at.push(s)),
        s.patchFlag |= -2,
        s
    }
    if (xm(e) && (e = e.__vccOpts),
    t) {
        t = vm(t);
        let {class: s, style: l} = t;
        s && !Me(s) && (t.class = gt(s)),
        ke(l) && (Gc(l) && !ae(l) && (l = Ne({}, l)),
        t.style = Lo(l))
    }
    const i = Me(e) ? 1 : nu(e) ? 128 : mm(e) ? 64 : ke(e) ? 4 : se(e) ? 2 : 0;
    return Q(e, t, n, r, o, i, a, !0)
}
function vm(e) {
    return e ? Gc(e) || $o in e ? Ne({}, e) : e : null
}
function xt(e, t, n=!1) {
    const {props: r, ref: o, patchFlag: a, children: i} = e
      , s = t ? qi(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: s,
        key: s && Tu(s),
        ref: t && t.ref ? n && o ? ae(o) ? o.concat(so(t)) : [o, so(t)] : so(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== we ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && xt(e.ssContent),
        ssFallback: e.ssFallback && xt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function We(e=" ", t=0) {
    return ie(jn, null, e, t)
}
function _m(e, t) {
    const n = ie(mr, null, e);
    return n.staticCount = t,
    n
}
function yt(e="", t=!1) {
    return t ? (ne(),
    et(Ve, null, e)) : ie(Ve, null, e)
}
function ot(e) {
    return e == null || typeof e == "boolean" ? ie(Ve) : ae(e) ? ie(we, null, e.slice()) : typeof e == "object" ? zt(e) : ie(jn, null, String(e))
}
function zt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e)
}
function Wi(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (ae(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Wi(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !($o in t) ? t._ctx = Fe : o === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        se(t) ? (t = {
            default: t,
            _ctx: Fe
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [We(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function qi(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = gt([t.class, r.class]));
            else if (o === "style")
                t.style = Lo([t.style, r.style]);
            else if (Lr(o)) {
                const a = t[o]
                  , i = r[o];
                i && a !== i && !(ae(a) && a.includes(i)) && (t[o] = a ? [].concat(a, i) : i)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function ze(e, t, n, r=null) {
    it(e, t, 7, [n, r])
}
const Am = mu();
let wm = 0;
function Em(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || Am
      , a = {
        uid: wm++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Oc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: gu(r, o),
        emitsOptions: Zc(r, o),
        emit: null,
        emitted: null,
        propsDefaults: Se,
        inheritAttrs: r.inheritAttrs,
        ctx: Se,
        data: Se,
        props: Se,
        attrs: Se,
        slots: Se,
        refs: Se,
        setupState: Se,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return a.ctx = {
        _: a
    },
    a.root = t ? t.root : a,
    a.emit = Sp.bind(null, a),
    e.ce && e.ce(a),
    a
}
let Be = null;
const vt = () => Be || Fe;
let Ji, Cn, el = "__VUE_INSTANCE_SETTERS__";
(Cn = Ta()[el]) || (Cn = Ta()[el] = []),
Cn.push(e => Be = e),
Ji = e => {
    Cn.length > 1 ? Cn.forEach(t => t(e)) : Cn[0](e)
}
;
const Kn = e => {
    Ji(e),
    e.scope.on()
}
  , vn = () => {
    Be && Be.scope.off(),
    Ji(null)
}
;
function Su(e) {
    return e.vnode.shapeFlag & 4
}
let Cr = !1;
function km(e, t=!1) {
    Cr = t;
    const {props: n, children: r} = e.vnode
      , o = Su(e);
    am(e, n, o, t),
    lm(e, r);
    const a = o ? Tm(e, t) : void 0;
    return Cr = !1,
    a
}
function Tm(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = Do(new Proxy(e.ctx,Yp));
    const {setup: r} = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? Cu(e) : null;
        Kn(e),
        Jn();
        const a = en(r, e, 0, [e.props, o]);
        if (Yn(),
        vn(),
        Sc(a)) {
            if (a.then(vn, vn),
            t)
                return a.then(i => {
                    Na(e, i, t)
                }
                ).catch(i => {
                    Dr(i, e, 0)
                }
                );
            e.asyncDep = a
        } else
            Na(e, a, t)
    } else
        xu(e, t)
}
function Na(e, t, n) {
    se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = zc(t)),
    xu(e, n)
}
let tl;
function xu(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && tl && !r.render) {
            const o = r.template || Vi(e).template;
            if (o) {
                const {isCustomElement: a, compilerOptions: i} = e.appContext.config
                  , {delimiters: s, compilerOptions: l} = r
                  , c = Ne(Ne({
                    isCustomElement: a,
                    delimiters: s
                }, i), l);
                r.render = tl(o, c)
            }
        }
        e.render = r.render || Tt
    }
    {
        Kn(e),
        Jn();
        try {
            Qp(e)
        } finally {
            Yn(),
            vn()
        }
    }
}
function Sm(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return qe(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function Cu(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Sm(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Uo(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(zc(Do(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in fr)
                    return fr[n](e)
            },
            has(t, n) {
                return n in t || n in fr
            }
        }))
}
function Fa(e, t=!0) {
    return se(e) ? e.displayName || e.name : e.name || t && e.__name
}
function xm(e) {
    return se(e) && "__vccOpts"in e
}
const X = (e, t) => Ap(e, t, Cr);
function ge(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ke(t) && !ae(t) ? Gn(t) ? ie(e, null, [t]) : ie(e, t) : ie(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Gn(n) && (n = [n]),
    ie(e, t, n))
}
const Cm = Symbol.for("v-scx")
  , Pm = () => be(Cm)
  , Pu = "3.3.8"
  , Rm = "http://www.w3.org/2000/svg"
  , pn = typeof document < "u" ? document : null
  , nl = pn && pn.createElement("template")
  , Mm = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const o = t ? pn.createElementNS(Rm, e) : pn.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e => pn.createTextNode(e),
    createComment: e => pn.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => pn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, a) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === a || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === a || !(o = o.nextSibling)); )
                ;
        else {
            nl.innerHTML = r ? `<svg>${e}</svg>` : e;
            const s = nl.content;
            if (r) {
                const l = s.firstChild;
                for (; l.firstChild; )
                    s.appendChild(l.firstChild);
                s.removeChild(l)
            }
            t.insertBefore(s, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Ut = "transition"
  , tr = "animation"
  , Pr = Symbol("_vtc")
  , Ho = (e, {slots: t}) => ge(Hp, Om(e), t);
Ho.displayName = "Transition";
const Ru = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Ho.props = Ne({}, au, Ru);
const on = (e, t=[]) => {
    ae(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , rl = e => e ? ae(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Om(e) {
    const t = {};
    for (const S in e)
        S in Ru || (t[S] = e[S]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: a=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: s=`${n}-enter-to`, appearFromClass: l=a, appearActiveClass: c=i, appearToClass: u=s, leaveFromClass: d=`${n}-leave-from`, leaveActiveClass: f=`${n}-leave-active`, leaveToClass: p=`${n}-leave-to`} = e
      , m = Lm(o)
      , b = m && m[0]
      , w = m && m[1]
      , {onBeforeEnter: E, onEnter: _, onEnterCancelled: h, onLeave: g, onLeaveCancelled: A, onBeforeAppear: M=E, onAppear: I=_, onAppearCancelled: P=h} = t
      , T = (S, R, V) => {
        an(S, R ? u : s),
        an(S, R ? c : i),
        V && V()
    }
      , C = (S, R) => {
        S._isLeaving = !1,
        an(S, d),
        an(S, p),
        an(S, f),
        R && R()
    }
      , F = S => (R, V) => {
        const $ = S ? I : _
          , k = () => T(R, S, V);
        on($, [R, k]),
        ol( () => {
            an(R, S ? l : a),
            Ht(R, S ? u : s),
            rl($) || al(R, r, b, k)
        }
        )
    }
    ;
    return Ne(t, {
        onBeforeEnter(S) {
            on(E, [S]),
            Ht(S, a),
            Ht(S, i)
        },
        onBeforeAppear(S) {
            on(M, [S]),
            Ht(S, l),
            Ht(S, c)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(S, R) {
            S._isLeaving = !0;
            const V = () => C(S, R);
            Ht(S, d),
            Bm(),
            Ht(S, f),
            ol( () => {
                S._isLeaving && (an(S, d),
                Ht(S, p),
                rl(g) || al(S, r, w, V))
            }
            ),
            on(g, [S, V])
        },
        onEnterCancelled(S) {
            T(S, !1),
            on(h, [S])
        },
        onAppearCancelled(S) {
            T(S, !0),
            on(P, [S])
        },
        onLeaveCancelled(S) {
            C(S),
            on(A, [S])
        }
    })
}
function Lm(e) {
    if (e == null)
        return null;
    if (ke(e))
        return [oa(e.enter), oa(e.leave)];
    {
        const t = oa(e);
        return [t, t]
    }
}
function oa(e) {
    return Pc(e)
}
function Ht(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Pr] || (e[Pr] = new Set)).add(t)
}
function an(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Pr];
    n && (n.delete(t),
    n.size || (e[Pr] = void 0))
}
function ol(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let Im = 0;
function al(e, t, n, r) {
    const o = e._endId = ++Im
      , a = () => {
        o === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(a, n);
    const {type: i, timeout: s, propCount: l} = Dm(e, t);
    if (!i)
        return r();
    const c = i + "end";
    let u = 0;
    const d = () => {
        e.removeEventListener(c, f),
        a()
    }
      , f = p => {
        p.target === e && ++u >= l && d()
    }
    ;
    setTimeout( () => {
        u < l && d()
    }
    , s + 1),
    e.addEventListener(c, f)
}
function Dm(e, t) {
    const n = window.getComputedStyle(e)
      , r = m => (n[m] || "").split(", ")
      , o = r(`${Ut}Delay`)
      , a = r(`${Ut}Duration`)
      , i = il(o, a)
      , s = r(`${tr}Delay`)
      , l = r(`${tr}Duration`)
      , c = il(s, l);
    let u = null
      , d = 0
      , f = 0;
    t === Ut ? i > 0 && (u = Ut,
    d = i,
    f = a.length) : t === tr ? c > 0 && (u = tr,
    d = c,
    f = l.length) : (d = Math.max(i, c),
    u = d > 0 ? i > c ? Ut : tr : null,
    f = u ? u === Ut ? a.length : l.length : 0);
    const p = u === Ut && /\b(transform|all)(,|$)/.test(r(`${Ut}Property`).toString());
    return {
        type: u,
        timeout: d,
        propCount: f,
        hasTransform: p
    }
}
function il(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => sl(n) + sl(e[r])))
}
function sl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Bm() {
    return document.body.offsetHeight
}
function Nm(e, t, n) {
    const r = e[Pr];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Yi = Symbol("_vod")
  , Fm = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Yi] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : nr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        nr(e, !0),
        r.enter(e)) : r.leave(e, () => {
            nr(e, !1)
        }
        ) : nr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        nr(e, t)
    }
};
function nr(e, t) {
    e.style.display = t ? e[Yi] : "none"
}
function $m(e, t, n) {
    const r = e.style
      , o = Me(n);
    if (n && !o) {
        if (t && !Me(t))
            for (const a in t)
                n[a] == null && $a(r, a, "");
        for (const a in n)
            $a(r, a, n[a])
    } else {
        const a = r.display;
        o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
        Yi in e && (r.display = a)
    }
}
const ll = /\s*!important$/;
function $a(e, t, n) {
    if (ae(n))
        n.forEach(r => $a(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Um(e, t);
        ll.test(n) ? e.setProperty(qn(r), n.replace(ll, ""), "important") : e[r] = n
    }
}
const cl = ["Webkit", "Moz", "ms"]
  , aa = {};
function Um(e, t) {
    const n = aa[t];
    if (n)
        return n;
    let r = St(t);
    if (r !== "filter" && r in e)
        return aa[t] = r;
    r = Oo(r);
    for (let o = 0; o < cl.length; o++) {
        const a = cl[o] + r;
        if (a in e)
            return aa[t] = a
    }
    return t
}
const ul = "http://www.w3.org/1999/xlink";
function Hm(e, t, n, r, o) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(ul, t.slice(6, t.length)) : e.setAttributeNS(ul, t, n);
    else {
        const a = Gf(t);
        n == null || a && !Rc(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n)
    }
}
function jm(e, t, n, r, o, a, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, o, a),
        e[t] = n ?? "";
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        e._value = n;
        const c = s === "OPTION" ? e.getAttribute("value") : e.value
          , u = n ?? "";
        c !== u && (e.value = u),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = Rc(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function Vm(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Gm(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const dl = Symbol("_vei");
function Km(e, t, n, r, o=null) {
    const a = e[dl] || (e[dl] = {})
      , i = a[t];
    if (r && i)
        i.value = r;
    else {
        const [s,l] = zm(t);
        if (r) {
            const c = a[t] = Jm(r, o);
            Vm(e, s, c, l)
        } else
            i && (Gm(e, s, i, l),
            a[t] = void 0)
    }
}
const fl = /(?:Once|Passive|Capture)$/;
function zm(e) {
    let t;
    if (fl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(fl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : qn(e.slice(2)), t]
}
let ia = 0;
const Wm = Promise.resolve()
  , qm = () => ia || (Wm.then( () => ia = 0),
ia = Date.now());
function Jm(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        it(Ym(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = qm(),
    n
}
function Ym(e, t) {
    if (ae(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => o => !o._stopped && r && r(o))
    } else
        return t
}
const pl = /^on[a-z]/
  , Zm = (e, t, n, r, o=!1, a, i, s, l) => {
    t === "class" ? Nm(e, r, o) : t === "style" ? $m(e, n, r) : Lr(t) ? _i(t) || Km(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Qm(e, t, r, o)) ? jm(e, t, r, a, i, s, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Hm(e, t, r, o))
}
;
function Qm(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && pl.test(t) && se(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || pl.test(t) && Me(n) ? !1 : t in e
}
const Xm = ["ctrl", "shift", "alt", "meta"]
  , eh = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => Xm.some(n => e[`${n}Key`] && !t.includes(n))
}
  , ml = (e, t) => (n, ...r) => {
    for (let o = 0; o < t.length; o++) {
        const a = eh[t[o]];
        if (a && a(n, t))
            return
    }
    return e(n, ...r)
}
  , Mu = Ne({
    patchProp: Zm
}, Mm);
let gr, hl = !1;
function th() {
    return gr || (gr = dm(Mu))
}
function nh() {
    return gr = hl ? gr : fm(Mu),
    hl = !0,
    gr
}
const rh = (...e) => {
    const t = th().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = Ou(r);
        if (!o)
            return;
        const a = t._component;
        !se(a) && !a.render && !a.template && (a.template = o.innerHTML),
        o.innerHTML = "";
        const i = n(o, !1, o instanceof SVGElement);
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
  , oh = (...e) => {
    const t = nh().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = Ou(r);
        if (o)
            return n(o, !0, o instanceof SVGElement)
    }
    ,
    t
}
;
function Ou(e) {
    return Me(e) ? document.querySelector(e) : e
}
const ah = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , ih = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , sh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function lh(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        ch(e);
        return
    }
    return t
}
function ch(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function uh(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.at(-1) === '"' && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!sh.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (ah.test(e) || ih.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, lh)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
const dh = /#/g
  , fh = /&/g
  , ph = /=/g
  , Zi = /\+/g
  , mh = /%5e/gi
  , hh = /%60/gi
  , gh = /%7c/gi
  , yh = /%20/gi;
function bh(e) {
    return encodeURI("" + e).replace(gh, "|")
}
function Ua(e) {
    return bh(typeof e == "string" ? e : JSON.stringify(e)).replace(Zi, "%2B").replace(yh, "+").replace(dh, "%23").replace(fh, "%26").replace(hh, "`").replace(mh, "^")
}
function sa(e) {
    return Ua(e).replace(ph, "%3D")
}
function Lu(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function vh(e) {
    return Lu(e.replace(Zi, " "))
}
function _h(e) {
    return Lu(e.replace(Zi, " "))
}
function Ah(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const o = vh(r[1]);
        if (o === "__proto__" || o === "constructor")
            continue;
        const a = _h(r[2] || "");
        t[o] === void 0 ? t[o] = a : Array.isArray(t[o]) ? t[o].push(a) : t[o] = [t[o], a]
    }
    return t
}
function wh(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n => `${sa(e)}=${Ua(n)}`).join("&") : `${sa(e)}=${Ua(t)}` : sa(e)
}
function Eh(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => wh(t, e[t])).filter(Boolean).join("&")
}
const kh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , Th = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , Sh = /^([/\\]\s*){2,}[^/\\]/;
function Iu(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? kh.test(e) : Th.test(e) || (t.acceptRelative ? Sh.test(e) : !1)
}
const xh = /\/$|\/\?/;
function Ha(e="", t=!1) {
    return t ? xh.test(e) : e.endsWith("/")
}
function Ch(e="", t=!1) {
    if (!t)
        return (Ha(e) ? e.slice(0, -1) : e) || "/";
    if (!Ha(e, !0))
        return e || "/";
    const [n,...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}
function Ph(e="", t=!1) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Ha(e, !0))
        return e || "/";
    const [n,...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}
function Rh(e, t) {
    if (Oh(t) || Iu(e))
        return e;
    const n = Ch(t);
    return e.startsWith(n) ? e : Dh(n, e)
}
function Mh(e, t) {
    const n = Bh(e)
      , r = {
        ...Ah(n.search),
        ...t
    };
    return n.search = Eh(r),
    Nh(n)
}
function Oh(e) {
    return !e || e === "/"
}
function Lh(e) {
    return e && e !== "/"
}
const Ih = /^\.?\//;
function Dh(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => Lh(o)))
        if (n) {
            const o = r.replace(Ih, "");
            n = Ph(n) + o
        } else
            n = r;
    return n
}
function Bh(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
    if (n) {
        const [,d,f=""] = n;
        return {
            protocol: d,
            pathname: f,
            href: d + f,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!Iu(e, {
        acceptRelative: !0
    }))
        return gl(e);
    const [,r="",o,a=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,i="",s=""] = a.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: c, hash: u} = gl(s.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r,
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: i,
        pathname: l,
        search: c,
        hash: u
    }
}
function gl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function Nh(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , o = e.auth ? e.auth + "@" : ""
      , a = e.host || "";
    return (e.protocol ? e.protocol + "//" : "") + o + a + t + n + r
}
class Fh extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function $h(e) {
    var l, c, u, d, f;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((d = e.options) == null ? void 0 : d.method) || "GET"
      , r = ((f = e.request) == null ? void 0 : f.url) || String(e.request) || "/"
      , o = `[${n}] ${JSON.stringify(r)}`
      , a = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , i = `${o}: ${a}${t ? ` ${t}` : ""}`
      , s = new Fh(i,e.error ? {
        cause: e.error
    } : void 0);
    for (const p of ["request", "options", "response"])
        Object.defineProperty(s, p, {
            get() {
                return e[p]
            }
        });
    for (const [p,m] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(s, p, {
            get() {
                return e.response && e.response[m]
            }
        });
    return s
}
const Uh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function yl(e="GET") {
    return Uh.has(e.toUpperCase())
}
function Hh(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const jh = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Vh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Gh(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Vh.test(t) ? "json" : jh.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Kh(e, t, n=globalThis.Headers) {
    const r = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = {
        ...t == null ? void 0 : t.params,
        ...e == null ? void 0 : e.params
    }),
    t != null && t.query && (e != null && e.query) && (r.query = {
        ...t == null ? void 0 : t.query,
        ...e == null ? void 0 : e.query
    }),
    t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [o,a] of new n((e == null ? void 0 : e.headers) || {}))
            r.headers.set(o, a)
    }
    return r
}
const zh = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Wh = new Set([101, 204, 205, 304]);
function Du(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function o(s) {
        const l = s.error && s.error.name === "AbortError" && !s.options.timeout || !1;
        if (s.options.retry !== !1 && !l) {
            let u;
            typeof s.options.retry == "number" ? u = s.options.retry : u = yl(s.options.method) ? 0 : 1;
            const d = s.response && s.response.status || 500;
            if (u > 0 && (Array.isArray(s.options.retryStatusCodes) ? s.options.retryStatusCodes.includes(d) : zh.has(d))) {
                const f = s.options.retryDelay || 0;
                return f > 0 && await new Promise(p => setTimeout(p, f)),
                a(s.request, {
                    ...s.options,
                    retry: u - 1,
                    timeout: s.options.timeout
                })
            }
        }
        const c = $h(s);
        throw Error.captureStackTrace && Error.captureStackTrace(c, a),
        c
    }
    const a = async function(l, c={}) {
        var f;
        const u = {
            request: l,
            options: Kh(c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (u.options.method = (f = u.options.method) == null ? void 0 : f.toUpperCase(),
        u.options.onRequest && await u.options.onRequest(u),
        typeof u.request == "string" && (u.options.baseURL && (u.request = Rh(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = Mh(u.request, {
            ...u.options.params,
            ...u.options.query
        }))),
        u.options.body && yl(u.options.method) && (Hh(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
        u.options.headers = new n(u.options.headers || {}),
        u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
        u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo"in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex"in u.options || (u.options.duplex = "half"))),
        !u.options.signal && u.options.timeout) {
            const p = new r;
            setTimeout( () => p.abort(), u.options.timeout),
            u.options.signal = p.signal
        }
        try {
            u.response = await t(u.request, u.options)
        } catch (p) {
            return u.error = p,
            u.options.onRequestError && await u.options.onRequestError(u),
            await o(u)
        }
        if (u.response.body && !Wh.has(u.response.status) && u.options.method !== "HEAD") {
            const p = (u.options.parseResponse ? "json" : u.options.responseType) || Gh(u.response.headers.get("content-type") || "");
            switch (p) {
            case "json":
                {
                    const m = await u.response.text()
                      , b = u.options.parseResponse || uh;
                    u.response._data = b(m);
                    break
                }
            case "stream":
                {
                    u.response._data = u.response.body;
                    break
                }
            default:
                u.response._data = await u.response[p]()
            }
        }
        return u.options.onResponse && await u.options.onResponse(u),
        !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u),
        await o(u)) : u.response
    }
      , i = async function(l, c) {
        return (await a(l, c))._data
    };
    return i.raw = a,
    i.native = (...s) => t(...s),
    i.create = (s={}) => Du({
        ...e,
        defaults: {
            ...e.defaults,
            ...s
        }
    }),
    i
}
const Qi = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , qh = Qi.fetch || ( () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Jh = Qi.Headers
  , Yh = Qi.AbortController
  , Zh = Du({
    fetch: qh,
    Headers: Jh,
    AbortController: Yh
})
  , Qh = Zh;
function bl(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
const Xh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , e0 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , t0 = /^([/\\]\s*){2,}[^/\\]/
  , n0 = /^\.?\//;
function jo(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? Xh.test(e) : e0.test(e) || (t.acceptRelative ? t0.test(e) : !1)
}
function r0(e="", t) {
    return e.endsWith("/")
}
function Bu(e="", t) {
    return (r0(e) ? e.slice(0, -1) : e) || "/"
}
function ja(e="", t) {
    return e.endsWith("/") ? e : e + "/"
}
function o0(e="") {
    return e.startsWith("/")
}
function vl(e="") {
    return o0(e) ? e : "/" + e
}
function _l(e, t) {
    if (a0(t))
        return e;
    const n = Bu(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function a0(e) {
    return !e || e === "/"
}
function i0(e) {
    return e && e !== "/"
}
function Nu(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => i0(o)))
        if (n) {
            const o = r.replace(n0, "");
            n = ja(n) + o
        } else
            n = r;
    return n
}
function Fu(...e) {
    var i, s, l, c;
    const t = /\/(?!\/)/
      , n = e.filter(Boolean)
      , r = [];
    let o = 0;
    for (const u of n)
        if (!(!u || u === "/")) {
            for (const [d,f] of u.split(t).entries())
                if (!(!f || f === ".")) {
                    if (f === "..") {
                        if (r.length === 1 && jo(r[0]))
                            continue;
                        r.pop(),
                        o--;
                        continue
                    }
                    if (d === 1 && ((i = r[r.length - 1]) != null && i.endsWith(":/"))) {
                        r[r.length - 1] += "/" + f;
                        continue
                    }
                    r.push(f),
                    o++
                }
        }
    let a = r.join("/");
    return o >= 0 ? (s = n[0]) != null && s.startsWith("/") && !a.startsWith("/") ? a = "/" + a : (l = n[0]) != null && l.startsWith("./") && !a.startsWith("./") && (a = "./" + a) : a = "../".repeat(-1 * o) + a,
    (c = n[n.length - 1]) != null && c.endsWith("/") && !a.endsWith("/") && (a += "/"),
    a
}
function s0(e, t, n={}) {
    return n.trailingSlash || (e = ja(e),
    t = ja(t)),
    n.leadingSlash || (e = vl(e),
    t = vl(t)),
    n.encoding || (e = bl(e),
    t = bl(t)),
    e === t
}
const l0 = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , wo = l0().app
  , c0 = () => wo.baseURL
  , u0 = () => wo.buildAssetsDir
  , Xi = (...e) => Fu(es(), u0(), ...e)
  , es = (...e) => {
    const t = wo.cdnURL || wo.baseURL;
    return e.length ? Fu(t, ...e) : t
}
;
globalThis.__buildAssetsURL = Xi,
globalThis.__publicAssetsURL = es;
globalThis.$fetch || (globalThis.$fetch = Qh.create({
    baseURL: c0()
}));
function Va(e, t={}, n) {
    for (const r in e) {
        const o = e[r]
          , a = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? Va(o, t, a) : typeof o == "function" && (t[a] = o)
    }
    return t
}
const d0 = {
    run: e => e()
}
  , f0 = () => d0
  , $u = typeof console.createTask < "u" ? console.createTask : f0;
function p0(e, t) {
    const n = t.shift()
      , r = $u(n);
    return e.reduce( (o, a) => o.then( () => r.run( () => a(...t))), Promise.resolve())
}
function m0(e, t) {
    const n = t.shift()
      , r = $u(n);
    return Promise.all(e.map(o => r.run( () => o(...t))))
}
function la(e, t) {
    for (const n of [...e])
        n(t)
}
class h0 {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const o = t;
        let a;
        for (; this._deprecatedHooks[t]; )
            a = this._deprecatedHooks[t],
            t = a.to;
        if (a && !r.allowDeprecated) {
            let i = a.message;
            i || (i = `${o} hook has been deprecated` + (a.to ? `, please use ${a.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...a) => (typeof r == "function" && r(),
        r = void 0,
        o = void 0,
        n(...a));
        return r = this.hook(t, o),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r)
            this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Va(t)
          , r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length))
                o()
        }
    }
    removeHooks(t) {
        const n = Va(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(p0, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(m0, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && la(this._before, o);
        const a = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return a instanceof Promise ? a.finally( () => {
            this._after && o && la(this._after, o)
        }
        ) : (this._after && o && la(this._after, o),
        a)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Uu() {
    return new h0
}
function g0(e={}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i)
            throw new Error("Context conflict")
    }
    ;
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const a = () => {
        if (o && t === void 0) {
            const i = o.getStore();
            if (i !== void 0)
                return i
        }
        return t
    }
    ;
    return {
        use: () => {
            const i = a();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => a(),
        set: (i, s) => {
            s || r(i),
            t = i,
            n = !0
        }
        ,
        unset: () => {
            t = void 0,
            n = !1
        }
        ,
        call: (i, s) => {
            r(i),
            t = i;
            try {
                return o ? o.run(i, s) : s()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(i, s) {
            t = i;
            const l = () => {
                t = i
            }
              , c = () => t === i ? l : void 0;
            Ga.add(c);
            try {
                const u = o ? o.run(i, s) : s();
                return n || (t = void 0),
                await u
            } finally {
                Ga.delete(c)
            }
        }
    }
}
function y0(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = g0({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Eo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Al = "__unctx__"
  , b0 = Eo[Al] || (Eo[Al] = y0())
  , v0 = (e, t={}) => b0.get(e, t)
  , wl = "__unctx_async_handlers__"
  , Ga = Eo[wl] || (Eo[wl] = new Set);
function $n(e) {
    const t = [];
    for (const o of Ga) {
        const a = o();
        a && t.push(a)
    }
    const n = () => {
        for (const o of t)
            o()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(o => {
        throw n(),
        o
    }
    )),
    [r, n]
}
const _0 = !1
  , Ka = !1
  , A0 = !1
  , On = {
    value: null,
    errorValue: null,
    deep: !0
}
  , w0 = null
  , E0 = {}
  , k0 = "#__nuxt"
  , Hu = "nuxt-app"
  , El = 36e5;
function ju(e=Hu) {
    return v0(e, {
        asyncContext: !1
    })
}
const T0 = "__nuxt_plugin";
function S0(e) {
    let t = 0;
    const n = {
        _id: e.id || Hu || "nuxt-app",
        _scope: Ei(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.13.0"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: It({
            data: It({}),
            state: st({}),
            once: new Set,
            _errors: It({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return n._scope.active && !Tn() ? n._scope.run( () => kl(n, o)) : kl(n, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: It({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const o = window.__NUXT__;
        if (o)
            for (const a in o)
                switch (a) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[a], o[a]);
                    break;
                default:
                    n.payload[a] = o[a]
                }
    }
    n.hooks = Uu(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (o, a) => {
        const i = "$" + o;
        eo(n, i, a),
        eo(n.vueApp.config.globalProperties, i, a)
    }
    ,
    eo(n.vueApp, "$nuxt", n),
    eo(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", a => {
            n.callHook("app:chunkError", {
                error: a.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || Oe;
        const o = n.hook("app:error", (...a) => {
            console.error("[nuxt] error caught during app initialization", ...a)
        }
        );
        n.hook("app:mounted", o)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
function x0(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function C0(e, t) {
    if (typeof t == "function") {
        const {provide: n} = await e.runWithContext( () => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function P0(e, t) {
    const n = []
      , r = []
      , o = []
      , a = [];
    let i = 0;
    async function s(l) {
        var u;
        const c = ((u = l.dependsOn) == null ? void 0 : u.filter(d => t.some(f => f._name === d) && !n.includes(d))) ?? [];
        if (c.length > 0)
            r.push([new Set(c), l]);
        else {
            const d = C0(e, l).then(async () => {
                l._name && (n.push(l._name),
                await Promise.all(r.map(async ([f,p]) => {
                    f.has(l._name) && (f.delete(l._name),
                    f.size === 0 && (i++,
                    await s(p)))
                }
                )))
            }
            );
            l.parallel ? o.push(d.catch(f => a.push(f))) : await d
        }
    }
    for (const l of t)
        x0(e, l);
    for (const l of t)
        await s(l);
    if (await Promise.all(o),
    i)
        for (let l = 0; l < i; l++)
            await Promise.all(o);
    if (a.length)
        throw a[0]
}
function Ke(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || ( () => {}
    ), e, {
        [T0]: !0,
        _name: t
    })
}
function kl(e, t, n) {
    const r = () => t();
    return ju(e._id).set(e),
    e.vueApp.runWithContext(r)
}
function R0(e) {
    var n;
    let t;
    return Gi() && (t = (n = vt()) == null ? void 0 : n.appContext.app.$nuxt),
    t = t || ju(e).tryUse(),
    t || null
}
function Oe(e) {
    const t = R0(e);
    if (!t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function Nr(e) {
    return Oe().$config
}
function eo(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
function M0(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , r = t || {}
      , o = r.decode || O0;
    let a = 0;
    for (; a < e.length; ) {
        const i = e.indexOf("=", a);
        if (i === -1)
            break;
        let s = e.indexOf(";", a);
        if (s === -1)
            s = e.length;
        else if (s < i) {
            a = e.lastIndexOf(";", i - 1) + 1;
            continue
        }
        const l = e.slice(a, i).trim();
        if (r != null && r.filter && !(r != null && r.filter(l))) {
            a = s + 1;
            continue
        }
        if (n[l] === void 0) {
            let c = e.slice(i + 1, s).trim();
            c.codePointAt(0) === 34 && (c = c.slice(1, -1)),
            n[l] = L0(c, o)
        }
        a = s + 1
    }
    return n
}
function O0(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function L0(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
const to = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function Tl(e, t, n) {
    const r = n || {}
      , o = r.encode || encodeURIComponent;
    if (typeof o != "function")
        throw new TypeError("option encode is invalid");
    if (!to.test(e))
        throw new TypeError("argument name is invalid");
    const a = o(t);
    if (a && !to.test(a))
        throw new TypeError("argument val is invalid");
    let i = e + "=" + a;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const s = r.maxAge - 0;
        if (Number.isNaN(s) || !Number.isFinite(s))
            throw new TypeError("option maxAge is invalid");
        i += "; Max-Age=" + Math.floor(s)
    }
    if (r.domain) {
        if (!to.test(r.domain))
            throw new TypeError("option domain is invalid");
        i += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!to.test(r.path))
            throw new TypeError("option path is invalid");
        i += "; Path=" + r.path
    }
    if (r.expires) {
        if (!I0(r.expires) || Number.isNaN(r.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        i += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (i += "; HttpOnly"),
    r.secure && (i += "; Secure"),
    r.priority)
        switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            {
                i += "; Priority=Low";
                break
            }
        case "medium":
            {
                i += "; Priority=Medium";
                break
            }
        case "high":
            {
                i += "; Priority=High";
                break
            }
        default:
            throw new TypeError("option priority is invalid")
        }
    if (r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            {
                i += "; SameSite=Strict";
                break
            }
        case "lax":
            {
                i += "; SameSite=Lax";
                break
            }
        case "strict":
            {
                i += "; SameSite=Strict";
                break
            }
        case "none":
            {
                i += "; SameSite=None";
                break
            }
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return r.partitioned && (i += "; Partitioned"),
    i
}
function I0(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
const Sl = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});
function za(e, t) {
    t ? t = {
        ...Sl,
        ...t
    } : t = Sl;
    const n = Vu(t);
    return n.dispatch(e),
    n.toString()
}
const D0 = Object.freeze(["prototype", "__proto__", "constructor"]);
function Vu(e) {
    let t = ""
      , n = new Map;
    const r = o => {
        t += o
    }
    ;
    return {
        toString() {
            return t
        },
        getContext() {
            return n
        },
        dispatch(o) {
            return e.replacer && (o = e.replacer(o)),
            this[o === null ? "null" : typeof o](o)
        },
        object(o) {
            if (o && typeof o.toJSON == "function")
                return this.object(o.toJSON());
            const a = Object.prototype.toString.call(o);
            let i = "";
            const s = a.length;
            s < 10 ? i = "unknown:[" + a + "]" : i = a.slice(8, s - 1),
            i = i.toLowerCase();
            let l = null;
            if ((l = n.get(o)) === void 0)
                n.set(o, n.size);
            else
                return this.dispatch("[CIRCULAR:" + l + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o))
                return r("buffer:"),
                r(o.toString("utf8"));
            if (i !== "object" && i !== "function" && i !== "asyncfunction")
                this[i] ? this[i](o) : e.ignoreUnknown || this.unkown(o, i);
            else {
                let c = Object.keys(o);
                e.unorderedObjects && (c = c.sort());
                let u = [];
                e.respectType !== !1 && !xl(o) && (u = D0),
                e.excludeKeys && (c = c.filter(f => !e.excludeKeys(f)),
                u = u.filter(f => !e.excludeKeys(f))),
                r("object:" + (c.length + u.length) + ":");
                const d = f => {
                    this.dispatch(f),
                    r(":"),
                    e.excludeValues || this.dispatch(o[f]),
                    r(",")
                }
                ;
                for (const f of c)
                    d(f);
                for (const f of u)
                    d(f)
            }
        },
        array(o, a) {
            if (a = a === void 0 ? e.unorderedArrays !== !1 : a,
            r("array:" + o.length + ":"),
            !a || o.length <= 1) {
                for (const l of o)
                    this.dispatch(l);
                return
            }
            const i = new Map
              , s = o.map(l => {
                const c = Vu(e);
                c.dispatch(l);
                for (const [u,d] of c.getContext())
                    i.set(u, d);
                return c.toString()
            }
            );
            return n = i,
            s.sort(),
            this.array(s, !1)
        },
        date(o) {
            return r("date:" + o.toJSON())
        },
        symbol(o) {
            return r("symbol:" + o.toString())
        },
        unkown(o, a) {
            if (r(a),
            !!o && (r(":"),
            o && typeof o.entries == "function"))
                return this.array(Array.from(o.entries()), !0)
        },
        error(o) {
            return r("error:" + o.toString())
        },
        boolean(o) {
            return r("bool:" + o)
        },
        string(o) {
            r("string:" + o.length + ":"),
            r(o)
        },
        function(o) {
            r("fn:"),
            xl(o) ? this.dispatch("[native]") : this.dispatch(o.toString()),
            e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)),
            e.respectFunctionProperties && this.object(o)
        },
        number(o) {
            return r("number:" + o)
        },
        xml(o) {
            return r("xml:" + o.toString())
        },
        null() {
            return r("Null")
        },
        undefined() {
            return r("Undefined")
        },
        regexp(o) {
            return r("regex:" + o.toString())
        },
        uint8array(o) {
            return r("uint8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint8clampedarray(o) {
            return r("uint8clampedarray:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int8array(o) {
            return r("int8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint16array(o) {
            return r("uint16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int16array(o) {
            return r("int16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint32array(o) {
            return r("uint32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int32array(o) {
            return r("int32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float32array(o) {
            return r("float32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float64array(o) {
            return r("float64array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        arraybuffer(o) {
            return r("arraybuffer:"),
            this.dispatch(new Uint8Array(o))
        },
        url(o) {
            return r("url:" + o.toString())
        },
        map(o) {
            r("map:");
            const a = [...o];
            return this.array(a, e.unorderedSets !== !1)
        },
        set(o) {
            r("set:");
            const a = [...o];
            return this.array(a, e.unorderedSets !== !1)
        },
        file(o) {
            return r("file:"),
            this.dispatch([o.name, o.size, o.type, o.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown)
                return r("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return r("domwindow")
        },
        bigint(o) {
            return r("bigint:" + o.toString())
        },
        process() {
            return r("process")
        },
        timer() {
            return r("timer")
        },
        pipe() {
            return r("pipe")
        },
        tcp() {
            return r("tcp")
        },
        udp() {
            return r("udp")
        },
        tty() {
            return r("tty")
        },
        statwatcher() {
            return r("statwatcher")
        },
        securecontext() {
            return r("securecontext")
        },
        connection() {
            return r("connection")
        },
        zlib() {
            return r("zlib")
        },
        context() {
            return r("context")
        },
        nodescript() {
            return r("nodescript")
        },
        httpparser() {
            return r("httpparser")
        },
        dataview() {
            return r("dataview")
        },
        signal() {
            return r("signal")
        },
        fsevent() {
            return r("fsevent")
        },
        tlswrap() {
            return r("tlswrap")
        }
    }
}
const Gu = "[native code] }"
  , B0 = Gu.length;
function xl(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-B0) === Gu
}
class tn {
    constructor(t, n) {
        t = this.words = t || [],
        this.sigBytes = n === void 0 ? t.length * 4 : n
    }
    toString(t) {
        return (t || N0).stringify(this)
    }
    concat(t) {
        if (this.clamp(),
        this.sigBytes % 4)
            for (let n = 0; n < t.sigBytes; n++) {
                const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
            }
        else
            for (let n = 0; n < t.sigBytes; n += 4)
                this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
        return this.sigBytes += t.sigBytes,
        this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new tn([...this.words])
    }
}
const N0 = {
    stringify(e) {
        const t = [];
        for (let n = 0; n < e.sigBytes; n++) {
            const r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            t.push((r >>> 4).toString(16), (r & 15).toString(16))
        }
        return t.join("")
    }
}
  , F0 = {
    stringify(e) {
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          , n = [];
        for (let r = 0; r < e.sigBytes; r += 3) {
            const o = e.words[r >>> 2] >>> 24 - r % 4 * 8 & 255
              , a = e.words[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255
              , i = e.words[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255
              , s = o << 16 | a << 8 | i;
            for (let l = 0; l < 4 && r * 8 + l * 6 < e.sigBytes * 8; l++)
                n.push(t.charAt(s >>> 6 * (3 - l) & 63))
        }
        return n.join("")
    }
}
  , $0 = {
    parse(e) {
        const t = e.length
          , n = [];
        for (let r = 0; r < t; r++)
            n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
        return new tn(n,t)
    }
}
  , U0 = {
    parse(e) {
        return $0.parse(unescape(encodeURIComponent(e)))
    }
};
class H0 {
    constructor() {
        this._data = new tn,
        this._nDataBytes = 0,
        this._minBufferSize = 0,
        this.blockSize = 512 / 32
    }
    reset() {
        this._data = new tn,
        this._nDataBytes = 0
    }
    _append(t) {
        typeof t == "string" && (t = U0.parse(t)),
        this._data.concat(t),
        this._nDataBytes += t.sigBytes
    }
    _doProcessBlock(t, n) {}
    _process(t) {
        let n, r = this._data.sigBytes / (this.blockSize * 4);
        t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
        const o = r * this.blockSize
          , a = Math.min(o * 4, this._data.sigBytes);
        if (o) {
            for (let i = 0; i < o; i += this.blockSize)
                this._doProcessBlock(this._data.words, i);
            n = this._data.words.splice(0, o),
            this._data.sigBytes -= a
        }
        return new tn(n,a)
    }
}
class j0 extends H0 {
    update(t) {
        return this._append(t),
        this._process(),
        this
    }
    finalize(t) {
        t && this._append(t)
    }
}
const Cl = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
  , V0 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
  , sn = [];
class G0 extends j0 {
    constructor() {
        super(...arguments),
        this._hash = new tn([...Cl])
    }
    reset() {
        super.reset(),
        this._hash = new tn([...Cl])
    }
    _doProcessBlock(t, n) {
        const r = this._hash.words;
        let o = r[0]
          , a = r[1]
          , i = r[2]
          , s = r[3]
          , l = r[4]
          , c = r[5]
          , u = r[6]
          , d = r[7];
        for (let f = 0; f < 64; f++) {
            if (f < 16)
                sn[f] = t[n + f] | 0;
            else {
                const h = sn[f - 15]
                  , g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3
                  , A = sn[f - 2]
                  , M = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                sn[f] = g + sn[f - 7] + M + sn[f - 16]
            }
            const p = l & c ^ ~l & u
              , m = o & a ^ o & i ^ a & i
              , b = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
              , w = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)
              , E = d + w + p + V0[f] + sn[f]
              , _ = b + m;
            d = u,
            u = c,
            c = l,
            l = s + E | 0,
            s = i,
            i = a,
            a = o,
            o = E + _ | 0
        }
        r[0] = r[0] + o | 0,
        r[1] = r[1] + a | 0,
        r[2] = r[2] + i | 0,
        r[3] = r[3] + s | 0,
        r[4] = r[4] + l | 0,
        r[5] = r[5] + c | 0,
        r[6] = r[6] + u | 0,
        r[7] = r[7] + d | 0
    }
    finalize(t) {
        super.finalize(t);
        const n = this._nDataBytes * 8
          , r = this._data.sigBytes * 8;
        return this._data.words[r >>> 5] |= 128 << 24 - r % 32,
        this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
        this._data.words[(r + 64 >>> 9 << 4) + 15] = n,
        this._data.sigBytes = this._data.words.length * 4,
        this._process(),
        this._hash
    }
}
function K0(e) {
    return new G0().finalize(e).toString(F0)
}
function z0(e, t={}) {
    const n = typeof e == "string" ? e : za(e, t);
    return K0(n).slice(0, 10)
}
function W0(e, t, n={}) {
    return e === t || za(e, n) === za(t, n)
}
function q0(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => zu(n, e)
    }
}
function Ku(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map( ([r,o]) => [r, Ku(o)])) : new Map(Object.entries(e[n]));
    return t
}
function J0(e) {
    return q0(Ku(e))
}
function zu(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [a,i] of Pl(t.wildcard))
        (e === a || e.startsWith(a + "/")) && r.push(i);
    for (const [a,i] of Pl(t.dynamic))
        if (e.startsWith(a + "/")) {
            const s = "/" + e.slice(a.length).split("/").splice(2).join("/");
            r.push(...zu(s, i))
        }
    const o = t.static.get(e);
    return o && r.push(o),
    r.filter(Boolean)
}
function Pl(e) {
    return [...e.entries()].sort( (t, n) => t[0].length - n[0].length)
}
const Y0 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Z0 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Q0 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function X0(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        eg(e);
        return
    }
    return t
}
function eg(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function ko(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!Q0.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Y0.test(e) || Z0.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, X0)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
function ca(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Wa(e, t, n=".", r) {
    if (!ca(t))
        return Wa(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const a in e) {
        if (a === "__proto__" || a === "constructor")
            continue;
        const i = e[a];
        i != null && (r && r(o, a, i, n) || (Array.isArray(i) && Array.isArray(o[a]) ? o[a] = [...i, ...o[a]] : ca(i) && ca(o[a]) ? o[a] = Wa(i, o[a], (n ? `${n}.` : "") + a.toString(), r) : o[a] = i))
    }
    return o
}
function tg(e) {
    return (...t) => t.reduce( (n, r) => Wa(n, r, "", e), {})
}
const Wu = tg();
function ng(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var rg = Object.defineProperty
  , og = (e, t, n) => t in e ? rg(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , un = (e, t, n) => (og(e, typeof t != "symbol" ? t + "" : t, n),
n);
class qa extends Error {
    constructor(t, n={}) {
        super(t, n),
        un(this, "statusCode", 500),
        un(this, "fatal", !1),
        un(this, "unhandled", !1),
        un(this, "statusMessage"),
        un(this, "data"),
        un(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Ya(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = qu(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
un(qa, "__h3_error__", !0);
function Ja(e) {
    if (typeof e == "string")
        return new qa(e);
    if (ag(e))
        return e;
    const t = new qa(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (ng(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = Ya(e.statusCode, t.statusCode) : e.status && (t.statusCode = Ya(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        qu(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function ag(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const ig = /[^\u0009\u0020-\u007E]/g;
function qu(e="") {
    return e.replace(ig, "")
}
function Ya(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const Ju = Symbol("layout-meta")
  , Fr = Symbol("route")
  , ct = () => {
    var e;
    return (e = Oe()) == null ? void 0 : e.$router
}
  , Zn = () => Gi() ? be(Fr, Oe()._route) : Oe()._route;
const Yu = "__nuxt_error"
  , Vo = () => Oi(Oe().payload, "error")
  , Ln = e => {
    const t = $r(e);
    try {
        const n = Oe()
          , r = Vo();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , sg = async (e={}) => {
    const t = Oe()
      , n = Vo();
    t.callHook("app:error:cleared", e),
    e.redirect && await ct().replace(e.redirect),
    n.value = w0
}
  , lg = e => !!e && typeof e == "object" && Yu in e
  , $r = e => {
    const t = Ja(e);
    return Object.defineProperty(t, Yu, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , cg = -1
  , ug = -2
  , dg = -3
  , fg = -4
  , pg = -5
  , mg = -6;
function hg(e, t) {
    return gg(JSON.parse(e), t)
}
function gg(e, t) {
    if (typeof e == "number")
        return o(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function o(a, i=!1) {
        if (a === cg)
            return;
        if (a === dg)
            return NaN;
        if (a === fg)
            return 1 / 0;
        if (a === pg)
            return -1 / 0;
        if (a === mg)
            return -0;
        if (i)
            throw new Error("Invalid input");
        if (a in r)
            return r[a];
        const s = n[a];
        if (!s || typeof s != "object")
            r[a] = s;
        else if (Array.isArray(s))
            if (typeof s[0] == "string") {
                const l = s[0]
                  , c = t == null ? void 0 : t[l];
                if (c)
                    return r[a] = c(o(s[1]));
                switch (l) {
                case "Date":
                    r[a] = new Date(s[1]);
                    break;
                case "Set":
                    const u = new Set;
                    r[a] = u;
                    for (let p = 1; p < s.length; p += 1)
                        u.add(o(s[p]));
                    break;
                case "Map":
                    const d = new Map;
                    r[a] = d;
                    for (let p = 1; p < s.length; p += 2)
                        d.set(o(s[p]), o(s[p + 1]));
                    break;
                case "RegExp":
                    r[a] = new RegExp(s[1],s[2]);
                    break;
                case "Object":
                    r[a] = Object(s[1]);
                    break;
                case "BigInt":
                    r[a] = BigInt(s[1]);
                    break;
                case "null":
                    const f = Object.create(null);
                    r[a] = f;
                    for (let p = 1; p < s.length; p += 2)
                        f[s[p]] = o(s[p + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(s.length);
                r[a] = l;
                for (let c = 0; c < s.length; c += 1) {
                    const u = s[c];
                    u !== ug && (l[c] = o(u))
                }
            }
        else {
            const l = {};
            r[a] = l;
            for (const c in s) {
                const u = s[c];
                l[c] = o(u)
            }
        }
        return r[a]
    }
    return o(0)
}
const yg = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , lo = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , bg = new Set(["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , vg = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , Zu = new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"])
  , _g = typeof window < "u";
function To(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Rl(e) {
    if (e._h)
        return e._h;
    if (e._d)
        return To(e._d);
    let t = `${e.tag}:${e.textContent || e.innerHTML || ""}:`;
    for (const n in e.props)
        t += `${n}:${e.props[n]},`;
    return To(t)
}
const Ag = ["name", "property", "http-equiv"];
function Qu(e) {
    const {props: t, tag: n} = e;
    if (vg.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    if (t.id)
        return `${n}:id:${t.id}`;
    for (const r of Ag)
        if (t[r] !== void 0)
            return `${n}:${r}:${t[r]}`;
    return !1
}
function Ml(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function wg(e, t) {
    return e instanceof Promise ? e.then(t) : t(e)
}
function Za(e, t, n, r) {
    const o = r || ed(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
        ...t
    } : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, e === "templateParams" || e === "titleTemplate");
    if (o instanceof Promise)
        return o.then(i => Za(e, t, n, i));
    const a = {
        tag: e,
        props: o
    };
    for (const i of Zu) {
        const s = a.props[i] !== void 0 ? a.props[i] : n[i];
        s !== void 0 && ((!(i === "innerHTML" || i === "textContent" || i === "children") || yg.has(a.tag)) && (a[i === "children" ? "innerHTML" : i] = s),
        delete a.props[i])
    }
    return a.props.body && (a.tagPosition = "bodyClose",
    delete a.props.body),
    a.tag === "script" && typeof a.innerHTML == "object" && (a.innerHTML = JSON.stringify(a.innerHTML),
    a.props.type = a.props.type || "application/json"),
    Array.isArray(a.props.content) ? a.props.content.map(i => ({
        ...a,
        props: {
            ...a.props,
            content: i
        }
    })) : a
}
function Eg(e, t) {
    var r;
    const n = e === "class" ? " " : ";";
    return typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter( ([,o]) => o).map( ([o,a]) => e === "style" ? `${o}:${a}` : o)),
    (r = String(Array.isArray(t) ? t.join(n) : t)) == null ? void 0 : r.split(n).filter(o => !!o.trim()).join(n)
}
function Xu(e, t, n, r) {
    for (let o = r; o < n.length; o += 1) {
        const a = n[o];
        if (a === "class" || a === "style") {
            e[a] = Eg(a, e[a]);
            continue
        }
        if (e[a]instanceof Promise)
            return e[a].then(i => (e[a] = i,
            Xu(e, t, n, o)));
        if (!t && !Zu.has(a)) {
            const i = String(e[a])
              , s = a.startsWith("data-");
            i === "true" || i === "" ? e[a] = s ? "true" : !0 : e[a] || (s && i === "false" ? e[a] = "false" : delete e[a])
        }
    }
}
function ed(e, t=!1) {
    const n = Xu(e, t, Object.keys(e), 0);
    return n instanceof Promise ? n.then( () => e) : e
}
const kg = 10;
function td(e, t, n) {
    for (let r = n; r < t.length; r += 1) {
        const o = t[r];
        if (o instanceof Promise)
            return o.then(a => (t[r] = a,
            td(e, t, r)));
        Array.isArray(o) ? e.push(...o) : e.push(o)
    }
}
function Tg(e) {
    const t = []
      , n = e.resolvedInput;
    for (const o in n) {
        if (!Object.prototype.hasOwnProperty.call(n, o))
            continue;
        const a = n[o];
        if (!(a === void 0 || !bg.has(o))) {
            if (Array.isArray(a)) {
                for (const i of a)
                    t.push(Za(o, i, e));
                continue
            }
            t.push(Za(o, a, e))
        }
    }
    if (t.length === 0)
        return [];
    const r = [];
    return wg(td(r, t, 0), () => r.map( (o, a) => (o._e = e._i,
    e.mode && (o._m = e.mode),
    o._p = (e._i << kg) + a,
    o)))
}
const Ol = {
    base: -10,
    title: 10
}
  , Ll = {
    critical: -80,
    high: -10,
    low: 20
};
function So(e) {
    const t = e.tagPriority;
    if (typeof t == "number")
        return t;
    let n = 100;
    return e.tag === "meta" ? e.props["http-equiv"] === "content-security-policy" ? n = -30 : e.props.charset ? n = -20 : e.props.name === "viewport" && (n = -15) : e.tag === "link" && e.props.rel === "preconnect" ? n = 20 : e.tag in Ol && (n = Ol[e.tag]),
    t && t in Ll ? n + Ll[t] : n
}
const Sg = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Il = new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"])
  , Wt = "%separator";
function xg(e, t) {
    var r;
    let n;
    if (t === "s" || t === "pageTitle")
        n = e.pageTitle;
    else if (t.includes(".")) {
        const o = t.indexOf(".");
        n = (r = e[t.substring(0, o)]) == null ? void 0 : r[t.substring(o + 1)]
    } else
        n = e[t];
    return n !== void 0 ? (n || "").replace(/"/g, '\\"') : void 0
}
const Cg = new RegExp(`${Wt}(?:\\s*${Wt})*`,"g");
function ua(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    let r = e;
    try {
        r = decodeURI(e)
    } catch {}
    const o = r.match(/%\w+(?:\.\w+)?/g);
    if (!o)
        return e;
    const a = e.includes(Wt);
    return e = e.replace(/%\w+(?:\.\w+)?/g, i => {
        if (i === Wt || !o.includes(i))
            return i;
        const s = xg(t, i.slice(1));
        return s !== void 0 ? s : i
    }
    ).trim(),
    a && (e.endsWith(Wt) && (e = e.slice(0, -Wt.length)),
    e.startsWith(Wt) && (e = e.slice(Wt.length)),
    e = e.replace(Cg, n).trim()),
    e
}
async function nd(e, t={}) {
    var u;
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const o = (await e.resolveTags()).map(d => ({
        tag: d,
        id: lo.has(d.tag) ? Rl(d) : d.tag,
        shouldRender: !0
    }));
    let a = e._dom;
    if (!a) {
        a = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        const d = new Set;
        for (const f of ["body", "head"]) {
            const p = (u = n[f]) == null ? void 0 : u.children;
            for (const m of p) {
                const b = m.tagName.toLowerCase();
                if (!lo.has(b))
                    continue;
                const w = {
                    tag: b,
                    props: await ed(m.getAttributeNames().reduce( (g, A) => ({
                        ...g,
                        [A]: m.getAttribute(A)
                    }), {})),
                    innerHTML: m.innerHTML
                }
                  , E = Qu(w);
                let _ = E
                  , h = 1;
                for (; _ && d.has(_); )
                    _ = `${E}:${h++}`;
                _ && (w._d = _,
                d.add(_)),
                a.elMap[m.getAttribute("data-hid") || Rl(w)] = m
            }
        }
    }
    a.pendingSideEffects = {
        ...a.sideEffects
    },
    a.sideEffects = {};
    function i(d, f, p) {
        const m = `${d}:${f}`;
        a.sideEffects[m] = p,
        delete a.pendingSideEffects[m]
    }
    function s({id: d, $el: f, tag: p}) {
        const m = p.tag.endsWith("Attrs");
        if (a.elMap[d] = f,
        m || (p.textContent && p.textContent !== f.textContent && (f.textContent = p.textContent),
        p.innerHTML && p.innerHTML !== f.innerHTML && (f.innerHTML = p.innerHTML),
        i(d, "el", () => {
            var b;
            (b = a.elMap[d]) == null || b.remove(),
            delete a.elMap[d]
        }
        )),
        p._eventHandlers)
            for (const b in p._eventHandlers)
                Object.prototype.hasOwnProperty.call(p._eventHandlers, b) && f.getAttribute(`data-${b}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : f).addEventListener(b.substring(2), p._eventHandlers[b].bind(f)),
                f.setAttribute(`data-${b}`, ""));
        for (const b in p.props) {
            if (!Object.prototype.hasOwnProperty.call(p.props, b))
                continue;
            const w = p.props[b]
              , E = `attr:${b}`;
            if (b === "class") {
                if (!w)
                    continue;
                for (const _ of w.split(" "))
                    m && i(d, `${E}:${_}`, () => f.classList.remove(_)),
                    !f.classList.contains(_) && f.classList.add(_)
            } else if (b === "style") {
                if (!w)
                    continue;
                for (const _ of w.split(";")) {
                    const h = _.indexOf(":")
                      , g = _.substring(0, h).trim()
                      , A = _.substring(h + 1).trim();
                    i(d, `${E}:${g}`, () => {
                        f.style.removeProperty(g)
                    }
                    ),
                    f.style.setProperty(g, A)
                }
            } else
                f.getAttribute(b) !== w && f.setAttribute(b, w === !0 ? "" : String(w)),
                m && i(d, E, () => f.removeAttribute(b))
        }
    }
    const l = []
      , c = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const d of o) {
        const {tag: f, shouldRender: p, id: m} = d;
        if (p) {
            if (f.tag === "title") {
                n.title = f.textContent;
                continue
            }
            d.$el = d.$el || a.elMap[m],
            d.$el ? s(d) : lo.has(f.tag) && l.push(d)
        }
    }
    for (const d of l) {
        const f = d.tag.tagPosition || "head";
        d.$el = n.createElement(d.tag.tag),
        s(d),
        c[f] = c[f] || n.createDocumentFragment(),
        c[f].appendChild(d.$el)
    }
    for (const d of o)
        await e.hooks.callHook("dom:renderTag", d, n, i);
    c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose);
    for (const d in a.pendingSideEffects)
        a.pendingSideEffects[d]();
    e._dom = a,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: o
    })
}
function Pg(e, t={}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n( () => nd(e, t).then( () => {
        delete e._domUpdatePromise,
        r()
    }
    )))
}
function Rg(e) {
    return t => {
        var r, o;
        const n = ((o = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : o.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": a => {
                    Pg(a, e)
                }
            }
        }
    }
}
const Mg = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , Og = {
    hooks: {
        "tag:normalise": ({tag: e}) => {
            e.props.hid && (e.key = e.props.hid,
            delete e.props.hid),
            e.props.vmid && (e.key = e.props.vmid,
            delete e.props.vmid),
            e.props.key && (e.key = e.props.key,
            delete e.props.key);
            const n = Qu(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        }
        ,
        "tags:resolve": e => {
            const t = Object.create(null);
            for (const r of e.tags) {
                const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , a = t[o];
                if (a) {
                    let s = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!s && Mg.has(r.tag) && (s = "merge"),
                    s === "merge") {
                        const l = a.props;
                        l.style && r.props.style && (l.style[l.style.length - 1] !== ";" && (l.style += ";"),
                        r.props.style = `${l.style} ${r.props.style}`),
                        l.class && r.props.class ? r.props.class = `${l.class} ${r.props.class}` : l.class && (r.props.class = l.class),
                        t[o].props = {
                            ...l,
                            ...r.props
                        };
                        continue
                    } else if (r._e === a._e) {
                        a._duped = a._duped || [],
                        r._d = `${a._d}:${a._duped.length + 1}`,
                        a._duped.push(r);
                        continue
                    } else if (So(r) > So(a))
                        continue
                }
                if (!(r.innerHTML || r.textContent || Object.keys(r.props).length !== 0) && lo.has(r.tag)) {
                    delete t[o];
                    continue
                }
                t[o] = r
            }
            const n = [];
            for (const r in t) {
                const o = t[r]
                  , a = o._duped;
                n.push(o),
                a && (delete o._duped,
                n.push(...a))
            }
            e.tags = n,
            e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , Lg = {
    mode: "server",
    hooks: {
        "tags:resolve": e => {
            const t = {};
            let n = !1;
            for (const r of e.tags)
                r._m !== "server" || r.tag !== "titleTemplate" && r.tag !== "templateParams" && r.tag !== "title" || (t[r.tag] = r.tag === "title" || r.tag === "titleTemplate" ? r.textContent : r.props,
                n = !0);
            n && e.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(t),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , Ig = new Set(["script", "link", "bodyAttrs"])
  , Dg = e => ({
    hooks: {
        "tags:resolve": t => {
            for (const n of t.tags) {
                if (!Ig.has(n.tag))
                    continue;
                const r = n.props;
                for (const o in r) {
                    if (o[0] !== "o" || o[1] !== "n" || !Object.prototype.hasOwnProperty.call(r, o))
                        continue;
                    const a = r[o];
                    typeof a == "function" && (e.ssr && Il.has(o) ? r[o] = `this.dataset.${o}fired = true` : delete r[o],
                    n._eventHandlers = n._eventHandlers || {},
                    n._eventHandlers[o] = a)
                }
                e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || To(n.props.src || n.props.href))
            }
        }
        ,
        "dom:renderTag": ({$el: t, tag: n}) => {
            var o, a;
            const r = t == null ? void 0 : t.dataset;
            if (r)
                for (const i in r) {
                    if (!i.endsWith("fired"))
                        continue;
                    const s = i.slice(0, -5);
                    Il.has(s) && ((a = (o = n._eventHandlers) == null ? void 0 : o[s]) == null || a.call(t, new Event(s.substring(2))))
                }
        }
    }
})
  , Bg = new Set(["link", "style", "script", "noscript"])
  , Ng = {
    hooks: {
        "tag:normalise": ({tag: e}) => {
            e.key && Bg.has(e.tag) && (e.props["data-hid"] = e._h = To(e.key))
        }
    }
}
  , Fg = {
    hooks: {
        "tags:resolve": e => {
            var t;
            for (const n of e.tags)
                if (typeof n.tagPriority == "string")
                    for (const {prefix: r, offset: o} of Sg) {
                        if (!n.tagPriority.startsWith(r))
                            continue;
                        const a = n.tagPriority.substring(r.length)
                          , i = (t = e.tags.find(s => s._d === a)) == null ? void 0 : t._p;
                        if (i !== void 0) {
                            n._p = i + o;
                            break
                        }
                    }
            e.tags.sort( (n, r) => {
                const o = So(n)
                  , a = So(r);
                return o < a ? -1 : o > a ? 1 : n._p - r._p
            }
            )
        }
    }
}
  , $g = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , Ug = ["innerHTML", "textContent"]
  , Hg = e => ({
    hooks: {
        "tags:resolve": t => {
            var i;
            const {tags: n} = t;
            let r;
            for (let s = 0; s < n.length; s += 1)
                n[s].tag === "templateParams" && (r = t.tags.splice(s, 1)[0].props,
                s -= 1);
            const o = r || {}
              , a = o.separator || "|";
            delete o.separator,
            o.pageTitle = ua(o.pageTitle || ((i = n.find(s => s.tag === "title")) == null ? void 0 : i.textContent) || "", o, a);
            for (const s of n) {
                if (s.processTemplateParams === !1)
                    continue;
                const l = $g[s.tag];
                if (l && typeof s.props[l] == "string")
                    s.props[l] = ua(s.props[l], o, a);
                else if (s.processTemplateParams || s.tag === "titleTemplate" || s.tag === "title")
                    for (const c of Ug)
                        typeof s[c] == "string" && (s[c] = ua(s[c], o, a))
            }
            e._templateParams = o,
            e._separator = a
        }
    }
})
  , jg = {
    hooks: {
        "tags:resolve": e => {
            const {tags: t} = e;
            let n, r;
            for (let o = 0; o < t.length; o += 1) {
                const a = t[o];
                a.tag === "title" ? n = a : a.tag === "titleTemplate" && (r = a)
            }
            if (r && n) {
                const o = Ml(r.textContent, n.textContent);
                o !== null ? n.textContent = o || n.textContent : e.tags.splice(e.tags.indexOf(n), 1)
            } else if (r) {
                const o = Ml(r.textContent);
                o !== null && (r.textContent = o,
                r.tag = "title",
                r = void 0)
            }
            r && e.tags.splice(e.tags.indexOf(r), 1)
        }
    }
}
  , Vg = {
    hooks: {
        "tags:afterResolve": e => {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && (t.props.type === "application/ld+json" || t.props.type === "application/json") ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let rd;
function Gg(e={}) {
    const t = Kg(e);
    return t.use(Rg()),
    rd = t
}
function Dl(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function Kg(e={}) {
    const t = Uu();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (_g ? document : void 0);
    const n = !e.document
      , r = () => {
        s.dirty = !0,
        t.callHook("entries:updated", s)
    }
    ;
    let o = 0
      , a = [];
    const i = []
      , s = {
        plugins: i,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return a
        },
        use(l) {
            const c = typeof l == "function" ? l(s) : l;
            (!c.key || !i.some(u => u.key === c.key)) && (i.push(c),
            Dl(c.mode, n) && t.addHooks(c.hooks || {}))
        },
        push(l, c) {
            c == null || delete c.head;
            const u = {
                _i: o++,
                input: l,
                ...c
            };
            return Dl(u.mode, n) && (a.push(u),
            r()),
            {
                dispose() {
                    a = a.filter(d => d._i !== u._i),
                    t.callHook("entries:updated", s),
                    r()
                },
                patch(d) {
                    for (const f of a)
                        f._i === u._i && (f.input = u.input = d);
                    r()
                }
            }
        },
        async resolveTags() {
            const l = {
                tags: [],
                entries: [...a]
            };
            await t.callHook("entries:resolve", l);
            for (const c of l.entries) {
                const u = c.resolvedInput || c.input;
                if (c.resolvedInput = await (c.transform ? c.transform(u) : u),
                c.resolvedInput)
                    for (const d of await Tg(c)) {
                        const f = {
                            tag: d,
                            entry: c,
                            resolvedOptions: s.resolvedOptions
                        };
                        await t.callHook("tag:normalise", f),
                        l.tags.push(f.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", l),
            await t.callHook("tags:resolve", l),
            await t.callHook("tags:afterResolve", l),
            l.tags
        },
        ssr: n
    };
    return [Og, Lg, Dg, Ng, Fg, Hg, jg, Vg, ...(e == null ? void 0 : e.plugins) || []].forEach(l => s.use(l)),
    s.hooks.callHook("init", s),
    s
}
function zg() {
    return rd
}
const Wg = Pu[0] === "3";
function qg(e) {
    return typeof e == "function" ? e() : K(e)
}
function Qa(e) {
    if (e instanceof Promise)
        return e;
    const t = qg(e);
    if (!e || !t)
        return t;
    if (Array.isArray(t))
        return t.map(n => Qa(n));
    if (typeof t == "object") {
        const n = {};
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
                    n[r] = K(t[r]);
                    continue
                }
                n[r] = Qa(t[r])
            }
        return n
    }
    return t
}
const Jg = {
    hooks: {
        "entries:resolve": e => {
            for (const t of e.entries)
                t.resolvedInput = Qa(t.input)
        }
    }
}
  , od = "usehead";
function Yg(e) {
    return {
        install(n) {
            Wg && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(od, e))
        }
    }.install
}
function Zg(e={}) {
    e.domDelayFn = e.domDelayFn || (n => lt( () => setTimeout( () => n(), 0)));
    const t = Gg(e);
    return t.use(Jg),
    t.install = Yg(t),
    t
}
const Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , ei = "__unhead_injection_handler__";
function Qg(e) {
    Xa[ei] = e
}
function Vw() {
    if (ei in Xa)
        return Xa[ei]();
    const e = be(od);
    return e || zg()
}
let co, uo;
function Xg() {
    return co = $fetch(Xi(`builds/meta/${Nr().app.buildId}.json`), {
        responseType: "json"
    }),
    co.then(e => {
        uo = J0(e.matcher)
    }
    ).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }
    ),
    co
}
function Go() {
    return co || Xg()
}
async function ts(e) {
    if (await Go(),
    !uo)
        return console.error("[nuxt] Error creating app manifest matcher.", uo),
        {};
    try {
        return Wu({}, ...uo.matchAll(e).reverse())
    } catch (t) {
        return console.error("[nuxt] Error matching route rules.", t),
        {}
    }
}
async function Bl(e, t={}) {
    const n = await ty(e, t)
      , r = Oe()
      , o = r._payloadCache = r._payloadCache || {};
    return n in o || (o[n] = id(e).then(a => a ? ad(n).then(i => i || (delete o[n],
    null)) : (o[n] = null,
    null))),
    o[n]
}
const ey = "_payload.json";
async function ty(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || jo(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = Nr()
      , o = t.hash || (t.fresh ? Date.now() : r.app.buildId)
      , a = r.app.cdnURL
      , i = a && await id(e) ? a : r.app.baseURL;
    return Nu(i, n.pathname, ey + (o ? `?${o}` : ""))
}
async function ad(e) {
    const t = fetch(e).then(n => n.text().then(sd));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function id(e=Zn().path) {
    if (e = Bu(e),
    (await Go()).prerendered.includes(e))
        return !0;
    const n = await ts(e);
    return !!n.prerender && !n.redirect
}
let ln = null;
async function ny() {
    var r;
    if (ln)
        return ln;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await sd(e.textContent || "")
      , n = e.dataset.src ? await ad(e.dataset.src) : void 0;
    return ln = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    (r = ln.config) != null && r.public && (ln.config.public = st(ln.config.public)),
    ln
}
async function sd(e) {
    return await hg(e, Oe()._payloadRevivers)
}
function ry(e, t) {
    Oe()._payloadRevivers[e] = t
}
const Nl = {
    NuxtError: e => $r(e),
    EmptyShallowRef: e => kn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : ko(e)),
    EmptyRef: e => q(e === "_" ? void 0 : e === "0n" ? BigInt(0) : ko(e)),
    ShallowRef: e => kn(e),
    ShallowReactive: e => It(e),
    Ref: e => q(e),
    Reactive: e => st(e)
}
  , oy = Ke({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Nl)
            ry(r, Nl[r]);
        Object.assign(e.payload, ([t,n] = $n( () => e.runWithContext(ny)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , ay = []
  , iy = Ke({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = Zg({
            plugins: ay
        });
        Qg( () => Oe().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await nd(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", o => {
                o.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            e.hooks.hook("page:finish", () => {
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Rn = typeof document < "u";
function sy(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ve = Object.assign;
function da(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = bt(o) ? o.map(e) : e(o)
    }
    return n
}
const yr = () => {}
  , bt = Array.isArray
  , ld = /#/g
  , ly = /&/g
  , cy = /\//g
  , uy = /=/g
  , dy = /\?/g
  , cd = /\+/g
  , fy = /%5B/g
  , py = /%5D/g
  , ud = /%5E/g
  , my = /%60/g
  , dd = /%7B/g
  , hy = /%7C/g
  , fd = /%7D/g
  , gy = /%20/g;
function ns(e) {
    return encodeURI("" + e).replace(hy, "|").replace(fy, "[").replace(py, "]")
}
function yy(e) {
    return ns(e).replace(dd, "{").replace(fd, "}").replace(ud, "^")
}
function ti(e) {
    return ns(e).replace(cd, "%2B").replace(gy, "+").replace(ld, "%23").replace(ly, "%26").replace(my, "`").replace(dd, "{").replace(fd, "}").replace(ud, "^")
}
function by(e) {
    return ti(e).replace(uy, "%3D")
}
function vy(e) {
    return ns(e).replace(ld, "%23").replace(dy, "%3F")
}
function _y(e) {
    return e == null ? "" : vy(e).replace(cy, "%2F")
}
function Rr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Ay = /\/$/
  , wy = e => e.replace(Ay, "");
function fa(e, t, n="/") {
    let r, o = {}, a = "", i = "";
    const s = t.indexOf("#");
    let l = t.indexOf("?");
    return s < l && s >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    a = t.slice(l + 1, s > -1 ? s : t.length),
    o = e(a)),
    s > -1 && (r = r || t.slice(0, s),
    i = t.slice(s, t.length)),
    r = Sy(r ?? t, n),
    {
        fullPath: r + (a && "?") + a + i,
        path: r,
        query: o,
        hash: Rr(i)
    }
}
function Ey(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Fl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function ky(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && zn(t.matched[r], n.matched[o]) && pd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function zn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function pd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Ty(e[n], t[n]))
            return !1;
    return !0
}
function Ty(e, t) {
    return bt(e) ? $l(e, t) : bt(t) ? $l(t, e) : e === t
}
function $l(e, t) {
    return bt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function Sy(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let a = n.length - 1, i, s;
    for (i = 0; i < r.length; i++)
        if (s = r[i],
        s !== ".")
            if (s === "..")
                a > 1 && a--;
            else
                break;
    return n.slice(0, a).join("/") + "/" + r.slice(i).join("/")
}
const ft = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Mr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Mr || (Mr = {}));
var br;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(br || (br = {}));
function xy(e) {
    if (!e)
        if (Rn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    wy(e)
}
const Cy = /^[^#]+#/;
function Py(e, t) {
    return e.replace(Cy, "#") + t
}
function Ry(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Ko = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function My(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = Ry(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Ul(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const ni = new Map;
function Oy(e, t) {
    ni.set(e, t)
}
function Ly(e) {
    const t = ni.get(e);
    return ni.delete(e),
    t
}
let Iy = () => location.protocol + "//" + location.host;
function md(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , a = e.indexOf("#");
    if (a > -1) {
        let s = o.includes(e.slice(a)) ? e.slice(a).length : 1
          , l = o.slice(s);
        return l[0] !== "/" && (l = "/" + l),
        Fl(l, "")
    }
    return Fl(n, e) + r + o
}
function Dy(e, t, n, r) {
    let o = []
      , a = []
      , i = null;
    const s = ({state: f}) => {
        const p = md(e, location)
          , m = n.value
          , b = t.value;
        let w = 0;
        if (f) {
            if (n.value = p,
            t.value = f,
            i && i === m) {
                i = null;
                return
            }
            w = b ? f.position - b.position : 0
        } else
            r(p);
        o.forEach(E => {
            E(n.value, m, {
                delta: w,
                type: Mr.pop,
                direction: w ? w > 0 ? br.forward : br.back : br.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function c(f) {
        o.push(f);
        const p = () => {
            const m = o.indexOf(f);
            m > -1 && o.splice(m, 1)
        }
        ;
        return a.push(p),
        p
    }
    function u() {
        const {history: f} = window;
        f.state && f.replaceState(ve({}, f.state, {
            scroll: Ko()
        }), "")
    }
    function d() {
        for (const f of a)
            f();
        a = [],
        window.removeEventListener("popstate", s),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", s),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: d
    }
}
function Hl(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? Ko() : null
    }
}
function By(e) {
    const {history: t, location: n} = window
      , r = {
        value: md(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || a(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function a(l, c, u) {
        const d = e.indexOf("#")
          , f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : Iy() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", f),
            o.value = c
        } catch (p) {
            console.error(p),
            n[u ? "replace" : "assign"](f)
        }
    }
    function i(l, c) {
        const u = ve({}, t.state, Hl(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        a(l, u, !0),
        r.value = l
    }
    function s(l, c) {
        const u = ve({}, o.value, t.state, {
            forward: l,
            scroll: Ko()
        });
        a(u.current, u, !0);
        const d = ve({}, Hl(r.value, l, null), {
            position: u.position + 1
        }, c);
        a(l, d, !1),
        r.value = l
    }
    return {
        location: r,
        state: o,
        push: s,
        replace: i
    }
}
function hd(e) {
    e = xy(e);
    const t = By(e)
      , n = Dy(e, t.state, t.location, t.replace);
    function r(a, i=!0) {
        i || n.pauseListeners(),
        history.go(a)
    }
    const o = ve({
        location: "",
        base: e,
        go: r,
        createHref: Py.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function Ny(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    hd(e)
}
function Fy(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function gd(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const yd = Symbol("");
var jl;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(jl || (jl = {}));
function Wn(e, t) {
    return ve(new Error, {
        type: e,
        [yd]: !0
    }, t)
}
function Rt(e, t) {
    return e instanceof Error && yd in e && (t == null || !!(e.type & t))
}
const Vl = "[^/]+?"
  , $y = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Uy = /[.+*?^${}()[\]/\\]/g;
function Hy(e, t) {
    const n = ve({}, $y, t)
      , r = [];
    let o = n.start ? "^" : "";
    const a = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let d = 0; d < c.length; d++) {
            const f = c[d];
            let p = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0)
                d || (o += "/"),
                o += f.value.replace(Uy, "\\$&"),
                p += 40;
            else if (f.type === 1) {
                const {value: m, repeatable: b, optional: w, regexp: E} = f;
                a.push({
                    name: m,
                    repeatable: b,
                    optional: w
                });
                const _ = E || Vl;
                if (_ !== Vl) {
                    p += 10;
                    try {
                        new RegExp(`(${_})`)
                    } catch (g) {
                        throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + g.message)
                    }
                }
                let h = b ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
                d || (h = w && c.length < 2 ? `(?:/${h})` : "/" + h),
                w && (h += "?"),
                o += h,
                p += 20,
                w && (p += -8),
                b && (p += -20),
                _ === ".*" && (p += -50)
            }
            u.push(p)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o,n.sensitive ? "" : "i");
    function s(c) {
        const u = c.match(i)
          , d = {};
        if (!u)
            return null;
        for (let f = 1; f < u.length; f++) {
            const p = u[f] || ""
              , m = a[f - 1];
            d[m.name] = p && m.repeatable ? p.split("/") : p
        }
        return d
    }
    function l(c) {
        let u = ""
          , d = !1;
        for (const f of e) {
            (!d || !u.endsWith("/")) && (u += "/"),
            d = !1;
            for (const p of f)
                if (p.type === 0)
                    u += p.value;
                else if (p.type === 1) {
                    const {value: m, repeatable: b, optional: w} = p
                      , E = m in c ? c[m] : "";
                    if (bt(E) && !b)
                        throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                    const _ = bt(E) ? E.join("/") : E;
                    if (!_)
                        if (w)
                            f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
                        else
                            throw new Error(`Missing required param "${m}"`);
                    u += _
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: r,
        keys: a,
        parse: s,
        stringify: l
    }
}
function jy(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function bd(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const a = jy(r[n], o[n]);
        if (a)
            return a;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Gl(r))
            return 1;
        if (Gl(o))
            return -1
    }
    return o.length - r.length
}
function Gl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Vy = {
    type: 0,
    value: ""
}
  , Gy = /[a-zA-Z0-9_]/;
function Ky(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Vy]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(p) {
        throw new Error(`ERR (${n})/"${c}": ${p}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let a;
    function i() {
        a && o.push(a),
        a = []
    }
    let s = 0, l, c = "", u = "";
    function d() {
        c && (n === 0 ? a.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        a.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function f() {
        c += l
    }
    for (; s < e.length; ) {
        if (l = e[s++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && d(),
            i()) : l === ":" ? (d(),
            n = 1) : f();
            break;
        case 4:
            f(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : Gy.test(l) ? f() : (d(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && s--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            d(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && s--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    d(),
    i(),
    o
}
function zy(e, t, n) {
    const r = Hy(Ky(e.path), n)
      , o = ve(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function Wy(e, t) {
    const n = []
      , r = new Map;
    t = Wl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(d) {
        return r.get(d)
    }
    function a(d, f, p) {
        const m = !p
          , b = qy(d);
        b.aliasOf = p && p.record;
        const w = Wl(t, d)
          , E = [b];
        if ("alias"in d) {
            const g = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const A of g)
                E.push(ve({}, b, {
                    components: p ? p.record.components : b.components,
                    path: A,
                    aliasOf: p ? p.record : b
                }))
        }
        let _, h;
        for (const g of E) {
            const {path: A} = g;
            if (f && A[0] !== "/") {
                const M = f.record.path
                  , I = M[M.length - 1] === "/" ? "" : "/";
                g.path = f.record.path + (A && I + A)
            }
            if (_ = zy(g, f, w),
            p ? p.alias.push(_) : (h = h || _,
            h !== _ && h.alias.push(_),
            m && d.name && !zl(_) && i(d.name)),
            vd(_) && l(_),
            b.children) {
                const M = b.children;
                for (let I = 0; I < M.length; I++)
                    a(M[I], _, p && p.children[I])
            }
            p = p || _
        }
        return h ? () => {
            i(h)
        }
        : yr
    }
    function i(d) {
        if (gd(d)) {
            const f = r.get(d);
            f && (r.delete(d),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(i),
            f.alias.forEach(i))
        } else {
            const f = n.indexOf(d);
            f > -1 && (n.splice(f, 1),
            d.record.name && r.delete(d.record.name),
            d.children.forEach(i),
            d.alias.forEach(i))
        }
    }
    function s() {
        return n
    }
    function l(d) {
        const f = Zy(d, n);
        n.splice(f, 0, d),
        d.record.name && !zl(d) && r.set(d.record.name, d)
    }
    function c(d, f) {
        let p, m = {}, b, w;
        if ("name"in d && d.name) {
            if (p = r.get(d.name),
            !p)
                throw Wn(1, {
                    location: d
                });
            w = p.record.name,
            m = ve(Kl(f.params, p.keys.filter(h => !h.optional).concat(p.parent ? p.parent.keys.filter(h => h.optional) : []).map(h => h.name)), d.params && Kl(d.params, p.keys.map(h => h.name))),
            b = p.stringify(m)
        } else if (d.path != null)
            b = d.path,
            p = n.find(h => h.re.test(b)),
            p && (m = p.parse(b),
            w = p.record.name);
        else {
            if (p = f.name ? r.get(f.name) : n.find(h => h.re.test(f.path)),
            !p)
                throw Wn(1, {
                    location: d,
                    currentLocation: f
                });
            w = p.record.name,
            m = ve({}, f.params, d.params),
            b = p.stringify(m)
        }
        const E = [];
        let _ = p;
        for (; _; )
            E.unshift(_.record),
            _ = _.parent;
        return {
            name: w,
            path: b,
            params: m,
            matched: E,
            meta: Yy(E)
        }
    }
    e.forEach(d => a(d));
    function u() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: a,
        resolve: c,
        removeRoute: i,
        clearRoutes: u,
        getRoutes: s,
        getRecordMatcher: o
    }
}
function Kl(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function qy(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Jy(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function Jy(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function zl(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Yy(e) {
    return e.reduce( (t, n) => ve(t, n.meta), {})
}
function Wl(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Zy(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const a = n + r >> 1;
        bd(e, t[a]) < 0 ? r = a : n = a + 1
    }
    const o = Qy(e);
    return o && (r = t.lastIndexOf(o, r - 1)),
    r
}
function Qy(e) {
    let t = e;
    for (; t = t.parent; )
        if (vd(t) && bd(e, t) === 0)
            return t
}
function vd({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function Xy(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const a = r[o].replace(cd, " ")
          , i = a.indexOf("=")
          , s = Rr(i < 0 ? a : a.slice(0, i))
          , l = i < 0 ? null : Rr(a.slice(i + 1));
        if (s in t) {
            let c = t[s];
            bt(c) || (c = t[s] = [c]),
            c.push(l)
        } else
            t[s] = l
    }
    return t
}
function ql(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = by(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (bt(r) ? r.map(a => a && ti(a)) : [r && ti(r)]).forEach(a => {
            a !== void 0 && (t += (t.length ? "&" : "") + n,
            a != null && (t += "=" + a))
        }
        )
    }
    return t
}
function eb(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = bt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const tb = Symbol("")
  , Jl = Symbol("")
  , rs = Symbol("")
  , os = Symbol("")
  , ri = Symbol("");
function rr() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function qt(e, t, n, r, o, a=i => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (s, l) => {
        const c = f => {
            f === !1 ? l(Wn(4, {
                from: n,
                to: t
            })) : f instanceof Error ? l(f) : Fy(f) ? l(Wn(2, {
                from: t,
                to: f
            })) : (i && r.enterCallbacks[o] === i && typeof f == "function" && i.push(f),
            s())
        }
          , u = a( () => e.call(r && r.instances[o], t, n, c));
        let d = Promise.resolve(u);
        e.length < 3 && (d = d.then(c)),
        d.catch(f => l(f))
    }
    )
}
function pa(e, t, n, r, o=a => a()) {
    const a = [];
    for (const i of e)
        for (const s in i.components) {
            let l = i.components[s];
            if (!(t !== "beforeRouteEnter" && !i.instances[s]))
                if (nb(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && a.push(qt(u, n, r, i, s, o))
                } else {
                    let c = l();
                    a.push( () => c.then(u => {
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));
                        const d = sy(u) ? u.default : u;
                        i.components[s] = d;
                        const p = (d.__vccOpts || d)[t];
                        return p && qt(p, n, r, i, s, o)()
                    }
                    ))
                }
        }
    return a
}
function nb(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Yl(e) {
    const t = be(rs)
      , n = be(os)
      , r = X( () => {
        const l = K(e.to);
        return t.resolve(l)
    }
    )
      , o = X( () => {
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , d = n.matched;
        if (!u || !d.length)
            return -1;
        const f = d.findIndex(zn.bind(null, u));
        if (f > -1)
            return f;
        const p = Zl(l[c - 2]);
        return c > 1 && Zl(u) === p && d[d.length - 1].path !== p ? d.findIndex(zn.bind(null, l[c - 2])) : f
    }
    )
      , a = X( () => o.value > -1 && ib(n.params, r.value.params))
      , i = X( () => o.value > -1 && o.value === n.matched.length - 1 && pd(n.params, r.value.params));
    function s(l={}) {
        return ab(l) ? t[K(e.replace) ? "replace" : "push"](K(e.to)).catch(yr) : Promise.resolve()
    }
    return {
        route: r,
        href: X( () => r.value.href),
        isActive: a,
        isExactActive: i,
        navigate: s
    }
}
const rb = he({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Yl,
    setup(e, {slots: t}) {
        const n = st(Yl(e))
          , {options: r} = be(rs)
          , o = X( () => ({
            [Ql(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Ql(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const a = t.default && t.default(n);
            return e.custom ? a : ge("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, a)
        }
    }
})
  , ob = rb;
function ab(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function ib(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!bt(o) || o.length !== r.length || r.some( (a, i) => a !== o[i]))
            return !1
    }
    return !0
}
function Zl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Ql = (e, t, n) => e ?? t ?? n
  , sb = he({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = be(ri)
          , o = X( () => e.route || r.value)
          , a = be(Jl, 0)
          , i = X( () => {
            let c = K(a);
            const {matched: u} = o.value;
            let d;
            for (; (d = u[c]) && !d.components; )
                c++;
            return c
        }
        )
          , s = X( () => o.value.matched[i.value]);
        $e(Jl, X( () => i.value + 1)),
        $e(tb, s),
        $e(ri, o);
        const l = q();
        return Pe( () => [l.value, s.value, e.name], ([c,u,d], [f,p,m]) => {
            u && (u.instances[d] = c,
            p && p !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
            u.updateGuards.size || (u.updateGuards = p.updateGuards))),
            c && u && (!p || !zn(u, p) || !f) && (u.enterCallbacks[d] || []).forEach(b => b(c))
        }
        , {
            flush: "post"
        }),
        () => {
            const c = o.value
              , u = e.name
              , d = s.value
              , f = d && d.components[u];
            if (!f)
                return Xl(n.default, {
                    Component: f,
                    route: c
                });
            const p = d.props[u]
              , m = p ? p === !0 ? c.params : typeof p == "function" ? p(c) : p : null
              , w = ge(f, ve({}, m, t, {
                onVnodeUnmounted: E => {
                    E.component.isUnmounted && (d.instances[u] = null)
                }
                ,
                ref: l
            }));
            return Xl(n.default, {
                Component: w,
                route: c
            }) || w
        }
    }
});
function Xl(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const _d = sb;
function lb(e) {
    const t = Wy(e.routes, e)
      , n = e.parseQuery || Xy
      , r = e.stringifyQuery || ql
      , o = e.history
      , a = rr()
      , i = rr()
      , s = rr()
      , l = kn(ft);
    let c = ft;
    Rn && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = da.bind(null, N => "" + N)
      , d = da.bind(null, _y)
      , f = da.bind(null, Rr);
    function p(N, Y) {
        let z, te;
        return gd(N) ? (z = t.getRecordMatcher(N),
        te = Y) : te = N,
        t.addRoute(te, z)
    }
    function m(N) {
        const Y = t.getRecordMatcher(N);
        Y && t.removeRoute(Y)
    }
    function b() {
        return t.getRoutes().map(N => N.record)
    }
    function w(N) {
        return !!t.getRecordMatcher(N)
    }
    function E(N, Y) {
        if (Y = ve({}, Y || l.value),
        typeof N == "string") {
            const x = fa(n, N, Y.path)
              , D = t.resolve({
                path: x.path
            }, Y)
              , U = o.createHref(x.fullPath);
            return ve(x, D, {
                params: f(D.params),
                hash: Rr(x.hash),
                redirectedFrom: void 0,
                href: U
            })
        }
        let z;
        if (N.path != null)
            z = ve({}, N, {
                path: fa(n, N.path, Y.path).path
            });
        else {
            const x = ve({}, N.params);
            for (const D in x)
                x[D] == null && delete x[D];
            z = ve({}, N, {
                params: d(x)
            }),
            Y.params = d(Y.params)
        }
        const te = t.resolve(z, Y)
          , ye = N.hash || "";
        te.params = u(f(te.params));
        const y = Ey(r, ve({}, N, {
            hash: yy(ye),
            path: te.path
        }))
          , v = o.createHref(y);
        return ve({
            fullPath: y,
            hash: ye,
            query: r === ql ? eb(N.query) : N.query || {}
        }, te, {
            redirectedFrom: void 0,
            href: v
        })
    }
    function _(N) {
        return typeof N == "string" ? fa(n, N, l.value.path) : ve({}, N)
    }
    function h(N, Y) {
        if (c !== N)
            return Wn(8, {
                from: Y,
                to: N
            })
    }
    function g(N) {
        return I(N)
    }
    function A(N) {
        return g(ve(_(N), {
            replace: !0
        }))
    }
    function M(N) {
        const Y = N.matched[N.matched.length - 1];
        if (Y && Y.redirect) {
            const {redirect: z} = Y;
            let te = typeof z == "function" ? z(N) : z;
            return typeof te == "string" && (te = te.includes("?") || te.includes("#") ? te = _(te) : {
                path: te
            },
            te.params = {}),
            ve({
                query: N.query,
                hash: N.hash,
                params: te.path != null ? {} : N.params
            }, te)
        }
    }
    function I(N, Y) {
        const z = c = E(N)
          , te = l.value
          , ye = N.state
          , y = N.force
          , v = N.replace === !0
          , x = M(z);
        if (x)
            return I(ve(_(x), {
                state: typeof x == "object" ? ve({}, ye, x.state) : ye,
                force: y,
                replace: v
            }), Y || z);
        const D = z;
        D.redirectedFrom = Y;
        let U;
        return !y && ky(r, te, z) && (U = Wn(16, {
            to: D,
            from: te
        }),
        De(te, te, !0, !1)),
        (U ? Promise.resolve(U) : C(D, te)).catch(H => Rt(H) ? Rt(H, 2) ? H : le(H) : B(H, D, te)).then(H => {
            if (H) {
                if (Rt(H, 2))
                    return I(ve({
                        replace: v
                    }, _(H.to), {
                        state: typeof H.to == "object" ? ve({}, ye, H.to.state) : ye,
                        force: y
                    }), Y || D)
            } else
                H = S(D, te, !0, v, ye);
            return F(D, te, H),
            H
        }
        )
    }
    function P(N, Y) {
        const z = h(N, Y);
        return z ? Promise.reject(z) : Promise.resolve()
    }
    function T(N) {
        const Y = ut.values().next().value;
        return Y && typeof Y.runWithContext == "function" ? Y.runWithContext(N) : N()
    }
    function C(N, Y) {
        let z;
        const [te,ye,y] = cb(N, Y);
        z = pa(te.reverse(), "beforeRouteLeave", N, Y);
        for (const x of te)
            x.leaveGuards.forEach(D => {
                z.push(qt(D, N, Y))
            }
            );
        const v = P.bind(null, N, Y);
        return z.push(v),
        Ae(z).then( () => {
            z = [];
            for (const x of a.list())
                z.push(qt(x, N, Y));
            return z.push(v),
            Ae(z)
        }
        ).then( () => {
            z = pa(ye, "beforeRouteUpdate", N, Y);
            for (const x of ye)
                x.updateGuards.forEach(D => {
                    z.push(qt(D, N, Y))
                }
                );
            return z.push(v),
            Ae(z)
        }
        ).then( () => {
            z = [];
            for (const x of y)
                if (x.beforeEnter)
                    if (bt(x.beforeEnter))
                        for (const D of x.beforeEnter)
                            z.push(qt(D, N, Y));
                    else
                        z.push(qt(x.beforeEnter, N, Y));
            return z.push(v),
            Ae(z)
        }
        ).then( () => (N.matched.forEach(x => x.enterCallbacks = {}),
        z = pa(y, "beforeRouteEnter", N, Y, T),
        z.push(v),
        Ae(z))).then( () => {
            z = [];
            for (const x of i.list())
                z.push(qt(x, N, Y));
            return z.push(v),
            Ae(z)
        }
        ).catch(x => Rt(x, 8) ? x : Promise.reject(x))
    }
    function F(N, Y, z) {
        s.list().forEach(te => T( () => te(N, Y, z)))
    }
    function S(N, Y, z, te, ye) {
        const y = h(N, Y);
        if (y)
            return y;
        const v = Y === ft
          , x = Rn ? history.state : {};
        z && (te || v ? o.replace(N.fullPath, ve({
            scroll: v && x && x.scroll
        }, ye)) : o.push(N.fullPath, ye)),
        l.value = N,
        De(N, Y, z, v),
        le()
    }
    let R;
    function V() {
        R || (R = o.listen( (N, Y, z) => {
            if (!Nt.listening)
                return;
            const te = E(N)
              , ye = M(te);
            if (ye) {
                I(ve(ye, {
                    replace: !0
                }), te).catch(yr);
                return
            }
            c = te;
            const y = l.value;
            Rn && Oy(Ul(y.fullPath, z.delta), Ko()),
            C(te, y).catch(v => Rt(v, 12) ? v : Rt(v, 2) ? (I(v.to, te).then(x => {
                Rt(x, 20) && !z.delta && z.type === Mr.pop && o.go(-1, !1)
            }
            ).catch(yr),
            Promise.reject()) : (z.delta && o.go(-z.delta, !1),
            B(v, te, y))).then(v => {
                v = v || S(te, y, !1),
                v && (z.delta && !Rt(v, 8) ? o.go(-z.delta, !1) : z.type === Mr.pop && Rt(v, 20) && o.go(-1, !1)),
                F(te, y, v)
            }
            ).catch(yr)
        }
        ))
    }
    let $ = rr(), k = rr(), O;
    function B(N, Y, z) {
        le(N);
        const te = k.list();
        return te.length ? te.forEach(ye => ye(N, Y, z)) : console.error(N),
        Promise.reject(N)
    }
    function J() {
        return O && l.value !== ft ? Promise.resolve() : new Promise( (N, Y) => {
            $.add([N, Y])
        }
        )
    }
    function le(N) {
        return O || (O = !N,
        V(),
        $.list().forEach( ([Y,z]) => N ? z(N) : Y()),
        $.reset()),
        N
    }
    function De(N, Y, z, te) {
        const {scrollBehavior: ye} = e;
        if (!Rn || !ye)
            return Promise.resolve();
        const y = !z && Ly(Ul(N.fullPath, 0)) || (te || !z) && history.state && history.state.scroll || null;
        return lt().then( () => ye(N, Y, y)).then(v => v && My(v)).catch(v => B(v, N, Y))
    }
    const de = N => o.go(N);
    let Je;
    const ut = new Set
      , Nt = {
        currentRoute: l,
        listening: !0,
        addRoute: p,
        removeRoute: m,
        clearRoutes: t.clearRoutes,
        hasRoute: w,
        getRoutes: b,
        resolve: E,
        options: e,
        push: g,
        replace: A,
        go: de,
        back: () => de(-1),
        forward: () => de(1),
        beforeEach: a.add,
        beforeResolve: i.add,
        afterEach: s.add,
        onError: k.add,
        isReady: J,
        install(N) {
            const Y = this;
            N.component("RouterLink", ob),
            N.component("RouterView", _d),
            N.config.globalProperties.$router = Y,
            Object.defineProperty(N.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => K(l)
            }),
            Rn && !Je && l.value === ft && (Je = !0,
            g(o.location).catch(ye => {}
            ));
            const z = {};
            for (const ye in ft)
                Object.defineProperty(z, ye, {
                    get: () => l.value[ye],
                    enumerable: !0
                });
            N.provide(rs, Y),
            N.provide(os, It(z)),
            N.provide(ri, l);
            const te = N.unmount;
            ut.add(N),
            N.unmount = function() {
                ut.delete(N),
                ut.size < 1 && (c = ft,
                R && R(),
                R = null,
                l.value = ft,
                Je = !1,
                O = !1),
                te()
            }
        }
    };
    function Ae(N) {
        return N.reduce( (Y, z) => Y.then( () => T(z)), Promise.resolve())
    }
    return Nt
}
function cb(e, t) {
    const n = []
      , r = []
      , o = []
      , a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
        const s = t.matched[i];
        s && (e.matched.find(c => zn(c, s)) ? r.push(s) : n.push(s));
        const l = e.matched[i];
        l && (t.matched.find(c => zn(c, l)) || o.push(l))
    }
    return [n, r, o]
}
function Ad(e) {
    return be(os)
}
const ub = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , oi = (e, t) => {
    const n = e.route.matched.find(o => {
        var a;
        return ((a = o.components) == null ? void 0 : a.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && ub(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , db = (e, t) => ({
    default: () => e ? ge(Vp, e === !0 ? {} : e, t) : t
});
function as(e) {
    return Array.isArray(e) ? e : [e]
}
const fb = "modulepreload"
  , pb = function(e, t) {
    return new URL(e,t).href
}
  , ec = {}
  , mb = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        const a = document.getElementsByTagName("link")
          , i = document.querySelector("meta[property=csp-nonce]")
          , s = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        o = Promise.all(n.map(l => {
            if (l = pb(l, r),
            l in ec)
                return;
            ec[l] = !0;
            const c = l.endsWith(".css")
              , u = c ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let p = a.length - 1; p >= 0; p--) {
                    const m = a[p];
                    if (m.href === l && (!c || m.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${l}"]${u}`))
                return;
            const f = document.createElement("link");
            if (f.rel = c ? "stylesheet" : fb,
            c || (f.as = "script",
            f.crossOrigin = ""),
            f.href = l,
            s && f.setAttribute("nonce", s),
            document.head.appendChild(f),
            c)
                return new Promise( (p, m) => {
                    f.addEventListener("load", p),
                    f.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    return o.then( () => t()).catch(a => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = a,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw a
    }
    )
}
  , L = (...e) => mb(...e).catch(t => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , ma = [{
    name: "css-generator-background-color",
    path: "/css-generator/background-color",
    component: () => L( () => import("./CT3MLxkB.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-background-gradient",
    path: "/css-generator/background-gradient",
    component: () => L( () => import("./D5lPbg0-.js"), __vite__mapDeps([7, 2, 1, 3, 8, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-background-image",
    path: "/css-generator/background-image",
    component: () => L( () => import("./CdSnYwyj.js"), __vite__mapDeps([10, 1, 2, 3, 8, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-blur",
    path: "/css-generator/blur",
    component: () => L( () => import("./DJlm_hyW.js"), __vite__mapDeps([11, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-border-image",
    path: "/css-generator/border-image",
    component: () => L( () => import("./CB81-RX4.js"), __vite__mapDeps([12, 1, 2, 3, 8, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-border-radius",
    path: "/css-generator/border-radius",
    component: () => L( () => import("./Dnb2Gvzr.js"), __vite__mapDeps([13, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-border",
    path: "/css-generator/border",
    component: () => L( () => import("./D0mpCo43.js"), __vite__mapDeps([14, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-box-resize",
    path: "/css-generator/box-resize",
    component: () => L( () => import("./C8BJHQ37.js"), __vite__mapDeps([15, 8, 2, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-box-shadow",
    path: "/css-generator/box-shadow",
    component: () => L( () => import("./eXWNli8h.js"), __vite__mapDeps([16, 8, 2, 9, 1, 3, 17, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-brightness",
    path: "/css-generator/brightness",
    component: () => L( () => import("./CO-iQIiX.js"), __vite__mapDeps([18, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-color",
    path: "/css-generator/color",
    component: () => L( () => import("./DNSIB097.js"), __vite__mapDeps([19, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-columns",
    path: "/css-generator/columns",
    component: () => L( () => import("./D3yKnveS.js"), __vite__mapDeps([20, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-contrast",
    path: "/css-generator/contrast",
    component: () => L( () => import("./BmXPLnZQ.js"), __vite__mapDeps([21, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-cursor",
    path: "/css-generator/cursor",
    component: () => L( () => import("./8VAo5oMs.js"), __vite__mapDeps([22, 8, 2, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-display",
    path: "/css-generator/display",
    component: () => L( () => import("./DplrtLGB.js"), __vite__mapDeps([23, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-drop-shadow",
    path: "/css-generator/drop-shadow",
    component: () => L( () => import("./D6m6k_xx.js"), __vite__mapDeps([26, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-grayscale",
    path: "/css-generator/grayscale",
    component: () => L( () => import("./BgF3UY6u.js"), __vite__mapDeps([27, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-hue-rotate",
    path: "/css-generator/hue-rotate",
    component: () => L( () => import("./DbSnibly.js"), __vite__mapDeps([28, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator",
    path: "/css-generator",
    component: () => L( () => import("./DwtGsmW5.js"), __vite__mapDeps([29, 30, 31, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-invert",
    path: "/css-generator/invert",
    component: () => L( () => import("./CYqJj7J6.js"), __vite__mapDeps([33, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-keyframe-animation",
    path: "/css-generator/keyframe-animation",
    component: () => L( () => import("./Bs5FqREO.js"), __vite__mapDeps([34, 25, 8, 2, 9, 1, 3, 35, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-letter-spacing",
    path: "/css-generator/letter-spacing",
    component: () => L( () => import("./B705aMGX.js"), __vite__mapDeps([36, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-line-height",
    path: "/css-generator/line-height",
    component: () => L( () => import("./0S1KI4k9.js"), __vite__mapDeps([37, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-list-style",
    path: "/css-generator/list-style",
    component: () => L( () => import("./DnSbIYIz.js"), __vite__mapDeps([38, 8, 2, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-opacity",
    path: "/css-generator/opacity",
    component: () => L( () => import("./D4mz8J-e.js"), __vite__mapDeps([39, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-outline",
    path: "/css-generator/outline",
    component: () => L( () => import("./CTRlhk8X.js"), __vite__mapDeps([40, 1, 2, 3, 8, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-overflow-wrap",
    path: "/css-generator/overflow-wrap",
    component: () => L( () => import("./pzZgpct-.js"), __vite__mapDeps([41, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-overflow",
    path: "/css-generator/overflow",
    component: () => L( () => import("./CZ453KYi.js"), __vite__mapDeps([42, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-perspective",
    path: "/css-generator/perspective",
    component: () => L( () => import("./Bkh7C-Ea.js"), __vite__mapDeps([43, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-rotate",
    path: "/css-generator/rotate",
    component: () => L( () => import("./DA63HS7H.js"), __vite__mapDeps([44, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-saturate",
    path: "/css-generator/saturate",
    component: () => L( () => import("./DYFrvEr6.js"), __vite__mapDeps([45, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-scale",
    path: "/css-generator/scale",
    component: () => L( () => import("./CBltlzRu.js"), __vite__mapDeps([46, 2, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-sepia",
    path: "/css-generator/sepia",
    component: () => L( () => import("./BcPp-rPP.js"), __vite__mapDeps([47, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-skew",
    path: "/css-generator/skew",
    component: () => L( () => import("./BDr71xLx.js"), __vite__mapDeps([48, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-tab-size",
    path: "/css-generator/tab-size",
    component: () => L( () => import("./DY_Lr4HD.js"), __vite__mapDeps([49, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-text-align",
    path: "/css-generator/text-align",
    component: () => L( () => import("./GfHinqAJ.js"), __vite__mapDeps([50, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-text-decoration",
    path: "/css-generator/text-decoration",
    component: () => L( () => import("./C5NNCcPp.js"), __vite__mapDeps([51, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-text-indent",
    path: "/css-generator/text-indent",
    component: () => L( () => import("./K_HXzQWF.js"), __vite__mapDeps([52, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-text-shadow",
    path: "/css-generator/text-shadow",
    component: () => L( () => import("./BmjeTXPT.js"), __vite__mapDeps([53, 1, 2, 3, 17, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-text-transform",
    path: "/css-generator/text-transform",
    component: () => L( () => import("./DI-LCzLi.js"), __vite__mapDeps([54, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-transition",
    path: "/css-generator/transition",
    component: () => L( () => import("./Bh1j5J2y.js"), __vite__mapDeps([55, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-translate",
    path: "/css-generator/translate",
    component: () => L( () => import("./CBYefRHJ.js"), __vite__mapDeps([56, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-visibility",
    path: "/css-generator/visibility",
    component: () => L( () => import("./C7puVTLC.js"), __vite__mapDeps([57, 8, 2, 9, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-white-space",
    path: "/css-generator/white-space",
    component: () => L( () => import("./DhtZkKB_.js"), __vite__mapDeps([58, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-word-break",
    path: "/css-generator/word-break",
    component: () => L( () => import("./ChAKhqYU.js"), __vite__mapDeps([59, 8, 2, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "css-generator-word-spacing",
    path: "/css-generator/word-spacing",
    component: () => L( () => import("./O7toQX6c.js"), __vite__mapDeps([60, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-audio",
    path: "/html-generator/audio",
    component: () => L( () => import("./CSHnPalA.js"), __vite__mapDeps([61, 1, 2, 3, 8, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-bi-directional-override",
    path: "/html-generator/bi-directional-override",
    component: () => L( () => import("./Bqwnsqpb.js"), __vite__mapDeps([62, 8, 2, 9, 63, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-cite",
    path: "/html-generator/cite",
    component: () => L( () => import("./7S-1XT3o.js"), __vite__mapDeps([64, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-code",
    path: "/html-generator/code",
    component: () => L( () => import("./DKENS7I1.js"), __vite__mapDeps([65, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-details",
    path: "/html-generator/details",
    component: () => L( () => import("./CLrzz-e_.js"), __vite__mapDeps([66, 1, 2, 3, 63, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-dialog",
    path: "/html-generator/dialog",
    component: () => L( () => import("./CxRUVVBe.js"), __vite__mapDeps([67, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-emphasize",
    path: "/html-generator/emphasize",
    component: () => L( () => import("./d-WQTDHH.js"), __vite__mapDeps([68, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-hyperlink",
    path: "/html-generator/hyperlink",
    component: () => L( () => import("./DyvW0mp4.js"), __vite__mapDeps([69, 8, 2, 9, 24, 25, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-iframe",
    path: "/html-generator/iframe",
    component: () => L( () => import("./DlYX7i6_.js"), __vite__mapDeps([70, 1, 2, 3, 8, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-image",
    path: "/html-generator/image",
    component: () => L( () => import("./1ixlLFLh.js"), __vite__mapDeps([71, 1, 2, 3, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator",
    path: "/html-generator",
    component: () => L( () => import("./D1Av-cSQ.js"), __vite__mapDeps([72, 30, 31, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-button",
    path: "/html-generator/input-button",
    component: () => L( () => import("./p4IoLRNg.js"), __vite__mapDeps([73, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-checkbox-radio",
    path: "/html-generator/input-checkbox-radio",
    component: () => L( () => import("./S9E5VGU7.js"), __vite__mapDeps([74, 8, 2, 9, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-color",
    path: "/html-generator/input-color",
    component: () => L( () => import("./A1l86awx.js"), __vite__mapDeps([75, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-date-time",
    path: "/html-generator/input-date-time",
    component: () => L( () => import("./B72xjydA.js"), __vite__mapDeps([76, 8, 2, 9, 24, 25, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-email",
    path: "/html-generator/input-email",
    component: () => L( () => import("./DXbeiKZs.js"), __vite__mapDeps([77, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-file",
    path: "/html-generator/input-file",
    component: () => L( () => import("./C_ufiNWI.js"), __vite__mapDeps([78, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-image",
    path: "/html-generator/input-image",
    component: () => L( () => import("./RrWGhuw0.js"), __vite__mapDeps([79, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-number",
    path: "/html-generator/input-number",
    component: () => L( () => import("./DhGhOeTa.js"), __vite__mapDeps([80, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-password",
    path: "/html-generator/input-password",
    component: () => L( () => import("./yz51RUMJ.js"), __vite__mapDeps([81, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-range",
    path: "/html-generator/input-range",
    component: () => L( () => import("./1wLL4xzt.js"), __vite__mapDeps([82, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-search",
    path: "/html-generator/input-search",
    component: () => L( () => import("./fObW_NXH.js"), __vite__mapDeps([83, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-submit",
    path: "/html-generator/input-submit",
    component: () => L( () => import("./B_Xkcjv_.js"), __vite__mapDeps([84, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-telephone",
    path: "/html-generator/input-telephone",
    component: () => L( () => import("./C78LwHvU.js"), __vite__mapDeps([85, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-text",
    path: "/html-generator/input-text",
    component: () => L( () => import("./Do0Kas1X.js"), __vite__mapDeps([86, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-input-url",
    path: "/html-generator/input-url",
    component: () => L( () => import("./Cg6R2Rb8.js"), __vite__mapDeps([87, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-mark",
    path: "/html-generator/mark",
    component: () => L( () => import("./BaIPomby.js"), __vite__mapDeps([88, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-meter",
    path: "/html-generator/meter",
    component: () => L( () => import("./D6DCGT5R.js"), __vite__mapDeps([89, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-progress",
    path: "/html-generator/progress",
    component: () => L( () => import("./BUiAYHY_.js"), __vite__mapDeps([90, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-quote-blockquote",
    path: "/html-generator/quote-blockquote",
    component: () => L( () => import("./aD4W92Qy.js"), __vite__mapDeps([91, 8, 2, 9, 24, 25, 63, 1, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-strikethrough",
    path: "/html-generator/strikethrough",
    component: () => L( () => import("./B1aakGof.js"), __vite__mapDeps([92, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-strong",
    path: "/html-generator/strong",
    component: () => L( () => import("./DKuIy7bX.js"), __vite__mapDeps([93, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-superscript-subscript",
    path: "/html-generator/superscript-subscript",
    component: () => L( () => import("./BSzJ5VXm.js"), __vite__mapDeps([94, 8, 2, 9, 63, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-textarea",
    path: "/html-generator/textarea",
    component: () => L( () => import("./DqAQvYay.js"), __vite__mapDeps([95, 1, 2, 3, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-unarticulated",
    path: "/html-generator/unarticulated",
    component: () => L( () => import("./DwmjaIIf.js"), __vite__mapDeps([96, 63, 2, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "html-generator-video",
    path: "/html-generator/video",
    component: () => L( () => import("./DU5Xcmuk.js"), __vite__mapDeps([97, 1, 2, 3, 8, 9, 24, 25, 4, 5, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "index",
    path: "/",
    component: () => L( () => import("./D8wOBlQi.js"), __vite__mapDeps([98, 30, 25, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "meta-tags-generator",
    path: "/meta-tags-generator",
    component: () => L( () => import("./BwqlpCf0.js"), __vite__mapDeps([99, 8, 2, 9, 1, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-article",
    path: "/open-graph-generator/article",
    component: () => L( () => import("./YhDPCd6F.js"), __vite__mapDeps([100, 1, 2, 3, 24, 25, 63, 4, 101, 9, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-book",
    path: "/open-graph-generator/book",
    component: () => L( () => import("./BC3kxRAD.js"), __vite__mapDeps([102, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-business",
    path: "/open-graph-generator/business",
    component: () => L( () => import("./BZCWwJ1G.js"), __vite__mapDeps([103, 1, 2, 3, 24, 25, 63, 101, 9, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator",
    path: "/open-graph-generator",
    component: () => L( () => import("./BuDmWEOs.js"), __vite__mapDeps([104, 30, 31, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-music-album",
    path: "/open-graph-generator/music-album",
    component: () => L( () => import("./DBPz_LTE.js"), __vite__mapDeps([105, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-music-playlist",
    path: "/open-graph-generator/music-playlist",
    component: () => L( () => import("./CpkVo2PE.js"), __vite__mapDeps([106, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-music-radio-station",
    path: "/open-graph-generator/music-radio-station",
    component: () => L( () => import("./C9utqbBN.js"), __vite__mapDeps([107, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-music-song",
    path: "/open-graph-generator/music-song",
    component: () => L( () => import("./C6ietlIX.js"), __vite__mapDeps([108, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-product",
    path: "/open-graph-generator/product",
    component: () => L( () => import("./BL4ioxTB.js"), __vite__mapDeps([109, 1, 2, 3, 24, 25, 63, 8, 9, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-profile",
    path: "/open-graph-generator/profile",
    component: () => L( () => import("./sqGDi4DY.js"), __vite__mapDeps([110, 1, 2, 3, 24, 25, 4, 63, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-video-episode",
    path: "/open-graph-generator/video-episode",
    component: () => L( () => import("./j7DaoryI.js"), __vite__mapDeps([111, 1, 2, 3, 24, 25, 4, 63, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-video-movie",
    path: "/open-graph-generator/video-movie",
    component: () => L( () => import("./C7dHw7tC.js"), __vite__mapDeps([112, 1, 2, 3, 24, 25, 4, 63, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-video-tv-show",
    path: "/open-graph-generator/video-tv-show",
    component: () => L( () => import("./CmD2GYyl.js"), __vite__mapDeps([113, 1, 2, 3, 24, 25, 4, 63, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-video",
    path: "/open-graph-generator/video",
    component: () => L( () => import("./BcH73Lin.js"), __vite__mapDeps([114, 1, 2, 3, 24, 25, 4, 63, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "open-graph-generator-website",
    path: "/open-graph-generator/website",
    component: () => L( () => import("./CE8uaIdU.js"), __vite__mapDeps([115, 1, 2, 3, 24, 25, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "privacy",
    path: "/privacy",
    component: () => L( () => import("./DW4aKTXg.js"), __vite__mapDeps([116, 30, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "robots-txt-generator",
    path: "/robots-txt-generator",
    component: () => L( () => import("./DB77YJu1.js"), __vite__mapDeps([117, 63, 2, 24, 25, 8, 9, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-article",
    path: "/structured-data-generator/article",
    component: () => L( () => import("./BGfkDEE7.js"), __vite__mapDeps([118, 8, 2, 9, 24, 25, 1, 3, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-breadcrumb",
    path: "/structured-data-generator/breadcrumb",
    component: () => L( () => import("./DUfdThAg.js"), __vite__mapDeps([119, 1, 2, 3, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-event",
    path: "/structured-data-generator/event",
    component: () => L( () => import("./Ca1cagOn.js"), __vite__mapDeps([120, 1, 2, 3, 63, 8, 9, 101, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-faq",
    path: "/structured-data-generator/faq",
    component: () => L( () => import("./DZtsku03.js"), __vite__mapDeps([121, 1, 2, 3, 63, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-how-to",
    path: "/structured-data-generator/how-to",
    component: () => L( () => import("./B1P0tIHE.js"), __vite__mapDeps([122, 1, 2, 3, 63, 8, 9, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator",
    path: "/structured-data-generator",
    component: () => L( () => import("./BUngZ1as.js"), __vite__mapDeps([123, 30, 31, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-job-posting",
    path: "/structured-data-generator/job-posting",
    component: () => L( () => import("./BJqJn9WK.js"), __vite__mapDeps([124, 1, 2, 3, 63, 8, 9, 101, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-local-business",
    path: "/structured-data-generator/local-business",
    component: () => L( () => import("./C4dDATTa.js"), __vite__mapDeps([125, 8, 2, 9, 1, 3, 101, 17, 24, 25, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-organization",
    path: "/structured-data-generator/organization",
    component: () => L( () => import("./HrrAE4G2.js"), __vite__mapDeps([126, 8, 2, 9, 1, 3, 101, 24, 25, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-person",
    path: "/structured-data-generator/person",
    component: () => L( () => import("./DImk7cbi.js"), __vite__mapDeps([127, 1, 2, 3, 101, 9, 24, 25, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-product",
    path: "/structured-data-generator/product",
    component: () => L( () => import("./D2rC0YpQ.js"), __vite__mapDeps([128, 1, 2, 3, 63, 8, 9, 24, 25, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-recipe",
    path: "/structured-data-generator/recipe",
    component: () => L( () => import("./DyZ1cJYn.js"), __vite__mapDeps([129, 1, 2, 3, 8, 9, 63, 17, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-video",
    path: "/structured-data-generator/video",
    component: () => L( () => import("./DFh-FqHN.js"), __vite__mapDeps([130, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "structured-data-generator-website",
    path: "/structured-data-generator/website",
    component: () => L( () => import("./CVOdyvAH.js"), __vite__mapDeps([131, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "twitter-card-generator-app",
    path: "/twitter-card-generator/app",
    component: () => L( () => import("./DBUXmbzI.js"), __vite__mapDeps([132, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "twitter-card-generator",
    path: "/twitter-card-generator",
    component: () => L( () => import("./CznVokBH.js"), __vite__mapDeps([133, 30, 31, 32, 4]), import.meta.url).then(e => e.default || e)
}, {
    name: "twitter-card-generator-player",
    path: "/twitter-card-generator/player",
    component: () => L( () => import("./DNi5yf4o.js"), __vite__mapDeps([134, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "twitter-card-generator-summary-large-image",
    path: "/twitter-card-generator/summary-large-image",
    component: () => L( () => import("./Djsam_pd.js"), __vite__mapDeps([135, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}, {
    name: "twitter-card-generator-summary",
    path: "/twitter-card-generator/summary",
    component: () => L( () => import("./IOnPVRG4.js"), __vite__mapDeps([136, 1, 2, 3, 63, 4, 6]), import.meta.url).then(e => e.default || e)
}]
  , wd = (e, t, n) => (t = t === !0 ? {} : t,
{
    default: () => {
        var r;
        return t ? ge(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function tc(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function hb(e, t) {
    return e === t || t === ft ? !1 : tc(e) !== tc(t) ? !0 : !e.matched.every( (r, o) => {
        var a, i;
        return r.components && r.components.default === ((i = (a = t.matched[o]) == null ? void 0 : a.components) == null ? void 0 : i.default)
    }
    )
}
const gb = {
    scrollBehavior(e, t, n) {
        var c;
        const r = Oe()
          , o = ((c = ct().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let a = n || void 0;
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!a && t && e && i !== !1 && hb(e, t) && (a = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: nc(e.hash),
                behavior: o
            } : !1;
        const s = u => !!(u.meta.pageTransition ?? Ka)
          , l = s(t) && s(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u => {
            r.hooks.hookOnce(l, async () => {
                await new Promise(d => setTimeout(d, 0)),
                e.hash && (a = {
                    el: e.hash,
                    top: nc(e.hash),
                    behavior: o
                }),
                u(a)
            }
            )
        }
        )
    }
};
function nc(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
const yb = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , rt = {
    ...yb,
    ...gb
}
  , bb = async e => {
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = Oe()
      , o = ct()
      , a = ([t,n] = $n( () => Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t);
    if (a === !0)
        return;
    const i = $r({
        statusCode: a && a.statusCode || 404,
        statusMessage: a && a.statusMessage || `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , s = o.beforeResolve(c => {
        if (s(),
        c === e) {
            const u = o.afterEach(async () => {
                u(),
                await r.runWithContext( () => Ln(i)),
                window == null || window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , vb = async e => {
    let t, n;
    const r = ([t,n] = $n( () => ts(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return jo(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , _b = [bb, vb]
  , vr = {};
function Ab(e, t, n) {
    const {pathname: r, search: o, hash: a} = t
      , i = e.indexOf("#");
    if (i > -1) {
        const c = a.includes(e.slice(i)) ? e.slice(i).length : 1;
        let u = a.slice(c);
        return u[0] !== "/" && (u = "/" + u),
        _l(u, "")
    }
    const s = _l(r, e)
      , l = !n || s0(s, n, {
        trailingSlash: !0
    }) ? s : n;
    return l + (l.includes("?") ? "" : o) + a
}
const wb = Ke({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var w;
        let t, n, r = Nr().app.baseURL;
        rt.hashMode && !r.includes("#") && (r += "#");
        const o = ((w = rt.history) == null ? void 0 : w.call(rt, r)) ?? (rt.hashMode ? Ny(r) : hd(r))
          , a = rt.routes ? ([t,n] = $n( () => rt.routes(ma)),
        t = await t,
        n(),
        t ?? ma) : ma;
        let i;
        const s = lb({
            ...rt,
            scrollBehavior: (E, _, h) => {
                if (_ === ft) {
                    i = h;
                    return
                }
                if (rt.scrollBehavior) {
                    if (s.options.scrollBehavior = rt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const g = s.beforeEach( () => {
                            g(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return rt.scrollBehavior(E, ft, i || h)
                }
            }
            ,
            history: o,
            routes: a
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(s);
        const l = kn(s.currentRoute.value);
        s.afterEach( (E, _) => {
            l.value = _
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const c = Ab(r, window.location, e.payload.path)
          , u = kn(s.currentRoute.value)
          , d = () => {
            u.value = s.currentRoute.value
        }
        ;
        e.hook("page:finish", d),
        s.afterEach( (E, _) => {
            var h, g, A, M;
            ((g = (h = E.matched[0]) == null ? void 0 : h.components) == null ? void 0 : g.default) === ((M = (A = _.matched[0]) == null ? void 0 : A.components) == null ? void 0 : M.default) && d()
        }
        );
        const f = {};
        for (const E in u.value)
            Object.defineProperty(f, E, {
                get: () => u.value[E]
            });
        e._route = It(f),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const p = Vo();
        s.afterEach(async (E, _, h) => {
            delete e._processingMiddleware,
            !e.isHydrating && p.value && await e.runWithContext(sg),
            h && await e.callHook("page:loading:end"),
            E.matched.length === 0 && await e.runWithContext( () => Ln(Ja({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${E.fullPath}`,
                data: {
                    path: E.fullPath
                }
            })))
        }
        );
        try {
            [t,n] = $n( () => s.isReady()),
            await t,
            n()
        } catch (E) {
            [t,n] = $n( () => e.runWithContext( () => Ln(E))),
            await t,
            n()
        }
        const m = c !== s.currentRoute.value.fullPath ? s.resolve(c) : s.currentRoute.value;
        d();
        const b = e.payload.state._layout;
        return s.beforeEach(async (E, _) => {
            var h;
            await e.callHook("page:loading:start"),
            E.meta = st(E.meta),
            e.isHydrating && b && !En(E.meta.layout) && (E.meta.layout = b),
            e._processingMiddleware = !0;
            {
                const g = new Set([..._b, ...e._middleware.global]);
                for (const A of E.matched) {
                    const M = A.meta.middleware;
                    if (M)
                        for (const I of as(M))
                            g.add(I)
                }
                {
                    const A = await e.runWithContext( () => ts(E.path));
                    if (A.appMiddleware)
                        for (const M in A.appMiddleware)
                            A.appMiddleware[M] ? g.add(M) : g.delete(M)
                }
                for (const A of g) {
                    const M = typeof A == "string" ? e._middleware.named[A] || await ((h = vr[A]) == null ? void 0 : h.call(vr).then(P => P.default || P)) : A;
                    if (!M)
                        throw new Error(`Unknown route middleware: '${A}'.`);
                    const I = await e.runWithContext( () => M(E, _));
                    if (!e.payload.serverRendered && e.isHydrating && (I === !1 || I instanceof Error)) {
                        const P = I || Ja({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${c}`
                        });
                        return await e.runWithContext( () => Ln(P)),
                        !1
                    }
                    if (I !== !0 && (I || I === !1))
                        return I
                }
            }
        }
        ),
        s.onError(async () => {
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        e.hooks.hookOnce("app:created", async () => {
            try {
                "name"in m && (m.name = void 0),
                await s.replace({
                    ...m,
                    force: !0
                }),
                s.options.scrollBehavior = rt.scrollBehavior
            } catch (E) {
                await e.runWithContext( () => Ln(E))
            }
        }
        ),
        {
            provide: {
                router: s
            }
        }
    }
})
  , rc = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout( () => {
        e(n)
    }
    , 1)
}
)
  , is = e => {
    const t = Oe();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
        rc( () => e())
    }
    ) : rc( () => e())
}
  , Eb = Ke({
    name: "nuxt:payload",
    setup(e) {
        ct().beforeResolve(async (t, n) => {
            if (t.path === n.path)
                return;
            const r = await Bl(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        is( () => {
            var t;
            e.hooks.hook("link:prefetch", async n => {
                const {hostname: r} = new URL(n,window.location.href);
                r === window.location.hostname && await Bl(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(Go, 1e3)
        }
        )
    }
})
  , kb = Ke( () => {
    const e = ct();
    is( () => {
        e.beforeResolve(async () => {
            await new Promise(t => {
                setTimeout(t, 100),
                requestAnimationFrame( () => {
                    setTimeout(t, 0)
                }
                )
            }
            )
        }
        )
    }
    )
}
)
  , Tb = Ke(e => {
    let t;
    async function n() {
        const r = await Go();
        t && clearTimeout(t),
        t = setTimeout(n, El);
        try {
            const o = await $fetch(Xi("builds/latest.json") + `?${Date.now()}`);
            o.id !== r.id && e.hooks.callHook("app:manifest:update", o)
        } catch {}
    }
    is( () => {
        t = setTimeout(n, El)
    }
    )
}
);
function Sb(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = ko(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: Oe().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const xb = Ke({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = ct()
          , n = Nr()
          , r = new Set;
        t.beforeEach( () => {
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: a}) => {
            r.add(a)
        }
        );
        function o(a) {
            const s = "href"in a && a.href[0] === "#" ? n.app.baseURL + a.href : Nu(n.app.baseURL, a.fullPath);
            Sb({
                path: s,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", () => {
            t.beforeResolve(o)
        }
        ),
        t.onError( (a, i) => {
            r.has(a) && o(i)
        }
        )
    }
})
  , Cb = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Ed;
const Ur = e => Ed = e
  , kd = Symbol();
function ai(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var _r;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(_r || (_r = {}));
function Pb() {
    const e = Ei(!0)
      , t = e.run( () => q({}));
    let n = []
      , r = [];
    const o = Do({
        install(a) {
            Ur(o),
            o._a = a,
            a.provide(kd, o),
            a.config.globalProperties.$pinia = o,
            r.forEach(i => n.push(i)),
            r = []
        },
        use(a) {
            return !this._a && !Cb ? r.push(a) : n.push(a),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const Td = () => {}
;
function oc(e, t, n, r=Td) {
    e.push(t);
    const o = () => {
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1),
        r())
    }
    ;
    return !n && Tn() && wn(o),
    o
}
function Pn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const Rb = e => e();
function ii(e, t) {
    e instanceof Map && t instanceof Map && t.forEach( (n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , o = e[n];
        ai(o) && ai(r) && e.hasOwnProperty(n) && !Ce(r) && !Xt(r) ? e[n] = ii(o, r) : e[n] = r
    }
    return e
}
const Mb = Symbol();
function Ob(e) {
    return !ai(e) || !e.hasOwnProperty(Mb)
}
const {assign: Gt} = Object;
function Lb(e) {
    return !!(Ce(e) && e.effect)
}
function Ib(e, t, n, r) {
    const {state: o, actions: a, getters: i} = t
      , s = n.state.value[e];
    let l;
    function c() {
        s || (n.state.value[e] = o ? o() : {});
        const u = yp(n.state.value[e]);
        return Gt(u, a, Object.keys(i || {}).reduce( (d, f) => (d[f] = Do(X( () => {
            Ur(n);
            const p = n._s.get(e);
            return i[f].call(p, p)
        }
        )),
        d), {}))
    }
    return l = Sd(e, c, t, n, r, !0),
    l
}
function Sd(e, t, n={}, r, o, a) {
    let i;
    const s = Gt({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, d = [], f = [], p;
    const m = r.state.value[e];
    !a && !m && (r.state.value[e] = {}),
    q({});
    let b;
    function w(P) {
        let T;
        c = u = !1,
        typeof P == "function" ? (P(r.state.value[e]),
        T = {
            type: _r.patchFunction,
            storeId: e,
            events: p
        }) : (ii(r.state.value[e], P),
        T = {
            type: _r.patchObject,
            payload: P,
            storeId: e,
            events: p
        });
        const C = b = Symbol();
        lt().then( () => {
            b === C && (c = !0)
        }
        ),
        u = !0,
        Pn(d, T, r.state.value[e])
    }
    const E = a ? function() {
        const {state: T} = n
          , C = T ? T() : {};
        this.$patch(F => {
            Gt(F, C)
        }
        )
    }
    : Td;
    function _() {
        i.stop(),
        d = [],
        f = [],
        r._s.delete(e)
    }
    function h(P, T) {
        return function() {
            Ur(r);
            const C = Array.from(arguments)
              , F = []
              , S = [];
            function R(k) {
                F.push(k)
            }
            function V(k) {
                S.push(k)
            }
            Pn(f, {
                args: C,
                name: P,
                store: A,
                after: R,
                onError: V
            });
            let $;
            try {
                $ = T.apply(this && this.$id === e ? this : A, C)
            } catch (k) {
                throw Pn(S, k),
                k
            }
            return $ instanceof Promise ? $.then(k => (Pn(F, k),
            k)).catch(k => (Pn(S, k),
            Promise.reject(k))) : (Pn(F, $),
            $)
        }
    }
    const g = {
        _p: r,
        $id: e,
        $onAction: oc.bind(null, f),
        $patch: w,
        $reset: E,
        $subscribe(P, T={}) {
            const C = oc(d, P, T.detached, () => F())
              , F = i.run( () => Pe( () => r.state.value[e], S => {
                (T.flush === "sync" ? u : c) && P({
                    storeId: e,
                    type: _r.direct,
                    events: p
                }, S)
            }
            , Gt({}, l, T)));
            return C
        },
        $dispose: _
    }
      , A = st(g);
    r._s.set(e, A);
    const I = (r._a && r._a.runWithContext || Rb)( () => r._e.run( () => (i = Ei()).run(t)));
    for (const P in I) {
        const T = I[P];
        if (Ce(T) && !Lb(T) || Xt(T))
            a || (m && Ob(T) && (Ce(T) ? T.value = m[P] : ii(T, m[P])),
            r.state.value[e][P] = T);
        else if (typeof T == "function") {
            const C = h(P, T);
            I[P] = C,
            s.actions[P] = T
        }
    }
    return Gt(A, I),
    Gt(pe(A), I),
    Object.defineProperty(A, "$state", {
        get: () => r.state.value[e],
        set: P => {
            w(T => {
                Gt(T, P)
            }
            )
        }
    }),
    r._p.forEach(P => {
        Gt(A, i.run( () => P({
            store: A,
            app: r._a,
            pinia: r,
            options: s
        })))
    }
    ),
    m && a && n.hydrate && n.hydrate(A.$state, m),
    c = !0,
    u = !0,
    A
}
function zo(e, t, n) {
    let r, o;
    const a = typeof t == "function";
    typeof e == "string" ? (r = e,
    o = a ? n : t) : (o = e,
    r = e.id);
    function i(s, l) {
        const c = Gi();
        return s = s || (c ? be(kd, null) : null),
        s && Ur(s),
        s = Ed,
        s._s.has(r) || (a ? Sd(r, t, o, s) : Ib(r, o, s)),
        s._s.get(r)
    }
    return i.$id = r,
    i
}
const Db = e => e === "defer" || e === !1;
function Bb(...e) {
    var b;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    let[n,r,o={}] = e;
    if (typeof n != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const a = Oe()
      , i = r
      , s = () => On.value
      , l = () => a.isHydrating ? a.payload.data[n] : a.static.data[n];
    o.server = o.server ?? !0,
    o.default = o.default ?? s,
    o.getCachedData = o.getCachedData ?? l,
    o.lazy = o.lazy ?? !1,
    o.immediate = o.immediate ?? !0,
    o.deep = o.deep ?? On.deep,
    o.dedupe = o.dedupe ?? "cancel";
    const c = o.getCachedData(n, a)
      , u = c != null;
    if (!a._asyncData[n] || !o.immediate) {
        (b = a.payload._errors)[n] ?? (b[n] = On.errorValue);
        const w = o.deep ? q : kn;
        a._asyncData[n] = {
            data: w(u ? c : o.default()),
            pending: q(!u),
            error: Oi(a.payload._errors, n),
            status: q("idle"),
            _default: o.default
        }
    }
    const d = {
        ...a._asyncData[n]
    };
    delete d._default,
    d.refresh = d.execute = (w={}) => {
        if (a._asyncDataPromises[n]) {
            if (Db(w.dedupe ?? o.dedupe))
                return a._asyncDataPromises[n];
            a._asyncDataPromises[n].cancelled = !0
        }
        if (w._initial || a.isHydrating && w._initial !== !1) {
            const _ = w._initial ? c : o.getCachedData(n, a);
            if (_ != null)
                return Promise.resolve(_)
        }
        d.pending.value = !0,
        d.status.value = "pending";
        const E = new Promise( (_, h) => {
            try {
                _(i(a))
            } catch (g) {
                h(g)
            }
        }
        ).then(async _ => {
            if (E.cancelled)
                return a._asyncDataPromises[n];
            let h = _;
            o.transform && (h = await o.transform(_)),
            o.pick && (h = Fb(h, o.pick)),
            a.payload.data[n] = h,
            d.data.value = h,
            d.error.value = On.errorValue,
            d.status.value = "success"
        }
        ).catch(_ => {
            if (E.cancelled)
                return a._asyncDataPromises[n];
            d.error.value = $r(_),
            d.data.value = K(o.default()),
            d.status.value = "error"
        }
        ).finally( () => {
            E.cancelled || (d.pending.value = !1,
            delete a._asyncDataPromises[n])
        }
        );
        return a._asyncDataPromises[n] = E,
        a._asyncDataPromises[n]
    }
    ,
    d.clear = () => Nb(a, n);
    const f = () => d.refresh({
        _initial: !0
    })
      , p = o.server !== !1 && a.payload.serverRendered;
    {
        const w = vt();
        if (w && !w._nuxtOnBeforeMountCbs) {
            w._nuxtOnBeforeMountCbs = [];
            const h = w._nuxtOnBeforeMountCbs;
            ji( () => {
                h.forEach(g => {
                    g()
                }
                ),
                h.splice(0, h.length)
            }
            ),
            tt( () => h.splice(0, h.length))
        }
        p && a.isHydrating && (d.error.value || c != null) ? (d.pending.value = !1,
        d.status.value = d.error.value ? "error" : "success") : w && (a.payload.serverRendered && a.isHydrating || o.lazy) && o.immediate ? w._nuxtOnBeforeMountCbs.push(f) : o.immediate && f();
        const E = Tn();
        if (o.watch) {
            const h = Pe(o.watch, () => d.refresh());
            E && wn(h)
        }
        const _ = a.hook("app:data:refresh", async h => {
            (!h || h.includes(n)) && await d.refresh()
        }
        );
        E && wn(_)
    }
    const m = Promise.resolve(a._asyncDataPromises[n]).then( () => d);
    return Object.assign(m, d),
    m
}
function Nb(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = On.errorValue),
    e._asyncData[t] && (e._asyncData[t].data.value = void 0,
    e._asyncData[t].error.value = On.errorValue,
    e._asyncData[t].pending.value = !1,
    e._asyncData[t].status.value = "idle"),
    t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0),
    e._asyncDataPromises[t] = void 0)
}
function Fb(e, t) {
    const n = {};
    for (const r of t)
        n[r] = e[r];
    return n
}
const $b = "$s";
function xd(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n,r] = e;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = $b + n
      , a = Oe()
      , i = Oi(a.payload.state, o);
    if (i.value === void 0 && r) {
        const s = r();
        if (Ce(s))
            return a.payload.state[o] = s,
            s;
        i.value = s
    }
    return i
}
function Ub(e, t, n) {
    const [r={},o] = [{}, t]
      , a = X( () => dn(e))
      , i = r.key || z0([o, typeof a.value == "string" ? a.value : "", ...Hb(r)]);
    if (!i || typeof i != "string")
        throw new TypeError("[nuxt] [useFetch] key must be a string: " + i);
    const s = i === o ? "$f" + i : i;
    if (!r.baseURL && typeof a.value == "string" && a.value[0] === "/" && a.value[1] === "/")
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {server: l, lazy: c, default: u, transform: d, pick: f, watch: p, immediate: m, getCachedData: b, deep: w, dedupe: E, ..._} = r
      , h = st({
        ...E0,
        ..._,
        cache: typeof r.cache == "boolean" ? void 0 : r.cache
    })
      , g = {
        server: l,
        lazy: c,
        default: u,
        transform: d,
        pick: f,
        immediate: m,
        getCachedData: b,
        deep: w,
        dedupe: E,
        watch: p === !1 ? [] : [h, a, ...p || []]
    };
    let A;
    return Bb(s, () => {
        var C;
        (C = A == null ? void 0 : A.abort) == null || C.call(A, "Request aborted as another request to the same endpoint was initiated."),
        A = typeof AbortController < "u" ? new AbortController : {};
        const I = dn(r.timeout);
        let P;
        return I && (P = setTimeout( () => A.abort("Request aborted due to timeout."), I),
        A.signal.onabort = () => clearTimeout(P)),
        (r.$fetch || globalThis.$fetch)(a.value, {
            signal: A.signal,
            ...h
        }).finally( () => {
            clearTimeout(P)
        }
        )
    }
    , g)
}
function Hb(e) {
    var n;
    const t = [((n = dn(e.method)) == null ? void 0 : n.toUpperCase()) || "GET", dn(e.baseURL)];
    for (const r of [e.params || e.query]) {
        const o = dn(r);
        if (!o)
            continue;
        const a = {};
        for (const [i,s] of Object.entries(o))
            a[dn(i)] = dn(s);
        t.push(a)
    }
    return t
}
function pt(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = pt(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: pt(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = pt(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = pt(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(o) {
        n.add(pt(o))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(o, a) {
        n.set(pt(a), pt(o))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(pt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const jb = {
    path: "/",
    watch: !0,
    decode: e => ko(decodeURIComponent(e)),
    encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
}
  , no = window.cookieStore;
function Vb(e, t) {
    var l;
    const n = {
        ...jb,
        ...t
    };
    n.filter ?? (n.filter = c => c === e);
    const r = ac(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const a = o !== void 0 && o <= 0
      , i = pt(a ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , s = o && !a ? zb(i, o, n.watch && n.watch !== "shallow") : q(i);
    {
        let c = null;
        try {
            !no && typeof BroadcastChannel < "u" && (c = new BroadcastChannel(`nuxt:cookies:${e}`))
        } catch {}
        const u = () => {
            n.readonly || W0(s.value, r[e]) || (Kb(e, s.value, n),
            r[e] = pt(s.value),
            c == null || c.postMessage({
                value: n.encode(s.value)
            }))
        }
          , d = m => {
            var w;
            const b = m.refresh ? (w = ac(n)) == null ? void 0 : w[e] : n.decode(m.value);
            f = !0,
            s.value = b,
            r[e] = pt(b),
            lt( () => {
                f = !1
            }
            )
        }
        ;
        let f = !1;
        const p = !!Tn();
        if (p && wn( () => {
            f = !0,
            u(),
            c == null || c.close()
        }
        ),
        no) {
            const m = b => {
                const w = b.changed.find(E => E.name === e);
                w && d({
                    value: w.value
                })
            }
            ;
            no.addEventListener("change", m),
            p && wn( () => no.removeEventListener("change", m))
        } else
            c && (c.onmessage = ({data: m}) => d(m));
        n.watch ? Pe(s, () => {
            f || u()
        }
        , {
            deep: n.watch !== "shallow"
        }) : u()
    }
    return s
}
function ac(e={}) {
    return M0(document.cookie, e)
}
function Gb(e, t, n={}) {
    return t == null ? Tl(e, t, {
        ...n,
        maxAge: -1
    }) : Tl(e, t, n)
}
function Kb(e, t, n={}) {
    document.cookie = Gb(e, t, n)
}
const ic = 2147483647;
function zb(e, t, n) {
    let r, o, a = 0;
    const i = n ? q(e) : {
        value: e
    };
    return Tn() && wn( () => {
        o == null || o(),
        clearTimeout(r)
    }
    ),
    gp( (s, l) => {
        n && (o = Pe(i, l));
        function c() {
            a = 0,
            clearTimeout(r);
            const u = t - a
              , d = u < ic ? u : ic;
            r = setTimeout( () => {
                if (a += d,
                a < t)
                    return c();
                i.value = void 0,
                l()
            }
            , d)
        }
        return {
            get() {
                return s(),
                i.value
            },
            set(u) {
                c(),
                i.value = u,
                l()
            }
        }
    }
    )
}
const Wb = Symbol.for("nuxt:client-only")
  , ss = he({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {slots: t, attrs: n}) {
        const r = q(!1);
        return xe( () => {
            r.value = !0
        }
        ),
        $e(Wb, !0),
        o => {
            var l;
            if (r.value)
                return (l = t.default) == null ? void 0 : l.call(t);
            const a = t.fallback || t.placeholder;
            if (a)
                return a();
            const i = o.fallback || o.placeholder || ""
              , s = o.fallbackTag || o.placeholderTag || "span";
            return ue(s, n, i)
        }
    }
})
  , qb = Ke(e => {
    const t = Pb();
    return e.vueApp.use(t),
    Ur(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , Jb = Ke({
    name: "nuxt:global-components"
})
  , Yt = {
    default: () => L( () => import("./Dr9VCd9x.js"), __vite__mapDeps([137, 25]), import.meta.url).then(e => e.default || e),
    generator: () => L( () => import("./BkRTdZU0.js"), __vite__mapDeps([138, 30, 6, 25, 35, 5, 139]), import.meta.url).then(e => e.default || e)
}
  , Yb = Ke({
    name: "nuxt:prefetch",
    setup(e) {
        const t = ct();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                var o;
                const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
                r && typeof Yt[r] == "function" && await Yt[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n => {
            if (jo(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const o = r.meta.layout;
            let a = as(r.meta.middleware);
            a = a.filter(i => typeof i == "string");
            for (const i of a)
                typeof vr[i] == "function" && vr[i]();
            o && typeof Yt[o] == "function" && Yt[o]()
        }
        )
    }
});
var Zb, Qb = () => Zb;
function Xb(e) {
    return typeof e == "function" ? e() : K(e)
}
function si(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = Xb(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => si(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map( ([r,o]) => r === "titleTemplate" || r.startsWith("on") ? [r, K(o)] : [r, si(o, r)])) : n
}
var ev = typeof window < "u"
  , tv = "usehead";
function ls() {
    return vt() && be(tv) || Qb()
}
function nv(e, t={}) {
    const n = ls()
      , r = q(!1)
      , o = q({});
    Ge( () => {
        o.value = r.value ? {} : si(e)
    }
    );
    const a = n.push(o.value, t);
    return Pe(o, s => {
        a.patch(s)
    }
    ),
    vt() && (Br( () => {
        a.dispose()
    }
    ),
    Hi( () => {
        r.value = !0
    }
    ),
    Ui( () => {
        r.value = !1
    }
    )),
    a
}
function rv(e, t={}) {
    return ls().push(e, t)
}
function ov(e, t={}) {
    var r;
    const n = ls();
    if (n) {
        const o = ev || !!((r = n.resolvedOptions) != null && r.document);
        return t.mode === "server" && o || t.mode === "client" && !o ? void 0 : o ? nv(e, t) : rv(e, t)
    }
}
var av = e => {
    const t = {
        created() {
            var o;
            if (typeof ((o = this.$options) == null ? void 0 : o.jsonld) != "function")
                return;
            const r = X( () => this.$options.jsonld.call(this));
            ov( () => ({
                script: [{
                    type: "application/ld+json",
                    children: r.value ? JSON.stringify(r.value, null, "") : void 0
                }]
            }))
        }
    }
      , n = {
        install(r) {
            r.mixin(t)
        }
    };
    e.vueApp.use(n)
}
  , iv = Ke(av);
const sc = /^GTM-[0-9A-Z]+$/;
function ha(e) {
    if (typeof e != "string" || !sc.test(e)) {
        const t = String(e).toUpperCase().replace(/.*-|[^0-9A-Z]/g, "")
          , n = t.length === 0 ? "" : ` Did you mean 'GTM-${t}'?`;
        throw new Error(`'${e}' is not a valid GTM-ID (${sc}).${n}`)
    }
}
function Un(e, t) {
    var n;
    const r = document
      , o = r.createElement("script")
      , a = c => {
        var u;
        (u = t.onReady) == null || u.call(t, {
            id: e,
            script: o
        }),
        o.removeEventListener("load", a)
    }
    ;
    if (o.addEventListener("load", a),
    window.dataLayer = window.dataLayer ?? [],
    (n = window.dataLayer) == null || n.push({
        event: "gtm.js",
        "gtm.start": new Date().getTime()
    }),
    !e)
        return o;
    o.async = !t.defer,
    o.defer = !!(t.defer || t.compatibility),
    t.nonce && (o.nonce = t.nonce);
    const i = new URLSearchParams({
        id: e,
        ...t.queryParams ?? {}
    })
      , s = t.source ?? "https://www.googletagmanager.com/gtm.js";
    o.src = `${s}?${i}`;
    const l = t.parentElement ?? r.body;
    if (typeof (l == null ? void 0 : l.appendChild) != "function")
        throw new Error("parentElement must be a DOM element");
    return l.appendChild(o),
    o
}
function sv(e="https://www.googletagmanager.com/gtm.js") {
    return Array.from(document.getElementsByTagName("script")).some(t => t.src.includes(e))
}
class lv {
    constructor(t) {
        er(this, "id");
        er(this, "options");
        er(this, "scriptElements", []);
        er(this, "isInBrowserContext", () => typeof window < "u");
        if (Array.isArray(t.id))
            for (const n of t.id)
                ha(typeof n == "string" ? n : n.id);
        else
            ha(t.id);
        this.id = t.id,
        this.options = {
            enabled: !0,
            debug: !1,
            loadScript: !0,
            defer: !1,
            compatibility: !1,
            ...t
        },
        delete this.options.id
    }
    enabled() {
        return this.options.enabled ?? !0
    }
    enable(t=!0, n) {
        if (this.options.enabled = t,
        this.isInBrowserContext() && t && !sv(n) && this.options.loadScript)
            if (Array.isArray(this.id))
                this.id.forEach(r => {
                    let o;
                    typeof r == "string" ? o = Un(r, {
                        ...this.options
                    }) : o = Un(r.id, {
                        ...this.options,
                        queryParams: r.queryParams
                    }),
                    this.scriptElements.push(o)
                }
                );
            else {
                const r = Un(this.id, {
                    ...this.options
                });
                this.scriptElements.push(r)
            }
    }
    debugEnabled() {
        return this.options.debug ?? !1
    }
    debug(t) {
        this.options.debug = t
    }
    dataLayer() {
        return this.isInBrowserContext() && this.options.enabled ? window.dataLayer = window.dataLayer ?? [] : !1
    }
    trackView(t, n, r={}) {
        const o = this.isInBrowserContext() && (this.options.enabled ?? !1);
        this.options.debug && console.log(`[GTM-Support${o ? "" : "(disabled)"}]: Dispatching TrackView`, {
            screenName: t,
            path: n
        }),
        o && (window.dataLayer = window.dataLayer ?? []).push({
            ...r,
            event: this.options.trackViewEventProperty ?? "content-view",
            "content-name": n,
            "content-view-name": t
        })
    }
    trackEvent({event: t, category: n=null, action: r=null, label: o=null, value: a=null, noninteraction: i=!1, ...s}={}) {
        const l = this.isInBrowserContext() && (this.options.enabled ?? !1);
        this.options.debug && console.log(`[GTM-Support${l ? "" : "(disabled)"}]: Dispatching event`, {
            event: t,
            category: n,
            action: r,
            label: o,
            value: a,
            ...s
        }),
        l && (window.dataLayer = window.dataLayer ?? []).push({
            event: t ?? "interaction",
            target: n,
            action: r,
            "target-properties": o,
            value: a,
            "interaction-type": i,
            ...s
        })
    }
}
var Qe;
function cv(e, t={
    id: ""
}) {
    t = {
        trackOnNextTick: !1,
        ...t
    },
    Qe = new lv(t),
    e.config.globalProperties.$gtm = Qe,
    Qe.isInBrowserContext() && (t.vueRouter && uv(e, t.vueRouter, t.ignoredViews, t.trackOnNextTick, t.vueRouterAdditionalEventData),
    Qe.options.enabled && Qe.options.loadScript && (Array.isArray(t.id) ? t.id.forEach(n => {
        if (typeof n == "string")
            Un(n, t);
        else {
            let r = {
                ...t
            };
            n.queryParams != null && (r.queryParams = {
                ...r.queryParams,
                ...n.queryParams
            }),
            Un(n.id, r)
        }
    }
    ) : Un(t.id, t))),
    e.provide("gtm", t)
}
function uv(e, t, n=[], r, o= () => ({})) {
    function a(i, s) {
        return i instanceof Error ? !!(i.type & s) : !1
    }
    t.afterEach(async (i, s, l) => {
        var c, u, d;
        if (typeof i.name != "string" || Array.isArray(n) && n.includes(i.name) || typeof n == "function" && n(i, s))
            return;
        let f = i.meta && typeof i.meta.gtm == "string" && i.meta.gtm ? i.meta.gtm : i.name;
        a(l, 4) ? Qe != null && Qe.debugEnabled() && console.log(`[VueGtm]: '${f}' not tracked due to navigation aborted`) : a(l, 8) && Qe != null && Qe.debugEnabled() && console.log(`[VueGtm]: '${f}' not tracked due to navigation cancelled`);
        let p = {
            ...await o(i, s),
            ...(c = i.meta) == null ? void 0 : c.gtmAdditionalEventData
        }
          , m = ((d = (u = t.options) == null ? void 0 : u.history) == null ? void 0 : d.base) ?? "";
        m.endsWith("/") || (m += "/"),
        m += i.fullPath.startsWith("/") ? i.fullPath.substring(1) : i.fullPath,
        r ? lt( () => {
            Qe == null || Qe.trackView(f, m, p)
        }
        ) : Qe == null || Qe.trackView(f, m, p)
    }
    )
}
function dv(e) {
    return {
        install: t => cv(t, e)
    }
}
const fv = Ke(e => {
    {
        const t = e.$config.public.gtm
          , n = ct()
          , r = {
            ...t,
            vueRouter: t.enableRouterSync && n ? n : void 0
        };
        e.vueApp.use(dv(r))
    }
}
)
  , pv = "__NUXT_COLOR_MODE__"
  , mv = "nuxt-color-mode"
  , Mt = window[pv] || {}
  , hv = Ke(e => {
    const t = xd("color-mode", () => st({
        preference: Mt.preference,
        value: Mt.value,
        unknown: !1,
        forced: !1
    })).value;
    ct().afterEach(o => {
        const a = o.meta.colorMode;
        a && a !== "system" ? (t.value = a,
        t.forced = !0) : (a === "system" && console.warn("You cannot force the colorMode to system at the page level."),
        t.forced = !1,
        t.value = t.preference === "system" ? Mt.getColorScheme() : t.preference)
    }
    );
    let n;
    function r() {
        n || !window.matchMedia || (n = window.matchMedia("(prefers-color-scheme: dark)"),
        n.addEventListener("change", () => {
            !t.forced && t.preference === "system" && (t.value = Mt.getColorScheme())
        }
        ))
    }
    Pe( () => t.preference, o => {
        var a;
        t.forced || (o === "system" ? (t.value = Mt.getColorScheme(),
        r()) : t.value = o,
        (a = window.localStorage) == null || a.setItem(mv, o))
    }
    , {
        immediate: !0
    }),
    Pe( () => t.value, (o, a) => {
        Mt.removeColorScheme(a),
        Mt.addColorScheme(o)
    }
    ),
    t.preference === "system" && r(),
    e.hook("app:mounted", () => {
        t.unknown && (t.preference = Mt.preference,
        t.value = Mt.value,
        t.unknown = !1)
    }
    ),
    e.provide("colorMode", t)
}
)
  , gv = Ke( () => {
    let e = !1;
    document.addEventListener("click", t => {
        var n;
        if (((n = t.target) == null ? void 0 : n.nodeName) === "A") {
            const r = t.target;
            r.getAttribute("data-disbale-vignette") !== null && (e || (t.preventDefault(),
            e = !0),
            r.click(),
            setTimeout( () => {
                const a = document.querySelectorAll('ins[ata-vignette-loaded="true"]')[0];
                a && a.remove()
            }
            , 100))
        }
    }
    )
}
);
/*! maska v2.1.10 | (c) Alexander Shabunevich | Released under the MIT license */
var yv = Object.defineProperty
  , bv = (e, t, n) => t in e ? yv(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ar = (e, t, n) => (bv(e, typeof t != "symbol" ? t + "" : t, n),
n);
const lc = {
    "#": {
        pattern: /[0-9]/
    },
    "@": {
        pattern: /[a-zA-Z]/
    },
    "*": {
        pattern: /[a-zA-Z0-9]/
    }
};
let cc = class {
    constructor(t={}) {
        Ar(this, "opts", {}),
        Ar(this, "memo", new Map);
        const n = {
            ...t
        };
        if (n.tokens != null) {
            n.tokens = n.tokensReplace ? {
                ...n.tokens
            } : {
                ...lc,
                ...n.tokens
            };
            for (const r of Object.values(n.tokens))
                typeof r.pattern == "string" && (r.pattern = new RegExp(r.pattern))
        } else
            n.tokens = lc;
        Array.isArray(n.mask) && (n.mask.length > 1 ? n.mask = [...n.mask].sort( (r, o) => r.length - o.length) : n.mask = n.mask[0] ?? ""),
        n.mask === "" && (n.mask = null),
        this.opts = n
    }
    masked(t) {
        return this.process(t, this.findMask(t))
    }
    unmasked(t) {
        return this.process(t, this.findMask(t), !1)
    }
    isEager() {
        return this.opts.eager === !0
    }
    isReversed() {
        return this.opts.reversed === !0
    }
    completed(t) {
        const n = this.findMask(t);
        if (this.opts.mask == null || n == null)
            return !1;
        const r = this.process(t, n).length;
        return typeof this.opts.mask == "string" ? r >= this.opts.mask.length : typeof this.opts.mask == "function" ? r >= n.length : this.opts.mask.filter(o => r >= o.length).length === this.opts.mask.length
    }
    findMask(t) {
        const n = this.opts.mask;
        if (n == null)
            return null;
        if (typeof n == "string")
            return n;
        if (typeof n == "function")
            return n(t);
        const r = this.process(t, n.slice(-1).pop() ?? "", !1);
        return n.find(o => this.process(t, o, !1).length >= r.length) ?? ""
    }
    escapeMask(t) {
        const n = []
          , r = [];
        return t.split("").forEach( (o, a) => {
            o === "!" && t[a - 1] !== "!" ? r.push(a - r.length) : n.push(o)
        }
        ),
        {
            mask: n.join(""),
            escaped: r
        }
    }
    process(t, n, r=!0) {
        var o;
        if (n == null)
            return t;
        const a = `value=${t},mask=${n},masked=${r ? 1 : 0}`;
        if (this.memo.has(a))
            return this.memo.get(a);
        const {mask: i, escaped: s} = this.escapeMask(n)
          , l = []
          , c = this.opts.tokens != null ? this.opts.tokens : {}
          , u = this.isReversed() ? -1 : 1
          , d = this.isReversed() ? "unshift" : "push"
          , f = this.isReversed() ? 0 : i.length - 1
          , p = this.isReversed() ? () => E > -1 && _ > -1 : () => E < i.length && _ < t.length
          , m = h => !this.isReversed() && h <= f || this.isReversed() && h >= f;
        let b, w = -1, E = this.isReversed() ? i.length - 1 : 0, _ = this.isReversed() ? t.length - 1 : 0;
        for (; p(); ) {
            const h = i.charAt(E)
              , g = c[h]
              , A = (g == null ? void 0 : g.transform) != null ? g.transform(t.charAt(_)) : t.charAt(_);
            if (!s.includes(E) && g != null) {
                if (A.match(g.pattern) != null)
                    l[d](A),
                    g.repeated ? (w === -1 ? w = E : E === f && E !== w && (E = w - u),
                    f === w && (E -= u)) : g.multiple && (E -= u),
                    E += u;
                else if (g.multiple) {
                    const M = ((o = l[_ - u]) == null ? void 0 : o.match(g.pattern)) != null
                      , I = i.charAt(E + u);
                    M && I !== "" && c[I] == null ? (E += u,
                    _ -= u) : l[d]("")
                } else
                    A === b ? b = void 0 : g.optional && (E += u,
                    _ -= u);
                _ += u
            } else
                r && !this.isEager() && l[d](h),
                A === h && !this.isEager() ? _ += u : b = h,
                this.isEager() || (E += u);
            if (this.isEager())
                for (; m(E) && (c[i.charAt(E)] == null || s.includes(E)); )
                    r ? l[d](i.charAt(E)) : i.charAt(E) === t.charAt(_) && (_ += u),
                    E += u
        }
        return this.memo.set(a, l.join("")),
        this.memo.get(a)
    }
}
;
const Cd = e => JSON.parse(e.replaceAll("'", '"'))
  , uc = (e, t={}) => {
    const n = {
        ...t
    };
    return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = vv(e.dataset.maska)),
    e.dataset.maskaEager != null && (n.eager = ga(e.dataset.maskaEager)),
    e.dataset.maskaReversed != null && (n.reversed = ga(e.dataset.maskaReversed)),
    e.dataset.maskaTokensReplace != null && (n.tokensReplace = ga(e.dataset.maskaTokensReplace)),
    e.dataset.maskaTokens != null && (n.tokens = _v(e.dataset.maskaTokens)),
    n
}
  , ga = e => e !== "" ? !!JSON.parse(e) : !0
  , vv = e => e.startsWith("[") && e.endsWith("]") ? Cd(e) : e
  , _v = e => {
    if (e.startsWith("{") && e.endsWith("}"))
        return Cd(e);
    const t = {};
    return e.split("|").forEach(n => {
        const r = n.split(":");
        t[r[0]] = {
            pattern: new RegExp(r[1]),
            optional: r[2] === "optional",
            multiple: r[2] === "multiple",
            repeated: r[2] === "repeated"
        }
    }
    ),
    t
}
;
let Av = class {
    constructor(t, n={}) {
        Ar(this, "items", new Map),
        Ar(this, "beforeinputEvent", r => {
            const o = r.target
              , a = this.items.get(o);
            a.isEager() && "inputType"in r && r.inputType.startsWith("delete") && a.unmasked(o.value).length <= 1 && this.setMaskedValue(o, "")
        }
        ),
        Ar(this, "inputEvent", r => {
            if (r instanceof CustomEvent && r.type === "input" && r.detail != null && typeof r.detail == "object" && "masked"in r.detail)
                return;
            const o = r.target
              , a = this.items.get(o)
              , i = o.value
              , s = o.selectionStart
              , l = o.selectionEnd;
            let c = i;
            if (a.isEager()) {
                const u = a.masked(i)
                  , d = a.unmasked(i);
                d === "" && "data"in r && r.data != null ? c = r.data : d !== a.unmasked(u) && (c = d)
            }
            if (this.setMaskedValue(o, c),
            "inputType"in r && (r.inputType.startsWith("delete") || s != null && s < i.length))
                try {
                    o.setSelectionRange(s, l)
                } catch {}
        }
        ),
        this.options = n,
        typeof t == "string" ? this.init(Array.from(document.querySelectorAll(t)), this.getMaskOpts(n)) : this.init("length"in t ? Array.from(t) : [t], this.getMaskOpts(n))
    }
    destroy() {
        for (const t of this.items.keys())
            t.removeEventListener("input", this.inputEvent),
            t.removeEventListener("beforeinput", this.beforeinputEvent);
        this.items.clear()
    }
    needUpdateOptions(t, n) {
        const r = this.items.get(t)
          , o = new cc(uc(t, this.getMaskOpts(n)));
        return JSON.stringify(r.opts) !== JSON.stringify(o.opts)
    }
    needUpdateValue(t) {
        const n = t.dataset.maskaValue;
        return n == null && t.value !== "" || n != null && n !== t.value
    }
    getMaskOpts(t) {
        const {onMaska: n, preProcess: r, postProcess: o, ...a} = t;
        return a
    }
    init(t, n) {
        for (const r of t) {
            const o = new cc(uc(r, n));
            this.items.set(r, o),
            r.value !== "" && this.setMaskedValue(r, r.value),
            r.addEventListener("input", this.inputEvent),
            r.addEventListener("beforeinput", this.beforeinputEvent)
        }
    }
    setMaskedValue(t, n) {
        const r = this.items.get(t);
        this.options.preProcess != null && (n = this.options.preProcess(n));
        const o = r.masked(n)
          , a = r.unmasked(r.isEager() ? o : n)
          , i = r.completed(n)
          , s = {
            masked: o,
            unmasked: a,
            completed: i
        };
        n = o,
        this.options.postProcess != null && (n = this.options.postProcess(n)),
        t.value = n,
        t.dataset.maskaValue = n,
        this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach(l => l(s)) : this.options.onMaska(s)),
        t.dispatchEvent(new CustomEvent("maska",{
            detail: s
        })),
        t.dispatchEvent(new CustomEvent("input",{
            detail: s
        }))
    }
}
;
const li = new WeakMap
  , wv = e => {
    setTimeout( () => {
        var t;
        ((t = li.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"))
    }
    )
}
  , Ev = (e, t) => {
    const n = e instanceof HTMLInputElement ? e : e.querySelector("input")
      , r = {
        ...t.arg
    };
    if (n == null || (n == null ? void 0 : n.type) === "file")
        return;
    wv(n);
    const o = li.get(n);
    if (o != null) {
        if (!o.needUpdateOptions(n, r))
            return;
        o.destroy()
    }
    if (t.value != null) {
        const a = t.value
          , i = s => {
            a.masked = s.masked,
            a.unmasked = s.unmasked,
            a.completed = s.completed
        }
        ;
        r.onMaska = r.onMaska == null ? i : Array.isArray(r.onMaska) ? [...r.onMaska, i] : [r.onMaska, i]
    }
    li.set(n, new Av(n,r))
}
  , kv = Ke(e => {
    e.vueApp.directive("maska", Ev)
}
)
  , Tv = [oy, iy, wb, Eb, kb, Tb, xb, qb, Jb, Yb, iv, fv, hv, gv, kv]
  , Sv = () => ({
    generators: {
        nav: [{
            children: [{
                name: "CSS",
                link: "/css-generator"
            }, {
                name: "HTML",
                link: "/html-generator"
            }, {
                name: "Meta Tags",
                link: "/meta-tags-generator"
            }, {
                name: "Structured Data",
                link: "/structured-data-generator"
            }, {
                name: "Open Graph",
                link: "/open-graph-generator"
            }, {
                name: "Twitter Card",
                link: "/twitter-card-generator"
            }, {
                name: "Robots.txt",
                link: "/robots-txt-generator"
            }]
        }]
    },
    css: {
        name: "CSS",
        nav: [{
            name: "Animation",
            children: [{
                name: "Keyframe Animation",
                link: "/css-generator/keyframe-animation"
            }]
        }, {
            name: "Background",
            children: [{
                name: "Background Color",
                link: "/css-generator/background-color"
            }, {
                name: "Background Gradient",
                link: "/css-generator/background-gradient"
            }, {
                name: "Background Image",
                link: "/css-generator/background-image"
            }]
        }, {
            name: "Box",
            children: [{
                name: "Border",
                link: "/css-generator/border"
            }, {
                name: "Border Image",
                link: "/css-generator/border-image"
            }, {
                name: "Border Radius",
                link: "/css-generator/border-radius"
            }, {
                name: "Box Resize",
                link: "/css-generator/box-resize"
            }, {
                name: "Box Shadow",
                link: "/css-generator/box-shadow"
            }, {
                name: "Opacity",
                link: "/css-generator/opacity"
            }, {
                name: "Outline",
                link: "/css-generator/outline"
            }, {
                name: "Overflow",
                link: "/css-generator/overflow"
            }]
        }, {
            name: "Color",
            children: [{
                name: "Text Color",
                link: "/css-generator/color"
            }]
        }, {
            name: "Filter",
            children: [{
                name: "Blur",
                link: "/css-generator/blur"
            }, {
                name: "Brightness",
                link: "/css-generator/brightness"
            }, {
                name: "Contrast",
                link: "/css-generator/contrast"
            }, {
                name: "Drop Shadow",
                link: "/css-generator/drop-shadow"
            }, {
                name: "Grayscale",
                link: "/css-generator/grayscale"
            }, {
                name: "Hue Rotate",
                link: "/css-generator/hue-rotate"
            }, {
                name: "Invert",
                link: "/css-generator/invert"
            }, {
                name: "Saturate",
                link: "/css-generator/saturate"
            }, {
                name: "Sepia",
                link: "/css-generator/sepia"
            }]
        }, {
            name: "Layout",
            children: [{
                name: "Columns",
                link: "/css-generator/columns"
            }, {
                name: "Display",
                link: "/css-generator/display"
            }, {
                name: "Visibility",
                link: "/css-generator/visibility"
            }]
        }, {
            name: "List",
            children: [{
                name: "List Style",
                link: "/css-generator/list-style"
            }]
        }, {
            name: "Miscellaneous",
            children: [{
                name: "Cursor",
                link: "/css-generator/cursor"
            }]
        }, {
            name: "Text",
            children: [{
                name: "Letter Spacing",
                link: "/css-generator/letter-spacing"
            }, {
                name: "Line Height",
                link: "/css-generator/line-height"
            }, {
                name: "Overflow Wrap",
                link: "/css-generator/overflow-wrap"
            }, {
                name: "Tab Size",
                link: "/css-generator/tab-size"
            }, {
                name: "Text Align",
                link: "/css-generator/text-align"
            }, {
                name: "Text Decoration",
                link: "/css-generator/text-decoration"
            }, {
                name: "Text Indent",
                link: "/css-generator/text-indent"
            }, {
                name: "Text Shadow",
                link: "/css-generator/text-shadow"
            }, {
                name: "Text Transform",
                link: "/css-generator/text-transform"
            }, {
                name: "White Space",
                link: "/css-generator/white-space"
            }, {
                name: "Word Break",
                link: "/css-generator/word-break"
            }, {
                name: "Word Spacing",
                link: "/css-generator/word-spacing"
            }]
        }, {
            name: "Transform",
            children: [{
                name: "Perspective",
                link: "/css-generator/perspective"
            }, {
                name: "Rotate",
                link: "/css-generator/rotate"
            }, {
                name: "Scale",
                link: "/css-generator/scale"
            }, {
                name: "Skew",
                link: "/css-generator/skew"
            }, {
                name: "Translate",
                link: "/css-generator/translate"
            }]
        }, {
            name: "Transition",
            children: [{
                name: "Transition",
                link: "/css-generator/transition"
            }]
        }]
    },
    html: {
        name: "HTML",
        nav: [{
            name: "Input",
            children: [{
                name: "Input Button",
                link: "/html-generator/input-button"
            }, {
                name: "Checkbox & Radio",
                link: "/html-generator/input-checkbox-radio"
            }, {
                name: "Color Input",
                link: "/html-generator/input-color"
            }, {
                name: "Date & Time Input",
                link: "/html-generator/input-date-time"
            }, {
                name: "Email Input",
                link: "/html-generator/input-email"
            }, {
                name: "File Input",
                link: "/html-generator/input-file"
            }, {
                name: "Image Input",
                link: "/html-generator/input-image"
            }, {
                name: "Number Input",
                link: "/html-generator/input-number"
            }, {
                name: "Password Input",
                link: "/html-generator/input-password"
            }, {
                name: "Range Input",
                link: "/html-generator/input-range"
            }, {
                name: "Search Input",
                link: "/html-generator/input-search"
            }, {
                name: "Submit Input",
                link: "/html-generator/input-submit"
            }, {
                name: "Telephone Input",
                link: "/html-generator/input-telephone"
            }, {
                name: "Text Input",
                link: "/html-generator/input-text"
            }, {
                name: "Textarea",
                link: "/html-generator/textarea"
            }, {
                name: "URL Input",
                link: "/html-generator/input-url"
            }]
        }, {
            name: "Media",
            children: [{
                name: "Audio Player",
                link: "/html-generator/audio"
            }, {
                name: "Image",
                link: "/html-generator/image"
            }, {
                name: "Video Player",
                link: "/html-generator/video"
            }]
        }, {
            name: "Text",
            children: [{
                name: "Bi-Directional Override",
                link: "/html-generator/bi-directional-override"
            }, {
                name: "Bold",
                link: "/html-generator/strong"
            }, {
                name: "Cite",
                link: "/html-generator/cite"
            }, {
                name: "Code",
                link: "/html-generator/code"
            }, {
                name: "Italic",
                link: "/html-generator/emphasize"
            }, {
                name: "Highlight (Mark)",
                link: "/html-generator/mark"
            }, {
                name: "Quote & Blockquote",
                link: "/html-generator/quote-blockquote"
            }, {
                name: "Strikethrough",
                link: "/html-generator/strikethrough"
            }, {
                name: "Superscript & Subscript",
                link: "/html-generator/superscript-subscript"
            }, {
                name: "Underline",
                link: "/html-generator/unarticulated"
            }]
        }, {
            name: "Other",
            children: [{
                name: "Details",
                link: "/html-generator/details"
            }, {
                name: "Dialog",
                link: "/html-generator/dialog"
            }, {
                name: "Hyperlink",
                link: "/html-generator/hyperlink"
            }, {
                name: "iframe",
                link: "/html-generator/iframe"
            }, {
                name: "Meter",
                link: "/html-generator/meter"
            }, {
                name: "Progress",
                link: "/html-generator/progress"
            }]
        }]
    },
    metaTags: {
        name: "Meta Tags",
        link: "/meta-tags-generator"
    },
    structuredData: {
        name: "Structured Data",
        nav: [{
            children: [{
                name: "Article",
                link: "/structured-data-generator/article"
            }, {
                name: "Breadcrumb",
                link: "/structured-data-generator/breadcrumb"
            }, {
                name: "Event",
                link: "/structured-data-generator/event"
            }, {
                name: "FAQ",
                link: "/structured-data-generator/faq"
            }, {
                name: "How-to",
                link: "/structured-data-generator/how-to"
            }, {
                name: "Job Posting",
                link: "/structured-data-generator/job-posting"
            }, {
                name: "Local Business",
                link: "/structured-data-generator/local-business"
            }, {
                name: "Organization",
                link: "/structured-data-generator/organization"
            }, {
                name: "Person",
                link: "/structured-data-generator/person"
            }, {
                name: "Product",
                link: "/structured-data-generator/product"
            }, {
                name: "Recipe",
                link: "/structured-data-generator/recipe"
            }, {
                name: "Video",
                link: "/structured-data-generator/video"
            }, {
                name: "Website (Sitelinks)",
                link: "/structured-data-generator/website"
            }]
        }]
    },
    openGraph: {
        name: "Open Graph",
        nav: [{
            children: [{
                name: "Article",
                link: "/open-graph-generator/article"
            }, {
                name: "Book",
                link: "/open-graph-generator/book"
            }, {
                name: "Business",
                link: "/open-graph-generator/business"
            }, {
                name: "Music Album",
                link: "/open-graph-generator/music-album"
            }, {
                name: "Music Playlist",
                link: "/open-graph-generator/music-playlist"
            }, {
                name: "Music Radio Station",
                link: "/open-graph-generator/music-radio-station"
            }, {
                name: "Music Song",
                link: "/open-graph-generator/music-song"
            }, {
                name: "Product",
                link: "/open-graph-generator/product"
            }, {
                name: "Profile",
                link: "/open-graph-generator/profile"
            }, {
                name: "Video",
                link: "/open-graph-generator/video"
            }, {
                name: "Video Episode",
                link: "/open-graph-generator/video-episode"
            }, {
                name: "Video Movie",
                link: "/open-graph-generator/video-movie"
            }, {
                name: "Video Tv Show",
                link: "/open-graph-generator/video-tv-show"
            }, {
                name: "Website",
                link: "/open-graph-generator/website"
            }]
        }]
    },
    twitterCard: {
        name: "Twitter Card",
        nav: [{
            children: [{
                name: "App",
                link: "/twitter-card-generator/app"
            }, {
                name: "Player",
                link: "/twitter-card-generator/player"
            }, {
                name: "Summary",
                link: "/twitter-card-generator/summary"
            }, {
                name: "Summary Large Image",
                link: "/twitter-card-generator/summary-large-image"
            }]
        }]
    },
    robotsTxt: {
        name: "Robots.txt",
        link: "/robots-txt-generator"
    }
});
function cs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Pd = {}
  , Rd = {}
  , us = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        if (n = `${n}`,
        n === "0")
            return "0";
        if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(n))
            return n.replace(/^[+-]?/, o => o === "-" ? "" : "-");
        let r = ["var", "calc", "min", "max", "clamp"];
        for (const o of r)
            if (n.includes(`${o}(`))
                return `calc(${n} * -1)`
    }
}
)(us);
var Md = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    const t = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "lineClamp", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "captionSide", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "listStyleImage", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "hyphens", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"]
}
)(Md);
var Od = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n, r) {
        return n === void 0 ? r : Array.isArray(n) ? n : [...new Set(r.filter(a => n !== !1 && n[a] !== !1).concat(Object.keys(n).filter(a => n[a] !== !1)))]
    }
}
)(Od);
var ds = {}
  , Wo = {}
  , fs = {
    exports: {}
}
  , Te = String
  , Ld = function() {
    return {
        isColorSupported: !1,
        reset: Te,
        bold: Te,
        dim: Te,
        italic: Te,
        underline: Te,
        inverse: Te,
        hidden: Te,
        strikethrough: Te,
        black: Te,
        red: Te,
        green: Te,
        yellow: Te,
        blue: Te,
        magenta: Te,
        cyan: Te,
        white: Te,
        gray: Te,
        bgBlack: Te,
        bgRed: Te,
        bgGreen: Te,
        bgYellow: Te,
        bgBlue: Te,
        bgMagenta: Te,
        bgCyan: Te,
        bgWhite: Te
    }
};
fs.exports = Ld();
fs.exports.createColors = Ld;
var Id = fs.exports;
(function(e) {
    var t = {};
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function n(c, u) {
        for (var d in u)
            Object.defineProperty(c, d, {
                enumerable: !0,
                get: u[d]
            })
    }
    n(e, {
        dim: function() {
            return s
        },
        default: function() {
            return l
        }
    });
    const r = o(Id);
    function o(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    let a = new Set;
    function i(c, u, d) {
        typeof process < "u" && t.JEST_WORKER_ID || d && a.has(d) || (d && a.add(d),
        console.warn(""),
        u.forEach(f => console.warn(c, "-", f)))
    }
    function s(c) {
        return r.default.dim(c)
    }
    const l = {
        info(c, u) {
            i(r.default.bold(r.default.cyan("info")), ...Array.isArray(c) ? [c] : [u, c])
        },
        warn(c, u) {
            i(r.default.bold(r.default.yellow("warn")), ...Array.isArray(c) ? [c] : [u, c])
        },
        risk(c, u) {
            i(r.default.bold(r.default.magenta("risk")), ...Array.isArray(c) ? [c] : [u, c])
        }
    }
}
)(Wo);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = n(Wo);
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    function r({version: a, from: i, to: s}) {
        t.default.warn(`${i}-color-renamed`, [`As of Tailwind CSS ${a}, \`${i}\` has been renamed to \`${s}\`.`, "Update your configuration file to silence this warning."])
    }
    const o = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617"
        },
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
            950: "#030712"
        },
        zinc: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            950: "#09090b"
        },
        neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a"
        },
        stone: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
            950: "#0c0a09"
        },
        red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            950: "#450a0a"
        },
        orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407"
        },
        amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03"
        },
        yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308",
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
            950: "#422006"
        },
        lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
            950: "#1a2e05"
        },
        green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16"
        },
        emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            950: "#022c22"
        },
        teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e"
        },
        cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
            950: "#083344"
        },
        sky: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49"
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554"
        },
        indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
            950: "#1e1b4b"
        },
        violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065"
        },
        purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764"
        },
        fuchsia: {
            50: "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
            950: "#4a044e"
        },
        pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
            950: "#500724"
        },
        rose: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
            950: "#4c0519"
        },
        get lightBlue() {
            return r({
                version: "v2.2",
                from: "lightBlue",
                to: "sky"
            }),
            this.sky
        },
        get warmGray() {
            return r({
                version: "v3.0",
                from: "warmGray",
                to: "stone"
            }),
            this.stone
        },
        get trueGray() {
            return r({
                version: "v3.0",
                from: "trueGray",
                to: "neutral"
            }),
            this.neutral
        },
        get coolGray() {
            return r({
                version: "v3.0",
                from: "coolGray",
                to: "gray"
            }),
            this.gray
        },
        get blueGray() {
            return r({
                version: "v3.0",
                from: "blueGray",
                to: "slate"
            }),
            this.slate
        }
    }
}
)(ds);
var Dd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "defaults", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n, ...r) {
        for (let i of r) {
            for (let s in i) {
                var o;
                !(n == null || (o = n.hasOwnProperty) === null || o === void 0) && o.call(n, s) || (n[s] = i[s])
            }
            for (let s of Object.getOwnPropertySymbols(i)) {
                var a;
                !(n == null || (a = n.hasOwnProperty) === null || a === void 0) && a.call(n, s) || (n[s] = i[s])
            }
        }
        return n
    }
}
)(Dd);
var Bd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "toPath", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        if (Array.isArray(n))
            return n;
        let r = n.split("[").length - 1
          , o = n.split("]").length - 1;
        if (r !== o)
            throw new Error(`Path is invalid. Has unbalanced brackets: ${n}`);
        return n.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
    }
}
)(Bd);
var Nd = {}
  , qo = {};
(function(e) {
    var t = {};
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function n(f, p) {
        for (var m in p)
            Object.defineProperty(f, m, {
                enumerable: !0,
                get: p[m]
            })
    }
    n(e, {
        flagEnabled: function() {
            return l
        },
        issueFlagNotices: function() {
            return u
        },
        default: function() {
            return d
        }
    });
    const r = a(Id)
      , o = a(Wo);
    function a(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    let i = {
        optimizeUniversalDefaults: !1,
        generalizedModifiers: !0,
        get disableColorOpacityUtilitiesByDefault() {
            return !1
        },
        get relativeContentPathsByDefault() {
            return !1
        }
    }
      , s = {
        future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity", "disableColorOpacityUtilitiesByDefault", "relativeContentPathsByDefault"],
        experimental: ["optimizeUniversalDefaults", "generalizedModifiers"]
    };
    function l(f, p) {
        if (s.future.includes(p)) {
            var m, b, w;
            return f.future === "all" || ((w = (b = f == null || (m = f.future) === null || m === void 0 ? void 0 : m[p]) !== null && b !== void 0 ? b : i[p]) !== null && w !== void 0 ? w : !1)
        }
        if (s.experimental.includes(p)) {
            var E, _, h;
            return f.experimental === "all" || ((h = (_ = f == null || (E = f.experimental) === null || E === void 0 ? void 0 : E[p]) !== null && _ !== void 0 ? _ : i[p]) !== null && h !== void 0 ? h : !1)
        }
        return !1
    }
    function c(f) {
        if (f.experimental === "all")
            return s.experimental;
        var p;
        return Object.keys((p = f == null ? void 0 : f.experimental) !== null && p !== void 0 ? p : {}).filter(m => s.experimental.includes(m) && f.experimental[m])
    }
    function u(f) {
        if (t.JEST_WORKER_ID === void 0 && c(f).length > 0) {
            let p = c(f).map(m => r.default.yellow(m)).join(", ");
            o.default.warn("experimental-flags-enabled", [`You have enabled experimental features: ${p}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."])
        }
    }
    const d = s
}
)(qo);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "normalizeConfig", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    const t = qo
      , n = o(Wo);
    function r(i) {
        if (typeof WeakMap != "function")
            return null;
        var s = new WeakMap
          , l = new WeakMap;
        return (r = function(c) {
            return c ? l : s
        }
        )(i)
    }
    function o(i, s) {
        if (i && i.__esModule)
            return i;
        if (i === null || typeof i != "object" && typeof i != "function")
            return {
                default: i
            };
        var l = r(s);
        if (l && l.has(i))
            return l.get(i);
        var c = {}
          , u = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in i)
            if (d !== "default" && Object.prototype.hasOwnProperty.call(i, d)) {
                var f = u ? Object.getOwnPropertyDescriptor(i, d) : null;
                f && (f.get || f.set) ? Object.defineProperty(c, d, f) : c[d] = i[d]
            }
        return c.default = i,
        l && l.set(i, c),
        c
    }
    function a(i) {
        if (( () => {
            if (i.purge || !i.content || !Array.isArray(i.content) && !(typeof i.content == "object" && i.content !== null))
                return !1;
            if (Array.isArray(i.content))
                return i.content.every(c => typeof c == "string" ? !0 : !(typeof (c == null ? void 0 : c.raw) != "string" || c != null && c.extension && typeof (c == null ? void 0 : c.extension) != "string"));
            if (typeof i.content == "object" && i.content !== null) {
                if (Object.keys(i.content).some(c => !["files", "relative", "extract", "transform"].includes(c)))
                    return !1;
                if (Array.isArray(i.content.files)) {
                    if (!i.content.files.every(c => typeof c == "string" ? !0 : !(typeof (c == null ? void 0 : c.raw) != "string" || c != null && c.extension && typeof (c == null ? void 0 : c.extension) != "string")))
                        return !1;
                    if (typeof i.content.extract == "object") {
                        for (let c of Object.values(i.content.extract))
                            if (typeof c != "function")
                                return !1
                    } else if (!(i.content.extract === void 0 || typeof i.content.extract == "function"))
                        return !1;
                    if (typeof i.content.transform == "object") {
                        for (let c of Object.values(i.content.transform))
                            if (typeof c != "function")
                                return !1
                    } else if (!(i.content.transform === void 0 || typeof i.content.transform == "function"))
                        return !1;
                    if (typeof i.content.relative != "boolean" && typeof i.content.relative < "u")
                        return !1
                }
                return !0
            }
            return !1
        }
        )() || n.default.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]),
        i.safelist = ( () => {
            var c;
            let {content: u, purge: d, safelist: f} = i;
            return Array.isArray(f) ? f : Array.isArray(u == null ? void 0 : u.safelist) ? u.safelist : Array.isArray(d == null ? void 0 : d.safelist) ? d.safelist : Array.isArray(d == null || (c = d.options) === null || c === void 0 ? void 0 : c.safelist) ? d.options.safelist : []
        }
        )(),
        i.blocklist = ( () => {
            let {blocklist: c} = i;
            if (Array.isArray(c)) {
                if (c.every(u => typeof u == "string"))
                    return c;
                n.default.warn("blocklist-invalid", ["The `blocklist` option must be an array of strings.", "https://tailwindcss.com/docs/content-configuration#discarding-classes"])
            }
            return []
        }
        )(),
        typeof i.prefix == "function")
            n.default.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]),
            i.prefix = "";
        else {
            var l;
            i.prefix = (l = i.prefix) !== null && l !== void 0 ? l : ""
        }
        i.content = {
            relative: ( () => {
                let {content: c} = i;
                return c != null && c.relative ? c.relative : (0,
                t.flagEnabled)(i, "relativeContentPathsByDefault")
            }
            )(),
            files: ( () => {
                let {content: c, purge: u} = i;
                return Array.isArray(u) ? u : Array.isArray(u == null ? void 0 : u.content) ? u.content : Array.isArray(c) ? c : Array.isArray(c == null ? void 0 : c.content) ? c.content : Array.isArray(c == null ? void 0 : c.files) ? c.files : []
            }
            )(),
            extract: ( () => {
                let c = ( () => {
                    var f, p, m, b, w, E, _, h, g, A;
                    return !((f = i.purge) === null || f === void 0) && f.extract ? i.purge.extract : !((p = i.content) === null || p === void 0) && p.extract ? i.content.extract : !((m = i.purge) === null || m === void 0 || (b = m.extract) === null || b === void 0) && b.DEFAULT ? i.purge.extract.DEFAULT : !((w = i.content) === null || w === void 0 || (E = w.extract) === null || E === void 0) && E.DEFAULT ? i.content.extract.DEFAULT : !((_ = i.purge) === null || _ === void 0 || (h = _.options) === null || h === void 0) && h.extractors ? i.purge.options.extractors : !((g = i.content) === null || g === void 0 || (A = g.options) === null || A === void 0) && A.extractors ? i.content.options.extractors : {}
                }
                )()
                  , u = {}
                  , d = ( () => {
                    var f, p, m, b;
                    if (!((f = i.purge) === null || f === void 0 || (p = f.options) === null || p === void 0) && p.defaultExtractor)
                        return i.purge.options.defaultExtractor;
                    if (!((m = i.content) === null || m === void 0 || (b = m.options) === null || b === void 0) && b.defaultExtractor)
                        return i.content.options.defaultExtractor
                }
                )();
                if (d !== void 0 && (u.DEFAULT = d),
                typeof c == "function")
                    u.DEFAULT = c;
                else if (Array.isArray(c))
                    for (let {extensions: f, extractor: p} of c ?? [])
                        for (let m of f)
                            u[m] = p;
                else
                    typeof c == "object" && c !== null && Object.assign(u, c);
                return u
            }
            )(),
            transform: ( () => {
                let c = ( () => {
                    var d, f, p, m, b, w;
                    return !((d = i.purge) === null || d === void 0) && d.transform ? i.purge.transform : !((f = i.content) === null || f === void 0) && f.transform ? i.content.transform : !((p = i.purge) === null || p === void 0 || (m = p.transform) === null || m === void 0) && m.DEFAULT ? i.purge.transform.DEFAULT : !((b = i.content) === null || b === void 0 || (w = b.transform) === null || w === void 0) && w.DEFAULT ? i.content.transform.DEFAULT : {}
                }
                )()
                  , u = {};
                return typeof c == "function" && (u.DEFAULT = c),
                typeof c == "object" && c !== null && Object.assign(u, c),
                u
            }
            )()
        };
        for (let c of i.content.files)
            if (typeof c == "string" && /{([^,]*?)}/g.test(c)) {
                n.default.warn("invalid-glob-braces", [`The glob pattern ${(0,
                n.dim)(c)} in your Tailwind CSS configuration is invalid.`, `Update it to ${(0,
                n.dim)(c.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`]);
                break
            }
        return i
    }
}
)(Nd);
var Fd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        if (Object.prototype.toString.call(n) !== "[object Object]")
            return !1;
        const r = Object.getPrototypeOf(n);
        return r === null || Object.getPrototypeOf(r) === null
    }
}
)(Fd);
var ps = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "cloneDeep", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        return Array.isArray(n) ? n.map(r => t(r)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map( ([r,o]) => [r, t(o)])) : n
    }
}
)(ps);
var $d = {}
  , Ud = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        return n.replace(/\\,/g, "\\2c ")
    }
}
)(Ud);
var ms = {}
  , hs = {}
  , Hd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    const t = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}
)(Hd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(m, b) {
        for (var w in b)
            Object.defineProperty(m, w, {
                enumerable: !0,
                get: b[w]
            })
    }
    t(e, {
        parseColor: function() {
            return f
        },
        formatColor: function() {
            return p
        }
    });
    const n = r(Hd);
    function r(m) {
        return m && m.__esModule ? m : {
            default: m
        }
    }
    let o = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
      , a = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i
      , i = /(?:\d+|\d*\.\d+)%?/
      , s = /(?:\s*,\s*|\s+)/
      , l = /\s*[,/]\s*/
      , c = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/
      , u = new RegExp(`^(rgba?)\\(\\s*(${i.source}|${c.source})(?:${s.source}(${i.source}|${c.source}))?(?:${s.source}(${i.source}|${c.source}))?(?:${l.source}(${i.source}|${c.source}))?\\s*\\)$`)
      , d = new RegExp(`^(hsla?)\\(\\s*((?:${i.source})(?:deg|rad|grad|turn)?|${c.source})(?:${s.source}(${i.source}|${c.source}))?(?:${s.source}(${i.source}|${c.source}))?(?:${l.source}(${i.source}|${c.source}))?\\s*\\)$`);
    function f(m, {loose: b=!1}={}) {
        var w, E;
        if (typeof m != "string")
            return null;
        if (m = m.trim(),
        m === "transparent")
            return {
                mode: "rgb",
                color: ["0", "0", "0"],
                alpha: "0"
            };
        if (m in n.default)
            return {
                mode: "rgb",
                color: n.default[m].map(M => M.toString())
            };
        let _ = m.replace(a, (M, I, P, T, C) => ["#", I, I, P, P, T, T, C ? C + C : ""].join("")).match(o);
        if (_ !== null)
            return {
                mode: "rgb",
                color: [parseInt(_[1], 16), parseInt(_[2], 16), parseInt(_[3], 16)].map(M => M.toString()),
                alpha: _[4] ? (parseInt(_[4], 16) / 255).toString() : void 0
            };
        var h;
        let g = (h = m.match(u)) !== null && h !== void 0 ? h : m.match(d);
        if (g === null)
            return null;
        let A = [g[2], g[3], g[4]].filter(Boolean).map(M => M.toString());
        return A.length === 2 && A[0].startsWith("var(") ? {
            mode: g[1],
            color: [A[0]],
            alpha: A[1]
        } : !b && A.length !== 3 || A.length < 3 && !A.some(M => /^var\(.*?\)$/.test(M)) ? null : {
            mode: g[1],
            color: A,
            alpha: (w = g[5]) === null || w === void 0 || (E = w.toString) === null || E === void 0 ? void 0 : E.call(w)
        }
    }
    function p({mode: m, color: b, alpha: w}) {
        let E = w !== void 0;
        return m === "rgba" || m === "hsla" ? `${m}(${b.join(", ")}${E ? `, ${w}` : ""})` : `${m}(${b.join(" ")}${E ? ` / ${w}` : ""})`
    }
}
)(hs);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(a, i) {
        for (var s in i)
            Object.defineProperty(a, s, {
                enumerable: !0,
                get: i[s]
            })
    }
    t(e, {
        withAlphaValue: function() {
            return r
        },
        default: function() {
            return o
        }
    });
    const n = hs;
    function r(a, i, s) {
        if (typeof a == "function")
            return a({
                opacityValue: i
            });
        let l = (0,
        n.parseColor)(a, {
            loose: !0
        });
        return l === null ? s : (0,
        n.formatColor)({
            ...l,
            alpha: i
        })
    }
    function o({color: a, property: i, variable: s}) {
        let l = [].concat(i);
        if (typeof a == "function")
            return {
                [s]: "1",
                ...Object.fromEntries(l.map(u => [u, a({
                    opacityVariable: s,
                    opacityValue: `var(${s})`
                })]))
            };
        const c = (0,
        n.parseColor)(a);
        return c === null ? Object.fromEntries(l.map(u => [u, a])) : c.alpha !== void 0 ? Object.fromEntries(l.map(u => [u, a])) : {
            [s]: "1",
            ...Object.fromEntries(l.map(u => [u, (0,
            n.formatColor)({
                ...c,
                alpha: `var(${s})`
            })]))
        }
    }
}
)(ms);
var gs = {}
  , jd = {}
  , Jo = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "splitAtTopLevelOnly", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n, r) {
        let o = []
          , a = []
          , i = 0
          , s = !1;
        for (let l = 0; l < n.length; l++) {
            let c = n[l];
            o.length === 0 && c === r[0] && !s && (r.length === 1 || n.slice(l, l + r.length) === r) && (a.push(n.slice(i, l)),
            i = l + r.length),
            s ? s = !1 : c === "\\" && (s = !0),
            c === "(" || c === "[" || c === "{" ? o.push(c) : (c === ")" && o[o.length - 1] === "(" || c === "]" && o[o.length - 1] === "[" || c === "}" && o[o.length - 1] === "{") && o.pop()
        }
        return a.push(n.slice(i)),
        a
    }
}
)(Jo);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(l, c) {
        for (var u in c)
            Object.defineProperty(l, u, {
                enumerable: !0,
                get: c[u]
            })
    }
    t(e, {
        parseBoxShadowValue: function() {
            return i
        },
        formatBoxShadowValue: function() {
            return s
        }
    });
    const n = Jo;
    let r = new Set(["inset", "inherit", "initial", "revert", "unset"])
      , o = /\ +(?![^(]*\))/g
      , a = /^-?(\d+|\.\d+)(.*?)$/g;
    function i(l) {
        return (0,
        n.splitAtTopLevelOnly)(l, ",").map(u => {
            let d = u.trim()
              , f = {
                raw: d
            }
              , p = d.split(o)
              , m = new Set;
            for (let b of p)
                a.lastIndex = 0,
                !m.has("KEYWORD") && r.has(b) ? (f.keyword = b,
                m.add("KEYWORD")) : a.test(b) ? m.has("X") ? m.has("Y") ? m.has("BLUR") ? m.has("SPREAD") || (f.spread = b,
                m.add("SPREAD")) : (f.blur = b,
                m.add("BLUR")) : (f.y = b,
                m.add("Y")) : (f.x = b,
                m.add("X")) : f.color ? (f.unknown || (f.unknown = []),
                f.unknown.push(b)) : f.color = b;
            return f.valid = f.x !== void 0 && f.y !== void 0,
            f
        }
        )
    }
    function s(l) {
        return l.map(c => c.valid ? [c.keyword, c.x, c.y, c.blur, c.spread, c.color].filter(Boolean).join(" ") : c.raw).join(", ")
    }
}
)(jd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(k, O) {
        for (var B in O)
            Object.defineProperty(k, B, {
                enumerable: !0,
                get: O[B]
            })
    }
    t(e, {
        normalize: function() {
            return l
        },
        url: function() {
            return u
        },
        number: function() {
            return d
        },
        percentage: function() {
            return f
        },
        length: function() {
            return b
        },
        lineWidth: function() {
            return E
        },
        shadow: function() {
            return _
        },
        color: function() {
            return h
        },
        image: function() {
            return g
        },
        gradient: function() {
            return M
        },
        position: function() {
            return P
        },
        familyName: function() {
            return T
        },
        genericName: function() {
            return F
        },
        absoluteSize: function() {
            return R
        },
        relativeSize: function() {
            return $
        }
    });
    const n = hs
      , r = jd
      , o = Jo;
    let a = ["min", "max", "clamp", "calc"];
    function i(k) {
        return a.some(O => new RegExp(`^${O}\\(.*\\)`).test(k))
    }
    const s = new Set(["scroll-timeline-name", "timeline-scope", "view-timeline-name", "font-palette", "scroll-timeline", "animation-timeline", "view-timeline"]);
    function l(k, O=null, B=!0) {
        let J = O && s.has(O.property);
        return k.startsWith("--") && !J ? `var(${k})` : k.includes("url(") ? k.split(/(url\(.*?\))/g).filter(Boolean).map(le => /^url\(.*?\)$/.test(le) ? le : l(le, O, !1)).join("") : (k = k.replace(/([^\\])_+/g, (le, De) => De + " ".repeat(le.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"),
        B && (k = k.trim()),
        k = c(k),
        k)
    }
    function c(k) {
        let O = ["theme"]
          , B = ["min-content", "max-content", "fit-content", "safe-area-inset-top", "safe-area-inset-right", "safe-area-inset-bottom", "safe-area-inset-left", "titlebar-area-x", "titlebar-area-y", "titlebar-area-width", "titlebar-area-height", "keyboard-inset-top", "keyboard-inset-right", "keyboard-inset-bottom", "keyboard-inset-left", "keyboard-inset-width", "keyboard-inset-height"];
        return k.replace(/(calc|min|max|clamp)\(.+\)/g, J => {
            let le = "";
            function De() {
                let de = le.trimEnd();
                return de[de.length - 1]
            }
            for (let de = 0; de < J.length; de++) {
                let Je = function(Ae) {
                    return Ae.split("").every( (N, Y) => J[de + Y] === N)
                }
                  , ut = function(Ae) {
                    let N = 1 / 0;
                    for (let z of Ae) {
                        let te = J.indexOf(z, de);
                        te !== -1 && te < N && (N = te)
                    }
                    let Y = J.slice(de, N);
                    return de += Y.length - 1,
                    Y
                }
                  , Nt = J[de];
                if (Je("var"))
                    le += ut([")", ","]);
                else if (B.some(Ae => Je(Ae))) {
                    let Ae = B.find(N => Je(N));
                    le += Ae,
                    de += Ae.length - 1
                } else
                    O.some(Ae => Je(Ae)) ? le += ut([")"]) : ["+", "-", "*", "/"].includes(Nt) && !["(", "+", "-", "*", "/"].includes(De()) ? le += ` ${Nt} ` : le += Nt
            }
            return le.replace(/\s+/g, " ")
        }
        )
    }
    function u(k) {
        return k.startsWith("url(")
    }
    function d(k) {
        return !isNaN(Number(k)) || i(k)
    }
    function f(k) {
        return k.endsWith("%") && d(k.slice(0, -1)) || i(k)
    }
    let m = `(?:${["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"].join("|")})`;
    function b(k) {
        return k === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${m}$`).test(k) || i(k)
    }
    let w = new Set(["thin", "medium", "thick"]);
    function E(k) {
        return w.has(k)
    }
    function _(k) {
        let O = (0,
        r.parseBoxShadowValue)(l(k));
        for (let B of O)
            if (!B.valid)
                return !1;
        return !0
    }
    function h(k) {
        let O = 0;
        return (0,
        o.splitAtTopLevelOnly)(k, "_").every(J => (J = l(J),
        J.startsWith("var(") ? !0 : (0,
        n.parseColor)(J, {
            loose: !0
        }) !== null ? (O++,
        !0) : !1)) ? O > 0 : !1
    }
    function g(k) {
        let O = 0;
        return (0,
        o.splitAtTopLevelOnly)(k, ",").every(J => (J = l(J),
        J.startsWith("var(") ? !0 : u(J) || M(J) || ["element(", "image(", "cross-fade(", "image-set("].some(le => J.startsWith(le)) ? (O++,
        !0) : !1)) ? O > 0 : !1
    }
    let A = new Set(["conic-gradient", "linear-gradient", "radial-gradient", "repeating-conic-gradient", "repeating-linear-gradient", "repeating-radial-gradient"]);
    function M(k) {
        k = l(k);
        for (let O of A)
            if (k.startsWith(`${O}(`))
                return !0;
        return !1
    }
    let I = new Set(["center", "top", "right", "bottom", "left"]);
    function P(k) {
        let O = 0;
        return (0,
        o.splitAtTopLevelOnly)(k, "_").every(J => (J = l(J),
        J.startsWith("var(") ? !0 : I.has(J) || b(J) || f(J) ? (O++,
        !0) : !1)) ? O > 0 : !1
    }
    function T(k) {
        let O = 0;
        return (0,
        o.splitAtTopLevelOnly)(k, ",").every(J => (J = l(J),
        J.startsWith("var(") ? !0 : J.includes(" ") && !/(['"])([^"']+)\1/g.test(J) || /^\d/g.test(J) ? !1 : (O++,
        !0))) ? O > 0 : !1
    }
    let C = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);
    function F(k) {
        return C.has(k)
    }
    let S = new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "x-large", "xxx-large"]);
    function R(k) {
        return S.has(k)
    }
    let V = new Set(["larger", "smaller"]);
    function $(k) {
        return V.has(k)
    }
}
)(gs);
var Vd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "backgroundSize", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    const t = gs
      , n = Jo;
    function r(o) {
        let a = ["cover", "contain"];
        return (0,
        n.splitAtTopLevelOnly)(o, ",").every(i => {
            let s = (0,
            n.splitAtTopLevelOnly)(i, "_").filter(Boolean);
            return s.length === 1 && a.includes(s[0]) ? !0 : s.length !== 1 && s.length !== 2 ? !1 : s.every(l => (0,
            t.length)(l) || (0,
            t.percentage)(l) || l === "auto")
        }
        )
    }
}
)(Vd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    function t(T, C) {
        for (var F in C)
            Object.defineProperty(T, F, {
                enumerable: !0,
                get: C[F]
            })
    }
    t(e, {
        updateAllClasses: function() {
            return c
        },
        asValue: function() {
            return f
        },
        parseColorFormat: function() {
            return b
        },
        asColor: function() {
            return E
        },
        asLookupValue: function() {
            return _
        },
        typeMap: function() {
            return g
        },
        coerceValue: function() {
            return I
        },
        getMatchingTypes: function() {
            return P
        }
    });
    const n = l(Ud)
      , r = ms
      , o = gs
      , a = l(us)
      , i = Vd
      , s = qo;
    function l(T) {
        return T && T.__esModule ? T : {
            default: T
        }
    }
    function c(T, C) {
        T.walkClasses(F => {
            F.value = C(F.value),
            F.raws && F.raws.value && (F.raws.value = (0,
            n.default)(F.raws.value))
        }
        )
    }
    function u(T, C) {
        if (!p(T))
            return;
        let F = T.slice(1, -1);
        if (C(F))
            return (0,
            o.normalize)(F)
    }
    function d(T, C={}, F) {
        let S = C[T];
        if (S !== void 0)
            return (0,
            a.default)(S);
        if (p(T)) {
            let R = u(T, F);
            return R === void 0 ? void 0 : (0,
            a.default)(R)
        }
    }
    function f(T, C={}, {validate: F= () => !0}={}) {
        var S;
        let R = (S = C.values) === null || S === void 0 ? void 0 : S[T];
        return R !== void 0 ? R : C.supportsNegativeValues && T.startsWith("-") ? d(T.slice(1), C.values, F) : u(T, F)
    }
    function p(T) {
        return T.startsWith("[") && T.endsWith("]")
    }
    function m(T) {
        let C = T.lastIndexOf("/");
        return C === -1 || C === T.length - 1 ? [T, void 0] : p(T) && !T.includes("]/[") ? [T, void 0] : [T.slice(0, C), T.slice(C + 1)]
    }
    function b(T) {
        if (typeof T == "string" && T.includes("<alpha-value>")) {
            let C = T;
            return ({opacityValue: F=1}) => C.replace("<alpha-value>", F)
        }
        return T
    }
    function w(T) {
        return (0,
        o.normalize)(T.slice(1, -1))
    }
    function E(T, C={}, {tailwindConfig: F={}}={}) {
        var S;
        if (((S = C.values) === null || S === void 0 ? void 0 : S[T]) !== void 0) {
            var R;
            return b((R = C.values) === null || R === void 0 ? void 0 : R[T])
        }
        let[V,$] = m(T);
        if ($ !== void 0) {
            var k, O, B, J;
            let le = (J = (k = C.values) === null || k === void 0 ? void 0 : k[V]) !== null && J !== void 0 ? J : p(V) ? V.slice(1, -1) : void 0;
            return le === void 0 ? void 0 : (le = b(le),
            p($) ? (0,
            r.withAlphaValue)(le, w($)) : ((O = F.theme) === null || O === void 0 || (B = O.opacity) === null || B === void 0 ? void 0 : B[$]) === void 0 ? void 0 : (0,
            r.withAlphaValue)(le, F.theme.opacity[$]))
        }
        return f(T, C, {
            validate: o.color
        })
    }
    function _(T, C={}) {
        var F;
        return (F = C.values) === null || F === void 0 ? void 0 : F[T]
    }
    function h(T) {
        return (C, F) => f(C, F, {
            validate: T
        })
    }
    let g = {
        any: f,
        color: E,
        url: h(o.url),
        image: h(o.image),
        length: h(o.length),
        percentage: h(o.percentage),
        position: h(o.position),
        lookup: _,
        "generic-name": h(o.genericName),
        "family-name": h(o.familyName),
        number: h(o.number),
        "line-width": h(o.lineWidth),
        "absolute-size": h(o.absoluteSize),
        "relative-size": h(o.relativeSize),
        shadow: h(o.shadow),
        size: h(i.backgroundSize)
    }
      , A = Object.keys(g);
    function M(T, C) {
        let F = T.indexOf(C);
        return F === -1 ? [void 0, T] : [T.slice(0, F), T.slice(F + 1)]
    }
    function I(T, C, F, S) {
        if (F.values && C in F.values)
            for (let {type: V} of T ?? []) {
                let $ = g[V](C, F, {
                    tailwindConfig: S
                });
                if ($ !== void 0)
                    return [$, V, null]
            }
        if (p(C)) {
            let V = C.slice(1, -1)
              , [$,k] = M(V, ":");
            if (!/^[\w-_]+$/g.test($))
                k = V;
            else if ($ !== void 0 && !A.includes($))
                return [];
            if (k.length > 0 && A.includes($))
                return [f(`[${k}]`, F), $, null]
        }
        let R = P(T, C, F, S);
        for (let V of R)
            return V;
        return []
    }
    function *P(T, C, F, S) {
        let R = (0,
        s.flagEnabled)(S, "generalizedModifiers")
          , [V,$] = m(C);
        if (R && F.modifiers != null && (F.modifiers === "any" || typeof F.modifiers == "object" && ($ && p($) || $ in F.modifiers)) || (V = C,
        $ = void 0),
        $ !== void 0 && V === "" && (V = "DEFAULT"),
        $ !== void 0 && typeof F.modifiers == "object") {
            var O, B;
            let J = (B = (O = F.modifiers) === null || O === void 0 ? void 0 : O[$]) !== null && B !== void 0 ? B : null;
            J !== null ? $ = J : p($) && ($ = w($))
        }
        for (let {type: J} of T ?? []) {
            let le = g[J](V, F, {
                tailwindConfig: S
            });
            le !== void 0 && (yield[le, J, $ ?? null])
        }
    }
}
)($d);
var Gd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t
        }
    });
    function t(n) {
        return typeof n == "function" ? n({}) : n
    }
}
)(Gd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return F
        }
    });
    const t = p(us)
      , n = p(Md)
      , r = p(Od)
      , o = p(ds)
      , a = Dd
      , i = Bd
      , s = Nd
      , l = p(Fd)
      , c = ps
      , u = $d
      , d = ms
      , f = p(Gd);
    function p(S) {
        return S && S.__esModule ? S : {
            default: S
        }
    }
    function m(S) {
        return typeof S == "function"
    }
    function b(S, ...R) {
        let V = R.pop();
        for (let $ of R)
            for (let k in $) {
                let O = V(S[k], $[k]);
                O === void 0 ? (0,
                l.default)(S[k]) && (0,
                l.default)($[k]) ? S[k] = b({}, S[k], $[k], V) : S[k] = $[k] : S[k] = O
            }
        return S
    }
    const w = {
        colors: o.default,
        negative(S) {
            return Object.keys(S).filter(R => S[R] !== "0").reduce( (R, V) => {
                let $ = (0,
                t.default)(S[V]);
                return $ !== void 0 && (R[`-${V}`] = $),
                R
            }
            , {})
        },
        breakpoints(S) {
            return Object.keys(S).filter(R => typeof S[R] == "string").reduce( (R, V) => ({
                ...R,
                [`screen-${V}`]: S[V]
            }), {})
        }
    };
    function E(S, ...R) {
        return m(S) ? S(...R) : S
    }
    function _(S) {
        return S.reduce( (R, {extend: V}) => b(R, V, ($, k) => $ === void 0 ? [k] : Array.isArray($) ? [k, ...$] : [k, $]), {})
    }
    function h(S) {
        return {
            ...S.reduce( (R, V) => (0,
            a.defaults)(R, V), {}),
            extend: _(S)
        }
    }
    function g(S, R) {
        if (Array.isArray(S) && (0,
        l.default)(S[0]))
            return S.concat(R);
        if (Array.isArray(R) && (0,
        l.default)(R[0]) && (0,
        l.default)(S))
            return [S, ...R];
        if (Array.isArray(R))
            return R
    }
    function A({extend: S, ...R}) {
        return b(R, S, (V, $) => !m(V) && !$.some(m) ? b({}, V, ...$, g) : (k, O) => b({}, ...[V, ...$].map(B => E(B, k, O)), g))
    }
    function *M(S) {
        let R = (0,
        i.toPath)(S);
        if (R.length === 0 || (yield R,
        Array.isArray(S)))
            return;
        let V = /^(.*?)\s*\/\s*([^/]+)$/
          , $ = S.match(V);
        if ($ !== null) {
            let[,k,O] = $
              , B = (0,
            i.toPath)(k);
            B.alpha = O,
            yield B
        }
    }
    function I(S) {
        const R = (V, $) => {
            for (const k of M(V)) {
                let O = 0
                  , B = S;
                for (; B != null && O < k.length; )
                    B = B[k[O++]],
                    B = m(B) && (k.alpha === void 0 || O <= k.length - 1) ? B(R, w) : B;
                if (B !== void 0) {
                    if (k.alpha !== void 0) {
                        let J = (0,
                        u.parseColorFormat)(B);
                        return (0,
                        d.withAlphaValue)(J, k.alpha, (0,
                        f.default)(J))
                    }
                    return (0,
                    l.default)(B) ? (0,
                    c.cloneDeep)(B) : B
                }
            }
            return $
        }
        ;
        return Object.assign(R, {
            theme: R,
            ...w
        }),
        Object.keys(S).reduce( (V, $) => (V[$] = m(S[$]) ? S[$](R, w) : S[$],
        V), {})
    }
    function P(S) {
        let R = [];
        return S.forEach(V => {
            R = [...R, V];
            var $;
            const k = ($ = V == null ? void 0 : V.plugins) !== null && $ !== void 0 ? $ : [];
            k.length !== 0 && k.forEach(O => {
                O.__isOptionsFunction && (O = O());
                var B;
                R = [...R, ...P([(B = O == null ? void 0 : O.config) !== null && B !== void 0 ? B : {}])]
            }
            )
        }
        ),
        R
    }
    function T(S) {
        return [...S].reduceRight( (V, $) => m($) ? $({
            corePlugins: V
        }) : (0,
        r.default)($, V), n.default)
    }
    function C(S) {
        return [...S].reduceRight( (V, $) => [...V, ...$], [])
    }
    function F(S) {
        let R = [...P(S), {
            prefix: "",
            important: !1,
            separator: ":"
        }];
        var V, $;
        return (0,
        s.normalizeConfig)((0,
        a.defaults)({
            theme: I(A(h(R.map(k => (V = k == null ? void 0 : k.theme) !== null && V !== void 0 ? V : {})))),
            corePlugins: T(R.map(k => k.corePlugins)),
            plugins: C(S.map(k => ($ = k == null ? void 0 : k.plugins) !== null && $ !== void 0 ? $ : []))
        }, ...R))
    }
}
)(Rd);
var Kd = {}
  , zd = {
    content: [],
    presets: [],
    darkMode: "media",
    theme: {
        accentColor: ({theme: e}) => ({
            ...e("colors"),
            auto: "auto"
        }),
        animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite"
        },
        aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"'
        },
        aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9"
        },
        backdropBlur: ({theme: e}) => e("blur"),
        backdropBrightness: ({theme: e}) => e("brightness"),
        backdropContrast: ({theme: e}) => e("contrast"),
        backdropGrayscale: ({theme: e}) => e("grayscale"),
        backdropHueRotate: ({theme: e}) => e("hueRotate"),
        backdropInvert: ({theme: e}) => e("invert"),
        backdropOpacity: ({theme: e}) => e("opacity"),
        backdropSaturate: ({theme: e}) => e("saturate"),
        backdropSepia: ({theme: e}) => e("sepia"),
        backgroundColor: ({theme: e}) => e("colors"),
        backgroundImage: {
            none: "none",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
        },
        backgroundOpacity: ({theme: e}) => e("opacity"),
        backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain"
        },
        blur: {
            0: "0",
            none: "0",
            sm: "4px",
            DEFAULT: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px"
        },
        borderColor: ({theme: e}) => ({
            ...e("colors"),
            DEFAULT: e("colors.gray.200", "currentColor")
        }),
        borderOpacity: ({theme: e}) => e("opacity"),
        borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
        },
        borderSpacing: ({theme: e}) => ({
            ...e("spacing")
        }),
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        boxShadow: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            none: "none"
        },
        boxShadowColor: ({theme: e}) => e("colors"),
        brightness: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
            200: "2"
        },
        caretColor: ({theme: e}) => e("colors"),
        colors: ({colors: e}) => ({
            inherit: e.inherit,
            current: e.current,
            transparent: e.transparent,
            black: e.black,
            white: e.white,
            slate: e.slate,
            gray: e.gray,
            zinc: e.zinc,
            neutral: e.neutral,
            stone: e.stone,
            red: e.red,
            orange: e.orange,
            amber: e.amber,
            yellow: e.yellow,
            lime: e.lime,
            green: e.green,
            emerald: e.emerald,
            teal: e.teal,
            cyan: e.cyan,
            sky: e.sky,
            blue: e.blue,
            indigo: e.indigo,
            violet: e.violet,
            purple: e.purple,
            fuchsia: e.fuchsia,
            pink: e.pink,
            rose: e.rose
        }),
        columns: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            "3xs": "16rem",
            "2xs": "18rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
        },
        container: {},
        content: {
            none: "none"
        },
        contrast: {
            0: "0",
            50: ".5",
            75: ".75",
            100: "1",
            125: "1.25",
            150: "1.5",
            200: "2"
        },
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            help: "help",
            "not-allowed": "not-allowed",
            none: "none",
            "context-menu": "context-menu",
            progress: "progress",
            cell: "cell",
            crosshair: "crosshair",
            "vertical-text": "vertical-text",
            alias: "alias",
            copy: "copy",
            "no-drop": "no-drop",
            grab: "grab",
            grabbing: "grabbing",
            "all-scroll": "all-scroll",
            "col-resize": "col-resize",
            "row-resize": "row-resize",
            "n-resize": "n-resize",
            "e-resize": "e-resize",
            "s-resize": "s-resize",
            "w-resize": "w-resize",
            "ne-resize": "ne-resize",
            "nw-resize": "nw-resize",
            "se-resize": "se-resize",
            "sw-resize": "sw-resize",
            "ew-resize": "ew-resize",
            "ns-resize": "ns-resize",
            "nesw-resize": "nesw-resize",
            "nwse-resize": "nwse-resize",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out"
        },
        divideColor: ({theme: e}) => e("borderColor"),
        divideOpacity: ({theme: e}) => e("borderOpacity"),
        divideWidth: ({theme: e}) => e("borderWidth"),
        dropShadow: {
            sm: "0 1px 1px rgb(0 0 0 / 0.05)",
            DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
            md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
            lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
            xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
            "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
            none: "0 0 #0000"
        },
        fill: ({theme: e}) => ({
            none: "none",
            ...e("colors")
        }),
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none"
        },
        flexBasis: ({theme: e}) => ({
            auto: "auto",
            ...e("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%"
        }),
        flexGrow: {
            0: "0",
            DEFAULT: "1"
        },
        flexShrink: {
            0: "0",
            DEFAULT: "1"
        },
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
            serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
            mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"]
        },
        fontSize: {
            xs: ["0.75rem", {
                lineHeight: "1rem"
            }],
            sm: ["0.875rem", {
                lineHeight: "1.25rem"
            }],
            base: ["1rem", {
                lineHeight: "1.5rem"
            }],
            lg: ["1.125rem", {
                lineHeight: "1.75rem"
            }],
            xl: ["1.25rem", {
                lineHeight: "1.75rem"
            }],
            "2xl": ["1.5rem", {
                lineHeight: "2rem"
            }],
            "3xl": ["1.875rem", {
                lineHeight: "2.25rem"
            }],
            "4xl": ["2.25rem", {
                lineHeight: "2.5rem"
            }],
            "5xl": ["3rem", {
                lineHeight: "1"
            }],
            "6xl": ["3.75rem", {
                lineHeight: "1"
            }],
            "7xl": ["4.5rem", {
                lineHeight: "1"
            }],
            "8xl": ["6rem", {
                lineHeight: "1"
            }],
            "9xl": ["8rem", {
                lineHeight: "1"
            }]
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900"
        },
        gap: ({theme: e}) => e("spacing"),
        gradientColorStops: ({theme: e}) => e("colors"),
        gradientColorStopPositions: {
            "0%": "0%",
            "5%": "5%",
            "10%": "10%",
            "15%": "15%",
            "20%": "20%",
            "25%": "25%",
            "30%": "30%",
            "35%": "35%",
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
            "100%": "100%"
        },
        grayscale: {
            0: "0",
            DEFAULT: "100%"
        },
        gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
        },
        gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
        },
        gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
        },
        gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-full": "1 / -1"
        },
        gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7"
        },
        gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7"
        },
        gridTemplateColumns: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
        },
        gridTemplateRows: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))"
        },
        height: ({theme: e}) => ({
            auto: "auto",
            ...e("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }),
        hueRotate: {
            0: "0deg",
            15: "15deg",
            30: "30deg",
            60: "60deg",
            90: "90deg",
            180: "180deg"
        },
        inset: ({theme: e}) => ({
            auto: "auto",
            ...e("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
        }),
        invert: {
            0: "0",
            DEFAULT: "100%"
        },
        keyframes: {
            spin: {
                to: {
                    transform: "rotate(360deg)"
                }
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0"
                }
            },
            pulse: {
                "50%": {
                    opacity: ".5"
                }
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                }
            }
        },
        letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal"
        },
        listStyleImage: {
            none: "none"
        },
        margin: ({theme: e}) => ({
            auto: "auto",
            ...e("spacing")
        }),
        lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6"
        },
        maxHeight: ({theme: e}) => ({
            ...e("spacing"),
            none: "none",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }),
        maxWidth: ({theme: e, breakpoints: t}) => ({
            none: "none",
            0: "0rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...t(e("screens"))
        }),
        minHeight: {
            0: "0px",
            full: "100%",
            screen: "100vh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        },
        minWidth: {
            0: "0px",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        },
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
        },
        opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            50: "0.5",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            90: "0.9",
            95: "0.95",
            100: "1"
        },
        order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12"
        },
        outlineColor: ({theme: e}) => e("colors"),
        outlineOffset: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        outlineWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        padding: ({theme: e}) => e("spacing"),
        placeholderColor: ({theme: e}) => e("colors"),
        placeholderOpacity: ({theme: e}) => e("opacity"),
        ringColor: ({theme: e}) => ({
            DEFAULT: e("colors.blue.500", "#3b82f6"),
            ...e("colors")
        }),
        ringOffsetColor: ({theme: e}) => e("colors"),
        ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        ringOpacity: ({theme: e}) => ({
            DEFAULT: "0.5",
            ...e("opacity")
        }),
        ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        rotate: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg"
        },
        saturate: {
            0: "0",
            50: ".5",
            100: "1",
            150: "1.5",
            200: "2"
        },
        scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5"
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        scrollMargin: ({theme: e}) => ({
            ...e("spacing")
        }),
        scrollPadding: ({theme: e}) => e("spacing"),
        sepia: {
            0: "0",
            DEFAULT: "100%"
        },
        skew: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg"
        },
        space: ({theme: e}) => ({
            ...e("spacing")
        }),
        spacing: {
            px: "1px",
            0: "0px",
            .5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
        },
        stroke: ({theme: e}) => ({
            none: "none",
            ...e("colors")
        }),
        strokeWidth: {
            0: "0",
            1: "1",
            2: "2"
        },
        supports: {},
        data: {},
        textColor: ({theme: e}) => e("colors"),
        textDecorationColor: ({theme: e}) => e("colors"),
        textDecorationThickness: {
            auto: "auto",
            "from-font": "from-font",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        textIndent: ({theme: e}) => ({
            ...e("spacing")
        }),
        textOpacity: ({theme: e}) => e("opacity"),
        textUnderlineOffset: {
            auto: "auto",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left"
        },
        transitionDelay: {
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
        },
        transitionDuration: {
            DEFAULT: "150ms",
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
        },
        transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform"
        },
        transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        translate: ({theme: e}) => ({
            ...e("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%"
        }),
        width: ({theme: e}) => ({
            auto: "auto",
            ...e("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content"
        }),
        willChange: {
            auto: "auto",
            scroll: "scroll-position",
            contents: "contents",
            transform: "transform"
        },
        zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50"
        }
    },
    plugins: []
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = r(zd)
      , n = qo;
    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    function o(a) {
        var i;
        const s = ((i = a == null ? void 0 : a.presets) !== null && i !== void 0 ? i : [t.default]).slice().reverse().flatMap(u => o(u instanceof Function ? u() : u))
          , l = {
            respectDefaultRingColorOpacity: {
                theme: {
                    ringColor: ({theme: u}) => ({
                        DEFAULT: "#3b82f67f",
                        ...u("colors")
                    })
                }
            },
            disableColorOpacityUtilitiesByDefault: {
                corePlugins: {
                    backgroundOpacity: !1,
                    borderOpacity: !1,
                    divideOpacity: !1,
                    placeholderOpacity: !1,
                    ringOpacity: !1,
                    textOpacity: !1
                }
            }
        }
          , c = Object.keys(l).filter(u => (0,
        n.flagEnabled)(a, u)).map(u => l[u]);
        return [a, ...c, ...s]
    }
}
)(Kd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = r(Rd)
      , n = r(Kd);
    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    function o(...a) {
        let[,...i] = (0,
        n.default)(a[0]);
        return (0,
        t.default)([...a, ...i])
    }
}
)(Pd);
let ya = Pd;
var xv = (ya.__esModule ? ya : {
    default: ya
}).default;
const Cv = cs(xv);
var Wd = {}
  , qd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    function t(r, o) {
        return {
            handler: r,
            config: o
        }
    }
    t.withOptions = function(r, o= () => ({})) {
        const a = function(i) {
            return {
                __options: i,
                handler: r(i),
                config: o(i)
            }
        };
        return a.__isOptionsFunction = !0,
        a.__pluginFunction = r,
        a.__configFunction = o,
        a
    }
    ;
    const n = t
}
)(qd);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    const t = n(qd);
    function n(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    const r = t.default
}
)(Wd);
let ba = Wd;
var Jd = (ba.__esModule ? ba : {
    default: ba
}).default
  , Pv = Rv(Jd);
function Rv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Mv = (0,
Pv.default)(function(t) {
    var n = t.matchUtilities, r = t.matchVariant, o = t.theme, a = function(c) {
        var u, d, f = (d = (u = c.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)) === null || u === void 0 ? void 0 : u[1]) !== null && d !== void 0 ? d : null;
        return f === null ? null : parseFloat(c)
    }, i, s = (i = o("containers")) !== null && i !== void 0 ? i : {};
    n({
        "@container": function(l, c) {
            var u = c.modifier;
            return {
                "container-type": l,
                "container-name": u
            }
        }
    }, {
        values: {
            DEFAULT: "inline-size",
            normal: "normal"
        },
        modifiers: "any"
    }),
    r("@", function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
          , c = (arguments.length > 1 ? arguments[1] : void 0).modifier
          , u = a(l);
        return u !== null ? "@container ".concat(c ?? "", " (min-width: ").concat(l, ")") : []
    }, {
        values: s,
        sort: function(c, u) {
            var d = parseFloat(c.value)
              , f = parseFloat(u.value);
            if (d === null || f === null)
                return 0;
            if (d - f !== 0)
                return d - f;
            var p, m = (p = c.modifier) !== null && p !== void 0 ? p : "", b, w = (b = u.modifier) !== null && b !== void 0 ? b : "";
            return m === "" && w !== "" ? 1 : m !== "" && w === "" ? -1 : m.localeCompare(w, "en", {
                numeric: !0
            })
        }
    })
}, {
    theme: {
        containers: {
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
        }
    }
});
const Ov = cs(Mv);
var Lv = {
    aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
    azure: /#f0ffff(ff)?(?!\w)/gi,
    beige: /#f5f5dc(ff)?(?!\w)/gi,
    bisque: /#ffe4c4(ff)?(?!\w)/gi,
    black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
    blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
    brown: /#a52a2a(ff)?(?!\w)/gi,
    coral: /#ff7f50(ff)?(?!\w)/gi,
    cornsilk: /#fff8dc(ff)?(?!\w)/gi,
    crimson: /#dc143c(ff)?(?!\w)/gi,
    cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
    darkblue: /#00008b(ff)?(?!\w)/gi,
    darkcyan: /#008b8b(ff)?(?!\w)/gi,
    darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
    darkred: /#8b0000(ff)?(?!\w)/gi,
    deeppink: /#ff1493(ff)?(?!\w)/gi,
    dimgrey: /#696969(ff)?(?!\w)/gi,
    gold: /#ffd700(ff)?(?!\w)/gi,
    green: /#008000(ff)?(?!\w)/gi,
    grey: /#808080(ff)?(?!\w)/gi,
    honeydew: /#f0fff0(ff)?(?!\w)/gi,
    hotpink: /#ff69b4(ff)?(?!\w)/gi,
    indigo: /#4b0082(ff)?(?!\w)/gi,
    ivory: /#fffff0(ff)?(?!\w)/gi,
    khaki: /#f0e68c(ff)?(?!\w)/gi,
    lavender: /#e6e6fa(ff)?(?!\w)/gi,
    lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
    linen: /#faf0e6(ff)?(?!\w)/gi,
    maroon: /#800000(ff)?(?!\w)/gi,
    moccasin: /#ffe4b5(ff)?(?!\w)/gi,
    navy: /#000080(ff)?(?!\w)/gi,
    oldlace: /#fdf5e6(ff)?(?!\w)/gi,
    olive: /#808000(ff)?(?!\w)/gi,
    orange: /#ffa500(ff)?(?!\w)/gi,
    orchid: /#da70d6(ff)?(?!\w)/gi,
    peru: /#cd853f(ff)?(?!\w)/gi,
    pink: /#ffc0cb(ff)?(?!\w)/gi,
    plum: /#dda0dd(ff)?(?!\w)/gi,
    purple: /#800080(ff)?(?!\w)/gi,
    red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
    salmon: /#fa8072(ff)?(?!\w)/gi,
    seagreen: /#2e8b57(ff)?(?!\w)/gi,
    seashell: /#fff5ee(ff)?(?!\w)/gi,
    sienna: /#a0522d(ff)?(?!\w)/gi,
    silver: /#c0c0c0(ff)?(?!\w)/gi,
    skyblue: /#87ceeb(ff)?(?!\w)/gi,
    snow: /#fffafa(ff)?(?!\w)/gi,
    tan: /#d2b48c(ff)?(?!\w)/gi,
    teal: /#008080(ff)?(?!\w)/gi,
    thistle: /#d8bfd8(ff)?(?!\w)/gi,
    tomato: /#ff6347(ff)?(?!\w)/gi,
    violet: /#ee82ee(ff)?(?!\w)/gi,
    wheat: /#f5deb3(ff)?(?!\w)/gi,
    white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
}
  , va = Lv
  , ys = {
    whitespace: /\s+/g,
    urlHexPairs: /%[\dA-F]{2}/g,
    quotes: /"/g
};
function Iv(e) {
    return e.trim().replace(ys.whitespace, " ")
}
function Dv(e) {
    return encodeURIComponent(e).replace(ys.urlHexPairs, Nv)
}
function Bv(e) {
    return Object.keys(va).forEach(function(t) {
        va[t].test(e) && (e = e.replace(va[t], t))
    }),
    e
}
function Nv(e) {
    switch (e) {
    case "%20":
        return " ";
    case "%3D":
        return "=";
    case "%3A":
        return ":";
    case "%2F":
        return "/";
    default:
        return e.toLowerCase()
    }
}
function ci(e) {
    if (typeof e != "string")
        throw new TypeError("Expected a string, but received " + typeof e);
    e.charCodeAt(0) === 65279 && (e = e.slice(1));
    var t = Bv(Iv(e)).replace(ys.quotes, "'");
    return "data:image/svg+xml," + Dv(t)
}
ci.toSrcset = function(t) {
    return ci(t).replace(/ /g, "%20")
}
;
var Fv = ci
  , Yd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = ps
      , n = r(zd);
    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    const o = (0,
    t.cloneDeep)(n.default.theme)
}
)(Yd);
let _a = Yd;
var $v = (_a.__esModule ? _a : {
    default: _a
}).default;
let Aa = ds;
var Uv = (Aa.__esModule ? Aa : {
    default: Aa
}).default;
const ro = Fv
  , Hv = Jd
  , Zd = $v
  , jt = Uv
  , [jv,{lineHeight: Vv}] = Zd.fontSize.base
  , {spacing: Ot, borderWidth: dc, borderRadius: fc} = Zd;
function Vt(e, t) {
    return e.replace("<alpha-value>", `var(${t}, 1)`)
}
const Gv = Hv.withOptions(function(e={
    strategy: void 0
}) {
    return function({addBase: t, addComponents: n, theme: r}) {
        const o = e.strategy === void 0 ? ["base", "class"] : [e.strategy]
          , a = [{
            base: ["[type='text']", "input:where(:not([type]))", "[type='email']", "[type='url']", "[type='password']", "[type='number']", "[type='date']", "[type='datetime-local']", "[type='month']", "[type='search']", "[type='tel']", "[type='time']", "[type='week']", "[multiple]", "textarea", "select"],
            class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
            styles: {
                appearance: "none",
                "background-color": "#fff",
                "border-color": Vt(r("colors.gray.500", jt.gray[500]), "--tw-border-opacity"),
                "border-width": dc.DEFAULT,
                "border-radius": fc.none,
                "padding-top": Ot[2],
                "padding-right": Ot[3],
                "padding-bottom": Ot[2],
                "padding-left": Ot[3],
                "font-size": jv,
                "line-height": Vv,
                "--tw-shadow": "0 0 #0000",
                "&:focus": {
                    outline: "2px solid transparent",
                    "outline-offset": "2px",
                    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                    "--tw-ring-offset-width": "0px",
                    "--tw-ring-offset-color": "#fff",
                    "--tw-ring-color": Vt(r("colors.blue.600", jt.blue[600]), "--tw-ring-opacity"),
                    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                    "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
                    "border-color": Vt(r("colors.blue.600", jt.blue[600]), "--tw-border-opacity")
                }
            }
        }, {
            base: ["input::placeholder", "textarea::placeholder"],
            class: [".form-input::placeholder", ".form-textarea::placeholder"],
            styles: {
                color: Vt(r("colors.gray.500", jt.gray[500]), "--tw-text-opacity"),
                opacity: "1"
            }
        }, {
            base: ["::-webkit-datetime-edit-fields-wrapper"],
            class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
            styles: {
                padding: "0"
            }
        }, {
            base: ["::-webkit-date-and-time-value"],
            class: [".form-input::-webkit-date-and-time-value"],
            styles: {
                "min-height": "1.5em"
            }
        }, {
            base: ["::-webkit-date-and-time-value"],
            class: [".form-input::-webkit-date-and-time-value"],
            styles: {
                "text-align": "inherit"
            }
        }, {
            base: ["::-webkit-datetime-edit"],
            class: [".form-input::-webkit-datetime-edit"],
            styles: {
                display: "inline-flex"
            }
        }, {
            base: ["::-webkit-datetime-edit", "::-webkit-datetime-edit-year-field", "::-webkit-datetime-edit-month-field", "::-webkit-datetime-edit-day-field", "::-webkit-datetime-edit-hour-field", "::-webkit-datetime-edit-minute-field", "::-webkit-datetime-edit-second-field", "::-webkit-datetime-edit-millisecond-field", "::-webkit-datetime-edit-meridiem-field"],
            class: [".form-input::-webkit-datetime-edit", ".form-input::-webkit-datetime-edit-year-field", ".form-input::-webkit-datetime-edit-month-field", ".form-input::-webkit-datetime-edit-day-field", ".form-input::-webkit-datetime-edit-hour-field", ".form-input::-webkit-datetime-edit-minute-field", ".form-input::-webkit-datetime-edit-second-field", ".form-input::-webkit-datetime-edit-millisecond-field", ".form-input::-webkit-datetime-edit-meridiem-field"],
            styles: {
                "padding-top": 0,
                "padding-bottom": 0
            }
        }, {
            base: ["select"],
            class: [".form-select"],
            styles: {
                "background-image": `url("${ro(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${Vt(r("colors.gray.500", jt.gray[500]), "--tw-stroke-opacity")}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,
                "background-position": `right ${Ot[2]} center`,
                "background-repeat": "no-repeat",
                "background-size": "1.5em 1.5em",
                "padding-right": Ot[10],
                "print-color-adjust": "exact"
            }
        }, {
            base: ["[multiple]", '[size]:where(select:not([size="1"]))'],
            class: ['.form-select:where([size]:not([size="1"]))'],
            styles: {
                "background-image": "initial",
                "background-position": "initial",
                "background-repeat": "unset",
                "background-size": "initial",
                "padding-right": Ot[3],
                "print-color-adjust": "unset"
            }
        }, {
            base: ["[type='checkbox']", "[type='radio']"],
            class: [".form-checkbox", ".form-radio"],
            styles: {
                appearance: "none",
                padding: "0",
                "print-color-adjust": "exact",
                display: "inline-block",
                "vertical-align": "middle",
                "background-origin": "border-box",
                "user-select": "none",
                "flex-shrink": "0",
                height: Ot[4],
                width: Ot[4],
                color: Vt(r("colors.blue.600", jt.blue[600]), "--tw-text-opacity"),
                "background-color": "#fff",
                "border-color": Vt(r("colors.gray.500", jt.gray[500]), "--tw-border-opacity"),
                "border-width": dc.DEFAULT,
                "--tw-shadow": "0 0 #0000"
            }
        }, {
            base: ["[type='checkbox']"],
            class: [".form-checkbox"],
            styles: {
                "border-radius": fc.none
            }
        }, {
            base: ["[type='radio']"],
            class: [".form-radio"],
            styles: {
                "border-radius": "100%"
            }
        }, {
            base: ["[type='checkbox']:focus", "[type='radio']:focus"],
            class: [".form-checkbox:focus", ".form-radio:focus"],
            styles: {
                outline: "2px solid transparent",
                "outline-offset": "2px",
                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                "--tw-ring-offset-width": "2px",
                "--tw-ring-offset-color": "#fff",
                "--tw-ring-color": Vt(r("colors.blue.600", jt.blue[600]), "--tw-ring-opacity"),
                "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"
            }
        }, {
            base: ["[type='checkbox']:checked", "[type='radio']:checked"],
            class: [".form-checkbox:checked", ".form-radio:checked"],
            styles: {
                "border-color": "transparent",
                "background-color": "currentColor",
                "background-size": "100% 100%",
                "background-position": "center",
                "background-repeat": "no-repeat"
            }
        }, {
            base: ["[type='checkbox']:checked"],
            class: [".form-checkbox:checked"],
            styles: {
                "background-image": `url("${ro('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`,
                "@media (forced-colors: active) ": {
                    appearance: "auto"
                }
            }
        }, {
            base: ["[type='radio']:checked"],
            class: [".form-radio:checked"],
            styles: {
                "background-image": `url("${ro('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`,
                "@media (forced-colors: active) ": {
                    appearance: "auto"
                }
            }
        }, {
            base: ["[type='checkbox']:checked:hover", "[type='checkbox']:checked:focus", "[type='radio']:checked:hover", "[type='radio']:checked:focus"],
            class: [".form-checkbox:checked:hover", ".form-checkbox:checked:focus", ".form-radio:checked:hover", ".form-radio:checked:focus"],
            styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
            }
        }, {
            base: ["[type='checkbox']:indeterminate"],
            class: [".form-checkbox:indeterminate"],
            styles: {
                "background-image": `url("${ro('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,
                "border-color": "transparent",
                "background-color": "currentColor",
                "background-size": "100% 100%",
                "background-position": "center",
                "background-repeat": "no-repeat",
                "@media (forced-colors: active) ": {
                    appearance: "auto"
                }
            }
        }, {
            base: ["[type='checkbox']:indeterminate:hover", "[type='checkbox']:indeterminate:focus"],
            class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
            styles: {
                "border-color": "transparent",
                "background-color": "currentColor"
            }
        }, {
            base: ["[type='file']"],
            class: null,
            styles: {
                background: "unset",
                "border-color": "inherit",
                "border-width": "0",
                "border-radius": "0",
                padding: "0",
                "font-size": "unset",
                "line-height": "inherit"
            }
        }, {
            base: ["[type='file']:focus"],
            class: null,
            styles: {
                outline: ["1px solid ButtonText", "1px auto -webkit-focus-ring-color"]
            }
        }]
          , i = s => a.map(l => l[s] === null ? null : {
            [l[s]]: l.styles
        }).filter(Boolean);
        o.includes("base") && t(i("base")),
        o.includes("class") && n(i("class"))
    }
});
var Kv = Gv;
const zv = cs(Kv)
  , Wv = {
    darkMode: "class",
    content: ["./assets/**/*.svg", "./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: {
                DEFAULT: "#FFF"
            },
            black: {
                DEFAULT: "#000"
            },
            gray: {
                DEFAULT: "#121212",
                50: "#BFBFBF",
                100: "#B5B5B5",
                200: "#A1A1A1",
                300: "#8C8C8C",
                400: "#787878",
                500: "#646464",
                600: "#4F4F4F",
                700: "#3B3B3B",
                800: "#262626",
                900: "#121212"
            },
            pink: {
                DEFAULT: "#EF476F",
                50: "#FEF0F3",
                100: "#FCDDE5",
                200: "#F9B8C7",
                300: "#F692AA",
                400: "#F26D8C",
                500: "#EF476F",
                600: "#EA1447",
                700: "#B61037",
                800: "#820B28",
                900: "#4F0718"
            },
            yellow: {
                DEFAULT: "#FFD166",
                50: "#FFFFFF",
                100: "#FFFFFF",
                200: "#FFF6E0",
                300: "#FFEAB8",
                400: "#FFDD8F",
                500: "#FFD166",
                600: "#FFC02E",
                700: "#F5AB00",
                800: "#BD8400",
                900: "#855D00"
            },
            green: {
                DEFAULT: "#06D6A0",
                50: "#98FCE2",
                100: "#84FCDC",
                200: "#5CFAD1",
                300: "#34F9C6",
                400: "#0DF8BB",
                500: "#06D6A0",
                600: "#049F77",
                700: "#03694E",
                800: "#013226",
                900: "#000000"
            },
            blue: {
                DEFAULT: "#118AB2",
                50: "#87D9F4",
                100: "#74D3F2",
                200: "#4FC7EE",
                300: "#2ABBEB",
                400: "#15A7D7",
                500: "#118AB2",
                600: "#0C627F",
                700: "#073B4C",
                800: "#021318",
                900: "#000000"
            }
        },
        fontFamily: {
            body: ["DM Sans", "sans-serif"],
            display: ["DM Sans", "sans-serif"],
            mono: ["DM Mono", "monospace"]
        },
        fontSize: {
            xxs: "0.625rem",
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2rem"
        },
        cursor: {
            copy: "copy",
            default: "default",
            move: "move",
            pointer: "pointer"
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        extend: {
            screens: {
                tall: {
                    raw: "(min-height: 768px)"
                }
            }
        }
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"]
        }
    },
    corePlugins: {
        container: !1
    },
    plugins: [Ov, zv]
}
  , Qd = zo("nav", () => {
    const t = Cv(Wv).theme.screens
      , n = q(!(window.innerWidth < parseInt(t.xl)));
    function r() {
        n.value = !(window.innerWidth < parseInt(t.xl))
    }
    function o() {
        n.value = !n.value,
        n.value ? (document.documentElement.style.overflow = "hidden",
        document.body.style.overflow = "hidden") : (document.documentElement.style.overflow = "auto",
        document.body.style.overflow = "auto")
    }
    return {
        isVisible: n,
        init: r,
        toggle: o
    }
}
)
  , qv = es("/img/logo-light.svg");
function Xd(e) {
    return Tn() ? (wn(e),
    !0) : !1
}
function bs(e) {
    return typeof e == "function" ? e() : K(e)
}
const ef = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jv = Object.prototype.toString
  , Yv = e => Jv.call(e) === "[object Object]"
  , ui = () => {}
  , Zv = Qv();
function Qv() {
    var e;
    return ef && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
}
function Xv(e, t=!1, n="Timeout") {
    return new Promise( (r, o) => {
        setTimeout(t ? () => o(n) : r, e)
    }
    )
}
function e1(e, t=!0) {
    vt() ? xe(e) : t ? e() : lt(e)
}
function In(e) {
    var t;
    const n = bs(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Yo = ef ? window : void 0;
function Hn(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,o] = e,
    t = Yo) : [t,n,r,o] = e,
    !t)
        return ui;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const a = []
      , i = () => {
        a.forEach(u => u()),
        a.length = 0
    }
      , s = (u, d, f, p) => (u.addEventListener(d, f, p),
    () => u.removeEventListener(d, f, p))
      , l = Pe( () => [In(t), bs(o)], ([u,d]) => {
        if (i(),
        !u)
            return;
        const f = Yv(d) ? {
            ...d
        } : d;
        a.push(...n.flatMap(p => r.map(m => s(u, p, m, f))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , c = () => {
        l(),
        i()
    }
    ;
    return Xd(c),
    c
}
let pc = !1;
function t1(e, t, n={}) {
    const {window: r=Yo, ignore: o=[], capture: a=!0, detectIframe: i=!1} = n;
    if (!r)
        return;
    Zv && !pc && (pc = !0,
    Array.from(r.document.body.children).forEach(f => f.addEventListener("click", ui)),
    r.document.documentElement.addEventListener("click", ui));
    let s = !0;
    const l = f => o.some(p => {
        if (typeof p == "string")
            return Array.from(r.document.querySelectorAll(p)).some(m => m === f.target || f.composedPath().includes(m));
        {
            const m = In(p);
            return m && (f.target === m || f.composedPath().includes(m))
        }
    }
    )
      , u = [Hn(r, "click", f => {
        const p = In(e);
        if (!(!p || p === f.target || f.composedPath().includes(p))) {
            if (f.detail === 0 && (s = !l(f)),
            !s) {
                s = !0;
                return
            }
            t(f)
        }
    }
    , {
        passive: !0,
        capture: a
    }), Hn(r, "pointerdown", f => {
        const p = In(e);
        s = !l(f) && !!(p && !f.composedPath().includes(p))
    }
    , {
        passive: !0
    }), i && Hn(r, "blur", f => {
        setTimeout( () => {
            var p;
            const m = In(e);
            ((p = r.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(f)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => u.forEach(f => f())
}
function n1() {
    const e = q(!1);
    return vt() && xe( () => {
        e.value = !0
    }
    ),
    e
}
function r1(e) {
    const t = n1();
    return X( () => (t.value,
    !!e()))
}
function o1(e, t={}) {
    const {window: n=Yo} = t
      , r = r1( () => n && "matchMedia"in n && typeof n.matchMedia == "function");
    let o;
    const a = q(!1)
      , i = c => {
        a.value = c.matches
    }
      , s = () => {
        o && ("removeEventListener"in o ? o.removeEventListener("change", i) : o.removeListener(i))
    }
      , l = Ge( () => {
        r.value && (s(),
        o = n.matchMedia(bs(e)),
        "addEventListener"in o ? o.addEventListener("change", i) : o.addListener(i),
        a.value = o.matches)
    }
    );
    return Xd( () => {
        l(),
        s(),
        o = void 0
    }
    ),
    a
}
function zw(e, t={}) {
    const {initialValue: n=!1, focusVisible: r=!1} = t
      , o = q(!1)
      , a = X( () => In(e));
    Hn(a, "focus", s => {
        var l, c;
        (!r || (c = (l = s.target).matches) != null && c.call(l, ":focus-visible")) && (o.value = !0)
    }
    ),
    Hn(a, "blur", () => o.value = !1);
    const i = X({
        get: () => o.value,
        set(s) {
            var l, c;
            !s && o.value ? (l = a.value) == null || l.blur() : s && !o.value && ((c = a.value) == null || c.focus())
        }
    });
    return Pe(a, () => {
        i.value = n
    }
    , {
        immediate: !0,
        flush: "post"
    }),
    {
        focused: i
    }
}
function Ww(e={}) {
    const {window: t=Yo, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: o=!0, includeScrollbar: a=!0} = e
      , i = q(n)
      , s = q(r)
      , l = () => {
        t && (a ? (i.value = t.innerWidth,
        s.value = t.innerHeight) : (i.value = t.document.documentElement.clientWidth,
        s.value = t.document.documentElement.clientHeight))
    }
    ;
    if (l(),
    e1(l),
    Hn("resize", l, {
        passive: !0
    }),
    o) {
        const c = o1("(orientation: portrait)");
        Pe(c, () => l())
    }
    return {
        width: i,
        height: s
    }
}
function a1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
        "clip-rule": "evenodd"
    })])
}
function i1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
        "clip-rule": "evenodd"
    })])
}
function s1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",
        "clip-rule": "evenodd"
    })])
}
function l1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
        "clip-rule": "evenodd"
    })])
}
function c1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",
        "clip-rule": "evenodd"
    })])
}
function u1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",
        "clip-rule": "evenodd"
    })])
}
function d1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
    })])
}
function f1(e, t) {
    return ne(),
    ue("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [Q("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
    })])
}
const p1 = ["aria-hidden"]
  , m1 = {
    id: "the-nav-side-scroller",
    class: "flex-1 overflow-auto pb-[50px]"
}
  , h1 = {
    class: "bg-gray-900 xl:h-[50px] flex items-center py-5 px-6 xl:px-4 sticky top-0 z-10 [& a]:flex-1"
}
  , g1 = Q("a", {
    href: "/",
    class: "bkock w-full"
}, [Q("img", {
    class: "w-4/6 max-w-[150px]",
    src: qv,
    alt: "Web Code Tools logo",
    height: "14",
    width: "138"
})], -1)
  , y1 = {
    class: "mt-5"
}
  , b1 = {
    key: 0,
    class: "block font-bold mb-3 px-2 text-blue-200 uppercase content-[attr(aria-label)]"
}
  , v1 = {
    class: "list-none ml-0"
}
  , _1 = ["onClick"]
  , A1 = {
    class: "flex justify-between w-full"
}
  , w1 = ["href", "data-nav-index", "data-child-index", "target"]
  , E1 = {
    class: "flex justify-between w-full"
}
  , k1 = ["aria-hidden"]
  , T1 = {
    key: 0,
    class: "lock font-bold mb-2 px-2 text-blue-200 uppercase mt-2"
}
  , S1 = {
    class: "list-none ml-0"
}
  , x1 = ["href", "data-nav-index", "data-child-index"]
  , C1 = he({
    __name: "TheNav",
    setup(e) {
        const {css: t, html: n, metaTags: r, structuredData: o, openGraph: a, twitterCard: i, robotsTxt: s} = Sv()
          , l = Zn()
          , c = Qd()
          , u = q();
        t1(u, () => {
            window.innerWidth < 1280 && (c.isVisible = !1)
        }
        );
        const d = q([])
          , f = q(!1);
        d.value.push({
            title: "Generators",
            children: [{
                items: t
            }, {
                items: n
            }, {
                items: r
            }, {
                items: o
            }, {
                items: a
            }, {
                items: i
            }, {
                items: s
            }]
        }),
        xe( () => {
            setTimeout( () => {
                p()
            }
            , 0)
        }
        );
        async function p() {
            const E = l.fullPath.replace(/\/$/, "")
              , _ = document.querySelectorAll(`#the-nav-side a[href$="${E}"]`)[0]
              , h = l.name;
            if (!_ || h != null && h.toString().startsWith("index"))
                return;
            _.classList.add("active");
            const g = Number(_.getAttribute("data-nav-index"))
              , A = Number(_.getAttribute("data-child-index"));
            d.value[g].children[A].open = !0,
            await lt();
            const M = document.getElementById("the-nav-side-scroller");
            if (!M)
                return;
            const I = M.getBoundingClientRect().height
              , P = _.getBoundingClientRect()
              , T = P.top + P.height - I / 2;
            M == null || M.scrollTo({
                top: T
            })
        }
        function m() {
            c.toggle()
        }
        function b(E) {
            E.open = !E.open
        }
        function w(E) {
            return l.fullPath === E
        }
        return xe( () => {
            c.init(),
            window.onresize = () => {
                c.init()
            }
            ,
            f.value = !0
        }
        ),
        (E, _) => (ne(),
        ue("div", {
            id: "the-nav-side",
            ref_key: "navElement",
            ref: u,
            class: gt(["flex flex-col bg-gray-900 fixed xl:sticky pt-0 text-sm text-white top-0 w-[350px] xl:w-[240px] max-w-11/12 z-[100] border-r border-gray-300 dark:border-gray-700 h-screen translate-x-[-100vw] xl:translate-x-0 transition-transform duration-300", {
                "!translate-x-0": K(c).isVisible && K(f)
            }]),
            "aria-hidden": !K(c).isVisible
        }, [Q("div", m1, [Q("div", h1, [g1, Q("button", {
            class: "xl:hidden",
            onClick: m
        }, [ie(K(f1), {
            class: "text-white h-6 w-6"
        })])]), Q("div", y1, [(ne(!0),
        ue(we, null, Mn(K(d), (h, g) => (ne(),
        ue("div", {
            key: g,
            class: "mb-4 last:mb-0 px-4 xl:px-2 [& > ul > li]:mb-2 [& > ul > li]last:mb-0"
        }, [h.title ? (ne(),
        ue("div", b1, Et(h.title), 1)) : yt("", !0), Q("ul", v1, [(ne(!0),
        ue(we, null, Mn(h.children, (A, M) => (ne(),
        ue("li", {
            key: M,
            class: "mb-1"
        }, [A.items.nav ? (ne(),
        ue("button", {
            key: 0,
            class: "flex cursor-pointer font-normal items-center justify-between px-2 py-1 rounded-lg text-left text-white w-full hover:bg-gray-800 active:bg-gray-800",
            onClick: I => b(A)
        }, [Q("div", A1, Et(A.items.name), 1), (ne(),
        et(Bi(A.open ? K(c1) : K(s1)), {
            class: "opacity-50 ml-3 w-5"
        }))], 8, _1)) : (ne(),
        ue("a", {
            key: 1,
            class: gt(["flex cursor-pointer font-normal items-center justify-between px-2 py-1 rounded-lg text-left text-white w-full hover:bg-green-700 hover:opacity-100 active:bg-green-700 active:opacity-100", {
                "bg-green-700": w(A.items.link ?? "")
            }]),
            href: A.items.link,
            "data-nav-index": g,
            "data-child-index": M,
            target: A.items.external ? "_blank" : "_self"
        }, [Q("div", E1, Et(A.items.name), 1)], 10, w1)), (ne(!0),
        ue(we, null, Mn(A.items.nav, (I, P) => (ne(),
        ue("div", {
            key: P,
            "aria-hidden": !A.open,
            class: "px-2 aria-hidden:hidden"
        }, [I.name ? (ne(),
        ue("div", T1, Et(I.name), 1)) : yt("", !0), Q("ul", S1, [(ne(!0),
        ue(we, null, Mn(I.children, (T, C) => (ne(),
        ue("li", {
            key: C,
            class: "mb-0.5 last:mb-0"
        }, [Q("a", {
            href: T.link,
            "data-nav-index": g,
            "data-child-index": M,
            class: gt(["flex items-center justify-between px-2 py-1 rounded-lg text-left text-white w-full font-normal hover:bg-green-700 hover:opacity-100", {
                "bg-green-700": w(T.link)
            }])
        }, Et(T.name), 11, x1)]))), 128))])], 8, k1))), 128))]))), 128))])]))), 128))])])], 10, p1))
    }
});
var P1, R1 = () => P1;
function M1(e) {
    return typeof e == "function" ? e() : K(e)
}
function di(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = M1(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => di(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map( ([r,o]) => r === "titleTemplate" || r.startsWith("on") ? [r, K(o)] : [r, di(o, r)])) : n
}
var O1 = typeof window < "u"
  , L1 = "usehead";
function vs() {
    return vt() && be(L1) || R1()
}
function I1(e, t={}) {
    const n = vs()
      , r = q(!1)
      , o = q({});
    Ge( () => {
        o.value = r.value ? {} : di(e)
    }
    );
    const a = n.push(o.value, t);
    return Pe(o, s => {
        a.patch(s)
    }
    ),
    vt() && (Br( () => {
        a.dispose()
    }
    ),
    Hi( () => {
        r.value = !0
    }
    ),
    Ui( () => {
        r.value = !1
    }
    )),
    a
}
function D1(e, t={}) {
    return vs().push(e, t)
}
function B1(e, t={}) {
    var r;
    const n = vs();
    if (n) {
        const o = O1 || !!((r = n.resolvedOptions) != null && r.document);
        return t.mode === "server" && o || t.mode === "client" && !o ? void 0 : o ? I1(e, t) : D1(e, t)
    }
}
var N1 = e => typeof e == "function"
  , F1 = e => {
    if (!e)
        return;
    const t = X( () => N1(e) ? e() : e);
    B1( () => t.value ? {
        script: [{
            type: "application/ld+json",
            children: JSON.stringify(t.value, null, "")
        }]
    } : {})
}
;
const $1 = /\S+|./g
  , U1 = new RegExp("\\p{Ll}(?=[\\p{Lu}])|\\.\\p{L}","u")
  , H1 = /[\p{L}\d]+/gu
  , j1 = new Set(["—", "–", "-", "―", "/"])
  , V1 = new Set(["a", "an", "and", "as", "at", "because", "but", "by", "en", "for", "if", "in", "neither", "nor", "of", "on", "only", "or", "over", "per", "so", "some", "than", "that", "the", "to", "up", "upon", "v", "versus", "via", "vs", "when", "with", "without", "yet"]);
function G1(e, t={}) {
    let n = "", r;
    const {smallWords: o=V1, locale: a} = typeof t == "string" || Array.isArray(t) ? {
        locale: t
    } : t;
    for (; (r = $1.exec(e)) !== null; ) {
        const {0: i, index: s} = r;
        U1.test(i) ? n += i : n += i.replace(H1, (l, c) => s > 0 && s + i.length < e.length && o.has(l) || c > 1 && !j1.has(e.charAt(s + c - 1)) ? l : l.charAt(0).toLocaleUpperCase(a) + l.slice(1))
    }
    return n
}
const K1 = {
    key: 0,
    class: "font-bold hidden lg:flex mb-0 ml-auto xl:ml-0 text-xs uppercase text-blue-500 dark:text-blue-200"
}
  , z1 = ["href"]
  , W1 = he({
    __name: "TheBreadcrumb",
    setup(e) {
        const t = Zn()
          , n = X( () => {
            const o = t.fullPath;
            let a = o.startsWith("/") ? o.substring(1).split("/") : o.split("/");
            const i = [];
            a = a.filter(l => l);
            let s = "";
            return a.forEach(l => {
                s = `${s}/${l}`,
                i.push({
                    title: r(l),
                    path: s
                })
            }
            ),
            i
        }
        );
        function r(o) {
            return o === "css" || o === "html" ? o.replace(/-/g, " ").toUpperCase() : G1(o.replace(/-/g, " ")).split("?")[0]
        }
        return n.value.length && F1({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: n.value.map( (o, a) => ({
                "@type": "ListItem",
                position: a + 1,
                item: {
                    "@id": o.path,
                    name: o.title
                }
            }))
        }),
        (o, a) => K(n) ? (ne(),
        ue("ul", K1, [(ne(!0),
        ue(we, null, Mn(K(n), (i, s) => (ne(),
        ue("li", {
            key: s,
            class: "flex items-center"
        }, [Q("a", {
            href: i.path,
            class: "font-bold tracking-wide text-blue-500 dark:text-blue-200 no-underline hover:text-blue-400 dark:hover:text-blue-100"
        }, Et(decodeURI(i.title)), 9, z1), s !== K(n).length - 1 ? (ne(),
        et(K(l1), {
            key: 0,
            class: "inline-block opacity-50 mx-1 text-black dark:text-white w-3"
        })) : yt("", !0)]))), 128))])) : yt("", !0)
    }
})
  , q1 = () => xd("color-mode").value;
function Ct(e, t, ...n) {
    if (e in t) {
        let o = t[e];
        return typeof o == "function" ? o(...n) : o
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o => `"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ct),
    r
}
var xo = (e => (e[e.None = 0] = "None",
e[e.RenderStrategy = 1] = "RenderStrategy",
e[e.Static = 2] = "Static",
e))(xo || {})
  , Zt = (e => (e[e.Unmount = 0] = "Unmount",
e[e.Hidden = 1] = "Hidden",
e))(Zt || {});
function _t({visible: e=!0, features: t=0, ourProps: n, theirProps: r, ...o}) {
    var a;
    let i = nf(r, n)
      , s = Object.assign(o, {
        props: i
    });
    if (e || t & 2 && i.static)
        return wa(s);
    if (t & 1) {
        let l = (a = i.unmount) == null || a ? 0 : 1;
        return Ct(l, {
            0() {
                return null
            },
            1() {
                return wa({
                    ...o,
                    props: {
                        ...i,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                })
            }
        })
    }
    return wa(s)
}
function wa({props: e, attrs: t, slots: n, slot: r, name: o}) {
    var a, i;
    let {as: s, ...l} = _s(e, ["unmount", "static"])
      , c = (a = n.default) == null ? void 0 : a.call(n, r)
      , u = {};
    if (r) {
        let d = !1
          , f = [];
        for (let[p,m] of Object.entries(r))
            typeof m == "boolean" && (d = !0),
            m === !0 && f.push(p);
        d && (u["data-headlessui-state"] = f.join(" "))
    }
    if (s === "template") {
        if (c = tf(c ?? []),
        Object.keys(l).length > 0 || Object.keys(t).length > 0) {
            let[d,...f] = c ?? [];
            if (!Y1(d) || f.length > 0)
                throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map(b => b.trim()).filter( (b, w, E) => E.indexOf(b) === w).sort( (b, w) => b.localeCompare(w)).map(b => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(b => `  - ${b}`).join(`
`)].join(`
`));
            let p = nf((i = d.props) != null ? i : {}, l)
              , m = xt(d, p);
            for (let b in p)
                b.startsWith("on") && (m.props || (m.props = {}),
                m.props[b] = p[b]);
            return m
        }
        return Array.isArray(c) && c.length === 1 ? c[0] : c
    }
    return ge(s, Object.assign({}, l, u), {
        default: () => c
    })
}
function tf(e) {
    return e.flatMap(t => t.type === we ? tf(t.children) : [t])
}
function nf(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let o in r)
            o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []),
            n[o].push(r[o])) : t[o] = r[o];
    if (t.disabled || t["aria-disabled"])
        return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n)
        Object.assign(t, {
            [r](o, ...a) {
                let i = n[r];
                for (let s of i) {
                    if (o instanceof Event && o.defaultPrevented)
                        return;
                    s(o, ...a)
                }
            }
        });
    return t
}
function J1(e) {
    let t = Object.assign({}, e);
    for (let n in t)
        t[n] === void 0 && delete t[n];
    return t
}
function _s(e, t=[]) {
    let n = Object.assign({}, e);
    for (let r of t)
        r in n && delete n[r];
    return n
}
function Y1(e) {
    return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}
let Z1 = 0;
function Q1() {
    return ++Z1
}
function Hr() {
    return Q1()
}
var Co = (e => (e.Space = " ",
e.Enter = "Enter",
e.Escape = "Escape",
e.Backspace = "Backspace",
e.Delete = "Delete",
e.ArrowLeft = "ArrowLeft",
e.ArrowUp = "ArrowUp",
e.ArrowRight = "ArrowRight",
e.ArrowDown = "ArrowDown",
e.Home = "Home",
e.End = "End",
e.PageUp = "PageUp",
e.PageDown = "PageDown",
e.Tab = "Tab",
e))(Co || {});
function Re(e) {
    var t;
    return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value
}
let rf = Symbol("Context");
var Xe = (e => (e[e.Open = 1] = "Open",
e[e.Closed = 2] = "Closed",
e[e.Closing = 4] = "Closing",
e[e.Opening = 8] = "Opening",
e))(Xe || {});
function X1() {
    return As() !== null
}
function As() {
    return be(rf, null)
}
function e_(e) {
    $e(rf, e)
}
function mc(e, t) {
    if (e)
        return e;
    let n = t ?? "button";
    if (typeof n == "string" && n.toLowerCase() === "button")
        return "button"
}
function t_(e, t) {
    let n = q(mc(e.value.type, e.value.as));
    return xe( () => {
        n.value = mc(e.value.type, e.value.as)
    }
    ),
    Ge( () => {
        var r;
        n.value || Re(t) && Re(t)instanceof HTMLButtonElement && !((r = Re(t)) != null && r.hasAttribute("type")) && (n.value = "button")
    }
    ),
    n
}
var n_ = Object.defineProperty
  , r_ = (e, t, n) => t in e ? n_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , hc = (e, t, n) => (r_(e, typeof t != "symbol" ? t + "" : t, n),
n);
class o_ {
    constructor() {
        hc(this, "current", this.detect()),
        hc(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.currentId = 0,
        this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
}
let jr = new o_;
function Qn(e) {
    if (jr.isServer)
        return null;
    if (e instanceof Node)
        return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = Re(e);
        if (t)
            return t.ownerDocument
    }
    return document
}
let fi = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var Jt = (e => (e[e.First = 1] = "First",
e[e.Previous = 2] = "Previous",
e[e.Next = 4] = "Next",
e[e.Last = 8] = "Last",
e[e.WrapAround = 16] = "WrapAround",
e[e.NoScroll = 32] = "NoScroll",
e))(Jt || {})
  , of = (e => (e[e.Error = 0] = "Error",
e[e.Overflow = 1] = "Overflow",
e[e.Success = 2] = "Success",
e[e.Underflow = 3] = "Underflow",
e))(of || {})
  , a_ = (e => (e[e.Previous = -1] = "Previous",
e[e.Next = 1] = "Next",
e))(a_ || {});
function i_(e=document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(fi)).sort( (t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var af = (e => (e[e.Strict = 0] = "Strict",
e[e.Loose = 1] = "Loose",
e))(af || {});
function s_(e, t=0) {
    var n;
    return e === ((n = Qn(e)) == null ? void 0 : n.body) ? !1 : Ct(t, {
        0() {
            return e.matches(fi)
        },
        1() {
            let r = e;
            for (; r !== null; ) {
                if (r.matches(fi))
                    return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var l_ = (e => (e[e.Keyboard = 0] = "Keyboard",
e[e.Mouse = 1] = "Mouse",
e))(l_ || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0),
document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0));
function _n(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let c_ = ["textarea", "input"].join(",");
function u_(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, c_)) != null ? n : !1
}
function d_(e, t=n => n) {
    return e.slice().sort( (n, r) => {
        let o = t(n)
          , a = t(r);
        if (o === null || a === null)
            return 0;
        let i = o.compareDocumentPosition(a);
        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    }
    )
}
function fo(e, t, {sorted: n=!0, relativeTo: r=null, skipElements: o=[]}={}) {
    var a;
    let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document
      , s = Array.isArray(e) ? n ? d_(e) : e : i_(e);
    o.length > 0 && s.length > 1 && (s = s.filter(m => !o.includes(m))),
    r = r ?? i.activeElement;
    let l = ( () => {
        if (t & 5)
            return 1;
        if (t & 10)
            return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), c = ( () => {
        if (t & 1)
            return 0;
        if (t & 2)
            return Math.max(0, s.indexOf(r)) - 1;
        if (t & 4)
            return Math.max(0, s.indexOf(r)) + 1;
        if (t & 8)
            return s.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), u = t & 32 ? {
        preventScroll: !0
    } : {}, d = 0, f = s.length, p;
    do {
        if (d >= f || d + f <= 0)
            return 0;
        let m = c + d;
        if (t & 16)
            m = (m + f) % f;
        else {
            if (m < 0)
                return 3;
            if (m >= f)
                return 1
        }
        p = s[m],
        p == null || p.focus(u),
        d += l
    } while (p !== i.activeElement);
    return t & 6 && u_(p) && p.select(),
    2
}
function oo(e, t, n) {
    jr.isServer || Ge(r => {
        document.addEventListener(e, t, n),
        r( () => document.removeEventListener(e, t, n))
    }
    )
}
function sf(e, t, n) {
    jr.isServer || Ge(r => {
        window.addEventListener(e, t, n),
        r( () => window.removeEventListener(e, t, n))
    }
    )
}
function f_(e, t, n=X( () => !0)) {
    function r(a, i) {
        if (!n.value || a.defaultPrevented)
            return;
        let s = i(a);
        if (s === null || !s.getRootNode().contains(s))
            return;
        let l = function c(u) {
            return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u]
        }(e);
        for (let c of l) {
            if (c === null)
                continue;
            let u = c instanceof HTMLElement ? c : Re(c);
            if (u != null && u.contains(s) || a.composed && a.composedPath().includes(u))
                return
        }
        return !s_(s, af.Loose) && s.tabIndex !== -1 && a.preventDefault(),
        t(a, s)
    }
    let o = q(null);
    oo("pointerdown", a => {
        var i, s;
        n.value && (o.value = ((s = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : s[0]) || a.target)
    }
    , !0),
    oo("mousedown", a => {
        var i, s;
        n.value && (o.value = ((s = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : s[0]) || a.target)
    }
    , !0),
    oo("click", a => {
        o.value && (r(a, () => o.value),
        o.value = null)
    }
    , !0),
    oo("touchend", a => r(a, () => a.target instanceof HTMLElement ? a.target : null), !0),
    sf("blur", a => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}
var Or = (e => (e[e.None = 1] = "None",
e[e.Focusable = 2] = "Focusable",
e[e.Hidden = 4] = "Hidden",
e))(Or || {});
let Po = he({
    name: "Hidden",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return () => {
            let {features: r, ...o} = e
              , a = {
                "aria-hidden": (r & 2) === 2 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(r & 4) === 4 && (r & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return _t({
                ourProps: a,
                theirProps: o,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden"
            })
        }
    }
});
function p_(e={}, t=null, n=[]) {
    for (let[r,o] of Object.entries(e))
        cf(n, lf(t, r), o);
    return n
}
function lf(e, t) {
    return e ? e + "[" + t + "]" : t
}
function cf(e, t, n) {
    if (Array.isArray(n))
        for (let[r,o] of n.entries())
            cf(e, lf(t, r.toString()), o);
    else
        n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : p_(n, t, e)
}
function m_(e) {
    var t, n;
    let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
    if (r) {
        for (let o of r.elements)
            if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
                o.click();
                return
            }
        (n = r.requestSubmit) == null || n.call(r)
    }
}
function h_(e, t, n) {
    let r = q(n == null ? void 0 : n.value)
      , o = X( () => e.value !== void 0);
    return [X( () => o.value ? e.value : r.value), function(a) {
        return o.value || (r.value = a),
        t == null ? void 0 : t(a)
    }
    ]
}
function uf() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
function g_() {
    return /Android/gi.test(window.navigator.userAgent)
}
function qw() {
    return uf() || g_()
}
function ws(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout( () => {
        throw t
    }
    ))
}
function Vr() {
    let e = []
      , t = {
        addEventListener(n, r, o, a) {
            return n.addEventListener(r, o, a),
            t.add( () => n.removeEventListener(r, o, a))
        },
        requestAnimationFrame(...n) {
            let r = requestAnimationFrame(...n);
            t.add( () => cancelAnimationFrame(r))
        },
        nextFrame(...n) {
            t.requestAnimationFrame( () => {
                t.requestAnimationFrame(...n)
            }
            )
        },
        setTimeout(...n) {
            let r = setTimeout(...n);
            t.add( () => clearTimeout(r))
        },
        microTask(...n) {
            let r = {
                current: !0
            };
            return ws( () => {
                r.current && n[0]()
            }
            ),
            t.add( () => {
                r.current = !1
            }
            )
        },
        style(n, r, o) {
            let a = n.style.getPropertyValue(r);
            return Object.assign(n.style, {
                [r]: o
            }),
            this.add( () => {
                Object.assign(n.style, {
                    [r]: a
                })
            }
            )
        },
        group(n) {
            let r = Vr();
            return n(r),
            this.add( () => r.dispose())
        },
        add(n) {
            return e.push(n),
            () => {
                let r = e.indexOf(n);
                if (r >= 0)
                    for (let o of e.splice(r, 1))
                        o()
            }
        },
        dispose() {
            for (let n of e.splice(0))
                n()
        }
    };
    return t
}
var cr = (e => (e[e.Forwards = 0] = "Forwards",
e[e.Backwards = 1] = "Backwards",
e))(cr || {});
function y_() {
    let e = q(0);
    return sf("keydown", t => {
        t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }
    ),
    e
}
function df(e, t, n, r) {
    jr.isServer || Ge(o => {
        e = e ?? window,
        e.addEventListener(t, n, r),
        o( () => e.removeEventListener(t, n, r))
    }
    )
}
function b_(e) {
    function t() {
        document.readyState !== "loading" && (e(),
        document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t),
    t())
}
function ff(e) {
    if (!e)
        return new Set;
    if (typeof e == "function")
        return new Set(e());
    let t = new Set;
    for (let n of e.value) {
        let r = Re(n);
        r instanceof HTMLElement && t.add(r)
    }
    return t
}
var pf = (e => (e[e.None = 1] = "None",
e[e.InitialFocus = 2] = "InitialFocus",
e[e.TabLock = 4] = "TabLock",
e[e.FocusLock = 8] = "FocusLock",
e[e.RestoreFocus = 16] = "RestoreFocus",
e[e.All = 30] = "All",
e))(pf || {});
let or = Object.assign(he({
    name: "FocusTrap",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        initialFocus: {
            type: Object,
            default: null
        },
        features: {
            type: Number,
            default: 30
        },
        containers: {
            type: [Object, Function],
            default: q(new Set)
        }
    },
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n, expose: r}) {
        let o = q(null);
        r({
            el: o,
            $el: o
        });
        let a = X( () => Qn(o))
          , i = q(!1);
        xe( () => i.value = !0),
        tt( () => i.value = !1),
        __({
            ownerDocument: a
        }, X( () => i.value && !!(e.features & 16)));
        let s = A_({
            ownerDocument: a,
            container: o,
            initialFocus: X( () => e.initialFocus)
        }, X( () => i.value && !!(e.features & 2)));
        w_({
            ownerDocument: a,
            container: o,
            containers: e.containers,
            previousActiveElement: s
        }, X( () => i.value && !!(e.features & 8)));
        let l = y_();
        function c(p) {
            let m = Re(o);
            m && (b => b())( () => {
                Ct(l.value, {
                    [cr.Forwards]: () => {
                        fo(m, Jt.First, {
                            skipElements: [p.relatedTarget]
                        })
                    }
                    ,
                    [cr.Backwards]: () => {
                        fo(m, Jt.Last, {
                            skipElements: [p.relatedTarget]
                        })
                    }
                })
            }
            )
        }
        let u = q(!1);
        function d(p) {
            p.key === "Tab" && (u.value = !0,
            requestAnimationFrame( () => {
                u.value = !1
            }
            ))
        }
        function f(p) {
            if (!i.value)
                return;
            let m = ff(e.containers);
            Re(o)instanceof HTMLElement && m.add(Re(o));
            let b = p.relatedTarget;
            b instanceof HTMLElement && b.dataset.headlessuiFocusGuard !== "true" && (mf(m, b) || (u.value ? fo(Re(o), Ct(l.value, {
                [cr.Forwards]: () => Jt.Next,
                [cr.Backwards]: () => Jt.Previous
            }) | Jt.WrapAround, {
                relativeTo: p.target
            }) : p.target instanceof HTMLElement && _n(p.target)))
        }
        return () => {
            let p = {}
              , m = {
                ref: o,
                onKeydown: d,
                onFocusout: f
            }
              , {features: b, initialFocus: w, containers: E, ..._} = e;
            return ge(we, [!!(b & 4) && ge(Po, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: Or.Focusable
            }), _t({
                ourProps: m,
                theirProps: {
                    ...t,
                    ..._
                },
                slot: p,
                attrs: t,
                slots: n,
                name: "FocusTrap"
            }), !!(b & 4) && ge(Po, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: Or.Focusable
            })])
        }
    }
}), {
    features: pf
})
  , mn = [];
b_( () => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && mn[0] !== t.target && (mn.unshift(t.target),
        mn = mn.filter(n => n != null && n.isConnected),
        mn.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }),
    window.addEventListener("mousedown", e, {
        capture: !0
    }),
    window.addEventListener("focus", e, {
        capture: !0
    }),
    document.body.addEventListener("click", e, {
        capture: !0
    }),
    document.body.addEventListener("mousedown", e, {
        capture: !0
    }),
    document.body.addEventListener("focus", e, {
        capture: !0
    })
}
);
function v_(e) {
    let t = q(mn.slice());
    return Pe([e], ([n], [r]) => {
        r === !0 && n === !1 ? ws( () => {
            t.value.splice(0)
        }
        ) : r === !1 && n === !0 && (t.value = mn.slice())
    }
    , {
        flush: "post"
    }),
    () => {
        var n;
        return (n = t.value.find(r => r != null && r.isConnected)) != null ? n : null
    }
}
function __({ownerDocument: e}, t) {
    let n = v_(t);
    xe( () => {
        Ge( () => {
            var r, o;
            t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && _n(n())
        }
        , {
            flush: "post"
        })
    }
    ),
    tt( () => {
        t.value && _n(n())
    }
    )
}
function A_({ownerDocument: e, container: t, initialFocus: n}, r) {
    let o = q(null)
      , a = q(!1);
    return xe( () => a.value = !0),
    tt( () => a.value = !1),
    xe( () => {
        Pe([t, n, r], (i, s) => {
            if (i.every( (c, u) => (s == null ? void 0 : s[u]) === c) || !r.value)
                return;
            let l = Re(t);
            l && ws( () => {
                var c, u;
                if (!a.value)
                    return;
                let d = Re(n)
                  , f = (c = e.value) == null ? void 0 : c.activeElement;
                if (d) {
                    if (d === f) {
                        o.value = f;
                        return
                    }
                } else if (l.contains(f)) {
                    o.value = f;
                    return
                }
                d ? _n(d) : fo(l, Jt.First | Jt.NoScroll) === of.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                o.value = (u = e.value) == null ? void 0 : u.activeElement
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        })
    }
    ),
    o
}
function w_({ownerDocument: e, container: t, containers: n, previousActiveElement: r}, o) {
    var a;
    df((a = e.value) == null ? void 0 : a.defaultView, "focus", i => {
        if (!o.value)
            return;
        let s = ff(n);
        Re(t)instanceof HTMLElement && s.add(Re(t));
        let l = r.value;
        if (!l)
            return;
        let c = i.target;
        c && c instanceof HTMLElement ? mf(s, c) ? (r.value = c,
        _n(c)) : (i.preventDefault(),
        i.stopPropagation(),
        _n(l)) : _n(r.value)
    }
    , !0)
}
function mf(e, t) {
    for (let n of e)
        if (n.contains(t))
            return !0;
    return !1
}
let Ea = new Map
  , ar = new Map;
function gc(e, t=q(!0)) {
    Ge(n => {
        var r;
        if (!t.value)
            return;
        let o = Re(e);
        if (!o)
            return;
        n(function() {
            var i;
            if (!o)
                return;
            let s = (i = ar.get(o)) != null ? i : 1;
            if (s === 1 ? ar.delete(o) : ar.set(o, s - 1),
            s !== 1)
                return;
            let l = Ea.get(o);
            l && (l["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", l["aria-hidden"]),
            o.inert = l.inert,
            Ea.delete(o))
        });
        let a = (r = ar.get(o)) != null ? r : 0;
        ar.set(o, a + 1),
        a === 0 && (Ea.set(o, {
            "aria-hidden": o.getAttribute("aria-hidden"),
            inert: o.inert
        }),
        o.setAttribute("aria-hidden", "true"),
        o.inert = !0)
    }
    )
}
let hf = Symbol("ForcePortalRootContext");
function E_() {
    return be(hf, !1)
}
let yc = he({
    name: "ForcePortalRoot",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        force: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return $e(hf, e.force),
        () => {
            let {force: r, ...o} = e;
            return _t({
                theirProps: o,
                ourProps: {},
                slot: {},
                slots: t,
                attrs: n,
                name: "ForcePortalRoot"
            })
        }
    }
});
function k_(e) {
    let t = Qn(e);
    if (!t) {
        if (e === null)
            return null;
        throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n)
        return n;
    let r = t.createElement("div");
    return r.setAttribute("id", "headlessui-portal-root"),
    t.body.appendChild(r)
}
let T_ = he({
    name: "Portal",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {slots: t, attrs: n}) {
        let r = q(null)
          , o = X( () => Qn(r))
          , a = E_()
          , i = be(gf, null)
          , s = q(a === !0 || i == null ? k_(r.value) : i.resolveTarget());
        Ge( () => {
            a || i != null && (s.value = i.resolveTarget())
        }
        );
        let l = be(pi, null);
        return xe( () => {
            let c = Re(r);
            c && l && tt(l.register(c))
        }
        ),
        tt( () => {
            var c, u;
            let d = (c = o.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
            d && s.value === d && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value))
        }
        ),
        () => {
            if (s.value === null)
                return null;
            let c = {
                ref: r,
                "data-headlessui-portal": ""
            };
            return ge(ym, {
                to: s.value
            }, _t({
                ourProps: c,
                theirProps: e,
                slot: {},
                attrs: n,
                slots: t,
                name: "Portal"
            }))
        }
    }
})
  , pi = Symbol("PortalParentContext");
function S_() {
    let e = be(pi, null)
      , t = q([]);
    function n(a) {
        return t.value.push(a),
        e && e.register(a),
        () => r(a)
    }
    function r(a) {
        let i = t.value.indexOf(a);
        i !== -1 && t.value.splice(i, 1),
        e && e.unregister(a)
    }
    let o = {
        register: n,
        unregister: r,
        portals: t
    };
    return [t, he({
        name: "PortalWrapper",
        setup(a, {slots: i}) {
            return $e(pi, o),
            () => {
                var s;
                return (s = i.default) == null ? void 0 : s.call(i)
            }
        }
    })]
}
let gf = Symbol("PortalGroupContext")
  , x_ = he({
    name: "PortalGroup",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        target: {
            type: Object,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        let r = st({
            resolveTarget() {
                return e.target
            }
        });
        return $e(gf, r),
        () => {
            let {target: o, ...a} = e;
            return _t({
                theirProps: a,
                ourProps: {},
                slot: {},
                attrs: t,
                slots: n,
                name: "PortalGroup"
            })
        }
    }
})
  , yf = Symbol("StackContext");
var mi = (e => (e[e.Add = 0] = "Add",
e[e.Remove = 1] = "Remove",
e))(mi || {});
function C_() {
    return be(yf, () => {}
    )
}
function P_({type: e, enabled: t, element: n, onUpdate: r}) {
    let o = C_();
    function a(...i) {
        r == null || r(...i),
        o(...i)
    }
    xe( () => {
        Pe(t, (i, s) => {
            i ? a(0, e, n) : s === !0 && a(1, e, n)
        }
        , {
            immediate: !0,
            flush: "sync"
        })
    }
    ),
    tt( () => {
        t.value && a(1, e, n)
    }
    ),
    $e(yf, a)
}
let R_ = Symbol("DescriptionContext");
function M_({slot: e=q({}), name: t="Description", props: n={}}={}) {
    let r = q([]);
    function o(a) {
        return r.value.push(a),
        () => {
            let i = r.value.indexOf(a);
            i !== -1 && r.value.splice(i, 1)
        }
    }
    return $e(R_, {
        register: o,
        slot: e,
        name: t,
        props: n
    }),
    X( () => r.value.length > 0 ? r.value.join(" ") : void 0)
}
function O_(e) {
    let t = kn(e.getSnapshot());
    return tt(e.subscribe( () => {
        t.value = e.getSnapshot()
    }
    )),
    t
}
function L_(e, t) {
    let n = e()
      , r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(o) {
            return r.add(o),
            () => r.delete(o)
        },
        dispatch(o, ...a) {
            let i = t[o].call(n, ...a);
            i && (n = i,
            r.forEach(s => s()))
        }
    }
}
function I_() {
    let e;
    return {
        before({doc: t}) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({doc: t, d: n}) {
            let r = t.documentElement
              , o = r.clientWidth - r.offsetWidth
              , a = e - o;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}
function D_() {
    if (!uf())
        return {};
    let e;
    return {
        before() {
            e = window.pageYOffset
        },
        after({doc: t, d: n, meta: r}) {
            function o(i) {
                return r.containers.flatMap(s => s()).some(s => s.contains(i))
            }
            if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
                let i = Vr();
                i.style(t.documentElement, "scroll-behavior", "auto"),
                n.add( () => n.microTask( () => i.dispose()))
            }
            n.style(t.body, "marginTop", `-${e}px`),
            window.scrollTo(0, 0);
            let a = null;
            n.addEventListener(t, "click", i => {
                if (i.target instanceof HTMLElement)
                    try {
                        let s = i.target.closest("a");
                        if (!s)
                            return;
                        let {hash: l} = new URL(s.href)
                          , c = t.querySelector(l);
                        c && !o(c) && (a = c)
                    } catch {}
            }
            , !0),
            n.addEventListener(t, "touchmove", i => {
                i.target instanceof HTMLElement && !o(i.target) && i.preventDefault()
            }
            , {
                passive: !1
            }),
            n.add( () => {
                window.scrollTo(0, window.pageYOffset + e),
                a && a.isConnected && (a.scrollIntoView({
                    block: "nearest"
                }),
                a = null)
            }
            )
        }
    }
}
function B_() {
    return {
        before({doc: e, d: t}) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}
function N_(e) {
    let t = {};
    for (let n of e)
        Object.assign(t, n(t));
    return t
}
let gn = L_( () => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: Vr(),
            meta: new Set
        };
        return r.count++,
        r.meta.add(t),
        this.set(e, r),
        this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--,
        n.meta.delete(t)),
        this
    },
    SCROLL_PREVENT({doc: e, d: t, meta: n}) {
        let r = {
            doc: e,
            d: t,
            meta: N_(n)
        }
          , o = [D_(), I_(), B_()];
        o.forEach( ({before: a}) => a == null ? void 0 : a(r)),
        o.forEach( ({after: a}) => a == null ? void 0 : a(r))
    },
    SCROLL_ALLOW({d: e}) {
        e.dispose()
    },
    TEARDOWN({doc: e}) {
        this.delete(e)
    }
});
gn.subscribe( () => {
    let e = gn.getSnapshot()
      , t = new Map;
    for (let[n] of e)
        t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden"
          , o = n.count !== 0;
        (o && !r || !o && r) && gn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
        n.count === 0 && gn.dispatch("TEARDOWN", n)
    }
}
);
function F_(e, t, n) {
    let r = O_(gn)
      , o = X( () => {
        let a = e.value ? r.value.get(e.value) : void 0;
        return a ? a.count > 0 : !1
    }
    );
    return Pe([e, t], ([a,i], [s], l) => {
        if (!a || !i)
            return;
        gn.dispatch("PUSH", a, n);
        let c = !1;
        l( () => {
            c || (gn.dispatch("POP", s ?? a, n),
            c = !0)
        }
        )
    }
    , {
        immediate: !0
    }),
    o
}
function $_({defaultContainers: e=[], portals: t, mainTreeNodeRef: n}={}) {
    let r = q(null)
      , o = Qn(r);
    function a() {
        var i;
        let s = [];
        for (let l of e)
            l !== null && (l instanceof HTMLElement ? s.push(l) : "value"in l && l.value instanceof HTMLElement && s.push(l.value));
        if (t != null && t.value)
            for (let l of t.value)
                s.push(l);
        for (let l of (i = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? i : [])
            l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(Re(r)) || s.some(c => l.contains(c)) || s.push(l));
        return s
    }
    return {
        resolveContainers: a,
        contains(i) {
            return a().some(s => s.contains(i))
        },
        mainTreeNodeRef: r,
        MainTreeNode() {
            return n != null ? null : ge(Po, {
                features: Or.Hidden,
                ref: r
            })
        }
    }
}
var U_ = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(U_ || {});
let hi = Symbol("DialogContext");
function Es(e) {
    let t = be(hi, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Es),
        n
    }
    return t
}
let ao = "DC8F892D-2EBD-447C-A4C8-A03058436FF4"
  , H_ = he({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        open: {
            type: [Boolean, String],
            default: ao
        },
        initialFocus: {
            type: Object,
            default: null
        },
        id: {
            type: String,
            default: () => `headlessui-dialog-${Hr()}`
        }
    },
    emits: {
        close: e => !0
    },
    setup(e, {emit: t, attrs: n, slots: r, expose: o}) {
        var a;
        let i = q(!1);
        xe( () => {
            i.value = !0
        }
        );
        let s = q(0)
          , l = As()
          , c = X( () => e.open === ao && l !== null ? (l.value & Xe.Open) === Xe.Open : e.open)
          , u = q(null)
          , d = X( () => Qn(u));
        if (o({
            el: u,
            $el: u
        }),
        !(e.open !== ao || l !== null))
            throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
        if (typeof c.value != "boolean")
            throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === ao ? void 0 : e.open}`);
        let f = X( () => i.value && c.value ? 0 : 1)
          , p = X( () => f.value === 0)
          , m = X( () => s.value > 1)
          , b = be(hi, null) !== null
          , [w,E] = S_()
          , {resolveContainers: _, mainTreeNodeRef: h, MainTreeNode: g} = $_({
            portals: w,
            defaultContainers: [X( () => {
                var O;
                return (O = R.panelRef.value) != null ? O : u.value
            }
            )]
        })
          , A = X( () => m.value ? "parent" : "leaf")
          , M = X( () => l !== null ? (l.value & Xe.Closing) === Xe.Closing : !1)
          , I = X( () => b || M.value ? !1 : p.value)
          , P = X( () => {
            var O, B, J;
            return (J = Array.from((B = (O = d.value) == null ? void 0 : O.querySelectorAll("body > *")) != null ? B : []).find(le => le.id === "headlessui-portal-root" ? !1 : le.contains(Re(h)) && le instanceof HTMLElement)) != null ? J : null
        }
        );
        gc(P, I);
        let T = X( () => m.value ? !0 : p.value)
          , C = X( () => {
            var O, B, J;
            return (J = Array.from((B = (O = d.value) == null ? void 0 : O.querySelectorAll("[data-headlessui-portal]")) != null ? B : []).find(le => le.contains(Re(h)) && le instanceof HTMLElement)) != null ? J : null
        }
        );
        gc(C, T),
        P_({
            type: "Dialog",
            enabled: X( () => f.value === 0),
            element: u,
            onUpdate: (O, B) => {
                if (B === "Dialog")
                    return Ct(O, {
                        [mi.Add]: () => s.value += 1,
                        [mi.Remove]: () => s.value -= 1
                    })
            }
        });
        let F = M_({
            name: "DialogDescription",
            slot: X( () => ({
                open: c.value
            }))
        })
          , S = q(null)
          , R = {
            titleId: S,
            panelRef: q(null),
            dialogState: f,
            setTitleId(O) {
                S.value !== O && (S.value = O)
            },
            close() {
                t("close", !1)
            }
        };
        $e(hi, R);
        let V = X( () => !(!p.value || m.value));
        f_(_, (O, B) => {
            R.close(),
            lt( () => B == null ? void 0 : B.focus())
        }
        , V);
        let $ = X( () => !(m.value || f.value !== 0));
        df((a = d.value) == null ? void 0 : a.defaultView, "keydown", O => {
            $.value && (O.defaultPrevented || O.key === Co.Escape && (O.preventDefault(),
            O.stopPropagation(),
            R.close()))
        }
        );
        let k = X( () => !(M.value || f.value !== 0 || b));
        return F_(d, k, O => {
            var B;
            return {
                containers: [...(B = O.containers) != null ? B : [], _]
            }
        }
        ),
        Ge(O => {
            if (f.value !== 0)
                return;
            let B = Re(u);
            if (!B)
                return;
            let J = new ResizeObserver(le => {
                for (let De of le) {
                    let de = De.target.getBoundingClientRect();
                    de.x === 0 && de.y === 0 && de.width === 0 && de.height === 0 && R.close()
                }
            }
            );
            J.observe(B),
            O( () => J.disconnect())
        }
        ),
        () => {
            let {id: O, open: B, initialFocus: J, ...le} = e
              , De = {
                ...n,
                ref: u,
                id: O,
                role: "dialog",
                "aria-modal": f.value === 0 ? !0 : void 0,
                "aria-labelledby": S.value,
                "aria-describedby": F.value
            }
              , de = {
                open: f.value === 0
            };
            return ge(yc, {
                force: !0
            }, () => [ge(T_, () => ge(x_, {
                target: u.value
            }, () => ge(yc, {
                force: !1
            }, () => ge(or, {
                initialFocus: J,
                containers: _,
                features: p.value ? Ct(A.value, {
                    parent: or.features.RestoreFocus,
                    leaf: or.features.All & ~or.features.FocusLock
                }) : or.features.None
            }, () => ge(E, {}, () => _t({
                ourProps: De,
                theirProps: {
                    ...le,
                    ...n
                },
                slot: de,
                attrs: n,
                slots: r,
                visible: f.value === 0,
                features: xo.RenderStrategy | xo.Static,
                name: "Dialog"
            })))))), ge(g)])
        }
    }
})
  , j_ = he({
    name: "DialogPanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        id: {
            type: String,
            default: () => `headlessui-dialog-panel-${Hr()}`
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        let o = Es("DialogPanel");
        r({
            el: o.panelRef,
            $el: o.panelRef
        });
        function a(i) {
            i.stopPropagation()
        }
        return () => {
            let {id: i, ...s} = e
              , l = {
                id: i,
                ref: o.panelRef,
                onClick: a
            };
            return _t({
                ourProps: l,
                theirProps: s,
                slot: {
                    open: o.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogPanel"
            })
        }
    }
})
  , V_ = he({
    name: "DialogTitle",
    props: {
        as: {
            type: [Object, String],
            default: "h2"
        },
        id: {
            type: String,
            default: () => `headlessui-dialog-title-${Hr()}`
        }
    },
    setup(e, {attrs: t, slots: n}) {
        let r = Es("DialogTitle");
        return xe( () => {
            r.setTitleId(e.id),
            tt( () => r.setTitleId(null))
        }
        ),
        () => {
            let {id: o, ...a} = e;
            return _t({
                ourProps: {
                    id: o
                },
                theirProps: a,
                slot: {
                    open: r.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogTitle"
            })
        }
    }
})
  , G_ = Symbol("GroupContext")
  , K_ = he({
    name: "Switch",
    emits: {
        "update:modelValue": e => !0
    },
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        modelValue: {
            type: Boolean,
            default: void 0
        },
        defaultChecked: {
            type: Boolean,
            optional: !0
        },
        form: {
            type: String,
            optional: !0
        },
        name: {
            type: String,
            optional: !0
        },
        value: {
            type: String,
            optional: !0
        },
        id: {
            type: String,
            default: () => `headlessui-switch-${Hr()}`
        }
    },
    inheritAttrs: !1,
    setup(e, {emit: t, attrs: n, slots: r, expose: o}) {
        let a = be(G_, null)
          , [i,s] = h_(X( () => e.modelValue), w => t("update:modelValue", w), X( () => e.defaultChecked));
        function l() {
            s(!i.value)
        }
        let c = q(null)
          , u = a === null ? c : a.switchRef
          , d = t_(X( () => ({
            as: e.as,
            type: n.type
        })), u);
        o({
            el: u,
            $el: u
        });
        function f(w) {
            w.preventDefault(),
            l()
        }
        function p(w) {
            w.key === Co.Space ? (w.preventDefault(),
            l()) : w.key === Co.Enter && m_(w.currentTarget)
        }
        function m(w) {
            w.preventDefault()
        }
        let b = X( () => {
            var w, E;
            return (E = (w = Re(u)) == null ? void 0 : w.closest) == null ? void 0 : E.call(w, "form")
        }
        );
        return xe( () => {
            Pe([b], () => {
                if (!b.value || e.defaultChecked === void 0)
                    return;
                function w() {
                    s(e.defaultChecked)
                }
                return b.value.addEventListener("reset", w),
                () => {
                    var E;
                    (E = b.value) == null || E.removeEventListener("reset", w)
                }
            }
            , {
                immediate: !0
            })
        }
        ),
        () => {
            let {id: w, name: E, value: _, form: h, ...g} = e
              , A = {
                checked: i.value
            }
              , M = {
                id: w,
                ref: u,
                role: "switch",
                type: d.value,
                tabIndex: 0,
                "aria-checked": i.value,
                "aria-labelledby": a == null ? void 0 : a.labelledby.value,
                "aria-describedby": a == null ? void 0 : a.describedby.value,
                onClick: f,
                onKeyup: p,
                onKeypress: m
            };
            return ge(we, [E != null && i.value != null ? ge(Po, J1({
                features: Or.Hidden,
                as: "input",
                type: "checkbox",
                hidden: !0,
                readOnly: !0,
                checked: i.value,
                form: h,
                name: E,
                value: _
            })) : null, _t({
                ourProps: M,
                theirProps: {
                    ...n,
                    ..._s(g, ["modelValue", "defaultChecked"])
                },
                slot: A,
                attrs: n,
                slots: r,
                name: "Switch"
            })])
        }
    }
});
function z_(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called)
            return t.called = !0,
            e(...n)
    }
}
function ka(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}
function io(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var gi = (e => (e.Finished = "finished",
e.Cancelled = "cancelled",
e))(gi || {});
function W_(e, t) {
    let n = Vr();
    if (!e)
        return n.dispose;
    let {transitionDuration: r, transitionDelay: o} = getComputedStyle(e)
      , [a,i] = [r, o].map(s => {
        let[l=0] = s.split(",").filter(Boolean).map(c => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort( (c, u) => u - c);
        return l
    }
    );
    return a !== 0 ? n.setTimeout( () => t("finished"), a + i) : t("finished"),
    n.add( () => t("cancelled")),
    n.dispose
}
function bc(e, t, n, r, o, a) {
    let i = Vr()
      , s = a !== void 0 ? z_(a) : () => {}
    ;
    return io(e, ...o),
    ka(e, ...t, ...n),
    i.nextFrame( () => {
        io(e, ...n),
        ka(e, ...r),
        i.add(W_(e, l => (io(e, ...r, ...t),
        ka(e, ...o),
        s(l))))
    }
    ),
    i.add( () => io(e, ...t, ...n, ...r, ...o)),
    i.add( () => s("cancelled")),
    i.dispose
}
function cn(e="") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let ks = Symbol("TransitionContext");
var q_ = (e => (e.Visible = "visible",
e.Hidden = "hidden",
e))(q_ || {});
function J_() {
    return be(ks, null) !== null
}
function Y_() {
    let e = be(ks, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
function Z_() {
    let e = be(Ts, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
let Ts = Symbol("NestingContext");
function Zo(e) {
    return "children"in e ? Zo(e.children) : e.value.filter( ({state: t}) => t === "visible").length > 0
}
function bf(e) {
    let t = q([])
      , n = q(!1);
    xe( () => n.value = !0),
    tt( () => n.value = !1);
    function r(a, i=Zt.Hidden) {
        let s = t.value.findIndex( ({id: l}) => l === a);
        s !== -1 && (Ct(i, {
            [Zt.Unmount]() {
                t.value.splice(s, 1)
            },
            [Zt.Hidden]() {
                t.value[s].state = "hidden"
            }
        }),
        !Zo(t) && n.value && (e == null || e()))
    }
    function o(a) {
        let i = t.value.find( ({id: s}) => s === a);
        return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({
            id: a,
            state: "visible"
        }),
        () => r(a, Zt.Unmount)
    }
    return {
        children: t,
        register: o,
        unregister: r
    }
}
let vf = xo.RenderStrategy
  , yi = he({
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: r, expose: o}) {
        let a = q(0);
        function i() {
            a.value |= Xe.Opening,
            t("beforeEnter")
        }
        function s() {
            a.value &= ~Xe.Opening,
            t("afterEnter")
        }
        function l() {
            a.value |= Xe.Closing,
            t("beforeLeave")
        }
        function c() {
            a.value &= ~Xe.Closing,
            t("afterLeave")
        }
        if (!J_() && X1())
            return () => ge(_f, {
                ...e,
                onBeforeEnter: i,
                onAfterEnter: s,
                onBeforeLeave: l,
                onAfterLeave: c
            }, r);
        let u = q(null)
          , d = X( () => e.unmount ? Zt.Unmount : Zt.Hidden);
        o({
            el: u,
            $el: u
        });
        let {show: f, appear: p} = Y_()
          , {register: m, unregister: b} = Z_()
          , w = q(f.value ? "visible" : "hidden")
          , E = {
            value: !0
        }
          , _ = Hr()
          , h = {
            value: !1
        }
          , g = bf( () => {
            !h.value && w.value !== "hidden" && (w.value = "hidden",
            b(_),
            c())
        }
        );
        xe( () => {
            let R = m(_);
            tt(R)
        }
        ),
        Ge( () => {
            if (d.value === Zt.Hidden && _) {
                if (f.value && w.value !== "visible") {
                    w.value = "visible";
                    return
                }
                Ct(w.value, {
                    hidden: () => b(_),
                    visible: () => m(_)
                })
            }
        }
        );
        let A = cn(e.enter)
          , M = cn(e.enterFrom)
          , I = cn(e.enterTo)
          , P = cn(e.entered)
          , T = cn(e.leave)
          , C = cn(e.leaveFrom)
          , F = cn(e.leaveTo);
        xe( () => {
            Ge( () => {
                if (w.value === "visible") {
                    let R = Re(u);
                    if (R instanceof Comment && R.data === "")
                        throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }
            }
            )
        }
        );
        function S(R) {
            let V = E.value && !p.value
              , $ = Re(u);
            !$ || !($ instanceof HTMLElement) || V || (h.value = !0,
            f.value && i(),
            f.value || l(),
            R(f.value ? bc($, A, M, I, P, k => {
                h.value = !1,
                k === gi.Finished && s()
            }
            ) : bc($, T, C, F, P, k => {
                h.value = !1,
                k === gi.Finished && (Zo(g) || (w.value = "hidden",
                b(_),
                c()))
            }
            )))
        }
        return xe( () => {
            Pe([f], (R, V, $) => {
                S($),
                E.value = !1
            }
            , {
                immediate: !0
            })
        }
        ),
        $e(Ts, g),
        e_(X( () => Ct(w.value, {
            visible: Xe.Open,
            hidden: Xe.Closed
        }) | a.value)),
        () => {
            let {appear: R, show: V, enter: $, enterFrom: k, enterTo: O, entered: B, leave: J, leaveFrom: le, leaveTo: De, ...de} = e
              , Je = {
                ref: u
            }
              , ut = {
                ...de,
                ...p.value && f.value && jr.isServer ? {
                    class: gt([n.class, de.class, ...A, ...M])
                } : {}
            };
            return _t({
                theirProps: ut,
                ourProps: Je,
                slot: {},
                slots: r,
                attrs: n,
                features: vf,
                visible: w.value === "visible",
                name: "TransitionChild"
            })
        }
    }
})
  , Q_ = yi
  , _f = he({
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: r}) {
        let o = As()
          , a = X( () => e.show === null && o !== null ? (o.value & Xe.Open) === Xe.Open : e.show);
        Ge( () => {
            if (![!0, !1].includes(a.value))
                throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
        }
        );
        let i = q(a.value ? "visible" : "hidden")
          , s = bf( () => {
            i.value = "hidden"
        }
        )
          , l = q(!0)
          , c = {
            show: a,
            appear: X( () => e.appear || !l.value)
        };
        return xe( () => {
            Ge( () => {
                l.value = !1,
                a.value ? i.value = "visible" : Zo(s) || (i.value = "hidden")
            }
            )
        }
        ),
        $e(Ts, s),
        $e(ks, c),
        () => {
            let u = _s(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"])
              , d = {
                unmount: e.unmount
            };
            return _t({
                ourProps: {
                    ...d,
                    as: "template"
                },
                theirProps: {},
                slot: {},
                slots: {
                    ...r,
                    default: () => [ge(Q_, {
                        onBeforeEnter: () => t("beforeEnter"),
                        onAfterEnter: () => t("afterEnter"),
                        onBeforeLeave: () => t("beforeLeave"),
                        onAfterLeave: () => t("afterLeave"),
                        ...n,
                        ...d,
                        ...u
                    }, r.default)]
                },
                attrs: {},
                features: vf,
                visible: i.value === "visible",
                name: "Transition"
            })
        }
    }
});
const X_ = {
    class: "lg:sticky top-0 z-50"
}
  , eA = {
    class: "flex h-[50px] w-full bg-white dark:bg-gray-900 border-b border-t border-gray-300 dark:border-gray-700"
}
  , tA = {
    class: "flex items-center mx-auto max-w-screen-2xl w-full px-6"
}
  , nA = {
    href: "/",
    class: "xl:hidden"
}
  , rA = ["src"]
  , oA = {
    key: 0,
    class: "flex gap-2 items-center ml-auto"
}
  , aA = {
    class: "flex items-center ml-auto"
}
  , iA = he({
    __name: "TheToolbar",
    setup(e) {
        const t = q1()
          , n = Qd()
          , r = q(t.value === "dark")
          , o = q()
          , a = X( () => t.preference === "dark" ? "/img/logo-light.svg" : "/img/logo-dark.svg")
          , i = X( () => {
            if (o.value)
                return `top: ${o.value.clientHeight}px`
        }
        );
        function s() {
            n.toggle()
        }
        return xe( () => {
            t.preference = t.value,
            r.value = t.value === "dark"
        }
        ),
        Pe(r, l => {
            t.preference = l ? "dark" : "light"
        }
        ),
        (l, c) => {
            const u = W1
              , d = ss;
            return ne(),
            ue("div", X_, [Q("div", {
                style: Lo(K(i))
            }, [Q("div", eA, [Q("div", tA, [Q("button", {
                class: "mr-1 xl:hidden",
                onClick: s
            }, [ie(K(a1), {
                class: "text-black dark:text-white h-6 w-6"
            })]), Q("a", nA, [Q("img", {
                class: "ml-4 w-[150px]",
                src: K(a),
                alt: "Web Code Tools logo",
                height: "14",
                width: "138",
                onClick: s
            }, null, 8, rA)]), ie(u), ie(d, null, {
                default: Ie( () => [l.$colorMode.unknown ? yt("", !0) : (ne(),
                ue("div", oA, [Q("div", aA, [ie(K(d1), {
                    class: "h-5"
                }), l.$colorMode.unknown ? yt("", !0) : (ne(),
                et(K(K_), {
                    key: 0,
                    modelValue: K(r),
                    "onUpdate:modelValue": c[0] || (c[0] = f => Ce(r) ? r.value = f : null),
                    class: gt([K(r) ? "bg-blue-500" : "bg-gray-300", "mx-2 relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer"]),
                    "aria-label": `Switch to ${K(r) ? "light" : "dark"} mode`
                }, {
                    default: Ie( () => [Q("span", {
                        class: gt([K(r) ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out"])
                    }, null, 2)]),
                    _: 1
                }, 8, ["modelValue", "class", "aria-label"])), ie(K(u1), {
                    class: "h-4"
                })])]))]),
                _: 1
            })])])], 4)])
        }
    }
})
  , Ss = he({
    __name: "AppButton",
    props: {
        noPadding: {
            type: Boolean
        },
        size: {
            default: "default"
        },
        to: {
            default: void 0
        },
        target: {
            default: "_self"
        },
        variant: {
            default: "primary"
        }
    },
    setup(e) {
        const t = e
          , n = X( () => ({
            "!p-0": t.noPadding
        }))
          , r = X( () => {
            switch (t.size) {
            case "sm":
                return "text-xs px-3 py-1";
            default:
                return "text-sm px-4 py-2"
            }
        }
        )
          , o = X( () => ({
            "text-white bg-blue-500 hover:bg-blue-400 border border-transparent shadow-sm rounded-md": t.variant === "primary",
            "text-black bg-gray-50 hover:bg-gray-100 border border-transparent shadow-sm rounded-md": t.variant === "secondary",
            "border border-current hover:opacity-80 shadow-sm rounded-md": t.variant === "outline",
            "text-blue-500 dark:text-blue-200 hover:text-blue-400 dark:hover:text-blue-100 font-bold": t.variant === "link"
        }));
        return (a, i) => (ne(),
        et(Bi(a.to ? "a" : "button"), {
            href: a.to,
            target: a.target,
            class: gt(["inline-block font-bold disabled:opacity-50 disabled:cursor-not-allowed no-underline active:scale-[0.98] text-center transition", [K(n), K(r), K(o)]])
        }, {
            default: Ie( () => [Jp(a.$slots, "default")]),
            _: 3
        }, 8, ["href", "target", "class"]))
    }
})
  , xs = zo("consent", () => {
    const e = q(!1)
      , t = Vb("wct-consent", {
        path: "/",
        maxAge: 31536e3
    });
    let n;
    t.value ? n = t.value : n = {
        advertisement: !0,
        analytics: !0,
        functional: !0
    };
    const r = q(n);
    function o(c) {
        r.value = c
    }
    function a() {
        t.value = JSON.stringify(r.value)
    }
    function i() {
        window.dataLayer.push({
            event: "consent_choice"
        }),
        window.dataLayer.push({
            event: "consent_updated"
        }),
        typeof ezConsentCategories == "object" && typeof __ezconsent == "object" && (window.ezConsentCategories.preferences = r.value.functional,
        window.ezConsentCategories.statistics = r.value.analytics,
        window.ezConsentCategories.marketing = r.value.advertisement,
        __ezconsent.setEzoicConsentSettings(window.ezConsentCategories)),
        r.value.analytics && window.clarity("consent")
    }
    function s() {
        e.value = !0
    }
    function l() {
        e.value = !1
    }
    return {
        consentCookie: t,
        preferences: r,
        setPreferences: o,
        setConsentCookie: a,
        setConsentSettings: i,
        isDialogOpen: e,
        openDialog: s,
        closeDialog: l
    }
}
)
  , sA = [{
    code: "AD",
    name: "Andorra"
}, {
    code: "AE",
    name: "United Arab Emirates"
}, {
    code: "AF",
    name: "Afghanistan"
}, {
    code: "AG",
    name: "Antigua and Barbuda"
}, {
    code: "AI",
    name: "Anguilla"
}, {
    code: "AL",
    name: "Albania"
}, {
    code: "AM",
    name: "Armenia"
}, {
    code: "AO",
    name: "Angola"
}, {
    code: "AQ",
    name: "Antarctica"
}, {
    code: "AR",
    name: "Argentina"
}, {
    code: "AS",
    name: "American Samoa"
}, {
    code: "AT",
    name: "Austria"
}, {
    code: "AU",
    name: "Australia"
}, {
    code: "AW",
    name: "Aruba"
}, {
    code: "AX",
    name: "Åland Islands"
}, {
    code: "AZ",
    name: "Azerbaijan"
}, {
    code: "BA",
    name: "Bosnia and Herzegovina"
}, {
    code: "BB",
    name: "Barbados"
}, {
    code: "BD",
    name: "Bangladesh"
}, {
    code: "BE",
    name: "Belgium"
}, {
    code: "BF",
    name: "Burkina Faso"
}, {
    code: "BG",
    name: "Bulgaria"
}, {
    code: "BH",
    name: "Bahrain"
}, {
    code: "BI",
    name: "Burundi"
}, {
    code: "BJ",
    name: "Benin"
}, {
    code: "BL",
    name: "Saint Barthélemy"
}, {
    code: "BM",
    name: "Bermuda"
}, {
    code: "BN",
    name: "Brunei Darussalam"
}, {
    code: "BO",
    name: "Bolivia, Plurinational State of"
}, {
    code: "BQ",
    name: "Bonaire, Sint Eustatius and Saba"
}, {
    code: "BR",
    name: "Brazil"
}, {
    code: "BS",
    name: "Bahamas"
}, {
    code: "BT",
    name: "Bhutan"
}, {
    code: "BV",
    name: "Bouvet Island"
}, {
    code: "BW",
    name: "Botswana"
}, {
    code: "BY",
    name: "Belarus"
}, {
    code: "BZ",
    name: "Belize"
}, {
    code: "CA",
    name: "Canada"
}, {
    code: "CC",
    name: "Cocos (Keeling) Islands"
}, {
    code: "CD",
    name: "Congo, Democratic Republic of the"
}, {
    code: "CF",
    name: "Central African Republic"
}, {
    code: "CG",
    name: "Congo"
}, {
    code: "CH",
    name: "Switzerland"
}, {
    code: "CI",
    name: "Côte d'Ivoire"
}, {
    code: "CK",
    name: "Cook Islands"
}, {
    code: "CL",
    name: "Chile"
}, {
    code: "CM",
    name: "Cameroon"
}, {
    code: "CN",
    name: "China"
}, {
    code: "CO",
    name: "Colombia"
}, {
    code: "CR",
    name: "Costa Rica"
}, {
    code: "CU",
    name: "Cuba"
}, {
    code: "CV",
    name: "Cabo Verde"
}, {
    code: "CW",
    name: "Curaçao"
}, {
    code: "CX",
    name: "Christmas Island"
}, {
    code: "CY",
    name: "Cyprus"
}, {
    code: "CZ",
    name: "Czechia"
}, {
    code: "DE",
    name: "Germany"
}, {
    code: "DJ",
    name: "Djibouti"
}, {
    code: "DK",
    name: "Denmark"
}, {
    code: "DM",
    name: "Dominica"
}, {
    code: "DO",
    name: "Dominican Republic"
}, {
    code: "DZ",
    name: "Algeria"
}, {
    code: "EC",
    name: "Ecuador"
}, {
    code: "EE",
    name: "Estonia"
}, {
    code: "EG",
    name: "Egypt"
}, {
    code: "EH",
    name: "Western Sahara"
}, {
    code: "ER",
    name: "Eritrea"
}, {
    code: "ES",
    name: "Spain"
}, {
    code: "ET",
    name: "Ethiopia"
}, {
    code: "FI",
    name: "Finland"
}, {
    code: "FJ",
    name: "Fiji"
}, {
    code: "FK",
    name: "Falkland Islands (Malvinas)"
}, {
    code: "FM",
    name: "Micronesia, Federated States of"
}, {
    code: "FO",
    name: "Faroe Islands"
}, {
    code: "FR",
    name: "France"
}, {
    code: "GA",
    name: "Gabon"
}, {
    code: "GB",
    name: "United Kingdom of Great Britain and Northern Ireland"
}, {
    code: "GD",
    name: "Grenada"
}, {
    code: "GE",
    name: "Georgia"
}, {
    code: "GF",
    name: "French Guiana"
}, {
    code: "GG",
    name: "Guernsey"
}, {
    code: "GH",
    name: "Ghana"
}, {
    code: "GI",
    name: "Gibraltar"
}, {
    code: "GL",
    name: "Greenland"
}, {
    code: "GM",
    name: "Gambia"
}, {
    code: "GN",
    name: "Guinea"
}, {
    code: "GP",
    name: "Guadeloupe"
}, {
    code: "GQ",
    name: "Equatorial Guinea"
}, {
    code: "GR",
    name: "Greece"
}, {
    code: "GS",
    name: "South Georgia and the South Sandwich Islands"
}, {
    code: "GT",
    name: "Guatemala"
}, {
    code: "GU",
    name: "Guam"
}, {
    code: "GW",
    name: "Guinea-Bissau"
}, {
    code: "GY",
    name: "Guyana"
}, {
    code: "HK",
    name: "Hong Kong"
}, {
    code: "HM",
    name: "Heard Island and McDonald Islands"
}, {
    code: "HN",
    name: "Honduras"
}, {
    code: "HR",
    name: "Croatia"
}, {
    code: "HT",
    name: "Haiti"
}, {
    code: "HU",
    name: "Hungary"
}, {
    code: "ID",
    name: "Indonesia"
}, {
    code: "IE",
    name: "Ireland"
}, {
    code: "IL",
    name: "Israel"
}, {
    code: "IM",
    name: "Isle of Man"
}, {
    code: "IN",
    name: "India"
}, {
    code: "IO",
    name: "British Indian Ocean Territory"
}, {
    code: "IQ",
    name: "Iraq"
}, {
    code: "IR",
    name: "Iran, Islamic Republic of"
}, {
    code: "IS",
    name: "Iceland"
}, {
    code: "IT",
    name: "Italy"
}, {
    code: "JE",
    name: "Jersey"
}, {
    code: "JM",
    name: "Jamaica"
}, {
    code: "JO",
    name: "Jordan"
}, {
    code: "JP",
    name: "Japan"
}, {
    code: "KE",
    name: "Kenya"
}, {
    code: "KG",
    name: "Kyrgyzstan"
}, {
    code: "KH",
    name: "Cambodia"
}, {
    code: "KI",
    name: "Kiribati"
}, {
    code: "KM",
    name: "Comoros"
}, {
    code: "KN",
    name: "Saint Kitts and Nevis"
}, {
    code: "KP",
    name: "Korea, Democratic People's Republic of"
}, {
    code: "KR",
    name: "Korea, Republic of"
}, {
    code: "KW",
    name: "Kuwait"
}, {
    code: "KY",
    name: "Cayman Islands"
}, {
    code: "KZ",
    name: "Kazakhstan"
}, {
    code: "LA",
    name: "Lao People's Democratic Republic"
}, {
    code: "LB",
    name: "Lebanon"
}, {
    code: "LC",
    name: "Saint Lucia"
}, {
    code: "LI",
    name: "Liechtenstein"
}, {
    code: "LK",
    name: "Sri Lanka"
}, {
    code: "LR",
    name: "Liberia"
}, {
    code: "LS",
    name: "Lesotho"
}, {
    code: "LT",
    name: "Lithuania"
}, {
    code: "LU",
    name: "Luxembourg"
}, {
    code: "LV",
    name: "Latvia"
}, {
    code: "LY",
    name: "Libya"
}, {
    code: "MA",
    name: "Morocco"
}, {
    code: "MC",
    name: "Monaco"
}, {
    code: "MD",
    name: "Moldova, Republic of"
}, {
    code: "ME",
    name: "Montenegro"
}, {
    code: "MF",
    name: "Saint Martin, (French part)"
}, {
    code: "MG",
    name: "Madagascar"
}, {
    code: "MH",
    name: "Marshall Islands"
}, {
    code: "MK",
    name: "North Macedonia"
}, {
    code: "ML",
    name: "Mali"
}, {
    code: "MM",
    name: "Myanmar"
}, {
    code: "MN",
    name: "Mongolia"
}, {
    code: "MO",
    name: "Macao"
}, {
    code: "MP",
    name: "Northern Mariana Islands"
}, {
    code: "MQ",
    name: "Martinique"
}, {
    code: "MR",
    name: "Mauritania"
}, {
    code: "MS",
    name: "Montserrat"
}, {
    code: "MT",
    name: "Malta"
}, {
    code: "MU",
    name: "Mauritius"
}, {
    code: "MV",
    name: "Maldives"
}, {
    code: "MW",
    name: "Malawi"
}, {
    code: "MX",
    name: "Mexico"
}, {
    code: "MY",
    name: "Malaysia"
}, {
    code: "MZ",
    name: "Mozambique"
}, {
    code: "NA",
    name: "Namibia"
}, {
    code: "NC",
    name: "New Caledonia"
}, {
    code: "NE",
    name: "Niger"
}, {
    code: "NF",
    name: "Norfolk Island"
}, {
    code: "NG",
    name: "Nigeria"
}, {
    code: "NI",
    name: "Nicaragua"
}, {
    code: "NL",
    name: "Netherlands"
}, {
    code: "NO",
    name: "Norway"
}, {
    code: "NP",
    name: "Nepal"
}, {
    code: "NR",
    name: "Nauru"
}, {
    code: "NU",
    name: "Niue"
}, {
    code: "NZ",
    name: "New Zealand"
}, {
    code: "OM",
    name: "Oman"
}, {
    code: "PA",
    name: "Panama"
}, {
    code: "PE",
    name: "Peru"
}, {
    code: "PF",
    name: "French Polynesia"
}, {
    code: "PG",
    name: "Papua New Guinea"
}, {
    code: "PH",
    name: "Philippines"
}, {
    code: "PK",
    name: "Pakistan"
}, {
    code: "PL",
    name: "Poland"
}, {
    code: "PM",
    name: "Saint Pierre and Miquelon"
}, {
    code: "PN",
    name: "Pitcairn"
}, {
    code: "PR",
    name: "Puerto Rico"
}, {
    code: "PS",
    name: "Palestine, State of"
}, {
    code: "PT",
    name: "Portugal"
}, {
    code: "PW",
    name: "Palau"
}, {
    code: "PY",
    name: "Paraguay"
}, {
    code: "QA",
    name: "Qatar"
}, {
    code: "RE",
    name: "Réunion"
}, {
    code: "RO",
    name: "Romania"
}, {
    code: "RS",
    name: "Serbia"
}, {
    code: "RU",
    name: "Russian Federation"
}, {
    code: "RW",
    name: "Rwanda"
}, {
    code: "SA",
    name: "Saudi Arabia"
}, {
    code: "SB",
    name: "Solomon Islands"
}, {
    code: "SC",
    name: "Seychelles"
}, {
    code: "SD",
    name: "Sudan"
}, {
    code: "SE",
    name: "Sweden"
}, {
    code: "SG",
    name: "Singapore"
}, {
    code: "SH",
    name: "Saint Helena, Ascension and Tristan da Cunha"
}, {
    code: "SI",
    name: "Slovenia"
}, {
    code: "SJ",
    name: "Svalbard and Jan Mayen"
}, {
    code: "SK",
    name: "Slovakia"
}, {
    code: "SL",
    name: "Sierra Leone"
}, {
    code: "SM",
    name: "San Marino"
}, {
    code: "SN",
    name: "Senegal"
}, {
    code: "SO",
    name: "Somalia"
}, {
    code: "SR",
    name: "Suriname"
}, {
    code: "SS",
    name: "South Sudan"
}, {
    code: "ST",
    name: "Sao Tome and Principe"
}, {
    code: "SV",
    name: "El Salvador"
}, {
    code: "SX",
    name: "Sint Maarten, (Dutch part)"
}, {
    code: "SY",
    name: "Syrian Arab Republic"
}, {
    code: "SZ",
    name: "Eswatini"
}, {
    code: "TC",
    name: "Turks and Caicos Islands"
}, {
    code: "TD",
    name: "Chad"
}, {
    code: "TF",
    name: "French Southern Territories"
}, {
    code: "TG",
    name: "Togo"
}, {
    code: "TH",
    name: "Thailand"
}, {
    code: "TJ",
    name: "Tajikistan"
}, {
    code: "TK",
    name: "Tokelau"
}, {
    code: "TL",
    name: "Timor-Leste"
}, {
    code: "TM",
    name: "Turkmenistan"
}, {
    code: "TN",
    name: "Tunisia"
}, {
    code: "TO",
    name: "Tonga"
}, {
    code: "TR",
    name: "Türkiye"
}, {
    code: "TT",
    name: "Trinidad and Tobago"
}, {
    code: "TV",
    name: "Tuvalu"
}, {
    code: "TW",
    name: "Taiwan, Province of China"
}, {
    code: "TZ",
    name: "Tanzania, United Republic of"
}, {
    code: "UA",
    name: "Ukraine"
}, {
    code: "UG",
    name: "Uganda"
}, {
    code: "UM",
    name: "United States Minor Outlying Islands"
}, {
    code: "US",
    name: "United States of America"
}, {
    code: "UY",
    name: "Uruguay"
}, {
    code: "UZ",
    name: "Uzbekistan"
}, {
    code: "VA",
    name: "Holy See"
}, {
    code: "VC",
    name: "Saint Vincent and the Grenadines"
}, {
    code: "VE",
    name: "Venezuela, Bolivarian Republic of"
}, {
    code: "VG",
    name: "Virgin Islands, British"
}, {
    code: "VI",
    name: "Virgin Islands, U.S."
}, {
    code: "VN",
    name: "Viet Nam"
}, {
    code: "VU",
    name: "Vanuatu"
}, {
    code: "WF",
    name: "Wallis and Futuna"
}, {
    code: "WS",
    name: "Samoa"
}, {
    code: "YE",
    name: "Yemen"
}, {
    code: "YT",
    name: "Mayotte"
}, {
    code: "ZA",
    name: "South Africa"
}, {
    code: "ZM",
    name: "Zambia"
}, {
    code: "ZW",
    name: "Zimbabwe"
}];
var Af = sA
  , lA = {}
  , wf = {};
Af.forEach(cA);
function cA(e) {
    lA[e.name.toLowerCase()] = e.code,
    wf[e.code.toLowerCase()] = e.name
}
var uA = function(t) {
    return wf[t.toLowerCase()]
}
  , dA = function() {
    return Af.map(function(t) {
        return t.name
    })
}
  , Pt = {};
function fA(e) {
    return e
}
function pA(e, r, o) {
    for (var r = r || fA, o = o || e, a = 0, i = e.length; a < i; a += 1)
        if (r.call(o, e[a], a))
            return e[a]
}
var mA = pA
  , Ef = {
    exports: {}
}
  , kf = Ef.exports = function(e, t) {
    if (typeof e == "function" || t)
        return kf.by(e, t);
    for (var n = {
        object: [],
        function: [],
        string: {},
        number: {},
        boolean: {},
        undefined: {}
    }, r = [], o = 0; o < e.length; o++) {
        var a = e[o]
          , i = a === "__proto__" ? n.objects : n[typeof a] || n.objects;
        Array.isArray(i) ? i.indexOf(a) < 0 && (i.push(a),
        r.push(a)) : Object.hasOwnProperty.call(i, a) || (i[a] = !0,
        r.push(a))
    }
    return r
}
;
kf.by = function(e, t) {
    if (typeof e == "function") {
        var n = t;
        t = e,
        e = n
    }
    for (var r = [], o = 0; o < e.length; o++) {
        for (var a = e[o], i = !1, s = 0; s < r.length; s++) {
            var l = r[s];
            if (t.call(r, a, l)) {
                i = !0;
                break
            }
        }
        i || r.push(a)
    }
    return r
}
;
var hA = Ef.exports
  , gA = [{
    code: "AED",
    number: "784",
    digits: 2,
    currency: "UAE Dirham",
    countries: ["United Arab Emirates (The)"]
}, {
    code: "AFN",
    number: "971",
    digits: 2,
    currency: "Afghani",
    countries: ["Afghanistan"]
}, {
    code: "ALL",
    number: "008",
    digits: 2,
    currency: "Lek",
    countries: ["Albania"]
}, {
    code: "AMD",
    number: "051",
    digits: 2,
    currency: "Armenian Dram",
    countries: ["Armenia"]
}, {
    code: "ANG",
    number: "532",
    digits: 2,
    currency: "Netherlands Antillean Guilder",
    countries: ["Curaçao", "Sint Maarten (Dutch Part)"]
}, {
    code: "AOA",
    number: "973",
    digits: 2,
    currency: "Kwanza",
    countries: ["Angola"]
}, {
    code: "ARS",
    number: "032",
    digits: 2,
    currency: "Argentine Peso",
    countries: ["Argentina"]
}, {
    code: "AUD",
    number: "036",
    digits: 2,
    currency: "Australian Dollar",
    countries: ["Australia", "Christmas Island", "Cocos (Keeling) Islands (The)", "Heard Island and Mcdonald Islands", "Kiribati", "Nauru", "Norfolk Island", "Tuvalu"]
}, {
    code: "AWG",
    number: "533",
    digits: 2,
    currency: "Aruban Florin",
    countries: ["Aruba"]
}, {
    code: "AZN",
    number: "944",
    digits: 2,
    currency: "Azerbaijan Manat",
    countries: ["Azerbaijan"]
}, {
    code: "BAM",
    number: "977",
    digits: 2,
    currency: "Convertible Mark",
    countries: ["Bosnia and Herzegovina"]
}, {
    code: "BBD",
    number: "052",
    digits: 2,
    currency: "Barbados Dollar",
    countries: ["Barbados"]
}, {
    code: "BDT",
    number: "050",
    digits: 2,
    currency: "Taka",
    countries: ["Bangladesh"]
}, {
    code: "BGN",
    number: "975",
    digits: 2,
    currency: "Bulgarian Lev",
    countries: ["Bulgaria"]
}, {
    code: "BHD",
    number: "048",
    digits: 3,
    currency: "Bahraini Dinar",
    countries: ["Bahrain"]
}, {
    code: "BIF",
    number: "108",
    digits: 0,
    currency: "Burundi Franc",
    countries: ["Burundi"]
}, {
    code: "BMD",
    number: "060",
    digits: 2,
    currency: "Bermudian Dollar",
    countries: ["Bermuda"]
}, {
    code: "BND",
    number: "096",
    digits: 2,
    currency: "Brunei Dollar",
    countries: ["Brunei Darussalam"]
}, {
    code: "BOB",
    number: "068",
    digits: 2,
    currency: "Boliviano",
    countries: ["Bolivia (Plurinational State Of)"]
}, {
    code: "BOV",
    number: "984",
    digits: 2,
    currency: "Mvdol",
    countries: ["Bolivia (Plurinational State Of)"]
}, {
    code: "BRL",
    number: "986",
    digits: 2,
    currency: "Brazilian Real",
    countries: ["Brazil"]
}, {
    code: "BSD",
    number: "044",
    digits: 2,
    currency: "Bahamian Dollar",
    countries: ["Bahamas (The)"]
}, {
    code: "BTN",
    number: "064",
    digits: 2,
    currency: "Ngultrum",
    countries: ["Bhutan"]
}, {
    code: "BWP",
    number: "072",
    digits: 2,
    currency: "Pula",
    countries: ["Botswana"]
}, {
    code: "BYN",
    number: "933",
    digits: 2,
    currency: "Belarusian Ruble",
    countries: ["Belarus"]
}, {
    code: "BZD",
    number: "084",
    digits: 2,
    currency: "Belize Dollar",
    countries: ["Belize"]
}, {
    code: "CAD",
    number: "124",
    digits: 2,
    currency: "Canadian Dollar",
    countries: ["Canada"]
}, {
    code: "CDF",
    number: "976",
    digits: 2,
    currency: "Congolese Franc",
    countries: ["Congo (The Democratic Republic of The)"]
}, {
    code: "CHE",
    number: "947",
    digits: 2,
    currency: "WIR Euro",
    countries: ["Switzerland"]
}, {
    code: "CHF",
    number: "756",
    digits: 2,
    currency: "Swiss Franc",
    countries: ["Liechtenstein", "Switzerland"]
}, {
    code: "CHW",
    number: "948",
    digits: 2,
    currency: "WIR Franc",
    countries: ["Switzerland"]
}, {
    code: "CLF",
    number: "990",
    digits: 4,
    currency: "Unidad de Fomento",
    countries: ["Chile"]
}, {
    code: "CLP",
    number: "152",
    digits: 0,
    currency: "Chilean Peso",
    countries: ["Chile"]
}, {
    code: "CNY",
    number: "156",
    digits: 2,
    currency: "Yuan Renminbi",
    countries: ["China"]
}, {
    code: "COP",
    number: "170",
    digits: 2,
    currency: "Colombian Peso",
    countries: ["Colombia"]
}, {
    code: "COU",
    number: "970",
    digits: 2,
    currency: "Unidad de Valor Real",
    countries: ["Colombia"]
}, {
    code: "CRC",
    number: "188",
    digits: 2,
    currency: "Costa Rican Colon",
    countries: ["Costa Rica"]
}, {
    code: "CUC",
    number: "931",
    digits: 2,
    currency: "Peso Convertible",
    countries: ["Cuba"]
}, {
    code: "CUP",
    number: "192",
    digits: 2,
    currency: "Cuban Peso",
    countries: ["Cuba"]
}, {
    code: "CVE",
    number: "132",
    digits: 2,
    currency: "Cabo Verde Escudo",
    countries: ["Cabo Verde"]
}, {
    code: "CZK",
    number: "203",
    digits: 2,
    currency: "Czech Koruna",
    countries: ["Czechia"]
}, {
    code: "DJF",
    number: "262",
    digits: 0,
    currency: "Djibouti Franc",
    countries: ["Djibouti"]
}, {
    code: "DKK",
    number: "208",
    digits: 2,
    currency: "Danish Krone",
    countries: ["Denmark", "Faroe Islands (The)", "Greenland"]
}, {
    code: "DOP",
    number: "214",
    digits: 2,
    currency: "Dominican Peso",
    countries: ["Dominican Republic (The)"]
}, {
    code: "DZD",
    number: "012",
    digits: 2,
    currency: "Algerian Dinar",
    countries: ["Algeria"]
}, {
    code: "EGP",
    number: "818",
    digits: 2,
    currency: "Egyptian Pound",
    countries: ["Egypt"]
}, {
    code: "ERN",
    number: "232",
    digits: 2,
    currency: "Nakfa",
    countries: ["Eritrea"]
}, {
    code: "ETB",
    number: "230",
    digits: 2,
    currency: "Ethiopian Birr",
    countries: ["Ethiopia"]
}, {
    code: "EUR",
    number: "978",
    digits: 2,
    currency: "Euro",
    countries: ["Åland Islands", "Andorra", "Austria", "Belgium", "Cyprus", "Estonia", "European Union", "Finland", "France", "French Guiana", "French Southern Territories (The)", "Germany", "Greece", "Guadeloupe", "Holy See (The)", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Martinique", "Mayotte", "Monaco", "Montenegro", "Netherlands (The)", "Portugal", "Réunion", "Saint Barthélemy", "Saint Martin (French Part)", "Saint Pierre and Miquelon", "San Marino", "Slovakia", "Slovenia", "Spain"]
}, {
    code: "FJD",
    number: "242",
    digits: 2,
    currency: "Fiji Dollar",
    countries: ["Fiji"]
}, {
    code: "FKP",
    number: "238",
    digits: 2,
    currency: "Falkland Islands Pound",
    countries: ["Falkland Islands (The) [Malvinas]"]
}, {
    code: "GBP",
    number: "826",
    digits: 2,
    currency: "Pound Sterling",
    countries: ["Guernsey", "Isle of Man", "Jersey", "United Kingdom of Great Britain and Northern Ireland (The)"]
}, {
    code: "GEL",
    number: "981",
    digits: 2,
    currency: "Lari",
    countries: ["Georgia"]
}, {
    code: "GHS",
    number: "936",
    digits: 2,
    currency: "Ghana Cedi",
    countries: ["Ghana"]
}, {
    code: "GIP",
    number: "292",
    digits: 2,
    currency: "Gibraltar Pound",
    countries: ["Gibraltar"]
}, {
    code: "GMD",
    number: "270",
    digits: 2,
    currency: "Dalasi",
    countries: ["Gambia (The)"]
}, {
    code: "GNF",
    number: "324",
    digits: 0,
    currency: "Guinean Franc",
    countries: ["Guinea"]
}, {
    code: "GTQ",
    number: "320",
    digits: 2,
    currency: "Quetzal",
    countries: ["Guatemala"]
}, {
    code: "GYD",
    number: "328",
    digits: 2,
    currency: "Guyana Dollar",
    countries: ["Guyana"]
}, {
    code: "HKD",
    number: "344",
    digits: 2,
    currency: "Hong Kong Dollar",
    countries: ["Hong Kong"]
}, {
    code: "HNL",
    number: "340",
    digits: 2,
    currency: "Lempira",
    countries: ["Honduras"]
}, {
    code: "HRK",
    number: "191",
    digits: 2,
    currency: "Kuna",
    countries: ["Croatia"]
}, {
    code: "HTG",
    number: "332",
    digits: 2,
    currency: "Gourde",
    countries: ["Haiti"]
}, {
    code: "HUF",
    number: "348",
    digits: 2,
    currency: "Forint",
    countries: ["Hungary"]
}, {
    code: "IDR",
    number: "360",
    digits: 2,
    currency: "Rupiah",
    countries: ["Indonesia"]
}, {
    code: "ILS",
    number: "376",
    digits: 2,
    currency: "New Israeli Sheqel",
    countries: ["Israel"]
}, {
    code: "INR",
    number: "356",
    digits: 2,
    currency: "Indian Rupee",
    countries: ["Bhutan", "India"]
}, {
    code: "IQD",
    number: "368",
    digits: 3,
    currency: "Iraqi Dinar",
    countries: ["Iraq"]
}, {
    code: "IRR",
    number: "364",
    digits: 2,
    currency: "Iranian Rial",
    countries: ["Iran (Islamic Republic Of)"]
}, {
    code: "ISK",
    number: "352",
    digits: 0,
    currency: "Iceland Krona",
    countries: ["Iceland"]
}, {
    code: "JMD",
    number: "388",
    digits: 2,
    currency: "Jamaican Dollar",
    countries: ["Jamaica"]
}, {
    code: "JOD",
    number: "400",
    digits: 3,
    currency: "Jordanian Dinar",
    countries: ["Jordan"]
}, {
    code: "JPY",
    number: "392",
    digits: 0,
    currency: "Yen",
    countries: ["Japan"]
}, {
    code: "KES",
    number: "404",
    digits: 2,
    currency: "Kenyan Shilling",
    countries: ["Kenya"]
}, {
    code: "KGS",
    number: "417",
    digits: 2,
    currency: "Som",
    countries: ["Kyrgyzstan"]
}, {
    code: "KHR",
    number: "116",
    digits: 2,
    currency: "Riel",
    countries: ["Cambodia"]
}, {
    code: "KMF",
    number: "174",
    digits: 0,
    currency: "Comorian Franc ",
    countries: ["Comoros (The)"]
}, {
    code: "KPW",
    number: "408",
    digits: 2,
    currency: "North Korean Won",
    countries: ["Korea (The Democratic People’s Republic Of)"]
}, {
    code: "KRW",
    number: "410",
    digits: 0,
    currency: "Won",
    countries: ["Korea (The Republic Of)"]
}, {
    code: "KWD",
    number: "414",
    digits: 3,
    currency: "Kuwaiti Dinar",
    countries: ["Kuwait"]
}, {
    code: "KYD",
    number: "136",
    digits: 2,
    currency: "Cayman Islands Dollar",
    countries: ["Cayman Islands (The)"]
}, {
    code: "KZT",
    number: "398",
    digits: 2,
    currency: "Tenge",
    countries: ["Kazakhstan"]
}, {
    code: "LAK",
    number: "418",
    digits: 2,
    currency: "Lao Kip",
    countries: ["Lao People’s Democratic Republic (The)"]
}, {
    code: "LBP",
    number: "422",
    digits: 2,
    currency: "Lebanese Pound",
    countries: ["Lebanon"]
}, {
    code: "LKR",
    number: "144",
    digits: 2,
    currency: "Sri Lanka Rupee",
    countries: ["Sri Lanka"]
}, {
    code: "LRD",
    number: "430",
    digits: 2,
    currency: "Liberian Dollar",
    countries: ["Liberia"]
}, {
    code: "LSL",
    number: "426",
    digits: 2,
    currency: "Loti",
    countries: ["Lesotho"]
}, {
    code: "LYD",
    number: "434",
    digits: 3,
    currency: "Libyan Dinar",
    countries: ["Libya"]
}, {
    code: "MAD",
    number: "504",
    digits: 2,
    currency: "Moroccan Dirham",
    countries: ["Morocco", "Western Sahara"]
}, {
    code: "MDL",
    number: "498",
    digits: 2,
    currency: "Moldovan Leu",
    countries: ["Moldova (The Republic Of)"]
}, {
    code: "MGA",
    number: "969",
    digits: 2,
    currency: "Malagasy Ariary",
    countries: ["Madagascar"]
}, {
    code: "MKD",
    number: "807",
    digits: 2,
    currency: "Denar",
    countries: ["Macedonia (The Former Yugoslav Republic Of)"]
}, {
    code: "MMK",
    number: "104",
    digits: 2,
    currency: "Kyat",
    countries: ["Myanmar"]
}, {
    code: "MNT",
    number: "496",
    digits: 2,
    currency: "Tugrik",
    countries: ["Mongolia"]
}, {
    code: "MOP",
    number: "446",
    digits: 2,
    currency: "Pataca",
    countries: ["Macao"]
}, {
    code: "MRU",
    number: "929",
    digits: 2,
    currency: "Ouguiya",
    countries: ["Mauritania"]
}, {
    code: "MUR",
    number: "480",
    digits: 2,
    currency: "Mauritius Rupee",
    countries: ["Mauritius"]
}, {
    code: "MVR",
    number: "462",
    digits: 2,
    currency: "Rufiyaa",
    countries: ["Maldives"]
}, {
    code: "MWK",
    number: "454",
    digits: 2,
    currency: "Malawi Kwacha",
    countries: ["Malawi"]
}, {
    code: "MXN",
    number: "484",
    digits: 2,
    currency: "Mexican Peso",
    countries: ["Mexico"]
}, {
    code: "MXV",
    number: "979",
    digits: 2,
    currency: "Mexican Unidad de Inversion (UDI)",
    countries: ["Mexico"]
}, {
    code: "MYR",
    number: "458",
    digits: 2,
    currency: "Malaysian Ringgit",
    countries: ["Malaysia"]
}, {
    code: "MZN",
    number: "943",
    digits: 2,
    currency: "Mozambique Metical",
    countries: ["Mozambique"]
}, {
    code: "NAD",
    number: "516",
    digits: 2,
    currency: "Namibia Dollar",
    countries: ["Namibia"]
}, {
    code: "NGN",
    number: "566",
    digits: 2,
    currency: "Naira",
    countries: ["Nigeria"]
}, {
    code: "NIO",
    number: "558",
    digits: 2,
    currency: "Cordoba Oro",
    countries: ["Nicaragua"]
}, {
    code: "NOK",
    number: "578",
    digits: 2,
    currency: "Norwegian Krone",
    countries: ["Bouvet Island", "Norway", "Svalbard and Jan Mayen"]
}, {
    code: "NPR",
    number: "524",
    digits: 2,
    currency: "Nepalese Rupee",
    countries: ["Nepal"]
}, {
    code: "NZD",
    number: "554",
    digits: 2,
    currency: "New Zealand Dollar",
    countries: ["Cook Islands (The)", "New Zealand", "Niue", "Pitcairn", "Tokelau"]
}, {
    code: "OMR",
    number: "512",
    digits: 3,
    currency: "Rial Omani",
    countries: ["Oman"]
}, {
    code: "PAB",
    number: "590",
    digits: 2,
    currency: "Balboa",
    countries: ["Panama"]
}, {
    code: "PEN",
    number: "604",
    digits: 2,
    currency: "Sol",
    countries: ["Peru"]
}, {
    code: "PGK",
    number: "598",
    digits: 2,
    currency: "Kina",
    countries: ["Papua New Guinea"]
}, {
    code: "PHP",
    number: "608",
    digits: 2,
    currency: "Philippine Peso",
    countries: ["Philippines (The)"]
}, {
    code: "PKR",
    number: "586",
    digits: 2,
    currency: "Pakistan Rupee",
    countries: ["Pakistan"]
}, {
    code: "PLN",
    number: "985",
    digits: 2,
    currency: "Zloty",
    countries: ["Poland"]
}, {
    code: "PYG",
    number: "600",
    digits: 0,
    currency: "Guarani",
    countries: ["Paraguay"]
}, {
    code: "QAR",
    number: "634",
    digits: 2,
    currency: "Qatari Rial",
    countries: ["Qatar"]
}, {
    code: "RON",
    number: "946",
    digits: 2,
    currency: "Romanian Leu",
    countries: ["Romania"]
}, {
    code: "RSD",
    number: "941",
    digits: 2,
    currency: "Serbian Dinar",
    countries: ["Serbia"]
}, {
    code: "RUB",
    number: "643",
    digits: 2,
    currency: "Russian Ruble",
    countries: ["Russian Federation (The)"]
}, {
    code: "RWF",
    number: "646",
    digits: 0,
    currency: "Rwanda Franc",
    countries: ["Rwanda"]
}, {
    code: "SAR",
    number: "682",
    digits: 2,
    currency: "Saudi Riyal",
    countries: ["Saudi Arabia"]
}, {
    code: "SBD",
    number: "090",
    digits: 2,
    currency: "Solomon Islands Dollar",
    countries: ["Solomon Islands"]
}, {
    code: "SCR",
    number: "690",
    digits: 2,
    currency: "Seychelles Rupee",
    countries: ["Seychelles"]
}, {
    code: "SDG",
    number: "938",
    digits: 2,
    currency: "Sudanese Pound",
    countries: ["Sudan (The)"]
}, {
    code: "SEK",
    number: "752",
    digits: 2,
    currency: "Swedish Krona",
    countries: ["Sweden"]
}, {
    code: "SGD",
    number: "702",
    digits: 2,
    currency: "Singapore Dollar",
    countries: ["Singapore"]
}, {
    code: "SHP",
    number: "654",
    digits: 2,
    currency: "Saint Helena Pound",
    countries: ["Saint Helena, Ascension and Tristan Da Cunha"]
}, {
    code: "SLL",
    number: "694",
    digits: 2,
    currency: "Leone",
    countries: ["Sierra Leone"]
}, {
    code: "SOS",
    number: "706",
    digits: 2,
    currency: "Somali Shilling",
    countries: ["Somalia"]
}, {
    code: "SRD",
    number: "968",
    digits: 2,
    currency: "Surinam Dollar",
    countries: ["Suriname"]
}, {
    code: "SSP",
    number: "728",
    digits: 2,
    currency: "South Sudanese Pound",
    countries: ["South Sudan"]
}, {
    code: "STN",
    number: "930",
    digits: 2,
    currency: "Dobra",
    countries: ["Sao Tome and Principe"]
}, {
    code: "SVC",
    number: "222",
    digits: 2,
    currency: "El Salvador Colon",
    countries: ["El Salvador"]
}, {
    code: "SYP",
    number: "760",
    digits: 2,
    currency: "Syrian Pound",
    countries: ["Syrian Arab Republic"]
}, {
    code: "SZL",
    number: "748",
    digits: 2,
    currency: "Lilangeni",
    countries: ["Eswatini"]
}, {
    code: "THB",
    number: "764",
    digits: 2,
    currency: "Baht",
    countries: ["Thailand"]
}, {
    code: "TJS",
    number: "972",
    digits: 2,
    currency: "Somoni",
    countries: ["Tajikistan"]
}, {
    code: "TMT",
    number: "934",
    digits: 2,
    currency: "Turkmenistan New Manat",
    countries: ["Turkmenistan"]
}, {
    code: "TND",
    number: "788",
    digits: 3,
    currency: "Tunisian Dinar",
    countries: ["Tunisia"]
}, {
    code: "TOP",
    number: "776",
    digits: 2,
    currency: "Pa’anga",
    countries: ["Tonga"]
}, {
    code: "TRY",
    number: "949",
    digits: 2,
    currency: "Turkish Lira",
    countries: ["Turkey"]
}, {
    code: "TTD",
    number: "780",
    digits: 2,
    currency: "Trinidad and Tobago Dollar",
    countries: ["Trinidad and Tobago"]
}, {
    code: "TWD",
    number: "901",
    digits: 2,
    currency: "New Taiwan Dollar",
    countries: ["Taiwan (Province of China)"]
}, {
    code: "TZS",
    number: "834",
    digits: 2,
    currency: "Tanzanian Shilling",
    countries: ["Tanzania, United Republic Of"]
}, {
    code: "UAH",
    number: "980",
    digits: 2,
    currency: "Hryvnia",
    countries: ["Ukraine"]
}, {
    code: "UGX",
    number: "800",
    digits: 0,
    currency: "Uganda Shilling",
    countries: ["Uganda"]
}, {
    code: "USD",
    number: "840",
    digits: 2,
    currency: "US Dollar",
    countries: ["American Samoa", "Bonaire, Sint Eustatius and Saba", "British Indian Ocean Territory (The)", "Ecuador", "El Salvador", "Guam", "Haiti", "Marshall Islands (The)", "Micronesia (Federated States Of)", "Northern Mariana Islands (The)", "Palau", "Panama", "Puerto Rico", "Timor-Leste", "Turks and Caicos Islands (The)", "United States Minor Outlying Islands (The)", "United States of America (The)", "Virgin Islands (British)", "Virgin Islands (U.S.)"]
}, {
    code: "USN",
    number: "997",
    digits: 2,
    currency: "US Dollar (Next day)",
    countries: ["United States of America (The)"]
}, {
    code: "UYI",
    number: "940",
    digits: 0,
    currency: "Uruguay Peso en Unidades Indexadas (UI)",
    countries: ["Uruguay"]
}, {
    code: "UYU",
    number: "858",
    digits: 2,
    currency: "Peso Uruguayo",
    countries: ["Uruguay"]
}, {
    code: "UYW",
    number: "927",
    digits: 4,
    currency: "Unidad Previsional",
    countries: ["Uruguay"]
}, {
    code: "UZS",
    number: "860",
    digits: 2,
    currency: "Uzbekistan Sum",
    countries: ["Uzbekistan"]
}, {
    code: "VES",
    number: "928",
    digits: 2,
    currency: "Bolívar Soberano",
    countries: ["Venezuela (Bolivarian Republic Of)"]
}, {
    code: "VND",
    number: "704",
    digits: 0,
    currency: "Dong",
    countries: ["Viet Nam"]
}, {
    code: "VUV",
    number: "548",
    digits: 0,
    currency: "Vatu",
    countries: ["Vanuatu"]
}, {
    code: "WST",
    number: "882",
    digits: 2,
    currency: "Tala",
    countries: ["Samoa"]
}, {
    code: "XAF",
    number: "950",
    digits: 0,
    currency: "CFA Franc BEAC",
    countries: ["Cameroon", "Central African Republic (The)", "Chad", "Congo (The)", "Equatorial Guinea", "Gabon"]
}, {
    code: "XAG",
    number: "961",
    digits: 0,
    currency: "Silver",
    countries: ["Zz11_silver"]
}, {
    code: "XAU",
    number: "959",
    digits: 0,
    currency: "Gold",
    countries: ["Zz08_gold"]
}, {
    code: "XBA",
    number: "955",
    digits: 0,
    currency: "Bond Markets Unit European Composite Unit (EURCO)",
    countries: ["Zz01_bond Markets Unit European_eurco"]
}, {
    code: "XBB",
    number: "956",
    digits: 0,
    currency: "Bond Markets Unit European Monetary Unit (E.M.U.-6)",
    countries: ["Zz02_bond Markets Unit European_emu-6"]
}, {
    code: "XBC",
    number: "957",
    digits: 0,
    currency: "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)",
    countries: ["Zz03_bond Markets Unit European_eua-9"]
}, {
    code: "XBD",
    number: "958",
    digits: 0,
    currency: "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)",
    countries: ["Zz04_bond Markets Unit European_eua-17"]
}, {
    code: "XCD",
    number: "951",
    digits: 2,
    currency: "East Caribbean Dollar",
    countries: ["Anguilla", "Antigua and Barbuda", "Dominica", "Grenada", "Montserrat", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines"]
}, {
    code: "XDR",
    number: "960",
    digits: 0,
    currency: "SDR (Special Drawing Right)",
    countries: ["International Monetary Fund (Imf) "]
}, {
    code: "XOF",
    number: "952",
    digits: 0,
    currency: "CFA Franc BCEAO",
    countries: ["Benin", "Burkina Faso", "Côte d'Ivoire", "Guinea-Bissau", "Mali", "Niger (The)", "Senegal", "Togo"]
}, {
    code: "XPD",
    number: "964",
    digits: 0,
    currency: "Palladium",
    countries: ["Zz09_palladium"]
}, {
    code: "XPF",
    number: "953",
    digits: 0,
    currency: "CFP Franc",
    countries: ["French Polynesia", "New Caledonia", "Wallis and Futuna"]
}, {
    code: "XPT",
    number: "962",
    digits: 0,
    currency: "Platinum",
    countries: ["Zz10_platinum"]
}, {
    code: "XSU",
    number: "994",
    digits: 0,
    currency: "Sucre",
    countries: ['Sistema Unitario De Compensacion Regional De Pagos "Sucre"']
}, {
    code: "XTS",
    number: "963",
    digits: 0,
    currency: "Codes specifically reserved for testing purposes",
    countries: ["Zz06_testing_code"]
}, {
    code: "XUA",
    number: "965",
    digits: 0,
    currency: "ADB Unit of Account",
    countries: ["Member Countries of the African Development Bank Group"]
}, {
    code: "XXX",
    number: "999",
    digits: 0,
    currency: "The codes assigned for transactions where no currency is involved",
    countries: ["Zz07_no_currency"]
}, {
    code: "YER",
    number: "886",
    digits: 2,
    currency: "Yemeni Rial",
    countries: ["Yemen"]
}, {
    code: "ZAR",
    number: "710",
    digits: 2,
    currency: "Rand",
    countries: ["Lesotho", "Namibia", "South Africa"]
}, {
    code: "ZMW",
    number: "967",
    digits: 2,
    currency: "Zambian Kwacha",
    countries: ["Zambia"]
}, {
    code: "ZWL",
    number: "932",
    digits: 2,
    currency: "Zimbabwe Dollar",
    countries: ["Zimbabwe"]
}]
  , yA = "2018-08-29"
  , Tf = mA
  , bA = hA
  , Sn = gA
  , vA = yA
  , _A = function(e) {
    return e = e.toUpperCase(),
    Tf(Sn, function(t) {
        return t.code === e
    })
}
  , AA = function(e) {
    return e = e.toLowerCase(),
    Sn.filter(function(t) {
        return (t.countries.map(function(n) {
            return n.toLowerCase()
        }) || []).indexOf(e) > -1
    })
}
  , wA = function(e) {
    return Tf(Sn, function(t) {
        return t.number === String(e)
    })
}
  , EA = function() {
    return Sn.map(function(e) {
        return e.code
    })
}
  , kA = function() {
    var e = Sn.map(function(t) {
        return t.number
    });
    return e.filter(function(t) {
        if (t)
            return t
    })
}
  , TA = function() {
    var e = Sn.filter(function(t) {
        return t.countries
    }).map(function(t) {
        return t.countries
    });
    return bA(Array.prototype.concat.apply([], e))
};
Pt.code = _A;
Pt.country = AA;
Pt.number = wA;
Pt.codes = EA;
Pt.numbers = kA;
Pt.countries = TA;
Pt.publishDate = vA;
Pt.data = Sn;
function vc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function bi(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vc(Object(n), !0).forEach(function(r) {
            Sf(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Sf(e, t, n) {
    return t = xA(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function SA(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function xA(e) {
    var t = SA(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var CA = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos Islands",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Türkiye",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "Virgin Islands (UK)",
    VI: "Virgin Islands (US)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
}
  , PA = {
    "Africa/Abidjan": {
        u: 0,
        c: ["CI", "BF", "GH", "GM", "GN", "IS", "ML", "MR", "SH", "SL", "SN", "TG"]
    },
    "Africa/Accra": {
        a: "Africa/Abidjan",
        c: ["GH"],
        r: 1
    },
    "Africa/Addis_Ababa": {
        a: "Africa/Nairobi",
        c: ["ET"],
        r: 1
    },
    "Africa/Algiers": {
        u: 60,
        c: ["DZ"]
    },
    "Africa/Asmara": {
        a: "Africa/Nairobi",
        c: ["ER"],
        r: 1
    },
    "Africa/Asmera": {
        a: "Africa/Nairobi",
        c: ["ER"],
        r: 1
    },
    "Africa/Bamako": {
        a: "Africa/Abidjan",
        c: ["ML"],
        r: 1
    },
    "Africa/Bangui": {
        a: "Africa/Lagos",
        c: ["CF"],
        r: 1
    },
    "Africa/Banjul": {
        a: "Africa/Abidjan",
        c: ["GM"],
        r: 1
    },
    "Africa/Bissau": {
        u: 0,
        c: ["GW"]
    },
    "Africa/Blantyre": {
        a: "Africa/Maputo",
        c: ["MW"],
        r: 1
    },
    "Africa/Brazzaville": {
        a: "Africa/Lagos",
        c: ["CG"],
        r: 1
    },
    "Africa/Bujumbura": {
        a: "Africa/Maputo",
        c: ["BI"],
        r: 1
    },
    "Africa/Cairo": {
        u: 120,
        d: 180,
        c: ["EG"]
    },
    "Africa/Casablanca": {
        u: 60,
        d: 0,
        c: ["MA"]
    },
    "Africa/Ceuta": {
        u: 60,
        d: 120,
        c: ["ES"]
    },
    "Africa/Conakry": {
        a: "Africa/Abidjan",
        c: ["GN"],
        r: 1
    },
    "Africa/Dakar": {
        a: "Africa/Abidjan",
        c: ["SN"],
        r: 1
    },
    "Africa/Dar_es_Salaam": {
        a: "Africa/Nairobi",
        c: ["TZ"],
        r: 1
    },
    "Africa/Djibouti": {
        a: "Africa/Nairobi",
        c: ["DJ"],
        r: 1
    },
    "Africa/Douala": {
        a: "Africa/Lagos",
        c: ["CM"],
        r: 1
    },
    "Africa/El_Aaiun": {
        u: 60,
        d: 0,
        c: ["EH"]
    },
    "Africa/Freetown": {
        a: "Africa/Abidjan",
        c: ["SL"],
        r: 1
    },
    "Africa/Gaborone": {
        a: "Africa/Maputo",
        c: ["BW"],
        r: 1
    },
    "Africa/Harare": {
        a: "Africa/Maputo",
        c: ["ZW"],
        r: 1
    },
    "Africa/Johannesburg": {
        u: 120,
        c: ["ZA", "LS", "SZ"]
    },
    "Africa/Juba": {
        u: 120,
        c: ["SS"]
    },
    "Africa/Kampala": {
        a: "Africa/Nairobi",
        c: ["UG"],
        r: 1
    },
    "Africa/Khartoum": {
        u: 120,
        c: ["SD"]
    },
    "Africa/Kigali": {
        a: "Africa/Maputo",
        c: ["RW"],
        r: 1
    },
    "Africa/Kinshasa": {
        a: "Africa/Lagos",
        c: ["CD"],
        r: 1
    },
    "Africa/Lagos": {
        u: 60,
        c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"]
    },
    "Africa/Libreville": {
        a: "Africa/Lagos",
        c: ["GA"],
        r: 1
    },
    "Africa/Lome": {
        a: "Africa/Abidjan",
        c: ["TG"],
        r: 1
    },
    "Africa/Luanda": {
        a: "Africa/Lagos",
        c: ["AO"],
        r: 1
    },
    "Africa/Lubumbashi": {
        a: "Africa/Maputo",
        c: ["CD"],
        r: 1
    },
    "Africa/Lusaka": {
        a: "Africa/Maputo",
        c: ["ZM"],
        r: 1
    },
    "Africa/Malabo": {
        a: "Africa/Lagos",
        c: ["GQ"],
        r: 1
    },
    "Africa/Maputo": {
        u: 120,
        c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"]
    },
    "Africa/Maseru": {
        a: "Africa/Johannesburg",
        c: ["LS"],
        r: 1
    },
    "Africa/Mbabane": {
        a: "Africa/Johannesburg",
        c: ["SZ"],
        r: 1
    },
    "Africa/Mogadishu": {
        a: "Africa/Nairobi",
        c: ["SO"],
        r: 1
    },
    "Africa/Monrovia": {
        u: 0,
        c: ["LR"]
    },
    "Africa/Nairobi": {
        u: 180,
        c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"]
    },
    "Africa/Ndjamena": {
        u: 60,
        c: ["TD"]
    },
    "Africa/Niamey": {
        a: "Africa/Lagos",
        c: ["NE"],
        r: 1
    },
    "Africa/Nouakchott": {
        a: "Africa/Abidjan",
        c: ["MR"],
        r: 1
    },
    "Africa/Ouagadougou": {
        a: "Africa/Abidjan",
        c: ["BF"],
        r: 1
    },
    "Africa/Porto-Novo": {
        a: "Africa/Lagos",
        c: ["BJ"],
        r: 1
    },
    "Africa/Sao_Tome": {
        u: 0,
        c: ["ST"]
    },
    "Africa/Timbuktu": {
        a: "Africa/Abidjan",
        c: ["ML"],
        r: 1
    },
    "Africa/Tripoli": {
        u: 120,
        c: ["LY"]
    },
    "Africa/Tunis": {
        u: 60,
        c: ["TN"]
    },
    "Africa/Windhoek": {
        u: 120,
        c: ["NA"]
    },
    "America/Adak": {
        u: -600,
        d: -540,
        c: ["US"]
    },
    "America/Anchorage": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/Anguilla": {
        a: "America/Puerto_Rico",
        c: ["AI"],
        r: 1
    },
    "America/Antigua": {
        a: "America/Puerto_Rico",
        c: ["AG"],
        r: 1
    },
    "America/Araguaina": {
        u: -180,
        c: ["BR"]
    },
    "America/Argentina/Buenos_Aires": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Catamarca": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/ComodRivadavia": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Argentina/Cordoba": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Jujuy": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/La_Rioja": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Mendoza": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Rio_Gallegos": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Salta": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/San_Juan": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/San_Luis": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Tucuman": {
        u: -180,
        c: ["AR"]
    },
    "America/Argentina/Ushuaia": {
        u: -180,
        c: ["AR"]
    },
    "America/Aruba": {
        a: "America/Puerto_Rico",
        c: ["AW"],
        r: 1
    },
    "America/Asuncion": {
        u: -240,
        d: -180,
        c: ["PY"]
    },
    "America/Atikokan": {
        a: "America/Panama",
        c: ["CA"],
        r: 1
    },
    "America/Atka": {
        a: "America/Adak",
        r: 1
    },
    "America/Bahia": {
        u: -180,
        c: ["BR"]
    },
    "America/Bahia_Banderas": {
        u: -360,
        c: ["MX"]
    },
    "America/Barbados": {
        u: -240,
        c: ["BB"]
    },
    "America/Belem": {
        u: -180,
        c: ["BR"]
    },
    "America/Belize": {
        u: -360,
        c: ["BZ"]
    },
    "America/Blanc-Sablon": {
        a: "America/Puerto_Rico",
        c: ["CA"],
        r: 1
    },
    "America/Boa_Vista": {
        u: -240,
        c: ["BR"]
    },
    "America/Bogota": {
        u: -300,
        c: ["CO"]
    },
    "America/Boise": {
        u: -420,
        d: -360,
        c: ["US"]
    },
    "America/Buenos_Aires": {
        a: "America/Argentina/Buenos_Aires",
        r: 1
    },
    "America/Cambridge_Bay": {
        u: -420,
        d: -360,
        c: ["CA"]
    },
    "America/Campo_Grande": {
        u: -240,
        c: ["BR"]
    },
    "America/Cancun": {
        u: -300,
        c: ["MX"]
    },
    "America/Caracas": {
        u: -240,
        c: ["VE"]
    },
    "America/Catamarca": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Cayenne": {
        u: -180,
        c: ["GF"]
    },
    "America/Cayman": {
        a: "America/Panama",
        c: ["KY"],
        r: 1
    },
    "America/Chicago": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/Chihuahua": {
        u: -360,
        c: ["MX"]
    },
    "America/Ciudad_Juarez": {
        u: -420,
        d: -360,
        c: ["MX"]
    },
    "America/Coral_Harbour": {
        a: "America/Panama",
        c: ["CA"],
        r: 1
    },
    "America/Cordoba": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Costa_Rica": {
        u: -360,
        c: ["CR"]
    },
    "America/Creston": {
        a: "America/Phoenix",
        c: ["CA"],
        r: 1
    },
    "America/Cuiaba": {
        u: -240,
        c: ["BR"]
    },
    "America/Curacao": {
        a: "America/Puerto_Rico",
        c: ["CW"],
        r: 1
    },
    "America/Danmarkshavn": {
        u: 0,
        c: ["GL"]
    },
    "America/Dawson": {
        u: -420,
        c: ["CA"]
    },
    "America/Dawson_Creek": {
        u: -420,
        c: ["CA"]
    },
    "America/Denver": {
        u: -420,
        d: -360,
        c: ["US"]
    },
    "America/Detroit": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Dominica": {
        a: "America/Puerto_Rico",
        c: ["DM"],
        r: 1
    },
    "America/Edmonton": {
        u: -420,
        d: -360,
        c: ["CA"]
    },
    "America/Eirunepe": {
        u: -300,
        c: ["BR"]
    },
    "America/El_Salvador": {
        u: -360,
        c: ["SV"]
    },
    "America/Ensenada": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Fort_Nelson": {
        u: -420,
        c: ["CA"]
    },
    "America/Fort_Wayne": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Fortaleza": {
        u: -180,
        c: ["BR"]
    },
    "America/Glace_Bay": {
        u: -240,
        d: -180,
        c: ["CA"]
    },
    "America/Godthab": {
        a: "America/Nuuk",
        r: 1
    },
    "America/Goose_Bay": {
        u: -240,
        d: -180,
        c: ["CA"]
    },
    "America/Grand_Turk": {
        u: -300,
        d: -240,
        c: ["TC"]
    },
    "America/Grenada": {
        a: "America/Puerto_Rico",
        c: ["GD"],
        r: 1
    },
    "America/Guadeloupe": {
        a: "America/Puerto_Rico",
        c: ["GP"],
        r: 1
    },
    "America/Guatemala": {
        u: -360,
        c: ["GT"]
    },
    "America/Guayaquil": {
        u: -300,
        c: ["EC"]
    },
    "America/Guyana": {
        u: -240,
        c: ["GY"]
    },
    "America/Halifax": {
        u: -240,
        d: -180,
        c: ["CA"]
    },
    "America/Havana": {
        u: -300,
        d: -240,
        c: ["CU"]
    },
    "America/Hermosillo": {
        u: -420,
        c: ["MX"]
    },
    "America/Indiana/Indianapolis": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indiana/Knox": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/Indiana/Marengo": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indiana/Petersburg": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indiana/Tell_City": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/Indiana/Vevay": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indiana/Vincennes": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indiana/Winamac": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Indianapolis": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Inuvik": {
        u: -420,
        d: -360,
        c: ["CA"]
    },
    "America/Iqaluit": {
        u: -300,
        d: -240,
        c: ["CA"]
    },
    "America/Jamaica": {
        u: -300,
        c: ["JM"]
    },
    "America/Jujuy": {
        a: "America/Argentina/Jujuy",
        r: 1
    },
    "America/Juneau": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/Kentucky/Louisville": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Kentucky/Monticello": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Knox_IN": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "America/Kralendijk": {
        a: "America/Puerto_Rico",
        c: ["BQ"],
        r: 1
    },
    "America/La_Paz": {
        u: -240,
        c: ["BO"]
    },
    "America/Lima": {
        u: -300,
        c: ["PE"]
    },
    "America/Los_Angeles": {
        u: -480,
        d: -420,
        c: ["US"]
    },
    "America/Louisville": {
        a: "America/Kentucky/Louisville",
        r: 1
    },
    "America/Lower_Princes": {
        a: "America/Puerto_Rico",
        c: ["SX"],
        r: 1
    },
    "America/Maceio": {
        u: -180,
        c: ["BR"]
    },
    "America/Managua": {
        u: -360,
        c: ["NI"]
    },
    "America/Manaus": {
        u: -240,
        c: ["BR"]
    },
    "America/Marigot": {
        a: "America/Puerto_Rico",
        c: ["MF"],
        r: 1
    },
    "America/Martinique": {
        u: -240,
        c: ["MQ"]
    },
    "America/Matamoros": {
        u: -360,
        d: -300,
        c: ["MX"]
    },
    "America/Mazatlan": {
        u: -420,
        c: ["MX"]
    },
    "America/Mendoza": {
        a: "America/Argentina/Mendoza",
        r: 1
    },
    "America/Menominee": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/Merida": {
        u: -360,
        c: ["MX"]
    },
    "America/Metlakatla": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/Mexico_City": {
        u: -360,
        c: ["MX"]
    },
    "America/Miquelon": {
        u: -180,
        d: -120,
        c: ["PM"]
    },
    "America/Moncton": {
        u: -240,
        d: -180,
        c: ["CA"]
    },
    "America/Monterrey": {
        u: -360,
        c: ["MX"]
    },
    "America/Montevideo": {
        u: -180,
        c: ["UY"]
    },
    "America/Montreal": {
        a: "America/Toronto",
        c: ["CA"],
        r: 1
    },
    "America/Montserrat": {
        a: "America/Puerto_Rico",
        c: ["MS"],
        r: 1
    },
    "America/Nassau": {
        a: "America/Toronto",
        c: ["BS"],
        r: 1
    },
    "America/New_York": {
        u: -300,
        d: -240,
        c: ["US"]
    },
    "America/Nipigon": {
        a: "America/Toronto",
        c: ["CA"],
        r: 1
    },
    "America/Nome": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/Noronha": {
        u: -120,
        c: ["BR"]
    },
    "America/North_Dakota/Beulah": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/North_Dakota/Center": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/North_Dakota/New_Salem": {
        u: -360,
        d: -300,
        c: ["US"]
    },
    "America/Nuuk": {
        u: -120,
        c: ["GL"]
    },
    "America/Ojinaga": {
        u: -360,
        d: -300,
        c: ["MX"]
    },
    "America/Panama": {
        u: -300,
        c: ["PA", "CA", "KY"]
    },
    "America/Pangnirtung": {
        a: "America/Iqaluit",
        r: 1
    },
    "America/Paramaribo": {
        u: -180,
        c: ["SR"]
    },
    "America/Phoenix": {
        u: -420,
        c: ["US", "CA"]
    },
    "America/Port-au-Prince": {
        u: -300,
        d: -240,
        c: ["HT"]
    },
    "America/Port_of_Spain": {
        a: "America/Puerto_Rico",
        c: ["TT"],
        r: 1
    },
    "America/Porto_Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "America/Porto_Velho": {
        u: -240,
        c: ["BR"]
    },
    "America/Puerto_Rico": {
        u: -240,
        c: ["PR", "AG", "CA", "AI", "AW", "BL", "BQ", "CW", "DM", "GD", "GP", "KN", "LC", "MF", "MS", "SX", "TT", "VC", "VG", "VI"]
    },
    "America/Punta_Arenas": {
        u: -180,
        c: ["CL"]
    },
    "America/Rainy_River": {
        a: "America/Winnipeg",
        r: 1
    },
    "America/Rankin_Inlet": {
        u: -360,
        d: -300,
        c: ["CA"]
    },
    "America/Recife": {
        u: -180,
        c: ["BR"]
    },
    "America/Regina": {
        u: -360,
        c: ["CA"]
    },
    "America/Resolute": {
        u: -360,
        d: -300,
        c: ["CA"]
    },
    "America/Rio_Branco": {
        u: -300,
        c: ["BR"]
    },
    "America/Rosario": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Santa_Isabel": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Santarem": {
        u: -180,
        c: ["BR"]
    },
    "America/Santiago": {
        u: -240,
        d: -180,
        c: ["CL"]
    },
    "America/Santo_Domingo": {
        u: -240,
        c: ["DO"]
    },
    "America/Sao_Paulo": {
        u: -180,
        c: ["BR"]
    },
    "America/Scoresbysund": {
        u: -60,
        d: 0,
        c: ["GL"]
    },
    "America/Shiprock": {
        a: "America/Denver",
        r: 1
    },
    "America/Sitka": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/St_Barthelemy": {
        a: "America/Puerto_Rico",
        c: ["BL"],
        r: 1
    },
    "America/St_Johns": {
        u: -210,
        d: -150,
        c: ["CA"]
    },
    "America/St_Kitts": {
        a: "America/Puerto_Rico",
        c: ["KN"],
        r: 1
    },
    "America/St_Lucia": {
        a: "America/Puerto_Rico",
        c: ["LC"],
        r: 1
    },
    "America/St_Thomas": {
        a: "America/Puerto_Rico",
        c: ["VI"],
        r: 1
    },
    "America/St_Vincent": {
        a: "America/Puerto_Rico",
        c: ["VC"],
        r: 1
    },
    "America/Swift_Current": {
        u: -360,
        c: ["CA"]
    },
    "America/Tegucigalpa": {
        u: -360,
        c: ["HN"]
    },
    "America/Thule": {
        u: -240,
        d: -180,
        c: ["GL"]
    },
    "America/Thunder_Bay": {
        a: "America/Toronto",
        c: ["CA"],
        r: 1
    },
    "America/Tijuana": {
        u: -480,
        d: -420,
        c: ["MX"]
    },
    "America/Toronto": {
        u: -300,
        d: -240,
        c: ["CA", "BS"]
    },
    "America/Tortola": {
        a: "America/Puerto_Rico",
        c: ["VG"],
        r: 1
    },
    "America/Vancouver": {
        u: -480,
        d: -420,
        c: ["CA"]
    },
    "America/Virgin": {
        a: "America/Puerto_Rico",
        c: ["VI"],
        r: 1
    },
    "America/Whitehorse": {
        u: -420,
        c: ["CA"]
    },
    "America/Winnipeg": {
        u: -360,
        d: -300,
        c: ["CA"]
    },
    "America/Yakutat": {
        u: -540,
        d: -480,
        c: ["US"]
    },
    "America/Yellowknife": {
        a: "America/Edmonton",
        r: 1
    },
    "Antarctica/Casey": {
        u: 660,
        c: ["AQ"]
    },
    "Antarctica/Davis": {
        u: 420,
        c: ["AQ"]
    },
    "Antarctica/DumontDUrville": {
        a: "Pacific/Port_Moresby",
        c: ["AQ"],
        r: 1
    },
    "Antarctica/Macquarie": {
        u: 600,
        d: 660,
        c: ["AU"]
    },
    "Antarctica/Mawson": {
        u: 300,
        c: ["AQ"]
    },
    "Antarctica/McMurdo": {
        a: "Pacific/Auckland",
        c: ["AQ"],
        r: 1
    },
    "Antarctica/Palmer": {
        u: -180,
        c: ["AQ"]
    },
    "Antarctica/Rothera": {
        u: -180,
        c: ["AQ"]
    },
    "Antarctica/South_Pole": {
        a: "Pacific/Auckland",
        c: ["AQ"],
        r: 1
    },
    "Antarctica/Syowa": {
        a: "Asia/Riyadh",
        c: ["AQ"],
        r: 1
    },
    "Antarctica/Troll": {
        u: 0,
        d: 120,
        c: ["AQ"]
    },
    "Antarctica/Vostok": {
        a: "Asia/Urumqi",
        c: ["AQ"],
        r: 1
    },
    "Arctic/Longyearbyen": {
        a: "Europe/Berlin",
        c: ["SJ"],
        r: 1
    },
    "Asia/Aden": {
        a: "Asia/Riyadh",
        c: ["YE"],
        r: 1
    },
    "Asia/Almaty": {
        u: 360,
        c: ["KZ"]
    },
    "Asia/Amman": {
        u: 180,
        c: ["JO"]
    },
    "Asia/Anadyr": {
        u: 720,
        c: ["RU"]
    },
    "Asia/Aqtau": {
        u: 300,
        c: ["KZ"]
    },
    "Asia/Aqtobe": {
        u: 300,
        c: ["KZ"]
    },
    "Asia/Ashgabat": {
        u: 300,
        c: ["TM"]
    },
    "Asia/Ashkhabad": {
        a: "Asia/Ashgabat",
        r: 1
    },
    "Asia/Atyrau": {
        u: 300,
        c: ["KZ"]
    },
    "Asia/Baghdad": {
        u: 180,
        c: ["IQ"]
    },
    "Asia/Bahrain": {
        a: "Asia/Qatar",
        c: ["BH"],
        r: 1
    },
    "Asia/Baku": {
        u: 240,
        c: ["AZ"]
    },
    "Asia/Bangkok": {
        u: 420,
        c: ["TH", "CX", "KH", "LA", "VN"]
    },
    "Asia/Barnaul": {
        u: 420,
        c: ["RU"]
    },
    "Asia/Beirut": {
        u: 120,
        d: 180,
        c: ["LB"]
    },
    "Asia/Bishkek": {
        u: 360,
        c: ["KG"]
    },
    "Asia/Brunei": {
        a: "Asia/Kuching",
        c: ["BN"],
        r: 1
    },
    "Asia/Calcutta": {
        a: "Asia/Kolkata",
        r: 1
    },
    "Asia/Chita": {
        u: 540,
        c: ["RU"]
    },
    "Asia/Choibalsan": {
        u: 480,
        c: ["MN"]
    },
    "Asia/Chongqing": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Chungking": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Colombo": {
        u: 330,
        c: ["LK"]
    },
    "Asia/Dacca": {
        a: "Asia/Dhaka",
        r: 1
    },
    "Asia/Damascus": {
        u: 180,
        c: ["SY"]
    },
    "Asia/Dhaka": {
        u: 360,
        c: ["BD"]
    },
    "Asia/Dili": {
        u: 540,
        c: ["TL"]
    },
    "Asia/Dubai": {
        u: 240,
        c: ["AE", "OM", "RE", "SC", "TF"]
    },
    "Asia/Dushanbe": {
        u: 300,
        c: ["TJ"]
    },
    "Asia/Famagusta": {
        u: 120,
        d: 180,
        c: ["CY"]
    },
    "Asia/Gaza": {
        u: 120,
        d: 180,
        c: ["PS"]
    },
    "Asia/Harbin": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Hebron": {
        u: 120,
        d: 180,
        c: ["PS"]
    },
    "Asia/Ho_Chi_Minh": {
        u: 420,
        c: ["VN"]
    },
    "Asia/Hong_Kong": {
        u: 480,
        c: ["HK"]
    },
    "Asia/Hovd": {
        u: 420,
        c: ["MN"]
    },
    "Asia/Irkutsk": {
        u: 480,
        c: ["RU"]
    },
    "Asia/Istanbul": {
        a: "Europe/Istanbul",
        r: 1
    },
    "Asia/Jakarta": {
        u: 420,
        c: ["ID"]
    },
    "Asia/Jayapura": {
        u: 540,
        c: ["ID"]
    },
    "Asia/Jerusalem": {
        u: 120,
        d: 180,
        c: ["IL"]
    },
    "Asia/Kabul": {
        u: 270,
        c: ["AF"]
    },
    "Asia/Kamchatka": {
        u: 720,
        c: ["RU"]
    },
    "Asia/Karachi": {
        u: 300,
        c: ["PK"]
    },
    "Asia/Kashgar": {
        a: "Asia/Urumqi",
        c: ["CN"],
        r: 1
    },
    "Asia/Kathmandu": {
        u: 345,
        c: ["NP"]
    },
    "Asia/Katmandu": {
        a: "Asia/Kathmandu",
        r: 1
    },
    "Asia/Khandyga": {
        u: 540,
        c: ["RU"]
    },
    "Asia/Kolkata": {
        u: 330,
        c: ["IN"]
    },
    "Asia/Krasnoyarsk": {
        u: 420,
        c: ["RU"]
    },
    "Asia/Kuala_Lumpur": {
        a: "Asia/Singapore",
        c: ["MY"],
        r: 1
    },
    "Asia/Kuching": {
        u: 480,
        c: ["MY", "BN"]
    },
    "Asia/Kuwait": {
        a: "Asia/Riyadh",
        c: ["KW"],
        r: 1
    },
    "Asia/Macao": {
        a: "Asia/Macau",
        r: 1
    },
    "Asia/Macau": {
        u: 480,
        c: ["MO"]
    },
    "Asia/Magadan": {
        u: 660,
        c: ["RU"]
    },
    "Asia/Makassar": {
        u: 480,
        c: ["ID"]
    },
    "Asia/Manila": {
        u: 480,
        c: ["PH"]
    },
    "Asia/Muscat": {
        a: "Asia/Dubai",
        c: ["OM"],
        r: 1
    },
    "Asia/Nicosia": {
        u: 120,
        d: 180,
        c: ["CY"]
    },
    "Asia/Novokuznetsk": {
        u: 420,
        c: ["RU"]
    },
    "Asia/Novosibirsk": {
        u: 420,
        c: ["RU"]
    },
    "Asia/Omsk": {
        u: 360,
        c: ["RU"]
    },
    "Asia/Oral": {
        u: 300,
        c: ["KZ"]
    },
    "Asia/Phnom_Penh": {
        a: "Asia/Bangkok",
        c: ["KH"],
        r: 1
    },
    "Asia/Pontianak": {
        u: 420,
        c: ["ID"]
    },
    "Asia/Pyongyang": {
        u: 540,
        c: ["KP"]
    },
    "Asia/Qatar": {
        u: 180,
        c: ["QA", "BH"]
    },
    "Asia/Qostanay": {
        u: 360,
        c: ["KZ"]
    },
    "Asia/Qyzylorda": {
        u: 300,
        c: ["KZ"]
    },
    "Asia/Rangoon": {
        a: "Asia/Yangon",
        c: ["MM"],
        r: 1
    },
    "Asia/Riyadh": {
        u: 180,
        c: ["SA", "AQ", "KW", "YE"]
    },
    "Asia/Saigon": {
        a: "Asia/Ho_Chi_Minh",
        r: 1
    },
    "Asia/Sakhalin": {
        u: 660,
        c: ["RU"]
    },
    "Asia/Samarkand": {
        u: 300,
        c: ["UZ"]
    },
    "Asia/Seoul": {
        u: 540,
        c: ["KR"]
    },
    "Asia/Shanghai": {
        u: 480,
        c: ["CN"]
    },
    "Asia/Singapore": {
        u: 480,
        c: ["SG", "MY"]
    },
    "Asia/Srednekolymsk": {
        u: 660,
        c: ["RU"]
    },
    "Asia/Taipei": {
        u: 480,
        c: ["TW"]
    },
    "Asia/Tashkent": {
        u: 300,
        c: ["UZ"]
    },
    "Asia/Tbilisi": {
        u: 240,
        c: ["GE"]
    },
    "Asia/Tehran": {
        u: 210,
        c: ["IR"]
    },
    "Asia/Tel_Aviv": {
        a: "Asia/Jerusalem",
        r: 1
    },
    "Asia/Thimbu": {
        a: "Asia/Thimphu",
        r: 1
    },
    "Asia/Thimphu": {
        u: 360,
        c: ["BT"]
    },
    "Asia/Tokyo": {
        u: 540,
        c: ["JP"]
    },
    "Asia/Tomsk": {
        u: 420,
        c: ["RU"]
    },
    "Asia/Ujung_Pandang": {
        a: "Asia/Makassar",
        r: 1
    },
    "Asia/Ulaanbaatar": {
        u: 480,
        c: ["MN"]
    },
    "Asia/Ulan_Bator": {
        a: "Asia/Ulaanbaatar",
        r: 1
    },
    "Asia/Urumqi": {
        u: 360,
        c: ["CN", "AQ"]
    },
    "Asia/Ust-Nera": {
        u: 600,
        c: ["RU"]
    },
    "Asia/Vientiane": {
        a: "Asia/Bangkok",
        c: ["LA"],
        r: 1
    },
    "Asia/Vladivostok": {
        u: 600,
        c: ["RU"]
    },
    "Asia/Yakutsk": {
        u: 540,
        c: ["RU"]
    },
    "Asia/Yangon": {
        u: 390,
        c: ["MM", "CC"]
    },
    "Asia/Yekaterinburg": {
        u: 300,
        c: ["RU"]
    },
    "Asia/Yerevan": {
        u: 240,
        c: ["AM"]
    },
    "Atlantic/Azores": {
        u: -60,
        d: 0,
        c: ["PT"]
    },
    "Atlantic/Bermuda": {
        u: -240,
        d: -180,
        c: ["BM"]
    },
    "Atlantic/Canary": {
        u: 0,
        d: 60,
        c: ["ES"]
    },
    "Atlantic/Cape_Verde": {
        u: -60,
        c: ["CV"]
    },
    "Atlantic/Faeroe": {
        a: "Atlantic/Faroe",
        r: 1
    },
    "Atlantic/Faroe": {
        u: 0,
        d: 60,
        c: ["FO"]
    },
    "Atlantic/Jan_Mayen": {
        a: "Europe/Berlin",
        c: ["SJ"],
        r: 1
    },
    "Atlantic/Madeira": {
        u: 0,
        d: 60,
        c: ["PT"]
    },
    "Atlantic/Reykjavik": {
        a: "Africa/Abidjan",
        c: ["IS"],
        r: 1
    },
    "Atlantic/South_Georgia": {
        u: -120,
        c: ["GS"]
    },
    "Atlantic/St_Helena": {
        a: "Africa/Abidjan",
        c: ["SH"],
        r: 1
    },
    "Atlantic/Stanley": {
        u: -180,
        c: ["FK"]
    },
    "Australia/ACT": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Adelaide": {
        u: 570,
        d: 630,
        c: ["AU"]
    },
    "Australia/Brisbane": {
        u: 600,
        c: ["AU"]
    },
    "Australia/Broken_Hill": {
        u: 570,
        d: 630,
        c: ["AU"]
    },
    "Australia/Canberra": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Currie": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Darwin": {
        u: 570,
        c: ["AU"]
    },
    "Australia/Eucla": {
        u: 525,
        c: ["AU"]
    },
    "Australia/Hobart": {
        u: 600,
        d: 660,
        c: ["AU"]
    },
    "Australia/LHI": {
        a: "Australia/Lord_Howe",
        r: 1
    },
    "Australia/Lindeman": {
        u: 600,
        c: ["AU"]
    },
    "Australia/Lord_Howe": {
        u: 630,
        d: 660,
        c: ["AU"]
    },
    "Australia/Melbourne": {
        u: 600,
        d: 660,
        c: ["AU"]
    },
    "Australia/NSW": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/North": {
        a: "Australia/Darwin",
        r: 1
    },
    "Australia/Perth": {
        u: 480,
        c: ["AU"]
    },
    "Australia/Queensland": {
        a: "Australia/Brisbane",
        r: 1
    },
    "Australia/South": {
        a: "Australia/Adelaide",
        r: 1
    },
    "Australia/Sydney": {
        u: 600,
        d: 660,
        c: ["AU"]
    },
    "Australia/Tasmania": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Victoria": {
        a: "Australia/Melbourne",
        r: 1
    },
    "Australia/West": {
        a: "Australia/Perth",
        r: 1
    },
    "Australia/Yancowinna": {
        a: "Australia/Broken_Hill",
        r: 1
    },
    "Brazil/Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "Brazil/DeNoronha": {
        a: "America/Noronha",
        r: 1
    },
    "Brazil/East": {
        a: "America/Sao_Paulo",
        r: 1
    },
    "Brazil/West": {
        a: "America/Manaus",
        r: 1
    },
    CET: {
        u: 60,
        d: 120
    },
    CST6CDT: {
        u: -360,
        d: -300
    },
    "Canada/Atlantic": {
        a: "America/Halifax",
        r: 1
    },
    "Canada/Central": {
        a: "America/Winnipeg",
        r: 1
    },
    "Canada/Eastern": {
        a: "America/Toronto",
        c: ["CA"],
        r: 1
    },
    "Canada/Mountain": {
        a: "America/Edmonton",
        r: 1
    },
    "Canada/Newfoundland": {
        a: "America/St_Johns",
        r: 1
    },
    "Canada/Pacific": {
        a: "America/Vancouver",
        r: 1
    },
    "Canada/Saskatchewan": {
        a: "America/Regina",
        r: 1
    },
    "Canada/Yukon": {
        a: "America/Whitehorse",
        r: 1
    },
    "Chile/Continental": {
        a: "America/Santiago",
        r: 1
    },
    "Chile/EasterIsland": {
        a: "Pacific/Easter",
        r: 1
    },
    Cuba: {
        a: "America/Havana",
        r: 1
    },
    EET: {
        u: 120,
        d: 180
    },
    EST: {
        u: -300
    },
    EST5EDT: {
        u: -300,
        d: -240
    },
    Egypt: {
        a: "Africa/Cairo",
        r: 1
    },
    Eire: {
        a: "Europe/Dublin",
        r: 1
    },
    "Etc/GMT": {
        u: 0
    },
    "Etc/GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT+1": {
        u: -60
    },
    "Etc/GMT+10": {
        u: -600
    },
    "Etc/GMT+11": {
        u: -660
    },
    "Etc/GMT+12": {
        u: -720
    },
    "Etc/GMT+2": {
        u: -120
    },
    "Etc/GMT+3": {
        u: -180
    },
    "Etc/GMT+4": {
        u: -240
    },
    "Etc/GMT+5": {
        u: -300
    },
    "Etc/GMT+6": {
        u: -360
    },
    "Etc/GMT+7": {
        u: -420
    },
    "Etc/GMT+8": {
        u: -480
    },
    "Etc/GMT+9": {
        u: -540
    },
    "Etc/GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT-1": {
        u: 60
    },
    "Etc/GMT-10": {
        u: 600
    },
    "Etc/GMT-11": {
        u: 660
    },
    "Etc/GMT-12": {
        u: 720
    },
    "Etc/GMT-13": {
        u: 780
    },
    "Etc/GMT-14": {
        u: 840
    },
    "Etc/GMT-2": {
        u: 120
    },
    "Etc/GMT-3": {
        u: 180
    },
    "Etc/GMT-4": {
        u: 240
    },
    "Etc/GMT-5": {
        u: 300
    },
    "Etc/GMT-6": {
        u: 360
    },
    "Etc/GMT-7": {
        u: 420
    },
    "Etc/GMT-8": {
        u: 480
    },
    "Etc/GMT-9": {
        u: 540
    },
    "Etc/GMT0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/Greenwich": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/UCT": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/UTC": {
        u: 0
    },
    "Etc/Universal": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/Zulu": {
        a: "Etc/UTC",
        r: 1
    },
    "Europe/Amsterdam": {
        a: "Europe/Brussels",
        c: ["NL"],
        r: 1
    },
    "Europe/Andorra": {
        u: 60,
        d: 120,
        c: ["AD"]
    },
    "Europe/Astrakhan": {
        u: 240,
        c: ["RU"]
    },
    "Europe/Athens": {
        u: 120,
        d: 180,
        c: ["GR"]
    },
    "Europe/Belfast": {
        a: "Europe/London",
        c: ["GB"],
        r: 1
    },
    "Europe/Belgrade": {
        u: 60,
        d: 120,
        c: ["RS", "BA", "HR", "ME", "MK", "SI"]
    },
    "Europe/Berlin": {
        u: 60,
        d: 120,
        c: ["DE", "DK", "NO", "SE", "SJ"]
    },
    "Europe/Bratislava": {
        a: "Europe/Prague",
        c: ["SK"],
        r: 1
    },
    "Europe/Brussels": {
        u: 60,
        d: 120,
        c: ["BE", "LU", "NL"]
    },
    "Europe/Bucharest": {
        u: 120,
        d: 180,
        c: ["RO"]
    },
    "Europe/Budapest": {
        u: 60,
        d: 120,
        c: ["HU"]
    },
    "Europe/Busingen": {
        a: "Europe/Zurich",
        c: ["DE"],
        r: 1
    },
    "Europe/Chisinau": {
        u: 120,
        d: 180,
        c: ["MD"]
    },
    "Europe/Copenhagen": {
        a: "Europe/Berlin",
        c: ["DK"],
        r: 1
    },
    "Europe/Dublin": {
        u: 60,
        d: 0,
        c: ["IE"]
    },
    "Europe/Gibraltar": {
        u: 60,
        d: 120,
        c: ["GI"]
    },
    "Europe/Guernsey": {
        a: "Europe/London",
        c: ["GG"],
        r: 1
    },
    "Europe/Helsinki": {
        u: 120,
        d: 180,
        c: ["FI", "AX"]
    },
    "Europe/Isle_of_Man": {
        a: "Europe/London",
        c: ["IM"],
        r: 1
    },
    "Europe/Istanbul": {
        u: 180,
        c: ["TR"]
    },
    "Europe/Jersey": {
        a: "Europe/London",
        c: ["JE"],
        r: 1
    },
    "Europe/Kaliningrad": {
        u: 120,
        c: ["RU"]
    },
    "Europe/Kiev": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Kirov": {
        u: 180,
        c: ["RU"]
    },
    "Europe/Kyiv": {
        u: 120,
        d: 180,
        c: ["UA"]
    },
    "Europe/Lisbon": {
        u: 0,
        d: 60,
        c: ["PT"]
    },
    "Europe/Ljubljana": {
        a: "Europe/Belgrade",
        c: ["SI"],
        r: 1
    },
    "Europe/London": {
        u: 0,
        d: 60,
        c: ["GB", "GG", "IM", "JE"]
    },
    "Europe/Luxembourg": {
        a: "Europe/Brussels",
        c: ["LU"],
        r: 1
    },
    "Europe/Madrid": {
        u: 60,
        d: 120,
        c: ["ES"]
    },
    "Europe/Malta": {
        u: 60,
        d: 120,
        c: ["MT"]
    },
    "Europe/Mariehamn": {
        a: "Europe/Helsinki",
        c: ["AX"],
        r: 1
    },
    "Europe/Minsk": {
        u: 180,
        c: ["BY"]
    },
    "Europe/Monaco": {
        a: "Europe/Paris",
        c: ["MC"],
        r: 1
    },
    "Europe/Moscow": {
        u: 180,
        c: ["RU"]
    },
    "Europe/Nicosia": {
        a: "Asia/Nicosia",
        r: 1
    },
    "Europe/Oslo": {
        a: "Europe/Berlin",
        c: ["NO"],
        r: 1
    },
    "Europe/Paris": {
        u: 60,
        d: 120,
        c: ["FR", "MC"]
    },
    "Europe/Podgorica": {
        a: "Europe/Belgrade",
        c: ["ME"],
        r: 1
    },
    "Europe/Prague": {
        u: 60,
        d: 120,
        c: ["CZ", "SK"]
    },
    "Europe/Riga": {
        u: 120,
        d: 180,
        c: ["LV"]
    },
    "Europe/Rome": {
        u: 60,
        d: 120,
        c: ["IT", "SM", "VA"]
    },
    "Europe/Samara": {
        u: 240,
        c: ["RU"]
    },
    "Europe/San_Marino": {
        a: "Europe/Rome",
        c: ["SM"],
        r: 1
    },
    "Europe/Sarajevo": {
        a: "Europe/Belgrade",
        c: ["BA"],
        r: 1
    },
    "Europe/Saratov": {
        u: 240,
        c: ["RU"]
    },
    "Europe/Simferopol": {
        u: 180,
        c: ["RU", "UA"]
    },
    "Europe/Skopje": {
        a: "Europe/Belgrade",
        c: ["MK"],
        r: 1
    },
    "Europe/Sofia": {
        u: 120,
        d: 180,
        c: ["BG"]
    },
    "Europe/Stockholm": {
        a: "Europe/Berlin",
        c: ["SE"],
        r: 1
    },
    "Europe/Tallinn": {
        u: 120,
        d: 180,
        c: ["EE"]
    },
    "Europe/Tirane": {
        u: 60,
        d: 120,
        c: ["AL"]
    },
    "Europe/Tiraspol": {
        a: "Europe/Chisinau",
        r: 1
    },
    "Europe/Ulyanovsk": {
        u: 240,
        c: ["RU"]
    },
    "Europe/Uzhgorod": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Vaduz": {
        a: "Europe/Zurich",
        c: ["LI"],
        r: 1
    },
    "Europe/Vatican": {
        a: "Europe/Rome",
        c: ["VA"],
        r: 1
    },
    "Europe/Vienna": {
        u: 60,
        d: 120,
        c: ["AT"]
    },
    "Europe/Vilnius": {
        u: 120,
        d: 180,
        c: ["LT"]
    },
    "Europe/Volgograd": {
        u: 180,
        c: ["RU"]
    },
    "Europe/Warsaw": {
        u: 60,
        d: 120,
        c: ["PL"]
    },
    "Europe/Zagreb": {
        a: "Europe/Belgrade",
        c: ["HR"],
        r: 1
    },
    "Europe/Zaporozhye": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Zurich": {
        u: 60,
        d: 120,
        c: ["CH", "DE", "LI"]
    },
    Factory: {
        u: 0
    },
    GB: {
        a: "Europe/London",
        c: ["GB"],
        r: 1
    },
    "GB-Eire": {
        a: "Europe/London",
        c: ["GB"],
        r: 1
    },
    GMT: {
        a: "Etc/GMT",
        r: 1
    },
    "GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    GMT0: {
        a: "Etc/GMT",
        r: 1
    },
    Greenwich: {
        a: "Etc/GMT",
        r: 1
    },
    HST: {
        u: -600
    },
    Hongkong: {
        a: "Asia/Hong_Kong",
        r: 1
    },
    Iceland: {
        a: "Africa/Abidjan",
        c: ["IS"],
        r: 1
    },
    "Indian/Antananarivo": {
        a: "Africa/Nairobi",
        c: ["MG"],
        r: 1
    },
    "Indian/Chagos": {
        u: 360,
        c: ["IO"]
    },
    "Indian/Christmas": {
        a: "Asia/Bangkok",
        c: ["CX"],
        r: 1
    },
    "Indian/Cocos": {
        a: "Asia/Yangon",
        c: ["CC"],
        r: 1
    },
    "Indian/Comoro": {
        a: "Africa/Nairobi",
        c: ["KM"],
        r: 1
    },
    "Indian/Kerguelen": {
        a: "Indian/Maldives",
        c: ["TF"],
        r: 1
    },
    "Indian/Mahe": {
        a: "Asia/Dubai",
        c: ["SC"],
        r: 1
    },
    "Indian/Maldives": {
        u: 300,
        c: ["MV", "TF"]
    },
    "Indian/Mauritius": {
        u: 240,
        c: ["MU"]
    },
    "Indian/Mayotte": {
        a: "Africa/Nairobi",
        c: ["YT"],
        r: 1
    },
    "Indian/Reunion": {
        a: "Asia/Dubai",
        c: ["RE"],
        r: 1
    },
    Iran: {
        a: "Asia/Tehran",
        r: 1
    },
    Israel: {
        a: "Asia/Jerusalem",
        r: 1
    },
    Jamaica: {
        a: "America/Jamaica",
        r: 1
    },
    Japan: {
        a: "Asia/Tokyo",
        r: 1
    },
    Kwajalein: {
        a: "Pacific/Kwajalein",
        r: 1
    },
    Libya: {
        a: "Africa/Tripoli",
        r: 1
    },
    MET: {
        u: 60,
        d: 120
    },
    MST: {
        u: -420
    },
    MST7MDT: {
        u: -420,
        d: -360
    },
    "Mexico/BajaNorte": {
        a: "America/Tijuana",
        r: 1
    },
    "Mexico/BajaSur": {
        a: "America/Mazatlan",
        r: 1
    },
    "Mexico/General": {
        a: "America/Mexico_City",
        r: 1
    },
    NZ: {
        a: "Pacific/Auckland",
        c: ["NZ"],
        r: 1
    },
    "NZ-CHAT": {
        a: "Pacific/Chatham",
        r: 1
    },
    Navajo: {
        a: "America/Denver",
        r: 1
    },
    PRC: {
        a: "Asia/Shanghai",
        r: 1
    },
    PST8PDT: {
        u: -480,
        d: -420
    },
    "Pacific/Apia": {
        u: 780,
        c: ["WS"]
    },
    "Pacific/Auckland": {
        u: 720,
        d: 780,
        c: ["NZ", "AQ"]
    },
    "Pacific/Bougainville": {
        u: 660,
        c: ["PG"]
    },
    "Pacific/Chatham": {
        u: 765,
        d: 825,
        c: ["NZ"]
    },
    "Pacific/Chuuk": {
        a: "Pacific/Port_Moresby",
        c: ["FM"],
        r: 1
    },
    "Pacific/Easter": {
        u: -360,
        d: -300,
        c: ["CL"]
    },
    "Pacific/Efate": {
        u: 660,
        c: ["VU"]
    },
    "Pacific/Enderbury": {
        a: "Pacific/Kanton",
        r: 1
    },
    "Pacific/Fakaofo": {
        u: 780,
        c: ["TK"]
    },
    "Pacific/Fiji": {
        u: 720,
        c: ["FJ"]
    },
    "Pacific/Funafuti": {
        a: "Pacific/Tarawa",
        c: ["TV"],
        r: 1
    },
    "Pacific/Galapagos": {
        u: -360,
        c: ["EC"]
    },
    "Pacific/Gambier": {
        u: -540,
        c: ["PF"]
    },
    "Pacific/Guadalcanal": {
        u: 660,
        c: ["SB", "FM"]
    },
    "Pacific/Guam": {
        u: 600,
        c: ["GU", "MP"]
    },
    "Pacific/Honolulu": {
        u: -600,
        c: ["US"]
    },
    "Pacific/Johnston": {
        a: "Pacific/Honolulu",
        r: 1
    },
    "Pacific/Kanton": {
        u: 780,
        c: ["KI"]
    },
    "Pacific/Kiritimati": {
        u: 840,
        c: ["KI"]
    },
    "Pacific/Kosrae": {
        u: 660,
        c: ["FM"]
    },
    "Pacific/Kwajalein": {
        u: 720,
        c: ["MH"]
    },
    "Pacific/Majuro": {
        a: "Pacific/Tarawa",
        c: ["MH"],
        r: 1
    },
    "Pacific/Marquesas": {
        u: -570,
        c: ["PF"]
    },
    "Pacific/Midway": {
        a: "Pacific/Pago_Pago",
        c: ["UM"],
        r: 1
    },
    "Pacific/Nauru": {
        u: 720,
        c: ["NR"]
    },
    "Pacific/Niue": {
        u: -660,
        c: ["NU"]
    },
    "Pacific/Norfolk": {
        u: 660,
        d: 720,
        c: ["NF"]
    },
    "Pacific/Noumea": {
        u: 660,
        c: ["NC"]
    },
    "Pacific/Pago_Pago": {
        u: -660,
        c: ["AS", "UM"]
    },
    "Pacific/Palau": {
        u: 540,
        c: ["PW"]
    },
    "Pacific/Pitcairn": {
        u: -480,
        c: ["PN"]
    },
    "Pacific/Pohnpei": {
        a: "Pacific/Guadalcanal",
        c: ["FM"],
        r: 1
    },
    "Pacific/Ponape": {
        a: "Pacific/Guadalcanal",
        c: ["FM"],
        r: 1
    },
    "Pacific/Port_Moresby": {
        u: 600,
        c: ["PG", "AQ", "FM"]
    },
    "Pacific/Rarotonga": {
        u: -600,
        c: ["CK"]
    },
    "Pacific/Saipan": {
        a: "Pacific/Guam",
        c: ["MP"],
        r: 1
    },
    "Pacific/Samoa": {
        a: "Pacific/Pago_Pago",
        c: ["AS"],
        r: 1
    },
    "Pacific/Tahiti": {
        u: -600,
        c: ["PF"]
    },
    "Pacific/Tarawa": {
        u: 720,
        c: ["KI", "MH", "TV", "UM", "WF"]
    },
    "Pacific/Tongatapu": {
        u: 780,
        c: ["TO"]
    },
    "Pacific/Truk": {
        a: "Pacific/Port_Moresby",
        c: ["FM"],
        r: 1
    },
    "Pacific/Wake": {
        a: "Pacific/Tarawa",
        c: ["UM"],
        r: 1
    },
    "Pacific/Wallis": {
        a: "Pacific/Tarawa",
        c: ["WF"],
        r: 1
    },
    "Pacific/Yap": {
        a: "Pacific/Port_Moresby",
        c: ["FM"],
        r: 1
    },
    Poland: {
        a: "Europe/Warsaw",
        r: 1
    },
    Portugal: {
        a: "Europe/Lisbon",
        r: 1
    },
    ROC: {
        a: "Asia/Taipei",
        r: 1
    },
    ROK: {
        a: "Asia/Seoul",
        r: 1
    },
    Singapore: {
        a: "Asia/Singapore",
        c: ["SG"],
        r: 1
    },
    Turkey: {
        a: "Europe/Istanbul",
        r: 1
    },
    UCT: {
        a: "Etc/UTC",
        r: 1
    },
    "US/Alaska": {
        a: "America/Anchorage",
        r: 1
    },
    "US/Aleutian": {
        a: "America/Adak",
        r: 1
    },
    "US/Arizona": {
        a: "America/Phoenix",
        c: ["US"],
        r: 1
    },
    "US/Central": {
        a: "America/Chicago",
        r: 1
    },
    "US/East-Indiana": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "US/Eastern": {
        a: "America/New_York",
        r: 1
    },
    "US/Hawaii": {
        a: "Pacific/Honolulu",
        r: 1
    },
    "US/Indiana-Starke": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "US/Michigan": {
        a: "America/Detroit",
        r: 1
    },
    "US/Mountain": {
        a: "America/Denver",
        r: 1
    },
    "US/Pacific": {
        a: "America/Los_Angeles",
        r: 1
    },
    "US/Samoa": {
        a: "Pacific/Pago_Pago",
        c: ["AS"],
        r: 1
    },
    UTC: {
        a: "Etc/UTC",
        r: 1
    },
    Universal: {
        a: "Etc/UTC",
        r: 1
    },
    "W-SU": {
        a: "Europe/Moscow",
        r: 1
    },
    WET: {
        u: 0,
        d: 60
    },
    Zulu: {
        a: "Etc/UTC",
        r: 1
    }
}
  , Cs = {
    countries: CA,
    timezones: PA
};
function RA(e, t) {
    var n = e.timezones[t];
    if (!n)
        return null;
    var r = n.a
      , o = r === void 0 ? null : r
      , a = o ? e.timezones[o] : {}
      , i = bi(bi({}, a), e.timezones[t])
      , s = i.c || []
      , l = i.u
      , c = Number.isInteger(i.d) ? i.d : l
      , u = {
        name: t,
        countries: s,
        utcOffset: l,
        utcOffsetStr: _c(l),
        dstOffset: c,
        dstOffsetStr: _c(c),
        aliasOf: o
    };
    return n.r && (u.deprecated = !0),
    u
}
function _c(e) {
    var t = Math.floor(Math.abs(e) / 60)
      , n = e % 60
      , r = e < 0 ? "-" : "+";
    return "".concat(r).concat(Ac(t), ":").concat(Ac(n))
}
function Ac(e) {
    var t = Math.abs(e)
      , n = t < 10 ? "0" : "";
    return "".concat(n).concat(t)
}
var MA = Object.keys(Cs.timezones).length
  , wr = {}
  , xf = 0;
function wc() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return MA !== xf && Object.keys(Cs.timezones).forEach(OA),
    IA(wr, e)
}
function OA(e) {
    return wr[e] || LA(RA(Cs, e)),
    wr[e] ? bi({}, wr[e]) : null
}
function LA(e) {
    e && (wr[e.name] = e,
    xf = Object.keys(e).length)
}
function IA(e, t) {
    var n = t || {}
      , r = n.deprecated;
    return r === !0 ? e : Object.keys(e).reduce(function(o, a) {
        return e[a].deprecated || Object.assign(o, Sf({}, a, e[a])),
        o
    }, {})
}
const DA = zo("locale", () => {
    const e = q("USD")
      , t = q("United States")
      , n = q("US")
      , r = Zn()
      , o = q(Pt.codes())
      , a = q(Object.keys(wc()))
      , i = q(Intl.DateTimeFormat().resolvedOptions().timeZone)
      , s = q(dA())
      , l = X( () => {
        const d = ["austria", "belgium", "bulgaria", "croatia", "republic of cyprus", "czech republic", "denmark", "estonia", "finland", "france", "germany", "greece", "hungary", "ireland", "italy", "latvia", "lithuania", "luxembourg", "malta", "netherlands", "poland", "portugal", "romania", "slovakia", "slovenia", "spain", "sweden"]
          , f = r.query.eu === "true";
        return t.value && d.includes(t.value.toLowerCase()) || f
    }
    );
    function c(d) {
        return wc()[d].utcOffsetStr
    }
    async function u() {
        var d, f;
        try {
            const p = await Ub("https://api.country.is", "$SG8YrHKyad");
            t.value = uA(((d = p.data.value) == null ? void 0 : d.country) || "US") ?? "United States",
            n.value = ((f = p.data.value) == null ? void 0 : f.country) || "US";
            const m = Pt.country(t.value);
            e.value = m.length ? m[0].code : "USD"
        } catch {
            e.value = "USD",
            t.value = "United States",
            n.value = "US"
        }
    }
    return u(),
    {
        timezoneList: a,
        timezone: i,
        currencyCodeList: o,
        currencyCode: e,
        countryList: s,
        countryCode: n,
        country: t,
        isEU: l,
        timezoneToOffset: c
    }
}
)
  , BA = {
    class: "bg-yellow-300 flex flex-col gap-4 px-6 py-4 text-black text-sm lg:flex-row lg:gap-5 lg:tems-center lg:justify-center"
}
  , NA = Q("div", null, [Q("p", null, " We use necessary cookies to make our site work. We’d like to set additional cookies to understand site usage, make site improvements, and remember your settings. We also use cookies from other sites to help deliver content from their services. ")], -1)
  , FA = he({
    __name: "TheCookieConsent",
    setup(e) {
        const t = q(!1)
          , n = q(!1)
          , r = xs()
          , o = DA();
        ji( () => {
            {
                if (r.setConsentSettings(),
                r.consentCookie)
                    return;
                t.value = o.isEU,
                o.isEU || r.setConsentCookie()
            }
        }
        );
        function a() {
            r.setConsentCookie(),
            r.setConsentSettings(),
            t.value = !1,
            n.value = !1
        }
        return (i, s) => {
            const l = Ss;
            return Fp((ne(),
            ue("div", BA, [NA, ie(l, {
                variant: "outline",
                class: "whitespace-nowrap text-black",
                onClick: ml(K(r).openDialog, ["prevent"])
            }, {
                default: Ie( () => [We(" Manage settings ")]),
                _: 1
            }, 8, ["onClick"]), ie(l, {
                variant: "primary",
                class: "whitespace-nowrap",
                onClick: ml(a, ["prevent"])
            }, {
                default: Ie( () => [We(" Agree and continue ")]),
                _: 1
            }, 8, ["onClick"])], 512)), [[Fm, K(t)]])
        }
    }
})
  , $A = he({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const t = e.renderKey
          , n = e.route
          , r = {};
        for (const o in e.route)
            Object.defineProperty(r, o, {
                get: () => t === e.renderKey ? e.route[o] : n[o]
            });
        return $e(Fr, It(r)),
        () => ge(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , UA = he({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        const o = Oe()
          , a = q()
          , i = be(Fr, null);
        let s;
        r({
            pageRef: a
        });
        const l = be(Ju, null);
        let c;
        const u = o.deferHydration();
        if (o.isHydrating) {
            const d = o.hooks.hookOnce("app:error", u);
            ct().beforeEach(d)
        }
        return e.pageKey && Pe( () => e.pageKey, (d, f) => {
            d !== f && o.callHook("page:loading:start")
        }
        ),
        () => ge(_d, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: d => {
                const f = jA(i, d.route, d.Component)
                  , p = i && i.matched.length === d.route.matched.length;
                if (!d.Component) {
                    if (c && !p)
                        return c;
                    u();
                    return
                }
                if (c && l && !l.isCurrent(d.route))
                    return c;
                if (f && i && (!l || l != null && l.isCurrent(i)))
                    return p ? c : null;
                const m = oi(d, e.pageKey);
                !o.isHydrating && !VA(i, d.route, d.Component) && s === m && o.callHook("page:loading:end"),
                s = m;
                const b = !!(e.transition ?? d.route.meta.pageTransition ?? Ka)
                  , w = b && HA([e.transition, d.route.meta.pageTransition, Ka, {
                    onAfterLeave: () => {
                        o.callHook("page:transition:finish", d.Component)
                    }
                }].filter(Boolean))
                  , E = e.keepalive ?? d.route.meta.keepalive ?? A0;
                return c = wd(Ho, b && w, db(E, ge(Ni, {
                    suspensible: !0,
                    onPending: () => o.callHook("page:start", d.Component),
                    onResolve: () => {
                        lt( () => o.callHook("page:finish", d.Component).then( () => o.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: () => {
                        const _ = ge($A, {
                            key: m || void 0,
                            vnode: n.default ? ge(we, void 0, n.default(d)) : d.Component,
                            route: d.route,
                            renderKey: m || void 0,
                            trackRootNodes: b,
                            vnodeRef: a
                        });
                        return E && (_.type.name = d.Component.type.name || d.Component.type.__name || "RouteProvider"),
                        _
                    }
                }))).default(),
                c
            }
        })
    }
});
function HA(e) {
    const t = e.map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? as(n.onAfterLeave) : void 0
    }));
    return Wu(...t)
}
function jA(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(o => {
        var a;
        return ((a = o.components) == null ? void 0 : a.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some( (o, a) => {
        var i, s, l;
        return ((i = o.components) == null ? void 0 : i.default) !== ((l = (s = e.matched[a]) == null ? void 0 : s.components) == null ? void 0 : l.default)
    }
    ) || n && oi({
        route: t,
        Component: n
    }) !== oi({
        route: e,
        Component: n
    })
}
function VA(e, t, n) {
    return e ? t.matched.findIndex(o => {
        var a;
        return ((a = o.components) == null ? void 0 : a.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const GA = 3e3
  , Cf = zo("toast", () => {
    const e = q([]);
    function t(n) {
        e.value.push(n),
        setTimeout( () => {
            e.value.pop()
        }
        , GA)
    }
    return {
        toasts: e,
        addToast: t
    }
}
)
  , KA = {
    key: 0,
    class: "fixed bottom-4 right-4"
}
  , zA = {
    class: "text-sm font-normal"
}
  , WA = he({
    __name: "TheToast",
    setup(e) {
        const t = Cf();
        return (n, r) => K(t).toasts.length ? (ne(),
        ue("div", KA, [(ne(!0),
        ue(we, null, Mn(K(t).toasts, (o, a) => (ne(),
        ue("div", {
            key: a,
            class: gt(["flex items-center w-full max-w-xs p-4 rounded-lg shadow mb-5 last:mb-0 z-40", {
                "bg-green-600 text-white": o.type === "success",
                "bg-gray-800 dark:bg-white text-white dark:text-black": o.type === "info"
            }]),
            role: "alert"
        }, [Q("div", zA, Et(o.text), 1)], 2))), 128))])) : yt("", !0)
    }
})
  , qA = {
    class: "flex items-center cursor-pointer"
}
  , JA = ["checked"]
  , YA = {
    class: "flex items-center justify-center rounded border border-gray-300 dark:border-gray-500 h-5 w-5 mr-2 peer-disabled:opacity-50 relative peer-focus:border-blue-500 peer-checked:bg-blue-500 peer-checked:border-blue-500"
}
  , ZA = {
    key: 0,
    class: "text-xs text-gray-700 dark:text-gray-200 mt-1"
}
  , QA = he({
    __name: "AppCheckbox",
    props: {
        label: {},
        modelValue: {
            type: Boolean
        },
        checked: {
            type: Boolean
        },
        hint: {}
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t}) {
        const n = Zp()
          , r = t
          , o = e
          , a = X( () => o.modelValue ? o.modelValue : o.checked);
        function i(s) {
            var l;
            r("update:modelValue", (l = s.target) == null ? void 0 : l.checked)
        }
        return (s, l) => (ne(),
        ue(we, null, [Q("label", qA, [Q("input", qi({
            type: "checkbox",
            class: "peer hidden",
            checked: K(a)
        }, K(n), {
            onInput: i
        }), null, 16, JA), Q("div", YA, [K(a) ? (ne(),
        et(K(i1), {
            key: 0,
            class: "text-white [&_path]:stroke-current [&_path]:stroke-2 w-3"
        })) : yt("", !0)]), We(" " + Et(s.label), 1)]), s.hint ? (ne(),
        ue("div", ZA, Et(s.hint), 1)) : yt("", !0)], 64))
    }
})
  , XA = Q("div", {
    class: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
}, null, -1)
  , ew = {
    class: "fixed inset-0 overflow-y-auto"
}
  , tw = {
    class: "flex min-h-full items-center justify-center p-4 text-center text-sm"
}
  , nw = {
    class: "mb-8"
}
  , rw = Q("div", {
    class: "mb-6"
}, [Q("p", null, " We use cookies to help you navigate efficiently and perform certain functions. The cookies categorized as “Necessary” are stored on your browser as they are essential for enabling the basic functionalities of the site. We also use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and advertisements that are relevant to you. These cookies will only be stored in your browser with your prior consent. You can enable or disable some or all of these cookies, but disabling some may affect your browsing experience. ")], -1)
  , ow = Q("p", null, [Q("small", null, "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.")], -1)
  , aw = Q("p", null, [Q("small", null, "Functional cookies help perform certain functionalities like sharing the website’s content on social media platforms, collecting feedback, and other third-party features.")], -1)
  , iw = Q("p", null, [Q("small", null, "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide metrics like the number of visitors, bounce rate, traffic source, etc.")], -1)
  , sw = Q("p", null, [Q("small", null, "Advertisement cookies are used to provide visitors with customized advertisements based on the visited pages and to analyze the effectiveness of the ad campaigns.")], -1)
  , lw = {
    class: "mt-4"
}
  , cw = {
    class: "flex justify-end gap-x-2"
}
  , uw = he({
    __name: "TheCookieConsentDialog",
    setup(e) {
        const t = xs()
          , n = Cf();
        function r() {
            n.addToast({
                text: "Cookie settings saved",
                type: "success"
            }),
            t.setConsentCookie(),
            t.setConsentSettings(),
            t.closeDialog()
        }
        return (o, a) => {
            const i = QA
              , s = Ss
              , l = ss;
            return ne(),
            et(l, null, {
                default: Ie( () => [ie(K(_f), {
                    appear: "",
                    show: K(t).isDialogOpen,
                    as: "template"
                }, {
                    default: Ie( () => [ie(K(H_), {
                        as: "div",
                        open: K(t).isDialogOpen,
                        class: "relative z-[100]",
                        onClose: K(t).closeDialog
                    }, {
                        default: Ie( () => [ie(K(yi), {
                            as: "template",
                            enter: "duration-200 ease-out",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                        }, {
                            default: Ie( () => [XA]),
                            _: 1
                        }), Q("div", ew, [Q("div", tw, [ie(K(yi), {
                            as: "template",
                            enter: "duration-200 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                        }, {
                            default: Ie( () => [ie(K(j_), {
                                class: "w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all"
                            }, {
                                default: Ie( () => [ie(K(V_), {
                                    as: "div",
                                    class: "text-2xl font-bold mb-6"
                                }, {
                                    default: Ie( () => [We(" We Value Your Privacy ")]),
                                    _: 1
                                }), Q("div", nw, [rw, ie(i, {
                                    label: "Necessary",
                                    class: "mb-1",
                                    disabled: "",
                                    checked: ""
                                }), ow, ie(i, {
                                    modelValue: K(t).preferences.functional,
                                    "onUpdate:modelValue": a[0] || (a[0] = c => K(t).preferences.functional = c),
                                    label: "Functional",
                                    class: "mb-1"
                                }, null, 8, ["modelValue"]), aw, ie(i, {
                                    modelValue: K(t).preferences.analytics,
                                    "onUpdate:modelValue": a[1] || (a[1] = c => K(t).preferences.analytics = c),
                                    label: "Analytical",
                                    class: "mb-1"
                                }, null, 8, ["modelValue"]), iw, ie(i, {
                                    modelValue: K(t).preferences.advertisement,
                                    "onUpdate:modelValue": a[2] || (a[2] = c => K(t).preferences.advertisement = c),
                                    label: "Advertisement",
                                    class: "mb-1"
                                }, null, 8, ["modelValue"]), sw]), Q("div", lw, [Q("div", cw, [ie(s, {
                                    variant: "secondary",
                                    onClick: K(t).closeDialog
                                }, {
                                    default: Ie( () => [We(" Close ")]),
                                    _: 1
                                }, 8, ["onClick"]), ie(s, {
                                    variant: "primary",
                                    onClick: r
                                }, {
                                    default: Ie( () => [We(" Save Settings ")]),
                                    _: 1
                                })])])]),
                                _: 1
                            })]),
                            _: 1
                        })])])]),
                        _: 1
                    }, 8, ["open", "onClose"])]),
                    _: 1
                }, 8, ["show"])]),
                _: 1
            })
        }
    }
})
  , dw = he({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await Yt[e.name]().then(r => r.default || r);
        return () => ge(n, e.layoutProps, t.slots)
    }
})
  , fw = he({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    setup(e, t) {
        const n = Oe()
          , r = be(Fr)
          , o = r === Zn() ? Ad() : r
          , a = X( () => {
            let l = K(e.name) ?? o.meta.layout ?? "default";
            return l && !(l in Yt) && e.fallback && (l = K(e.fallback)),
            l
        }
        )
          , i = q();
        t.expose({
            layoutRef: i
        });
        const s = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", s);
            ct().beforeEach(l)
        }
        return () => {
            const l = a.value && a.value in Yt
              , c = o.meta.layoutTransition ?? _0;
            return wd(Ho, l && c, {
                default: () => ge(Ni, {
                    suspensible: !0,
                    onResolve: () => {
                        lt(s)
                    }
                }, {
                    default: () => ge(pw, {
                        layoutProps: qi(t.attrs, {
                            ref: i
                        }),
                        key: a.value || void 0,
                        name: a.value,
                        shouldProvide: !e.name,
                        hasTransition: !!c
                    }, t.slots)
                })
            }).default()
        }
    }
})
  , pw = he({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(e, t) {
        const n = e.name;
        return e.shouldProvide && $e(Ju, {
            isCurrent: r => n === (r.meta.layout ?? "default")
        }),
        () => {
            var r, o;
            return !n || typeof n == "string" && !(n in Yt) ? (o = (r = t.slots).default) == null ? void 0 : o.call(r) : ge(dw, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , mw = he({
    __name: "AppEzoicAd",
    props: {
        adId: {}
    },
    setup(e) {
        const t = e
          , n = q()
          , r = X( () => `ezoic-pub-ad-placeholder-${t.adId}`);
        return (o, a) => {
            const i = ss;
            return ne(),
            ue("div", {
                key: 1,
                ref_key: "adElement",
                ref: n
            }, [ie(i, null, {
                default: Ie( () => [a[0] || (Ao(-1),
                a[0] = Q("div", {
                    id: K(r)
                }, null, 8, ["id"]),
                Ao(1),
                a[0])]),
                _: 1
            })], 512)
        }
    }
})
  , hw = {
    class: "border-t border-gray-300 dark:border-gray-700 text-sm w-full"
}
  , gw = {
    class: "px-6 py-4 w-full"
}
  , yw = {
    class: "flex flex-col sm:flex-row justify-between mx-auto max-w-screen-2xl w-full mb-5"
}
  , bw = {
    class: "mb-5 sm:mb-0"
}
  , vw = {
    key: 0,
    class: "italic mt-1"
}
  , _w = Q("a", {
    href: "https://jasonmacfarlane.dev",
    target: "_blank"
}, " Jason Macfarlane ", -1)
  , Aw = {
    class: "flex"
}
  , ww = {
    class: "border-gray-300 dark:border-gray-700 border-r last:border-0 mr-4 last:mr-0 pr-4 last:pr-0"
}
  , Ew = {
    class: "border-gray-300 dark:border-gray-700 border-r last:border-0 mr-4 last:mr-0 pr-4 last:pr-0"
}
  , kw = Q("div", {
    class: "text-xs mx-auto max-w-screen-2xl"
}, " We participate in the Wix Affiliate Program, which means that if you click on a link to Wix and sign up for their services, we may earn a commission at no extra cost to you. Our recommendations are based on our genuine experience and expertise with their platform. ", -1)
  , Tw = {
    key: 0,
    class: "bg-white dark:bg-gray-900 sticky bottom-0 border-b border-t border-gray-300 dark:border-gray-700"
}
  , Sw = he({
    __name: "TheFooter",
    setup(e) {
        const t = Ad()
          , n = Nr()
          , r = xs()
          , o = X( () => new Date().getFullYear())
          , a = X( () => n.showFooterName);
        return (i, s) => {
            const l = Ss
              , c = mw;
            return ne(),
            ue(we, null, [Q("div", hw, [Q("div", gw, [Q("div", yw, [Q("div", bw, [We(" Web Code Tools © " + Et(K(o)) + ". All rights reserved. ", 1), K(a) ? (ne(),
            ue("div", vw, [We(" by "), _w])) : yt("", !0)]), Q("ul", Aw, [Q("li", ww, [ie(l, {
                variant: "link",
                "no-padding": "",
                onClick: K(r).openDialog
            }, {
                default: Ie( () => [We(" Cookie Settings ")]),
                _: 1
            }, 8, ["onClick"])]), Q("li", Ew, [ie(l, {
                to: "/privacy",
                variant: "link",
                "no-padding": ""
            }, {
                default: Ie( () => [We(" Privacy ")]),
                _: 1
            })])])]), kw])]), K(t).name !== "index" ? (ne(),
            ue("div", Tw, [ie(c, {
                "ad-id": 134,
                class: "min-h-[50px] md:min-h-[90px]"
            })])) : yt("", !0)], 64)
        }
    }
})
  , xw = {
    class: "flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
}
  , Cw = {
    class: "flex flex-1 flex-col"
}
  , Pw = {
    class: "flex-1"
}
  , Rw = {
    class: "flex flex-col flex-1 relative h-full w-full"
}
  , Mw = he({
    __name: "app",
    setup(e) {
        return xe(async () => {
            await Xv(0);
            const n = Array.from(document.querySelectorAll('[id^="ezoic-pub-ad-placeholder-"]')).map(r => r.id.split("-").pop());
            window.ezstandalone = window.ezstandalone || {},
            ezstandalone.cmd = ezstandalone.cmd || [],
            ezstandalone.cmd.push( () => {
                ezstandalone.showAds(...n)
            }
            )
        }
        ),
        (t, n) => {
            const r = C1
              , o = iA
              , a = FA
              , i = UA
              , s = WA
              , l = uw
              , c = fw
              , u = Sw;
            return ne(),
            ue("div", xw, [ie(r), Q("div", Cw, [ie(o), ie(a), Q("main", Pw, [Q("div", Rw, [ie(c, null, {
                default: Ie( () => [ie(i), ie(s), ie(l)]),
                _: 1
            })])]), ie(u)])])
        }
    }
})
  , Ow = {
    class: "items-center justify-center text-center mx-auto max-w-lg p-6 w-full dark:text-white"
}
  , Lw = {
    class: "mb-14"
}
  , Iw = Q("span", {
    class: "block text-[60px]"
}, "😬", -1)
  , Dw = Q("h1", null, [We(" 404: This page no longer exists. "), Q("br"), We(" We probably just forgot to redirect it. ")], -1)
  , Bw = {
    key: 1
}
  , Nw = _m('<ul class="gap-y-4 md:gap-x-8 grid grid-cols-1 md:grid-cols-2"><li><a href="/css-generator">CSS Generator</a></li><li><a href="/html-generator">HTML Generator</a></li><li><a href="/structured-data-generator">Structured Data Generator</a></li><li><a href="/meta-tags-generator">Meta Tags Generator</a></li><li><a href="/open-graph-generator">Open Graph Generator</a></li><li><a href="/twitter-card-generator">Twitter Card Generator</a></li></ul>', 1)
  , Fw = he({
    __name: "error",
    props: {
        error: {}
    },
    setup(e) {
        return (t, n) => (ne(),
        ue("div", Ow, [Q("div", Lw, [t.error.statusCode === 404 ? (ne(),
        ue(we, {
            key: 0
        }, [Iw, Dw], 64)) : (ne(),
        ue("h1", Bw, "An error occurred"))]), Nw]))
    }
})
  , $w = {
    key: 0
}
  , Ec = {
    __name: "nuxt-root",
    setup(e) {
        const t = () => null
          , n = Oe()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", r);
            ct().beforeEach(l)
        }
        const o = !1;
        $e(Fr, Zn()),
        n.hooks.callHookWith(l => l.map(c => c()), "vue:setup");
        const a = Vo()
          , i = !1;
        uu( (l, c, u) => {
            if (n.hooks.callHook("vue:error", l, c, u).catch(d => console.error("[nuxt] Error in `vue:error` hook", d)),
            lg(l) && (l.fatal || l.unhandled))
                return n.runWithContext( () => Ln(l)),
                !1
        }
        );
        const s = !1;
        return (l, c) => (ne(),
        et(Ni, {
            onResolve: K(r)
        }, {
            default: Ie( () => [K(i) ? (ne(),
            ue("div", $w)) : K(a) ? (ne(),
            et(K(Fw), {
                key: 1,
                error: K(a)
            }, null, 8, ["error"])) : K(s) ? (ne(),
            et(K(t), {
                key: 2,
                context: K(s)
            }, null, 8, ["context"])) : K(o) ? (ne(),
            et(Bi(K(o)), {
                key: 3
            })) : (ne(),
            et(K(Mw), {
                key: 4
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let kc;
{
    let e;
    kc = async function() {
        var i, s;
        if (e)
            return e;
        const r = !!(((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ?? ((s = document.getElementById("__NUXT_DATA__")) == null ? void 0 : s.dataset.ssr) === "true") ? oh(Ec) : rh(Ec)
          , o = S0({
            vueApp: r
        });
        async function a(l) {
            await o.callHook("app:error", l),
            o.payload.error = o.payload.error || $r(l)
        }
        r.config.errorHandler = a;
        try {
            await P0(o, Tv)
        } catch (l) {
            a(l)
        }
        try {
            await o.hooks.callHook("app:created", r),
            await o.hooks.callHook("app:beforeMount", r),
            r.mount(k0),
            await o.hooks.callHook("app:mounted", r),
            await lt()
        } catch (l) {
            a(l)
        }
        return r.config.errorHandler === a && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = kc().catch(t => {
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {_t as $, Fp as A, Fm as B, Vw as C, Ge as D, Br as E, we as F, Hi as G, Ui as H, Qa as I, vt as J, zo as K, Re as L, h_ as M, Ct as N, pe as O, f_ as P, s_ as Q, af as R, $e as S, e_ as T, Xe as U, ge as V, p_ as W, Po as X, J1 as Y, Or as Z, fw as _, ie as a, _s as a0, Hr as a1, t_ as a2, As as a3, xo as a4, tt as a5, lt as a6, be as a7, d_ as a8, Co as a9, ml as aa, Bi as ab, c1 as ac, s1 as ad, Ad as ae, mw as af, l1 as ag, Sv as ah, cs as ai, QA as aj, DA as ak, Qn as al, Vr as am, qw as an, es as ao, Ce as ap, Hw as aq, jw as ar, Ww as b, et as c, he as d, X as e, xe as f, Pe as g, Q as h, ue as i, Mn as j, yt as k, f1 as l, We as m, Lo as n, ne as o, Ss as p, Jp as q, q as r, gt as s, ss as t, K as u, Et as v, Ie as w, Zp as x, zw as y, qi as z};
