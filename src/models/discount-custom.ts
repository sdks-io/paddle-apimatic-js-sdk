import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountTypeSchema, type DiscountType } from "./discount-type.js";

/** Represents a discount entity for a custom, non-catalog discount. */
export type DiscountCustom = {
  /** Short description for this discount for your reference. Not shown to customers. */
  description: string;
  /** Type of discount. Determines how this discount impacts the checkout or transaction total. */
  type: DiscountType;
  /**
   * Amount to discount by. For `percentage` discounts, must be an amount between `0.01` and `100`.
   * For `flat` and `flat_per_seat` discounts, amount in the lowest denomination for a currency.
   */
  amount: string;
  /**
   * Whether this discount applies for multiple subscription billing periods (`true`) or not
   * (`false`). If omitted, defaults to `false`.
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
  maximumRecurringIntervals?: number | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /**
   * Product or price IDs that this discount is for. When including a product ID, all prices for
   * that product can be discounted. `null` if this discount applies to all products and prices.
   */
  restrictTo?: string[] | null;
};

export const discountCustomSchema: Schema<DiscountCustom> = s.object<DiscountCustom>({
  description: s.string(),
  type: discountTypeSchema,
  amount: s.string(),
  recur: s.defaulted(s.boolean(), false),
  maximumRecurringIntervals: s.optionalNullable(s.int()),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  restrictTo: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    maximumRecurringIntervals: "maximum_recurring_intervals",
    customData: "custom_data",
    restrictTo: "restrict_to",
  },
});
