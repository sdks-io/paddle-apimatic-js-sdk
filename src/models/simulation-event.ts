import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { simulationEventStatusSchema, type SimulationEventStatus } from "./simulation-event-status.js";
import {
  simulationEventRequest1Schema,
  type SimulationEventRequest1,
} from "./unions/simulation-event-request1.js";
import {
  simulationEventResponse1Schema,
  type SimulationEventResponse1,
} from "./unions/simulation-event-response1.js";

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
  request: SimulationEventRequest1;
  /** Information about the response. Sent by the responding server for the notification setting. */
  response: SimulationEventResponse1;
  createdAt: Date;
  updatedAt: Date;
};

export const simulationEventSchema: Schema<SimulationEvent> = s.object<SimulationEvent>({
  id: s.string(),
  status: simulationEventStatusSchema,
  eventType: eventTypeNameSchema,
  payload: s.record(s.string(), s.unknown()),
  request: simulationEventRequest1Schema,
  response: simulationEventResponse1Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    eventType: "event_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
