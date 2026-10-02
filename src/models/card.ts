import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardTypeSchema, type CardType } from "./card-type.js";

/** Card metadata */
export type Card = {
  /** Type of credit or debit card used to pay. */
  type: CardType;
  /** Last four digits of the card used to pay. */
  last4: string;
  /** Month of the expiry date of the card used to pay. */
  expiryMonth: number;
  /** Year of the expiry date of the card used to pay. */
  expiryYear: number;
  /** The name on the card used to pay. */
  cardholderName: string;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  type: cardTypeSchema,
  last4: s.string(),
  expiryMonth: s.number(),
  expiryYear: s.number(),
  cardholderName: s.string(),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    cardholderName: "cardholder_name",
  },
});
