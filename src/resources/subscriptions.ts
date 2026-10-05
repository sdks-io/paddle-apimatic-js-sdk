import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { collectionModeQuerySchema, type CollectionModeQuery } from "../models/collection-mode-query.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  scheduledChangeActionQuerySchema,
  type ScheduledChangeActionQuery,
} from "../models/scheduled-change-action-query.js";
import { subscriptionCancelSchema, type SubscriptionCancel } from "../models/subscription-cancel.js";
import { subscriptionChargeSchema, type SubscriptionCharge } from "../models/subscription-charge.js";
import {
  subscriptionIncludeEnumSchema,
  type SubscriptionIncludeEnum,
} from "../models/subscription-include-enum.js";
import { subscriptionPauseSchema, type SubscriptionPause } from "../models/subscription-pause.js";
import {
  subscriptionStatusQuerySchema,
  type SubscriptionStatusQuery,
} from "../models/subscription-status-query.js";
import { subscriptionUpdateSchema, type SubscriptionUpdate } from "../models/subscription-update.js";
import {
  subscriptionsActivateResponseSchema,
  type SubscriptionsActivateResponse,
} from "../models/subscriptions-activate-response.js";
import {
  subscriptionsCancelResponseSchema,
  type SubscriptionsCancelResponse,
} from "../models/subscriptions-cancel-response.js";
import {
  subscriptionsChargePreviewResponseSchema,
  type SubscriptionsChargePreviewResponse,
} from "../models/subscriptions-charge-preview-response.js";
import {
  subscriptionsChargeResponseSchema,
  type SubscriptionsChargeResponse,
} from "../models/subscriptions-charge-response.js";
import {
  subscriptionsPauseResponseSchema,
  type SubscriptionsPauseResponse,
} from "../models/subscriptions-pause-response.js";
import {
  subscriptionsPreviewResponseSchema,
  type SubscriptionsPreviewResponse,
} from "../models/subscriptions-preview-response.js";
import { subscriptionsResponseSchema, type SubscriptionsResponse } from "../models/subscriptions-response.js";
import {
  subscriptionsResponse1Schema,
  type SubscriptionsResponse1,
} from "../models/subscriptions-response1.js";
import {
  subscriptionsResponse2Schema,
  type SubscriptionsResponse2,
} from "../models/subscriptions-response2.js";
import {
  subscriptionsResumeResponseSchema,
  type SubscriptionsResumeResponse,
} from "../models/subscriptions-resume-response.js";
import {
  subscriptionsUpdatePaymentMethodTransactionResponseSchema,
  type SubscriptionsUpdatePaymentMethodTransactionResponse,
} from "../models/subscriptions-update-payment-method-transaction-response.js";
import { subscriptionResumeSchema, type SubscriptionResume } from "../models/unions/subscription-resume.js";
import type { Servers } from "../servers.js";

/**
 * Subscription entities describe a recurring billing relationship with a customer. They're closely
 * related to transactions.
 */
