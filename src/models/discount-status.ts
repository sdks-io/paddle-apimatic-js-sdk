import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this entity can be used in Paddle. */
export const DiscountStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type DiscountStatus = (typeof DiscountStatus)[keyof typeof DiscountStatus] | (string & {});

export const discountStatusSchema: EnumSchema<DiscountStatus> = s.enumOf<DiscountStatus>(DiscountStatus);
