import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD). */
export type Totals4 = {
  /**
   * Subtotal before discount, tax, and deductions. If an item, unit price multiplied by quantity.
   */
  subtotal: string;
  /**
   * Total discount as a result of any discounts applied.
   *
   * Except for percentage discounts, Paddle applies tax to discounts based on the line item
   * `price.tax_mode`. If `price.tax_mode` for a line item is `internal`, Paddle removes tax from
   * the discount applied.
   */
  discount: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after discount and tax. */
  total: string;
};

export const totals4Schema: Schema<Totals4> = s.object<Totals4>({
  subtotal: s.string(),
  discount: s.string(),
  tax: s.string(),
  total: s.string(),
});
