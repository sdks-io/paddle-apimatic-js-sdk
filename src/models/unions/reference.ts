import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * PayPal billing agreement identifier. Only populated for subscription payments where a billing
 * agreement was created between the customer and PayPal. `null` for one-off PayPal payments.
 */
export type Reference = string;

export const referenceSchema: Schema<Reference> = s.of<Reference>(s.union([s.string()]));
