import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { durationSchema, type Duration } from "../duration.js";

/** Billing cycle of the subscription when it was created. */
export type BillingCycle6 = Duration;

export const billingCycle6Schema: Schema<BillingCycle6> = s.of<BillingCycle6>(
  s.union([s.lazy(() => durationSchema)]),
);
