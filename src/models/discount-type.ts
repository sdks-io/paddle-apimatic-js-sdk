import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of discount. Determines how this discount impacts the checkout or transaction total. */
export const DiscountType = {
  /**
   * "flat": { "description": "Discounts a checkout or transaction by a flat amount, for example
   * -$100. Requires `currency_code`." }
   */
  Flat: "flat",
  /**
   * "flat_per_seat": { "description": "Discounts a checkout or transaction by a flat amount per
   * unit, for example -$100 per user. Requires `currency_code`." }
   */
  FlatPerSeat: "flat_per_seat",
  /**
   * "percentage": { "description": "Discounts a checkout or transaction by a percentage of the
   * total, for example -10%. Maximum 100%." }
   */
  Percentage: "percentage",
} as const;
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType] | (string & {});

export const discountTypeSchema: EnumSchema<DiscountType> = s.enumOf<DiscountType>(DiscountType);
