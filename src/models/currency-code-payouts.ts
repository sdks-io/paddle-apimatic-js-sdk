import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported three-letter ISO 4217 currency code for payouts from Paddle. */
export const CurrencyCodePayouts = {
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
export type CurrencyCodePayouts =
  | (typeof CurrencyCodePayouts)[keyof typeof CurrencyCodePayouts]
  | (string & {});

export const currencyCodePayoutsSchema: EnumSchema<CurrencyCodePayouts> =
  s.enumOf<CurrencyCodePayouts>(CurrencyCodePayouts);
