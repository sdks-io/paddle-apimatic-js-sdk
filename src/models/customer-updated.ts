import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";

/** Details specific to `subscription_customer_updated` actions. */
export type CustomerUpdated = {
  /** What happened on the subscription. @default "subscription_customer_updated" */
  action?: "subscription_customer_updated";
  /** Updated customer on the subscription. This is what the customer was changed to. */
  customer: Customer;
};

export const customerUpdatedSchema: Schema<CustomerUpdated> = s.object<CustomerUpdated>({
  action: s.defaulted(s.literal("subscription_customer_updated"), "subscription_customer_updated"),
  customer: customerSchema,
});
