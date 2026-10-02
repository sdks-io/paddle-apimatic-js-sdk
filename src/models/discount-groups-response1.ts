import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountGroupSchema, type DiscountGroup } from "./discount-group.js";
import { metaSchema, type Meta } from "./meta.js";

export type DiscountGroupsResponse1 = {
  /** Represents a discount group entity. */
  data: DiscountGroup;
  /** Information about this response. */
  meta: Meta;
};

export const discountGroupsResponse1Schema: Schema<DiscountGroupsResponse1> =
  s.object<DiscountGroupsResponse1>({
    data: discountGroupSchema,
    meta: metaSchema,
  });
