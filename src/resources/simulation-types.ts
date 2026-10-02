import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  simulationTypesResponseSchema,
  type SimulationTypesResponse,
} from "../models/simulation-types-response.js";
import type { Servers } from "../servers.js";

/**
 * Simulation type entities are the kinds of simulation you can use when testing webhooks.
 */
export class SimulationTypes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List simulation types
   *
   * @remarks
   * Returns a list of simulation types (events and scenarios) that you can choose from when
   * creating simulations.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SimulationTypes.ListSimulationTypesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSimulationTypes(
    options?: RequestOptions,
  ): ApiPromise<SimulationTypesResponse, SimulationTypes.ListSimulationTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/simulation-types"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simulationTypesResponseSchema },
        errorFactory: SimulationTypes.ListSimulationTypesError,
      },
      options,
    );
  }
}

export namespace SimulationTypes {
  export class ListSimulationTypesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSimulationTypesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
