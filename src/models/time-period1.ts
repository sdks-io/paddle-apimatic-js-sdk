import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Billing period that proration is based on. */
export type TimePeriod1 = {
  /** RFC 3339 datetime string of when this period starts. */
  startsAt: Date;
  /** RFC 3339 datetime string of when this period ends. */
  endsAt: Date;
};

export const timePeriod1Schema: Schema<TimePeriod1> = s.object<TimePeriod1>({
  startsAt: s.dateTime(),
  endsAt: s.dateTime(),
  _keysMap: {
    startsAt: "starts_at",
    endsAt: "ends_at",
  },
});
