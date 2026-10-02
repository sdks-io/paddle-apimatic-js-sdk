import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productPricesReportFilterNameSchema,
  type ProductPricesReportFilterName,
} from "./product-prices-report-filter-name.js";
import { operatorSchema, type Operator } from "./unions/operator.js";
import { value2Schema, type Value2 } from "./unions/value2.js";

/** List of filters applied to this report. */
export type ProductPricesReportFilters = {
  /** Field name to filter by. */
  name: ProductPricesReportFilterName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator: Operator;
  /** Value to filter by. */
  value: Value2;
};

export const productPricesReportFiltersSchema: Schema<ProductPricesReportFilters> =
  s.object<ProductPricesReportFilters>({
    name: productPricesReportFilterNameSchema,
    operator: operatorSchema,
    value: value2Schema,
  });
