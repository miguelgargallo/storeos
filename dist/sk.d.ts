// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/sk.d.ts

type SkFindStripeAccountResult = {
    stripeAccount: string | undefined;
    storeId: string | undefined;
    secretKey: string | undefined;
    publishableKey: string | undefined;
};
type SkContextResult = {
    stripeAccount: string | undefined;
    storeId: string | undefined;
    secretKey: string | undefined;
    publishableKey: string | undefined;
};
declare global {
    /**
     * ⚠️ Warning: This might be `undefined` but TypeScript doesn't have a syntax to express that.
     * @see https://github.com/microsoft/TypeScript/issues/36057
     */
    function __skFindStripeAccount(): SkFindStripeAccountResult | undefined | Promise<SkFindStripeAccountResult | undefined>;
}
declare const getSkContext: () => Promise<SkContextResult>;

export {
    getSkContext
};