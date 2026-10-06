import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import {
  notificationSettingTrafficSourceSchema,
  type NotificationSettingTrafficSource,
} from "./notification-setting-traffic-source.js";

/** Represents a notification destination when updating notification destinations. */
export type NotificationSettingUpdate = {
  /** Short description for this notification destination. Shown in the Paddle Dashboard. */
  description?: string;
  /** Webhook endpoint URL or email address. */
  destination?: string;
  /** Whether Paddle should try to deliver events to this notification destination. */
  active?: boolean;
  /**
   * API version that returned objects for events should conform to. Must be a valid version of the
   * Paddle API. Can't be a version older than your account default. Defaults to your account
   * default if omitted.
   */
  apiVersion?: number;
  /** Whether potentially sensitive fields should be sent to this notification destination. */
  includeSensitiveFields?: boolean;
  /**
   * Subscribed events for this notification destination. When creating or updating a notification
   * destination, pass an array of event type names only. Paddle returns the complete event type
   * object.
   */
  subscribedEvents?: EventTypeName[];
  /**
   * Whether Paddle should deliver real platform events, simulation events or both to this
   * notification destination.
   */
  trafficSource?: NotificationSettingTrafficSource;
};

export const notificationSettingUpdateSchema: Schema<NotificationSettingUpdate> =
  s.object<NotificationSettingUpdate>({
    description: s.optional(s.string()),
    destination: s.optional(s.string()),
    active: s.optional(s.boolean()),
    apiVersion: s.optional(s.int()),
    includeSensitiveFields: s.optional(s.boolean()),
    subscribedEvents: s.optional(s.array(s.lazy(() => eventTypeNameSchema))),
    trafficSource: s.optional(s.lazy(() => notificationSettingTrafficSourceSchema)),
    _keysMap: {
      apiVersion: "api_version",
      includeSensitiveFields: "include_sensitive_fields",
      subscribedEvents: "subscribed_events",
      trafficSource: "traffic_source",
    },
  });
