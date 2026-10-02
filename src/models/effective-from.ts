import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When this subscription change should take effect from. Defaults to `next_billing_period`, which
 * creates a `scheduled_change` to apply the subscription change at the end of the billing period.
 */
export const EffectiveFrom = {
  /** "next_billing_period": { "description": "Takes effect on the next billing period." } */
  NextBillingPeriod: "next_billing_period",
  /** "immediately": { "description": "Takes effect immediately." } */
  Immediately: "immediately",
} as const;
export type EffectiveFrom = (typeof EffectiveFrom)[keyof typeof EffectiveFrom] | (string & {});

export const effectiveFromSchema: EnumSchema<EffectiveFrom> = s.enumOf<EffectiveFrom>(EffectiveFrom);
