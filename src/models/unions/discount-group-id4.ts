import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DiscountGroupId4 = string;

export const discountGroupId4Schema: Schema<DiscountGroupId4> = s.of<DiscountGroupId4>(s.union([s.string()]));
