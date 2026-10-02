import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionPriceCreateWithProductIdSchema,
  type TransactionPriceCreateWithProductId,
} from "./transaction-price-create-with-product-id.js";
import { proration18Schema, type Proration18 } from "./unions/proration18.js";

/**
 * Add a non-catalog price for an existing product in your catalog to a transaction. In this case,
 * the product you're billing for is a catalog product, but you charge a specific price for it.
 */
export type NonCatalogPriceForAnExistingProduct3 = {
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
  /**
   * Price object for a non-catalog item to preview charging for. Include a `product_id` to relate
   * this non-catalog price to an existing catalog price.
   */
  price: TransactionPriceCreateWithProductId;
};

export const nonCatalogPriceForAnExistingProduct3Schema: Schema<NonCatalogPriceForAnExistingProduct3> =
  s.object<NonCatalogPriceForAnExistingProduct3>({
    quantity: s.number(),
    includeInTotals: s.defaulted(s.boolean(), true),
    proration: s.optional(s.lazy(() => proration18Schema)),
    price: transactionPriceCreateWithProductIdSchema,
    _keysMap: {
      includeInTotals: "include_in_totals",
    },
  });
