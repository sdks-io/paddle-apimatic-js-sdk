import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { productWithIncludesSchema, type ProductWithIncludes } from "./product-with-includes.js";

export type ProductsResponse2 = {
  /** Represents a product entity with included entities. */
  data: ProductWithIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const productsResponse2Schema: Schema<ProductsResponse2> = s.object<ProductsResponse2>({
  data: productWithIncludesSchema,
  meta: metaSchema,
});
