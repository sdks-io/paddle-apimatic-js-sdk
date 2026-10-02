import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionPriceCreateWithProductIdSchema,
  type TransactionPriceCreateWithProductId,
} from "./transaction-price-create-with-product-id.js";

export type NonCatalogPriceForAnExistingProduct = {
  /** Quantity to bill for. */
  quantity: number;
  /**
   * Price object for a non-catalog item to bill for. Include a `product_id` to relate this
   * non-catalog price to an existing catalog price.
   */
  price: TransactionPriceCreateWithProductId;
};

export const nonCatalogPriceForAnExistingProductSchema: Schema<NonCatalogPriceForAnExistingProduct> =
  s.object<NonCatalogPriceForAnExistingProduct>({
    quantity: s.number(),
    price: transactionPriceCreateWithProductIdSchema,
  });
