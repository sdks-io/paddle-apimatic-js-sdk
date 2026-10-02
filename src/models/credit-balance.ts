import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { customerBalanceSchema, type CustomerBalance } from "./customer-balance.js";

/** Represents a credit balance for a customer. */
export type CreditBalance = {
  /** Paddle ID of the customer that this credit balance is for, prefixed with `ctm_`. */
  customerId: string;
  /** Three-letter ISO 4217 currency code for this credit balance. */
  currencyCode: CurrencyCode;
  /**
   * Totals for this credit balance. Where a customer has more than one subscription in this
   * currency with a credit balance, includes totals for all subscriptions.
   */
  balance: CustomerBalance;
};

export const creditBalanceSchema: Schema<CreditBalance> = s.object<CreditBalance>({
  customerId: s.string(),
  currencyCode: currencyCodeSchema,
  balance: customerBalanceSchema,
  _keysMap: {
    customerId: "customer_id",
    currencyCode: "currency_code",
  },
});
