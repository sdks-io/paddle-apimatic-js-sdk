import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tax or VAT Number for this business. */
export type TaxIdentifier3 = string;

export const taxIdentifier3Schema: Schema<TaxIdentifier3> = s.of<TaxIdentifier3>(s.union([s.string()]));
