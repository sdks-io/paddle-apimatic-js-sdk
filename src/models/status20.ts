import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of a payout */
export const Status20 = {
  /**
   * "unpaid": { "description": "Payout is unpaid. Typically means it has been created, but is not
   * yet completed." }
   */
  Unpaid: "unpaid",
  /** "paid": { "description": "Payout is paid." } */
  Paid: "paid",
} as const;
export type Status20 = (typeof Status20)[keyof typeof Status20] | (string & {});

export const status20Schema: EnumSchema<Status20> = s.enumOf<Status20>(Status20);
