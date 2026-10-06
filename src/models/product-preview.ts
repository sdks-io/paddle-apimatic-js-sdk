import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { Status, statusSchema } from "./status.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

/** Represents a product (preview) entity. */
export type ProductPreview = {
  /**
   * Unique Paddle ID for this product, prefixed with `pro_`. The value is null for custom products
   * being previewed.
   */
  id?: string | null;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description?: string | null;
  /** @default CatalogType.Standard */
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
  /** @default Status.Active */
  status?: Status;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
  createdAt: Date;
  updatedAt: Date;
};

export const productPreviewSchema: Schema<ProductPreview> = s.object<ProductPreview>({
  id: s.optionalNullable(s.string()),
  name: s.string(),
  description: s.optionalNullable(s.string()),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  taxCategory: taxCategorySchema,
  imageUrl: s.optionalNullable(s.lazy(() => imageUrlSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.defaulted(statusSchema, Status.Active),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
