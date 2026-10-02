import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesActiveSubscribersSchema,
  type MetricsTimeseriesActiveSubscribers,
} from "./metrics-timeseries-active-subscribers.js";

export type MetricsActiveSubscribersResponse = {
  /** Active subscribers metrics timeseries with count for each datapoint. */
  data: MetricsTimeseriesActiveSubscribers;
  /** Information about this response. */
  meta: Meta;
};

export const metricsActiveSubscribersResponseSchema: Schema<MetricsActiveSubscribersResponse> =
  s.object<MetricsActiveSubscribersResponse>({
    data: metricsTimeseriesActiveSubscribersSchema,
    meta: metaSchema,
  });
