import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchema, type Card } from "../card.js";

/** Information about the credit or debit card saved. `null` unless `type` is `card`. */
export type Card11 = Card;

export const card11Schema: Schema<Card11> = s.of<Card11>(s.union([s.lazy(() => cardSchema)]));
