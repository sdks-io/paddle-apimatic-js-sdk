import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Revised business information for this transaction. */
export type TransactionRevisionBusiness = {
  /** Revised name of the business for this transaction. */
  name?: string;
  /**
   * Revised tax or VAT number for this transaction. You can't remove a valid tax or VAT number,
   * only replace it with another valid one. Paddle automatically creates an adjustment to refund
   * any tax where applicable.
   */
  taxIdentifier?: string;
};

export const transactionRevisionBusinessSchema: Schema<TransactionRevisionBusiness> =
  s.object<TransactionRevisionBusiness>({
    name: s.optional(s.string()),
    taxIdentifier: s.optional(s.string()),
    _keysMap: {
      taxIdentifier: "tax_identifier",
    },
  });
