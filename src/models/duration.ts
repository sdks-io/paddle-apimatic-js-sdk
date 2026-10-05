import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationIntervalSchema, type DurationInterval } from "./duration-interval.js";

export type Duration = {
  /** Unit of time. */
  interval: DurationInterval;
  /** Amount of time. */
  frequency: number;
};

export const durationSchema: Schema<Duration> = s.object<Duration>({
  interval: durationIntervalSchema,
  frequency: s.int(),
});
