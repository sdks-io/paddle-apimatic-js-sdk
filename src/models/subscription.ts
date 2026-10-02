import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CollectionMode, collectionModeSchema } from "./collection-mode.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { durationSchema, type Duration } from "./duration.js";
import {
  subscriptionConsentRequirementSchema,
  type SubscriptionConsentRequirement,
} from "./subscription-consent-requirement.js";
import { subscriptionItemSchema, type SubscriptionItem } from "./subscription-item.js";
import {
  subscriptionManagementUrlsSchema,
  type SubscriptionManagementUrls,
} from "./subscription-management-urls.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { billingDetails1ModelSchema, type BillingDetails1Model } from "./unions/billing-details1-model.js";
import { businessId7Schema, type BusinessId7 } from "./unions/business-id7.js";
import { canceledAtSchema, type CanceledAt } from "./unions/canceled-at.js";
import { currentBillingPeriod1Schema, type CurrentBillingPeriod1 } from "./unions/current-billing-period1.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { discount11Schema, type Discount11 } from "./unions/discount11.js";
import { firstBilledAt1Schema, type FirstBilledAt1 } from "./unions/first-billed-at1.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { nextBilledAt4Schema, type NextBilledAt4 } from "./unions/next-billed-at4.js";
import { pausedAtSchema, type PausedAt } from "./unions/paused-at.js";
import { scheduledChangeSchema, type ScheduledChange } from "./unions/scheduled-change.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/** Represents a subscription entity. */
export type Subscription = {
  id: string;
  status: SubscriptionStatus;
  /** Paddle ID of the customer that this subscription is for, prefixed with `ctm_`. */
  customerId: string;
  /** Paddle ID of the address that this subscription is for, prefixed with `add_`. */
  addressId: string;
  /** Paddle ID of the business that this subscription is for, prefixed with `biz_`. */
  businessId: BusinessId7;
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
  startedAt: StartedAt;
  /**
   * RFC 3339 datetime string of when this subscription was first billed. This may be different from
   * `started_at` if the subscription started in trial.
   */
  firstBilledAt: FirstBilledAt1;
  /** RFC 3339 datetime string of when this subscription is next scheduled to be billed. */
  nextBilledAt: NextBilledAt4;
  /**
   * RFC 3339 datetime string of when this subscription was paused. Set automatically by Paddle when
   * the pause subscription operation is used. `null` if not paused.
   */
  pausedAt: PausedAt;
  /**
   * RFC 3339 datetime string of when this subscription was canceled. Set automatically by Paddle
   * when the cancel subscription operation is used. `null` if not canceled.
   */
  canceledAt: CanceledAt;
  /** Details of the discount applied to this subscription. */
  discount: Discount11;
  /**
   * How payment is collected for transactions created for this subscription. `automatic` for
   * checkout, `manual` for invoices.
   *
   * @default CollectionMode.Automatic
   */
  collectionMode?: CollectionMode;
  /** Details for invoicing. Required if `collection_mode` is `manual`. */
  billingDetails: BillingDetails1Model;
  /**
   * Current billing period for this subscription. Set automatically by Paddle based on the billing
   * cycle. `null` for `paused` and `canceled` subscriptions.
   */
  currentBillingPeriod: CurrentBillingPeriod1;
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
  scheduledChange: ScheduledChange;
  managementUrls: SubscriptionManagementUrls;
  /** List of items on this subscription. Only recurring items are returned. */
  items: SubscriptionItem[];
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  /** List of active consent requirements for the subscription's current billing period. */
  consentRequirements: SubscriptionConsentRequirement[];
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  id: s.string(),
  status: subscriptionStatusSchema,
  customerId: s.string(),
  addressId: s.string(),
  businessId: businessId7Schema,
  currencyCode: currencyCodeSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  startedAt: startedAtSchema,
  firstBilledAt: firstBilledAt1Schema,
  nextBilledAt: nextBilledAt4Schema,
  pausedAt: pausedAtSchema,
  canceledAt: canceledAtSchema,
  discount: discount11Schema,
  collectionMode: s.defaulted(collectionModeSchema, CollectionMode.Automatic),
  billingDetails: billingDetails1ModelSchema,
  currentBillingPeriod: currentBillingPeriod1Schema,
  billingCycle: durationSchema,
  scheduledChange: scheduledChangeSchema,
  managementUrls: subscriptionManagementUrlsSchema,
  items: s.array(s.lazy(() => subscriptionItemSchema)),
  customData: customDataSchema,
  importMeta: importMeta1Schema,
  consentRequirements: s.array(s.lazy(() => subscriptionConsentRequirementSchema)),
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
  },
});
