import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of time. */
export const Interval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type Interval = (typeof Interval)[keyof typeof Interval] | (string & {});

export const intervalSchema: EnumSchema<Interval> = s.enumOf<Interval>(Interval);
