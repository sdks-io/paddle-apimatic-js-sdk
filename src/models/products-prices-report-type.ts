import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const ProductsPricesReportType = {
  /**
   * "products_prices": { "description": "Products and prices reports contain information about your
   * products and prices. May include non-catalog products and prices." }
   */
  ProductsPrices: "products_prices",
} as const;
export type ProductsPricesReportType =
  | (typeof ProductsPricesReportType)[keyof typeof ProductsPricesReportType]
  | (string & {});

export const productsPricesReportTypeSchema: EnumSchema<ProductsPricesReportType> =
  s.enumOf<ProductsPricesReportType>(ProductsPricesReportType);
