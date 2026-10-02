import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the subscription was first billed. `null` when the subscription
 * has never been billed — for example, an imported subscription recovering from `past_due`.
 */
export type FirstBilledAt = Date;

export const firstBilledAtSchema: Schema<FirstBilledAt> = s.of<FirstBilledAt>(s.union([s.dateTime()]));
