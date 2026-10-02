import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersResponse1 = {
  /** Represents a customer entity. */
  data: Customer;
  /** Information about this response. */
  meta: Meta;
};

export const customersResponse1Schema: Schema<CustomersResponse1> = s.object<CustomersResponse1>({
  data: customerSchema,
  meta: metaSchema,
});
