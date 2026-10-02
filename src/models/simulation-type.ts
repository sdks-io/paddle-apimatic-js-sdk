import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { simulationKindSchema, type SimulationKind } from "./simulation-kind.js";

/** Represents a simulation type. */
export type SimulationType = {
  /**
   * Type of simulation sent by Paddle. Single event simulations are in the format
   * `entity.event_type`; scenario simulations are in `snake_case`.
   */
  name: string;
  /**
   * Descriptive label for this simulation type. Typically gives more context about a scenario.
   * Single event simulations are in the format `entity.event_type`.
   */
  label: string;
  /** Short description of this simulation type. */
  description: string;
  /** Group for this simulation type. Typically the entity that this event relates to. */
  group: string;
  /** Type of simulation. */
  type: SimulationKind;
  /** List of events that will be sent for this simulation type. */
  events: EventTypeName[];
};

export const simulationTypeSchema: Schema<SimulationType> = s.object<SimulationType>({
  name: s.string(),
  label: s.string(),
  description: s.string(),
  group: s.string(),
  type: simulationKindSchema,
  events: s.array(s.lazy(() => eventTypeNameSchema)),
});
