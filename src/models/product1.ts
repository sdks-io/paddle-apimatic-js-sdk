import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { Status, statusSchema } from "./status.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";

/**
 * Related product entity for this item. This reflects the product entity at the time it was added
 * to the subscription.
 */
export type Product1 = {
  /** Unique Paddle ID for this product, prefixed with `pro_`. */
  id: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description: Description5;
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
  imageUrl: ImageUrl;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Whether this entity can be used in Paddle. @default Status.Active */
  status?: Status;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const product1Schema: Schema<Product1> = s.object<Product1>({
  id: s.string(),
  name: s.string(),
  description: description5Schema,
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  taxCategory: taxCategorySchema,
  imageUrl: imageUrlSchema,
  customData: customDataSchema,
  status: s.defaulted(statusSchema, Status.Active),
  importMeta: importMeta1Schema,
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
