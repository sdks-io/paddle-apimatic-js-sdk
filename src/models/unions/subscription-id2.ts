import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a subscription to simulate as canceled. Adds details of that subscription to webhook
 * payloads.
 */
export type SubscriptionId2 = string;

export const subscriptionId2Schema: Schema<SubscriptionId2> = s.of<SubscriptionId2>(s.union([s.string()]));
