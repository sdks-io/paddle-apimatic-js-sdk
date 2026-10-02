import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type EventsResponse = {
  data: Event[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const eventsResponseSchema: Schema<EventsResponse> = s.object<EventsResponse>({
  data: s.array(s.lazy(() => eventSchema)),
  meta: paginatedMetaSchema,
});
