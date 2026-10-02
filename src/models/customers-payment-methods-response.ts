import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";

export type CustomersPaymentMethodsResponse = {
  data: PaymentMethod[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const customersPaymentMethodsResponseSchema: Schema<CustomersPaymentMethodsResponse> =
  s.object<CustomersPaymentMethodsResponse>({
    data: s.array(s.lazy(() => paymentMethodSchema)),
    meta: paginatedMetaSchema,
  });
