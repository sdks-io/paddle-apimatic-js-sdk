import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionStatusQuery = {
  /**
   * "draft": { "description": "Return transactions where the status is `draft`. Returned
   * transactions are missing required fields." }
   */
  Draft: "draft",
  /**
   * "ready": { "description": "Return transactions where the status is `ready`. Returned
   * transactions have all of the required fields to be marked as `billed` or `completed`." }
   */
  Ready: "ready",
  /**
   * "billed": { "description": "Return transactions where the status is `billed`. Returned
   * transactions are considered legal records and cannot be changed." }
   */
  Billed: "billed",
  /**
   * "paid": { "description": "Return transactions where the status is `paid`. Returned transactions
   * are fully paid, but have not yet been fully processed internally." }
   */
  Paid: "paid",
  /**
   * "completed": { "description": "Return transactions where the status is `completed`. Returned
   * transactions are fully paid and processed." }
   */
  Completed: "completed",
  /**
   * "canceled": { "description": "Return transactions where the status is `canceled`. Returned
   * transactions have been canceled and are no longer due." }
   */
  Canceled: "canceled",
  /**
   * "past_due": { "description": "Return transactions where the status is `past_due`. Returned
   * transactions are past due, meaning payment failed for automatically-collected transactions or
   * payment terms elapsed for manually-collected transactions." }
   */
  PastDue: "past_due",
} as const;
export type TransactionStatusQuery =
  | (typeof TransactionStatusQuery)[keyof typeof TransactionStatusQuery]
  | (string & {});

export const transactionStatusQuerySchema: EnumSchema<TransactionStatusQuery> =
  s.enumOf<TransactionStatusQuery>(TransactionStatusQuery);
