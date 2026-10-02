import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type CustomersBusinessesResponse = {
  data: Business[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const customersBusinessesResponseSchema: Schema<CustomersBusinessesResponse> =
  s.object<CustomersBusinessesResponse>({
    data: s.array(s.lazy(() => businessSchema)),
    meta: paginatedMetaSchema,
  });
