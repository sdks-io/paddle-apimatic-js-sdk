import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutDomainSchema, type CheckoutDomain } from "./checkout-domain.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type CheckoutDomainsResponse = {
  data: CheckoutDomain[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const checkoutDomainsResponseSchema: Schema<CheckoutDomainsResponse> =
  s.object<CheckoutDomainsResponse>({
    data: s.array(s.lazy(() => checkoutDomainSchema)),
    meta: paginatedMetaSchema,
  });
