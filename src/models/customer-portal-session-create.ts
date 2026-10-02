import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a customer portal session creation request. */
export type CustomerPortalSessionCreate = {
  /** List of subscriptions to create authenticated customer portal deep links for. */
  subscriptionIds?: string[];
};

export const customerPortalSessionCreateSchema: Schema<CustomerPortalSessionCreate> =
  s.object<CustomerPortalSessionCreate>({
    subscriptionIds: s.optional(s.array(s.string())),
    _keysMap: {
      subscriptionIds: "subscription_ids",
    },
  });
