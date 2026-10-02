import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type CustomersResponse = {
  data: Customer[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const customersResponseSchema: Schema<CustomersResponse> = s.object<CustomersResponse>({
  data: s.array(s.lazy(() => customerSchema)),
  meta: paginatedMetaSchema,
});
