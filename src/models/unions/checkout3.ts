import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionCheckoutSchema, type TransactionCheckout } from "../transaction-checkout.js";

/**
 * Paddle Checkout details for this transaction. Returned for automatically-collected transactions
 * and where `billing_details.enable_checkout` is `true` for manually-collected transactions; `null`
 * otherwise.
 */
export type Checkout3 = TransactionCheckout;

export const checkout3Schema: Schema<Checkout3> = s.of<Checkout3>(
  s.union([s.lazy(() => transactionCheckoutSchema)]),
);
