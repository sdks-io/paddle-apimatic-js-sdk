import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FirstLine1 = string;

export const firstLine1Schema: Schema<FirstLine1> = s.of<FirstLine1>(s.union([s.string()]));
