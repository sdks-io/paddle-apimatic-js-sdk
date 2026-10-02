import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Add a catalog item to a subscription. In this case, the product and price that you're billing for
 * exist in your product catalog in Paddle.
 */
export type CatalogItem1 = {
  /** Quantity to bill for. */
  quantity: number;
  /** Paddle ID of an an existing catalog price to bill for. */
  priceId: string;
};

export const catalogItem1Schema: Schema<CatalogItem1> = s.object<CatalogItem1>({
  quantity: s.number(),
  priceId: s.string(),
  _keysMap: {
    priceId: "price_id",
  },
});
