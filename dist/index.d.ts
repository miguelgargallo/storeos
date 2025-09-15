// sk
// 2025 © ITAMAESAN ORG. All rights reserved.
// ./dist/index.d.ts

import {
    CartMetadata,
    MappedCart
} from './internal.js';
export {
    MappedProduct,
    MappedShippingRate
}
    from './internal.js';
import Stripe from 'stripe';
import {
    z,
    TypeOf
} from 'zod';

type Cart = NonNullable<Awaited<ReturnType<typeof cartGet>>>;
type Order = NonNullable<Awaited<ReturnType<typeof orderGet>>>;
declare function cartAdd({
    productId,
    cartId
}: {
    productId: string;
    cartId?: string;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function cartUpdateQuantity({
    productId,
    cartId,
    operation,
    clearTaxCalculation,
}: {
    productId: string;
    cartId: string;
    operation: "INCREASE" | "DECREASE";
    clearTaxCalculation?: boolean;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function cartGet(cartId: string): Promise<{
    cart: {
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
    lines: {
        product: {
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
        quantity: number;
    }[];
    shippingRate: Stripe.ShippingRate | null;
} | null | undefined>;
declare function cartCreate({
    productId
}?: {
    productId?: string;
    cartId?: string;
}): Promise<Stripe.Response<Stripe.PaymentIntent>>;
declare function cartAddOptimistic({
    cart,
    add,
}: {
    cart?: Cart | null;
    add: string | undefined;
}): Promise<{
    cart: {
        amount: number;
        metadata?: ({
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
        } & Record<string, string>) | undefined;
        customer?: Stripe.Customer | null | undefined;
        payment_method?: Stripe.PaymentMethod | null | undefined;
        taxBreakdown?: {
            taxPercentage: string;
            taxAmount: number;
            taxType: Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType | (string & {});
        }[] | undefined;
        id?: string | undefined;
        object?: "payment_intent" | undefined;
        amount_capturable?: number | undefined;
        amount_details?: Stripe.PaymentIntent.AmountDetails;
        amount_received?: number | undefined;
        application?: string | Stripe.Application | null | undefined;
        application_fee_amount?: number | null | undefined;
        automatic_payment_methods?: Stripe.PaymentIntent.AutomaticPaymentMethods | null | undefined;
        canceled_at?: number | null | undefined;
        cancellation_reason?: Stripe.PaymentIntent.CancellationReason | null | undefined;
        capture_method?: Stripe.PaymentIntent.CaptureMethod | undefined;
        client_secret?: string | null | undefined;
        confirmation_method?: Stripe.PaymentIntent.ConfirmationMethod | undefined;
        created?: number | undefined;
        currency?: string | undefined;
        description?: string | null | undefined;
        invoice?: string | Stripe.Invoice | null | undefined;
        last_payment_error?: Stripe.PaymentIntent.LastPaymentError | null | undefined;
        latest_charge?: string | Stripe.Charge | null | undefined;
        livemode?: boolean | undefined;
        next_action?: Stripe.PaymentIntent.NextAction | null | undefined;
        on_behalf_of?: string | Stripe.Account | null | undefined;
        payment_method_configuration_details?: Stripe.PaymentIntent.PaymentMethodConfigurationDetails | null | undefined;
        payment_method_options?: Stripe.PaymentIntent.PaymentMethodOptions | null | undefined;
        payment_method_types?: string[] | undefined;
        processing?: Stripe.PaymentIntent.Processing | null | undefined;
        receipt_email?: string | null | undefined;
        review?: string | Stripe.Review | null | undefined;
        setup_future_usage?: Stripe.PaymentIntent.SetupFutureUsage | null | undefined;
        shipping?: Stripe.PaymentIntent.Shipping | null | undefined;
        source?: string | Stripe.CustomerSource | Stripe.DeletedCustomerSource | null | undefined;
        statement_descriptor?: string | null | undefined;
        statement_descriptor_suffix?: string | null | undefined;
        status?: Stripe.PaymentIntent.Status | undefined;
        transfer_data?: Stripe.PaymentIntent.TransferData | null | undefined;
        transfer_group?: string | null | undefined;
    };
    lines: {
        product: {
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
        quantity: number;
    }[];
    shippingRate?: Stripe.ShippingRate | null | undefined;
} | null | undefined>;
declare function cartSetQuantity({
    cartId,
    productId,
    quantity,
}: {
    cartId: string;
    productId: string;
    quantity: number;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function productGetById(id: string): Promise<{
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
} | null>;
declare function productGet({
    slug
}: {
    slug: string;
}): Promise<{
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
}[]>;
declare function productBrowse(params: {
    first?: number;
    last?: number;
    offset?: number;
    filter?: {
        category?: string;
    };
}): Promise<{
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
}[]>;
declare function shippingBrowse(): Promise<Stripe.ShippingRate[]>;
declare function shippingGet(id: string): Promise<Stripe.ShippingRate | null>;
declare function categoryBrowse(): Promise<string[]>;
declare function fileGet(id: string): Promise<Stripe.Response<Stripe.FileLink> | null>;
declare function accountGet(): Promise<{
    account: (Stripe.Account & {
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
    }) | null;
    logo: null;
} | {
    account: (Stripe.Account & {
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
    }) | null;
    logo: Stripe.File;
} | null>;
declare function orderGet(orderId: string): Promise<{
    order: {
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
    lines: {
        product: {
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
        quantity: number;
    }[];
    shippingRate: Stripe.ShippingRate | null;
} | null>;
declare const getProductsFromCart: (metadata: CartMetadata) => (readonly [productId: string, quantity: number])[];
declare function getProductsFromMetadata(metadata: MappedCart["metadata"]): Promise<{
    product: {
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
    } | null;
    quantity: number;
}[]>;
type ProductsFromMetadata = Awaited<ReturnType<typeof getProductsFromMetadata>>;
declare const getCartWithProductsById: (cartId: string) => Promise<{
    cart: {
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
    lines: {
        product: {
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
        quantity: number;
    }[];
    shippingRate: Stripe.ShippingRate | null;
} | null>;
declare const calculateCartTotalNet: (cart: {
    cart: {
        amount: number;
        metadata?: {
            taxCalculationId?: string;
        };
    };
    lines: Array<{
        product: {
            default_price?: {
                unit_amount?: number | null;
            };
        };
        quantity: number;
    }>;
    shippingRate?: {
        fixed_amount?: {
            amount?: number;
        };
    } | null;
}) => number;
declare const getAddressSchema: (tr: {
    nameRequired: string;
    cityRequired: string;
    countryRequired: string;
    line1Required: string;
    postalCodeRequired: string;
}) => z.ZodObject<{
    name: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    line1: z.ZodString;
    line2: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    postalCode: z.ZodString;
    state: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    phone: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    taxId: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    email: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    taxId: string | null;
    city: string;
    country: string;
    line1: string;
    line2: string | null;
    postalCode: string;
    state: string | null;
    phone: string | null;
    email: string | null;
}, {
    name: string;
    city: string;
    country: string;
    line1: string;
    postalCode: string;
    taxId?: string | null | undefined;
    line2?: string | null | undefined;
    state?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | null | undefined;
}>;
type AddressSchema = TypeOf<ReturnType<typeof getAddressSchema>>;
/**
 * @internal
 */
declare const updatePaymentIntent: ({
    paymentIntentId,
    data,
    customerOverride,
    clearTaxCalculation,
}: {
    paymentIntentId: string;
    data: Stripe.PaymentIntentUpdateParams;
    customerOverride?: Stripe.Customer;
    clearTaxCalculation?: boolean;
}) => Promise<Stripe.Response<Stripe.PaymentIntent>>;
declare const calculateCartTotalPossiblyWithTax: (cart: {
    cart: {
        amount: number;
        metadata?: {
            taxCalculationId?: string;
        };
    };
    lines: Array<{
        product: {
            default_price?: {
                unit_amount?: number | null;
            };
        };
        quantity: number;
    }>;
    shippingRate?: {
        fixed_amount?: {
            amount?: number;
        };
    } | null;
}) => number;
declare const calculateCartTotalNetWithoutShipping: (cart: {
    cart: {
        amount: number;
        metadata?: {
            taxCalculationId?: string;
        };
    };
    lines: Array<{
        product: {
            default_price?: {
                unit_amount?: number | null;
            };
        };
        quantity: number;
    }>;
    shippingRate?: {
        fixed_amount?: {
            amount?: number;
        };
    } | null;
}) => number;
declare function cartChangeQuantity({
    productId,
    cartId,
    operation,
    clearTaxCalculation,
}: {
    productId: string;
    cartId: string;
    operation: "INCREASE" | "DECREASE";
    clearTaxCalculation?: boolean;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare const cartSaveEmail: ({
    cartId,
    email
}: {
    cartId: string;
    email: string;
}) => Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare const cartSaveTax: ({
    cartId,
    taxId
}: {
    cartId: string;
    taxId: string;
}) => Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function cartSaveShipping({
    cartId,
    shippingRateId,
}: {
    cartId: string;
    shippingRateId: string;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function cartSaveBillingAddress({
    cartId,
    billingAddress,
}: {
    cartId: string;
    billingAddress: AddressSchema;
}): Promise<Stripe.Response<Stripe.PaymentIntent> | undefined>;
declare function taxDefaultGet(): Promise<Stripe.Response<Stripe.Tax.Settings>>;
declare function cartCount(metadata: CartMetadata): number;
type Review = {
    id: string;
    store_id: string;
    product_id: string;
    created_at: string;
    updated_at: string;
    author: string;
    email: string;
    content: string;
    rating: number;
};
declare function productReviewBrowse(params: {
    productId: string;
    first?: number;
    last?: number;
    offset?: number;
    filter?: {};
}): Promise<Review[] | null>;
declare function productReviewAdd(params: {
    productId: string;
    author: string;
    email: string;
    content: string;
    rating: number;
}): Promise<Record<string, any>[] | null>;
declare const contextGet: () => Promise<{
    stripeAccount: string | undefined;
    storeId: string | undefined;
    secretKey: string | undefined;
    publishableKey: string | undefined;
}>;

declare const provider: ({
    tags,
    revalidate,
    cache,
    tagPrefix,
    secretKey,
}: {
    tags?: NextFetchRequestConfig["tags"];
    revalidate?: NextFetchRequestConfig["revalidate"];
    cache?: RequestInit["cache"];
    tagPrefix: string | undefined;
    secretKey: string | undefined;
}) => Stripe;

export {
    type AddressSchema, type Cart, MappedCart, type Order, type ProductsFromMetadata, accountGet, calculateCartTotalNet, calculateCartTotalNetWithoutShipping, calculateCartTotalPossiblyWithTax, cartAdd, cartAddOptimistic, cartChangeQuantity, cartCount, cartCreate, cartGet, cartSaveBillingAddress, cartSaveEmail, cartSaveShipping, cartSaveTax, cartSetQuantity, cartUpdateQuantity, categoryBrowse, contextGet, fileGet, getAddressSchema, getCartWithProductsById, getProductsFromCart, getProductsFromMetadata, orderGet, productBrowse, productGet, productGetById, productReviewAdd, productReviewBrowse, provider, shippingBrowse, shippingGet, taxDefaultGet, updatePaymentIntent
};