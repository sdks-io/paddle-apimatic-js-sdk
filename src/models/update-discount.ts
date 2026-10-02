import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DiscountMode, discountModeSchema } from "./discount-mode.js";
import { discountStatusSchema, type DiscountStatus } from "./discount-status.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";
import { code1Schema, type Code1 } from "./unions/code1.js";
import { currencyCode1Schema, type CurrencyCode1 } from "./unions/currency-code1.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { discountGroupIdSchema, type DiscountGroupId } from "./unions/discount-group-id.js";
import { expiresAtSchema, type ExpiresAt } from "./unions/expires-at.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import {
  maximumRecurringIntervalsSchema,
  type MaximumRecurringIntervals,
} from "./unions/maximum-recurring-intervals.js";
import { restrictToSchema, type RestrictTo } from "./unions/restrict-to.js";
import { usageLimitSchema, type UsageLimit } from "./unions/usage-limit.js";

/** Represents a discount entity when updating discounts. */
export type UpdateDiscount = {
  id?: string;
  /** Whether this entity can be used in Paddle. */
  status?: DiscountStatus;
  /** Short description for this discount for your reference. Not shown to customers. */
  description?: string;
  /**
   * Whether this discount can be redeemed by customers at checkout (`true`) or not (`false`).
   *
   * @default true
   */
  enabledForCheckout?: boolean;
  /** Unique code that customers can use to redeem this discount at checkout. Not case-sensitive. */
  code?: Code1;
  /** Type of discount. Determines how this discount impacts the checkout or transaction total. */
  type?: DiscountType;
  /**
   * Discount mode. Standard discounts are considered part of your catalog and are shown in the
   * Paddle dashboard.
   *
   * @default DiscountMode.Standard
   */
  mode?: DiscountMode;
  /**
   * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`.
   * For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
   */
  amount?: string;
  /**
   * Supported three-letter ISO 4217 currency code. Required where discount type is `flat` or
   * `flat_per_seat`.
   */
  currencyCode?: CurrencyCode1;
  /**
   * Whether this discount applies for multiple subscription billing periods (`true`) or not
   * (`false`).
   *
   * @default false
   */
  recur?: boolean;
  /**
   * Number of subscription billing periods that this discount recurs for. Requires `recur`. `null`
   * if this discount recurs forever.
   *
   * Subscription renewals, midcycle changes, and one-time charges billed to a subscription aren't
   * considered a redemption. `times_used` is not incremented in these cases.
   */
  maximumRecurringIntervals?: MaximumRecurringIntervals;
  /**
   * Maximum number of times this discount can be redeemed. This is an overall limit for this
   * discount, rather than a per-customer limit. `null` if this discount can be redeemed an
   * unlimited amount of times.
   *
   * Paddle counts a usage as a redemption on a checkout, transaction, or the initial application
   * against a subscription. Transactions created for subscription renewals, midcycle changes, and
   * one-time charges aren't considered a redemption.
   */
  usageLimit?: UsageLimit;
  /**
   * Product or price IDs that this discount is for. When including a product ID, all prices for
   * that product can be discounted. `null` if this discount applies to all products and prices.
   */
  restrictTo?: RestrictTo;
  /**
   * RFC 3339 datetime string of when this discount expires. Discount can no longer be redeemed
   * after this date has elapsed. `null` if this discount can be redeemed forever.
   *
   * Expired discounts can't be redeemed against transactions or checkouts, but can be applied when
   * updating subscriptions.
   */
  expiresAt?: ExpiresAt;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /**
   * How many times this discount has been redeemed. Automatically incremented by Paddle.
   *
   * Paddle counts a usage as a redemption on a checkout, transaction, or subscription. Transactions
   * created for subscription renewals, midcycle changes, and one-time charges aren't considered a
   * redemption.
   */
  timesUsed?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * Paddle ID for the discount group related to this discount, prefixed with `dsg_`. `null` if not
   * in a discount group.
   */
  discountGroupId?: DiscountGroupId;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const updateDiscountSchema: Schema<UpdateDiscount> = s.object<UpdateDiscount>({
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => discountStatusSchema)),
  description: s.optional(s.string()),
  enabledForCheckout: s.defaulted(s.boolean(), true),
  code: s.optional(s.lazy(() => code1Schema)),
  type: s.optional(s.lazy(() => discountTypeSchema)),
  mode: s.defaulted(discountModeSchema, DiscountMode.Standard),
  amount: s.optional(s.string()),
  currencyCode: s.optional(s.lazy(() => currencyCode1Schema)),
  recur: s.defaulted(s.boolean(), false),
  maximumRecurringIntervals: s.optional(s.lazy(() => maximumRecurringIntervalsSchema)),
  usageLimit: s.optional(s.lazy(() => usageLimitSchema)),
  restrictTo: s.optional(s.lazy(() => restrictToSchema)),
  expiresAt: s.optional(s.lazy(() => expiresAtSchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  timesUsed: s.optional(s.number()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  discountGroupId: s.optional(s.lazy(() => discountGroupIdSchema)),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
  _keysMap: {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maximumRecurringIntervals: "maximum_recurring_intervals",
    usageLimit: "usage_limit",
    restrictTo: "restrict_to",
    expiresAt: "expires_at",
    customData: "custom_data",
    timesUsed: "times_used",
    createdAt: "created_at",
    updatedAt: "updated_at",
    discountGroupId: "discount_group_id",
    importMeta: "import_meta",
  },
});
