import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  simulationsRunsEventsResponseSchema,
  type SimulationsRunsEventsResponse,
} from "../models/simulations-runs-events-response.js";
import {
  simulationsRunsEventsSimulationEventIdReplayResponseSchema,
  type SimulationsRunsEventsSimulationEventIdReplayResponse,
} from "../models/simulations-runs-events-simulation-event-id-replay-response.js";
import {
  simulationsRunsEventsSimulationEventIdResponseSchema,
  type SimulationsRunsEventsSimulationEventIdResponse,
} from "../models/simulations-runs-events-simulation-event-id-response.js";
import type { Servers } from "../servers.js";

/**
 * Simulation run event entities describe a simulated event that happened as part of a notification
 * simulation run.
 */
export class SimulationRunEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get an event for a simulation run
   *
   * @remarks
   * Returns a simulation event using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SimulationRunEvents.GetSimulationEventError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimulationEvent(
    request: SimulationRunEvents.GetSimulationEventRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsRunsEventsSimulationEventIdResponse, SimulationRunEvents.GetSimulationEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/simulations/{simulation_id}/runs/{simulation_run_id}/events/{simulation_event_id}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "simulation_id", value: request.simulationId, schema: s.string() },
          { name: "simulation_run_id", value: request.simulationRunId, schema: s.string() },
          { name: "simulation_event_id", value: request.simulationEventId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsEventsSimulationEventIdResponseSchema },
        errorFactory: SimulationRunEvents.GetSimulationEventError,
      },
      options,
    );
  }

  /**
   * List events for a simulation run
   *
   * @remarks
   * Returns a paginated list of simulations. Use the query parameters to [page through
   * results](https://developer.paddle.com/api-reference/about/pagination).
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SimulationRunEvents.ListSimulationsEventsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSimulationsEvents(
    request: SimulationRunEvents.ListSimulationsEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsRunsEventsResponse, SimulationRunEvents.ListSimulationsEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}/runs/{simulation_run_id}/events"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "simulation_id", value: request.simulationId, schema: s.string() },
          { name: "simulation_run_id", value: request.simulationRunId, schema: s.string() },
        ],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsEventsResponseSchema },
        errorFactory: SimulationRunEvents.ListSimulationsEventsError,
      },
      options,
    );
  }

  /**
   * Replay an event for a simulation run
   *
   * @remarks
   * Attempts to resend a simulation run log using its ID.
   *
   * Paddle creates a new simulation run log entity for the replay, related to the same simulation
   * run.
   *
   * If successful, your response includes the new simulation run log entity.
   *
   * @returns The request has been accepted for processing, but processing has not yet completed.
   *
   * @throws {@link SimulationRunEvents.ReplaySimulationRunEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaySimulationRunEvent(
    request: SimulationRunEvents.ReplaySimulationRunEventRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SimulationsRunsEventsSimulationEventIdReplayResponse,
    SimulationRunEvents.ReplaySimulationRunEventError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/simulations/{simulation_id}/runs/{simulation_run_id}/events/{simulation_event_id}/replay",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "simulation_id", value: request.simulationId, schema: s.string() },
          { name: "simulation_run_id", value: request.simulationRunId, schema: s.string() },
          { name: "simulation_event_id", value: request.simulationEventId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsEventsSimulationEventIdReplayResponseSchema },
        errorFactory: SimulationRunEvents.ReplaySimulationRunEventError,
      },
      options,
    );
  }
}

export namespace SimulationRunEvents {
  export type GetSimulationEventRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
    /** Paddle ID of the simulation run entity to work with. */
    simulationRunId: string;
    /** Paddle ID of the simulation event entity to work with. */
    simulationEventId: string;
  };

  export class GetSimulationEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSimulationEventError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSimulationsEventsRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
    /** Paddle ID of the simulation run entity to work with. */
    simulationRunId: string;
    /** Return only the IDs specified. Use a comma-separated list to get multiple entities. */
    id?: string[];
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
     * Valid fields for ordering: `id`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListSimulationsEventsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSimulationsEventsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ReplaySimulationRunEventRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
    /** Paddle ID of the simulation run entity to work with. */
    simulationRunId: string;
    /** Paddle ID of the simulation event entity to work with. */
    simulationEventId: string;
  };

  export class ReplaySimulationRunEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ReplaySimulationRunEventError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
