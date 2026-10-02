import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a subscription to simulate as renewed. Adds details of that subscription to webhook
 * payloads.
 */
export type SubscriptionId4 = string;

export const subscriptionId4Schema: Schema<SubscriptionId4> = s.of<SubscriptionId4>(s.union([s.string()]));
