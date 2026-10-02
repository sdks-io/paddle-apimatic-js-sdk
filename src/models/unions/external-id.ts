import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExternalId = string;

export const externalIdSchema: Schema<ExternalId> = s.of<ExternalId>(s.union([s.string()]));
