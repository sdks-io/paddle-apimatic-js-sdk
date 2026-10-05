import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prorationSchema, type Proration } from "./proration.js";

/**
 * Add a catalog item to a transaction. In this case, the product and price that you're billing for
 * exist in your product catalog in Paddle.
 */
export type CatalogItem2 = {
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration?: Proration | null;
  /** Paddle ID of an existing catalog price to add to this transaction, prefixed with `pri_`. */
  priceId: string;
};

export const catalogItem2Schema: Schema<CatalogItem2> = s.object<CatalogItem2>({
  quantity: s.int(),
  proration: s.optionalNullable(s.lazy(() => prorationSchema)),
  priceId: s.string(),
  _keysMap: {
    priceId: "price_id",
  },
});
