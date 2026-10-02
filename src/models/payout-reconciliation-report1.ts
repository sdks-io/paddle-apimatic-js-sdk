import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payoutReconciliationReportTypeSchema,
  type PayoutReconciliationReportType,
} from "./payout-reconciliation-report-type.js";
import {
  reconciliationFiltersCreateSchema,
  type ReconciliationFiltersCreate,
} from "./reconciliation-filters-create.js";

/** Entity when working with a reconciliation report. */
export type PayoutReconciliationReport1 = {
  /** Type of report to create. */
  type: PayoutReconciliationReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `transaction_updated_at` is greater than or equal to (`gte`) the
   * date 30 days ago from the time the report was generated.
   */
  filters?: ReconciliationFiltersCreate[];
};

export const payoutReconciliationReport1Schema: Schema<PayoutReconciliationReport1> =
  s.object<PayoutReconciliationReport1>({
    type: payoutReconciliationReportTypeSchema,
    filters: s.optional(s.array(s.lazy(() => reconciliationFiltersCreateSchema))),
  });
