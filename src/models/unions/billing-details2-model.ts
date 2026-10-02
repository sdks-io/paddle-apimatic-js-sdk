import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsUpdateSchema, type BillingDetailsUpdate } from "../billing-details-update.js";

/**
 * Details for invoicing. Required if `collection_mode` is `manual`. `null` if changing
 * `collection_mode` to `automatic`.
 */
export type BillingDetails2Model = BillingDetailsUpdate;

export const billingDetails2ModelSchema: Schema<BillingDetails2Model> = s.of<BillingDetails2Model>(
  s.union([s.lazy(() => billingDetailsUpdateSchema)]),
);
