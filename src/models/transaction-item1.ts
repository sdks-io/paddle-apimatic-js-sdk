import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price10Schema, type Price10 } from "./price10.js";
import { proration1Schema, type Proration1 } from "./proration1.js";

export type TransactionItem1 = {
  /** Represents a price entity. */
  price: Price10;
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * How proration was calculated for this item. Populated when a transaction is created from a
   * subscription change, where `proration_billing_mode` was `prorated_immediately` or
   * `prorated_next_billing_period`. Set automatically by Paddle.
   */
  proration?: Proration1 | null;
};

export const transactionItem1Schema: Schema<TransactionItem1> = s.object<TransactionItem1>({
  price: price10Schema,
  quantity: s.int(),
  proration: s.optionalNullable(s.lazy(() => proration1Schema)),
});
