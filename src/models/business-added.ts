import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";

/** Details specific to `subscription_business_added` actions. */
export type BusinessAdded = {
  /** What happened on the subscription. @default "subscription_business_added" */
  action?: "subscription_business_added";
  /** New business on the subscription. */
  business: Business;
};

export const businessAddedSchema: Schema<BusinessAdded> = s.object<BusinessAdded>({
  action: s.defaulted(s.literal("subscription_business_added"), "subscription_business_added"),
  business: businessSchema,
});
