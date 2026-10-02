import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FirstLine3 = string;

export const firstLine3Schema: Schema<FirstLine3> = s.of<FirstLine3>(s.union([s.string()]));
