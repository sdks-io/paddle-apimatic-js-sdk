import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { metricsIntervalSchema, type MetricsInterval } from "./metrics-interval.js";
import {
  metricsTimeseriesRefundsDatapointSchema,
  type MetricsTimeseriesRefundsDatapoint,
} from "./metrics-timeseries-refunds-datapoint.js";

/** Refund metrics timeseries with amount for each datapoint. */
export type MetricsTimeseriesRefunds = {
  /**
   * Supported three-letter ISO 4217 currency code for this metric. Returned in your primary balance
   * currency, converted using the current exchange rate.
   */
  currencyCode: CurrencyCode;
  /** Array of datapoints. Empty if `to` and `from` are the same. */
  timeseries: MetricsTimeseriesRefundsDatapoint[];
  /** RFC 3339 datetime string for when this timeseries starts (inclusive). */
  startsAt: Date;
  /** RFC 3339 datetime string for when this timeseries ends (exclusive). */
  endsAt: Date;
  /** Granularity for this timeseries. */
  interval: MetricsInterval;
  /** RFC 3339 datetime string of the last successful data refresh for this metric. */
  updatedAt: Date;
};

export const metricsTimeseriesRefundsSchema: Schema<MetricsTimeseriesRefunds> =
  s.object<MetricsTimeseriesRefunds>({
    currencyCode: currencyCodeSchema,
    timeseries: s.array(s.lazy(() => metricsTimeseriesRefundsDatapointSchema)),
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
