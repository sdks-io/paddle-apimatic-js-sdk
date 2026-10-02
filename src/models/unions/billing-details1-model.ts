import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "../billing-details.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetails1Model = BillingDetails;

export const billingDetails1ModelSchema: Schema<BillingDetails1Model> = s.of<BillingDetails1Model>(
  s.union([s.lazy(() => billingDetailsSchema)]),
);
