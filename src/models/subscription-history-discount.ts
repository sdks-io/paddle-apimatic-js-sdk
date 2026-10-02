import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountSchema, type Discount } from "./discount.js";
import {
  subscriptionHistoryDiscountTypeSchema,
  type SubscriptionHistoryDiscountType,
} from "./subscription-history-discount-type.js";
import { endsAt1Schema, type EndsAt1 } from "./unions/ends-at1.js";

/** Details of a discount on a subscription at the time of a history entry. */
export type SubscriptionHistoryDiscount = {
  /** Discount on the subscription. */
  discount: Discount;
  /** The type of discount. */
  type: SubscriptionHistoryDiscountType;
  /** RFC 3339 datetime string of when the discount is effective from on the subscription. */
  startsAt: Date;
  /**
   * RFC 3339 datetime string of when the discount stops being effective on the subscription. `null`
   * if the discount does not have an end date.
   */
  endsAt: EndsAt1;
};

export const subscriptionHistoryDiscountSchema: Schema<SubscriptionHistoryDiscount> =
  s.object<SubscriptionHistoryDiscount>({
    discount: discountSchema,
    type: subscriptionHistoryDiscountTypeSchema,
    startsAt: s.dateTime(),
    endsAt: endsAt1Schema,
    _keysMap: {
      startsAt: "starts_at",
      endsAt: "ends_at",
    },
  });
