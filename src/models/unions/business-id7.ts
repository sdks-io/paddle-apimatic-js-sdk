import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the business that this subscription is for, prefixed with `biz_`. */
export type BusinessId7 = string;

export const businessId7Schema: Schema<BusinessId7> = s.of<BusinessId7>(s.union([s.string()]));
