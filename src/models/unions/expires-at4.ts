import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this report expires. The report is no longer available to
 * download after this date.
 */
export type ExpiresAt4 = Date;

export const expiresAt4Schema: Schema<ExpiresAt4> = s.of<ExpiresAt4>(s.union([s.dateTime()]));
