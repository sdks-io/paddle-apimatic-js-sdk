import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { subscriptionHistoryItemSchema, type SubscriptionHistoryItem } from "../subscription-history-item.js";

/** Items on the subscription when it was created. */
export type Items2 = SubscriptionHistoryItem[];

export const items2Schema: Schema<Items2> = s.of<Items2>(
  s.union([s.array(s.lazy(() => subscriptionHistoryItemSchema))]),
);
