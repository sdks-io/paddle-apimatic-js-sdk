import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { duration5Schema, type Duration5 } from "./duration5.js";
import { subscriptionItem1Schema, type SubscriptionItem1 } from "./subscription-item1.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { billingDetails26Schema, type BillingDetails26 } from "./unions/billing-details26.js";
import { businessId17Schema, type BusinessId17 } from "./unions/business-id17.js";
import { canceledAtSchema, type CanceledAt } from "./unions/canceled-at.js";
import { collectionMode2Schema, type CollectionMode2 } from "./unions/collection-mode2.js";
import { consentRequirementsSchema, type ConsentRequirements } from "./unions/consent-requirements.js";
import { currentBillingPeriod1Schema, type CurrentBillingPeriod1 } from "./unions/current-billing-period1.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { discount110Schema, type Discount110 } from "./unions/discount110.js";
import { firstBilledAt1Schema, type FirstBilledAt1 } from "./unions/first-billed-at1.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import { nextBilledAt4Schema, type NextBilledAt4 } from "./unions/next-billed-at4.js";
import { pausedAtSchema, type PausedAt } from "./unions/paused-at.js";
import { scheduledChange3Schema, type ScheduledChange3 } from "./unions/scheduled-change3.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

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
  businessId: BusinessId17;
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
  discount: Discount110;
  /**
   * How payment is collected for transactions created for this subscription. `automatic` for
   * checkout, `manual` for invoices.
   */
  collectionMode: CollectionMode2;
  billingDetails: BillingDetails26;
  /**
   * Current billing period for this subscription. Set automatically by Paddle based on the billing
   * cycle. `null` for `paused` and `canceled` subscriptions.
   */
  currentBillingPeriod: CurrentBillingPeriod1;
  /**
   * How often this subscription renews. Set automatically by Paddle based on the prices on this
   * subscription.
   */
  billingCycle: Duration5;
  scheduledChange: ScheduledChange3;
  items: SubscriptionItem1[];
  /** List of active consent requirements for the subscription's current billing period. */
  consentRequirements: ConsentRequirements;
  /** Your own structured key-value data. */
  customData: CustomData;
  importMeta: ImportMeta11;
  /** Unique Paddle ID for this transaction entity, prefixed with `txn_`. */
  transactionId: string;
};

export const data37Schema: Schema<Data37> = s.object<Data37>({
  id: s.string(),
  status: subscriptionStatusSchema,
  customerId: s.string(),
  addressId: s.string(),
  businessId: businessId17Schema,
  currencyCode: currencyCodeSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  startedAt: startedAtSchema,
  firstBilledAt: firstBilledAt1Schema,
  nextBilledAt: nextBilledAt4Schema,
  pausedAt: pausedAtSchema,
  canceledAt: canceledAtSchema,
  discount: discount110Schema,
  collectionMode: collectionMode2Schema,
  billingDetails: billingDetails26Schema,
  currentBillingPeriod: currentBillingPeriod1Schema,
  billingCycle: duration5Schema,
  scheduledChange: scheduledChange3Schema,
  items: s.array(s.lazy(() => subscriptionItem1Schema)),
  consentRequirements: consentRequirementsSchema,
  customData: customDataSchema,
  importMeta: importMeta11Schema,
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
