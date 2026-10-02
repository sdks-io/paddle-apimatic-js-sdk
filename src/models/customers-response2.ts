import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerIncludesSchema, type CustomerIncludes } from "./customer-includes.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersResponse2 = {
  /** Represents a customer entity with included entities. */
  data: CustomerIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const customersResponse2Schema: Schema<CustomersResponse2> = s.object<CustomersResponse2>({
  data: customerIncludesSchema,
  meta: metaSchema,
});
