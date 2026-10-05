import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionItemCreateWithPriceId = {
  /** Quantity to bill for. */
  quantity: number;
  /** Paddle ID of an an existing catalog price to bill for. */
  priceId: string;
};

export const subscriptionItemCreateWithPriceIdSchema: Schema<SubscriptionItemCreateWithPriceId> =
  s.object<SubscriptionItemCreateWithPriceId>({
    quantity: s.int(),
    priceId: s.string(),
    _keysMap: {
      priceId: "price_id",
    },
  });
