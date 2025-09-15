// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/internal.d.ts

import Stripe from 'stripe';
import {
    z
} from 'zod';

declare const sanitizeQueryValue: (slug: string | number | boolean) => string;
declare const objectToStripeQuery: (obj: Record<string, string | number | boolean>) => string;

type MappedProduct = ReturnType<typeof mapProduct>;
/**
 * @internal
 */
declare function sortProducts(products: MappedProduct[]): {
    default_price: Stripe.Price;
    marketing_features: string[];
    metadata: {
        slug: string;
        stock: number;
        category?: string | undefined;
        order?: number | undefined;
        variant?: string | undefined;
        digitalAsset?: string | undefined;
        preview?: string | undefined;
    };
    id: string;
    object: "product";
    active: boolean;
    created: number;
    deleted?: void | undefined;
    description: string | null;
    images: Array<string>;
    livemode: boolean;
    name: string;
    package_dimensions: Stripe.Product.PackageDimensions | null;
    shippable: boolean | null;
    statement_descriptor?: string | null;
    tax_code: string | Stripe.TaxCode | null;
    type: Stripe.Product.Type;
    unit_label?: string | null;
    updated: number;
    url: string | null;
}[];
declare const ProductMetadataSchema: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodString;
    variant: z.ZodOptional<z.ZodString>;
    stock: z.ZodEffects<z.ZodOptional<z.ZodNumber>,
        number,
        number | undefined>;
    digitalAsset: z.ZodOptional<z.ZodString>;
    preview: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    slug: string;
    stock: number;
    category?: string | undefined;
    order?: number | undefined;
    variant?: string | undefined;
    digitalAsset?: string | undefined;
    preview?: string | undefined;
}, {
    slug: string;
    category?: string | undefined;
    order?: number | undefined;
    variant?: string | undefined;
    stock?: number | undefined;
    digitalAsset?: string | undefined;
    preview?: string | undefined;
}>;
type ProductMetadata = z.infer<typeof ProductMetadataSchema>;
/**
 * @internal
 */
declare function mapProduct({
    default_price,
    marketing_features,
    ...product
}: Stripe.Product): {
    default_price: Stripe.Price;
    marketing_features: string[];
    metadata: {
        slug: string;
        stock: number;
        category?: string | undefined;
        order?: number | undefined;
        variant?: string | undefined;
        digitalAsset?: string | undefined;
        preview?: string | undefined;
    };
    id: string;
    object: "product";
    active: boolean;
    created: number;
    deleted?: void | undefined;
    description: string | null;
    images: Array<string>;
    livemode: boolean;
    name: string;
    package_dimensions: Stripe.Product.PackageDimensions | null;
    shippable: boolean | null;
    statement_descriptor?: string | null;
    tax_code: string | Stripe.TaxCode | null;
    type: Stripe.Product.Type;
    unit_label?: string | null;
    updated: number;
    url: string | null;
};
/**
 * @internal
 */
declare function filterValidProduct(product: Stripe.Product): boolean;
/**
 * @internal
 */
declare function filterValidProducts(products: Stripe.Response<Stripe.ApiSearchResult<Stripe.Product> | Stripe.ApiList<Stripe.Product>>): {
    data: Stripe.Product[];
    object: "search_result";
    has_more: boolean;
    url: string;
    next_page: string | null;
    total_count?: number;
    lastResponse: {
        headers: {
            [key: string]: string;
        };
        requestId: string;
        statusCode: number;
        apiVersion?: string;
        idempotencyKey?: string;
        stripeAccount?: string;
    };
} | {
    data: Stripe.Product[];
    object: "list";
    has_more: boolean;
    url: string;
    lastResponse: {
        headers: {
            [key: string]: string;
        };
        requestId: string;
        statusCode: number;
        apiVersion?: string;
        idempotencyKey?: string;
        stripeAccount?: string;
    };
};
/**
 * @internal
 */
