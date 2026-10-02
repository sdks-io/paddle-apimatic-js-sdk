import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { reportSchema, type Report } from "./unions/report.js";

export type ReportsResponse = {
  data: Report[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const reportsResponseSchema: Schema<ReportsResponse> = s.object<ReportsResponse>({
  data: s.array(s.lazy(() => reportSchema)),
  meta: paginatedMetaSchema,
});
