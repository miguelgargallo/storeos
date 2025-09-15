// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/divisas.d.ts

type Money = {
    amount: number;
    currency: string;
};
declare const getStripeAmountFromDecimal: ({
    amount: major,
    currency
}: Money) => number;
declare const getDecimalFromStripeAmount: ({
    amount: minor,
    currency
}: Money) => number;
declare const formatMoney: ({
    amount: minor,
    currency,
    locale,
}: Money & {
    locale?: string;
}) => string;

export {
    formatMoney,
    getDecimalFromStripeAmount,
    getStripeAmountFromDecimal
};