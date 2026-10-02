import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a subscription to simulate as paused. Adds details of that subscription to webhook
 * payloads.
 */
export type SubscriptionId3 = string;

export const subscriptionId3Schema: Schema<SubscriptionId3> = s.of<SubscriptionId3>(s.union([s.string()]));
