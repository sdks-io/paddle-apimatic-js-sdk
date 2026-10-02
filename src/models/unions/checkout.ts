import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionCheckoutSchema, type TransactionCheckout } from "../transaction-checkout.js";

export type Checkout = TransactionCheckout;

export const checkoutSchema: Schema<Checkout> = s.of<Checkout>(
  s.union([s.lazy(() => transactionCheckoutSchema)]),
);
