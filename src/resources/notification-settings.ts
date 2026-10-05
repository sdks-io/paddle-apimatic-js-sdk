import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  notificationSettingCreateSchema,
  type NotificationSettingCreate,
} from "../models/notification-setting-create.js";
import {
  notificationSettingTrafficSourceSchema,
  type NotificationSettingTrafficSource,
} from "../models/notification-setting-traffic-source.js";
import {
  notificationSettingUpdateSchema,
  type NotificationSettingUpdate,
} from "../models/notification-setting-update.js";
import {
  notificationSettingsResponseSchema,
  type NotificationSettingsResponse,
} from "../models/notification-settings-response.js";
import {
  notificationSettingsResponse1Schema,
  type NotificationSettingsResponse1,
} from "../models/notification-settings-response1.js";
import type { Servers } from "../servers.js";

/**
 * Notification settings entities describe subscriptions to events. They're also called notification
 * destinations.
 */
export class NotificationSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a notification setting
   *
   * @remarks
   * Creates a new notification setting (notification destination).
   *
   * Pass an array of event type names to `subscribed_events` to say which events you'd like to
   * subscribe to. Paddle responds with the full event type object for each event type.
   *
   * If successful, your response includes a copy of the new notification setting entity. Use the
   * returned `endpoint_secret_key` for webhook signature verification.
   *
   * @returns The request has succeeded and a new resource has been created as a result.
   *
   * @throws {@link NotificationSettings.CreateNotificationSettingError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNotificationSetting(
    request: NotificationSettings.CreateNotificationSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSettingsResponse1, NotificationSettings.CreateNotificationSettingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/notification-settings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: notificationSettingCreateSchema },
      },
      {
        success: { kind: "json", schema: notificationSettingsResponse1Schema },
        errorFactory: NotificationSettings.CreateNotificationSettingError,
      },
      options,
    );
  }

  /**
   * Delete a notification setting
   *
   * @remarks
   * Deletes a notification setting (notification destination) using its ID.
   *
   * When you delete a notification setting, it's permanently removed from your account. Paddle
   * stops sending events to your destination, and you'll lose access to all the logs for this
   * notification setting.
   *
   * There's no way to recover a deleted notification setting. Deactivate a notification setting
   * using the update notification setting operation if you'll need access to the logs or want to
   * reactivate later on.
   *
   * @returns There is no content to send for this request, but the headers may be useful.
   *
   * @throws {@link NotificationSettings.DeleteNotificationSettingError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteNotificationSetting(
    request: NotificationSettings.DeleteNotificationSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NotificationSettings.DeleteNotificationSettingError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/notification-settings/{notification_setting_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "notification_setting_id", value: request.notificationSettingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NotificationSettings.DeleteNotificationSettingError,
      },
      options,
    );
  }

  /**
   * Get a notification setting
   *
   * @remarks
   * Returns a notification setting (notification destination) using its ID.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link NotificationSettings.GetNotificationSettingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNotificationSetting(
    request: NotificationSettings.GetNotificationSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSettingsResponse1, NotificationSettings.GetNotificationSettingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notification-settings/{notification_setting_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "notification_setting_id", value: request.notificationSettingId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationSettingsResponse1Schema },
        errorFactory: NotificationSettings.GetNotificationSettingError,
      },
      options,
    );
  }

  /**
   * List notification settings
   *
   * @remarks
   * Returns a paginated list of notification settings (notification destinations).
   *
   * @returns The request has succeeded.
   *
   * @throws {@link NotificationSettings.ListNotificationSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listNotificationSettings(
    request: NotificationSettings.ListNotificationSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSettingsResponse, NotificationSettings.ListNotificationSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notification-settings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 200) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "id[DESC]") },
          { name: "active", value: request.active, schema: s.optional(s.boolean()) },
          {
            name: "traffic_source",
            value: request.trafficSource,
            schema: s.optional(s.lazy(() => notificationSettingTrafficSourceSchema)),
          },
        ],
        headers: [{ name: "Skip-Count", value: request.skipCount, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationSettingsResponseSchema },
        errorFactory: NotificationSettings.ListNotificationSettingsError,
      },
      options,
    );
  }

  /**
   * Update a notification setting
   *
   * @remarks
   * Updates a notification setting (notification destination) using its ID.
   *
   * When updating subscribed events, send the complete list of event types that you'd like to
   * subscribe to — including existing event types. If you omit event types, they're removed from
   * the notification setting.
   *
   * You only need to pass an event type name. Paddle responds with the full event type object for
   * each event type.
   *
   * If successful, your response includes a copy of the updated notification setting entity.
   *
   * @returns The request has succeeded.
   *
   * @throws {@link NotificationSettings.UpdateNotificationSettingError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaddleApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateNotificationSetting(
    request: NotificationSettings.UpdateNotificationSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationSettingsResponse1, NotificationSettings.UpdateNotificationSettingError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/notification-settings/{notification_setting_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "notification_setting_id", value: request.notificationSettingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: notificationSettingUpdateSchema },
      },
      {
        success: { kind: "json", schema: notificationSettingsResponse1Schema },
        errorFactory: NotificationSettings.UpdateNotificationSettingError,
      },
      options,
    );
  }
}

export namespace NotificationSettings {
  export type CreateNotificationSettingRequest = {
    body: NotificationSettingCreate;
  };

  export class CreateNotificationSettingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateNotificationSettingError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteNotificationSettingRequest = {
    /** Paddle ID of the notification setting entity (notification destination) to work with. */
    notificationSettingId: string;
  };

  export class DeleteNotificationSettingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<DeleteNotificationSettingError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetNotificationSettingRequest = {
    /** Paddle ID of the notification setting entity (notification destination) to work with. */
    notificationSettingId: string;
  };

  export class GetNotificationSettingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GetNotificationSettingError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListNotificationSettingsRequest = {
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
     * Default: `200`; Maximum: `200`.
     *
     * @default 200
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
    /** Determine whether returned entities are active (`true`) or not (`false`). */
    active?: boolean;
    /** Return entities that match the specified traffic source. */
    trafficSource?: NotificationSettingTrafficSource;
    /**
     * Set to `true` to skip the count query on list operations. When set,
     * `meta.pagination.estimated_total` returns `-1` instead of an exact count.
     */
    skipCount?: string;
  };

  export class ListNotificationSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ListNotificationSettingsError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateNotificationSettingRequest = {
    /** Paddle ID of the notification setting entity (notification destination) to work with. */
    notificationSettingId: string;
    body: NotificationSettingUpdate;
  };

  export class UpdateNotificationSettingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateNotificationSettingError> = [
      { on: "default", kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
