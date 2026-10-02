import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Region1 = string;

export const region1Schema: Schema<Region1> = s.of<Region1>(s.union([s.string()]));
