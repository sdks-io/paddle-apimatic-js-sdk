import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const BalanceReportFilterName = {
  /**
   * "updated_at": { "description": "Filter by balance change updated date. Pass an RFC 3339
   * datetime string." }
   */
  UpdatedAt: "updated_at",
} as const;
export type BalanceReportFilterName =
  | (typeof BalanceReportFilterName)[keyof typeof BalanceReportFilterName]
  | (string & {});

export const balanceReportFilterNameSchema: EnumSchema<BalanceReportFilterName> =
  s.enumOf<BalanceReportFilterName>(BalanceReportFilterName);
