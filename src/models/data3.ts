import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentAction1Schema, type AdjustmentAction1 } from "./adjustment-action1.js";
import { adjustmentTotals2Schema, type AdjustmentTotals2 } from "./adjustment-totals2.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { item1Schema, type Item1 } from "./item1.js";
import { status7Schema, type Status7 } from "./status7.js";
import {
  creditAppliedToBalance1Schema,
  type CreditAppliedToBalance1,
} from "./unions/credit-applied-to-balance1.js";
import { payoutTotals2Schema, type PayoutTotals2 } from "./unions/payout-totals2.js";
import { subscriptionId14Schema, type SubscriptionId14 } from "./unions/subscription-id14.js";
import { taxRatesUsed1Schema, type TaxRatesUsed1 } from "./unions/tax-rates-used1.js";
import { typeSchema, type Type } from "./unions/type.js";

/** New or changed entity. */
export type Data3 = {
  /** Reference for the adjustment */
  id: string;
  /**
   * This parameter indicates the type of adjustment that will be created. Partial and full refunds
   * can be requested, but needs approval from Paddle. Tax refunds, chargeback and
   * chargeback_warning are reserved for Paddle internal users.
   */
  action: AdjustmentAction1;
  /**
   * Type of adjustment. Use `full` to adjust the grand total for the related transaction. Include
   * an `items` array when creating a `partial` adjustment. If omitted, defaults to `partial`.
   */
  type: Type;
  /** ID of the Transaction that this adjustment belongs to */
  transactionId: string;
  /** ID of the Subscription that this adjustment belongs to */
  subscriptionId: SubscriptionId14;
  /** ID of the Customer that this Transaction is for */
  customerId: string;
  /** Some context on why the adjustment is being performed */
  reason: string;
  /**
   * When the Transaction collection mode is manual and the status is billed, this field is false.
   * If it is true, it indicates that credits have been applied to the customer's balance.
   * Otherwise, the adjustment is used to decrease the total amount of a billed invoice Transaction.
   */
  creditAppliedToBalance: CreditAppliedToBalance1;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode: CurrencyCode;
  /**
   * Status for an adjustment. Pending approval is read-only and cannot be set. Approved and
   * Rejected are both final states for an adjustment.
   */
  status: Status7;
  items: Item1[];
  /** Breakdown of the total for an adjustment. */
  totals: AdjustmentTotals2;
  payoutTotals: PayoutTotals2;
  taxRatesUsed: TaxRatesUsed1;
  /**
   * Timestamp following the RFC 3339 standard. This is set by the system, and cannot be changed via
   * the API.
   */
  createdAt: Date;
  /**
   * Timestamp following the RFC 3339 standard. This is set by the system, and cannot be changed via
   * the API.
   */
  updatedAt: Date;
};

export const data3Schema: Schema<Data3> = s.object<Data3>({
  id: s.string(),
  action: adjustmentAction1Schema,
  type: typeSchema,
  transactionId: s.string(),
  subscriptionId: subscriptionId14Schema,
  customerId: s.string(),
  reason: s.string(),
  creditAppliedToBalance: creditAppliedToBalance1Schema,
  currencyCode: currencyCodeSchema,
  status: status7Schema,
  items: s.array(s.lazy(() => item1Schema)),
  totals: adjustmentTotals2Schema,
  payoutTotals: payoutTotals2Schema,
  taxRatesUsed: taxRatesUsed1Schema,
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
