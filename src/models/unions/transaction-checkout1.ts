import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionCheckoutCreateSchema,
  type TransactionCheckoutCreate,
} from "../transaction-checkout-create.js";

/**
 * Paddle Checkout details for this transaction. You may pass a URL when creating or updating an
 * automatically-collected transaction, or when creating or updating a manually-collected
 * transaction where `billing_details.enable_checkout` is `true`.
 */
export type TransactionCheckout1 = TransactionCheckoutCreate;

export const transactionCheckout1Schema: Schema<TransactionCheckout1> = s.of<TransactionCheckout1>(
  s.union([s.lazy(() => transactionCheckoutCreateSchema)]),
);
