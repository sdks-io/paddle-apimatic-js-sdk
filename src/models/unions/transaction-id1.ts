import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the transaction created as a result of the billing date change, prefixed with
 * `txn_`. `null` if no transaction was created.
 */
export type TransactionId1 = string;

export const transactionId1Schema: Schema<TransactionId1> = s.of<TransactionId1>(s.union([s.string()]));
