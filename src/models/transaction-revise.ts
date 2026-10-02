import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionRevisionAddressSchema,
  type TransactionRevisionAddress,
} from "./transaction-revision-address.js";
import {
  transactionRevisionBusinessSchema,
  type TransactionRevisionBusiness,
} from "./transaction-revision-business.js";
import {
  transactionRevisionCustomerSchema,
  type TransactionRevisionCustomer,
} from "./transaction-revision-customer.js";

/** Represents a customer information revision for a transaction. */
export type TransactionRevise = {
  /** Revised customer information for this transaction. */
  customer?: TransactionRevisionCustomer;
  /** Revised business information for this transaction. */
  business?: TransactionRevisionBusiness;
  /** Revised address information for this transaction. */
  address?: TransactionRevisionAddress;
};

export const transactionReviseSchema: Schema<TransactionRevise> = s.object<TransactionRevise>({
  customer: s.optional(s.lazy(() => transactionRevisionCustomerSchema)),
  business: s.optional(s.lazy(() => transactionRevisionBusinessSchema)),
  address: s.optional(s.lazy(() => transactionRevisionAddressSchema)),
});
