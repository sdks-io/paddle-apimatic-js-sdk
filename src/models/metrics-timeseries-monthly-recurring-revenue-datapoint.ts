import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A single datapoint in a monthly recurring revenue metrics timeseries. Used by both MRR and MRR
 * change endpoints.
 */
export type MetricsTimeseriesMonthlyRecurringRevenueDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Amount for this datapoint in the lowest denomination for a currency. */
  amount: string;
};

export const metricsTimeseriesMonthlyRecurringRevenueDatapointSchema: Schema<MetricsTimeseriesMonthlyRecurringRevenueDatapoint> =
  s.object<MetricsTimeseriesMonthlyRecurringRevenueDatapoint>({
    timestamp: s.dateTime(),
    amount: s.string(),
  });
