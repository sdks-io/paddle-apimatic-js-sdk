import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { metricsIntervalSchema, type MetricsInterval } from "./metrics-interval.js";
import {
  metricsTimeseriesRevenueDatapointSchema,
  type MetricsTimeseriesRevenueDatapoint,
} from "./metrics-timeseries-revenue-datapoint.js";

/** Revenue metrics timeseries with amount and transaction count for each datapoint. */
export type MetricsTimeseriesRevenue = {
  /**
   * Supported three-letter ISO 4217 currency code for this metric. Returned in your primary balance
   * currency, converted using the current exchange rate.
   */
  currencyCode: CurrencyCode;
  /** Array of datapoints. Empty if `to` and `from` are the same. */
  timeseries: MetricsTimeseriesRevenueDatapoint[];
  /** RFC 3339 datetime string for when this timeseries starts (inclusive). */
  startsAt: Date;
  /** RFC 3339 datetime string for when this timeseries ends (exclusive). */
  endsAt: Date;
  /** Granularity for this timeseries. */
  interval: MetricsInterval;
  /** RFC 3339 datetime string of the last successful data refresh for this metric. */
  updatedAt: Date;
};

export const metricsTimeseriesRevenueSchema: Schema<MetricsTimeseriesRevenue> =
  s.object<MetricsTimeseriesRevenue>({
    currencyCode: currencyCodeSchema,
    timeseries: s.array(s.lazy(() => metricsTimeseriesRevenueDatapointSchema)),
    startsAt: s.dateTime(),
    endsAt: s.dateTime(),
    interval: metricsIntervalSchema,
    updatedAt: s.dateTime(),
    _keysMap: {
      currencyCode: "currency_code",
      startsAt: "starts_at",
      endsAt: "ends_at",
      updatedAt: "updated_at",
    },
  });
