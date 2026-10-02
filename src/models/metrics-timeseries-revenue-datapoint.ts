import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single datapoint in a revenue metrics timeseries. */
export type MetricsTimeseriesRevenueDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Amount for this datapoint in the lowest denomination for a currency. */
  amount: string;
  /** Number of transactions for this datapoint. */
  count: number;
};

export const metricsTimeseriesRevenueDatapointSchema: Schema<MetricsTimeseriesRevenueDatapoint> =
  s.object<MetricsTimeseriesRevenueDatapoint>({
    timestamp: s.dateTime(),
    amount: s.string(),
    count: s.number(),
  });
