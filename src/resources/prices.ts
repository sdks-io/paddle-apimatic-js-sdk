import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { catalogTypeSchema, type CatalogType } from "../models/catalog-type.js";
import { durationIntervalSchema, type DurationInterval } from "../models/duration-interval.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { priceCreateSchema, type PriceCreate } from "../models/price-create.js";
import { priceIncludeEnumSchema, type PriceIncludeEnum } from "../models/price-include-enum.js";
import { priceListIncludeEnumSchema, type PriceListIncludeEnum } from "../models/price-list-include-enum.js";
import { priceUpdateSchema, type PriceUpdate } from "../models/price-update.js";
import { pricesResponseSchema, type PricesResponse } from "../models/prices-response.js";
import { pricesResponse1Schema, type PricesResponse1 } from "../models/prices-response1.js";
import { pricesResponse2Schema, type PricesResponse2 } from "../models/prices-response2.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Price entities describe how much and how often you charge for your products. They hold charging
 * information.
 */
export class Prices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a price
   *
   * @remarks
   * Creates a new price.
   *
   * Prices describe how you charge for products. You must include a `product_id` in your request to
   * relate this price to a product.
   *
   * If you omit the `quantity` object, Paddle automatically sets a minimum of `1` and a maximum of
   * `100` for you. This means the most units that a customer can buy is 100. Set a quantity if
   * you'd like to offer a different amount.
   *
   * If successful, your response includes a copy of the new price entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Prices.CreatePriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPrice(
    request: Prices.CreatePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<PricesResponse1, Prices.CreatePriceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prices"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: priceCreateSchema },
      },
      {
        success: { kind: "json", schema: pricesResponse1Schema },
        errorFactory: Prices.CreatePriceError,
      },
      options,
    );
  }

  /**
   * Get a price
   *
   * @remarks
   * Returns a price using its ID.
   *
   * Use the `include` parameter to include the related product entity in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Prices.GetPriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPrice(
    request: Prices.GetPriceRequest,
    options?: RequestOptions,
  ): ApiPromise<PricesResponse2, Prices.GetPriceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prices/{price_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "price_id", value: request.priceId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => priceIncludeEnumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pricesResponse2Schema },
        errorFactory: Prices.GetPriceError,
      },
      options,
    );
  }

  /**
   * List prices
   *
   * @remarks
   * Returns a paginated list of prices. Use the query parameters to page through results.
   *
   * By default, Paddle returns prices that are `active`. Use the `status` query parameter to return
   * prices that are archived.
   *
   * Use the `include` parameter to include the related product entity in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Prices.ListPricesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPrices(
    request: Prices.ListPricesRequest,
    options?: RequestOptions,
  ): ApiPromise<PricesResponse, Prices.ListPricesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prices"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => priceListIncludeEnumSchema))),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "product_id", value: request.productId, schema: s.optional(s.array(s.string())) },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          { name: "recurring", value: request.recurring, schema: s.optional(s.boolean()) },
          {
            name: "billing_cycle.interval",
            value: request.billingCycleInterval,
            schema: s.optional(s.lazy(() => durationIntervalSchema)),
          },
          {
            name: "billing_cycle.frequency",
            value: request.billingCycleFrequency,
            schema: s.optional(s.int()),
          },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => catalogTypeSchema)) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pricesResponseSchema },
        errorFactory: Prices.ListPricesError,
      },
      options,
    );
  }

  /**
   * Update a price
   *
   * @remarks
   * Updates a price using its ID.
   *
   * If successful, your response includes a copy of the updated price entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Prices.UpdatePriceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePrice(
    request: Prices.UpdatePriceRequest,
    options?: RequestOptions,
  ): ApiPromise<PricesResponse1, Prices.UpdatePriceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/prices/{price_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "price_id", value: request.priceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: priceUpdateSchema },
      },
      {
        success: { kind: "json", schema: pricesResponse1Schema },
        errorFactory: Prices.UpdatePriceError,
      },
      options,
    );
  }
}

export namespace Prices {
  export type CreatePriceRequest = {
    body: PriceCreate;
  };

  export class CreatePriceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreatePriceError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPriceRequest = {
    /** Paddle ID of the price entity to work with. */
    priceId: string;
    /** Include related entities in the response. */
    include?: PriceIncludeEnum[];
  };

  export class GetPriceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetPriceError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPricesRequest = {
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
    include?: PriceListIncludeEnum[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `billing_cycle.frequency`, `billing_cycle.interval`, `id`,
     * `product_id`, `quantity.maximum`, `quantity.minimum`, `status`, `tax_mode`,
     * `unit_price.amount`, and `unit_price.currency_code`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Return entities related to the specified product. Use a comma-separated list to specify
     * multiple product IDs.
     */
    productId?: string[];
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status[];
    /**
     * Determine whether returned entities are for recurring prices (`true`) or one-time prices
     * (`false`).
     */
    recurring?: boolean;
    /** Return entities where the price billing cycle interval matches this value. */
    billingCycleInterval?: DurationInterval;
    /** Return entities where the price billing cycle frequency matches this value. */
    billingCycleFrequency?: number;
    /** Return items that match the specified type. */
    type?: CatalogType;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListPricesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListPricesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePriceRequest = {
    /** Paddle ID of the price entity to work with. */
    priceId: string;
    body: PriceUpdate;
  };

  export class UpdatePriceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdatePriceError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
