import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionHistoryDiscountSchema,
  type SubscriptionHistoryDiscount,
} from "../subscription-history-discount.js";

/** Discount attached to the subscription when it was created. */
export type Discount1 = SubscriptionHistoryDiscount;

export const discount1Schema: Schema<Discount1> = s.of<Discount1>(
  s.union([s.lazy(() => subscriptionHistoryDiscountSchema)]),
);
