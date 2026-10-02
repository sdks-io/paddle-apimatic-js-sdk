import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the transaction created for the one-off charge, prefixed with `txn_`. `null` if no
 * transaction was created.
 */
export type TransactionId5 = string;

export const transactionId5Schema: Schema<TransactionId5> = s.of<TransactionId5>(s.union([s.string()]));
