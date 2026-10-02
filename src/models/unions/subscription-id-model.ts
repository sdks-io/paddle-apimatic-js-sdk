import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubscriptionIdModel = string[];

export const subscriptionIdModelSchema: Schema<SubscriptionIdModel> = s.of<SubscriptionIdModel>(
  s.union([s.array(s.string())]),
);
