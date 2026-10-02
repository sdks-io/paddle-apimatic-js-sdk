import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time granularity for the datapoints. */
export const MetricsInterval = {
  Day: "day",
} as const;
export type MetricsInterval = (typeof MetricsInterval)[keyof typeof MetricsInterval] | (string & {});

export const metricsIntervalSchema: EnumSchema<MetricsInterval> = s.enumOf<MetricsInterval>(MetricsInterval);
