import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "../billing-details.js";

/**
 * Details for invoicing. Only returned for manually-collected subscriptions (`collection_mode:
 * manual`).
 */
export type BillingDetails11 = BillingDetails;

export const billingDetails11Schema: Schema<BillingDetails11> = s.of<BillingDetails11>(
  s.union([s.lazy(() => billingDetailsSchema)]),
);
