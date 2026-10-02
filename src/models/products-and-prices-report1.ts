import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productPricesReportFiltersCreateSchema,
  type ProductPricesReportFiltersCreate,
} from "./product-prices-report-filters-create.js";
import {
  productsPricesReportTypeSchema,
  type ProductsPricesReportType,
} from "./products-prices-report-type.js";

/** Entity when working with a products and prices report. */
export type ProductsAndPricesReport1 = {
  /** Type of report to create. */
  type: ProductsPricesReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `product_updated_at` and `price_updated_at` are greater than or
   * equal to (`gte`) the date 30 days ago from the time the report was generated.
   */
  filters?: ProductPricesReportFiltersCreate[];
};

export const productsAndPricesReport1Schema: Schema<ProductsAndPricesReport1> =
  s.object<ProductsAndPricesReport1>({
    type: productsPricesReportTypeSchema,
    filters: s.optional(s.array(s.lazy(() => productPricesReportFiltersCreateSchema))),
  });
