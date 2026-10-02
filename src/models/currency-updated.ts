import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Details specific to `subscription_currency_updated` actions. */
export type CurrencyUpdated = {
  /** What happened on the subscription. @default "subscription_currency_updated" */
  action?: "subscription_currency_updated";
  /**
   * Updated three-letter ISO 4217 currency code for the currency on this subscription. This is what
   * the currency was changed to.
   */
  currencyCode: CurrencyCode;
};

export const currencyUpdatedSchema: Schema<CurrencyUpdated> = s.object<CurrencyUpdated>({
  action: s.defaulted(s.literal("subscription_currency_updated"), "subscription_currency_updated"),
  currencyCode: currencyCodeSchema,
  _keysMap: {
    currencyCode: "currency_code",
  },
});
