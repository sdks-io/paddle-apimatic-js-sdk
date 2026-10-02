import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsUpdateSchema, type BillingDetailsUpdate } from "../billing-details-update.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetails25 = BillingDetailsUpdate;

export const billingDetails25Schema: Schema<BillingDetails25> = s.of<BillingDetails25>(
  s.union([s.lazy(() => billingDetailsUpdateSchema)]),
);