declare function mapProducts(products: Stripe.Response<Stripe.ApiSearchResult<Stripe.Product> | Stripe.ApiList<Stripe.Product>>): {
    default_price: Stripe.Price;
    marketing_features: string[];
    metadata: {
        slug: string;
        stock: number;
        category?: string | undefined;
        order?: number | undefined;
        variant?: string | undefined;
        digitalAsset?: string | undefined;
        preview?: string | undefined;
    };
    id: string;
    object: "product";
    active: boolean;
    created: number;
    deleted?: void | undefined;
    description: string | null;
    images: Array<string>;
    livemode: boolean;
    name: string;
    package_dimensions: Stripe.Product.PackageDimensions | null;
    shippable: boolean | null;
    statement_descriptor?: string | null;
    tax_code: string | Stripe.TaxCode | null;
    type: Stripe.Product.Type;
    unit_label?: string | null;
    updated: number;
    url: string | null;
}[];
/**
 * @internal
 */
declare function mapShippingRate(shippingRate: Stripe.ShippingRate): Stripe.ShippingRate;
type MappedShippingRate = ReturnType<typeof mapShippingRate>;
/**
 * @internal
 */
declare function mapShippingRates(shippingRates: Stripe.ApiList<Stripe.ShippingRate>): Stripe.ShippingRate[];
/**
 * @internal
 */
declare function getUniqueVariants(products: MappedProduct[]): {
    default_price: Stripe.Price;
    marketing_features: string[];
    metadata: {
        slug: string;
        stock: number;
        category?: string | undefined;
        order?: number | undefined;
        variant?: string | undefined;
        digitalAsset?: string | undefined;
        preview?: string | undefined;
    };
    id: string;
    object: "product";
    active: boolean;
    created: number;
    deleted?: void | undefined;
    description: string | null;
    images: Array<string>;
    livemode: boolean;
    name: string;
    package_dimensions: Stripe.Product.PackageDimensions | null;
    shippable: boolean | null;
    statement_descriptor?: string | null;
    tax_code: string | Stripe.TaxCode | null;
    type: Stripe.Product.Type;
    unit_label?: string | null;
    updated: number;
    url: string | null;
}[];
/**
 * @internal
 */
declare const isProductAvailable: (product: MappedProduct) => boolean;
/**
 * @internal
 */
declare const cartMetadataSchema: z.ZodIntersection<z.ZodObject<{
    shippingRateId: z.ZodOptional<z.ZodString>;
    taxCalculationId: z.ZodOptional<z.ZodString>;
    taxCalculationExp: z.ZodOptional<z.ZodString>;
    taxId: z.ZodOptional<z.ZodString>;
    couponCode: z.ZodOptional<z.ZodString>;
    taxedAmount: z.ZodOptional<z.ZodString>;
    "billingAddress.city": z.ZodOptional<z.ZodString>;
    "billingAddress.country": z.ZodOptional<z.ZodString>;
    "billingAddress.line1": z.ZodOptional<z.ZodString>;
    "billingAddress.line2": z.ZodOptional<z.ZodString>;
    "billingAddress.name": z.ZodOptional<z.ZodString>;
    "billingAddress.postalCode": z.ZodOptional<z.ZodString>;
    "billingAddress.state": z.ZodOptional<z.ZodString>;
    netAmount: z.ZodOptional<z.ZodString>;
    taxBreakdown0: z.ZodOptional<z.ZodString>;
    taxBreakdown1: z.ZodOptional<z.ZodString>;
    taxBreakdown2: z.ZodOptional<z.ZodString>;
    taxBreakdown3: z.ZodOptional<z.ZodString>;
    taxBreakdown4: z.ZodOptional<z.ZodString>;
    taxBreakdown5: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    shippingRateId?: string | undefined;
    taxCalculationId?: string | undefined;
    taxCalculationExp?: string | undefined;
    taxId?: string | undefined;
    couponCode?: string | undefined;
    taxedAmount?: string | undefined;
    "billingAddress.city"?: string | undefined;
    "billingAddress.country"?: string | undefined;
    "billingAddress.line1"?: string | undefined;
    "billingAddress.line2"?: string | undefined;
    "billingAddress.name"?: string | undefined;
    "billingAddress.postalCode"?: string | undefined;
    "billingAddress.state"?: string | undefined;
    netAmount?: string | undefined;
    taxBreakdown0?: string | undefined;
    taxBreakdown1?: string | undefined;
    taxBreakdown2?: string | undefined;
    taxBreakdown3?: string | undefined;
    taxBreakdown4?: string | undefined;
    taxBreakdown5?: string | undefined;
}, {
    shippingRateId?: string | undefined;
    taxCalculationId?: string | undefined;
    taxCalculationExp?: string | undefined;
    taxId?: string | undefined;
    couponCode?: string | undefined;
    taxedAmount?: string | undefined;
    "billingAddress.city"?: string | undefined;
    "billingAddress.country"?: string | undefined;
    "billingAddress.line1"?: string | undefined;
    "billingAddress.line2"?: string | undefined;
    "billingAddress.name"?: string | undefined;
    "billingAddress.postalCode"?: string | undefined;
    "billingAddress.state"?: string | undefined;
    netAmount?: string | undefined;
    taxBreakdown0?: string | undefined;
    taxBreakdown1?: string | undefined;
    taxBreakdown2?: string | undefined;
    taxBreakdown3?: string | undefined;
    taxBreakdown4?: string | undefined;
    taxBreakdown5?: string | undefined;
}>, z.ZodRecord<z.ZodString, z.ZodString>>;
type CartMetadata = z.infer<typeof cartMetadataSchema>;
/**
 * @internal
 */
