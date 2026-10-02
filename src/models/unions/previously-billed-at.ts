import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this item was last billed. */
export type PreviouslyBilledAt = Date;

export const previouslyBilledAtSchema: Schema<PreviouslyBilledAt> = s.of<PreviouslyBilledAt>(
  s.union([s.dateTime()]),
);
