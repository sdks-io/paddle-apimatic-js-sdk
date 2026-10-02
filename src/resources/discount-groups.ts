import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { discountGroupCreateSchema, type DiscountGroupCreate } from "../models/discount-group-create.js";
import { discountGroupUpdateSchema, type DiscountGroupUpdate } from "../models/discount-group-update.js";
import {
  discountGroupsResponseSchema,
  type DiscountGroupsResponse,
} from "../models/discount-groups-response.js";
import {
  discountGroupsResponse1Schema,
  type DiscountGroupsResponse1,
} from "../models/discount-groups-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Discount group entities let you organize your discounts by grouping them together.
 */
export class DiscountGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a discount group
   *
   * @remarks
   * Creates a new discount group.
   *
   * If successful, your response includes a copy of the new discount group entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link DiscountGroups.CreateDiscountGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDiscountGroup(
    request: DiscountGroups.CreateDiscountGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountGroupsResponse1, DiscountGroups.CreateDiscountGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/discount-groups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: discountGroupCreateSchema },
      },
      {
        success: { kind: "json", schema: discountGroupsResponse1Schema },
        errorFactory: DiscountGroups.CreateDiscountGroupError,
      },
      options,
    );
  }

  /**
   * Get a discount group
   *
   * @remarks
   * Returns a discount group using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link DiscountGroups.GetDiscountGroupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiscountGroup(
    request: DiscountGroups.GetDiscountGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountGroupsResponse1, DiscountGroups.GetDiscountGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discount-groups/{discount_group_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "discount_group_id", value: request.discountGroupId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discountGroupsResponse1Schema },
        errorFactory: DiscountGroups.GetDiscountGroupError,
      },
      options,
    );
  }

  /**
   * List discount groups
   *
   * @remarks
   * Returns a paginated list of discount groups. Use the query parameters to page through results.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link DiscountGroups.ListDiscountGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDiscountGroups(
    request: DiscountGroups.ListDiscountGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountGroupsResponse, DiscountGroups.ListDiscountGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discount-groups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
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
        success: { kind: "json", schema: discountGroupsResponseSchema },
        errorFactory: DiscountGroups.ListDiscountGroupsError,
      },
      options,
    );
  }

  /**
   * Update a discount group
   *
   * @remarks
   * Updates a discount group using its ID.
   *
   * If successful, your response includes a copy of the updated discount group entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link DiscountGroups.UpdateDiscountGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDiscountGroup(
    request: DiscountGroups.UpdateDiscountGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountGroupsResponse1, DiscountGroups.UpdateDiscountGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/discount-groups/{discount_group_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "discount_group_id", value: request.discountGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: discountGroupUpdateSchema },
      },
      {
        success: { kind: "json", schema: discountGroupsResponse1Schema },
        errorFactory: DiscountGroups.UpdateDiscountGroupError,
      },
      options,
    );
  }
}

export namespace DiscountGroups {
  export type CreateDiscountGroupRequest = {
    body: DiscountGroupCreate;
  };

  export class CreateDiscountGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateDiscountGroupError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDiscountGroupRequest = {
    /** Paddle ID of the discount group entity to work with. */
    discountGroupId: string;
  };

  export class GetDiscountGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetDiscountGroupError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListDiscountGroupsRequest = {
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
     * Valid fields for ordering: `created_at` and `id`.
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

  export class ListDiscountGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListDiscountGroupsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateDiscountGroupRequest = {
    /** Paddle ID of the discount group entity to work with. */
    discountGroupId: string;
    body: DiscountGroupUpdate;
  };

  export class UpdateDiscountGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateDiscountGroupError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
