import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "../currency-code.js";

/** Supported three-letter ISO 4217 currency code. */
export type CurrencyCode14 = CurrencyCode;

export const currencyCode14Schema: Schema<CurrencyCode14> = s.of<CurrencyCode14>(
  s.union([s.lazy(() => currencyCodeSchema)]),
);
