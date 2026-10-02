import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID for the discount group related to this discount, prefixed with `dsg_`. `null` if not in
 * a discount group.
 */
export type DiscountGroupId = string;

export const discountGroupIdSchema: Schema<DiscountGroupId> = s.of<DiscountGroupId>(s.union([s.string()]));
