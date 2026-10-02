import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Description1 = string;

export const description1Schema: Schema<Description1> = s.of<Description1>(s.union([s.string()]));
