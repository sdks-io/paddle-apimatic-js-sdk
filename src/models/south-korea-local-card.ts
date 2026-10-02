import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  southKoreaLocalCardTypeSchema,
  type SouthKoreaLocalCardType,
} from "./south-korea-local-card-type.js";

/** Information about the Korean payment method used to pay. */
export type SouthKoreaLocalCard = {
  /** Type of Korean payment method used to pay. */
  type?: SouthKoreaLocalCardType;
  /** Last four digits of the card used to pay. */
  last4?: string;
};

export const southKoreaLocalCardSchema: Schema<SouthKoreaLocalCard> = s.object<SouthKoreaLocalCard>({
  type: s.optional(s.lazy(() => southKoreaLocalCardTypeSchema)),
  last4: s.optional(s.string()),
});
