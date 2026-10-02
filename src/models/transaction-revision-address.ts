import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { secondLine3Schema, type SecondLine3 } from "./unions/second-line3.js";

/** Revised address information for this transaction. */
export type TransactionRevisionAddress = {
  /** Revised first line of the address for this transaction. */
  firstLine?: string;
  /** Revised second line of the address for this transaction. */
  secondLine?: SecondLine3;
  /** Revised city of the address for this transaction. */
  city?: string;
  /** Revised state, county, or region of the address for this transaction. */
  region?: string;
};

export const transactionRevisionAddressSchema: Schema<TransactionRevisionAddress> =
  s.object<TransactionRevisionAddress>({
    firstLine: s.optional(s.string()),
    secondLine: s.optional(s.lazy(() => secondLine3Schema)),
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    _keysMap: {
      firstLine: "first_line",
      secondLine: "second_line",
    },
  });
