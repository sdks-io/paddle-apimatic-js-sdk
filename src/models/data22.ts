import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";
import { statusSchema, type Status } from "./status.js";
import { code4Schema, type Code4 } from "./unions/code4.js";
import { currencyCode5Schema, type CurrencyCode5 } from "./unions/currency-code5.js";
import { customData15Schema, type CustomData15 } from "./unions/custom-data15.js";
import { discountGroupId4Schema, type DiscountGroupId4 } from "./unions/discount-group-id4.js";
import { expiresAt16Schema, type ExpiresAt16 } from "./unions/expires-at16.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import {
  maximumRecurringIntervalsSchema,
  type MaximumRecurringIntervals,
} from "./unions/maximum-recurring-intervals.js";
import { modeSchema, type Mode } from "./unions/mode.js";
import { restrictTo5Schema, type RestrictTo5 } from "./unions/restrict-to5.js";
import { usageLimitSchema, type UsageLimit } from "./unions/usage-limit.js";

/** New or changed entity. */
export type Data22 = {
  /** Unique Paddle ID for this discount, prefixed with `dsc_`. */
  id: string;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /** Short description for this discount for your reference. Not shown to customers. */
  description: string;
  /** Whether this discount can be redeemed by customers at checkout (`true`) or not (`false`). */
  enabledForCheckout: boolean;
  code: Code4;
  /** Type of discount. Determines how this discount impacts the checkout or transaction total. */
  type: DiscountType;
  /**
   * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`.
   * For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
   */
  amount: string;
  currencyCode: CurrencyCode5;
  /**
   * Whether this discount applies for multiple subscription billing periods (`true`) or not
   * (`false`).
   */
  recur: boolean;
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
  restrictTo: RestrictTo5;
  expiresAt: ExpiresAt16;
  mode: Mode;
  discountGroupId: DiscountGroupId4;
  customData: CustomData15;
  importMeta: ImportMeta11;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data22Schema: Schema<Data22> = s.object<Data22>({
  id: s.string(),
  status: statusSchema,
  description: s.string(),
  enabledForCheckout: s.boolean(),
  code: code4Schema,
  type: discountTypeSchema,
  amount: s.string(),
  currencyCode: currencyCode5Schema,
  recur: s.boolean(),
  maximumRecurringIntervals: maximumRecurringIntervalsSchema,
  usageLimit: usageLimitSchema,
  restrictTo: restrictTo5Schema,
  expiresAt: expiresAt16Schema,
  mode: modeSchema,
  discountGroupId: discountGroupId4Schema,
  customData: customData15Schema,
  importMeta: importMeta11Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maximumRecurringIntervals: "maximum_recurring_intervals",
    usageLimit: "usage_limit",
    restrictTo: "restrict_to",
    expiresAt: "expires_at",
    discountGroupId: "discount_group_id",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
