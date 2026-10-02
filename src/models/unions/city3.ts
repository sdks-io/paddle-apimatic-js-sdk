import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type City3 = string;

export const city3Schema: Schema<City3> = s.of<City3>(s.union([s.string()]));
