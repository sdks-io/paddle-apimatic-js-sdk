import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";
import { prorationSchema, type Proration } from "./proration.js";

export type TransactionItem = {
  price: Price;
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration?: Proration | null;
};

export const transactionItemSchema: Schema<TransactionItem> = s.object<TransactionItem>({
  price: priceSchema,
  quantity: s.int(),
  proration: s.optionalNullable(s.lazy(() => prorationSchema)),
});
