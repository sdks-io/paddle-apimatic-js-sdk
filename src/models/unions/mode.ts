import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { discountModeSchema, type DiscountMode } from "../discount-mode.js";

export type Mode = DiscountMode;

export const modeSchema: Schema<Mode> = s.of<Mode>(s.union([s.lazy(() => discountModeSchema)]));
