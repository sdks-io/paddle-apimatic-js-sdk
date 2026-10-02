import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const DiscountsReportFilterName = {
  /**
   * "type": { "description": "Filter by discount type. Pass an array of strings containing any
   * valid value for the `type` field against a discount." }
   */
  Type: "type",
  /**
   * "status": { "description": "Filter by discount status. Pass an array of strings containing any
   * valid value for the `status` field against a discount." }
   */
  Status: "status",
  /**
   * "updated_at": { "description": "Filter by discount updated date. Pass an RFC 3339 datetime
   * string." }
   */
  UpdatedAt: "updated_at",
} as const;
export type DiscountsReportFilterName =
  | (typeof DiscountsReportFilterName)[keyof typeof DiscountsReportFilterName]
  | (string & {});

export const discountsReportFilterNameSchema: EnumSchema<DiscountsReportFilterName> =
  s.enumOf<DiscountsReportFilterName>(DiscountsReportFilterName);
