import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the business that this transaction preview is for, prefixed with `biz_`. */
export type BusinessId15 = string;

export const businessId15Schema: Schema<BusinessId15> = s.of<BusinessId15>(s.union([s.string()]));
