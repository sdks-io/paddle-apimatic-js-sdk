import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";

/** Represents a product entity when creating products. */
export type ProductCreate = {
  id?: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description?: Description5;
  /**
   * Type of item. Standard items are considered part of your catalog and are shown in the Paddle
   * dashboard. If omitted, defaults to `standard`.
   *
   * @default CatalogType.Standard
   */
  type?: CatalogType;
  /**
   * Tax category for this product. Used for charging the correct rate of tax. Selected tax category
   * must be enabled on your Paddle account.
   */
  taxCategory: TaxCategory;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl?: ImageUrl;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const productCreateSchema: Schema<ProductCreate> = s.object<ProductCreate>({
  id: s.optional(s.string()),
  name: s.string(),
  description: s.optional(s.lazy(() => description5Schema)),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  taxCategory: taxCategorySchema,
  imageUrl: s.optional(s.lazy(() => imageUrlSchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
