import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a discount. Adds discount details (including price calculations) to webhook
 * payloads. Requires `items` or `transaction_id` for the discount to be applied.
 */
export type DiscountId3 = string;

export const discountId3Schema: Schema<DiscountId3> = s.of<DiscountId3>(s.union([s.string()]));
