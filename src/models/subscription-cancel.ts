import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EffectiveFrom, effectiveFromSchema } from "./effective-from.js";

export type SubscriptionCancel = {
  /** @default EffectiveFrom.NextBillingPeriod */
  effectiveFrom?: EffectiveFrom | null;
};

export const subscriptionCancelSchema: Schema<SubscriptionCancel> = s.object<SubscriptionCancel>({
  effectiveFrom: s.defaulted(s.nullable(s.lazy(() => effectiveFromSchema)), EffectiveFrom.NextBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
  },
});
