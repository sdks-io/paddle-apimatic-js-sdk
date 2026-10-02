import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of a transaction. Bases the subscription on the transaction. */
export type TransactionId = string;

export const transactionIdSchema: Schema<TransactionId> = s.of<TransactionId>(s.union([s.string()]));
