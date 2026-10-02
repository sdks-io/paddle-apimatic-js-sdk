import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the transaction created as a result of the quantity change, prefixed with `txn_`.
 * `null` if no transaction was created.
 */
export type TransactionId3 = string;

export const transactionId3Schema: Schema<TransactionId3> = s.of<TransactionId3>(s.union([s.string()]));
