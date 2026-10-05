import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";

/** Represents a change to an item on the subscription at the time of a history entry. */
export type SubscriptionHistoryItem = {
  /** Price on the subscription. */
  price: Price;
  /** Quantity of the item on the subscription at the time of the history entry. */
  quantity: number;
};

export const subscriptionHistoryItemSchema: Schema<SubscriptionHistoryItem> =
  s.object<SubscriptionHistoryItem>({
    price: priceSchema,
    quantity: s.int(),
  });
