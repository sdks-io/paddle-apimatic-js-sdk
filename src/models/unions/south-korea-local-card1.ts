import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { southKoreaLocalCardSchema, type SouthKoreaLocalCard } from "../south-korea-local-card.js";

/**
 * Information about the Korean credit or debit card used to pay. `null` unless `type` is
 * `south_korea_local_card`.
 */
export type SouthKoreaLocalCard1 = SouthKoreaLocalCard;

export const southKoreaLocalCard1Schema: Schema<SouthKoreaLocalCard1> = s.of<SouthKoreaLocalCard1>(
  s.union([s.lazy(() => southKoreaLocalCardSchema)]),
);
