import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ZIP or postal code of this address. Include for more accurate tax calculations. */
export type PostalCode3 = string;

export const postalCode3Schema: Schema<PostalCode3> = s.of<PostalCode3>(s.union([s.string()]));
