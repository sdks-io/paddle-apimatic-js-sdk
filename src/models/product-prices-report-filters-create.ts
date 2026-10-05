import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "./filter-operator.js";
import {
  productPricesReportFilterNameSchema,
  type ProductPricesReportFilterName,
} from "./product-prices-report-filter-name.js";
import { value2Schema, type Value2 } from "./unions/value2.js";

/** List of filters applied to this report. */
export type ProductPricesReportFiltersCreate = {
  /** Field name to filter by. */
  name?: ProductPricesReportFilterName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator?: FilterOperator | null;
  /** Value to filter by. */
  value?: Value2;
};

export const productPricesReportFiltersCreateSchema: Schema<ProductPricesReportFiltersCreate> =
  s.object<ProductPricesReportFiltersCreate>({
    name: s.optional(s.lazy(() => productPricesReportFilterNameSchema)),
    operator: s.optionalNullable(s.lazy(() => filterOperatorSchema)),
    value: s.optional(s.lazy(() => value2Schema)),
  });
