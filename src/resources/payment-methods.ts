import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customersPaymentMethodsResponseSchema,
  type CustomersPaymentMethodsResponse,
} from "../models/customers-payment-methods-response.js";
import {
  customersPaymentMethodsResponse1Schema,
  type CustomersPaymentMethodsResponse1,
} from "../models/customers-payment-methods-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Payment method entities hold information about a payment method a customer saved at checkout for
 * use in the future. They're related to customer entities.
 */
export class PaymentMethods {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a payment method for a customer
   *
   * @remarks
   * Deletes a customer payment method using its ID.
   *
   * Deleted payment methods are no longer saved and presented to the customer for future purchases.
   *
   * Saved payment methods can't be deleted if tied to an `active`, `trialing`, `paused`, or
   * `past_due` subscription. Update the subscription's payment method first, then delete the saved
   * payment method.
   *
   * There's no way to recover a deleted saved payment method. It's permanently removed from that
   * customer.
   *
   * @returns There is no content to send for this request, but the headers may be useful.
   *
   * @throws {@link PaymentMethods.DeleteCustomerPaymentMethodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerPaymentMethod(
    request: PaymentMethods.DeleteCustomerPaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentMethods.DeleteCustomerPaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/customers/{customer_id}/payment-methods/{payment_method_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentMethods.DeleteCustomerPaymentMethodError,
      },
      options,
    );
  }

  /**
   * Get a payment method for a customer
   *
   * @remarks
   * Returns a payment method for a customer using its ID and related customer ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link PaymentMethods.GetCustomerPaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerPaymentMethod(
    request: PaymentMethods.GetCustomerPaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersPaymentMethodsResponse1, PaymentMethods.GetCustomerPaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/payment-methods/{payment_method_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "customer_id", value: request.customerId, schema: s.string() },
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersPaymentMethodsResponse1Schema },
        errorFactory: PaymentMethods.GetCustomerPaymentMethodError,
      },
      options,
    );
  }

  /**
   * List payment methods for a customer
   *
   * @remarks
   * Returns a paginated list of payment methods that a customer has saved. Use the query parameters
   * to page through results.
   *
   * Customers can choose to save payment methods when purchasing one-time items and subscriptions
   * by checking a box when completing checkout. You can present customers with their saved payment
   * methods when they make a purchase in the future.
   *
   * Returns an empty list where customers have not saved any payment methods, or have deleted all
   * previously saved payment methods.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link PaymentMethods.ListCustomerPaymentMethodsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerPaymentMethods(
    request: PaymentMethods.ListCustomerPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersPaymentMethodsResponse, PaymentMethods.ListCustomerPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customer_id}/payment-methods"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "address_id", value: request.addressId, schema: s.optional(s.array(s.string())) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "supports_checkout", value: request.supportsCheckout, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersPaymentMethodsResponseSchema },
        errorFactory: PaymentMethods.ListCustomerPaymentMethodsError,
      },
      options,
    );
  }
}

export namespace PaymentMethods {
  export type DeleteCustomerPaymentMethodRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    /** Paddle ID of the payment method entity to work with. */
    paymentMethodId: string;
  };

  export class DeleteCustomerPaymentMethodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteCustomerPaymentMethodError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomerPaymentMethodRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    /** Paddle ID of the payment method entity to work with. */
    paymentMethodId: string;
  };

  export class GetCustomerPaymentMethodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetCustomerPaymentMethodError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomerPaymentMethodsRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
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
     * Return entities related to the specified address. Use a comma-separated list to specify
     * multiple address IDs.
     */
    addressId?: string[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `id`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /** Return entities that support being presented at checkout (`true`) or not (`false`). */
    supportsCheckout?: boolean;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListCustomerPaymentMethodsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListCustomerPaymentMethodsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
