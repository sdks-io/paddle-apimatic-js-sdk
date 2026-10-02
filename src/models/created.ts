import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./unions/address12.js";
import { billingCycle6Schema, type BillingCycle6 } from "./unions/billing-cycle6.js";
import { billingDetails11Schema, type BillingDetails11 } from "./unions/billing-details11.js";
import { business1Schema, type Business1 } from "./unions/business1.js";
import { collectionMode1Schema, type CollectionMode1 } from "./unions/collection-mode1.js";
import { currencyCode16Schema, type CurrencyCode16 } from "./unions/currency-code16.js";
import { currentBillingPeriodSchema, type CurrentBillingPeriod } from "./unions/current-billing-period.js";
import { customData26Schema, type CustomData26 } from "./unions/custom-data26.js";
import { customer1Schema, type Customer1 } from "./unions/customer1.js";
import { discount1Schema, type Discount1 } from "./unions/discount1.js";
import { hasPaymentMethodSchema, type HasPaymentMethod } from "./unions/has-payment-method.js";
import { items2Schema, type Items2 } from "./unions/items2.js";
import { status4Schema, type Status4 } from "./unions/status4.js";

/** Details specific to `subscription_created` actions. */
export type Created = {
  /** What happened on the subscription. @default "subscription_created" */
  action?: "subscription_created";
  /**
   * Status of the subscription when it was created. `null` if created before history recording
   * began and this couldn't be determined.
   */
  status: Status4;
  /** The collection mode of the subscription when it was created. */
  collectionMode: CollectionMode1;
  /**
   * Details for invoicing. Only returned for manually-collected subscriptions (`collection_mode:
   * manual`).
   */
  billingDetails: BillingDetails11;
  /** Customer for the subscription when it was created. */
  customer: Customer1;
  /** Address for the subscription when it was created. */
  address: Address12;
  /** Business for the subscription when it was created. */
  business: Business1;
  /** Supported three-letter ISO 4217 currency code of the subscription when it was created. */
  currencyCode: CurrencyCode16;
  /** Current billing period of the subscription when it was created. */
  currentBillingPeriod: CurrentBillingPeriod;
  /** Billing cycle of the subscription when it was created. */
  billingCycle: BillingCycle6;
  /** Items on the subscription when it was created. */
  items: Items2;
  /** Custom data of the subscription when it was created. */
  customData: CustomData26;
  /** Discount attached to the subscription when it was created. */
  discount: Discount1;
  /**
   * Whether the subscription had a payment method when it was created. `null` if this couldn't be
   * determined.
   */
  hasPaymentMethod: HasPaymentMethod;
};

export const createdSchema: Schema<Created> = s.object<Created>({
  action: s.defaulted(s.literal("subscription_created"), "subscription_created"),
  status: status4Schema,
  collectionMode: collectionMode1Schema,
  billingDetails: billingDetails11Schema,
  customer: customer1Schema,
  address: address12Schema,
  business: business1Schema,
  currencyCode: currencyCode16Schema,
  currentBillingPeriod: currentBillingPeriodSchema,
  billingCycle: billingCycle6Schema,
  items: items2Schema,
  customData: customData26Schema,
  discount: discount1Schema,
  hasPaymentMethod: hasPaymentMethodSchema,
  _keysMap: {
    collectionMode: "collection_mode",
    billingDetails: "billing_details",
    currencyCode: "currency_code",
    currentBillingPeriod: "current_billing_period",
    billingCycle: "billing_cycle",
    customData: "custom_data",
    hasPaymentMethod: "has_payment_method",
  },
});
