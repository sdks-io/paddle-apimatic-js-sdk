import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { discountCustomSchema, type DiscountCustom } from "../discount-custom.js";

/** Apply a non-catalog discount to a transaction. Send one of `discount_id` or `discount`. */
export type Discount14 = DiscountCustom;

export const discount14Schema: Schema<Discount14> = s.of<Discount14>(
  s.union([s.lazy(() => discountCustomSchema)]),
);
