import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionChargeCreateWithPriceInternalPriceModelSchema,
  type SubscriptionChargeCreateWithPriceInternalPriceModel,
} from "./subscription-charge-create-with-price-internal-price-model.js";

/**
 * Add a non-catalog price for an existing product in your catalog to a subscription. In this case,
 * the product you're billing for is a catalog product, but you charge a specific price for it.
 */
export type NonCatalogPriceForAnExistingProduct1 = {
  /** Quantity to bill for. */
  quantity: number;
  /**
   * Price object for a non-catalog item to bill for. Include a `product_id` to relate this
   * non-catalog price to an existing catalog price.
   */
  price: SubscriptionChargeCreateWithPriceInternalPriceModel;
};

export const nonCatalogPriceForAnExistingProduct1Schema: Schema<NonCatalogPriceForAnExistingProduct1> =
  s.object<NonCatalogPriceForAnExistingProduct1>({
    quantity: s.int(),
    price: subscriptionChargeCreateWithPriceInternalPriceModelSchema,
  });
