import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionChargeCreateWithProductSchema,
  type SubscriptionChargeCreateWithProduct,
} from "./subscription-charge-create-with-product.js";

/**
 * Add a non-catalog price for a non-catalog product in your catalog to a subscription. In this
 * case, the product and price that you're billing for are specific to this transaction.
 */
export type NonCatalogPriceAndProduct1 = {
  /** Quantity to bill for. */
  quantity: number;
  /**
   * Price object for a non-catalog item to charge for. Include a `product` object to create a
   * non-catalog product for this non-catalog price.
   */
  price: SubscriptionChargeCreateWithProduct;
};

export const nonCatalogPriceAndProduct1Schema: Schema<NonCatalogPriceAndProduct1> =
  s.object<NonCatalogPriceAndProduct1>({
    quantity: s.number(),
    price: subscriptionChargeCreateWithProductSchema,
  });
