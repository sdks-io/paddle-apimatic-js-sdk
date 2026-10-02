import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesChargebacksSchema,
  type MetricsTimeseriesChargebacks,
} from "./metrics-timeseries-chargebacks.js";

export type MetricsChargebacksResponse = {
  /** Chargeback metrics timeseries with count for each datapoint. */
  data: MetricsTimeseriesChargebacks;
  /** Information about this response. */
  meta: Meta;
};

export const metricsChargebacksResponseSchema: Schema<MetricsChargebacksResponse> =
  s.object<MetricsChargebacksResponse>({
    data: metricsTimeseriesChargebacksSchema,
    meta: metaSchema,
  });
