import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountIncludesSchema, type DiscountIncludes } from "./discount-includes.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type DiscountsResponse = {
  data: DiscountIncludes[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const discountsResponseSchema: Schema<DiscountsResponse> = s.object<DiscountsResponse>({
  data: s.array(s.lazy(() => discountIncludesSchema)),
  meta: paginatedMetaSchema,
});
