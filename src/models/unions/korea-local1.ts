import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  koreanMarketUnderlyingDetails1Schema,
  type KoreanMarketUnderlyingDetails1,
} from "../korean-market-underlying-details1.js";

export type KoreaLocal1 = KoreanMarketUnderlyingDetails1;

export const koreaLocal1Schema: Schema<KoreaLocal1> = s.of<KoreaLocal1>(
  s.union([s.lazy(() => koreanMarketUnderlyingDetails1Schema)]),
);
