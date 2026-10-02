import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CustomData15 = Record<string, unknown>;

export const customData15Schema: Schema<CustomData15> = s.of<CustomData15>(
  s.union([s.record(s.string(), s.unknown())]),
);
