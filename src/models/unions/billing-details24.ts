import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetails1Schema, type BillingDetails1 } from "../billing-details1.js";

/** Details for invoicing. Required if `collection_mode` is `manual`. */
export type BillingDetails24 = BillingDetails1;

export const billingDetails24Schema: Schema<BillingDetails24> = s.of<BillingDetails24>(
  s.union([s.lazy(() => billingDetails1Schema)]),
);
