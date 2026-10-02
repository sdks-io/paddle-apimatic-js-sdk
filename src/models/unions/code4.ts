import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Code4 = string;

export const code4Schema: Schema<Code4> = s.of<Code4>(s.union([s.string()]));
