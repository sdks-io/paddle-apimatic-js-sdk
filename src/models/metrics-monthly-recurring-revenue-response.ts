import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesMonthlyRecurringRevenueSchema,
  type MetricsTimeseriesMonthlyRecurringRevenue,
} from "./metrics-timeseries-monthly-recurring-revenue.js";

export type MetricsMonthlyRecurringRevenueResponse = {
  /** Monthly recurring revenue metrics timeseries with amount for each datapoint. */
  data: MetricsTimeseriesMonthlyRecurringRevenue;
  /** Information about this response. */
  meta: Meta;
};

export const metricsMonthlyRecurringRevenueResponseSchema: Schema<MetricsMonthlyRecurringRevenueResponse> =
  s.object<MetricsMonthlyRecurringRevenueResponse>({
    data: metricsTimeseriesMonthlyRecurringRevenueSchema,
    meta: metaSchema,
  });
