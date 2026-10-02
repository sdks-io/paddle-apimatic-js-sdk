import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Three-letter ISO 4217 currency code for chargeback fees. */
export const CurrencyCodeChargebacks = {
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
export type CurrencyCodeChargebacks =
  | (typeof CurrencyCodeChargebacks)[keyof typeof CurrencyCodeChargebacks]
  | (string & {});

export const currencyCodeChargebacksSchema: EnumSchema<CurrencyCodeChargebacks> =
  s.enumOf<CurrencyCodeChargebacks>(CurrencyCodeChargebacks);
