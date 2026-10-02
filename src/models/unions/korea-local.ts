import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  koreanMarketUnderlyingDetailsSchema,
  type KoreanMarketUnderlyingDetails,
} from "../korean-market-underlying-details.js";

export type KoreaLocal = KoreanMarketUnderlyingDetails;

export const koreaLocalSchema: Schema<KoreaLocal> = s.of<KoreaLocal>(
  s.union([s.lazy(() => koreanMarketUnderlyingDetailsSchema)]),
);
