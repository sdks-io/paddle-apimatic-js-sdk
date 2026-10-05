import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration resources for subscription creation simulations with existing transaction */
export type SubscriptionCreationConfigForTransaction = {
  /** Paddle ID of a customer. Adds customer details to webhook payloads. */
  customerId?: string | null;
  /** Paddle ID of an address. Adds address details to webhook payloads. Requires `customer_id`. */
  addressId?: string | null;
  /** Paddle ID of a business. Adds business details to webhook payloads. Requires `customer_id`. */
  businessId?: string | null;
  /**
   * Paddle ID of a payment method. Adds payment method details to webhook payloads. Requires
   * `customer_id`.
   */
  paymentMethodId?: string | null;
  /**
   * Paddle ID of a discount. Adds discount details (including price calculations) to webhook
   * payloads. Requires `items` or `transaction_id` for the discount to be applied.
   */
  discountId?: string | null;
  /** Paddle ID of a transaction. Bases the subscription from this transaction. */
  transactionId?: string;
  /**
   * Items to include on the simulated subscription. Only existing products and prices can be
   * simulated. Non-catalog items aren't supported. At least one recurring price must be provided.
   */
  items?: string | null;
};

export const subscriptionCreationConfigForTransactionSchema: Schema<SubscriptionCreationConfigForTransaction> =
  s.object<SubscriptionCreationConfigForTransaction>({
    customerId: s.optionalNullable(s.string()),
    addressId: s.optionalNullable(s.string()),
    businessId: s.optionalNullable(s.string()),
    paymentMethodId: s.optionalNullable(s.string()),
    discountId: s.optionalNullable(s.string()),
    transactionId: s.optional(s.string()),
    items: s.optionalNullable(s.string()),
    _keysMap: {
      customerId: "customer_id",
      addressId: "address_id",
      businessId: "business_id",
      paymentMethodId: "payment_method_id",
      discountId: "discount_id",
      transactionId: "transaction_id",
    },
  });
