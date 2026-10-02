import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { proration18Schema, type Proration18 } from "./unions/proration18.js";

/**
 * Add a catalog item to a transaction. In this case, the product and price that you're billing for
 * exist in your product catalog in Paddle.
 */
export type CatalogItem3 = {
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * Whether this item should be included in totals for this transaction preview. Typically used to
   * exclude one-time charges from calculations.
   *
   * @default true
   */
  includeInTotals?: boolean;
  /** How proration was calculated for this item. `null` for transaction previews. */
  proration?: Proration18;
  /** Paddle ID of an existing catalog price to preview charging for, prefixed with `pri_`. */
  priceId: string;
};

export const catalogItem3Schema: Schema<CatalogItem3> = s.object<CatalogItem3>({
  quantity: s.number(),
  includeInTotals: s.defaulted(s.boolean(), true),
  proration: s.optional(s.lazy(() => proration18Schema)),
  priceId: s.string(),
  _keysMap: {
    includeInTotals: "include_in_totals",
    priceId: "price_id",
  },
});
