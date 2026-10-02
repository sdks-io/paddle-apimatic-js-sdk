import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentActionSchema, type AdjustmentAction } from "./adjustment-action.js";
import { adjustmentStatusSchema, type AdjustmentStatus } from "./adjustment-status.js";
import { adjustmentTaxRateUsedSchema, type AdjustmentTaxRateUsed } from "./adjustment-tax-rate-used.js";
import { adjustmentTotalsSchema, type AdjustmentTotals } from "./adjustment-totals.js";
import { AdjustmentType, adjustmentTypeSchema } from "./adjustment-type.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { itemSchema, type Item } from "./item.js";
import {
  creditAppliedToBalanceSchema,
  type CreditAppliedToBalance,
} from "./unions/credit-applied-to-balance.js";
import { payoutTotalsSchema, type PayoutTotals } from "./unions/payout-totals.js";
import { subscriptionIdSchema, type SubscriptionId } from "./unions/subscription-id.js";

/** Represents an adjustment entity. */
export type Adjustment = {
  id: string;
  /** How this adjustment impacts the related transaction. */
  action: AdjustmentAction;
  /** @default AdjustmentType.Partial */
  type?: AdjustmentType;
  /** Paddle ID of the transaction that this adjustment is for, prefixed with `txn_`. */
  transactionId: string;
  /**
   * Paddle ID for the subscription related to this adjustment, prefixed with `sub_`. Set
   * automatically by Paddle based on the `subscription_id` of the related transaction.
   */
  subscriptionId: SubscriptionId;
  /**
   * Paddle ID for the customer related to this adjustment, prefixed with `ctm_`. Set automatically
   * by Paddle based on the `customer_id` of the related transaction.
   */
  customerId: string;
  /**
   * Why this adjustment was created. Appears in the Paddle dashboard. Retained for record-keeping
   * purposes.
   */
  reason: string;
  /**
   * Whether this adjustment was applied to the related customer's credit balance. Only returned for
   * `credit` adjustments.
   */
  creditAppliedToBalance?: CreditAppliedToBalance;
  /**
   * Three-letter ISO 4217 currency code for this adjustment. Set automatically by Paddle based on
   * the `currency_code` of the related transaction.
   */
  currencyCode: CurrencyCode;
  status: AdjustmentStatus;
  /** List of items on this adjustment. Required if `type` is not populated or set to `partial`. */
  items: Item[];
  totals: AdjustmentTotals;
  /** Breakdown of how this adjustment affects your payout balance. */
  payoutTotals: PayoutTotals;
  taxRatesUsed: AdjustmentTaxRateUsed[];
  createdAt: Date;
  updatedAt: Date;
};

export const adjustmentSchema: Schema<Adjustment> = s.object<Adjustment>({
  id: s.string(),
  action: adjustmentActionSchema,
  type: s.defaulted(adjustmentTypeSchema, AdjustmentType.Partial),
  transactionId: s.string(),
  subscriptionId: subscriptionIdSchema,
  customerId: s.string(),
  reason: s.string(),
  creditAppliedToBalance: s.optional(s.lazy(() => creditAppliedToBalanceSchema)),
  currencyCode: currencyCodeSchema,
  status: adjustmentStatusSchema,
  items: s.array(s.lazy(() => itemSchema)),
  totals: adjustmentTotalsSchema,
  payoutTotals: payoutTotalsSchema,
  taxRatesUsed: s.array(s.lazy(() => adjustmentTaxRateUsedSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    transactionId: "transaction_id",
    subscriptionId: "subscription_id",
    customerId: "customer_id",
    creditAppliedToBalance: "credit_applied_to_balance",
    currencyCode: "currency_code",
    payoutTotals: "payout_totals",
    taxRatesUsed: "tax_rates_used",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
