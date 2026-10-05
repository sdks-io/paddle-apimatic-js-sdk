import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single datapoint in an active subscribers metrics timeseries. */
export type MetricsTimeseriesActiveSubscribersDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Number of active subscribers for this datapoint. */
  count: number;
};

export const metricsTimeseriesActiveSubscribersDatapointSchema: Schema<MetricsTimeseriesActiveSubscribersDatapoint> =
  s.object<MetricsTimeseriesActiveSubscribersDatapoint>({
    timestamp: s.dateTime(),
    count: s.int(),
  });
