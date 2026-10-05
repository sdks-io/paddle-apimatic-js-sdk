import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  simulationsRunIncludeEnumSchema,
  type SimulationsRunIncludeEnum,
} from "../models/simulations-run-include-enum.js";
import {
  simulationsRunsResponseSchema,
  type SimulationsRunsResponse,
} from "../models/simulations-runs-response.js";
import {
  simulationsRunsResponse1Schema,
  type SimulationsRunsResponse1,
} from "../models/simulations-runs-response1.js";
import {
  simulationsRunsResponse2Schema,
  type SimulationsRunsResponse2,
} from "../models/simulations-runs-response2.js";
import type { Servers } from "../servers.js";

/**
 * Simulation run entities describe an attempt by Paddle to send simulated events for a notification
 * simulation.
 */
export class SimulationRuns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a run for a simulation
   *
   * @remarks
   * Creates a new simulation run for a simulation.
   *
   * If successful, your response includes a copy of the new simulation run entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link SimulationRuns.CreateSimulationRunError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSimulationRun(
    request: SimulationRuns.CreateSimulationRunRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsRunsResponse1, SimulationRuns.CreateSimulationRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "simulation_id", value: request.simulationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsResponse1Schema },
        errorFactory: SimulationRuns.CreateSimulationRunError,
      },
      options,
    );
  }

  /**
   * Get a run for a simulation
   *
   * @remarks
   * Returns a simulation run using its ID.
   *
   * Use the `include` parameter to include related entities in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SimulationRuns.GetSimulationRunError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimulationRun(
    request: SimulationRuns.GetSimulationRunRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsRunsResponse2, SimulationRuns.GetSimulationRunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}/runs/{simulation_run_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "simulation_id", value: request.simulationId, schema: s.string() },
          { name: "simulation_run_id", value: request.simulationRunId, schema: s.string() },
        ],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => simulationsRunIncludeEnumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsResponse2Schema },
        errorFactory: SimulationRuns.GetSimulationRunError,
      },
      options,
    );
  }

  /**
   * List runs for a simulation
   *
   * @remarks
   * Returns a paginated list of simulation runs. Use the query parameters to [page through
   * results](https://developer.paddle.com/api-reference/about/pagination).
   *
   * Use the `include` parameter to [include related
   * entities](https://developer.paddle.com/api-reference/about/include-entities) in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SimulationRuns.ListSimulationRunsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSimulationRuns(
    request: SimulationRuns.ListSimulationRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsRunsResponse, SimulationRuns.ListSimulationRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "simulation_id", value: request.simulationId, schema: s.string() }],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => simulationsRunIncludeEnumSchema))),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsRunsResponseSchema },
        errorFactory: SimulationRuns.ListSimulationRunsError,
      },
      options,
    );
  }
}

export namespace SimulationRuns {
  export type CreateSimulationRunRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
  };

  export class CreateSimulationRunError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateSimulationRunError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSimulationRunRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
    /** Paddle ID of the simulation run entity to work with. */
    simulationRunId: string;
    /** Include related entities in the response. */
    include?: SimulationsRunIncludeEnum[];
  };

  export class GetSimulationRunError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSimulationRunError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSimulationRunsRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
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
    /** Include related entities in the response. */
    include?: SimulationsRunIncludeEnum[];
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

  export class ListSimulationRunsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSimulationRunsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