export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate a trialing subscription
   *
   * @remarks
   * Activates a trialing subscription using its ID. Only automatically-collected subscriptions
   * where the status is `trialing` can be activated.
   *
   * On activation, Paddle bills for a subscription immediately. Subscription billing dates are
   * recalculated based on the activation date (the time the activation request is made).
   *
   * If successful, Paddle returns a copy of the updated subscription entity. The subscription
   * status is `active`, and billing dates are updated to reflect the activation date.
   *
   * This operation results in an immediate charge, so responses may take longer than usual while a
   * payment attempt is processed.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.ActivateSubscriptionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateSubscription(
    request: Subscriptions.ActivateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsActivateResponse, Subscriptions.ActivateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/activate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsActivateResponseSchema },
        errorFactory: Subscriptions.ActivateSubscriptionError,
      },
      options,
    );
  }

  /**
   * Cancel a subscription
   *
   * @remarks
   * Cancels a subscription using its ID.
   *
   * By default, active subscriptions are canceled at the end of the billing period. When you send a
   * request to cancel, Paddle creates a `scheduled_change` against the subscription entity to say
   * that it should cancel at the end of the current billing period. Its `status` remains `active`
   * until after the effective date of the scheduled change, at which point it changes to
   * `canceled`.
   *
   * You can cancel a subscription right away by including `effective_from` in your request, setting
   * the value to `immediately`. If successful, your response includes a copy of the updated
   * subscription entity with the `status` of `canceled`. Canceling immediately is the default
   * behavior for paused subscriptions.
   *
   * You can't reinstate a canceled subscription.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.CancelSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelSubscription(
    request: Subscriptions.CancelSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsCancelResponse, Subscriptions.CancelSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionCancelSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsCancelResponseSchema },
        errorFactory: Subscriptions.CancelSubscriptionError,
      },
      options,
    );
  }

  /**
   * Create a one-time charge for a subscription
   *
   * @remarks
   * Creates a new one-time charge for a subscription. Use to bill non-recurring items to a
   * subscription. Non-recurring items are price entities where the `billing_cycle` is `null`.
   *
   * If successful, Paddle responds with the updated subscription entity. However, one-time charges
   * aren't held against the subscription entity, so the charges billed aren't returned in the
   * response.
   *
   * Once created, to get details of a one-time charge:
   *
   * * When created with `effective_from` as `next_billing_period`, get the subscription the charge
   *   was billed to and use the `include` query parameter with the `next_transaction` value.
   * * When created with `effective_from` as `immediately`, list transactions and use the
   *   `subscription_id` query parameter with the subscription ID of the subscription the charge was
   *   billed to.
   *
   * When an update results in an immediate charge, responses may take longer than usual while a
   * payment attempt is processed.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link Subscriptions.CreateSubscriptionChargeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscriptionCharge(
    request: Subscriptions.CreateSubscriptionChargeRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsChargeResponse, Subscriptions.CreateSubscriptionChargeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/charge"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionChargeSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsChargeResponseSchema },
        errorFactory: Subscriptions.CreateSubscriptionChargeError,
      },
      options,
    );
  }

  /**
   * Get a subscription
   *
   * @remarks
   * Returns a subscription using its ID.
   *
   * Use the `include` parameter to include transaction information in the response.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.GetSubscriptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscription(
    request: Subscriptions.GetSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsResponse1, Subscriptions.GetSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => subscriptionIncludeEnumSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsResponse1Schema },
        errorFactory: Subscriptions.GetSubscriptionError,
      },
      options,
    );
  }

  /**
   * Get a transaction to update payment method
   *
   * @remarks
   * Returns a transaction that you can pass to a checkout to let customers update their payment
   * details. Only for subscriptions where `collection_mode` is `automatic`.
   *
   * The transaction returned depends on the status of the related subscription:
   *
   * * Where a subscription is `past_due`, it returns the most recent `past_due` transaction.
   * * Where a subscription is `active`, it creates a new zero amount transaction for the items on a
   *   subscription.
   *
   * You can use the returned `checkout.url`, or pass the returned transaction ID to Paddle.js to
   * open a checkout to present customers with a way of updating their payment details.
   *
   * The `customer`, `address`, `business`, `discount`, `adjustments` and `adjustments_totals`
   * properties are only returned in the response if the API key has read permissions for those
   * related entities.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionUpdatePaymentMethodTransaction(
    request: Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SubscriptionsUpdatePaymentMethodTransactionResponse,
    Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/subscriptions/{subscription_id}/update-payment-method-transaction",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsUpdatePaymentMethodTransactionResponseSchema },
        errorFactory: Subscriptions.GetSubscriptionUpdatePaymentMethodTransactionError,
      },
      options,
    );
  }

  /**
   * List subscriptions
   *
   * @remarks
   * Returns a paginated list of subscriptions. Use the query parameters to page through results.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.ListSubscriptionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptions(
    request: Subscriptions.ListSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsResponse, Subscriptions.ListSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.array(s.string())) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
          { name: "address_id", value: request.addressId, schema: s.optional(s.array(s.string())) },
          {
            name: "collection_mode",
            value: request.collectionMode,
            schema: s.optional(s.lazy(() => collectionModeQuerySchema)),
          },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.array(s.string())) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "price_id", value: request.priceId, schema: s.optional(s.array(s.string())) },
          {
            name: "scheduled_change_action",
            value: request.scheduledChangeAction,
            schema: s.optional(s.array(s.lazy(() => scheduledChangeActionQuerySchema))),
          },
          {
            name: "next_billed_at",
            value: request.nextBilledAt,
            schema: s.optionalNullable(s.array(s.string())),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => subscriptionStatusQuerySchema))),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsResponseSchema },
        errorFactory: Subscriptions.ListSubscriptionsError,
      },
      options,
    );
  }

  /**
   * Pause a subscription
   *
   * @remarks
   * Pauses a subscription using its ID.
   *
   * By default, subscriptions are paused at the end of the billing period. When you send a request
   * to pause, Paddle creates a `scheduled_change` against the subscription entity to say that it
   * should pause at the end of the current billing period. Its `status` remains `active` until
   * after the effective date of the scheduled change, at which point it changes to `paused`.
   *
   * You can pause a subscription right away by including `effective_from` in your request, setting
   * the value to `immediately`. If successful, your response includes a copy of the updated
   * subscription entity with the `status` of `paused`.
   *
   * To set a resume date, include the `resume_at` field in your request. The subscription remains
   * paused until the resume date, or until you send a resume request. Omit to create an open-ended
   * pause. The subscription remains paused indefinitely, until you send a resume request.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.PauseSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pauseSubscription(
    request: Subscriptions.PauseSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsPauseResponse, Subscriptions.PauseSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/pause"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionPauseSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsPauseResponseSchema },
        errorFactory: Subscriptions.PauseSubscriptionError,
      },
      options,
    );
  }

  /**
   * Preview a one-time charge for a subscription
   *
   * @remarks
   * Previews creating a one-time charge for a subscription without billing that charge. Typically
   * used for previewing calculations before making changes to a subscription.
   *
   * One-time charges are non-recurring items. These are price entities where the `billing_cycle` is
   * `null`.
   *
   * If successful, your response includes `immediate_transaction`, `next_transaction`, and
   * `recurring_transaction_details` so you can see expected transactions for the changes.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.PreviewSubscriptionChargeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewSubscriptionCharge(
    request: Subscriptions.PreviewSubscriptionChargeRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsChargePreviewResponse, Subscriptions.PreviewSubscriptionChargeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/charge/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionChargeSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsChargePreviewResponseSchema },
        errorFactory: Subscriptions.PreviewSubscriptionChargeError,
      },
      options,
    );
  }

  /**
   * Preview an update to a subscription
   *
   * @remarks
   * Previews an update for a subscription without applying those changes. Typically used for
   * previewing proration before making changes to a subscription.
   *
   * If successful, your response includes `immediate_transaction`, `next_transaction`, and
   * `recurring_transaction_details` so you can see expected transactions for the changes.
   *
   * The `update_summary` object contains details of prorated credits and charges created, along
   * with the overall result of the update.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.PreviewSubscriptionUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewSubscriptionUpdate(
    request: Subscriptions.PreviewSubscriptionUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsPreviewResponse, Subscriptions.PreviewSubscriptionUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionUpdateSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsPreviewResponseSchema },
        errorFactory: Subscriptions.PreviewSubscriptionUpdateError,
      },
      options,
    );
  }

  /**
   * Resume a paused subscription
   *
   * @remarks
   * Resumes a paused subscription using its ID. Only `paused` subscriptions can be resumed. If an
   * `active` subscription has a scheduled change to pause in the future, use this operation to set
   * or change the resume date.
   *
   * You can't resume a `canceled` subscription.
   *
   * On resume, Paddle bills for a subscription immediately by default. Subscription billing dates
   * are recalculated based on the resume date. Use the `on_resume` field to change this behavior.
   *
   * If successful, Paddle returns a copy of the updated subscription entity:
   *
   * * When resuming a `paused` subscription immediately, the subscription status is `active`, and
   *   billing dates are updated to reflect the resume date.
   * * When scheduling a `paused` subscription to resume on a date in the future, the subscription
   *   status is `paused`, and `scheduled_change.action` is `resume` with
   *   `scheduled_change.effective_at` set to the scheduled resume date.
   * * When changing the resume date for an `active` subscription that's scheduled to pause, the
   *   subscription status remains `active`, and `scheduled_change.resume_at` is updated on the
   *   existing `pause` scheduled change.
   *
   * This operation may result in an immediate charge, so responses may take longer than usual while
   * a payment attempt is processed.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.ResumeSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resumeSubscription(
    request: Subscriptions.ResumeSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsResumeResponse, Subscriptions.ResumeSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/resume"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.nullable(s.lazy(() => subscriptionResumeSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionsResumeResponseSchema },
        errorFactory: Subscriptions.ResumeSubscriptionError,
      },
      options,
    );
  }

  /**
   * Update a subscription
   *
   * @remarks
   * Updates a subscription using its ID.
   *
   * When making changes to items or the next billing date for a subscription, you must include the
   * `proration_billing_mode` field to tell Paddle how to bill for those changes.
   *
   * Send the complete list of items that you'd like to be on a subscription — including existing
   * items. If you omit items, they're removed from the subscription.
   *
   * For each item, send `price_id` and `quantity`. Paddle responds with the full price object for
   * each price. If you're updating an existing item, you can omit the `quantity` if you don't want
   * to update it.
   *
   * If successful, your response includes a copy of the updated subscription entity. When an update
   * results in an immediate charge, responses may take longer than usual while a payment attempt is
   * processed.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Subscriptions.UpdateSubscriptionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSubscription(
    request: Subscriptions.UpdateSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsResponse2, Subscriptions.UpdateSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionUpdateSchema },
      },
      {
        success: { kind: "json", schema: subscriptionsResponse2Schema },
        errorFactory: Subscriptions.UpdateSubscriptionError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type ActivateSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
  };

  export class ActivateSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ActivateSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CancelSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionCancel;
  };

  export class CancelSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CancelSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateSubscriptionChargeRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionCharge;
  };

  export class CreateSubscriptionChargeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateSubscriptionChargeError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    /**
     * Include related entities in the response. Use a comma-separated list to specify multiple
     * entities.
     */
    include?: SubscriptionIncludeEnum[];
  };

  export class GetSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSubscriptionUpdatePaymentMethodTransactionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
  };

  export class GetSubscriptionUpdatePaymentMethodTransactionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetSubscriptionUpdatePaymentMethodTransactionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSubscriptionsRequest = {
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
     * Return entities related to the specified address. Use a comma-separated list to specify
     * multiple address IDs.
     */
    addressId?: string[];
    /** Return entities that match the specified collection mode. */
    collectionMode?: CollectionModeQuery;
    /**
     * Return entities related to the specified customer. Use a comma-separated list to specify
     * multiple customer IDs.
     */
    customerId?: string[];
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
     * Return entities related to the specified price. Use a comma-separated list to specify
     * multiple price IDs.
     */
    priceId?: string[];
    /**
     * Return subscriptions that have a scheduled change. Use a comma-separated list to specify
     * multiple scheduled change actions.
     */
    scheduledChangeAction?: ScheduledChangeActionQuery[];
    /**
     * Return entities next billed at a specific time. Pass `null` to return entities with no next
     * billing date.
     */
    nextBilledAt?: string[] | null;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: SubscriptionStatusQuery[];
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListSubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSubscriptionsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PauseSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionPause;
  };

  export class PauseSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<PauseSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PreviewSubscriptionChargeRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionCharge;
  };

  export class PreviewSubscriptionChargeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<PreviewSubscriptionChargeError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PreviewSubscriptionUpdateRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionUpdate;
  };

  export class PreviewSubscriptionUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<PreviewSubscriptionUpdateError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResumeSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionResume | null;
  };

  export class ResumeSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ResumeSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSubscriptionRequest = {
    /** Paddle ID of the subscription entity to work with. */
    subscriptionId: string;
    body: SubscriptionUpdate;
  };

  export class UpdateSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateSubscriptionError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
