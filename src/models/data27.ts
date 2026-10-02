import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodePayoutsSchema, type CurrencyCodePayouts } from "./currency-code-payouts.js";
import { status20Schema, type Status20 } from "./status20.js";

/** New or changed entity. */
export type Data27 = {
  /** The ID associated with this payout */
  id: string;
  /** The current status of a payout */
  status: Status20;
  /** The amount paid, or due to be paid to your bank account */
  amount: string;
  /** Supported three-letter ISO 4217 currency code for payouts from Paddle. */
  currencyCode: CurrencyCodePayouts;
  /** Reference number on the payout and remittance advice document */
  remittanceReference: string;
};

export const data27Schema: Schema<Data27> = s.object<Data27>({
  id: s.string(),
  status: status20Schema,
  amount: s.string(),
  currencyCode: currencyCodePayoutsSchema,
  remittanceReference: s.string(),
  _keysMap: {
    currencyCode: "currency_code",
    remittanceReference: "remittance_reference",
  },
});
