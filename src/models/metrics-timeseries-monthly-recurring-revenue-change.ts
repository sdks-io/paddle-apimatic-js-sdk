import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { metricsIntervalSchema, type MetricsInterval } from "./metrics-interval.js";
import {
  metricsTimeseriesMonthlyRecurringRevenueDatapointSchema,
  type MetricsTimeseriesMonthlyRecurringRevenueDatapoint,
} from "./metrics-timeseries-monthly-recurring-revenue-datapoint.js";

/** Monthly recurring revenue change metrics timeseries with amount for each datapoint. */
export type MetricsTimeseriesMonthlyRecurringRevenueChange = {
  /**
   * Supported three-letter ISO 4217 currency code for this metric. Returned in your primary balance
   * currency, converted using the exchange rate at the time of each transaction. If your primary
   * balance currency changes, amounts continue to be returned in the previous currency until the
   * next payout period begins.
   */
  currencyCode: CurrencyCode;
  /** Array of datapoints. Empty if `to` and `from` are the same. */
  timeseries: MetricsTimeseriesMonthlyRecurringRevenueDatapoint[];
  /** RFC 3339 datetime string for when this timeseries starts (inclusive). */
  startsAt: Date;
  /** RFC 3339 datetime string for when this timeseries ends (exclusive). */
  endsAt: Date;
  /** Granularity for this timeseries. */
  interval: MetricsInterval;
  /** RFC 3339 datetime string of the last successful data refresh for this metric. */
  updatedAt: Date;
};

export const metricsTimeseriesMonthlyRecurringRevenueChangeSchema: Schema<MetricsTimeseriesMonthlyRecurringRevenueChange> =
  s.object<MetricsTimeseriesMonthlyRecurringRevenueChange>({
    currencyCode: currencyCodeSchema,
    timeseries: s.array(s.lazy(() => metricsTimeseriesMonthlyRecurringRevenueDatapointSchema)),
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
