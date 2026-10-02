import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetails2Schema, type BillingDetails2 } from "../billing-details2.js";

export type BillingDetails26 = BillingDetails2;

export const billingDetails26Schema: Schema<BillingDetails26> = s.of<BillingDetails26>(
  s.union([s.lazy(() => billingDetails2Schema)]),
);
