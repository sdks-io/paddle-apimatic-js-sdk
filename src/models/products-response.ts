import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { productWithIncludesSchema, type ProductWithIncludes } from "./product-with-includes.js";

export type ProductsResponse = {
  data: ProductWithIncludes[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const productsResponseSchema: Schema<ProductsResponse> = s.object<ProductsResponse>({
  data: s.array(s.lazy(() => productWithIncludesSchema)),
  meta: paginatedMetaSchema,
});
