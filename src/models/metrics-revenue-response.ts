import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesRevenueSchema,
  type MetricsTimeseriesRevenue,
} from "./metrics-timeseries-revenue.js";

export type MetricsRevenueResponse = {
  /** Revenue metrics timeseries with amount and transaction count for each datapoint. */
  data: MetricsTimeseriesRevenue;
  /** Information about this response. */
  meta: Meta;
};

export const metricsRevenueResponseSchema: Schema<MetricsRevenueResponse> = s.object<MetricsRevenueResponse>({
  data: metricsTimeseriesRevenueSchema,
  meta: metaSchema,
});
