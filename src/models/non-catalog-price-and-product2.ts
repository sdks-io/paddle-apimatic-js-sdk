import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prorationSchema, type Proration } from "./proration.js";
import {
  transactionPriceCreateWithProductSchema,
  type TransactionPriceCreateWithProduct,
} from "./transaction-price-create-with-product.js";

/**
 * Add a non-catalog price for a non-catalog product in your catalog to a transaction. In this case,
 * the product and price that you're billing for are specific to this transaction.
 */
export type NonCatalogPriceAndProduct2 = {
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration?: Proration | null;
  /**
   * Price object for a non-catalog item to charge for. Include a `product` object to create a
   * non-catalog product for this non-catalog price.
   */
  price: TransactionPriceCreateWithProduct;
};

export const nonCatalogPriceAndProduct2Schema: Schema<NonCatalogPriceAndProduct2> =
  s.object<NonCatalogPriceAndProduct2>({
    quantity: s.int(),
    proration: s.optionalNullable(s.lazy(() => prorationSchema)),
    price: transactionPriceCreateWithProductSchema,
  });
