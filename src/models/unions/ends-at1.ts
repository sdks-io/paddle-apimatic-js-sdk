import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the discount stops being effective on the subscription. `null`
 * if the discount does not have an end date.
 */
export type EndsAt1 = Date;

export const endsAt1Schema: Schema<EndsAt1> = s.of<EndsAt1>(s.union([s.dateTime()]));
