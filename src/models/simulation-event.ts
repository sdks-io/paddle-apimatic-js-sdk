import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { simulationEventRequestSchema, type SimulationEventRequest } from "./simulation-event-request.js";
import { simulationEventResponseSchema, type SimulationEventResponse } from "./simulation-event-response.js";
import { simulationEventStatusSchema, type SimulationEventStatus } from "./simulation-event-status.js";

/** Represents a simulation event. */
export type SimulationEvent = {
  id: string;
  status: SimulationEventStatus;
  eventType: EventTypeName;
  /**
   * Simulation payload. Pass a JSON object that matches the schema for an event type to simulate a
   * custom payload. If omitted, Paddle populates with a demo example.
   */
  payload: Record<string, unknown>;
  /** Information about the request. Sent by Paddle as part of the simulation. */
  request?: SimulationEventRequest | null;
  /** Information about the response. Sent by the responding server for the notification setting. */
  response?: SimulationEventResponse | null;
  createdAt: Date;
  updatedAt: Date;
};

export const simulationEventSchema: Schema<SimulationEvent> = s.object<SimulationEvent>({
  id: s.string(),
  status: simulationEventStatusSchema,
  eventType: eventTypeNameSchema,
  payload: s.record(s.string(), s.unknown()),
  request: s.optionalNullable(s.lazy(() => simulationEventRequestSchema)),
  response: s.optionalNullable(s.lazy(() => simulationEventResponseSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    eventType: "event_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
