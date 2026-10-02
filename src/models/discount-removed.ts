import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryDiscountSchema,
  type SubscriptionHistoryDiscount,
} from "./subscription-history-discount.js";

/** Details specific to `subscription_discount_removed` actions. */
export type DiscountRemoved = {
  /** What happened on the subscription. @default "subscription_discount_removed" */
  action?: "subscription_discount_removed";
  /** Discount removed from the subscription. */
  discount: SubscriptionHistoryDiscount;
};

export const discountRemovedSchema: Schema<DiscountRemoved> = s.object<DiscountRemoved>({
  action: s.defaulted(s.literal("subscription_discount_removed"), "subscription_discount_removed"),
  discount: subscriptionHistoryDiscountSchema,
});
