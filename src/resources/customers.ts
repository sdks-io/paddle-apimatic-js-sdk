import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customerCreateSchema, type CustomerCreate } from "../models/customer-create.js";
import { customerUpdateSchema, type CustomerUpdate } from "../models/customer-update.js";
import {
  customersAuthTokenResponseSchema,
  type CustomersAuthTokenResponse,
} from "../models/customers-auth-token-response.js";
import {
  customersCreditBalancesResponseSchema,
  type CustomersCreditBalancesResponse,
} from "../models/customers-credit-balances-response.js";
import { customersResponseSchema, type CustomersResponse } from "../models/customers-response.js";
import { customersResponse1Schema, type CustomersResponse1 } from "../models/customers-response1.js";
import { customersResponse2Schema, type CustomersResponse2 } from "../models/customers-response2.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Customer entities hold information about the people and businesses that make purchases. They're
 * related to addresses and businesses.
 */
export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a customer
   *
   * @remarks
   * Creates a new customer.
   *
   * If successful, your response includes a copy of the new customer entity.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Customers.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: Customers.CreateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersResponse1, Customers.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customerCreateSchema },
      },
      {
        success: { kind: "json", schema: customersResponse1Schema },
        errorFactory: Customers.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Generate an authentication token for a customer
   *
   * @remarks
   * Generates an authentication token for a customer. You can pass a generated authentication token
   * to Paddle.js when opening a checkout to let customers work with saved payment methods.
   *
   * Authentication tokens are temporary and shouldn't be cached. They're valid until the
   * `expires_at` date returned in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Customers.GenerateCustomerAuthenticationTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateCustomerAuthenticationToken(
    request: Customers.GenerateCustomerAuthenticationTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersAuthTokenResponse, Customers.GenerateCustomerAuthenticationTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customer_id}/auth-token"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersAuthTokenResponseSchema },
        errorFactory: Customers.GenerateCustomerAuthenticationTokenError,
      },
      options,
    );
  }

  /**
   * Get a customer
   *
   * @remarks
   * Returns a customer using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Customers.GetCustomerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomer(
    request: Customers.GetCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersResponse2, Customers.GetCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersResponse2Schema },
        errorFactory: Customers.GetCustomerError,
      },
      options,
    );
  }

  /**
   * List credit balances for a customer
   *
   * @remarks
   * Returns a list of credit balances for each currency for a customer. Each balance has three
   * totals:
   *
   * * `available`: total available to use.
   * * `reserved`: total temporarily reserved for billed transactions.
   * * `used`: total amount of credit used.
   *
   * Credit is added to the `available` total initially. When used, it moves to the `used` total.
   *
   * The `reserved` total is used when a credit balance is applied to a transaction that's marked as
   * `billed`, like when working with an issued invoice. It's not available for other transactions
   * at this point, but isn't considered `used` until the transaction is completed. If a `billed`
   * transaction is `canceled`, any reserved credit moves back to `available`.
   *
   * Credit balances are created automatically by Paddle when you take an action that results in
   * Paddle creating a credit for a customer, like making prorated changes to a subscription. An
   * empty `data` array is returned where a customer has no credit balances.
   *
   * The response is not paginated.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Customers.ListCreditBalancesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCreditBalances(
    request: Customers.ListCreditBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersCreditBalancesResponse, Customers.ListCreditBalancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/credit-balances"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
          { name: "currency_code", value: request.currencyCode, schema: s.optional(s.array(s.string())) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersCreditBalancesResponseSchema },
        errorFactory: Customers.ListCreditBalancesError,
      },
      options,
    );
  }

  /**
   * List customers
   *
   * @remarks
   * Returns a paginated list of customers. Use the query parameters to page through results.
   *
   * By default, Paddle returns customers that are `active`. Use the `status` query parameter to
   * return customers that are archived.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Customers.ListCustomersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomers(
    request: Customers.ListCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersResponse, Customers.ListCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          { name: "email", value: request.email, schema: s.optional(s.array(s.string())) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => statusSchema))) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersResponseSchema },
        errorFactory: Customers.ListCustomersError,
      },
      options,
    );
  }

  /**
   * Update a customer
   *
   * @remarks
   * Updates a customer using its ID.
   *
   * If successful, your response includes a copy of the updated customer entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Customers.UpdateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersResponse1, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/customers/{customer_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customerUpdateSchema },
      },
      {
        success: { kind: "json", schema: customersResponse1Schema },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type CreateCustomerRequest = {
    body: CustomerCreate;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GenerateCustomerAuthenticationTokenRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
  };

  export class GenerateCustomerAuthenticationTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GenerateCustomerAuthenticationTokenError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
  };

  export class GetCustomerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetCustomerError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCreditBalancesRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    /**
     * Return entities that match the currency code. Use a comma-separated list to specify multiple
     * currency codes.
     */
    currencyCode?: string[];
  };

  export class ListCreditBalancesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListCreditBalancesError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomersRequest = {
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
     * Return entities that exactly match the specified email address. Use a comma-separated list to
     * specify multiple email addresses. Recommended for precise matching of email addresses.
     */
    email?: string[];
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
     * Return entities that match a search query. Searches `id`, `name`, and `email` fields. Use the
     * `email` query parameter for precise matching of email addresses.
     */
    search?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListCustomersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListCustomersError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomerRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: CustomerUpdate;
  };

  export class UpdateCustomerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
