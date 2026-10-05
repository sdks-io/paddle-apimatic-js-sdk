import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingDetails2Schema, type BillingDetails2 } from "./billing-details2.js";
import { collectionModeSchema, type CollectionMode } from "./collection-mode.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { duration5Schema, type Duration5 } from "./duration5.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import {
  subscriptionConsentRequirement1Schema,
  type SubscriptionConsentRequirement1,
} from "./subscription-consent-requirement1.js";
import {
  subscriptionDiscountTimePeriodSchema,
  type SubscriptionDiscountTimePeriod,
} from "./subscription-discount-time-period.js";
import { subscriptionItem1Schema, type SubscriptionItem1 } from "./subscription-item1.js";
import {
  subscriptionScheduledChange1Schema,
  type SubscriptionScheduledChange1,
} from "./subscription-scheduled-change1.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** New or changed entity. */
export type Data37 = {
  /** Unique Paddle ID for this subscription entity, prefixed with `sub_`. */
  id: string;
  /**
   * Status of this subscription. Set automatically by Paddle. Use the pause subscription or cancel
   * subscription operations to change.
   */
  status: SubscriptionStatus;
  /** Unique Paddle ID for this customer entity, prefixed with `ctm_`. */
  customerId: string;
  /** Unique Paddle ID for this address entity, prefixed with `add_`. */
  addressId: string;
  businessId: string | null;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode: CurrencyCode;
  /** RFC 3339 datetime string. */
  createdAt: Date;
  /** RFC 3339 datetime string. */
  updatedAt: Date;
  /**
   * RFC 3339 datetime string of when this subscription started. This may be different from
   * `first_billed_at` if the subscription started in trial.
   */
  startedAt: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was first billed. This may be different from
   * `started_at` if the subscription started in trial.
   */
  firstBilledAt: Date | null;
  /** RFC 3339 datetime string of when this subscription is next scheduled to be billed. */
  nextBilledAt: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was paused. Set automatically by Paddle when
   * the pause subscription operation is used. `null` if not paused.
   */
  pausedAt: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was canceled. Set automatically by Paddle
   * when the cancel subscription operation is used. `null` if not canceled.
   */
  canceledAt: Date | null;
  discount: SubscriptionDiscountTimePeriod | null;
  /**
   * How payment is collected for transactions created for this subscription. `automatic` for
   * checkout, `manual` for invoices.
   */
  collectionMode: CollectionMode | null;
  billingDetails: BillingDetails2 | null;
  /**
   * Current billing period for this subscription. Set automatically by Paddle based on the billing
   * cycle. `null` for `paused` and `canceled` subscriptions.
   */
  currentBillingPeriod: TimePeriod | null;
  /**
   * How often this subscription renews. Set automatically by Paddle based on the prices on this
   * subscription.
   */
  billingCycle: Duration5;
  scheduledChange: SubscriptionScheduledChange1 | null;
  items: SubscriptionItem1[];
  /** List of active consent requirements for the subscription's current billing period. */
  consentRequirements: SubscriptionConsentRequirement1[] | null;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  importMeta: ImportMeta | null;
  /** Unique Paddle ID for this transaction entity, prefixed with `txn_`. */
  transactionId: string;
};

export const data37Schema: Schema<Data37> = s.object<Data37>({
  id: s.string(),
  status: subscriptionStatusSchema,
  customerId: s.string(),
  addressId: s.string(),
  businessId: s.nullable(s.string()),
  currencyCode: currencyCodeSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  startedAt: s.nullable(s.dateTime()),
  firstBilledAt: s.nullable(s.dateTime()),
  nextBilledAt: s.nullable(s.dateTime()),
  pausedAt: s.nullable(s.dateTime()),
  canceledAt: s.nullable(s.dateTime()),
  discount: s.nullable(s.lazy(() => subscriptionDiscountTimePeriodSchema)),
  collectionMode: s.nullable(s.lazy(() => collectionModeSchema)),
  billingDetails: s.nullable(s.lazy(() => billingDetails2Schema)),
  currentBillingPeriod: s.nullable(s.lazy(() => timePeriodSchema)),
  billingCycle: duration5Schema,
  scheduledChange: s.nullable(s.lazy(() => subscriptionScheduledChange1Schema)),
  items: s.array(s.lazy(() => subscriptionItem1Schema)),
  consentRequirements: s.nullable(s.array(s.lazy(() => subscriptionConsentRequirement1Schema))),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
  transactionId: s.string(),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    businessId: "business_id",
    currencyCode: "currency_code",
    createdAt: "created_at",
    updatedAt: "updated_at",
    startedAt: "started_at",
    firstBilledAt: "first_billed_at",
    nextBilledAt: "next_billed_at",
    pausedAt: "paused_at",
    canceledAt: "canceled_at",
    collectionMode: "collection_mode",
    billingDetails: "billing_details",
    currentBillingPeriod: "current_billing_period",
    billingCycle: "billing_cycle",
    scheduledChange: "scheduled_change",
    consentRequirements: "consent_requirements",
    customData: "custom_data",
    importMeta: "import_meta",
    transactionId: "transaction_id",
  },
});
