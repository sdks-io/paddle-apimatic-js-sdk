import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "../time-period.js";

/** Current billing period of the subscription when it was created. */
export type CurrentBillingPeriod = TimePeriod;

export const currentBillingPeriodSchema: Schema<CurrentBillingPeriod> = s.of<CurrentBillingPeriod>(
  s.union([s.lazy(() => timePeriodSchema)]),
);
