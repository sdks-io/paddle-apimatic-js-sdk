import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";

/** Details specific to `subscription_business_updated` actions. */
export type BusinessUpdated = {
  /** What happened on the subscription. @default "subscription_business_updated" */
  action?: "subscription_business_updated";
  /** Updated business on the subscription. This is what the business was changed to. */
  business: Business;
};

export const businessUpdatedSchema: Schema<BusinessUpdated> = s.object<BusinessUpdated>({
  action: s.defaulted(s.literal("subscription_business_updated"), "subscription_business_updated"),
  business: businessSchema,
});
