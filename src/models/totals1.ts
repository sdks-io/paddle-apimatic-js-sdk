import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Calculated totals for the tax applied to this transaction. */
export type Totals1 = {
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

export const totals1Schema: Schema<Totals1> = s.object<Totals1>({
  subtotal: s.string(),
  discount: s.string(),
  tax: s.string(),
  total: s.string(),
});
