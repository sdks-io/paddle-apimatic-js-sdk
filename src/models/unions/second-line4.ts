import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SecondLine4 = string;

export const secondLine4Schema: Schema<SecondLine4> = s.of<SecondLine4>(s.union([s.string()]));
