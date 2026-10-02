import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricePreviewLineItemSchema, type PricePreviewLineItem } from "./price-preview-line-item.js";

/** Calculated totals for a price preview, including discounts, tax, and currency conversion. */
export type PricePreviewDetails = {
  lineItems: PricePreviewLineItem[];
};

export const pricePreviewDetailsSchema: Schema<PricePreviewDetails> = s.object<PricePreviewDetails>({
  lineItems: s.array(s.lazy(() => pricePreviewLineItemSchema)),
  _keysMap: {
    lineItems: "line_items",
  },
});