declare const cartMetadataTaxBreakdownSchema: z.ZodObject<{
    taxType: z.ZodLiteral<Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {})>;
    taxPercentage: z.ZodString;
    taxAmount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    taxPercentage: string;
    taxAmount: number;
    taxType: Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {});
}, {
    taxPercentage: string;
    taxAmount: number;
    taxType: Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {});
}>;
/**
 * @internal
 */
declare function mapCart(cart: Stripe.PaymentIntent): {
    metadata: {
        shippingRateId?: string | undefined;
        taxCalculationId?: string | undefined;
        taxCalculationExp?: string | undefined;
        taxId?: string | undefined;
        couponCode?: string | undefined;
        taxedAmount?: string | undefined;
        "billingAddress.city"?: string | undefined;
        "billingAddress.country"?: string | undefined;
        "billingAddress.line1"?: string | undefined;
        "billingAddress.line2"?: string | undefined;
        "billingAddress.name"?: string | undefined;
        "billingAddress.postalCode"?: string | undefined;
        "billingAddress.state"?: string | undefined;
        netAmount?: string | undefined;
        taxBreakdown0?: string | undefined;
        taxBreakdown1?: string | undefined;
        taxBreakdown2?: string | undefined;
        taxBreakdown3?: string | undefined;
        taxBreakdown4?: string | undefined;
        taxBreakdown5?: string | undefined;
    } & Record<string,
        string>;
    customer: Stripe.Customer | null;
    payment_method: Stripe.PaymentMethod | null;
    taxBreakdown: {
        taxPercentage: string;
        taxAmount: number;
        taxType: Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {});
    }[];
    id: string;
    object: "payment_intent";
    amount: number;
    amount_capturable: number;
    amount_details?: Stripe.PaymentIntent.AmountDetails;
    amount_received: number;
    application: string | Stripe.Application | null;
    application_fee_amount: number | null;
    automatic_payment_methods: Stripe.PaymentIntent.AutomaticPaymentMethods | null;
    canceled_at: number | null;
    cancellation_reason: Stripe.PaymentIntent.CancellationReason | null;
    capture_method: Stripe.PaymentIntent.CaptureMethod;
    client_secret: string | null;
    confirmation_method: Stripe.PaymentIntent.ConfirmationMethod;
    created: number;
    currency: string;
    description: string | null;
    invoice: string | Stripe.Invoice | null;
    last_payment_error: Stripe.PaymentIntent.LastPaymentError | null;
    latest_charge: string | Stripe.Charge | null;
    livemode: boolean;
    next_action: Stripe.PaymentIntent.NextAction | null;
    on_behalf_of: string | Stripe.Account | null;
    payment_method_configuration_details: Stripe.PaymentIntent.PaymentMethodConfigurationDetails | null;
    payment_method_options: Stripe.PaymentIntent.PaymentMethodOptions | null;
    payment_method_types: Array<string>;
    processing: Stripe.PaymentIntent.Processing | null;
    receipt_email: string | null;
    review: string | Stripe.Review | null;
    setup_future_usage: Stripe.PaymentIntent.SetupFutureUsage | null;
    shipping: Stripe.PaymentIntent.Shipping | null;
    source: string | Stripe.CustomerSource | Stripe.DeletedCustomerSource | null;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status: Stripe.PaymentIntent.Status;
    transfer_data: Stripe.PaymentIntent.TransferData | null;
    transfer_group: string | null;
};
type MappedCart = ReturnType<typeof mapCart>;
/**
 * @internal
 */
