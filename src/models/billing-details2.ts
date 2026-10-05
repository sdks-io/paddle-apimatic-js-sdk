import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { duration4Schema, type Duration4 } from "./duration4.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetails2 = {
  /**
   * Whether the related transaction may be paid using Paddle Checkout. If omitted when creating a
   * transaction, defaults to `false`.
   *
   * @default false
   */
  enableCheckout?: boolean;
  /** Customer purchase order number. Appears on invoice documents. */
  purchaseOrderNumber: string;
  /** Notes or other information to include on this invoice. Appears on invoice documents. */
  additionalInformation: string | null;
  /** How long a customer has to pay this invoice once issued. */
  paymentTerms: Duration4;
};

export const billingDetails2Schema: Schema<BillingDetails2> = s.object<BillingDetails2>({
  enableCheckout: s.defaulted(s.boolean(), false),
  purchaseOrderNumber: s.string(),
  additionalInformation: s.nullable(s.string()),
  paymentTerms: duration4Schema,
  _keysMap: {
    enableCheckout: "enable_checkout",
    purchaseOrderNumber: "purchase_order_number",
    additionalInformation: "additional_information",
    paymentTerms: "payment_terms",
  },
});
