import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountGroupSchema, type DiscountGroup } from "./discount-group.js";
import { DiscountMode, discountModeSchema } from "./discount-mode.js";
import { DiscountStatus, discountStatusSchema } from "./discount-status.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";
import { code1Schema, type Code1 } from "./unions/code1.js";
import { currencyCode1Schema, type CurrencyCode1 } from "./unions/currency-code1.js";
import { customData15Schema, type CustomData15 } from "./unions/custom-data15.js";
import { discountGroupIdSchema, type DiscountGroupId } from "./unions/discount-group-id.js";
import { expiresAtSchema, type ExpiresAt } from "./unions/expires-at.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import {
  maximumRecurringIntervalsSchema,
  type MaximumRecurringIntervals,
} from "./unions/maximum-recurring-intervals.js";
import { restrictToSchema, type RestrictTo } from "./unions/restrict-to.js";
import { usageLimitSchema, type UsageLimit } from "./unions/usage-limit.js";

/** Represents a discount entity with included entities. */
export type DiscountIncludes = {
  id: string;
  /** @default DiscountStatus.Active */
  status?: DiscountStatus;
  /** Short description for this discount for your reference. Not shown to customers. */
  description: string;
  /**
   * Whether this discount can be redeemed by customers at checkout (`true`) or not (`false`).
   *
   * @default true
   */
  enabledForCheckout?: boolean;
  /** Unique code that customers can use to redeem this discount at checkout. Not case-sensitive. */
  code: Code1;
  /** Type of discount. Determines how this discount impacts the checkout or transaction total. */
  type: DiscountType;
  /** @default DiscountMode.Standard */
  mode?: DiscountMode;
  /**
   * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`.
   * For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
   */
  amount: string;
  /**
   * Supported three-letter ISO 4217 currency code. Required where discount type is `flat` or
   * `flat_per_seat`.
   */
  currencyCode: CurrencyCode1;
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
  maximumRecurringIntervals: MaximumRecurringIntervals;
  /**
   * Maximum number of times this discount can be redeemed. This is an overall limit for this
   * discount, rather than a per-customer limit. `null` if this discount can be redeemed an
   * unlimited amount of times.
   *
   * Paddle counts a usage as a redemption on a checkout, transaction, or the initial application
   * against a subscription. Transactions created for subscription renewals, midcycle changes, and
   * one-time charges aren't considered a redemption.
   */
  usageLimit: UsageLimit;
  /**
   * Product or price IDs that this discount is for. When including a product ID, all prices for
   * that product can be discounted. `null` if this discount applies to all products and prices.
   */
  restrictTo: RestrictTo;
  /**
   * RFC 3339 datetime string of when this discount expires. Discount can no longer be redeemed
   * after this date has elapsed. `null` if this discount can be redeemed forever.
   *
   * Expired discounts can't be redeemed against transactions or checkouts, but can be applied when
   * updating subscriptions.
   */
  expiresAt: ExpiresAt;
  customData: CustomData15;
  /**
   * How many times this discount has been redeemed. Automatically incremented by Paddle.
   *
   * Paddle counts a usage as a redemption on a checkout, transaction, or subscription. Transactions
   * created for subscription renewals, midcycle changes, and one-time charges aren't considered a
   * redemption.
   */
  timesUsed: number;
  /**
   * Paddle ID for the discount group related to this discount, prefixed with `dsg_`. `null` if not
   * in a discount group.
   */
  discountGroupId: DiscountGroupId;
  createdAt: Date;
  updatedAt: Date;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  /**
   * Discount group for this discount. Returned when the `include` parameter is used with the
   * `discount_group` value and the discount has a `discount_group_id`.
   */
  discountGroup?: DiscountGroup;
};

export const discountIncludesSchema: Schema<DiscountIncludes> = s.object<DiscountIncludes>({
  id: s.string(),
  status: s.defaulted(discountStatusSchema, DiscountStatus.Active),
  description: s.string(),
  enabledForCheckout: s.defaulted(s.boolean(), true),
  code: code1Schema,
  type: discountTypeSchema,
  mode: s.defaulted(discountModeSchema, DiscountMode.Standard),
  amount: s.string(),
  currencyCode: currencyCode1Schema,
  recur: s.defaulted(s.boolean(), false),
  maximumRecurringIntervals: maximumRecurringIntervalsSchema,
  usageLimit: usageLimitSchema,
  restrictTo: restrictToSchema,
  expiresAt: expiresAtSchema,
  customData: customData15Schema,
  timesUsed: s.number(),
  discountGroupId: discountGroupIdSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: importMeta1Schema,
  discountGroup: s.optional(s.lazy(() => discountGroupSchema)),
  _keysMap: {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maximumRecurringIntervals: "maximum_recurring_intervals",
    usageLimit: "usage_limit",
    restrictTo: "restrict_to",
    expiresAt: "expires_at",
    customData: "custom_data",
    timesUsed: "times_used",
    discountGroupId: "discount_group_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    importMeta: "import_meta",
    discountGroup: "discount_group",
  },
});
