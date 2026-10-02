import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { customerSchema, type Customer } from "../customer.js";

/** Customer for the subscription when it was created. */
export type Customer1 = Customer;

export const customer1Schema: Schema<Customer1> = s.of<Customer1>(s.union([s.lazy(() => customerSchema)]));
