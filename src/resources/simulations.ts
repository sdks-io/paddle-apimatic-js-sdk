import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { simulationsResponseSchema, type SimulationsResponse } from "../models/simulations-response.js";
import { simulationsResponse1Schema, type SimulationsResponse1 } from "../models/simulations-response1.js";
import { statusSchema, type Status } from "../models/status.js";
import { simulationCreateSchema, type SimulationCreate } from "../models/unions/simulation-create.js";
import { simulationUpdateSchema, type SimulationUpdate } from "../models/unions/simulation-update.js";
import type { Servers } from "../servers.js";

/**
 * Simulation entities describe a reusable configuration for testing webhooks.
 */
export class Simulations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a simulation
   *
   * @remarks
   * Creates a new simulation for a notification setting (notification destination).
   *
   * simulated webhook payloads with real data. The API key making the request needs read
   * permissions:
   *
   * * For the entities you provided, or the request fails.
   * * For related entities which aren't nested in the entities you provided, or static examples
   *   will be used instead.
   *
   * For example, when creating a subscription renewal scenario simulation with an API key that has
   * a `subscription.read` permission but not a `transaction.read` permission, the request succeeds
   * and the subscription data will be used in simulated payloads, but the related transaction data
   * won't be used in payloads and falls back to a static example.
   *
   * If you don't provide a `config.entities` object, simulated webhook payloads are populated with
   * static examples.
   *
   * If successful, your response includes a copy of the new simulation entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Simulations.CreateSimulationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSimulation(
    request: Simulations.CreateSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsResponse1, Simulations.CreateSimulationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/simulations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: simulationCreateSchema },
      },
      {
        success: { kind: "json", schema: simulationsResponse1Schema },
        errorFactory: Simulations.CreateSimulationError,
      },
      options,
    );
  }

  /**
   * Get a simulation
   *
   * @remarks
   * Returns a simulation using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Simulations.GetSimulationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimulation(
    request: Simulations.GetSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsResponse1, Simulations.GetSimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "simulation_id", value: request.simulationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsResponse1Schema },
        errorFactory: Simulations.GetSimulationError,
      },
      options,
    );
  }

  /**
   * List simulations
   *
   * @remarks
   * Returns a paginated list of simulations. Use the query parameters to [page through
   * results](https://developer.paddle.com/api-reference/about/pagination).
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Simulations.ListSimulationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSimulations(
    request: Simulations.ListSimulationsRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsResponse, Simulations.ListSimulationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          {
            name: "notification_setting_id",
            value: request.notificationSettingId,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationsResponseSchema },
        errorFactory: Simulations.ListSimulationsError,
      },
      options,
    );
  }

  /**
   * Update a simulation
   *
   * @remarks
   * Updates a simulation using its ID.
   *
   * For scenario simulations, you can optionally include a `config.entities` object in the request
   * body with entity IDs to populate simulated webhook payloads with real data. The API key making
   * the request needs read permissions:
   *
   * * For the entities you provided, or the request fails.
   * * For related entities which aren't nested in the entities you provided, or static examples
   *   will be used instead.
   *
   * For example, when updating a subscription renewal scenario simulation with an API key that has
   * a `subscription.read` permission but not a `transaction.read` permission, the request succeeds
   * and the subscription data will be used in simulated payloads, but the related transaction data
   * won't be used in payloads and falls back to a static example.
   *
   * If you don't provide a `config.entities` object, simulated webhook payloads are populated with
   * static examples.
   *
   * If successful, your response includes a copy of the updated simulation entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Simulations.UpdateSimulationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSimulation(
    request: Simulations.UpdateSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<SimulationsResponse1, Simulations.UpdateSimulationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/simulations/{simulation_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "simulation_id", value: request.simulationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: simulationUpdateSchema },
      },
      {
        success: { kind: "json", schema: simulationsResponse1Schema },
        errorFactory: Simulations.UpdateSimulationError,
      },
      options,
    );
  }
}

export namespace Simulations {
  export type CreateSimulationRequest = {
    body: SimulationCreate;
  };

  export class CreateSimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateSimulationError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSimulationRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
  };

  export class GetSimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSimulationError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSimulationsRequest = {
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
     * Return entities related to the specified notification destination. Use a comma-separated list
     * to specify multiple notification destination IDs.
     */
    notificationSettingId?: string[];
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
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListSimulationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSimulationsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSimulationRequest = {
    /** Paddle ID of the simulation entity to work with. */
    simulationId: string;
    body: SimulationUpdate;
  };

  export class UpdateSimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateSimulationError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
