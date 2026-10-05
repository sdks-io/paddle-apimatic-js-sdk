import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogTypeSchema, type CatalogType } from "./catalog-type.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";
import { taxCategory2Schema, type TaxCategory2 } from "./tax-category2.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

/** New or changed entity. */
export type Data32 = {
  /** Unique Paddle ID for this product, prefixed with `pro_`. */
  id: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description: string | null;
  type: CatalogType | null;
  /** Product tax category. */
  taxCategory: TaxCategory2;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl: ImageUrl | null;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  updatedAt: Date | null;
};

export const data32Schema: Schema<Data32> = s.object<Data32>({
  id: s.string(),
  name: s.string(),
  description: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => catalogTypeSchema)),
  taxCategory: taxCategory2Schema,
  imageUrl: s.nullable(s.lazy(() => imageUrlSchema)),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  status: statusSchema,
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.nullable(s.dateTime()),
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
