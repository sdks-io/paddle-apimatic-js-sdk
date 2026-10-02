import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type CustomersAddressesResponse = {
  data: Address[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const customersAddressesResponseSchema: Schema<CustomersAddressesResponse> =
  s.object<CustomersAddressesResponse>({
    data: s.array(s.lazy(() => addressSchema)),
    meta: paginatedMetaSchema,
  });
