import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryDiscountSchema,
  type SubscriptionHistoryDiscount,
} from "./subscription-history-discount.js";

/**
 * Details specific to `subscription_discount_expired` actions. Recorded when a discount is no
 * longer eligible — for example, when the maximum number of billing periods for the discount has
 * been reached.
 */
export type DiscountExpired = {
  /** What happened on the subscription. @default "subscription_discount_expired" */
  action?: "subscription_discount_expired";
  /**
   * Discount that expired on the subscription. `ends_at` reflects when the discount stopped being
   * effective on the subscription. This is the discount that was removed.
   */
  discount: SubscriptionHistoryDiscount;
};

export const discountExpiredSchema: Schema<DiscountExpired> = s.object<DiscountExpired>({
  action: s.defaulted(s.literal("subscription_discount_expired"), "subscription_discount_expired"),
  discount: subscriptionHistoryDiscountSchema,
});
