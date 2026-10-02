import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Three-letter ISO 4217 currency code used for the payout for this transaction. If your primary
 * currency has changed, this reflects the primary currency at the time the transaction was billed.
 */
export const CurrencyCodePayouts1 = {
  /** "AUD": { "description": "Australian Dollar" } */
  Aud: "AUD",
  /** "CAD": { "description": "Canadian Dollar" } */
  Cad: "CAD",
  /** "CHF": { "description": "Swiss Franc" } */
  Chf: "CHF",
  /** "CNY": { "description": "Chinese Yuan" } */
  Cny: "CNY",
  /** "CZK": { "description": "Czech Koruna" } */
  Czk: "CZK",
  /** "DKK": { "description": "Danish Krone" } */
  Dkk: "DKK",
  /** "EUR": { "description": "Euro" } */
  Eur: "EUR",
  /** "GBP": { "description": "Pound Sterling" } */
  Gbp: "GBP",
  /** "HUF": { "description": "Hungarian Forint" } */
  Huf: "HUF",
  /** "PLN": { "description": "Polish Zloty" } */
  Pln: "PLN",
  /** "SEK": { "description": "Swedish Krona" } */
  Sek: "SEK",
  /** "USD": { "description": "United States Dollar" } */
  Usd: "USD",
  /** "ZAR": { "description": "South African Rand" } */
  Zar: "ZAR",
} as const;
export type CurrencyCodePayouts1 =
  | (typeof CurrencyCodePayouts1)[keyof typeof CurrencyCodePayouts1]
  | (string & {});

export const currencyCodePayouts1Schema: EnumSchema<CurrencyCodePayouts1> =
  s.enumOf<CurrencyCodePayouts1>(CurrencyCodePayouts1);
