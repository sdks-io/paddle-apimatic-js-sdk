import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  subscriptionHistoryActionQuerySchema,
  type SubscriptionHistoryActionQuery,
} from "../models/subscription-history-action-query.js";
import {
  subscriptionHistoryActorTypeQuerySchema,
  type SubscriptionHistoryActorTypeQuery,
} from "../models/subscription-history-actor-type-query.js";
import {
  subscriptionHistoryReasonQuerySchema,
  type SubscriptionHistoryReasonQuery,
} from "../models/subscription-history-reason-query.js";
import {
  subscriptionHistorySourceQuerySchema,
  type SubscriptionHistorySourceQuery,
} from "../models/subscription-history-source-query.js";
import {
  subscriptionsHistoryResponseSchema,
  type SubscriptionsHistoryResponse,
} from "../models/subscriptions-history-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionHistoryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List history for a subscription
   *
   * @remarks
   * Returns a paginated list of history entries for a subscription. Use the query parameters to
   * filter and page through results.
   *
   * Subscription history records the changes made to a subscription over its lifetime, so you can
   * see what changed, when it happened, where it originated, and who made the change. Each change
   * is a separate history entry, and some entries also include a reason.
   *
   * Paddle began recording subscription history on June 29, 2026. For subscriptions that existed
   * before then, Paddle automatically creates `subscription_created` and `subscription_canceled`
   * entries and attempts to infer details from the subscription's initial state.
   *
   * History entries are ordered by newest first by default (`occurred_at` in descending order).
   *
   * @returns The request has succeeded.
   *
   * @throws {@link SubscriptionHistoryApi.ListSubscriptionHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSubscriptionHistory(
    request: SubscriptionHistoryApi.ListSubscriptionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionsHistoryResponse, SubscriptionHistoryApi.ListSubscriptionHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscriptions/{subscription_id}/history"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [
          {
            name: "action",
            value: request.action,
            schema: s.optional(s.array(s.lazy(() => subscriptionHistoryActionQuerySchema))),
          },
          {
            name: "source",
            value: request.source,
            schema: s.optional(s.array(s.lazy(() => subscriptionHistorySourceQuerySchema))),
          },
          {
            name: "actor_type",
            value: request.actorType,
            schema: s.optional(s.array(s.lazy(() => subscriptionHistoryActorTypeQuerySchema))),
          },
          { name: "actor_id", value: request.actorId, schema: s.optional(s.array(s.string())) },
          {
            name: "reason",
            value: request.reason,
            schema: s.optional(s.array(s.lazy(() => subscriptionHistoryReasonQuerySchema))),
          },
          { name: "occurred_at", value: request.occurredAt, schema: s.optional(s.string()) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "occurred_at[DESC]") },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionsHistoryResponseSchema },
        errorFactory: SubscriptionHistoryApi.ListSubscriptionHistoryError,
      },
      options,
    );
  }
}

export namespace SubscriptionHistoryApi {
  export type ListSubscriptionHistoryRequest = {
    subscriptionId: string;
    /**
     * Return history entries that match the specified action. Use a comma-separated list to specify
     * multiple action values.
     */
    action?: SubscriptionHistoryActionQuery[];
    /**
     * Return history entries that match the specified source. Use a comma-separated list to specify
     * multiple source values.
     */
    source?: SubscriptionHistorySourceQuery[];
    /**
     * Return history entries that match the specified actor type. Use a comma-separated list to
     * specify multiple actor type values.
     */
    actorType?: SubscriptionHistoryActorTypeQuery[];
    /**
     * Return history entries that match the specified actor ID. Use a comma-separated list to
     * specify multiple actor ID values. Only applicable if `actor_type` is also selected.
     */
    actorId?: string[];
    /**
     * Return history entries that match the specified reason. Use a comma-separated list to specify
     * multiple reason values.
     */
    reason?: SubscriptionHistoryReasonQuery[];
    /**
     * Return entities that occurred at a specific time. Use `[LTE]` (less than or equal to) or
     * `[GTE]` (greater than or equal to) operators with an RFC 3339 datetime string. For example,
     * `occurred_at[LTE]=2023-04-18T17:03:26` or `occurred_at[GTE]=2023-04-18T17:03:26`.
     */
    occurredAt?: string;
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
     * example, `?order_by=occurred_at[DESC]`.
     *
     * Valid fields for ordering: `occurred_at`.
     *
     * @default "occurred_at[DESC]"
     */
    orderBy?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListSubscriptionHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListSubscriptionHistoryError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
