import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Second line of this address. */
export type SecondLine = string;

export const secondLineSchema: Schema<SecondLine> = s.of<SecondLine>(s.union([s.string()]));
