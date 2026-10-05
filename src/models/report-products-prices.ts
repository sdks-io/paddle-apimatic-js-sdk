import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productPricesReportFiltersSchema,
  type ProductPricesReportFilters,
} from "./product-prices-report-filters.js";
import { ReportStatus, reportStatusSchema } from "./report-status.js";

/** Report entity when working with the products and prices report. */
export type ReportProductsPrices = {
  /** Unique Paddle ID for this report, prefixed with `rep_` */
  id: string;
  /**
   * Status of this report. Set automatically by Paddle.
   *
   * Reports are created as `pending` initially, then move to `ready` when they're available to
   * download.
   *
   * @default ReportStatus.Pending
   */
  status?: ReportStatus;
  /** Number of records in this report. `null` if the report is `pending`. */
  rows: number | null;
  /**
   * RFC 3339 datetime string of when this report expires. The report is no longer available to
   * download after this date.
   */
  expiresAt: Date | null;
  /** RFC 3339 datetime string of when this report was last updated. */
  updatedAt: Date;
  /** RFC 3339 datetime string of when this report was created. */
  createdAt: Date;
  /** Type of report to create. @default "products_prices" */
  type?: "products_prices";
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `product_updated_at` and `price_updated_at` are greater than or
   * equal to (`gte`) the date 30 days ago from the time the report was generated.
   */
  filters: ProductPricesReportFilters[];
};

export const reportProductsPricesSchema: Schema<ReportProductsPrices> = s.object<ReportProductsPrices>({
  id: s.string(),
  status: s.defaulted(reportStatusSchema, ReportStatus.Pending),
  rows: s.nullable(s.int()),
  expiresAt: s.nullable(s.dateTime()),
  updatedAt: s.dateTime(),
  createdAt: s.dateTime(),
  type: s.defaulted(s.literal("products_prices"), "products_prices"),
  filters: s.array(s.lazy(() => productPricesReportFiltersSchema)),
  _keysMap: {
    expiresAt: "expires_at",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
