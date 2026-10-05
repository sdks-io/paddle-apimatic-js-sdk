import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { Status, statusSchema } from "./status.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

/**
 * Related product entity for this transaction line item price. Reflects the entity at the time it
 * was added to the transaction.
 */
export type Product10 = {
  /** Unique Paddle ID for this product, prefixed with `pro_`. */
  id: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description: string | null;
  /**
   * Type of item. Standard items are considered part of your catalog and are shown in the Paddle
   * dashboard.
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
  imageUrl: ImageUrl | null;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  /** Whether this entity can be used in Paddle. @default Status.Active */
  status?: Status;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const product10Schema: Schema<Product10> = s.object<Product10>({
  id: s.string(),
  name: s.string(),
  description: s.nullable(s.string()),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  taxCategory: taxCategorySchema,
  imageUrl: s.nullable(s.lazy(() => imageUrlSchema)),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  status: s.defaulted(statusSchema, Status.Active),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
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
