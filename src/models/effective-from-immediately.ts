import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EffectiveFromImmediately = {
  /**
   * "immediately": { "description": "Takes effect immediately. For automatically-collected
   * subscriptions, responses may take longer than usual while a payment attempt is processed." }
   */
  Immediately: "immediately",
} as const;
export type EffectiveFromImmediately =
  | (typeof EffectiveFromImmediately)[keyof typeof EffectiveFromImmediately]
  | (string & {});

export const effectiveFromImmediatelySchema: EnumSchema<EffectiveFromImmediately> =
  s.enumOf<EffectiveFromImmediately>(EffectiveFromImmediately);
