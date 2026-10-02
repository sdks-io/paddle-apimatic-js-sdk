import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether the subscription had a payment method when it was created. `null` if this couldn't be
 * determined.
 */
export type HasPaymentMethod = boolean;

export const hasPaymentMethodSchema: Schema<HasPaymentMethod> = s.of<HasPaymentMethod>(
  s.union([s.boolean()]),
);
