import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { simulationEventSchema, type SimulationEvent } from "./simulation-event.js";
import { simulationRunStatusSchema, type SimulationRunStatus } from "./simulation-run-status.js";

/** Single event simulations play a single event. */
export type SingleEventRun = {
  id: string;
  /** Status of this simulation run. */
  status: SimulationRunStatus;
  createdAt: Date;
  updatedAt: Date;
  /** Single event sent for this simulation, in the format `entity.event_type`. */
  type: EventTypeName;
  /**
   * Events associated with this simulation run. Paddle creates a list of events for each simulation
   * runs. Returned when the `include` parameter is used with the `events` value.
   */
  events?: SimulationEvent[];
};

export const singleEventRunSchema: Schema<SingleEventRun> = s.object<SingleEventRun>({
  id: s.string(),
  status: simulationRunStatusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  type: eventTypeNameSchema,
  events: s.optional(s.array(s.lazy(() => simulationEventSchema))),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
