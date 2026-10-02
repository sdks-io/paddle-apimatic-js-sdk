import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesMonthlyRecurringRevenueChangeSchema,
  type MetricsTimeseriesMonthlyRecurringRevenueChange,
} from "./metrics-timeseries-monthly-recurring-revenue-change.js";

export type MetricsMonthlyRecurringRevenueChangeResponse = {
  /** Monthly recurring revenue change metrics timeseries with amount for each datapoint. */
  data: MetricsTimeseriesMonthlyRecurringRevenueChange;
  /** Information about this response. */
  meta: Meta;
};

export const metricsMonthlyRecurringRevenueChangeResponseSchema: Schema<MetricsMonthlyRecurringRevenueChangeResponse> =
  s.object<MetricsMonthlyRecurringRevenueChangeResponse>({
    data: metricsTimeseriesMonthlyRecurringRevenueChangeSchema,
    meta: metaSchema,
  });
