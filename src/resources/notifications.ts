import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  notificationsReplayResponseSchema,
  type NotificationsReplayResponse,
} from "../models/notifications-replay-response.js";
import { notificationsResponseSchema, type NotificationsResponse } from "../models/notifications-response.js";
import {
  notificationsResponse1Schema,
  type NotificationsResponse1,
} from "../models/notifications-response1.js";
import { status3Schema, type Status3 } from "../models/status3.js";
import type { Servers } from "../servers.js";

/**
 * Notification entities describe a notification for an event that happened in your Paddle system.
 */
export class Notifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a notification
   *
   * @remarks
   * Returns a notification using its ID.
   *
   * Notifications older than 90 days aren't retained. If you try to get a notification that's no
   * longer retained, Paddle returns an error.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Notifications.GetNotificationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNotification(
    request: Notifications.GetNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsResponse1, Notifications.GetNotificationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/{notification_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "notification_id", value: request.notificationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsResponse1Schema },
        errorFactory: Notifications.GetNotificationError,
      },
      options,
    );
  }

  /**
   * List notifications
   *
   * @remarks
   * Returns a paginated list of notifications created in the last 90 days. Use the query parameters
   * to page through results.
   *
   * Notifications older than 90 days aren't retained.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link Notifications.ListNotificationsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listNotifications(
    request: Notifications.ListNotificationsRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsResponse, Notifications.ListNotificationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.number(), 50) },
          {
            name: "notification_setting_id",
            value: request.notificationSettingId,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.array(s.lazy(() => status3Schema))) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsResponseSchema },
        errorFactory: Notifications.ListNotificationsError,
      },
      options,
    );
  }

  /**
   * Replay a notification
   *
   * @remarks
   * Attempts to resend a `delivered` or `failed` notification using its ID.
   *
   * Paddle creates a new notification entity for the replay, related to the same `event_id`. Your
   * response includes the new `notification_id` of the created notification.
   *
   * Notifications older than 90 days aren't retained. If you try to replay a notification that's no
   * longer retained, Paddle returns an error.
   *
   * Only notifications with the `origin` of `event` can be replayed. You can't replay a
   * notification created for a replay.
   *
   * @returns The request has been accepted for processing, but processing has not yet completed.
   *
   * @throws {@link Notifications.ReplayNotificationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replayNotification(
    request: Notifications.ReplayNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsReplayResponse, Notifications.ReplayNotificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/notifications/{notification_id}/replay"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "notification_id", value: request.notificationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsReplayResponseSchema },
        errorFactory: Notifications.ReplayNotificationError,
      },
      options,
    );
  }
}

export namespace Notifications {
  export type GetNotificationRequest = {
    /** Paddle ID of the notification entity to work with. */
    notificationId: string;
  };

  export class GetNotificationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetNotificationError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListNotificationsRequest = {
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
     * Return entities related to the specified notification destination. Use a comma-separated list
     * to specify multiple notification destination IDs.
     */
    notificationSettingId?: string[];
    /**
     * Order returned entities by the specified field and direction (`[ASC]` or `[DESC]`). For
     * example, `?order_by=id[ASC]`.
     *
     * Valid fields for ordering: `id`.
     *
     * @default "id[DESC]"
     */
    orderBy?: string;
    /** Return entities that match a search query. Searches `id` and `type` fields. */
    search?: string;
    /**
     * Return entities that match the specified status. Use a comma-separated list to specify
     * multiple status values.
     */
    status?: Status3[];
    /**
     * Return entities that contain the Paddle ID specified. Pass a transaction, customer, or
     * subscription ID.
     */
    filter?: string;
    /** Return entities up to a specific time. Pass an RFC 3339 datetime string. */
    to?: string;
    /** Return entities from a specific time. Pass an RFC 3339 datetime string. */
    from?: string;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListNotificationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListNotificationsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ReplayNotificationRequest = {
    /** Paddle ID of the notification entity to work with. */
    notificationId: string;
  };

  export class ReplayNotificationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ReplayNotificationError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
