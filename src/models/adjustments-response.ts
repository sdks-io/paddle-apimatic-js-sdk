import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentSchema, type Adjustment } from "./adjustment.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type AdjustmentsResponse = {
  data: Adjustment[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const adjustmentsResponseSchema: Schema<AdjustmentsResponse> = s.object<AdjustmentsResponse>({
  data: s.array(s.lazy(() => adjustmentSchema)),
  meta: paginatedMetaSchema,
});
