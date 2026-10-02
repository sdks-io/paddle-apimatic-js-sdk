import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimePeriod = {
  /** RFC 3339 datetime string of when this period starts. */
  startsAt: Date;
  /** RFC 3339 datetime string of when this period ends. */
  endsAt: Date;
};

export const timePeriodSchema: Schema<TimePeriod> = s.object<TimePeriod>({
  startsAt: s.dateTime(),
  endsAt: s.dateTime(),
  _keysMap: {
    startsAt: "starts_at",
    endsAt: "ends_at",
  },
});
