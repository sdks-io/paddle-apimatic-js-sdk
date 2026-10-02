import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

/** Represents an event type. */
export type EventType = {
  name: EventTypeName;
  /** Short description of this event type. */
  description: string;
  /** Group for this event type. Typically the entity that this event relates to. */
  group: string;
  /** List of API versions that this event type supports. */
  availableVersions: number[];
};

export const eventTypeSchema: Schema<EventType> = s.object<EventType>({
  name: eventTypeNameSchema,
  description: s.string(),
  group: s.string(),
  availableVersions: s.array(s.number()),
  _keysMap: {
    availableVersions: "available_versions",
  },
});
