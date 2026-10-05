import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single datapoint in a chargeback metrics timeseries. */
export type MetricsTimeseriesChargebacksDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Number of chargebacks for this datapoint. */
  count: number;
};

export const metricsTimeseriesChargebacksDatapointSchema: Schema<MetricsTimeseriesChargebacksDatapoint> =
  s.object<MetricsTimeseriesChargebacksDatapoint>({
    timestamp: s.dateTime(),
    count: s.int(),
  });
