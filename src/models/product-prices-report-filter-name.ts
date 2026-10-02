import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const ProductPricesReportFilterName = {
  /**
   * "product_status": { "description": "Filter by product status. Pass an array of strings
   * containing any valid value for the `status` field against a product." }
   */
  ProductStatus: "product_status",
  /**
   * "price_status": { "description": "Filter by price status. Pass an array of strings containing
   * any valid value for the `status` field against a price." }
   */
  PriceStatus: "price_status",
  /**
   * "product_type": { "description": "Filter by product type. Pass an array of strings containing
   * any valid value for the `type` field against a product." }
   */
  ProductType: "product_type",
  /**
   * "price_type": { "description": "Filter by price type. Pass an array of strings containing any
   * valid value for the `type` field against a price." }
   */
  PriceType: "price_type",
  /**
   * "product_updated_at": { "description": "Filter by product `updated_at` date. Pass an RFC 3339
   * datetime string." }
   */
  ProductUpdatedAt: "product_updated_at",
  /**
   * "price_updated_at": { "description": "Filter by price `updated_at` date. Pass an RFC 3339
   * datetime string." }
   */
  PriceUpdatedAt: "price_updated_at",
} as const;
export type ProductPricesReportFilterName =
  | (typeof ProductPricesReportFilterName)[keyof typeof ProductPricesReportFilterName]
  | (string & {});

export const productPricesReportFilterNameSchema: EnumSchema<ProductPricesReportFilterName> =
  s.enumOf<ProductPricesReportFilterName>(ProductPricesReportFilterName);
