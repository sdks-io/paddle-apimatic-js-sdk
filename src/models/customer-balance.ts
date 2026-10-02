import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerBalance = {
  /** Total amount of credit available to use. */
  available: string;
  /** Total amount of credit temporarily reserved for `billed` transactions. */
  reserved: string;
  /** Total amount of credit used. */
  used: string;
};

export const customerBalanceSchema: Schema<CustomerBalance> = s.object<CustomerBalance>({
  available: s.string(),
  reserved: s.string(),
  used: s.string(),
});
