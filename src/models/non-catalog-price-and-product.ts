import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionPriceCreateWithProductSchema,
  type TransactionPriceCreateWithProduct,
} from "./transaction-price-create-with-product.js";

export type NonCatalogPriceAndProduct = {
  /** Quantity to bill for. */
  quantity: number;
  /**
   * Price object for a non-catalog item to charge for. Include a `product` object to create a
   * non-catalog product for this non-catalog price.
   */
  price: TransactionPriceCreateWithProduct;
};

export const nonCatalogPriceAndProductSchema: Schema<NonCatalogPriceAndProduct> =
  s.object<NonCatalogPriceAndProduct>({
    quantity: s.int(),
    price: transactionPriceCreateWithProductSchema,
  });
