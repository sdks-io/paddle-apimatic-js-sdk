import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountIncludesSchema, type DiscountIncludes } from "./discount-includes.js";
import { metaSchema, type Meta } from "./meta.js";

export type DiscountsResponse2 = {
  /** Represents a discount entity with included entities. */
  data: DiscountIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const discountsResponse2Schema: Schema<DiscountsResponse2> = s.object<DiscountsResponse2>({
  data: discountIncludesSchema,
  meta: metaSchema,
});
