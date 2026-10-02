import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Simulation payload. */
export type Payload = Record<string, unknown>;

export const payloadSchema: Schema<Payload> = s.of<Payload>(s.union([s.record(s.string(), s.unknown())]));
