import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the business that this transaction is for, prefixed with `biz_`. Requires
 * `customer_id`.
 */
export type BusinessId13 = string;

export const businessId13Schema: Schema<BusinessId13> = s.of<BusinessId13>(s.union([s.string()]));
