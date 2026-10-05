import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  notificationsLogsResponseSchema,
  type NotificationsLogsResponse,
} from "../models/notifications-logs-response.js";
import type { Servers } from "../servers.js";

/**
 * Notification logs are records of an attempt to deliver a notification.
 */
export class NotificationLogs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List logs for a notification
   *
   * @remarks
   * Returns a paginated list of notification logs for a notification. A log includes information
   * about delivery attempts, including failures.
   *
   * Notifications older than 90 days aren't retained. If you try to list logs for a notification
   * that's no longer retained, Paddle returns an error.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link NotificationLogs.ListNotificationLogsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listNotificationLogs(
    request: NotificationLogs.ListNotificationLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsLogsResponse, NotificationLogs.ListNotificationLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications/{notification_id}/logs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "notification_id", value: request.notificationId, schema: s.string() }],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsLogsResponseSchema },
        errorFactory: NotificationLogs.ListNotificationLogsError,
      },
      options,
    );
  }
}

export namespace NotificationLogs {
  export type ListNotificationLogsRequest = {
    /** Paddle ID of the notification entity to work with. */
    notificationId: string;
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
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListNotificationLogsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListNotificationLogsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
