import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionPriceCreateWithProductIdSchema,
  type TransactionPriceCreateWithProductId,
} from "./transaction-price-create-with-product-id.js";
import { proration13Schema, type Proration13 } from "./unions/proration13.js";

/**
 * Add a non-catalog price for an existing product in your catalog to a transaction. In this case,
 * the product you're billing for is a catalog product, but you charge a specific price for it.
 */
export type NonCatalogPriceForAnExistingProduct2 = {
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration?: Proration13;
  /**
   * Price object for a non-catalog item to charge for. Include a `product_id` to relate this
   * non-catalog price to an existing catalog price.
   */
  price: TransactionPriceCreateWithProductId;
};

export const nonCatalogPriceForAnExistingProduct2Schema: Schema<NonCatalogPriceForAnExistingProduct2> =
  s.object<NonCatalogPriceForAnExistingProduct2>({
    quantity: s.number(),
    proration: s.optional(s.lazy(() => proration13Schema)),
    price: transactionPriceCreateWithProductIdSchema,
  });
