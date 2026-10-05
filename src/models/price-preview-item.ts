import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PricePreviewItem = {
  /** Paddle ID for the price to add to this transaction, prefixed with `pri_`. */
  priceId?: string;
  /** Quantity of the item to preview. */
  quantity: number;
};

export const pricePreviewItemSchema: Schema<PricePreviewItem> = s.object<PricePreviewItem>({
  priceId: s.optional(s.string()),
  quantity: s.int(),
  _keysMap: {
    priceId: "price_id",
  },
});
