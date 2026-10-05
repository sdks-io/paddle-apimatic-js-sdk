import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { product10Schema, type Product10 } from "./product10.js";
import { proration1Schema, type Proration1 } from "./proration1.js";
import { totals3Schema, type Totals3 } from "./totals3.js";
import { totals4Schema, type Totals4 } from "./totals4.js";

export type LineItem = {
  /** Paddle ID for the price related to this transaction line item, prefixed with `pri_`. */
  priceId: string;
  /** Quantity of this transaction line item. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration: Proration1 | null;
  /** Rate used to calculate tax for this transaction line item. */
  taxRate: string;
  /**
   * Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for
   * USD).
   */
  unitTotals: Totals3;
  /** Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD). */
  totals: Totals4;
  /**
   * Related product entity for this transaction line item price. Reflects the entity at the time it
   * was added to the transaction.
   */
  product: Product10;
  /**
   * Unique Paddle ID for this transaction item, prefixed with `txnitm_`. Used when working with
   * [adjustments](https://developer.paddle.com/build/transactions/create-transaction-adjustments).
   */
  id: string;
};

export const lineItemSchema: Schema<LineItem> = s.object<LineItem>({
  priceId: s.string(),
  quantity: s.int(),
  proration: s.nullable(s.lazy(() => proration1Schema)),
  taxRate: s.string(),
  unitTotals: totals3Schema,
  totals: totals4Schema,
  product: product10Schema,
  id: s.string(),
  _keysMap: {
    priceId: "price_id",
    taxRate: "tax_rate",
    unitTotals: "unit_totals",
  },
});
