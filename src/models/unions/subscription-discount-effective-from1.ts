import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionDiscountEffectiveFromSchema,
  type SubscriptionDiscountEffectiveFrom,
} from "../subscription-discount-effective-from.js";

/**
 * Details of the discount applied to this subscription. Include to add a discount to a
 * subscription. `null` to remove a discount.
 */
export type SubscriptionDiscountEffectiveFrom1 = SubscriptionDiscountEffectiveFrom;

export const subscriptionDiscountEffectiveFrom1Schema: Schema<SubscriptionDiscountEffectiveFrom1> =
  s.of<SubscriptionDiscountEffectiveFrom1>(s.union([s.lazy(() => subscriptionDiscountEffectiveFromSchema)]));
