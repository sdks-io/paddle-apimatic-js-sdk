import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "./billing-details.js";

/** Details specific to `subscription_billing_details_updated` actions. */
export type BillingDetailsUpdated = {
  /** What happened on the subscription. @default "subscription_billing_details_updated" */
  action?: "subscription_billing_details_updated";
  /**
   * Updated billing details on the subscription. This is what the billing details were changed to.
   */
  billingDetails: BillingDetails;
};

export const billingDetailsUpdatedSchema: Schema<BillingDetailsUpdated> = s.object<BillingDetailsUpdated>({
  action: s.defaulted(
    s.literal("subscription_billing_details_updated"),
    "subscription_billing_details_updated",
  ),
  billingDetails: billingDetailsSchema,
  _keysMap: {
    billingDetails: "billing_details",
  },
});
