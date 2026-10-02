import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesRefundsSchema,
  type MetricsTimeseriesRefunds,
} from "./metrics-timeseries-refunds.js";

export type MetricsRefundsResponse = {
  /** Refund metrics timeseries with amount for each datapoint. */
  data: MetricsTimeseriesRefunds;
  /** Information about this response. */
  meta: Meta;
};

export const metricsRefundsResponseSchema: Schema<MetricsRefundsResponse> = s.object<MetricsRefundsResponse>({
  data: metricsTimeseriesRefundsSchema,
  meta: metaSchema,
});
