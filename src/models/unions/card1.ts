import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchema, type Card } from "../card.js";

/** Information about the credit or debit card used to pay. `null` unless `type` is `card`. */
export type Card1 = Card;

export const card1Schema: Schema<Card1> = s.of<Card1>(s.union([s.lazy(() => cardSchema)]));
