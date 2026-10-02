import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { eventTypesResponseSchema, type EventTypesResponse } from "../models/event-types-response.js";
import type { Servers } from "../servers.js";

/**
 * Event types are actions that Paddle creates events for.
 */
export class EventTypes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List events types
   *
   * @remarks
   * Returns a list of event types.
   *
   * The response is not paginated.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link EventTypes.ListEventTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEventTypes(options?: RequestOptions): ApiPromise<EventTypesResponse, EventTypes.ListEventTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/event-types"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventTypesResponseSchema },
        errorFactory: EventTypes.ListEventTypesError,
      },
      options,
    );
  }
}

export namespace EventTypes {
  export class ListEventTypesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListEventTypesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