declare function mapOrder({
    payment_method,
    latest_charge,
    ...order
}: Stripe.PaymentIntent): {
    payment_method: Stripe.PaymentMethod | null;
    latest_charge: Stripe.Charge | null;
    taxBreakdown: {
        taxPercentage: string;
        taxAmount: number;
        taxType: Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {});
    }[];
    metadata: {
        shippingRateId?: string | undefined;
        taxCalculationId?: string | undefined;
        taxCalculationExp?: string | undefined;
        taxId?: string | undefined;
        couponCode?: string | undefined;
        taxedAmount?: string | undefined;
        "billingAddress.city"?: string | undefined;
        "billingAddress.country"?: string | undefined;
        "billingAddress.line1"?: string | undefined;
        "billingAddress.line2"?: string | undefined;
        "billingAddress.name"?: string | undefined;
        "billingAddress.postalCode"?: string | undefined;
        "billingAddress.state"?: string | undefined;
        netAmount?: string | undefined;
        taxBreakdown0?: string | undefined;
        taxBreakdown1?: string | undefined;
        taxBreakdown2?: string | undefined;
        taxBreakdown3?: string | undefined;
        taxBreakdown4?: string | undefined;
        taxBreakdown5?: string | undefined;
    } & Record<string,
        string>;
    id: string;
    object: "payment_intent";
    amount: number;
    amount_capturable: number;
    amount_details?: Stripe.PaymentIntent.AmountDetails;
    amount_received: number;
    application: string | Stripe.Application | null;
    application_fee_amount: number | null;
    automatic_payment_methods: Stripe.PaymentIntent.AutomaticPaymentMethods | null;
    canceled_at: number | null;
    cancellation_reason: Stripe.PaymentIntent.CancellationReason | null;
    capture_method: Stripe.PaymentIntent.CaptureMethod;
    client_secret: string | null;
    confirmation_method: Stripe.PaymentIntent.ConfirmationMethod;
    created: number;
    currency: string;
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;
    description: string | null;
    invoice: string | Stripe.Invoice | null;
    last_payment_error: Stripe.PaymentIntent.LastPaymentError | null;
    livemode: boolean;
    next_action: Stripe.PaymentIntent.NextAction | null;
    on_behalf_of: string | Stripe.Account | null;
    payment_method_configuration_details: Stripe.PaymentIntent.PaymentMethodConfigurationDetails | null;
    payment_method_options: Stripe.PaymentIntent.PaymentMethodOptions | null;
    payment_method_types: Array<string>;
    processing: Stripe.PaymentIntent.Processing | null;
    receipt_email: string | null;
    review: string | Stripe.Review | null;
    setup_future_usage: Stripe.PaymentIntent.SetupFutureUsage | null;
    shipping: Stripe.PaymentIntent.Shipping | null;
    source: string | Stripe.CustomerSource | Stripe.DeletedCustomerSource | null;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status: Stripe.PaymentIntent.Status;
    transfer_data: Stripe.PaymentIntent.TransferData | null;
    transfer_group: string | null;
};

export {
    type CartMetadata, type MappedCart, type MappedProduct, type MappedShippingRate, type ProductMetadata, cartMetadataSchema, cartMetadataTaxBreakdownSchema, filterValidProduct, filterValidProducts, getUniqueVariants, isProductAvailable, mapCart, mapOrder, mapProduct, mapProducts, mapShippingRate, mapShippingRates, objectToStripeQuery, sanitizeQueryValue, sortProducts
};