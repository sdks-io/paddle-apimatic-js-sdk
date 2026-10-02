import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name to filter by. */
export const TransactionsReportFilterName = {
  /**
   * "collection_mode": { "description": "Filter by collection mode. Pass an array of strings
   * containing any valid value for the `collection_mode` field against a transaction." }
   */
  CollectionMode: "collection_mode",
  /**
   * "currency_code": { "description": "Filter by transaction or adjustment currency. Pass an array
   * of strings containing any valid supported three-letter ISO 4217 currency code." }
   */
  CurrencyCode: "currency_code",
  /**
   * "origin": { "description": "Filter by transaction origin. Pass an array of strings containing
   * any valid value for the origin field against a transaction." }
   */
  Origin: "origin",
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
export type TransactionsReportFilterName =
  | (typeof TransactionsReportFilterName)[keyof typeof TransactionsReportFilterName]
  | (string & {});

export const transactionsReportFilterNameSchema: EnumSchema<TransactionsReportFilterName> =
  s.enumOf<TransactionsReportFilterName>(TransactionsReportFilterName);
