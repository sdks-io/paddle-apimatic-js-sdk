import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the business that this subscription is for, prefixed with `biz_`. Include to change
 * the business for a subscription.
 */
export type BusinessId9 = string;

export const businessId9Schema: Schema<BusinessId9> = s.of<BusinessId9>(s.union([s.string()]));
