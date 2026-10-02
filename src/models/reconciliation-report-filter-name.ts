import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const ReconciliationReportFilterName = {
  /**
   * "remittance_reference": { "description": "Filter by remittance reference. Pass an array with
   * one string containing a remittance reference." }
   */
  RemittanceReference: "remittance_reference",
  /**
   * "transaction_updated_at": { "description": "Filter by transaction updated date. Pass an RFC
   * 3339 datetime string." }
   */
  TransactionUpdatedAt: "transaction_updated_at",
  /**
   * "balance_movement_date": { "description": "Filter by the date the balance movement occurred.
   * Pass an RFC 3339 datetime string." }
   */
  BalanceMovementDate: "balance_movement_date",
  /**
   * "balance_movement_type": { "description": "Filter by balance movement type. Pass one or more
   * values from the `BalanceMovementType` enum." }
   */
  BalanceMovementType: "balance_movement_type",
} as const;
export type ReconciliationReportFilterName =
  | (typeof ReconciliationReportFilterName)[keyof typeof ReconciliationReportFilterName]
  | (string & {});

export const reconciliationReportFilterNameSchema: EnumSchema<ReconciliationReportFilterName> =
  s.enumOf<ReconciliationReportFilterName>(ReconciliationReportFilterName);
