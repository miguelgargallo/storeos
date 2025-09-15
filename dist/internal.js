// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/internal.js

import {
    z as e
} from "zod";

function i(t, r) {
    if (!t) throw new Error(r)
}
var d = t => {
    if (t == null) return null;
    try {
        return JSON.parse(t)
    } catch {
        return null
    }
};
var m = t => t.toString().replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    S = t => Object.entries(t).map(([r, n]) => `${r}:"${m(n)}"`).join(" AND ").trim();

function k(t) {
    return t.toSorted((r, n) => {
        let a = Number(r.metadata.order),
            o = Number(n.metadata.order);
        return Number.isNaN(a) && Number.isNaN(o) || a === o ? n.updated - r.updated : Number.isNaN(a) ? 1 : Number.isNaN(o) ? -1 : a - o
    })
}
var g = e.object({
    category: e.string().optional(),
    order: e.coerce.number().optional(),
    slug: e.string(),
    variant: e.string().optional(),
    stock: e.coerce.number().optional().transform(t => t === void 0 ? 1 / 0 : t),
    digitalAsset: e.string().optional(),
    preview: e.string().optional()
});

function f({
    default_price: t,
    marketing_features: r,
    ...n
}) {
    return i(t, "Product must have a default price"), i(typeof t == "object", "Product default price must be an object"), {
        ...n,
        default_price: t,
        marketing_features: r.map(a => a.name).filter(Boolean),
        metadata: g.parse(n.metadata)
    }
}

function x(t) {
    return !!(t.active && !t.deleted && t.default_price)
}

function N(t) {
    return {
        ...t,
        data: t.data.filter(x)
    }
}

function T(t) {
    return t.data.map(f)
}

function b(t) {
    return t
}

function A(t) {
    return t.data.map(b)
}

function B(t) {
    return t.filter((r, n, a) => n === a.findIndex(o => o.metadata.slug === r.metadata.slug))
}
var R = t => !t.deleted && t.active,
    l = e.object({
        shippingRateId: e.string().optional(),
        taxCalculationId: e.string().optional(),
        taxCalculationExp: e.string().optional(),
        taxId: e.string().optional(),
        couponCode: e.string().optional(),
        taxedAmount: e.string().optional(),
        "billingAddress.city": e.string().optional(),
        "billingAddress.country": e.string().optional(),
        "billingAddress.line1": e.string().optional(),
        "billingAddress.line2": e.string().optional(),
        "billingAddress.name": e.string().optional(),
        "billingAddress.postalCode": e.string().optional(),
        "billingAddress.state": e.string().optional(),
        netAmount: e.string().optional(),
        taxBreakdown0: e.string().optional(),
        taxBreakdown1: e.string().optional(),
        taxBreakdown2: e.string().optional(),
        taxBreakdown3: e.string().optional(),
        taxBreakdown4: e.string().optional(),
        taxBreakdown5: e.string().optional()
    }).and(e.record(e.string())),
    c = e.object({
        taxType: e.string(),
        taxPercentage: e.string(),
        taxAmount: e.number()
    });

function M(t) {
    let r = t.payment_method;
    i(typeof r != "string", "Payment method should not be a string");
    let n = t.customer;
    i(typeof n != "string" && !n?.deleted, "Customer should not be a string");
    let a = l.parse(t.metadata),
        o = Object.entries(a).filter(([s]) => s.startsWith("taxBreakdown")).map(([s, u]) => {
            let p = c.safeParse(d(String(u)));
            return p.success ? p.data : null
        }).filter(Boolean);
    return {
        ...t,
        metadata: a,
        customer: n,
        payment_method: r,
        taxBreakdown: o
    }
}

function j({
    payment_method: t,
    latest_charge: r,
    ...n
}) {
    i(typeof t == "object", "Payment method is missing from order"), i(typeof r == "object", "Latest charge is missing from order");
    let a = l.parse(n.metadata),
        o = Object.entries(a).filter(([s]) => s.startsWith("taxBreakdown")).map(([s, u]) => {
            let p = c.safeParse(d(String(u)));
            return p.success ? p.data : null
        }).filter(Boolean);
    return {
        ...n,
        payment_method: t,
        latest_charge: r,
        taxBreakdown: o,
        metadata: a
    }
}
export {
    l as cartMetadataSchema, c as cartMetadataTaxBreakdownSchema, x as filterValidProduct, N as filterValidProducts, B as getUniqueVariants, R as isProductAvailable, M as mapCart, j as mapOrder, f as mapProduct, T as mapProducts, b as mapShippingRate, A as mapShippingRates, S as objectToStripeQuery, m as sanitizeQueryValue, k as sortProducts
};