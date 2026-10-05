import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Revised address information for this transaction. */
export type TransactionRevisionAddress = {
  /** Revised first line of the address for this transaction. */
  firstLine?: string;
  /** Revised second line of the address for this transaction. */
  secondLine?: string | null;
  /** Revised city of the address for this transaction. */
  city?: string;
  /** Revised state, county, or region of the address for this transaction. */
  region?: string;
};

export const transactionRevisionAddressSchema: Schema<TransactionRevisionAddress> =
  s.object<TransactionRevisionAddress>({
    firstLine: s.optional(s.string()),
    secondLine: s.optionalNullable(s.string()),
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    _keysMap: {
      firstLine: "first_line",
      secondLine: "second_line",
    },
  });
