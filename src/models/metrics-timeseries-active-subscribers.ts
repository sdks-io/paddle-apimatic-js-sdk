import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricsIntervalSchema, type MetricsInterval } from "./metrics-interval.js";
import {
  metricsTimeseriesActiveSubscribersDatapointSchema,
  type MetricsTimeseriesActiveSubscribersDatapoint,
} from "./metrics-timeseries-active-subscribers-datapoint.js";

/** Active subscribers metrics timeseries with count for each datapoint. */
export type MetricsTimeseriesActiveSubscribers = {
  /** Array of datapoints. Empty if `to` and `from` are the same. */
  timeseries: MetricsTimeseriesActiveSubscribersDatapoint[];
  /** RFC 3339 datetime string for when this timeseries starts (inclusive). */
  startsAt: Date;
  /** RFC 3339 datetime string for when this timeseries ends (exclusive). */
  endsAt: Date;
  /** Granularity for this timeseries. */
  interval: MetricsInterval;
  /** RFC 3339 datetime string of the last successful data refresh for this metric. */
  updatedAt: Date;
};

export const metricsTimeseriesActiveSubscribersSchema: Schema<MetricsTimeseriesActiveSubscribers> =
  s.object<MetricsTimeseriesActiveSubscribers>({
    timeseries: s.array(s.lazy(() => metricsTimeseriesActiveSubscribersDatapointSchema)),
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
