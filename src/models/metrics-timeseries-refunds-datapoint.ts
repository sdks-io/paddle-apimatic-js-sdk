import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single datapoint in a refund metrics timeseries. */
export type MetricsTimeseriesRefundsDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Amount for this datapoint in the lowest denomination for a currency. */
  amount: string;
};

export const metricsTimeseriesRefundsDatapointSchema: Schema<MetricsTimeseriesRefundsDatapoint> =
  s.object<MetricsTimeseriesRefundsDatapoint>({
    timestamp: s.dateTime(),
    amount: s.string(),
  });
