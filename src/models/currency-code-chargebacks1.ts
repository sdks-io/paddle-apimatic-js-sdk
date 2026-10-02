import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Three-letter ISO 4217 currency code for the original chargeback fee. */
export const CurrencyCodeChargebacks1 = {
  /** "AUD": { "description": "Australian Dollar" } */
  Aud: "AUD",
  /** "CAD": { "description": "Canadian Dollar" } */
  Cad: "CAD",
  /** "EUR": { "description": "Euro" } */
  Eur: "EUR",
  /** "GBP": { "description": "Pound Sterling" } */
  Gbp: "GBP",
  /** "USD": { "description": "United States Dollar" } */
  Usd: "USD",
} as const;
export type CurrencyCodeChargebacks1 =
  | (typeof CurrencyCodeChargebacks1)[keyof typeof CurrencyCodeChargebacks1]
  | (string & {});

export const currencyCodeChargebacks1Schema: EnumSchema<CurrencyCodeChargebacks1> =
  s.enumOf<CurrencyCodeChargebacks1>(CurrencyCodeChargebacks1);
