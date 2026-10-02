import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionDiscountTypeSchema,
  type SubscriptionDiscountType,
} from "./subscription-discount-type.js";
import { endsAtSchema, type EndsAt } from "./unions/ends-at.js";
import { startsAtSchema, type StartsAt } from "./unions/starts-at.js";

/** Details of the discount applied to this subscription. */
export type SubscriptionDiscountTimePeriod = {
  /** Unique Paddle ID for this discount, prefixed with `dsc_`. */
  id: string;
  /**
   * RFC 3339 datetime string of when this discount was first applied. `null` for canceled
   * subscriptions where a discount was redeemed but never applied to a transaction.
   */
  startsAt: StartsAt;
  /**
   * RFC 3339 datetime string of when this discount no longer applies. Where a discount has
   * `maximum_recurring_intervals`, this is the date of the last billing period where this discount
   * applies. `null` where a discount recurs forever.
   */
  endsAt: EndsAt;
  /** Whether this discount applies for multiple billing periods. */
  type: SubscriptionDiscountType;
};

export const subscriptionDiscountTimePeriodSchema: Schema<SubscriptionDiscountTimePeriod> =
  s.object<SubscriptionDiscountTimePeriod>({
    id: s.string(),
    startsAt: startsAtSchema,
    endsAt: endsAtSchema,
    type: subscriptionDiscountTypeSchema,
    _keysMap: {
      startsAt: "starts_at",
      endsAt: "ends_at",
    },
  });
