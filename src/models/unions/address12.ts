import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressSchema, type Address } from "../address.js";

/** Address for the subscription when it was created. */
export type Address12 = Address;

export const address12Schema: Schema<Address12> = s.of<Address12>(s.union([s.lazy(() => addressSchema)]));
