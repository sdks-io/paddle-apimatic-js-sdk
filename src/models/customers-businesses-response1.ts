import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersBusinessesResponse1 = {
  /** Represents a business entity. */
  data: Business;
  /** Information about this response. */
  meta: Meta;
};

export const customersBusinessesResponse1Schema: Schema<CustomersBusinessesResponse1> =
  s.object<CustomersBusinessesResponse1>({
    data: businessSchema,
    meta: metaSchema,
  });
