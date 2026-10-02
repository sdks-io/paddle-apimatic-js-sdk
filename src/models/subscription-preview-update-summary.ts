import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { updateSummaryResultSchema, type UpdateSummaryResult } from "./update-summary-result.js";

/**
 * Impact of this subscription change. Includes whether the change results in a charge or credit,
 * and totals for prorated amounts.
 */
export type SubscriptionPreviewUpdateSummary = {
  /**
   * Details of any credit adjustments created for this update. Paddle creates adjustments against
   * existing transactions when prorating.
   */
  credit: Money;
  /**
   * Details of the transaction to be created for this update. Paddle creates a transaction to bill
   * for new charges.
   */
  charge: Money;
  /**
   * Details of the result of credits and charges. Where the total of any credit adjustments is
   * greater than the total charge, the result is a prorated credit; otherwise, the result is a
   * prorated charge.
   */
  result: UpdateSummaryResult;
};

export const subscriptionPreviewUpdateSummarySchema: Schema<SubscriptionPreviewUpdateSummary> =
  s.object<SubscriptionPreviewUpdateSummary>({
    credit: moneySchema,
    charge: moneySchema,
    result: updateSummaryResultSchema,
  });
