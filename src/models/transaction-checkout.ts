import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Paddle Checkout details for this transaction. Returned for automatically-collected transactions
 * and where `billing_details.enable_checkout` is `true` for manually-collected transactions; `null`
 * otherwise.
 */
export type TransactionCheckout = {
  /**
   * Paddle Checkout URL for this transaction, composed of the URL passed in the request or your
   * default payment URL + `?_ptxn=` and the Paddle ID for this transaction.
   */
  url: string | null;
};

export const transactionCheckoutSchema: Schema<TransactionCheckout> = s.object<TransactionCheckout>({
  url: s.nullable(s.string()),
});
