import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PostalCode5 = string;

export const postalCode5Schema: Schema<PostalCode5> = s.of<PostalCode5>(s.union([s.string()]));
