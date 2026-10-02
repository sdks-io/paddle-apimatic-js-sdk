import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiscountMode1 = {
  /**
   * "custom": { "description": "Return entities where the mode is `custom`. Returned entities can
   * be considered non-catalog. They can be created via the API, or by Paddle for checkout recovery
   * discounts. Not shown in the Paddle dashboard." }
   */
  Standard: "standard",
  /**
   * "standard": { "description": "Return entities where the mode is `standard`. Returned entities
   * can be considered part of your catalog and reused across transactions and subscriptions
   * easily." }
   */
  Custom: "custom",
} as const;
export type DiscountMode1 = (typeof DiscountMode1)[keyof typeof DiscountMode1] | (string & {});

export const discountMode1Schema: EnumSchema<DiscountMode1> = s.enumOf<DiscountMode1>(DiscountMode1);
