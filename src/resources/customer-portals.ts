import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customerPortalSessionCreateSchema,
  type CustomerPortalSessionCreate,
} from "../models/customer-portal-session-create.js";
import {
  customersPortalSessionsResponseSchema,
  type CustomersPortalSessionsResponse,
} from "../models/customers-portal-sessions-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * The customer portal lets customers manage their subscriptions, payment methods, and account
 * information. Customer portal sessions hold authenticated links to the portal for a customer.
 */
export class CustomerPortals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a customer portal session
   *
   * @remarks
   * Creates a customer portal session for a customer.
   *
   * The [customer portal](https://developer.paddle.com/concepts/customer-portal) is a secure,
   * Paddle-hosted site that allows customers to manage their own subscriptions, payments, and
   * account information without you having to build custom billing screens.
   *
   * Customers can:
   *
   * * View transaction history
   * * Download invoices
   * * Update payment methods
   * * Manage their subscriptions including making changes or cancellations
   * * Revise details on completed transactions
   *
   * You can create a customer portal session to generate authenticated links for a customer so that
   * they're automatically signed in to the portal. It's typically used when linking to the customer
   * portal from your app where customers are already authenticated.
   *
   * You can include an array of `subscription_ids` to generate authenticated portal links that let
   * customers make changes to their subscriptions. You can use these links as part of subscription
   * management workflows rather than building your own billing screens.
   *
   * Customer portal sessions are temporary and shouldn't be cached.
   *
   * The customer portal is fully hosted by Paddle. For security and the best customer experience,
   * don't embed the customer portal in an iframe.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link CustomerPortals.CreateCustomerPortalSessionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerPortalSession(
    request: CustomerPortals.CreateCustomerPortalSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomersPortalSessionsResponse, CustomerPortals.CreateCustomerPortalSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customer_id}/portal-sessions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "customer_id", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customerPortalSessionCreateSchema },
      },
      {
        success: { kind: "json", schema: customersPortalSessionsResponseSchema },
        errorFactory: CustomerPortals.CreateCustomerPortalSessionError,
      },
      options,
    );
  }
}

export namespace CustomerPortals {
  export type CreateCustomerPortalSessionRequest = {
    /** Paddle ID of the customer entity to work with. */
    customerId: string;
    body: CustomerPortalSessionCreate;
  };

  export class CreateCustomerPortalSessionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateCustomerPortalSessionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
