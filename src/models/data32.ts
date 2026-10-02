import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { taxCategory2Schema, type TaxCategory2 } from "./tax-category2.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { type2Schema, type Type2 } from "./unions/type2.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";

/** New or changed entity. */
export type Data32 = {
  /** Unique Paddle ID for this product, prefixed with `pro_`. */
  id: string;
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description: Description5;
  type: Type2;
  /** Product tax category. */
  taxCategory: TaxCategory2;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl: ImageUrl;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  updatedAt: UpdatedAt;
};

export const data32Schema: Schema<Data32> = s.object<Data32>({
  id: s.string(),
  name: s.string(),
  description: description5Schema,
  type: type2Schema,
  taxCategory: taxCategory2Schema,
  imageUrl: imageUrlSchema,
  customData: customDataSchema,
  status: statusSchema,
  importMeta: importMeta1Schema,
  createdAt: s.dateTime(),
  updatedAt: updatedAtSchema,
  _keysMap: {
    taxCategory: "tax_category",
    imageUrl: "image_url",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
