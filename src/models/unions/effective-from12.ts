import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  effectiveFromImmediatelySchema,
  type EffectiveFromImmediately,
} from "../effective-from-immediately.js";

/**
 * When this subscription change should take effect from. You can pass `immediately` to resume
 * immediately.
 *
 * Valid where subscriptions have the status of `paused`.
 *
 * Defaults to `immediately` if omitted.
 */
export type EffectiveFrom12 = EffectiveFromImmediately;

export const effectiveFrom12Schema: Schema<EffectiveFrom12> = s.of<EffectiveFrom12>(
  s.union([s.lazy(() => effectiveFromImmediatelySchema)]),
);
