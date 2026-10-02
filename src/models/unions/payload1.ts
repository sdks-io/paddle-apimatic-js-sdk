import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Simulation payload. Pass a JSON object that matches the schema for an event type to simulate a
 * custom payload. If omitted, Paddle populates with a demo example.
 */
export type Payload1 = Record<string, unknown>;

export const payload1Schema: Schema<Payload1> = s.of<Payload1>(s.union([s.record(s.string(), s.unknown())]));
