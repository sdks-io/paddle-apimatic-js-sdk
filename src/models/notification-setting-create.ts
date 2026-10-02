import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import {
  NotificationSettingTrafficSource,
  notificationSettingTrafficSourceSchema,
} from "./notification-setting-traffic-source.js";
import { notificationSettingTypeSchema, type NotificationSettingType } from "./notification-setting-type.js";

/** Represents a notification destination when creating notification destinations. */
export type NotificationSettingCreate = {
  id?: string;
  /** Short description for this notification destination. Shown in the Paddle Dashboard. */
  description: string;
  /** Where notifications should be sent for this destination. */
  type: NotificationSettingType;
  /** Webhook endpoint URL or email address. */
  destination: string;
  /** Whether Paddle should try to deliver events to this notification destination. @default true */
  active?: boolean;
  /**
   * API version that returned objects for events should conform to. Must be a valid version of the
   * Paddle API. Can't be a version older than your account default. If omitted, defaults to your
   * account default version.
   */
  apiVersion?: number;
  /**
   * Whether potentially sensitive fields should be sent to this notification destination. If
   * omitted, defaults to `false`.
   *
   * @default false
   */
  includeSensitiveFields?: boolean;
  /**
   * Subscribed events for this notification destination. When creating or updating a notification
   * destination, pass an array of event type names only. Paddle returns the complete event type
   * object.
   */
  subscribedEvents: EventTypeName[];
  /**
   * Webhook destination secret key, prefixed with `pdl_ntfset_`. Used for signature verification.
   */
  endpointSecretKey?: string;
  /**
   * Whether Paddle should deliver real platform events, simulation events or both to this
   * notification destination. If omitted, defaults to `platform`.
   *
   * @default NotificationSettingTrafficSource.Platform
   */
  trafficSource?: NotificationSettingTrafficSource;
};

export const notificationSettingCreateSchema: Schema<NotificationSettingCreate> =
  s.object<NotificationSettingCreate>({
    id: s.optional(s.string()),
    description: s.string(),
    type: notificationSettingTypeSchema,
    destination: s.string(),
    active: s.defaulted(s.boolean(), true),
    apiVersion: s.optional(s.number()),
    includeSensitiveFields: s.defaulted(s.boolean(), false),
    subscribedEvents: s.array(s.lazy(() => eventTypeNameSchema)),
    endpointSecretKey: s.optional(s.string()),
    trafficSource: s.defaulted(
      notificationSettingTrafficSourceSchema,
      NotificationSettingTrafficSource.Platform,
    ),
    _keysMap: {
      apiVersion: "api_version",
      includeSensitiveFields: "include_sensitive_fields",
      subscribedEvents: "subscribed_events",
      endpointSecretKey: "endpoint_secret_key",
      trafficSource: "traffic_source",
    },
  });
