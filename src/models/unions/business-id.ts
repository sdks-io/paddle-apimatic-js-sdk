import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the business that this transaction is for, prefixed with `biz_`. */
export type BusinessId = string;

export const businessIdSchema: Schema<BusinessId> = s.of<BusinessId>(s.union([s.string()]));
