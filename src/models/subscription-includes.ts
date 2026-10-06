import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "./billing-details.js";
import { CollectionMode, collectionModeSchema } from "./collection-mode.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { durationSchema, type Duration } from "./duration.js";
import { importMetaSubscriptionSchema, type ImportMetaSubscription } from "./import-meta-subscription.js";
import { nextTransactionSchema, type NextTransaction } from "./next-transaction.js";
import {
  subscriptionConsentRequirementSchema,
  type SubscriptionConsentRequirement,
} from "./subscription-consent-requirement.js";
import {
  subscriptionDiscountTimePeriodSchema,
  type SubscriptionDiscountTimePeriod,
} from "./subscription-discount-time-period.js";
import { subscriptionItemSchema, type SubscriptionItem } from "./subscription-item.js";
import {
  subscriptionManagementUrlsSchema,
  type SubscriptionManagementUrls,
} from "./subscription-management-urls.js";
import {
  subscriptionScheduledChangeSchema,
  type SubscriptionScheduledChange,
} from "./subscription-scheduled-change.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";
import {
  transactionDetailsPreviewSchema,
  type TransactionDetailsPreview,
} from "./transaction-details-preview.js";

/** Represents a subscription entity with included entities. */
export type SubscriptionIncludes = {
  id: string;
  status: SubscriptionStatus;
  /** Paddle ID of the customer that this subscription is for, prefixed with `ctm_`. */
  customerId: string;
  /** Paddle ID of the address that this subscription is for, prefixed with `add_`. */
  addressId: string;
  /** Paddle ID of the business that this subscription is for, prefixed with `biz_`. */
  businessId?: string | null;
  /**
   * Supported three-letter ISO 4217 currency code. Transactions for this subscription are created
   * in this currency. Must be `USD`, `EUR`, or `GBP` if `collection_mode` is `manual`.
   */
  currencyCode: CurrencyCode;
  createdAt: Date;
  updatedAt: Date;
  /**
   * RFC 3339 datetime string of when this subscription started. This may be different from
   * `first_billed_at` if the subscription started in trial.
   */
  startedAt?: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was first billed. This may be different from
   * `started_at` if the subscription started in trial.
   */
  firstBilledAt?: Date | null;
  /** RFC 3339 datetime string of when this subscription is next scheduled to be billed. */
  nextBilledAt?: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was paused. Set automatically by Paddle when
   * the pause subscription operation is used. `null` if not paused.
   */
  pausedAt?: Date | null;
  /**
   * RFC 3339 datetime string of when this subscription was canceled. Set automatically by Paddle
   * when the cancel subscription operation is used. `null` if not canceled.
   */
  canceledAt?: Date | null;
  /** Details of the discount applied to this subscription. */
  discount?: SubscriptionDiscountTimePeriod | null;
  /**
   * How payment is collected for transactions created for this subscription. `automatic` for
   * checkout, `manual` for invoices.
   *
   * @default CollectionMode.Automatic
   */
  collectionMode?: CollectionMode;
  /** Details for invoicing. Required if `collection_mode` is `manual`. */
  billingDetails?: BillingDetails | null;
  /**
   * Current billing period for this subscription. Set automatically by Paddle based on the billing
   * cycle. `null` for `paused` and `canceled` subscriptions.
   */
  currentBillingPeriod?: TimePeriod | null;
  /**
   * How often this subscription renews. Set automatically by Paddle based on the prices on this
   * subscription.
   */
  billingCycle: Duration;
  /**
   * Change that's scheduled to be applied to a subscription. Use the pause subscription, cancel
   * subscription, and resume subscription operations to create scheduled changes. `null` if no
   * scheduled changes.
   */
  scheduledChange?: SubscriptionScheduledChange | null;
  managementUrls: SubscriptionManagementUrls;
  /** List of items on this subscription. Only recurring items are returned. */
  items: SubscriptionItem[];
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMetaSubscription | null;
  /** List of active consent requirements for the subscription's current billing period. */
  consentRequirements: SubscriptionConsentRequirement[];
  /**
   * Preview of the next transaction for this subscription. May include prorated charges that aren't
   * yet billed and one-time charges. Returned when the `include` parameter is used with the
   * `next_transaction` value. `null` if the subscription is scheduled to cancel or pause.
   */
  nextTransaction?: NextTransaction | null;
  /**
   * Preview of the recurring transaction for this subscription. This is what the customer can
   * expect to be billed when there are no prorated or one-time charges. Returned when the `include`
   * parameter is used with the `recurring_transaction_details` value.
   */
  recurringTransactionDetails?: TransactionDetailsPreview;
};

export const subscriptionIncludesSchema: Schema<SubscriptionIncludes> = s.object<SubscriptionIncludes>({
  id: s.string(),
  status: subscriptionStatusSchema,
  customerId: s.string(),
  addressId: s.string(),
  businessId: s.optionalNullable(s.string()),
  currencyCode: currencyCodeSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  startedAt: s.optionalNullable(s.dateTime()),
  firstBilledAt: s.optionalNullable(s.dateTime()),
  nextBilledAt: s.optionalNullable(s.dateTime()),
  pausedAt: s.optionalNullable(s.dateTime()),
  canceledAt: s.optionalNullable(s.dateTime()),
  discount: s.optionalNullable(s.lazy(() => subscriptionDiscountTimePeriodSchema)),
  collectionMode: s.defaulted(collectionModeSchema, CollectionMode.Automatic),
  billingDetails: s.optionalNullable(s.lazy(() => billingDetailsSchema)),
  currentBillingPeriod: s.optionalNullable(s.lazy(() => timePeriodSchema)),
  billingCycle: durationSchema,
  scheduledChange: s.optionalNullable(s.lazy(() => subscriptionScheduledChangeSchema)),
  managementUrls: subscriptionManagementUrlsSchema,
  items: s.array(s.lazy(() => subscriptionItemSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSubscriptionSchema)),
  consentRequirements: s.array(s.lazy(() => subscriptionConsentRequirementSchema)),
  nextTransaction: s.optionalNullable(s.lazy(() => nextTransactionSchema)),
  recurringTransactionDetails: s.optional(s.lazy(() => transactionDetailsPreviewSchema)),
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
    managementUrls: "management_urls",
    customData: "custom_data",
    importMeta: "import_meta",
    consentRequirements: "consent_requirements",
    nextTransaction: "next_transaction",
    recurringTransactionDetails: "recurring_transaction_details",
  },
});
