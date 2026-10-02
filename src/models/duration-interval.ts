import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DurationInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type DurationInterval = (typeof DurationInterval)[keyof typeof DurationInterval] | (string & {});

export const durationIntervalSchema: EnumSchema<DurationInterval> =
  s.enumOf<DurationInterval>(DurationInterval);
