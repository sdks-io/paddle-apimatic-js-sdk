import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersAddressesResponse1 = {
  /** Represents an address entity. */
  data: Address;
  /** Information about this response. */
  meta: Meta;
};

export const customersAddressesResponse1Schema: Schema<CustomersAddressesResponse1> =
  s.object<CustomersAddressesResponse1>({
    data: addressSchema,
    meta: metaSchema,
  });
