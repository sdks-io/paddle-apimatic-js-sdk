import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectiveFrom1Schema, type EffectiveFrom1 } from "./unions/effective-from1.js";

export type SubscriptionCancel = {
  effectiveFrom?: EffectiveFrom1;
};

export const subscriptionCancelSchema: Schema<SubscriptionCancel> = s.object<SubscriptionCancel>({
  effectiveFrom: s.optional(s.lazy(() => effectiveFrom1Schema)),
  _keysMap: {
    effectiveFrom: "effective_from",
  },
});
