import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "../currency-code.js";

/**
 * Supported three-letter ISO 4217 currency code. Must be `USD`, `EUR`, or `GBP` if
 * `collection_mode` is `manual`.
 */
export type CurrencyCode17 = CurrencyCode;

export const currencyCode17Schema: Schema<CurrencyCode17> = s.of<CurrencyCode17>(
  s.union([s.lazy(() => currencyCodeSchema)]),
);
