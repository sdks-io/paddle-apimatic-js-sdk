import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom data of the subscription when it was created. */
export type CustomData26 = Record<string, unknown>;

export const customData26Schema: Schema<CustomData26> = s.of<CustomData26>(
  s.union([s.record(s.string(), s.unknown())]),
);
