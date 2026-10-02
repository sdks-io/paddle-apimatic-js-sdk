import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When the Transaction collection mode is manual and the status is billed, this field is false. If
 * it is true, it indicates that credits have been applied to the customer's balance. Otherwise, the
 * adjustment is used to decrease the total amount of a billed invoice Transaction.
 */
export type CreditAppliedToBalance1 = boolean;

export const creditAppliedToBalance1Schema: Schema<CreditAppliedToBalance1> = s.of<CreditAppliedToBalance1>(
  s.union([s.boolean()]),
);
