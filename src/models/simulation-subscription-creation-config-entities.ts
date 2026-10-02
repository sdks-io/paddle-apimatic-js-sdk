import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressId3Schema, type AddressId3 } from "./unions/address-id3.js";
import { businessId3Schema, type BusinessId3 } from "./unions/business-id3.js";
import { customerId3Schema, type CustomerId3 } from "./unions/customer-id3.js";
import { discountId3Schema, type DiscountId3 } from "./unions/discount-id3.js";
import { items1Schema, type Items1 } from "./unions/items1.js";
import { paymentMethodId1Schema, type PaymentMethodId1 } from "./unions/payment-method-id1.js";
import { transactionIdSchema, type TransactionId } from "./unions/transaction-id.js";

/** Configuration resources for subscription creation simulations */
export type SimulationSubscriptionCreationConfigEntities = {
  /** Paddle ID of a customer. Adds customer details to webhook payloads. */
  customerId: CustomerId3;
  /** Paddle ID of an address. Adds address details to webhook payloads. Requires `customer_id`. */
  addressId: AddressId3;
  /** Paddle ID of a business. Adds business details to webhook payloads. Requires `customer_id`. */
  businessId: BusinessId3;
  /**
   * Paddle ID of a payment method. Adds payment method details to webhook payloads. Requires
   * `customer_id`.
   */
  paymentMethodId: PaymentMethodId1;
  /**
   * Paddle ID of a discount. Adds discount details (including price calculations) to webhook
   * payloads. Requires `items` or `transaction_id` for the discount to be applied.
   */
  discountId: DiscountId3;
  /** Paddle ID of a transaction. Bases the subscription on the transaction. */
  transactionId: TransactionId;
  /**
   * Items to include on the simulated subscription. Only existing products and prices can be
   * simulated. Non-catalog items aren't supported. At least one recurring price must be provided.
   */
  items: Items1;
};

export const simulationSubscriptionCreationConfigEntitiesSchema: Schema<SimulationSubscriptionCreationConfigEntities> =
  s.object<SimulationSubscriptionCreationConfigEntities>({
    customerId: customerId3Schema,
    addressId: addressId3Schema,
    businessId: businessId3Schema,
    paymentMethodId: paymentMethodId1Schema,
    discountId: discountId3Schema,
    transactionId: transactionIdSchema,
    items: items1Schema,
    _keysMap: {
      customerId: "customer_id",
      addressId: "address_id",
      businessId: "business_id",
      paymentMethodId: "payment_method_id",
      discountId: "discount_id",
      transactionId: "transaction_id",
    },
  });
