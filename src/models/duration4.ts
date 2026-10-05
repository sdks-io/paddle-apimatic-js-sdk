import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

/** How long a customer has to pay this invoice once issued. */
export type Duration4 = {
  /** Unit of time. */
  interval: Interval;
  /** Amount of time. */
  frequency: number;
};

export const duration4Schema: Schema<Duration4> = s.object<Duration4>({
  interval: intervalSchema,
  frequency: s.int(),
});
