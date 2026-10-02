import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the Subscription that this adjustment belongs to */
export type SubscriptionId14 = string;

export const subscriptionId14Schema: Schema<SubscriptionId14> = s.of<SubscriptionId14>(s.union([s.string()]));
