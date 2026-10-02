import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID for the subscription related to this adjustment, prefixed with `sub_`. Set
 * automatically by Paddle based on the `subscription_id` of the related transaction.
 */
export type SubscriptionId = string;

export const subscriptionIdSchema: Schema<SubscriptionId> = s.of<SubscriptionId>(s.union([s.string()]));
