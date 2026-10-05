import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkoutDomainApprovalStatusQuerySchema,
  type CheckoutDomainApprovalStatusQuery,
} from "../models/checkout-domain-approval-status-query.js";
import {
  checkoutDomainVerifyPaymentMethodSchema,
  type CheckoutDomainVerifyPaymentMethod,
} from "../models/checkout-domain-verify-payment-method.js";
import {
  checkoutDomainsResponseSchema,
  type CheckoutDomainsResponse,
} from "../models/checkout-domains-response.js";
import {
  checkoutDomainsResponse1Schema,
  type CheckoutDomainsResponse1,
} from "../models/checkout-domains-response1.js";
import {
  checkoutDomainsVerifyPaymentMethodResponseSchema,
  type CheckoutDomainsVerifyPaymentMethodResponse,
} from "../models/checkout-domains-verify-payment-method-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class CheckoutDomains {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a checkout domain
   *
   * @remarks
   * Deletes a checkout domain using its ID.
   *
   * Deleted checkout domains are no longer able to be used to load checkouts for your account.
   *
   * @returns There is no content to send for this request, but the headers may be useful.
   *
   * @throws {@link CheckoutDomains.DeleteCheckoutDomainError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCheckoutDomain(
    request: CheckoutDomains.DeleteCheckoutDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CheckoutDomains.DeleteCheckoutDomainError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/checkout-domains/{domain_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "domain_id", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CheckoutDomains.DeleteCheckoutDomainError,
      },
      options,
    );
  }

  /**
   * Get a checkout domain
   *
   * @remarks
   * Returns a checkout domain using its ID. The response includes the domain's approval status and
   * payment method verification details.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link CheckoutDomains.GetCheckoutDomainError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckoutDomain(
    request: CheckoutDomains.GetCheckoutDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutDomainsResponse1, CheckoutDomains.GetCheckoutDomainError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/checkout-domains/{domain_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "domain_id", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutDomainsResponse1Schema },
        errorFactory: CheckoutDomains.GetCheckoutDomainError,
      },
      options,
    );
  }

  /**
   * List checkout domains
   *
   * @remarks
   * Returns a paginated list of checkout domains submitted for your account. Use the query
   * parameters to page through results.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link CheckoutDomains.ListCheckoutDomainsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCheckoutDomains(
    request: CheckoutDomains.ListCheckoutDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutDomainsResponse, CheckoutDomains.ListCheckoutDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/checkout-domains"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => checkoutDomainApprovalStatusQuerySchema))),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutDomainsResponseSchema },
        errorFactory: CheckoutDomains.ListCheckoutDomainsError,
      },
      options,
    );
  }

  /**
   * Verify a payment method for a checkout domain
   *
   * @remarks
   * Triggers payment method verification for a checkout domain. Currently supports Apple Pay only.
   *
   * Before verifying, the checkout domain must be in `approved` status and the domain association
   * file must be correctly hosted.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link CheckoutDomains.VerifyCheckoutDomainPaymentMethodError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyCheckoutDomainPaymentMethod(
    request: CheckoutDomains.VerifyCheckoutDomainPaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CheckoutDomainsVerifyPaymentMethodResponse,
    CheckoutDomains.VerifyCheckoutDomainPaymentMethodError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/checkout-domains/{domain_id}/verify-payment-method"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "domain_id", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: checkoutDomainVerifyPaymentMethodSchema },
      },
      {
        success: { kind: "json", schema: checkoutDomainsVerifyPaymentMethodResponseSchema },
        errorFactory: CheckoutDomains.VerifyCheckoutDomainPaymentMethodError,
      },
      options,
    );
  }
}

export namespace CheckoutDomains {
  export type DeleteCheckoutDomainRequest = {
    /** Paddle ID of the checkout domain entity to work with. */
    domainId: string;
  };

  export class DeleteCheckoutDomainError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteCheckoutDomainError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCheckoutDomainRequest = {
    /** Paddle ID of the checkout domain entity to work with. */
    domainId: string;
  };

  export class GetCheckoutDomainError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetCheckoutDomainError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCheckoutDomainsRequest = {
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
     * Filter results to include the specified fully qualified domain name (FQDN), its ancestors,
     * and any of its subdomains. For example, if you provide `app.example.com`, the results include
     * `app.example.com`, `example.com` and any subdomains such as `cool.app.example.com`.
     */
    domain?: string;
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `id`, `created_at`, and `updated_at`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: CheckoutDomainApprovalStatusQuery[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListCheckoutDomainsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListCheckoutDomainsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type VerifyCheckoutDomainPaymentMethodRequest = {
    /** Paddle ID of the checkout domain entity to work with. */
    domainId: string;
    body: CheckoutDomainVerifyPaymentMethod;
  };

  export class VerifyCheckoutDomainPaymentMethodError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<VerifyCheckoutDomainPaymentMethodError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
