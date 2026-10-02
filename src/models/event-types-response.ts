import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { metaSchema, type Meta } from "./meta.js";

export type EventTypesResponse = {
  data: EventType[];
  /** Information about this response. */
  meta: Meta;
};

export const eventTypesResponseSchema: Schema<EventTypesResponse> = s.object<EventTypesResponse>({
  data: s.array(s.lazy(() => eventTypeSchema)),
  meta: metaSchema,
});
