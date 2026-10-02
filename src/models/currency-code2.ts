import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Three-letter ISO 4217 currency code used for this adjustment. */
export const CurrencyCode2 = {
  /** "USD": { "description": "United States Dollar" } */
  Usd: "USD",
  /** "EUR": { "description": "Euro" } */
  Eur: "EUR",
  /** "GBP": { "description": "Pound Sterling" } */
  Gbp: "GBP",
  /** "JPY": { "description": "Japanese Yen" } */
  Jpy: "JPY",
  /** "AUD": { "description": "Australian Dollar" } */
  Aud: "AUD",
  /** "CAD": { "description": "Canadian Dollar" } */
  Cad: "CAD",
  /** "CHF": { "description": "Swiss Franc" } */
  Chf: "CHF",
  /** "HKD": { "description": "Hong Kong Dollar" } */
  Hkd: "HKD",
  /** "SGD": { "description": "Singapore Dollar" } */
  Sgd: "SGD",
  /** "SEK": { "description": "Swedish Krona" } */
  Sek: "SEK",
  /** "ARS": { "description": "Argentine Peso" } */
  Ars: "ARS",
  /** "BRL": { "description": "Brazilian Real" } */
  Brl: "BRL",
  /** "CLP": { "description": "Chilean Peso" } */
  Clp: "CLP",
  /** "CNY": { "description": "Chinese Yuan" } */
  Cny: "CNY",
  /** "COP": { "description": "Colombian Peso" } */
  Cop: "COP",
  /** "CZK": { "description": "Czech Koruna" } */
  Czk: "CZK",
  /** "DKK": { "description": "Danish Krone" } */
  Dkk: "DKK",
  /** "HUF": { "description": "Hungarian Forint" } */
  Huf: "HUF",
  /** "ILS": { "description": "Israeli Shekel" } */
  Ils: "ILS",
  /** "INR": { "description": "Indian Rupee" } */
  Inr: "INR",
  /** "KRW": { "description": "South Korean Won" } */
  Krw: "KRW",
  /** "MXN": { "description": "Mexican Peso" } */
  Mxn: "MXN",
  /** "NOK": { "description": "Norwegian Krone" } */
  Nok: "NOK",
  /** "NZD": { "description": "New Zealand Dollar" } */
  Nzd: "NZD",
  /** "PEN": { "description": "Peruvian Sol" } */
  Pen: "PEN",
  /** "PLN": { "description": "Polish Zloty" } */
  Pln: "PLN",
  /** "RUB": { "description": "Russian Ruble" } */
  Rub: "RUB",
  /** "THB": { "description": "Thai Baht" } */
  Thb: "THB",
  /** "TRY": { "description": "Turkish Lira" } */
  Try: "TRY",
  /** "TWD": { "description": "New Taiwan Dollar" } */
  Twd: "TWD",
  /** "UAH": { "description": "Ukrainian Hryvnia" } */
  Uah: "UAH",
  /** "VND": { "description": "Vietnamese Dong" } */
  Vnd: "VND",
  /** "ZAR": { "description": "South African Rand" } */
  Zar: "ZAR",
} as const;
export type CurrencyCode2 = (typeof CurrencyCode2)[keyof typeof CurrencyCode2] | (string & {});

export const currencyCode2Schema: EnumSchema<CurrencyCode2> = s.enumOf<CurrencyCode2>(CurrencyCode2);
