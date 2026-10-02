import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the subscription that this transaction is for, prefixed with `sub_`. */
export type SubscriptionId1 = string;

export const subscriptionId1Schema: Schema<SubscriptionId1> = s.of<SubscriptionId1>(s.union([s.string()]));
