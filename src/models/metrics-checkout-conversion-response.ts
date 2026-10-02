import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  metricsTimeseriesCheckoutConversionSchema,
  type MetricsTimeseriesCheckoutConversion,
} from "./metrics-timeseries-checkout-conversion.js";

export type MetricsCheckoutConversionResponse = {
  /**
   * Checkout conversion metrics timeseries with count, completed count, and rate for each
   * datapoint.
   */
  data: MetricsTimeseriesCheckoutConversion;
  /** Information about this response. */
  meta: Meta;
};

export const metricsCheckoutConversionResponseSchema: Schema<MetricsCheckoutConversionResponse> =
  s.object<MetricsCheckoutConversionResponse>({
    data: metricsTimeseriesCheckoutConversionSchema,
    meta: metaSchema,
  });
