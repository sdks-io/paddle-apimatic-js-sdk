import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";
import { prorationSchema, type Proration } from "./proration.js";
import { totalsSchema, type Totals } from "./totals.js";

export type TransactionDetailsLineItem = {
  /** Paddle ID for the price related to this transaction line item, prefixed with `pri_`. */
  priceId: string;
  /** Quantity of this transaction line item. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration: Proration | null;
  /** Rate used to calculate tax for this transaction line item. */
  taxRate: string;
  /**
   * Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for
   * USD).
   */
  unitTotals: Totals;
  totals: Totals;
  /**
   * Related product entity for this transaction line item price. Reflects the entity at the time it
   * was added to the transaction.
   */
  product: Product;
  id: string;
};

export const transactionDetailsLineItemSchema: Schema<TransactionDetailsLineItem> =
  s.object<TransactionDetailsLineItem>({
    priceId: s.string(),
    quantity: s.int(),
    proration: s.nullable(s.lazy(() => prorationSchema)),
    taxRate: s.string(),
    unitTotals: totalsSchema,
    totals: totalsSchema,
    product: productSchema,
    id: s.string(),
    _keysMap: {
      priceId: "price_id",
      taxRate: "tax_rate",
      unitTotals: "unit_totals",
    },
  });
