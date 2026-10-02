import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SecondLine1 = string;

export const secondLine1Schema: Schema<SecondLine1> = s.of<SecondLine1>(s.union([s.string()]));
