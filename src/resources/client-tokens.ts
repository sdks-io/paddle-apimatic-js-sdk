import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  clientSideTokenCreateSchema,
  type ClientSideTokenCreate,
} from "../models/client-side-token-create.js";
import { clientTokensResponseSchema, type ClientTokensResponse } from "../models/client-tokens-response.js";
import {
  clientTokensResponse1Schema,
  type ClientTokensResponse1,
} from "../models/client-tokens-response1.js";
import {
  clientTokensStatusQuerySchema,
  type ClientTokensStatusQuery,
} from "../models/client-tokens-status-query.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { updateClientTokenSchema, type UpdateClientToken } from "../models/update-client-token.js";
import type { Servers } from "../servers.js";

/**
 * Client token entities hold the details to authenticate Paddle.js in your frontend code.
 */
export class ClientTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a client-side token
   *
   * @remarks
   * Creates a new client-side token.
   *
   * If successful, your response includes a copy of the new client-side token entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link ClientTokens.CreateClientTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClientToken(
    request: ClientTokens.CreateClientTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientTokensResponse1, ClientTokens.CreateClientTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/client-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clientSideTokenCreateSchema },
      },
      {
        success: { kind: "json", schema: clientTokensResponse1Schema },
        errorFactory: ClientTokens.CreateClientTokenError,
      },
      options,
    );
  }

  /**
   * Get a client-side token
   *
   * @remarks
   * Returns a client-side token using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link ClientTokens.GetClientTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClientToken(
    request: ClientTokens.GetClientTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientTokensResponse1, ClientTokens.GetClientTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/client-tokens/{client_token_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "client_token_id", value: request.clientTokenId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientTokensResponse1Schema },
        errorFactory: ClientTokens.GetClientTokenError,
      },
      options,
    );
  }

  /**
   * List client-side tokens
   *
   * @remarks
   * Returns a paginated list of client-side tokens. Use the query parameters to [page through
   * results](https://developer.paddle.com/api-reference/about/pagination).
   *
   * @returns The request has succeeded.
   *
   * @throws {@link ClientTokens.ListClientTokensError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClientTokens(
    request: ClientTokens.ListClientTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientTokensResponse, ClientTokens.ListClientTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/client-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => clientTokensStatusQuerySchema))),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: clientTokensResponseSchema },
        errorFactory: ClientTokens.ListClientTokensError,
      },
      options,
    );
  }

  /**
   * Update a client-side token
   *
   * @remarks
   * Updates a client-side token using its ID.
   *
   * You can revoke a client-side token by changing its `status` to `revoked`. Client-side tokens
   * that are revoked can't be updated to `active`.
   *
   * If successful, your response includes a copy of the updated client-side token entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link ClientTokens.UpdateClientTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClientToken(
    request: ClientTokens.UpdateClientTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ClientTokensResponse1, ClientTokens.UpdateClientTokenError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/client-tokens/{client_token_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "client_token_id", value: request.clientTokenId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateClientTokenSchema },
      },
      {
        success: { kind: "json", schema: clientTokensResponse1Schema },
        errorFactory: ClientTokens.UpdateClientTokenError,
      },
      options,
    );
  }
}

export namespace ClientTokens {
  export type CreateClientTokenRequest = {
    body: ClientSideTokenCreate;
  };

  export class CreateClientTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateClientTokenError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetClientTokenRequest = {
    /** Paddle ID of the client-side token entity. */
    clientTokenId: string;
  };

  export class GetClientTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetClientTokenError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListClientTokensRequest = {
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
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: ClientTokensStatusQuery[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListClientTokensError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListClientTokensError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateClientTokenRequest = {
    /** Paddle ID of the client-side token entity. */
    clientTokenId: string;
    body: UpdateClientToken;
  };

  export class UpdateClientTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateClientTokenError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
