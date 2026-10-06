import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogTypeSchema, type CatalogType } from "./catalog-type.js";
import { statusSchema, type Status } from "./status.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

/** Represents a product entity when updating products. */
export type ProductUpdate = {
  /** Name of this product. */
  name?: string;
  /** Short description for this product. */
  description?: string | null;
  type?: CatalogType;
  /**
   * Tax category for this product. Used for charging the correct rate of tax. Selected tax category
   * must be enabled on your Paddle account.
   */
  taxCategory?: TaxCategory;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl?: ImageUrl | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
};

export const productUpdateSchema: Schema<ProductUpdate> = s.object<ProductUpdate>({
  name: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => catalogTypeSchema)),
  taxCategory: s.optional(s.lazy(() => taxCategorySchema)),
  imageUrl: s.optionalNullable(s.lazy(() => imageUrlSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => statusSchema)),
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
  },
});
