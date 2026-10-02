import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the invoice that this transaction is related to, prefixed with `inv_`. Used for
 * compatibility with the Paddle Invoice API, which is now deprecated. This field is scheduled to be
 * removed in the next version of the Paddle API.
 */
export type InvoiceId = string;

export const invoiceIdSchema: Schema<InvoiceId> = s.of<InvoiceId>(s.union([s.string()]));
