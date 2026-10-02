import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectiveFromSchema, type EffectiveFrom } from "./effective-from.js";

/**
 * Details of the discount applied to this subscription. Include to add a discount to a
 * subscription. `null` to remove a discount.
 */
export type SubscriptionDiscountEffectiveFrom = {
  /** Unique Paddle ID for this discount, prefixed with `dsc_`. */
  id: string;
  /** When this discount should take effect from. */
  effectiveFrom: EffectiveFrom;
};

export const subscriptionDiscountEffectiveFromSchema: Schema<SubscriptionDiscountEffectiveFrom> =
  s.object<SubscriptionDiscountEffectiveFrom>({
    id: s.string(),
    effectiveFrom: effectiveFromSchema,
    _keysMap: {
      effectiveFrom: "effective_from",
    },
  });
