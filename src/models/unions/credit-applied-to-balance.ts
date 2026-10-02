import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether this adjustment was applied to the related customer's credit balance. Only returned for
 * `credit` adjustments.
 */
export type CreditAppliedToBalance = boolean;

export const creditAppliedToBalanceSchema: Schema<CreditAppliedToBalance> = s.of<CreditAppliedToBalance>(
  s.union([s.boolean()]),
);
