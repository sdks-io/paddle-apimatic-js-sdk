import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this subscription is next scheduled to be billed. */
export type NextBilledAt4 = Date;

export const nextBilledAt4Schema: Schema<NextBilledAt4> = s.of<NextBilledAt4>(s.union([s.dateTime()]));
