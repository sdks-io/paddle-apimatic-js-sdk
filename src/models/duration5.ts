import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

/**
 * How often this subscription renews. Set automatically by Paddle based on the prices on this
 * subscription.
 */
export type Duration5 = {
  /** Unit of time. */
  interval: Interval;
  /** Amount of time. */
  frequency: number;
};

export const duration5Schema: Schema<Duration5> = s.object<Duration5>({
  interval: intervalSchema,
  frequency: s.int(),
});
