import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ZIP or postal code of this address. Required for some countries. */
export type PostalCode = string;

export const postalCodeSchema: Schema<PostalCode> = s.of<PostalCode>(s.union([s.string()]));
