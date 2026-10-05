import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

/** Represents a product entity when creating products. */
export type ProductCreate = {
  id?: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description?: string | null;
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
  imageUrl?: ImageUrl | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const productCreateSchema: Schema<ProductCreate> = s.object<ProductCreate>({
  id: s.optional(s.string()),
  name: s.string(),
  description: s.optionalNullable(s.string()),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  taxCategory: taxCategorySchema,
  imageUrl: s.optionalNullable(s.lazy(() => imageUrlSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
