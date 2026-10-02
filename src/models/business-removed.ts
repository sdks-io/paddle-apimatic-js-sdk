import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";

/** Details specific to `subscription_business_removed` actions. */
export type BusinessRemoved = {
  /** What happened on the subscription. @default "subscription_business_removed" */
  action?: "subscription_business_removed";
  /** Business that was removed from the subscription. */
  business: Business;
};

export const businessRemovedSchema: Schema<BusinessRemoved> = s.object<BusinessRemoved>({
  action: s.defaulted(s.literal("subscription_business_removed"), "subscription_business_removed"),
  business: businessSchema,
});
