import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryDiscountSchema,
  type SubscriptionHistoryDiscount,
} from "./subscription-history-discount.js";

/** Details specific to `subscription_discount_added` actions. */
export type DiscountAdded = {
  /** What happened on the subscription. @default "subscription_discount_added" */
  action?: "subscription_discount_added";
  /** Discount added to the subscription. */
  discount: SubscriptionHistoryDiscount;
};

export const discountAddedSchema: Schema<DiscountAdded> = s.object<DiscountAdded>({
  action: s.defaulted(s.literal("subscription_discount_added"), "subscription_discount_added"),
  discount: subscriptionHistoryDiscountSchema,
});
