import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  transactionPricingPreviewResponseSchema,
  type TransactionPricingPreviewResponse,
} from "./transaction-pricing-preview-response.js";

export type PricingPreviewResponse = {
  data: TransactionPricingPreviewResponse;
  /** Information about this response. */
  meta: Meta;
};

export const pricingPreviewResponseSchema: Schema<PricingPreviewResponse> = s.object<PricingPreviewResponse>({
  data: transactionPricingPreviewResponseSchema,
  meta: metaSchema,
});
