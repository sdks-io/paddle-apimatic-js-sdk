import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./duration.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetailsUpdate = {
  /** Whether the related transaction may be paid using Paddle Checkout. */
  enableCheckout?: boolean;
  /** Customer purchase order number. Appears on invoice documents. */
  purchaseOrderNumber?: string;
  /** Notes or other information to include on this invoice. Appears on invoice documents. */
  additionalInformation?: string | null;
  /** How long a customer has to pay this invoice once issued. */
  paymentTerms?: Duration;
};

export const billingDetailsUpdateSchema: Schema<BillingDetailsUpdate> = s.object<BillingDetailsUpdate>({
  enableCheckout: s.optional(s.boolean()),
  purchaseOrderNumber: s.optional(s.string()),
  additionalInformation: s.optionalNullable(s.string()),
  paymentTerms: s.optional(s.lazy(() => durationSchema)),
  _keysMap: {
    enableCheckout: "enable_checkout",
    purchaseOrderNumber: "purchase_order_number",
    additionalInformation: "additional_information",
    paymentTerms: "payment_terms",
  },
});
