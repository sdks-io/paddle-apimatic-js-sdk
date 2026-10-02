import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { businessCreateSchema, type BusinessCreate } from "../models/business-create.js";
import { businessUpdateSchema, type BusinessUpdate } from "../models/business-update.js";
import {
  customersBusinessesResponseSchema,
  type CustomersBusinessesResponse,
} from "../models/customers-businesses-response.js";
import {
  customersBusinessesResponse1Schema,
  type CustomersBusinessesResponse1,
} from "../models/customers-businesses-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Business entities hold information about customer businesses. They're sub-entities of customers.
 */
export class Businesses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a business for a customer
   *
   * @remarks
   * Creates a new business for a customer.
   *
   * If successful, your response includes a copy of the new business entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Businesses.CreateBusinessError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBusiness(
    request: Businesses.CreateBusinessRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersBusinessesResponse1, Businesses.CreateBusinessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customer_id}/businesses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: businessCreateSchema },
      },
      {
        success: { kind: "json", schema: customersBusinessesResponse1Schema },
        errorFactory: Businesses.CreateBusinessError,
      },
      options,
    );
  }

  /**
   * Get a business for a customer
   *
   * @remarks
   * Returns a business for a customer using its ID and related customer ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Businesses.GetBusinessError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBusiness(
    request: Businesses.GetBusinessRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersBusinessesResponse1, Businesses.GetBusinessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/businesses/{business_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "business_id", value: request.businessId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersBusinessesResponse1Schema },
        errorFactory: Businesses.GetBusinessError,
      },
      options,
    );
  }

  /**
   * List businesses for a customer
   *
   * @remarks
   * Returns a paginated list of businesses for a customer. Use the query parameters to page through
   * results.
   *
   * By default, Paddle returns businesses that are `active`. Use the `status` query parameter to
   * return businesses that are archived.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Businesses.ListBusinessesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBusinesses(
    request: Businesses.ListBusinessesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersBusinessesResponse, Businesses.ListBusinessesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/businesses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersBusinessesResponseSchema },
        errorFactory: Businesses.ListBusinessesError,
      },
      options,
    );
  }

  /**
   * Update a business for a customer
   *
   * @remarks
   * Updates a business for a customer using its ID and related customer ID.
   *
   * If successful, your response includes a copy of the updated business entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Businesses.UpdateBusinessError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBusiness(
    request: Businesses.UpdateBusinessRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersBusinessesResponse1, Businesses.UpdateBusinessError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/customers/{customer_id}/businesses/{business_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "business_id", value: request.businessId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: businessUpdateSchema },
      },
      {
        success: { kind: "json", schema: customersBusinessesResponse1Schema },
        errorFactory: Businesses.UpdateBusinessError,
      },
      options,
    );
  }
}

export namespace Businesses {
  export type CreateBusinessRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: BusinessCreate;
  };

  export class CreateBusinessError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateBusinessError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetBusinessRequest = {
    /** Paddle ID of the business entity to work with. */
    businessId: string;
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
  };

  export class GetBusinessError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetBusinessError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListBusinessesRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
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
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status[];
    /**
     * Return entities that match a search query. Searches all fields, including contacts, except
     * `status`, `created_at`, and `updated_at`.
     */
    search?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListBusinessesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListBusinessesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateBusinessRequest = {
    /** Paddle ID of the business entity to work with. */
    businessId: string;
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: BusinessUpdate;
  };

  export class UpdateBusinessError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateBusinessError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
