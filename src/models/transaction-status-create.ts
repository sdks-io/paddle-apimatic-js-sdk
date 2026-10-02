import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of this transaction. You may set a transaction to `billed` or `canceled`, other statuses
 * are set automatically by Paddle. Automatically-collected transactions may return `completed` if
 * payment is captured successfully, or `past_due` if payment failed.
 */
export const TransactionStatusCreate = {
  /**
   * "draft": { "description": "Transaction is missing required fields. Typically the first stage of
   * a checkout before customer details are captured.", "readOnly": true }
   */
  Draft: "draft",
  /**
   * "ready": { "description": "Transaction has all of the required fields to be marked as `billed`
   * or `completed`.", "readOnly": true }
   */
  Ready: "ready",
  /**
   * "billed": { "description": "Transaction has been updated to `billed`. Billed transactions get
   * an invoice number and are considered a legal record. They cannot be changed. Typically used as
   * part of an invoice workflow." }
   */
  Billed: "billed",
  /**
   * "paid": { "description": "Transaction is fully paid, but has not yet been processed
   * internally.", "readOnly": true }
   */
  Paid: "paid",
  /**
   * "completed": { "description": "Transaction is fully paid and processed.", "readOnly": true }
   */
  Completed: "completed",
  /**
   * "canceled": { "description": "Transaction has been updated to `canceled`. If an invoice, it's
   * no longer due." }
   */
  Canceled: "canceled",
  /**
   * "past_due": { "description": "Transaction is past due. Occurs for automatically-collected
   * transactions when the related subscription is in dunning, and for manually-collected
   * transactions when payment terms have elapsed.", "readOnly": true }
   */
  PastDue: "past_due",
} as const;
export type TransactionStatusCreate =
  | (typeof TransactionStatusCreate)[keyof typeof TransactionStatusCreate]
  | (string & {});

export const transactionStatusCreateSchema: EnumSchema<TransactionStatusCreate> =
  s.enumOf<TransactionStatusCreate>(TransactionStatusCreate);
