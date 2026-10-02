import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the business that this preview is for, prefixed with `biz_`. */
export type BusinessId1 = string;

export const businessId1Schema: Schema<BusinessId1> = s.of<BusinessId1>(s.union([s.string()]));
