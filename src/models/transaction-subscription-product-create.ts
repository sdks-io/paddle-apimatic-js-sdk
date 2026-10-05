import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxCategorySchema, type TaxCategory } from "./tax-category.js";
import { imageUrlSchema, type ImageUrl } from "./unions/image-url.js";

export type TransactionSubscriptionProductCreate = {
  /** Name of this product. */
  name: string;
  /** Short description for this product. */
  description?: string | null;
  /**
   * Tax category for this product. Used for charging the correct rate of tax. Selected tax category
   * must be enabled on your Paddle account.
   */
  taxCategory: TaxCategory;
  /** Image for this product. Included in the checkout and on some customer documents. */
  imageUrl?: ImageUrl | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
};

export const transactionSubscriptionProductCreateSchema: Schema<TransactionSubscriptionProductCreate> =
  s.object<TransactionSubscriptionProductCreate>({
    name: s.string(),
    description: s.optionalNullable(s.string()),
    taxCategory: taxCategorySchema,
    imageUrl: s.optionalNullable(s.lazy(() => imageUrlSchema)),
    customData: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      taxCategory: "tax_category",
      imageUrl: "image_url",
      customData: "custom_data",
    },
  });
