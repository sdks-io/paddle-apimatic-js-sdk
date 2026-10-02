import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this subscription was first billed. This may be different from
 * `started_at` if the subscription started in trial.
 */
export type FirstBilledAt1 = Date;

export const firstBilledAt1Schema: Schema<FirstBilledAt1> = s.of<FirstBilledAt1>(s.union([s.dateTime()]));
