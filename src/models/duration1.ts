import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

export type Duration1 = {
  /** Unit of time. */
  interval: Interval;
  /** Amount of time. */
  frequency: number;
};

export const duration1Schema: Schema<Duration1> = s.object<Duration1>({
  interval: intervalSchema,
  frequency: s.int(),
});
