import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this item is next scheduled to be billed. */
export type NextBilledAt = Date;

export const nextBilledAtSchema: Schema<NextBilledAt> = s.of<NextBilledAt>(s.union([s.dateTime()]));
