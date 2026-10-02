import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { simulationRunStatusSchema, type SimulationRunStatus } from "./simulation-run-status.js";

/** Single event simulations play a single event. */
export type SingleEventRun1 = {
  id: string;
  /** Status of this simulation run. */
  status: SimulationRunStatus;
  createdAt: Date;
  updatedAt: Date;
  /** Single event sent for this simulation, in the format `entity.event_type`. */
  type: EventTypeName;
};

export const singleEventRun1Schema: Schema<SingleEventRun1> = s.object<SingleEventRun1>({
  id: s.string(),
  status: simulationRunStatusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  type: eventTypeNameSchema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
