import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { billingDetailsSchema, type BillingDetails } from "./billing-details.js";
import { businessSchema, type Business } from "./business.js";
import { collectionModeSchema, type CollectionMode } from "./collection-mode.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { customerSchema, type Customer } from "./customer.js";
import { durationSchema, type Duration } from "./duration.js";
import {
  subscriptionHistoryDiscountSchema,
  type SubscriptionHistoryDiscount,
} from "./subscription-history-discount.js";
import { subscriptionHistoryItemSchema, type SubscriptionHistoryItem } from "./subscription-history-item.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** Details specific to `subscription_created` actions. */
export type Created = {
  /** What happened on the subscription. @default "subscription_created" */
  action?: "subscription_created";
  /**
   * Status of the subscription when it was created. `null` if created before history recording
   * began and this couldn't be determined.
   */
  status?: SubscriptionStatus | null;
  /** The collection mode of the subscription when it was created. */
  collectionMode?: CollectionMode | null;
  /**
   * Details for invoicing. Only returned for manually-collected subscriptions (`collection_mode:
   * manual`).
   */
  billingDetails?: BillingDetails | null;
  /** Customer for the subscription when it was created. */
  customer?: Customer | null;
  /** Address for the subscription when it was created. */
  address?: Address | null;
  /** Business for the subscription when it was created. */
  business?: Business | null;
  /** Supported three-letter ISO 4217 currency code of the subscription when it was created. */
  currencyCode?: CurrencyCode | null;
  /** Current billing period of the subscription when it was created. */
  currentBillingPeriod?: TimePeriod | null;
  /** Billing cycle of the subscription when it was created. */
  billingCycle?: Duration | null;
  /** Items on the subscription when it was created. */
  items?: SubscriptionHistoryItem[] | null;
  /** Custom data of the subscription when it was created. */
  customData?: Record<string, unknown> | null;
  /** Discount attached to the subscription when it was created. */
  discount?: SubscriptionHistoryDiscount | null;
  /**
   * Whether the subscription had a payment method when it was created. `null` if this couldn't be
   * determined.
   */
  hasPaymentMethod?: boolean | null;
};

export const createdSchema: Schema<Created> = s.object<Created>({
  action: s.defaulted(s.literal("subscription_created"), "subscription_created"),
  status: s.optionalNullable(s.lazy(() => subscriptionStatusSchema)),
  collectionMode: s.optionalNullable(s.lazy(() => collectionModeSchema)),
  billingDetails: s.optionalNullable(s.lazy(() => billingDetailsSchema)),
  customer: s.optionalNullable(s.lazy(() => customerSchema)),
  address: s.optionalNullable(s.lazy(() => addressSchema)),
  business: s.optionalNullable(s.lazy(() => businessSchema)),
  currencyCode: s.optionalNullable(s.lazy(() => currencyCodeSchema)),
  currentBillingPeriod: s.optionalNullable(s.lazy(() => timePeriodSchema)),
  billingCycle: s.optionalNullable(s.lazy(() => durationSchema)),
  items: s.optionalNullable(s.array(s.lazy(() => subscriptionHistoryItemSchema))),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  discount: s.optionalNullable(s.lazy(() => subscriptionHistoryDiscountSchema)),
  hasPaymentMethod: s.optionalNullable(s.boolean()),
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
