import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { discountCreateSchema, type DiscountCreate } from "../models/discount-create.js";
import { discountIncludeEnumSchema, type DiscountIncludeEnum } from "../models/discount-include-enum.js";
import { discountMode1Schema, type DiscountMode1 } from "../models/discount-mode1.js";
import { discountsResponseSchema, type DiscountsResponse } from "../models/discounts-response.js";
import { discountsResponse1Schema, type DiscountsResponse1 } from "../models/discounts-response1.js";
import { discountsResponse2Schema, type DiscountsResponse2 } from "../models/discounts-response2.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { statusSchema, type Status } from "../models/status.js";
import { updateDiscountSchema, type UpdateDiscount } from "../models/update-discount.js";
import type { Servers } from "../servers.js";

/**
 * Discount entities describe percentage or amount-based discounts for transactions. They're
 * sometimes called coupons or promo codes.
 */
export class Discounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a discount
   *
   * @remarks
   * Creates a new discount.
   *
   * If successful, your response includes a copy of the new discount entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Discounts.CreateDiscountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDiscount(
    request: Discounts.CreateDiscountRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountsResponse1, Discounts.CreateDiscountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/discounts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: discountCreateSchema },
      },
      {
        success: { kind: "json", schema: discountsResponse1Schema },
        errorFactory: Discounts.CreateDiscountError,
      },
      options,
    );
  }

  /**
   * Get a discount
   *
   * @remarks
   * Returns a discount using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Discounts.GetDiscountError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiscount(
    request: Discounts.GetDiscountRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountsResponse2, Discounts.GetDiscountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discounts/{discount_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "discount_id", value: request.discountId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => discountIncludeEnumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discountsResponse2Schema },
        errorFactory: Discounts.GetDiscountError,
      },
      options,
    );
  }

  /**
   * List discounts
   *
   * @remarks
   * Returns a paginated list of discounts. Use the query parameters to page through results.
   *
   * By default, Paddle returns discounts that are `active`. Use the `status` query parameter to
   * return discounts that are archived or expired.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Discounts.ListDiscountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDiscounts(
    request: Discounts.ListDiscountsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountsResponse, Discounts.ListDiscountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discounts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => discountIncludeEnumSchema))),
          },
          { name: "code", value: request.code, schema: s.optional(s.array(s.string())) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => discountMode1Schema)) },
          {
            name: "discount_group_id",
            value: request.discountGroupId,
            schema: s.optional(s.array(s.string())),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discountsResponseSchema },
        errorFactory: Discounts.ListDiscountsError,
      },
      options,
    );
  }

  /**
   * Update a discount
   *
   * @remarks
   * Updates a discount using its ID.
   *
   * If successful, your response includes a copy of the updated discount entity.
   *
   * To update a checkout recovery discount, configure your checkout recovery settings in the
   * dashboard.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Discounts.UpdateDiscountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDiscount(
    request: Discounts.UpdateDiscountRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscountsResponse1, Discounts.UpdateDiscountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/discounts/{discount_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "discount_id", value: request.discountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateDiscountSchema },
      },
      {
        success: { kind: "json", schema: discountsResponse1Schema },
        errorFactory: Discounts.UpdateDiscountError,
      },
      options,
    );
  }
}

export namespace Discounts {
  export type CreateDiscountRequest = {
    body: DiscountCreate;
  };

  export class CreateDiscountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateDiscountError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDiscountRequest = {
    /** Paddle ID of the discount entity to work with. */
    discountId: string;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: DiscountIncludeEnum[];
  };

  export class GetDiscountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetDiscountError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListDiscountsRequest = {
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
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: DiscountIncludeEnum[];
    /**
     * Return entities that match the discount code. Use a comma-separated list to specify multiple
     * discount codes.
     */
    code?: string[];
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
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status[];
    /** Return entities that match the specified mode. */
    mode?: DiscountMode1;
    /**
     * Return entities related to the specified discount group. Use a comma-separated list to
     * specify multiple discount group IDs.
     */
    discountGroupId?: string[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListDiscountsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListDiscountsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateDiscountRequest = {
    /** Paddle ID of the discount entity to work with. */
    discountId: string;
    body: UpdateDiscount;
  };

  export class UpdateDiscountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateDiscountError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
