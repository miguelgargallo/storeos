// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/divisas.js

function o(e, n) {
    if (!e) throw new Error(n)
}
var s = e => {
    o(Number.isInteger(e), "Value must be an integer")
};
var u = e => (o(e.length === 3, "currency needs to be a 3-letter code"), a[e.toUpperCase()] ?? 2),
    m = ({
        amount: e,
        currency: n
    }) => {
        let t = 10 ** u(n);
        return Number.parseInt((e * t).toFixed(0), 10)
    },
    i = ({
        amount: e,
        currency: n
    }) => {
        s(e);
        let r = u(n),
            t = 10 ** r;
        return Number.parseFloat((e / t).toFixed(r))
    },
    p = ({
        amount: e,
        currency: n,
        locale: r = "en-US"
    }) => {
        let t = i({
            amount: e,
            currency: n
        });
        return new Intl.NumberFormat(r, {
            style: "currency",
            currency: n
        }).format(t)
    },
    a = {
        BIF: 0,
        CLP: 0,
        DJF: 0,
        GNF: 0,
        JPY: 0,
        KMF: 0,
        KRW: 0,
        MGA: 0,
        PYG: 0,
        RWF: 0,
        UGX: 0,
        VND: 0,
        VUV: 0,
        XAF: 0,
        XOF: 0,
        XPF: 0,
        BHD: 3,
        JOD: 3,
        KWD: 3,
        OMR: 3,
        TND: 3
    };
export {
    p as formatMoney, i as getDecimalFromStripeAmount, m as getStripeAmountFromDecimal
};