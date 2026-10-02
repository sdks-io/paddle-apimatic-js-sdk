import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExpiresAt16 = Date;

export const expiresAt16Schema: Schema<ExpiresAt16> = s.of<ExpiresAt16>(s.union([s.dateTime()]));
