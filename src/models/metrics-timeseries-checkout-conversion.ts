import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricsIntervalSchema, type MetricsInterval } from "./metrics-interval.js";
import {
  metricsTimeseriesCheckoutConversionDatapointSchema,
  type MetricsTimeseriesCheckoutConversionDatapoint,
} from "./metrics-timeseries-checkout-conversion-datapoint.js";

/**
 * Checkout conversion metrics timeseries with count, completed count, and rate for each datapoint.
 */
export type MetricsTimeseriesCheckoutConversion = {
  /** Array of datapoints. Empty if `to` and `from` are the same. */
  timeseries: MetricsTimeseriesCheckoutConversionDatapoint[];
  /** RFC 3339 datetime string for when this timeseries starts (inclusive). */
  startsAt: Date;
  /** RFC 3339 datetime string for when this timeseries ends (exclusive). */
  endsAt: Date;
  /** Granularity for this timeseries. */
  interval: MetricsInterval;
  /** RFC 3339 datetime string of the last successful data refresh for this metric. */
  updatedAt: Date;
};

export const metricsTimeseriesCheckoutConversionSchema: Schema<MetricsTimeseriesCheckoutConversion> =
  s.object<MetricsTimeseriesCheckoutConversion>({
    timeseries: s.array(s.lazy(() => metricsTimeseriesCheckoutConversionDatapointSchema)),
    startsAt: s.dateTime(),
    endsAt: s.dateTime(),
    interval: metricsIntervalSchema,
    updatedAt: s.dateTime(),
    _keysMap: {
      startsAt: "starts_at",
      endsAt: "ends_at",
      updatedAt: "updated_at",
    },
  });
