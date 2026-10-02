import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

export type TransactionSubscriptionProductCreate = {
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description?: Description5;
  /**
   * Tax category for this product. Used for charging the correct rate of tax. Selected tax category
   * must be enabled on your Paddle account.
   */
  taxCategory: TaxCategory;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl?: ImageUrl;
  /** Your own structured key-value data. */
  customData?: CustomData;
};

export const transactionSubscriptionProductCreateSchema: Schema<TransactionSubscriptionProductCreate> =
  s.object<TransactionSubscriptionProductCreate>({
    name: s.string(),
    description: s.optional(s.lazy(() => description5Schema)),
    taxCategory: taxCategorySchema,
    imageUrl: s.optional(s.lazy(() => imageUrlSchema)),
    customData: s.optional(s.lazy(() => customDataSchema)),
    _keysMap: {
      taxCategory: "tax_category",
      imageUrl: "image_url",
      customData: "custom_data",
    },
  });
