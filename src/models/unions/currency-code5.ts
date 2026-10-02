import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "../currency-code.js";

export type CurrencyCode5 = CurrencyCode;

export const currencyCode5Schema: Schema<CurrencyCode5> = s.of<CurrencyCode5>(
  s.union([s.lazy(() => currencyCodeSchema)]),
);
