import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the transaction created as a result of the item being added, prefixed with `txn_`.
 * `null` if no transaction was created.
 */
export type TransactionId2 = string;

export const transactionId2Schema: Schema<TransactionId2> = s.of<TransactionId2>(s.union([s.string()]));
