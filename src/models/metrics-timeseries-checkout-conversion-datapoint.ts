import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single datapoint in a checkout conversion metrics timeseries. */
export type MetricsTimeseriesCheckoutConversionDatapoint = {
  /** RFC 3339 datetime string for this datapoint. */
  timestamp: Date;
  /** Total number of checkouts in this period. */
  count: number;
  /** Number of checkouts completed in this period. */
  completedCount: number;
  /** Conversion rate for this period. Calculated by dividing `completed_count` by `count`. */
  rate: string;
};

export const metricsTimeseriesCheckoutConversionDatapointSchema: Schema<MetricsTimeseriesCheckoutConversionDatapoint> =
  s.object<MetricsTimeseriesCheckoutConversionDatapoint>({
    timestamp: s.dateTime(),
    count: s.int(),
    completedCount: s.int(),
    rate: s.string(),
    _keysMap: {
      completedCount: "completed_count",
    },
  });
