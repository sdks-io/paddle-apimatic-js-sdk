import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this notification was delivered. `null` if not yet delivered
 * successfully.
 */
export type DeliveredAt = Date;

export const deliveredAtSchema: Schema<DeliveredAt> = s.of<DeliveredAt>(s.union([s.dateTime()]));
