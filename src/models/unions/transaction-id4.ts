import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the transaction created as a result of the item being removed, prefixed with `txn_`.
 * `null` if no transaction was created.
 */
export type TransactionId4 = string;

export const transactionId4Schema: Schema<TransactionId4> = s.of<TransactionId4>(s.union([s.string()]));
