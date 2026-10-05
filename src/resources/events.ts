import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { eventTypeNameSchema, type EventTypeName } from "../models/event-type-name.js";
import { eventsResponseSchema, type EventsResponse } from "../models/events-response.js";
import type { Servers } from "../servers.js";

/**
 * Event entities describe something notable that happened in your Paddle system.
 */
export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List events
   *
   * @remarks
   * Returns a paginated list of events that have occurred in the last 90 days. Use the query
   * parameters to page through results.
   *
   * Events older than 90 days aren't retained.
   *
   * This is sometimes referred to as "the event stream."
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Events.ListEventsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvents(
    request: Events.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsResponse, Events.ListEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          {
            name: "event_type",
            value: request.eventType,
            schema: s.optional(s.array(s.lazy(() => eventTypeNameSchema))),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsResponseSchema },
        errorFactory: Events.ListEventsError,
      },
      options,
    );
  }
}

export namespace Events {
  export type ListEventsRequest = {
    /**
     * Return entities after the specified Paddle ID when working with paginated endpoints. Used in
     * the `meta.pagination.next` URL in responses for list operations.
     */
    after?: string;
    /**
     * Set how many entities are returned per page. Paddle returns the maximum number of results if
     * a number greater than the maximum is requested. Check `meta.pagination.per_page` in the
     * response to see how many were returned.
     *
     * Default: `50`; Maximum: `200`.
     *
     * @default 50
     */
    perPage?: number;
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `id` (for `event_id`).
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Return events that match the specified event type. Use a comma-separated list to specify
     * multiple event types.
     */
    eventType?: EventTypeName[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListEventsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListEventsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
