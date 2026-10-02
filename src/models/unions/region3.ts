import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Region3 = string;

export const region3Schema: Schema<Region3> = s.of<Region3>(s.union([s.string()]));
