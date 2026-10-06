import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentPreviewSchema, type AdjustmentPreview } from "./adjustment-preview.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";
import {
  transactionDetailsPreviewSchema,
  type TransactionDetailsPreview,
} from "./transaction-details-preview.js";

/**
 * Preview of the next transaction for this subscription. May include prorated charges that aren't
 * yet billed and one-time charges. `null` if the subscription is scheduled to cancel or pause.
 */
export type NextTransaction = {
  /** Billing period for the next transaction. */
  billingPeriod: TimePeriod;
  /**
   * Calculated totals for a transaction preview, including discounts, tax, and currency conversion.
   * Considered the source of truth for totals on a transaction preview.
   */
  details: TransactionDetailsPreview;
  /** Preview of adjustments for the next transaction. */
  adjustments?: AdjustmentPreview[];
};

export const nextTransactionSchema: Schema<NextTransaction> = s.object<NextTransaction>({
  billingPeriod: timePeriodSchema,
  details: transactionDetailsPreviewSchema,
  adjustments: s.optional(s.array(s.lazy(() => adjustmentPreviewSchema))),
  _keysMap: {
    billingPeriod: "billing_period",
  },
});
