import {d as c, ae as l, o, i as a, h as e, q as r, k as t, u as i, a as m, F as _, af as p} from "./t-Ic3Q-i.js";
const f = {
    class: "@container border-b border-gray-300 dark:border-gray-700 z-10"
}
  , u = {
    class: "flex flex-col items-start gap-y-4 mx-auto max-w-screen-2xl px-6 py-4"
}
  , x = {
    class: "flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-10 w-full"
}
  , b = {
    class: "flex-1"
}
  , g = {
    key: 0
}
  , h = {
    key: 0,
    class: "bg-white dark:bg-gray-900 sticky top-0 lg:top-[50px] border-b border-gray-300 dark:border-gray-700 z-50"
}
  , w = c({
    __name: "TheHeader",
    setup(y) {
        const d = l();
        return (s, k) => {
            const n = p;
            return o(),
            a(_, null, [e("div", f, [e("div", u, [e("div", x, [e("div", b, [r(s.$slots, "default")]), s.$slots.browsers ? (o(),
            a("div", g, [r(s.$slots, "browsers")])) : t("", !0)])])]), i(d).name !== "index" ? (o(),
            a("div", h, [m(n, {
                "ad-id": 133,
                class: "min-h-[50px] md:min-h-[90px]"
            })])) : t("", !0)], 64)
        }
    }
});
export {w as _};
