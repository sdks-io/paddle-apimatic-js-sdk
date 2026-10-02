import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { southKoreaLocalCardSchema, type SouthKoreaLocalCard } from "../south-korea-local-card.js";

/**
 * Information about the Korean payment method used to pay. `null` unless `type` is
 * `south_korea_local_card`.
 */
export type SouthKoreaLocalCard11 = SouthKoreaLocalCard;

export const southKoreaLocalCard11Schema: Schema<SouthKoreaLocalCard11> = s.of<SouthKoreaLocalCard11>(
  s.union([s.lazy(() => southKoreaLocalCardSchema)]),
);
