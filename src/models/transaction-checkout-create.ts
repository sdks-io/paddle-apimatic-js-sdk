import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url1Schema, type Url1 } from "./unions/url1.js";

/**
 * Paddle Checkout details for this transaction. You may pass a URL when creating or updating an
 * automatically-collected transaction, or when creating or updating a manually-collected
 * transaction where `billing_details.enable_checkout` is `true`.
 */
export type TransactionCheckoutCreate = {
  /**
   * Checkout URL to use for the payment link for this transaction. Pass the URL for an approved
   * domain, or `null` to set to your default payment URL.
   *
   * Paddle returns a unique payment link composed of the URL passed or your default payment URL +
   * `?_ptxn=` and the Paddle ID for this transaction.
   */
  url?: Url1;
};

export const transactionCheckoutCreateSchema: Schema<TransactionCheckoutCreate> =
  s.object<TransactionCheckoutCreate>({
    url: s.optional(s.lazy(() => url1Schema)),
  });
