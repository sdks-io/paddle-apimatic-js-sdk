import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status3 = {
  /**
   * "delivered": { "description": "Return notifications where the status is `delivered`. Returned
   * notifications were delivered successfully." }
   */
  Delivered: "delivered",
  /**
   * "failed": { "description": "Return notifications where the status is `failed`. Returned
   * notifications were not delivered successfully and they're not scheduled to be retried." }
   */
  Failed: "failed",
  /**
   * "needs_retry": { "description": "Return notifications where the status is `needs_retry`.
   * Returned notifications have not been delivered successfully, but Paddle is scheduled to try to
   * deliver it again." }
   */
  NeedsRetry: "needs_retry",
  /**
   * "not_attempted": { "description": "Return notifications where the status is `not_attempted`.
   * Returned notifications have not been delivered because Paddle hasn't yet tried to deliver
   * them." }
   */
  NotAttempted: "not_attempted",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
