import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  updateSummaryResultActionSchema,
  type UpdateSummaryResultAction,
} from "./update-summary-result-action.js";

/**
 * Details of the result of credits and charges. Where the total of any credit adjustments is
 * greater than the total charge, the result is a prorated credit; otherwise, the result is a
 * prorated charge.
 */
export type UpdateSummaryResult = {
  /** Whether the subscription change results in a prorated credit or a charge. */
  action: UpdateSummaryResultAction;
  /** Amount representing the result of this update, either a charge or a credit. */
  amount: string;
  /** Three-letter ISO 4217 currency code for the transaction or adjustment. */
  currencyCode: CurrencyCode;
};

export const updateSummaryResultSchema: Schema<UpdateSummaryResult> = s.object<UpdateSummaryResult>({
  action: updateSummaryResultActionSchema,
  amount: s.string(),
  currencyCode: currencyCodeSchema,
  _keysMap: {
    currencyCode: "currency_code",
  },
});
