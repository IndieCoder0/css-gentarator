import {d as h, e as b, o as e, i as r, j as o, v as n, k as p, h as a, F as l, a as _, u as d, ag as g, ah as v} from "./t-Ic3Q-i.js";
const k = {
    key: 0
}
  , f = {
    class: "md:gap-3 md:grid md:grid-cols-3 list-none ml-0"
}
  , x = ["href"]
  , y = {
    class: "flex-1 mr-4"
}
  , N = {
    class: "block group-hover:translate-x-0.5 transition-transform"
}
  , V = h({
    __name: "TheGeneratorsNav",
    props: {
        module: {}
    },
    setup(u) {
        const c = v()
          , m = u
          , i = b( () => c[m.module].nav);
        return (w, B) => (e(!0),
        r(l, null, o(d(i), t => (e(),
        r("div", {
            key: t.name,
            class: "mb-6 last:mb-0"
        }, [t.name ? (e(),
        r("h2", k, n(t.name), 1)) : p("", !0), a("ul", f, [(e(!0),
        r(l, null, o(t.children, s => (e(),
        r("li", {
            key: s.name,
            class: "mb-3 last:mb-0 md:mb-0"
        }, [a("a", {
            href: s.link,
            class: "group border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-200 hover:text-blue-500 dark:hover:text-blue-200 flex items-center p-3 rounded-lg text-left text-black dark:text-white font-normal bg-gray-900/5 dark:bg-white/5 h-full active:scale-[0.98] w-full no-underline transition"
        }, [a("div", y, [a("span", N, n(s.name), 1)]), _(d(g), {
            class: "w-4 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        })], 8, x)]))), 128))])]))), 128))
    }
});
export {V as _};
