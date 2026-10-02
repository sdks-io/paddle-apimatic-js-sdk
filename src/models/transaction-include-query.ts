import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionIncludeQuery = {
  /**
   * "address": { "description": "Include an object for the address entity related to this
   * transaction. Only included where an `address_id` is set against the transaction." }
   */
  Address: "address",
  /**
   * "adjustments": { "description": "Include an array of adjustments related to this transaction.
   * Only included where a transaction has adjustments." }
   */
  Adjustments: "adjustments",
  /**
   * "adjustments_totals": { "description": "Include an object that includes totals for all
   * adjustments against this transaction." }
   */
  AdjustmentsTotals: "adjustments_totals",
  /**
   * "available_payment_methods": { "description": "Include an array of available payment methods
   * for this transaction." }
   */
  AvailablePaymentMethods: "available_payment_methods",
  /**
   * "business": { "description": "Include an object for the business entity related to this
   * transaction. Only included where a `business_id` is set against the transaction." }
   */
  Business: "business",
  /**
   * "customer": { "description": "Include an object for the customer entity related to this
   * transaction. Only included where a `customer_id` is set against the transaction." }
   */
  Customer: "customer",
  /**
   * "discount": { "description": "Include an object for the discount entity related to this
   * transaction. Only included where a `discount_id` is set against the transaction." }
   */
  Discount: "discount",
} as const;
export type TransactionIncludeQuery =
  | (typeof TransactionIncludeQuery)[keyof typeof TransactionIncludeQuery]
  | (string & {});

export const transactionIncludeQuerySchema: EnumSchema<TransactionIncludeQuery> =
  s.enumOf<TransactionIncludeQuery>(TransactionIncludeQuery);
