import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const CheckoutsReportFilterName = {
  /**
   * "checkout_created_at": { "description": "Filter by checkout creation date. Pass an RFC 3339
   * datetime string. Combine two `checkout_created_at` filters with `gte` and `lt` operators to
   * scope reports to a specific date range." }
   */
  CheckoutCreatedAt: "checkout_created_at",
  /**
   * "customer_country_code": { "description": "Filter by customer country. Pass an array of strings
   * containing any valid two-letter ISO 3166-1 alpha-2 country code." }
   */
  CustomerCountryCode: "customer_country_code",
} as const;
export type CheckoutsReportFilterName =
  | (typeof CheckoutsReportFilterName)[keyof typeof CheckoutsReportFilterName]
  | (string & {});

export const checkoutsReportFilterNameSchema: EnumSchema<CheckoutsReportFilterName> =
  s.enumOf<CheckoutsReportFilterName>(CheckoutsReportFilterName);
