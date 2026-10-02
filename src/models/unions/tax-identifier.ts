import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tax or VAT Number for this business. */
export type TaxIdentifier = string;

export const taxIdentifierSchema: Schema<TaxIdentifier> = s.of<TaxIdentifier>(s.union([s.string()]));
