import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { durationSchema, type Duration } from "../duration.js";

/** How often this price should be charged. `null` if price is non-recurring (one-time). */
export type BillingCycle = Duration;

export const billingCycleSchema: Schema<BillingCycle> = s.of<BillingCycle>(
  s.union([s.lazy(() => durationSchema)]),
);
