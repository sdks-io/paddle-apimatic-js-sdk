import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a subscription to simulate as resumed. Adds details of that subscription to webhook
 * payloads.
 */
export type SubscriptionId5 = string;

export const subscriptionId5Schema: Schema<SubscriptionId5> = s.of<SubscriptionId5>(s.union([s.string()]));
