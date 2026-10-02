import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionScheduledChange1Schema,
  type SubscriptionScheduledChange1,
} from "../subscription-scheduled-change1.js";

export type ScheduledChange3 = SubscriptionScheduledChange1;

export const scheduledChange3Schema: Schema<ScheduledChange3> = s.of<ScheduledChange3>(
  s.union([s.lazy(() => subscriptionScheduledChange1Schema)]),
);
