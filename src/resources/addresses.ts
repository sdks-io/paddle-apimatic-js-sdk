import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addressCreateSchema, type AddressCreate } from "../models/address-create.js";
import { addressUpdateSchema, type AddressUpdate } from "../models/address-update.js";
import {
  customersAddressesResponseSchema,
  type CustomersAddressesResponse,
} from "../models/customers-addresses-response.js";
import {
  customersAddressesResponse1Schema,
  type CustomersAddressesResponse1,
} from "../models/customers-addresses-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Address entities hold billing address information for a customer. They're sub-entities of
 * customers.
 */
export class Addresses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an address for a customer
   *
   * @remarks
   * Creates a new address for a customer.
   *
   * For tax calculation, fraud prevention, and compliance purposes, you must include a
   * `postal_code` when creating addresses for some countries. For example, ZIP codes in the USA and
   * postcodes in the UK. See: [Supported
   * countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)
   *
   * If successful, your response includes a copy of the new address entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Addresses.CreateAddressError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAddress(
    request: Addresses.CreateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersAddressesResponse1, Addresses.CreateAddressError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customer_id}/addresses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addressCreateSchema },
      },
      {
        success: { kind: "json", schema: customersAddressesResponse1Schema },
        errorFactory: Addresses.CreateAddressError,
      },
      options,
    );
  }

  /**
   * Get an address for a customer
   *
   * @remarks
   * Returns an address for a customer using its ID and related customer ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Addresses.GetAddressError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAddress(
    request: Addresses.GetAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersAddressesResponse1, Addresses.GetAddressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/addresses/{address_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "address_id", value: request.addressId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersAddressesResponse1Schema },
        errorFactory: Addresses.GetAddressError,
      },
      options,
    );
  }

  /**
   * List addresses for a customer
   *
   * @remarks
   * Returns a paginated list of addresses for a customer. Use the query parameters to page through
   * results.
   *
   * By default, Paddle returns addresses that are `active`. Use the `status` query parameter to
   * return addresses that are archived.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Addresses.ListAddressesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAddresses(
    request: Addresses.ListAddressesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersAddressesResponse, Addresses.ListAddressesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/addresses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersAddressesResponseSchema },
        errorFactory: Addresses.ListAddressesError,
      },
      options,
    );
  }

  /**
   * Update an address for a customer
   *
   * @remarks
   * Updates an address for a customer using its ID and related customer ID.
   *
   * If successful, your response includes a copy of the updated address entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Addresses.UpdateAddressError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAddress(
    request: Addresses.UpdateAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersAddressesResponse1, Addresses.UpdateAddressError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/customers/{customer_id}/addresses/{address_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "address_id", value: request.addressId, schema: s.string() },
          { name: "customer_id", value: request.customerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addressUpdateSchema },
      },
      {
        success: { kind: "json", schema: customersAddressesResponse1Schema },
        errorFactory: Addresses.UpdateAddressError,
      },
      options,
    );
  }
}

export namespace Addresses {
  export type CreateAddressRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: AddressCreate;
  };

  export class CreateAddressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateAddressError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAddressRequest = {
    /** Paddle ID of the address entity to work with. */
    addressId: string;
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
  };

  export class GetAddressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAddressError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAddressesRequest = {
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
     * Return entities that match a search query. Searches all fields except `status`, `created_at`,
     * and `updated_at`.
     */
    search?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListAddressesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListAddressesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAddressRequest = {
    /** Paddle ID of the address entity to work with. */
    addressId: string;
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: AddressUpdate;
  };

  export class UpdateAddressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateAddressError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
