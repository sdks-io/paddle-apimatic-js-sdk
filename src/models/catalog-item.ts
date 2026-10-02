import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogItem = {
  /** Paddle ID for the price to add to this subscription, prefixed with `pri_`. */
  priceId: string;
  /**
   * Quantity of this item to add to the subscription. If updating an existing item and not changing
   * the quantity, you may omit `quantity`.
   */
  quantity?: number;
};

export const catalogItemSchema: Schema<CatalogItem> = s.object<CatalogItem>({
  priceId: s.string(),
  quantity: s.optional(s.number()),
  _keysMap: {
    priceId: "price_id",
  },
});
