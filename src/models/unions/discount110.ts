import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionDiscountTimePeriodSchema,
  type SubscriptionDiscountTimePeriod,
} from "../subscription-discount-time-period.js";

export type Discount110 = SubscriptionDiscountTimePeriod;

export const discount110Schema: Schema<Discount110> = s.of<Discount110>(
  s.union([s.lazy(() => subscriptionDiscountTimePeriodSchema)]),
);
