import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { productSchema, type Product } from "./product.js";

export type ProductsResponse1 = {
  /** Represents a product entity. */
  data: Product;
  /** Information about this response. */
  meta: Meta;
};

export const productsResponse1Schema: Schema<ProductsResponse1> = s.object<ProductsResponse1>({
  data: productSchema,
  meta: metaSchema,
});
