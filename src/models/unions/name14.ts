import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Name14 = string;

export const name14Schema: Schema<Name14> = s.of<Name14>(s.union([s.string()]));
