import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of credit or debit card used to pay. */
export const CardType = {
  /** "american_express": { "description": "American Express" } */
  AmericanExpress: "american_express",
  /** "diners_club": { "description": "Diners Club" } */
  DinersClub: "diners_club",
  /** "discover": { "description": "Discover Card" } */
  Discover: "discover",
  /** "jcb": { "description": "JCB Card, popular in Japan" } */
  Jcb: "jcb",
  /** "mada": { "description": "Mada Card, popular in Saudi Arabia" } */
  Mada: "mada",
  /** "maestro": { "description": "Maestro (debit card)" } */
  Maestro: "maestro",
  /** "mastercard": { "description": "Mastercard" } */
  Mastercard: "mastercard",
  /** "union_pay": { "description": "UnionPay, popular in China" } */
  UnionPay: "union_pay",
  /** "unknown": { "description": "Card type unknown" } */
  Unknown: "unknown",
  /** "visa": { "description": "Visa" } */
  Visa: "visa",
} as const;
export type CardType = (typeof CardType)[keyof typeof CardType] | (string & {});

export const cardTypeSchema: EnumSchema<CardType> = s.enumOf<CardType>(CardType);
