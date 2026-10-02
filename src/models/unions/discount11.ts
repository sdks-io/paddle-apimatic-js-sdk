import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionDiscountTimePeriodSchema,
  type SubscriptionDiscountTimePeriod,
} from "../subscription-discount-time-period.js";

/** Details of the discount applied to this subscription. */
export type Discount11 = SubscriptionDiscountTimePeriod;

export const discount11Schema: Schema<Discount11> = s.of<Discount11>(
  s.union([s.lazy(() => subscriptionDiscountTimePeriodSchema)]),
);
