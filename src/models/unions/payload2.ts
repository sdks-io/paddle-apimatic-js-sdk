import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Simulation payload. Pass a JSON object that matches the schema for an event type to simulate a
 * custom payload. Set to `null` to clear and populate with a demo example.
 */
export type Payload2 = Record<string, unknown>;

export const payload2Schema: Schema<Payload2> = s.of<Payload2>(s.union([s.record(s.string(), s.unknown())]));
