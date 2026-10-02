import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { priceIncludesSchema, type PriceIncludes } from "./price-includes.js";

export type PricesResponse = {
  data: PriceIncludes[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const pricesResponseSchema: Schema<PricesResponse> = s.object<PricesResponse>({
  data: s.array(s.lazy(() => priceIncludesSchema)),
  meta: paginatedMetaSchema,
});
