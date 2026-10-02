import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Your own structured key-value data. */
export type CustomData = Record<string, unknown>;

export const customDataSchema: Schema<CustomData> = s.of<CustomData>(
  s.union([s.record(s.string(), s.unknown())]),
);
