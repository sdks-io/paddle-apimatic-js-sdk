import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountSchema, type Discount } from "./discount.js";
import { metaSchema, type Meta } from "./meta.js";

export type DiscountsResponse1 = {
  /** Represents a discount entity. */
  data: Discount;
  /** Information about this response. */
  meta: Meta;
};

export const discountsResponse1Schema: Schema<DiscountsResponse1> = s.object<DiscountsResponse1>({
  data: discountSchema,
  meta: metaSchema,
});
