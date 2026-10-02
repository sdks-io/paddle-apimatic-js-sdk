import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "../currency-code.js";

/**
 * Supported three-letter ISO 4217 currency code. Required where discount type is `flat` or
 * `flat_per_seat`.
 */
export type CurrencyCode1 = CurrencyCode;

export const currencyCode1Schema: Schema<CurrencyCode1> = s.of<CurrencyCode1>(
  s.union([s.lazy(() => currencyCodeSchema)]),
);
