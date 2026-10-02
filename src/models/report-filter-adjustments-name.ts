import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportFilterAdjustmentsName = {
  /**
   * "action": { "description": "Filter by adjustment action. Pass an array of strings containing
   * any valid value for the `action` field against an adjustment." }
   */
  Action: "action",
  /**
   * "currency_code": { "description": "Filter by transaction or adjustment currency. Pass an array
   * of strings containing any valid supported three-letter ISO 4217 currency code." }
   */
  CurrencyCode: "currency_code",
  /**
   * "status": { "description": "Filter by transaction or adjustment status. Pass an array of
   * strings containing any valid value for the `status` field against a transaction or an
   * adjustment." }
   */
  Status: "status",
  /**
   * "updated_at": { "description": "Filter by transaction or adjustment updated date. Pass an RFC
   * 3339 datetime string." }
   */
  UpdatedAt: "updated_at",
} as const;
export type ReportFilterAdjustmentsName =
  | (typeof ReportFilterAdjustmentsName)[keyof typeof ReportFilterAdjustmentsName]
  | (string & {});

export const reportFilterAdjustmentsNameSchema: EnumSchema<ReportFilterAdjustmentsName> =
  s.enumOf<ReportFilterAdjustmentsName>(ReportFilterAdjustmentsName);
