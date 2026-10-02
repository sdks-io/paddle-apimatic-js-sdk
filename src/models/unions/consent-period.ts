import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "../time-period.js";

/**
 * Period during which consent for this subscription can be granted. `null` if there is no
 * `next_billed_at` or the consent requirement does not apply to the current billing period.
 */
export type ConsentPeriod = TimePeriod;

export const consentPeriodSchema: Schema<ConsentPeriod> = s.of<ConsentPeriod>(
  s.union([s.lazy(() => timePeriodSchema)]),
);
