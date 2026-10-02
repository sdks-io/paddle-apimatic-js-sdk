import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountGroupSchema, type DiscountGroup } from "./discount-group.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type DiscountGroupsResponse = {
  data: DiscountGroup[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const discountGroupsResponseSchema: Schema<DiscountGroupsResponse> = s.object<DiscountGroupsResponse>({
  data: s.array(s.lazy(() => discountGroupSchema)),
  meta: paginatedMetaSchema,
});
