// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/sk.js

var t = async () => {
    let e = {
        stripeAccount: void 0,
        storeId: void 0,
        secretKey: void 0,
        publishableKey: void 0
    };
    return await global?.__skFindStripeAccount?.() ?? e
};
export {
    t as getSkContext
};