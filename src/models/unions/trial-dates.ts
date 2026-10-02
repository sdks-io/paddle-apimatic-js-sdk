import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "../time-period.js";

/** Trial dates for this item. */
export type TrialDates = TimePeriod;

export const trialDatesSchema: Schema<TrialDates> = s.of<TrialDates>(
  s.union([s.lazy(() => timePeriodSchema)]),
);
