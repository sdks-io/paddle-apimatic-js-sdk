import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./duration.js";
import { additionalInformationSchema, type AdditionalInformation } from "./unions/additional-information.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetails1 = {
  /**
   * Whether the related transaction may be paid using Paddle Checkout. If omitted when creating a
   * transaction, defaults to `false`.
   *
   * @default false
   */
  enableCheckout?: boolean;
  /** Customer purchase order number. Appears on invoice documents. */
  purchaseOrderNumber?: string;
  /** Notes or other information to include on this invoice. Appears on invoice documents. */
  additionalInformation?: AdditionalInformation;
  /** How long a customer has to pay this invoice once issued. */
  paymentTerms: Duration;
};

export const billingDetails1Schema: Schema<BillingDetails1> = s.object<BillingDetails1>({
  enableCheckout: s.defaulted(s.boolean(), false),
  purchaseOrderNumber: s.optional(s.string()),
  additionalInformation: s.optional(s.lazy(() => additionalInformationSchema)),
  paymentTerms: durationSchema,
  _keysMap: {
    enableCheckout: "enable_checkout",
    purchaseOrderNumber: "purchase_order_number",
    additionalInformation: "additional_information",
    paymentTerms: "payment_terms",
  },
});
